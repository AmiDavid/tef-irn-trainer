/* The learner's AI question bank (build 37).
   Every AI question made for this account is kept in Supabase (table tef_ai_questions, own rows only, RLS) and cached on the
   device in IndexedDB, so the bank can grow to thousands of questions without weighing on the synced progress (which used to
   carry them in S.aiBank) and still works offline.
   Order inside a subject = row id, the same on every device, so the answer history (keyed by a question's position) stays right.
   A question is kept on the device at once; if saving it fails it stays « pending » and is sent at the next sync.
   API (window.TEF_AIBANK): items(tid) → [x], add([{tid, also?, x}]) → Promise<[{tid, x}]>, count(tid?), pending(), sync(). */
(()=>{'use strict';
const C=()=>window.TEF_CONNECTED,app=()=>window.TEF_APP,S=()=>app()?.S||{};
const GUEST=window.TEF_GUEST||'',UIDK='tef-aibank-uid',DBN='tef-aibank',ST='q',TABLE='tef_ai_questions';
const TID=/^g\d{1,3}$/;
const norm=s=>String(s||'').replace(/[  ]/g,' ').replace(/['`ʼ]/g,'’').replace(/\s+/g,' ').trim().replace(/\s*[.!?…]+$/,'').toLowerCase();
/* 2 × 53-bit hash (cyrb53) of the question's text: short, URL-safe, the same on every device. */
function cyrb(str,seed){let h1=0xdeadbeef^seed,h2=0x41c6ce57^seed;for(let i=0;i<str.length;i++){const c=str.charCodeAt(i);h1=Math.imul(h1^c,2654435761);h2=Math.imul(h2^c,1597334677)}
  h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);
  return (4294967296*(2097151&h2)+(h1>>>0)).toString(36)}
const sigOf=x=>{const t=[x.type,norm(x.instruction),norm(x.prompt||(x.words||[]).join(' ')),norm((x.answers||[])[0]??(x.choices||[])[x.answer]??'')].join('|');return 'h'+cyrb(t,1)+cyrb(t,7)};
const bytes=x=>{try{return new TextEncoder().encode(JSON.stringify(x)).length}catch{return 1e9}};
const B={ready:false};
let recs=[],byTid=new Map(),bySig=new Map(),byId=new Map(),uid=null,seq=0,lastSync=0;

/* ---- IndexedDB: any failure only means no device cache (the account still has everything) ---- */
let dbp=null;
function db(){return dbp||(dbp=new Promise((ok,no)=>{try{const r=indexedDB.open(DBN,1);r.onupgradeneeded=()=>{if(!r.result.objectStoreNames.contains(ST))r.result.createObjectStore(ST,{keyPath:'k'})};r.onsuccess=()=>ok(r.result);r.onerror=()=>no(r.error)}catch(e){no(e)}}))}
async function dbAll(){try{const d=await db();return await new Promise((ok,no)=>{const q=d.transaction(ST).objectStore(ST).getAll();q.onsuccess=()=>ok(q.result||[]);q.onerror=()=>no(q.error)})}catch{return []}}
async function dbPut(rows,del=[]){if(!rows.length&&!del.length)return;try{const d=await db();await new Promise((ok,no)=>{const t=d.transaction(ST,'readwrite'),s=t.objectStore(ST);del.forEach(k=>s.delete(k));rows.forEach(r=>s.put(r));t.oncomplete=ok;t.onerror=()=>no(t.error)})}catch{}}

/* ---- memory: this account's questions, by subject, in bank order ---- */
function rebuild(){
  byTid=new Map();bySig=new Map();byId=new Map();
  const mine=recs.filter(r=>r.uid===uid).sort((a,b)=>(a.id==null)-(b.id==null)||(a.id??0)-(b.id??0)||(a.seq??0)-(b.seq??0));
  for(const r of mine){if(!byTid.has(r.tid))byTid.set(r.tid,[]);byTid.get(r.tid).push(r.x);bySig.set(r.sig,r);if(r.id!=null)byId.set(r.id,r)}
  window.TEF_TOPIC?.invalidate?.();
  dispatchEvent(new CustomEvent('tef:aibank'));
}
const remote=()=>!GUEST&&!!uid&&!!C()?.supabase&&C()?.session?.user?.id===uid;
const remember=()=>{if(GUEST)return;try{uid?localStorage.setItem(UIDK,uid):localStorage.removeItem(UIDK)}catch{}};
B.items=tid=>byTid.get(tid)||[];
B.count=tid=>tid?B.items(tid).length:bySig.size;
B.pending=()=>recs.filter(r=>r.uid===uid&&r.id==null).length;

/* All work with the account runs one step at a time, after the device cache has loaded. */
const boot=(async()=>{recs=await dbAll();uid=GUEST?'guest:'+GUEST:(()=>{try{return localStorage.getItem(UIDK)}catch{return null}})();rebuild();B.ready=true})();
let chain=boot;
const locked=fn=>(chain=chain.then(fn,fn).catch(e=>console.warn('AI bank:',e?.message||e)));

/* ---- add: kept on the device at once, then saved to the account ---- */
B.add=async(list,opt={})=>{
  await boot;
  const out=[],rows=[],seen=new Set();
  for(const o of list||[]){
    if(!o?.x?.type||!TID.test(o.tid||''))continue;
    const x={...o.x,ai:true};delete x.topics;
    const also=[...new Set((o.also||[]).filter(t=>t!==o.tid&&TID.test(t)))];
    if(also.length)x.also=also;else delete x.also;
    if(bytes(x)>5000)continue;
    let s=sigOf(x);
    if(opt.keep){const b=s;for(let k=2;seen.has(s);k++)s=b+'-'+k} // moving old questions: repeats are kept, so positions never move
    else if(seen.has(s))continue;
    seen.add(s);if(bySig.has(s))continue;
    const r={k:`${uid??'local'}:p${Date.now().toString(36)}${(seq++).toString(36)}`,uid,tid:o.tid,sig:s,x,id:null,seq:Date.now()*1000+seq%1000};
    rows.push(r);out.push({tid:o.tid,x});
  }
  if(!rows.length)return out;
  recs.push(...rows);rebuild();await dbPut(rows);
  if(remote())locked(flush);
  return out;
};

/* Send the pending questions. One the server refuses (bad data) is dropped; a network or sign-in problem keeps them for later. */
const refused=e=>/^(22|23)/.test(String(e?.code||''));
async function flush(){
  if(!remote())return;
  const pend=recs.filter(r=>r.uid===uid&&r.id==null);if(!pend.length)return;
  const sb=C().supabase,row=r=>({topic_id:r.tid,also:r.x.also||[],sig:r.sig,q:r.x}),opts={onConflict:'user_id,sig',ignoreDuplicates:true};
  const ids=new Map(),drop=[];
  const {data,error}=await sb.from(TABLE).upsert(pend.map(row),opts).select('id,sig');
  if(error&&!refused(error))throw error;
  if(error){for(const r of pend){const q=await sb.from(TABLE).upsert([row(r)],opts).select('id,sig');if(q.error){if(refused(q.error))drop.push(r);else throw q.error}else(q.data||[]).forEach(d=>ids.set(d.sig,d.id))}}
  else (data||[]).forEach(d=>ids.set(d.sig,d.id));
  /* Already in the account (saved from another device, or by an earlier try): look their ids up. */
  const missing=pend.filter(r=>!ids.has(r.sig)&&!drop.includes(r)).map(r=>r.sig);
  for(let i=0;i<missing.length;i+=50){const q=await sb.from(TABLE).select('id,sig').eq('user_id',uid).in('sig',missing.slice(i,i+50));if(q.error)throw q.error;(q.data||[]).forEach(d=>ids.set(d.sig,d.id))}
  const put=[],del=drop.map(r=>r.k);
  for(const r of pend){const id=ids.get(r.sig);if(id==null)continue;if(byId.has(id)){if(byId.get(id)!==r)drop.push(r),del.push(r.k);continue}del.push(r.k);r.id=id;r.k=`${uid}:${id}`;put.push(r)}
  if(drop.length)recs=recs.filter(r=>!drop.includes(r));
  await dbPut(put,del);rebuild();
}
/* Fetch this account's questions that the device does not have yet (newer than the newest one here). */
async function pull(){
  if(!remote())return;
  const sb=C().supabase;let from=0;for(const r of recs)if(r.uid===uid&&r.id!=null&&r.id>from)from=r.id;
  for(let page=0;page<200;page++){
    const {data,error}=await sb.from(TABLE).select('id,topic_id,also,sig,q').eq('user_id',uid).gt('id',from).order('id').limit(500);
    if(error)throw error;if(!data?.length)break;
    const put=[],del=[];
    for(const d of data){
      if(byId.has(d.id)||!TID.test(d.topic_id||''))continue;
      const mine=bySig.get(d.sig);
      if(mine){if(mine.id==null){del.push(mine.k);mine.id=d.id;mine.k=`${uid}:${d.id}`;put.push(mine);byId.set(d.id,mine)}continue} // our pending copy was saved after all
      const x={...(d.q||{}),ai:true};if(d.also?.length)x.also=d.also;else delete x.also;
      const r={k:`${uid}:${d.id}`,uid,tid:d.topic_id,sig:d.sig,x,id:d.id};
      recs.push(r);put.push(r);byId.set(d.id,r);bySig.set(d.sig,r);
    }
    await dbPut(put,del);from=data[data.length-1].id;if(data.length<500)break;
  }
}
/* Before build 37 the questions lived in the synced progress (S.aiBank): move them, in order, then drop them from it. */
async function migrate(){
  const old=S().aiBank;if(!remote()||!old||typeof old!=='object')return;
  const list=[];for(const [tid,arr] of Object.entries(old))for(const x of (Array.isArray(arr)?arr:[]))if(x&&typeof x==='object')list.push({tid,also:x.also,x});
  if(list.length)await B.add(list,{keep:true});
  await flush();
  if(B.pending())return; // not everything is saved yet: the next sync tries again
  delete S().aiBank;S().aiMigrated=Date.now();app()?.save?.();
}
B.sync=()=>locked(async()=>{
  const id=GUEST?'guest:'+GUEST:(C()?.session?.user?.id||null);
  if(id!==uid){uid=id;remember();rebuild()}
  if(!remote())return;
  lastSync=Date.now();
  await pull();await migrate();await flush();rebuild();
});

addEventListener('tef:session',()=>B.sync());
addEventListener('online',()=>{if(remote())locked(flush)});
/* Back to the app (phone ↔ computer): bring in what the other device made. */
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&remote()&&Date.now()-lastSync>60e3)B.sync()});
window.TEF_AIBANK=B;
})();
