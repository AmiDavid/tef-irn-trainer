/* TEF B2 Coach — one page per grammar topic (lesson + notes + summary) and a practice page
   with typed answers checked automatically. Routes: #g/<id> (lesson) and #gp/<id> (practice). */
(()=>{
'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const app=()=>window.TEF_APP,S=()=>app().S,D=()=>app().D;
const esc=x=>String(x??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const card=id=>D().grammar.find(g=>g.id===id);
const plus=id=>(D().grammarPlus||{})[id]||{};
const TYPE_LABEL={mcq:'Choix multiple',fill:'Complète',fix:'Corrige l’erreur',transform:'Transforme',order:'Remets dans l’ordre'};

/* ---------- answer checking ---------- */
function norm(s){
  return String(s||'').replace(/[  ]/g,' ').replace(/[’'`ʼ]/g,'’').replace(/[“”«»"]/g,'"')
    .replace(/\s+/g,' ').trim().replace(/\s*([.!?…]+)\s*$/,'').replace(/\s+([,;:?!])/g,'$1').toLocaleLowerCase('fr');
}
const strip=s=>s.normalize('NFD').replace(/[̀-ͯ]/g,'');
function check(given,answers){
  const g=norm(given);if(!g)return {verdict:'empty'};
  const list=(answers||[]).map(norm);
  if(list.includes(g))return {verdict:'ok'};
  if(list.some(a=>strip(a)===strip(g)))return {verdict:'accents'};
  return {verdict:'wrong'};
}
/* Word-level diff of the learner's answer against the closest expected answer. */
function diff(given,answer){
  const a=String(given||'').trim().split(/\s+/),b=String(answer||'').trim().split(/\s+/);
  const n=a.length,m=b.length,L=Array.from({length:n+1},()=>new Array(m+1).fill(0));
  for(let i=n-1;i>=0;i--)for(let j=m-1;j>=0;j--)L[i][j]=norm(a[i])===norm(b[j])?L[i+1][j+1]+1:Math.max(L[i+1][j],L[i][j+1]);
  const out=[];let i=0,j=0;
  while(i<n&&j<m){if(norm(a[i])===norm(b[j])){out.push(esc(b[j]));i++;j++}else if(L[i+1][j]>=L[i][j+1]){out.push(`<del>${esc(a[i])}</del>`);i++}else{out.push(`<ins>${esc(b[j])}</ins>`);j++}}
  while(i<n)out.push(`<del>${esc(a[i++])}</del>`);while(j<m)out.push(`<ins>${esc(b[j++])}</ins>`);
  return out.join(' ');
}
function closest(given,answers){
  const g=norm(given);let best=answers[0],score=-1;
  for(const a of answers){const t=new Set(norm(a).split(' '));const s=g.split(' ').filter(w=>t.has(w)).length;if(s>score){score=s;best=a}}
  return best;
}

/* ---------- routing ---------- */
function go(hash){if(location.hash!==hash)location.hash=hash;else route()}
function route(){
  const m=location.hash.match(/^#(g|gp)\/(g\d+)$/);
  if(!m){if(/^#g/.test(location.hash))history.replaceState(null,'',location.pathname+location.search);return false}
  if(!card(m[2]))return false;
  if(m[1]==='g')renderLesson(m[2]);else renderPractice(m[2]);
  return true;
}
function leave(){history.replaceState(null,'',location.pathname+location.search)}

/* ---------- lesson page ---------- */
const STATUS_LABEL={weak:'à renforcer',learning:'en cours',untested:'à tester',reliable:'fiable',mastered:'maîtrisé'};
function status(g){const st=S().gstats[g.id];if(!st||st.n<3)return g.status;const a=st.ok/st.n;return a>=.85&&st.n>=4?'reliable':a>=.6?'learning':'weak'}
function renderLesson(id){
  const g=card(id),p=plus(id),st=S().gstats[id],best=(S().gbest||{})[id],stt=status(g);
  const root=$('#gtopicBody');
  const count=practiceItems(id).length;
  root.innerHTML=`
    <button class="back-link" data-back>‹ Grammaire</button>
    <div class="topic-hero">
      <div class="kicker">${esc(g.section||'Grammaire')}</div>
      <h1>${esc(g.title)}</h1>
      <p>${esc(g.short)}</p>
      <div class="topic-meta"><span class="status ${stt}">${STATUS_LABEL[stt]||stt}${st?` · ${st.ok}/${st.n} justes`:''}</span>${best?`<span class="chip">Meilleur score : ${best.score}/${best.total}</span>`:''}</div>
      <button class="btn" data-practice>S’entraîner : ${count} exercices</button>
    </div>
    ${p.intro?`<section class="card topic-sec"><h2>Pourquoi c’est utile au TEF</h2><p>${esc(p.intro)}</p></section>`:''}
    <section class="card topic-sec"><h2>La règle</h2>
      ${p.rule?.length?`<ol class="rule-list">${p.rule.map(r=>`<li>${esc(r)}</li>`).join('')}</ol>`:''}
      <details class="rule-more"${p.rule?.length?'':' open'}><summary>Explication complète</summary><p>${esc(g.details)}</p></details>
      ${p.table?`<div class="table-wrap"><table class="topic-table"><thead><tr>${p.table.head.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${p.table.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:''}
    </section>
    ${p.tips?.length?`<section class="card topic-sec"><h2>Astuces</h2><ul class="tip-list">${p.tips.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></section>`:''}
    <section class="card topic-sec"><h2>Exemples</h2><div class="ex-list">${(p.examples?.length?p.examples:g.examples.map(fr=>({fr}))).map((e,i)=>`<div class="ex"><button class="say" data-say="${i}" title="Écouter" aria-label="Écouter">🔊</button><div><div class="ex-fr">${esc(e.fr)}</div>${e.en?`<div class="ex-en">${esc(e.en)}</div>`:''}${e.note?`<div class="ex-note">${esc(e.note)}</div>`:''}</div></div>`).join('')}</div></section>
    ${g.mistakes?.length?`<section class="card topic-sec"><h2>Erreurs fréquentes</h2><div class="mistakes">${g.mistakes.map(m=>`<div class="mistake"><span class="wrong">✕ ${esc(m.wrong)}</span><span class="right">✓ ${esc(m.right)}</span><small>${esc(m.why)}</small></div>`).join('')}</div></section>`:''}
    ${myErrors(id)}
    <section class="card topic-sec"><h2>Mes notes</h2><p class="muted">Ton espace libre : exemples de ton cours, questions pour ton professeur, phrases à retenir. Enregistré automatiquement.</p><textarea class="writing-area notes-area" id="topicNotes" placeholder="Écris ici…"></textarea><small class="muted" id="notesSaved"></small></section>
    ${p.summary?.length?`<section class="card topic-sec summary-sec"><h2>À retenir</h2><ul>${p.summary.map(s=>`<li>${esc(s)}</li>`).join('')}</ul></section>`:''}
    <div class="topic-cta"><button class="btn" data-practice>S’entraîner : ${count} exercices</button><button class="btn ghost" data-back>Retour à la grammaire</button></div>`;
  app().show('gtopic');window.scrollTo(0,0);
  $$('[data-back]',root).forEach(b=>b.onclick=()=>{leave();app().show('grammar')});
  $$('[data-practice]',root).forEach(b=>b.onclick=()=>go('#gp/'+id));
  const exs=p.examples?.length?p.examples:g.examples.map(fr=>({fr}));
  $$('[data-say]',root).forEach(b=>b.onclick=()=>window.TEF_EXAM?.speakItem({text:exs[+b.dataset.say].fr}));
  const ta=$('#topicNotes');S().gnotes=S().gnotes||{};ta.value=S().gnotes[id]||'';
  let t;ta.oninput=()=>{clearTimeout(t);t=setTimeout(()=>{S().gnotes[id]=ta.value;app().save();$('#notesSaved').textContent='Enregistré ✓'},500)};
}
function myErrors(id){
  const g=card(id),list=(S().aiErrors||[]).filter(e=>e.category===`Grammaire : ${g.title}`).slice(-6);
  if(!list.length)return '';
  return `<section class="card topic-sec"><h2>Mes erreurs sur ce point</h2><div class="mistakes">${list.map(e=>`<div class="mistake"><span class="wrong">✕ ${esc(e.wrong)}</span><span class="right">✓ ${esc(e.correct)}</span>${e.note?`<small>${esc(e.note)}</small>`:''}</div>`).join('')}</div></section>`;
}

/* ---------- practice page ---------- */
function practiceItems(id){
  const g=card(id),p=plus(id);
  const extra=[g.drill,...(g.drills||[])].filter(Boolean).map(d=>({type:'mcq',prompt:d.prompt,choices:d.choices,answer:d.answer,explain:''}));
  const own=p.practice||[];
  // Card drills first only when there is no dedicated practice set.
  return own.length?[...own,...extra.filter(d=>!own.some(o=>norm(o.prompt)===norm(d.prompt)))]:extra;
}
let P=null;
function renderPractice(id,only){
  const all=practiceItems(id);
  P={id,items:only?only.map(i=>all[i]).filter(Boolean):all,idx:0,results:[],srcIdx:only||all.map((_,i)=>i)};
  app().show('gpractice');window.scrollTo(0,0);
  renderExercise();
}
function head(){
  const g=card(P.id),done=P.results.length,ok=P.results.filter(r=>r.ok).length;
  return `<div class="practice-head"><button class="back-link" data-lesson>‹ ${esc(g.title)}</button><div class="practice-progress"><span>${Math.min(P.idx+1,P.items.length)}/${P.items.length}</span><span class="muted">${ok} juste${ok>1?'s':''} sur ${done}</span></div><div class="mini-bar"><i style="width:${Math.round(100*P.idx/P.items.length)}%"></i></div></div>`;
}
function promptHTML(s,inputHTML){
  const parts=String(s).split(/_{3,}/);
  if(parts.length<2)return esc(s)+(inputHTML?`<div style="margin-top:10px">${inputHTML}</div>`:'');
  return parts.map(esc).join(inputHTML||'<span class="gap">____</span>');
}
function renderExercise(){
  const root=$('#gpracticeBody');
  if(P.idx>=P.items.length)return renderEnd();
  const x=P.items[P.idx];
  let body='';
  if(x.type==='mcq'){
    const order=shuffle(x.choices.map((c,i)=>({c,ok:i===x.answer})));
    body=`<p class="ex-prompt">${promptHTML(x.prompt)}</p><div class="choice-list">${order.map(o=>`<button class="choice" data-ok="${o.ok?1:0}">${esc(o.c)}</button>`).join('')}</div>`;
  }else if(x.type==='fill'){
    body=`<p class="ex-prompt">${promptHTML(x.prompt,'<input class="gap-input" id="exInput" autocomplete="off" autocapitalize="none" spellcheck="false" enterkeyhint="done">')}</p>${x.hint?`<button class="hint-btn" id="exHint">Indice</button><span class="muted" id="exHintText" hidden>${esc(x.hint)}</span>`:''}${accentBar()}<button class="btn" id="exCheck">Vérifier</button>`;
  }else if(x.type==='fix'||x.type==='transform'){
    body=`${x.instruction?`<p class="ex-instruction">${esc(x.instruction)}</p>`:'<p class="ex-instruction">Cette phrase contient une erreur. Réécris-la correctement.</p>'}<div class="doc-box ex-source">${esc(x.prompt)}</div><textarea class="writing-area ex-area" id="exInput" rows="3" autocomplete="off" autocapitalize="sentences" spellcheck="false">${x.type==='fix'?esc(x.prompt):''}</textarea>${x.hint?`<button class="hint-btn" id="exHint">Indice</button><span class="muted" id="exHintText" hidden>${esc(x.hint)}</span>`:''}${accentBar()}<button class="btn" id="exCheck">Vérifier</button>`;
  }else if(x.type==='order'){
    body=`<p class="ex-instruction">Touche les mots dans le bon ordre pour former la phrase.</p><div class="order-line" id="orderLine"><span class="muted">Ta phrase apparaîtra ici</span></div><div class="order-bank" id="orderBank">${shuffle(x.words.map((w,i)=>({w,i}))).map(o=>`<button class="token" data-t="${o.i}">${esc(o.w)}</button>`).join('')}</div><div class="button-row"><button class="btn ghost small" id="orderReset">Recommencer</button><button class="btn" id="exCheck">Vérifier</button></div>`;
  }
  root.innerHTML=head()+`<div class="card exercise"><div class="kicker">${TYPE_LABEL[x.type]||''}</div>${body}<div id="exFb"></div><div class="runner-nav" id="exNav" hidden><span></span><button class="btn" id="exNext">${P.idx<P.items.length-1?'Suivant ›':'Voir mon score'}</button></div></div>`;
  $('[data-lesson]',root).onclick=()=>go('#g/'+P.id);
  $('#exHint')&&($('#exHint').onclick=()=>{$('#exHintText').hidden=false;$('#exHint').hidden=true});
  $$('.accent-key',root).forEach(k=>k.onmousedown=e=>{e.preventDefault();const i=$('#exInput');if(!i)return;const s=i.selectionStart??i.value.length,en=i.selectionEnd??s;i.value=i.value.slice(0,s)+k.textContent+i.value.slice(en);i.selectionStart=i.selectionEnd=s+k.textContent.length;i.focus()});
  if(x.type==='mcq'){
    $$('[data-ok]',root).forEach(b=>b.onclick=()=>{
      if(P.results.length>P.idx)return;
      const ok=b.dataset.ok==='1';$$('[data-ok]',root).forEach(y=>{y.disabled=true;if(y.dataset.ok==='1')y.classList.add('correct')});if(!ok)b.classList.add('wrong');
      record(ok,b.textContent,x.choices[x.answer]);feedback(ok?'ok':'wrong',x,ok?'':esc(x.choices[x.answer]));
    });
  }else if(x.type==='order'){
    const picked=[];
    const paint=()=>{$('#orderLine').innerHTML=picked.length?picked.map((i,k)=>`<button class="token in" data-k="${k}">${esc(x.words[i])}</button>`).join(''):'<span class="muted">Ta phrase apparaîtra ici</span>';$$('#orderBank .token').forEach(b=>b.disabled=picked.includes(+b.dataset.t));$$('#orderLine [data-k]').forEach(b=>b.onclick=()=>{if(P.results.length>P.idx)return;picked.splice(+b.dataset.k,1);paint()})};
    $$('#orderBank .token').forEach(b=>b.onclick=()=>{if(P.results.length>P.idx)return;picked.push(+b.dataset.t);paint()});
    $('#orderReset').onclick=()=>{if(P.results.length>P.idx)return;picked.length=0;paint()};
    $('#exCheck').onclick=()=>{
      if(picked.length<x.words.length)return app().toast('Utilise tous les mots.');
      const given=picked.map(i=>x.words[i]).join(' ');gradeTyped(x,given);
    };
  }else{
    const inp=$('#exInput');inp.focus();
    if(x.type!=='fill')inp.setSelectionRange?.(inp.value.length,inp.value.length);
    inp.onkeydown=e=>{if(e.key==='Enter'&&(x.type==='fill'||!e.shiftKey)){e.preventDefault();$('#exCheck').click()}};
    $('#exCheck').onclick=()=>gradeTyped(x,inp.value);
  }
}
function accentBar(){return `<div class="accent-bar" aria-label="Accents">${['é','è','ê','à','â','ù','û','ç','ô','î','ï','ë','œ','’','«','»'].map(c=>`<button type="button" class="accent-key">${c}</button>`).join('')}</div>`}
function gradeTyped(x,given){
  if(P.results.length>P.idx)return;
  const r=check(given,x.answers);
  if(r.verdict==='empty')return app().toast('Écris ta réponse.');
  if(x.type==='fix'&&norm(given)===norm(x.prompt)&&r.verdict!=='ok')return app().toast('Il y a une erreur à corriger dans la phrase.');
  const ok=r.verdict==='ok',best=closest(given,x.answers);
  $('#exInput')&&($('#exInput').disabled=true);$('#exCheck').disabled=true;
  record(ok,given,best);
  const fullGiven=x.type==='fill'?String(x.prompt).replace(/_{3,}/,given.trim()):given;
  const fullBest=x.type==='fill'?String(x.prompt).replace(/_{3,}/,best):best;
  feedback(r.verdict,x,ok?'':(x.type==='fill'?`<strong>${esc(best)}</strong>`:esc(best)),ok?'':diff(fullGiven,fullBest),x.answers.length>1&&!ok?x.answers.filter(a=>a!==best):null);
}
function feedback(verdict,x,expected,diffHTML,others){
  const title={ok:'✓ Correct',accents:'≈ Presque : vérifie les accents',wrong:'✕ Pas tout à fait'}[verdict];
  $('#exFb').innerHTML=`<div class="feedback ex-feedback v-${verdict}"><strong>${title}</strong>${expected?`<div>Réponse attendue : ${expected}</div>`:''}${diffHTML?`<div class="diff">${diffHTML}</div>`:''}${others?.length?`<div class="muted">Aussi accepté : ${others.map(esc).join(' · ')}</div>`:''}${x.explain?`<div class="ex-explain">${esc(x.explain)}</div>`:''}</div>`;
  $('#exNav').hidden=false;$('#exNext').focus();
  $('#exNext').onclick=()=>{P.idx++;renderExercise()};
}
function record(ok,given,expected){
  const st=S(),g=card(P.id);
  st.gstats[P.id]=st.gstats[P.id]||{n:0,ok:0};st.gstats[P.id].n++;if(ok)st.gstats[P.id].ok++;
  P.results.push({ok,i:P.srcIdx[P.idx]});
  const x=P.items[P.idx];
  if(!ok&&given&&x.type!=='mcq'&&x.type!=='order'){
    st.aiErrors=app().mergeAIErrors(st.aiErrors,[{original:String(x.type==='fill'?x.prompt.replace(/_{3,}/,given.trim()):given).trim(),correction:x.type==='fill'?x.prompt.replace(/_{3,}/,expected):expected,rule:x.explain||g.short,category:`Grammaire : ${g.title}`}]);
  }
  app().save();
}
function renderEnd(){
  const g=card(P.id),ok=P.results.filter(r=>r.ok).length,total=P.results.length,wrong=P.results.filter(r=>!r.ok).map(r=>r.i);
  const st=S();st.gbest=st.gbest||{};
  const full=P.items.length===practiceItems(P.id).length;
  if(full&&(!st.gbest[P.id]||ok>st.gbest[P.id].score))st.gbest[P.id]={score:ok,total,date:new Date().toISOString()};
  app().addMin(Math.max(2,Math.round(total*0.7)));app().save();app().errors?.();
  const pct=total?Math.round(100*ok/total):0;
  const msg=pct>=85?'Excellent : ce point est en place. Reviens dans une semaine pour le consolider.':pct>=60?'Bien. Refais tes erreurs maintenant, puis relis la partie « À retenir ».':'Relis la règle et les exemples, puis refais l’exercice. Tes erreurs sont dans « Mes erreurs ».';
  $('#gpracticeBody').innerHTML=`<div class="practice-head"><button class="back-link" data-lesson>‹ ${esc(g.title)}</button></div><div class="card intro-card"><h2>${ok}/${total}</h2><p>${msg}</p><div class="button-row" style="justify-content:center">${wrong.length?'<button class="btn" id="redoWrong">Refaire mes erreurs ('+wrong.length+')</button>':''}<button class="btn ${wrong.length?'secondary':''}" id="redoAll">Tout refaire</button><button class="btn ghost" data-lesson>Revoir le cours</button></div></div>`;
  $$('[data-lesson]').forEach(b=>b.onclick=()=>go('#g/'+P.id));
  $('#redoWrong')&&($('#redoWrong').onclick=()=>renderPractice(P.id,wrong));
  $('#redoAll').onclick=()=>renderPractice(P.id);
}

function init(){window.addEventListener('hashchange',()=>{if(!route()&&/^#?$/.test(location.hash)){const v=S().view;if(v==='gtopic'||v==='gpractice')app().show('grammar')}});route()}
window.TEF_TOPIC={init,open:id=>go('#g/'+id),practice:id=>go('#gp/'+id),check,norm,practiceItems,route};
})();
