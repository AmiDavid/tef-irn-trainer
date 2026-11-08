/* TEF B2 Coach — « Leçon du jour »: one grammar topic per day, in learning order.
   Steps: 1 read the lesson · 2 copy it into the notebook · 3 basic questions · 4 review of earlier topics (from day 2).
   An unfinished day carries over to the next day; review questions are picked by spacing (yesterday, ~3, ~7, ~14, ~28
   lessons ago) and by weakness, preferring questions answered wrong or never seen. « Encore 10 questions » adds more. */
(()=>{
'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const app=()=>window.TEF_APP,S=()=>app().S,D=()=>app().D;
const esc=x=>String(x??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
/* Daily amounts: questions on the new topic (b) and review questions (r). */
const SIZES={10:{b:10,r:8},15:{b:15,r:12},25:{b:25,r:20}};
const MORE=10;

/* Local calendar day (Paris time on his phone), overridable in tests. */
const localDay=()=>{if(window.__TEF_TODAY__)return window.__TEF_TODAY__;const d=new Date();return new Date(d.getTime()-d.getTimezoneOffset()*6e4).toISOString().slice(0,10)};
const dayDiff=(a,b)=>Math.round((Date.parse(b)-Date.parse(a))/864e5);
const frDate=iso=>new Date(iso+'T12:00:00').toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'});
const path=()=>D().grammar.slice().sort((a,b)=>(a.order??999)-(b.order??999)).map(g=>g.id);
const card=id=>D().grammar.find(g=>g.id===id);
const items=id=>window.TEF_TOPIC?TEF_TOPIC.practiceItems(id):[];
const lvl=(id,i)=>window.TEF_TOPIC?TEF_TOPIC.levelOf(id,i):1;

function C(){
  const s=S();s.course=s.course||{};const c=s.course;
  c.done=c.done||{};c.seq=c.seq||[];c.qlog=c.qlog||{};c.lastReview=c.lastReview||{};
  if(!SIZES[c.size])c.size=15;
  return c;
}
const size=()=>SIZES[C().size];
const save=()=>app().save();

/* ---------- the day ---------- */
function newDay(topicId,date){
  const c=C();
  c.day={date,topicId,n:c.seq.length+1,read:false,copy:false,practice:null,review:null,complete:false};
  return c.day;
}
function ensureDay(){
  const c=C(),t=localDay();let d=c.day;
  if(d&&d.date===t&&(d.topicId===null||card(d.topicId)))return d;
  if(d&&!d.complete&&d.topicId&&card(d.topicId)){
    // Unfinished lesson: carry it over, keep the steps already done, pick fresh review questions.
    d.date=t;d.carried=true;if(!d.review)d.reviewKeys=null;save();return d;
  }
  const next=path().find(id=>!c.done[id]);
  d=next?newDay(next,t):(c.day={date:t,topicId:null,complete:true,finishedCourse:true});
  save();return d;
}
const earlier=d=>C().seq.filter(id=>id!==d.topicId);
const hasReview=d=>earlier(d).length>0;
function isComplete(d){return !!(d.read&&d.copy&&d.practice&&(d.review||!hasReview(d)))}
function checkComplete(){
  const c=C(),d=c.day;
  if(!d||d.complete||!d.topicId||!isComplete(d))return;
  d.complete=true;
  c.done[d.topicId]={date:d.date,practice:d.practice,review:d.review||null};
  if(!c.seq.includes(d.topicId))c.seq.push(d.topicId);
  S().done.lesson=true;
  save();app().toast('Leçon du jour terminée. Bravo !');
}
function mark(step){
  const d=ensureDay();if(!d.topicId)return;
  if(step==='read')d.read=true;
  if(step==='copy'){d.copy=true;d.read=true}
  save();checkComplete();render();
}
const stepDone=step=>{const d=C().day;return !!(d&&d.date===localDay()&&d[step])};
const isTodayTopic=id=>{const d=ensureDay();return !!d.topicId&&d.topicId===id&&!d.complete};

/* ---------- picking questions ---------- */
function logAnswer(tid,i,ok){if(typeof i!=='number')return;C().qlog[tid+':'+i]={t:Date.now(),d:localDay(),ok:ok?1:0}}
const seenCount=id=>Object.keys(C().qlog).filter(k=>k.startsWith(id+':')).length;
/* Candidates of one topic, best first: answered wrong, then never seen, then seen longest ago.
   Questions answered today come last (only used when nothing else is left). */
function ranked(id,avoid){
  const log=C().qlog,today=localDay();
  return items(id).map((x,i)=>{const L=log[id+':'+i];return {i,key:id+':'+i,lv:lvl(id,i),bad:!!x.flagged||!!window.TEF_TOPIC?.isFlagged?.(x),today:!!(L&&L.d===today),pr:!L?1:L.ok?2:0,t:L?L.t:0,r:Math.random()}})
    .filter(o=>!o.bad&&(!avoid||!avoid.has(o.key)))
    .sort((a,b)=>(a.today-b.today)||(a.pr-b.pr)||(a.t-b.t)||(a.r-b.r));
}
/* n questions on one topic, presented from easy to hard (used by topic series and « Encore »). */
function pickFrom(id,n,opt){
  const r=ranked(id),fresh=r.filter(o=>!o.today);
  return ((opt&&opt.fresh)?fresh:r).slice(0,n).sort((a,b)=>a.lv-b.lv||a.r-b.r).map(o=>o.i);
}
/* The day's basic set: mostly level 1, then level 2; level 3 only to fill up. Easy → hard. */
function pickBasic(id,n){
  const all=ranked(id),take=[],used=new Set();
  const grab=(pred,k)=>{for(const o of all){if(take.length>=n||k<=0)break;if(!used.has(o.key)&&pred(o)){take.push(o);used.add(o.key);k--}}};
  const n1=Math.round(n*.6);
  grab(o=>o.lv===1,n1);grab(o=>o.lv===2,n-take.length);grab(o=>o.lv<=2,n-take.length);grab(()=>true,n-take.length);
  return take.sort((a,b)=>a.lv-b.lv||a.r-b.r).map(o=>o.i);
}
function pickItems(id,q,avoid){
  return ranked(id,avoid).filter(o=>!o.today).slice(0,q).map(o=>o.key);
}
function pickReview(d,total){
  total=total||size().r;
  const L=earlier(d);if(!L.length)return [];
  const c=C(),today=localDay();
  const acc=id=>{const s=S().gstats[id];return s&&s.n>=4?s.ok/s.n:null};
  const scored=L.map((id,ix)=>{
    const age=L.length-ix; // 1 = the most recent lesson
    let s=age===1?6:age<=3?4:(age>=6&&age<=8)?4:(age>=13&&age<=15)?3:(age>=27&&age<=29)?3:1;
    const a=acc(id);if(a!==null){if(a<.6)s+=4;else if(a<.8)s+=2}
    const last=c.lastReview[id]||c.done[id]?.date;if(last)s+=Math.min(30,Math.max(0,dayDiff(last,today)))/10;
    return {id,s};
  }).sort((a,b)=>b.s-a.s);
  const quota=[4,3,3,2,2,2,1,1,1,1,1,1],alloc=new Map();let sum=0;
  scored.forEach((t,k)=>{if(sum>=total)return;const q=Math.min(Math.round((quota[k]??1)*total/12)||1,total-sum);alloc.set(t.id,q);sum+=q});
  for(let guard=0;sum<total&&guard<30;guard++){ // few earlier topics: give each a bit more
    let added=false;
    for(const t of scored){if(sum>=total)break;const cur=alloc.get(t.id)||0;if(cur<Math.min(scored.length<=2?total:Math.max(6,Math.ceil(total/2)),items(t.id).length)){alloc.set(t.id,cur+1);sum++;added=true}}
    if(!added)break;
  }
  const avoid=new Set(),keys=[];
  for(const [id,q] of alloc){const k=pickItems(id,q,avoid);k.forEach(x=>avoid.add(x));keys.push(...k)}
  return shuffle(keys);
}
function reviewKeys(d){
  if(!hasReview(d))return [];
  if(!d.reviewKeys||!d.reviewKeys.length){d.reviewKeys=pickReview(d);save()}
  return d.reviewKeys;
}

/* ---------- sessions ---------- */
function toToday(){history.replaceState(null,'',location.pathname+location.search);app().show('today')}
const asItems=(tid,idx)=>idx.map(i=>({tid,i,x:items(tid)[i]})).filter(o=>o.x);
const fromKeys=keys=>keys.map(k=>{const [tid,i]=k.split(':');return {tid,i:+i,x:items(tid)[+i]}}).filter(o=>o.x);
function start(kind){
  const d=ensureDay();
  let list,title,more;
  if(kind==='daily-basic'||kind==='daily-more'){
    if(!d.topicId)return false;
    const n=kind==='daily-basic'?size().b:MORE;
    list=asItems(d.topicId,kind==='daily-basic'?pickBasic(d.topicId,n):pickFrom(d.topicId,n,{fresh:true}));
    if(list.length<n)list=[...list,...(window.TEF_GEN?.make(d.topicId,n-list.length)||[])]; // bank used up today: automatic drills
    title=(kind==='daily-basic'?'Questions de base · ':'Encore des questions · ')+card(d.topicId).title;
    more={label:`Encore ${MORE} questions`,fn:()=>start('daily-more')};
  }else if(kind==='daily-review'||kind==='daily-review-more'){
    const keys=kind==='daily-review'&&!d.finishedCourse?reviewKeys(d):pickReview(d.finishedCourse?{topicId:null}:d,kind==='daily-review'?size().r:MORE);
    list=fromKeys(keys);
    title=kind==='daily-review'?'Révision des sujets précédents':'Encore de la révision';
    more={label:`Encore ${MORE} questions de révision`,fn:()=>start('daily-review-more')};
  }else return false;
  if(!list.length){app().toast('Plus de nouvelles questions pour aujourd’hui : reviens demain !');return false}
  const counts=kind==='daily-basic'||kind==='daily-review';
  window.TEF_TOPIC.session({key:kind,title,items:list,mixed:kind.startsWith('daily-review'),subtitle:true,
    back:{label:'Leçon du jour',fn:toToday},
    endPrimary:{label:'Retour à la leçon du jour',fn:toToday},more,extraMore:kind.startsWith('daily-review')?null:window.TEF_TOPIC.moreFor(d.topicId),
    onEnd:counts?({ok,total,by})=>{
      const day=C().day;if(!day||day.date!==localDay())return;
      if(kind==='daily-basic'&&!day.practice)day.practice={ok,total};
      if(kind==='daily-review'&&!day.review){day.review={ok,total,topics:Object.keys(by)};Object.keys(by).forEach(t=>C().lastReview[t]=localDay())}
      save();checkComplete();
    }:null});
  return true;
}
const resume=kind=>/^daily-(basic|more|review|review-more)$/.test(kind)?start(kind):false;

/* ---------- navigation helpers ---------- */
function advance(id){
  const c=C(),d=ensureDay();
  const next=id||path().find(x=>!c.done[x]&&x!==d.topicId);
  if(!next)return;
  if(!d.complete&&(d.read||d.copy||d.practice)&&!confirm('Changer le sujet du jour ? Les étapes déjà faites aujourd’hui ne seront pas gardées.'))return;
  newDay(next,localDay());save();render();
}
function setSize(n){
  const c=C(),d=c.day;if(!SIZES[n])return;
  c.size=n;if(d&&!d.review)d.reviewKeys=null;save();render();
}
function streak(){
  const dates=new Set(Object.values(C().done).map(v=>v.date));
  let n=0,t=localDay();
  if(!dates.has(t))t=new Date(Date.parse(t)-864e5).toISOString().slice(0,10);
  while(dates.has(t)){n++;t=new Date(Date.parse(t)-864e5).toISOString().slice(0,10)}
  return n;
}

/* ---------- card on the Today screen ---------- */
function render(){
  const root=$('#lessonDay');if(!root||!window.TEF_TOPIC)return;
  const c=C(),d=ensureDay(),P=path(),total=P.length,doneN=c.seq.length,st=streak(),sz=size();
  const mapHTML=`<details class="course-map"><summary>Mon parcours : ${doneN}/${total} sujets</summary><ol class="course-list">${P.map(id=>{const g=card(id),dn=c.done[id],cur=d.topicId===id&&!d.complete;return `<li class="${dn?'is-done':cur?'is-today':''}"><span class="cl-title">${esc(g.title)}</span><span class="cl-meta">${dn?`✓ ${esc(frDate(dn.date))}`:cur?'aujourd’hui':`<button class="link-btn" data-choose="${id}">Faire ce sujet</button>`}</span></li>`}).join('')}</ol></details>`;
  const sizeHTML=`<div class="ld-size"><span>Questions par jour</span><div class="seg" role="group" aria-label="Questions par jour">${Object.keys(SIZES).map(k=>`<button class="seg-btn ${+k===c.size?'active':''}" data-size="${k}" aria-pressed="${+k===c.size}">${k}</button>`).join('')}</div><span class="muted">+ ${sz.r} de révision</span></div>`;
  if(d.finishedCourse){
    root.innerHTML=`<div class="ld-head"><div class="plaque"><span class="plaque-top">Parcours terminé</span><span class="plaque-name">Les ${total} sujets</span></div></div><p>Tu as fait tous les sujets de grammaire. Continue chaque jour avec une révision mélangée.</p><div class="button-row"><button class="btn" id="ldReview">Révision du jour</button></div>${sizeHTML}${mapHTML}`;
    $('#ldReview').onclick=()=>start('daily-review');bindCommon(root);return;
  }
  const g=card(d.topicId),idx=P.indexOf(d.topicId)+1,rev=hasReview(d),bank=items(d.topicId).length;
  const revTopics=rev?[...new Set(reviewKeys(d).map(k=>k.split(':')[0]))].map(t=>card(t).title):[];
  const steps=[
    {k:'read',t:'Lire la leçon',s:'La règle, le tableau, les exemples et les astuces.',done:d.read,go:()=>TEF_TOPIC.open(d.topicId,'today'),cta:'Lire',again:'Revoir'},
    {k:'copy',t:'Recopier dans mon cahier',s:'La version cahier : tout le sujet sur une page, à recopier à la main.',done:d.copy,go:()=>TEF_TOPIC.copy(d.topicId,'today'),cta:'Ouvrir la version cahier',again:'Revoir'},
    {k:'practice',t:'Questions de base',s:d.practice?`Score : ${d.practice.ok}/${d.practice.total} · ${bank} exercices sur ce sujet en tout.`:`${Math.min(sz.b,bank)} questions sur ce sujet, des plus simples aux plus difficiles, corrigées tout de suite.`,done:!!d.practice,go:()=>start(d.practice?'daily-more':'daily-basic'),cta:'Commencer',again:`Encore ${MORE}`},
  ];
  if(rev)steps.push({k:'review',t:'Révision',s:d.review?`Score : ${d.review.ok}/${d.review.total}`:`${reviewKeys(d).length} questions sur : ${revTopics.join(', ')}.`,done:!!d.review,go:()=>start(d.review?'daily-review-more':'daily-review'),cta:'Commencer',again:`Encore ${MORE}`});
  const curIdx=steps.findIndex(s=>!s.done);
  const next=P.find(id=>!c.done[id]&&id!==d.topicId);
  root.innerHTML=`
    <div class="ld-head">
      <div class="plaque" title="${esc(g.title)}"><span class="plaque-top">Jour ${d.n} · sujet ${idx}/${total}</span><span class="plaque-name">${esc(g.title)}</span></div>
      <div class="ld-meta">${st?`<span class="chip">🔥 ${st} jour${st>1?'s':''} d’affilée</span>`:''}<span class="chip">${doneN}/${total} sujets faits</span></div>
    </div>
    <p class="ld-short">${esc(g.short)}</p>
    ${d.carried&&!d.complete?'<p class="ld-carry">On reprend la leçon d’hier : termine les étapes qui restent avant de passer au sujet suivant.</p>':''}
    ${d.complete?`<div class="ld-done"><strong>✓ Leçon du jour terminée</strong><span>${d.practice?`Questions de base ${d.practice.ok}/${d.practice.total}`:''}${d.review?` · Révision ${d.review.ok}/${d.review.total}`:''}</span>${next?`<span>Demain : <b>${esc(card(next).title)}</b></span>`:'<span>C’était le dernier sujet du parcours.</span>'}</div>`:''}
    <ol class="ld-steps">${steps.map((s,i)=>`<li class="ld-step ${s.done?'done':''} ${i===curIdx?'current':''}"><span class="ld-num" aria-hidden="true">${s.done?'✓':i+1}</span><div class="ld-text"><strong>${s.t}</strong><span>${esc(s.s)}</span></div><button class="btn ${i===curIdx?'':'ghost'} small" data-step="${s.k}">${s.done?s.again:s.cta}</button></li>`).join('')}</ol>
    ${d.complete?`<div class="button-row">${next?`<button class="btn ghost small" id="ldAdvance">Prendre de l’avance : ${esc(card(next).title)}</button>`:''}</div>`:''}
    ${sizeHTML}
    ${mapHTML}`;
  $$('[data-step]',root).forEach(b=>b.onclick=()=>steps.find(s=>s.k===b.dataset.step).go());
  $('#ldAdvance')&&($('#ldAdvance').onclick=()=>{advance();TEF_TOPIC.open(C().day.topicId,'today')});
  bindCommon(root);
}
function bindCommon(root){
  $$('[data-choose]',root).forEach(b=>b.onclick=()=>{advance(b.dataset.choose);window.scrollTo(0,0)});
  $$('[data-size]',root).forEach(b=>b.onclick=()=>setSize(+b.dataset.size));
}

function init(){render()}
window.TEF_DAILY={init,render,mark,start,resume,isTodayTopic,stepDone,logAnswer,ensureDay,pickFrom,seenCount,setSize,
  pickReview:()=>pickReview(ensureDay()),_localDay:localDay};
})();
