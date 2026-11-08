/* TEF B2 Coach — « Leçon du jour »: one grammar topic per day, in learning order.
   Steps: 1 read the lesson · 2 copy it into the notebook · 3 basic questions · 4 review of earlier topics (from day 2).
   An unfinished day carries over to the next day; review questions are picked by spacing (yesterday, ~3, ~7, ~14, ~28
   lessons ago) and by weakness, preferring questions answered wrong or never seen. */
(()=>{
'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const app=()=>window.TEF_APP,S=()=>app().S,D=()=>app().D;
const esc=x=>String(x??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const BASIC=8,REVIEW=8;

/* Local calendar day (Paris time on his phone), overridable in tests. */
const localDay=()=>{if(window.__TEF_TODAY__)return window.__TEF_TODAY__;const d=new Date();return new Date(d.getTime()-d.getTimezoneOffset()*6e4).toISOString().slice(0,10)};
const dayDiff=(a,b)=>Math.round((Date.parse(b)-Date.parse(a))/864e5);
const frDate=iso=>new Date(iso+'T12:00:00').toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'});
const path=()=>D().grammar.slice().sort((a,b)=>(a.order??999)-(b.order??999)).map(g=>g.id);
const card=id=>D().grammar.find(g=>g.id===id);
const items=id=>window.TEF_TOPIC?TEF_TOPIC.practiceItems(id):[];

function C(){
  const s=S();s.course=s.course||{};const c=s.course;
  c.done=c.done||{};c.seq=c.seq||[];c.qlog=c.qlog||{};c.lastReview=c.lastReview||{};
  return c;
}
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

/* ---------- review selection ---------- */
function logAnswer(tid,i,ok){C().qlog[tid+':'+i]={t:Date.now(),d:localDay(),ok:ok?1:0}}
function pickItems(id,q,avoid){
  const log=C().qlog,today=localDay();
  return items(id).map((x,i)=>{const L=log[id+':'+i];return {i,pr:!L?1:L.ok?2:0,t:L?L.t:0,today:L&&L.d===today,key:id+':'+i}})
    .filter(o=>!o.today&&!avoid.has(o.key))
    .sort((a,b)=>a.pr-b.pr||a.t-b.t||Math.random()-.5)
    .slice(0,q).map(o=>o.key);
}
function pickReview(d){
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
  const quota=[3,2,2,1,1,1,1,1],alloc=new Map();let total=0;
  scored.forEach((t,k)=>{if(total>=REVIEW)return;const q=Math.min(quota[k]??1,REVIEW-total);alloc.set(t.id,q);total+=q});
  for(let guard=0;total<REVIEW&&guard<20;guard++){ // few earlier topics: give each a bit more
    let added=false;
    for(const t of scored){if(total>=REVIEW)break;const cur=alloc.get(t.id)||0;if(cur<Math.min(5,items(t.id).length)){alloc.set(t.id,cur+1);total++;added=true}}
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
function start(kind){
  const d=ensureDay();if(!d.topicId&&kind==='daily-basic')return false;
  let list,title;
  if(kind==='daily-basic'){
    list=items(d.topicId).slice(0,BASIC).map((x,i)=>({tid:d.topicId,i,x}));
    title=`Questions de base · ${card(d.topicId).title}`;
  }else if(kind==='daily-review'){
    const keys=d.finishedCourse?pickReview({topicId:null}):reviewKeys(d);
    list=keys.map(k=>{const [tid,i]=k.split(':');return {tid,i:+i,x:items(tid)[+i]}}).filter(o=>o.x);
    title='Révision des sujets précédents';
  }else return false;
  if(!list.length){app().toast('Pas encore de questions de révision.');return false}
  window.TEF_TOPIC.session({key:kind,title,items:list,mixed:kind==='daily-review',subtitle:true,
    back:{label:'Leçon du jour',fn:toToday},
    endPrimary:{label:'Retour à la leçon du jour',fn:toToday},
    onEnd:({ok,total,by})=>{
      const day=C().day;if(!day||day.date!==localDay())return;
      if(kind==='daily-basic'&&!day.practice)day.practice={ok,total};
      if(kind==='daily-review'&&!day.review){day.review={ok,total,topics:Object.keys(by)};Object.keys(by).forEach(t=>C().lastReview[t]=localDay())}
      save();checkComplete();
    }});
  return true;
}
const resume=kind=>/^daily-(basic|review)$/.test(kind)?start(kind):false;

/* ---------- navigation helpers ---------- */
function advance(id){
  const c=C(),d=ensureDay();
  const next=id||path().find(x=>!c.done[x]&&x!==d.topicId);
  if(!next)return;
  if(!d.complete&&(d.read||d.copy||d.practice)&&!confirm('Changer le sujet du jour ? Les étapes déjà faites aujourd’hui ne seront pas gardées.'))return;
  newDay(next,localDay());save();render();
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
  const c=C(),d=ensureDay(),P=path(),total=P.length,doneN=c.seq.length,st=streak();
  const mapHTML=`<details class="course-map"><summary>Mon parcours : ${doneN}/${total} sujets</summary><ol class="course-list">${P.map(id=>{const g=card(id),dn=c.done[id],cur=d.topicId===id&&!d.complete;return `<li class="${dn?'is-done':cur?'is-today':''}"><span class="cl-title">${esc(g.title)}</span><span class="cl-meta">${dn?`✓ ${esc(frDate(dn.date))}`:cur?'aujourd’hui':`<button class="link-btn" data-choose="${id}">Faire ce sujet</button>`}</span></li>`}).join('')}</ol></details>`;
  if(d.finishedCourse){
    root.innerHTML=`<div class="ld-head"><div class="plaque"><span class="plaque-top">Parcours terminé</span><span class="plaque-name">Les ${total} sujets</span></div></div><p>Tu as fait tous les sujets de grammaire. Continue chaque jour avec une révision mélangée.</p><div class="button-row"><button class="btn" id="ldReview">Révision du jour</button></div>${mapHTML}`;
    $('#ldReview').onclick=()=>start('daily-review');bindMap(root);return;
  }
  const g=card(d.topicId),idx=P.indexOf(d.topicId)+1,rev=hasReview(d);
  const revTopics=rev?[...new Set(reviewKeys(d).map(k=>k.split(':')[0]))].map(t=>card(t).title):[];
  const steps=[
    {k:'read',t:'Lire la leçon',s:'La règle, le tableau, les exemples et les astuces.',done:d.read,go:()=>TEF_TOPIC.open(d.topicId,'today'),cta:'Lire'},
    {k:'copy',t:'Recopier dans mon cahier',s:'La version cahier : tout le sujet sur une page, à recopier à la main.',done:d.copy,go:()=>TEF_TOPIC.copy(d.topicId,'today'),cta:'Ouvrir la version cahier'},
    {k:'practice',t:'Questions de base',s:d.practice?`Score : ${d.practice.ok}/${d.practice.total}`:`${Math.min(BASIC,items(d.topicId).length)} questions sur ce sujet, corrigées tout de suite.`,done:!!d.practice,go:()=>start('daily-basic'),cta:'Commencer'},
  ];
  if(rev)steps.push({k:'review',t:'Révision',s:d.review?`Score : ${d.review.ok}/${d.review.total}`:`${reviewKeys(d).length} questions sur : ${revTopics.join(', ')}.`,done:!!d.review,go:()=>start('daily-review'),cta:'Commencer'});
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
    <ol class="ld-steps">${steps.map((s,i)=>`<li class="ld-step ${s.done?'done':''} ${i===curIdx?'current':''}"><span class="ld-num" aria-hidden="true">${s.done?'✓':i+1}</span><div class="ld-text"><strong>${s.t}</strong><span>${esc(s.s)}</span></div><button class="btn ${i===curIdx?'':'ghost'} small" data-step="${s.k}">${s.done?(s.k==='practice'||s.k==='review'?'Refaire':'Revoir'):s.cta}</button></li>`).join('')}</ol>
    ${d.complete?`<div class="button-row">${next?`<button class="btn ghost small" id="ldAdvance">Prendre de l’avance : ${esc(card(next).title)}</button>`:''}</div>`:''}
    ${mapHTML}`;
  $$('[data-step]',root).forEach(b=>b.onclick=()=>steps.find(s=>s.k===b.dataset.step).go());
  $('#ldAdvance')&&($('#ldAdvance').onclick=()=>{advance();TEF_TOPIC.open(C().day.topicId,'today')});
  bindMap(root);
}
function bindMap(root){$$('[data-choose]',root).forEach(b=>b.onclick=()=>{advance(b.dataset.choose);window.scrollTo(0,0)})}

function init(){render()}
window.TEF_DAILY={init,render,mark,start,resume,isTodayTopic,stepDone,logAnswer,ensureDay,pickReview:()=>pickReview(ensureDay()),_localDay:localDay};
})();
