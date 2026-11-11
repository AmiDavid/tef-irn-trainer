/* TEF B2 Coach — one page per grammar topic (lesson + notes + summary), a notebook page to copy by hand,
   and a practice runner with typed answers checked automatically.
   Routes: #g/<id> lesson · #c/<id> notebook copy · #gp/<id> topic practice · #gs/<key> session started by the daily plan. */
(()=>{
'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const app=()=>window.TEF_APP,S=()=>app().S,D=()=>app().D;
const esc=x=>String(x??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const card=id=>D().grammar.find(g=>g.id===id);
const plus=id=>(D().grammarPlus||{})[id]||{};
/* English layer (content/english/*.js): plain-English explanations aligned with rule[], tables, tips[] and summary[]. */
const enOf=id=>(D().grammarEn||{})[id]||null;
/* In the English text, *…* marks French words: they are shown upright and bright so they stand out from the explanation. */
const enText=t=>esc(t).replace(/\*([^*]+)\*/g,'<i class="fr" lang="fr">$1</i>');
const enNote=(t,cls)=>t?`<span class="en-note${cls?' '+cls:''}" lang="en"><b class="en-tag">EN</b> ${enText(t)}</span>`:'';
const daily=()=>window.TEF_DAILY;
const TYPE_LABEL={mcq:'Choix multiple',fill:'Complète',fix:'Corrige l’erreur',transform:'Transforme',order:'Remets dans l’ordre'};

/* ---------- answer checking ---------- */
function norm(s){
  return String(s||'').replace(/[  ]/g,' ').replace(/[’'`ʼ]/g,'’').replace(/[“”«»"]/g,'"')
    .replace(/\s+/g,' ').trim().replace(/\s*([.!?…]+)\s*$/,'').replace(/\s+([,;:?!])/g,'$1').toLocaleLowerCase('fr');
}
const strip=s=>s.normalize('NFD').replace(/[̀-ͯ]/g,'');
/* Commas never decide a grammar answer (« À l’époque, il… » = « À l’époque il… »), so they are ignored. */
const nocomma=s=>s.replace(/,/g,' ').replace(/\s+/g,' ').trim();
function check(given,answers){
  const g=nocomma(norm(given));if(!g)return {verdict:'empty'};
  const list=(answers||[]).map(a=>nocomma(norm(a)));
  if(list.includes(g))return {verdict:'ok'};
  if(list.some(a=>strip(a)===strip(g)))return {verdict:'accents'};
  return {verdict:'wrong'};
}
/* Word-level diff of the learner's answer against the closest expected answer. */
function diff(given,answer){
  const a=String(given||'').trim().split(/\s+/),b=String(answer||'').trim().split(/\s+/);
  const n=a.length,m=b.length,L=Array.from({length:n+1},()=>new Array(m+1).fill(0));
  const same=(u,v)=>nocomma(norm(u))===nocomma(norm(v));
  for(let i=n-1;i>=0;i--)for(let j=m-1;j>=0;j--)L[i][j]=same(a[i],b[j])?L[i+1][j+1]+1:Math.max(L[i+1][j],L[i][j+1]);
  const out=[];let i=0,j=0;
  while(i<n&&j<m){if(same(a[i],b[j])){out.push(esc(b[j]));i++;j++}else if(L[i+1][j]>=L[i][j+1]){out.push(`<del>${esc(a[i])}</del>`);i++}else{out.push(`<ins>${esc(b[j])}</ins>`);j++}}
  while(i<n)out.push(`<del>${esc(a[i++])}</del>`);while(j<m)out.push(`<ins>${esc(b[j++])}</ins>`);
  return out.join(' ');
}
function closest(given,answers){
  const g=norm(given);let best=answers[0],score=-1;
  for(const a of answers){const t=new Set(norm(a).split(' '));const s=g.split(' ').filter(w=>t.has(w)).length;if(s>score){score=s;best=a}}
  return best;
}

/* ---------- routing ---------- */
let origin='grammar'; // where « retour » goes: the grammar list or today's lesson plan
function go(hash){if(location.hash!==hash)location.hash=hash;else route()}
function route(){
  const h=location.hash;
  let m=h.match(/^#(g|gp|c)\/(g\d+)$/);
  if(m&&card(m[2])){if(m[1]==='g')renderLesson(m[2]);else if(m[1]==='c')renderCopy(m[2]);else renderPractice(m[2]);return true}
  m=h.match(/^#gs\/([\w-]+)$/);
  if(m){
    if(P&&P.key===m[1]){app().show('gpractice');renderExercise();return true}
    if(daily()?.resume(m[1]))return true;
  }
  if(/^#(g|gp|c|gs)\//.test(h))history.replaceState(null,'',location.pathname+location.search);
  return false;
}
function leave(){history.replaceState(null,'',location.pathname+location.search)}
function backHome(){leave();app().show(origin==='today'?'today':'grammar')}
const backLabel=()=>origin==='today'?'Leçon du jour':'Grammaire';

/* ---------- lesson page ---------- */
const STATUS_LABEL={weak:'à renforcer',learning:'en cours',untested:'à tester',reliable:'fiable',mastered:'maîtrisé'};
function status(g){const st=S().gstats[g.id];if(!st||st.n<3)return g.status;const a=st.ok/st.n;return a>=.85&&st.n>=4?'reliable':a>=.6?'learning':'weak'}
const examplesOf=id=>{const p=plus(id),g=card(id);return p.examples?.length?p.examples:g.examples.map(fr=>({fr}))};
function renderLesson(id){
  const g=card(id),p=plus(id),st=S().gstats[id],best=(S().gbest||{})[id],stt=status(g);
  const root=$('#gtopicBody');
  const count=practiceItems(id).length,seen=daily()?.seenCount(id)||0;
  const today=daily()?.isTodayTopic(id);
  if(today)origin='today';
  const E=enOf(id),enOn=!!E&&S().ruleEn!==false;
  root.innerHTML=`
    <button class="back-link" data-back>‹ ${backLabel()}</button>
    ${today?`<div class="today-banner"><strong>Leçon du jour · étape 1</strong><span>Lis toute la leçon. Ensuite, recopie-la dans ton cahier avec la version cahier.</span></div>`:''}
    <div class="topic-hero">
      <div class="kicker">${esc(g.section||'Grammaire')}</div>
      <h1>${esc(g.title)}</h1>
      <p>${esc(g.short)}</p>
      <div class="topic-meta"><span class="status ${stt}">${STATUS_LABEL[stt]||stt}${st?` · ${st.ok}/${st.n} justes`:''}</span>${best?`<span class="chip">Meilleur score : ${best.score}/${best.total}</span>`:''}</div>
      <div class="button-row"><button class="btn" data-practice>S’entraîner : ${Math.min(SERIES,count)} questions</button><button class="btn secondary" data-copy>📓 Version cahier</button></div>
      ${(n=>n?`<button class="nb-update-mini" data-copy>📌 ${n} ${n>1?'ajouts':'ajout'} à recopier dans ton cahier</button>`:'')(updatesOf(id).length)}
      <p class="bank-line">${count} exercices sur ce sujet${seen?` · ${seen} déjà faits`:''}. Chaque série prend d’abord ceux que tu n’as pas encore faits ou que tu as ratés.</p>
      <div class="button-row more-row">${window.TEF_GEN?.has(id)?'<button class="btn ghost small" id="genBtn">♾️ Exercices illimités</button>':''}<button class="btn ghost small" id="aiBtn">✨ 10 nouvelles questions (IA)</button></div>
    </div>
    ${p.intro?`<section class="card topic-sec"><h2>Pourquoi c’est utile au TEF</h2><p>${esc(p.intro)}</p></section>`:''}
    <section class="card topic-sec"><div class="sec-head"><h2>La règle</h2>${E?`<button class="en-toggle" data-en aria-pressed="${enOn}" title="Explications en anglais sous chaque règle">🇬🇧 English</button>`:''}</div>
      ${p.rule?.length?`<ol class="rule-list">${p.rule.map((r,i)=>`<li>${esc(r)}${enNote(E?.rule?.[i])}</li>`).join('')}</ol>`:''}
      <details class="rule-more"${p.rule?.length?'':' open'}><summary>Explication complète</summary><p>${esc(g.details)}</p></details>
      ${tablesOf(p).map((t,k)=>tableHTML(t,'topic-table',null,E?.tables?.[k])).join('')}
    </section>
    ${p.tips?.length?`<section class="card topic-sec"><h2>Astuces</h2><ul class="tip-list">${p.tips.map((t,i)=>`<li>${esc(t)}${enNote(E?.tips?.[i])}</li>`).join('')}</ul></section>`:''}
    <section class="card topic-sec"><h2>Exemples</h2><div class="ex-list">${examplesOf(id).map((e,i)=>`<div class="ex"><button class="say" data-say="${i}" title="Écouter" aria-label="Écouter">🔊</button><div><div class="ex-fr">${esc(e.fr)}</div>${e.en?`<div class="ex-en">${esc(e.en)}</div>`:''}${e.note?`<div class="ex-note">${esc(e.note)}</div>`:''}</div></div>`).join('')}</div></section>
    ${g.mistakes?.length?`<section class="card topic-sec"><h2>Erreurs fréquentes</h2><div class="mistakes">${g.mistakes.map(m=>`<div class="mistake"><span class="wrong">✕ ${esc(m.wrong)}</span><span class="right">✓ ${esc(m.right)}</span><small>${esc(m.why)}</small></div>`).join('')}</div></section>`:''}
    ${myErrors(id)}
    <section class="card topic-sec"><h2>Mes notes</h2><p class="muted">Ton espace libre : exemples de ton cours, questions pour ton professeur, phrases à retenir. Enregistré automatiquement.</p><textarea class="writing-area notes-area" id="topicNotes" placeholder="Écris ici…"></textarea><small class="muted" id="notesSaved"></small></section>
    ${p.summary?.length?`<section class="card topic-sec summary-sec"><h2>À retenir</h2><ul>${p.summary.map((s,i)=>`<li>${esc(s)}${enNote(E?.summary?.[i])}</li>`).join('')}</ul></section>`:''}
    <div class="topic-cta">${today?`<button class="btn" id="readDone">J’ai lu la leçon → Recopier dans mon cahier</button>`:`<button class="btn" data-practice>S’entraîner : ${Math.min(SERIES,count)} questions</button><button class="btn secondary" data-copy>📓 Version cahier</button>`}<button class="btn ghost" data-back>Retour : ${backLabel()}</button></div>`;
  app().show('gtopic');window.scrollTo(0,0);
  root.classList.toggle('en-off',!enOn);
  const enBtn=$('[data-en]',root);
  enBtn&&(enBtn.onclick=()=>{const on=root.classList.contains('en-off');root.classList.toggle('en-off',!on);enBtn.setAttribute('aria-pressed',String(on));S().ruleEn=on;app().save()});
  $$('[data-back]',root).forEach(b=>b.onclick=backHome);
  $$('[data-practice]',root).forEach(b=>b.onclick=()=>go('#gp/'+id));
  $$('[data-copy]',root).forEach(b=>b.onclick=()=>go('#c/'+id));
  $('#genBtn')&&($('#genBtn').onclick=()=>unlimited(id));
  $('#aiBtn').onclick=e=>generateAI(id,e.currentTarget);
  $('#readDone')&&($('#readDone').onclick=()=>{daily()?.mark('read');go('#c/'+id)});
  const exs=examplesOf(id);
  $$('[data-say]',root).forEach(b=>b.onclick=()=>window.TEF_EXAM?.speakItem({text:exs[+b.dataset.say].fr}));
  const ta=$('#topicNotes');S().gnotes=S().gnotes||{};ta.value=S().gnotes[id]||'';
  let t;ta.oninput=()=>{clearTimeout(t);t=setTimeout(()=>{S().gnotes[id]=ta.value;app().save();$('#notesSaved').textContent='Enregistré ✓'},500)};
}
/* An ending such as « -ail » or « -ence » must never be split across two lines. */
const keepEndings=h=>h.replace(/(^|[\s(])(-[^\s,;()]+)/g,'$1<span class="nw">$2</span>');
const tablesOf=p=>[p.table,...(p.tables||[])].filter(t=>t?.head?.length);
const clsAttr=c=>c.trim()?` class="${c.trim()}"`:'';
/* mk(kind,text) returns ' nb-new' for a line added since the learner copied the page (notebook only). */
function tableHTML(t,cls,mk,en){
  if(!t?.head?.length)return '';
  const m=mk||(()=>''),hc=m('thead',tableHead(t));
  return `${t.title?`<h3 class="table-title${hc}">${esc(t.title)}</h3>`:''}${enNote(en,'en-table')}<div class="table-wrap"><table class="${cls}"><thead><tr${clsAttr(hc)}>${t.head.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${t.rows.map(r=>`<tr${clsAttr(m('row',r.join(' | ')))}>${r.map(c=>`<td>${keepEndings(esc(c))}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

/* lines:start — the notebook page as a list of lines, so the app can tell what was added after the learner copied it.
   (scripts that build content/notebook-baseline.js run this exact block) */
const lineText=t=>String(t??'').replace(/\s+/g,' ').trim();
function fnv(s){let h=0x811c9dc5;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,0x01000193)}return (h>>>0).toString(36)}
const lineKey=(k,t)=>k+':'+fnv(lineText(t));
const tableHead=t=>(t.title?t.title+' : ':'')+t.head.join(' | ');
function lessonLines(g,p){
  const out=[],add=(k,t)=>{if(lineText(t))out.push({k,t:lineText(t),key:lineKey(k,t)})};
  add('sub',g.short);
  if(p.rule?.length)p.rule.forEach(r=>add('rule',r));else add('rule',g.details);
  for(const t of [p.table,...(p.tables||[])]){if(!t?.head?.length)continue;add('thead',tableHead(t));t.rows.forEach(r=>add('row',r.join(' | ')))}
  (p.examples?.length?p.examples.map(e=>e.fr):(g.examples||[])).forEach(e=>add('ex',e));
  (g.mistakes||[]).forEach(m=>add('mist',m.wrong+' → '+m.right));
  (p.tips||[]).forEach(t=>add('tip',t));
  (p.summary||[]).forEach(s=>add('sum',s));
  return out;
}
/* lines:end */

/* What the learner copied: S.copied[id] = {t, keys} when « J’ai tout recopié » is pressed. Pages copied before that existed
   (build 18 and earlier) are compared with the lessons as they were on 8 November (content/notebook-baseline.js). */
const copiedBefore=id=>{const c=S().course||{};return !!((c.done||{})[id]||(c.day&&c.day.topicId===id&&c.day.copy))};
function snapshot(id){const s=(S().copied||{})[id];if(s)return s;const b=(window.TEF_NOTEBOOK_BASELINE||{})[id];return b&&copiedBefore(id)?{t:null,keys:b}:null}
/* Short notebook (build 24): « À retenir », tables, examples and mistakes are copied; the detailed rules and tips stay folded
   on the page, to reread. A copy remembers its version, so later changes to lines that were not copied never ask to be added. */
const SHORT_KINDS=new Set(['sub','sum','thead','row','ex','mist']);
/* One-page summary (« fiche », build 25): content/fiches/*.js, [{h, l:[lines], t:{head,rows}}], *…* = keyword. It is the default
   page to copy; « Complète » shows the whole lesson. A lesson without a fiche falls back to the short page above. */
const ficheOf=id=>{const f=(D().grammarFiche||{})[id];if(!f)return null;const tabs=tablesOf(plus(id));
  return f.map(s=>s.tab!=null&&tabs[s.tab]?{...s,t:{head:tabs[s.tab].head,rows:tabs[s.tab].rows}}:s)};
const ficheText=t=>esc(t).replace(/\*([^*]+)\*/g,'<mark class="kw">$1</mark>');
function ficheLines(id){const out=[],add=(k,t)=>{if(lineText(t))out.push({k,t:lineText(t),key:lineKey(k,t)})};
  (ficheOf(id)||[]).forEach(s=>{add('fh',s.h);if(s.t?.head?.length){add('fth',s.t.head.join(' | '));s.t.rows.forEach(r=>add('ftr',r.join(' | ')))}(s.l||[]).forEach(x=>add('fl',x))});return out}
const nbMode=()=>{const m=S().nbMode;return m==='full'||m==='fiche'?m:(S().nbShort===false?'full':'fiche')};
const linesFor=(id,mode)=>{if(mode==='fiche')return ficheLines(id);const l=lessonLines(card(id),plus(id));return mode==='short'?l.filter(x=>SHORT_KINDS.has(x.k)):l};
function updatesOf(id){const s=snapshot(id);if(!s||!card(id))return [];const have=new Set(s.keys);return linesFor(id,s.mode||'full').filter(l=>!have.has(l.key))}
function markCopied(id,mode){const st=S();let m=mode||nbMode();if(m==='fiche'&&!ficheOf(id))m='short';st.copied=st.copied||{};st.copied[id]={t:Date.now(),mode:m,keys:linesFor(id,m).map(l=>l.key)};app().save()}
const notebookUpdates=()=>D().grammar.map(g=>({id:g.id,title:g.title,n:updatesOf(g.id).length})).filter(u=>u.n);
function myErrors(id){
  const g=card(id),list=(S().aiErrors||[]).filter(e=>e.category===`Grammaire : ${g.title}`).slice(-6);
  if(!list.length)return '';
  return `<section class="card topic-sec"><h2>Mes erreurs sur ce point</h2><div class="mistakes">${list.map(e=>`<div class="mistake"><span class="wrong">✕ ${esc(e.wrong)}</span><span class="right">✓ ${esc(e.correct)}</span>${e.note?`<small>${esc(e.note)}</small>`:''}</div>`).join('')}</div></section>`;
}

/* ---------- notebook page: the whole topic, laid out to copy by hand (Seyès paper) ---------- */
/* The notebook page shows one of three layouts: 'fiche' (one-page summary), 'short' (fallback when a lesson has no fiche) or
   'full'. It follows the learner's choice, except when a copy of another version has lines to add: that version is shown, so
   the highlighted lines make sense, until the learner picks a version with the switch. */
let pickedFor=null;
const layoutOf=(id,mode)=>mode==='full'?'full':mode==='short'?'short':ficheOf(id)?'fiche':'short';
function renderCopy(id){
  if(pickedFor!==id)pickedFor=null;
  const g=card(id),p=plus(id),today=daily()?.isTodayTopic(id),F=ficheOf(id);
  if(today)origin='today';
  const showEn=S().copyEn!==false,E=showEn?enOf(id):null;
  const date=new Date().toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  const done=today&&daily()?.stepDone('copy');
  const root=$('#gcopyBody');
  const snap=snapshot(id),snapLayout=snap?layoutOf(id,snap.mode||'full'):null,pending=updatesOf(id);
  const layout=pending.length&&!pickedFor?snapLayout:layoutOf(id,nbMode());
  const news=snapLayout===layout?pending:[],copiedHere=!!snap&&snapLayout===layout;
  const nk=new Set(news.map(l=>l.key)),mk=(k,t)=>nk.has(lineKey(k,t))?' nb-new':'',li=(k,t,html)=>`<li${clsAttr(mk(k,t))}>${html}</li>`;
  const ruleBlock=`<h2>La règle</h2>
      ${p.rule?.length?`<ol class="nb-rule">${p.rule.map((r,i)=>li('rule',r,esc(r)+enNote(E?.rule?.[i]))).join('')}</ol>`:`<p${clsAttr(mk('rule',g.details))}>${esc(g.details)}</p>`}`;
  const tablesBlock=tablesOf(p).map((t,k)=>tableHTML(t,'nb-table',mk,E?.tables?.[k])).join('');
  const exBlock=`<h2>Exemples</h2>
      <ul class="nb-ex">${examplesOf(id).map(e=>li('ex',e.fr,`${esc(e.fr)}${showEn&&e.en?` <span class="nb-en">(${esc(e.en)})</span>`:''}`)).join('')}</ul>`;
  const mistBlock=g.mistakes?.length?`<h2>Attention aux erreurs</h2><ul class="nb-mist">${g.mistakes.map(m=>li('mist',m.wrong+' → '+m.right,`<span class="nb-wrong">${esc(m.wrong)}</span> → <span class="nb-right">${esc(m.right)}</span>`)).join('')}</ul>`:'';
  const tipsBlock=p.tips?.length?`<h2>Astuces</h2><ul class="nb-tips">${p.tips.map((t,i)=>li('tip',t,esc(t)+enNote(E?.tips?.[i]))).join('')}</ul>`:'';
  const sumBlock=p.summary?.length?`<div class="nb-box"><h2>À retenir</h2><ul>${p.summary.map((s,i)=>li('sum',s,esc(s)+enNote(E?.summary?.[i]))).join('')}</ul></div>`:'';
  const foldOpen=news.some(l=>l.k==='rule'||l.k==='tip');
  const body=layout==='full'
    ?`${ruleBlock}${tablesBlock}${exBlock}${mistBlock}${tipsBlock}${sumBlock}`
    :layout==='fiche'
    ?`<div class="nb-fiche">${F.map(s=>`<h2${clsAttr(mk('fh',s.h))}>${ficheText(s.h)}</h2>${s.t?.head?.length?tableHTML(s.t,'nb-table nb-ftable',(k,t)=>mk(k==='thead'?'fth':'ftr',t)):''}${s.l?.length?`<ul class="nb-fl">${s.l.map(x=>li('fl',x,ficheText(x))).join('')}</ul>`:''}`).join('')}</div>
      <p class="nb-more no-print">Tout le détail (règles, tableaux, exemples, astuces) est dans la <button class="linklike" data-nbmode="full">version complète</button>.</p>`
    :`${sumBlock}${tablesBlock}${exBlock}${mistBlock}
      <details class="nb-fold"${foldOpen?' open':''}><summary>La règle en détail et les astuces <small>à relire, pas à recopier</small></summary>${ruleBlock}${tipsBlock}</details>`;
  const stepText=layout==='full'?'Recopie toute la page dans ton cahier, à la main. Écrire aide à retenir.'
    :layout==='fiche'?'Recopie la fiche dans ton cahier : tout le sujet sur une page. Quand une question te bloque, c’est là que tu cherches la réponse.'
    :'Recopie cette page à la main : l’essentiel, les tableaux, les exemples et les erreurs. La règle en détail reste repliée en bas, pour la relire.';
  root.innerHTML=`
    <div class="copy-tools no-print">
      <button class="back-link" data-back>‹ ${backLabel()}</button>
      <div class="copy-actions"><div class="nb-mode" role="group" aria-label="Version du cahier"><button data-nbmode="fiche" aria-pressed="${layout!=='full'}">${F?'Fiche':'Courte'}</button><button data-nbmode="full" aria-pressed="${layout==='full'}">Complète</button></div>${layout!=='fiche'?`<label class="copy-toggle"><input type="checkbox" id="copyEn" ${showEn?'checked':''}> 🇬🇧 Anglais</label>`:''}<button class="btn ghost small" id="copyPrint">Imprimer</button></div>
    </div>
    ${news.length?`<div class="nb-update no-print" role="status"><strong>📌 ${news.length} ${news.length>1?'nouveautés':'nouveauté'} depuis ta copie${snap.t?` du ${new Date(snap.t).toLocaleDateString('fr-FR',{day:'numeric',month:'long'})}`:''}</strong><span>Les passages surlignés en jaune sont nouveaux ou ont été complétés : ajoute-les dans ton cahier.</span><button class="btn small" id="nbAck">C’est fait, je les ai ajoutés ✓</button></div>`:''}
    ${today?`<div class="today-banner no-print"><strong>Leçon du jour · étape 2</strong><span>${stepText}</span></div>`:''}
    <article class="notebook" aria-label="Version cahier : ${esc(g.title)}">
      <div class="nb-date">${esc(date.charAt(0).toUpperCase()+date.slice(1))}</div>
      <h1 class="nb-title">${esc(g.title)}</h1>
      <p class="nb-sub${mk('sub',g.short)}">${esc(g.short)}</p>
      ${body}
    </article>
    <div class="topic-cta no-print">${today?(done?`<span class="chip">✓ Recopié</span>${copiedHere?'':`<button class="btn ghost" id="copyMark">J’ai recopié cette version ✓</button>`}<button class="btn" id="copyNext">Continuer : questions de base</button>`:`<button class="btn" id="copyDone">J’ai tout recopié ✓</button>`):copiedHere?'':`<button class="btn" id="copyMark">J’ai recopié cette page ✓</button>`}<button class="btn ghost" id="copyLesson">Revoir la leçon</button></div>`;
  app().show('gcopy');window.scrollTo(0,0);
  $('[data-back]',root).onclick=backHome;
  $('#copyEn')&&($('#copyEn').onchange=e=>{S().copyEn=e.target.checked;app().save();renderCopy(id)});
  $$('[data-nbmode]',root).forEach(b=>b.onclick=()=>{S().nbMode=b.dataset.nbmode;delete S().nbShort;pickedFor=id;app().save();renderCopy(id)});
  $('#copyPrint').onclick=()=>window.print();
  $('#copyLesson').onclick=()=>go('#g/'+id);
  $('#copyDone')&&($('#copyDone').onclick=()=>{markCopied(id,layout);daily()?.mark('copy');backHome()});
  $('#copyMark')&&($('#copyMark').onclick=()=>{markCopied(id,layout);app().toast('Noté : cette page est dans ton cahier ✓');renderCopy(id)});
  $('#nbAck')&&($('#nbAck').onclick=()=>{markCopied(id,layout);app().toast('Cahier à jour ✓');renderCopy(id)});
  $('#copyNext')&&($('#copyNext').onclick=()=>daily()?.start('daily-basic'));
}

/* ---------- practice runner (one topic, or a mixed session from the daily plan) ---------- */
const bankCache=new Map();
/* One sentence = one exercise. Word-order exercises have no prompt, so they are known by their answer. */
const sig=x=>norm(x.prompt||(x.answers||[])[0]||(x.words||[]).join(' '));
/* Questions the learner reported as wrong never come back (S.flags syncs with the progress, so they can be fixed later). */
const isFlagged=x=>!!x&&(!!x.flagged||!!(S().flags||{})[sig(x)]);
function practiceItems(id){
  if(bankCache.has(id))return bankCache.get(id);
  const g=card(id),p=plus(id);
  const extra=[g.drill,...(g.drills||[])].filter(Boolean).map(d=>({type:'mcq',lvl:1,prompt:d.prompt,choices:d.choices,answer:d.answer,explain:''}));
  const own=p.practice||[];
  // Order is stable on purpose (answer history is keyed by index): own set, card drills, then the larger bank.
  const base=own.length?[...own,...extra.filter(d=>!own.some(o=>sig(o)===sig(d)))]:extra;
  const seenSig=new Set(base.map(sig));
  const more=((D().grammarMore||{})[id]||[]).filter(m=>{const k=sig(m);if(seenSig.has(k))return false;seenSig.add(k);return true});
  const ai=((S().aiBank||{})[id]||[]); // questions generated for this learner, appended so their history keys stay stable
  const all=[...base,...more,...ai];
  bankCache.set(id,all);return all;
}
const invalidate=id=>id?bankCache.delete(id):bankCache.clear();
/* ---------- new questions: unlimited automatic drills (generators.js) and AI questions (Claude, verified) ---------- */
const aiReady=()=>!!window.TEF_CONNECTED?.ready;
async function generateAI(id,btn){
  if(!aiReady())return app().toast('Connecte-toi (☁️ Sync) pour les questions IA.');
  const g=card(id),p=plus(id);
  if(btn){btn.disabled=true;btn.dataset.label=btn.textContent;btn.textContent='Génération et vérification… (≈30 s)'}
  try{
    const r=await window.TEF_CONNECTED.generateExercises({topic:{id,title:g.title,short:g.short,rule:p.rule||[g.details],mistakes:(g.mistakes||[]).map(m=>`${m.wrong} → ${m.right}`)},n:10,level:'mix',
      avoid:practiceItems(id).map(x=>x.prompt||(x.answers||[])[0]).filter(Boolean)});
    const got=(r.exercises||[]).filter(x=>x&&x.type);
    if(!got.length)throw new Error('Aucune question validée. Réessaie.');
    const st=S();st.aiBank=st.aiBank||{};const prev=st.aiBank[id]||[];
    st.aiBank[id]=[...prev,...got].slice(-300);invalidate(id);app().save();
    const all=practiceItems(id),start=all.length-got.length;
    session({key:'ai-'+id,title:`Nouvelles questions (IA) · ${g.title}`,topicId:null,ai:true,items:got.map((x,k)=>({tid:id,i:start+k,x:all[start+k]})),back:P?.back||{label:g.title,fn:()=>go('#g/'+id)},
      more:{label:'✨ 10 autres questions (IA)',fn:(b)=>generateAI(id,b)},extraMore:moreFor(id)},false);
  }catch(e){app().toast(e.message||'Génération impossible.');if(btn){btn.disabled=false;btn.textContent=btn.dataset.label}}
}
function unlimited(id){
  const n=15,items=window.TEF_GEN?.make(id,n)||[];if(!items.length)return;
  session({key:'gen-'+id,title:`Exercices illimités · ${card(id).title}`,topicId:null,items,back:{label:card(id).title,fn:()=>go('#g/'+id)},
    more:{label:`Encore ${n} exercices`,fn:()=>unlimited(id)}},false);
}
/* Secondary « new questions » button shown on end screens. */
const moreFor=id=>aiReady()?{label:'✨ 10 nouvelles questions (IA)',fn:(b)=>generateAI(id,b)}:window.TEF_GEN?.has(id)?{label:'♾️ Exercices automatiques',fn:()=>unlimited(id)}:null;
/* 1 = basic, 2 = intermediate, 3 = B2. The first 12 exercises were written from easy to hard. */
function levelOf(id,i){
  const x=practiceItems(id)[i];if(!x)return 1;if(x.lvl)return x.lvl;
  const own=(plus(id).practice||[]).length;return i<own?(i<5?1:i<9?2:3):1;
}
let P=null;
const SERIES=15;
function renderPractice(id,only){
  const all=practiceItems(id);
  const idx=only||(daily()?.pickFrom(id,SERIES,{fresh:true})||all.map((_,i)=>i).slice(0,SERIES));
  if(origin!=='today'||!daily()?.isTodayTopic(id))origin='grammar';
  let list=idx.map(i=>({tid:id,i,x:all[i]})).filter(o=>o.x);
  if(!only&&list.length<SERIES)list=[...list,...(window.TEF_GEN?.make(id,SERIES-list.length)||[])];
  if(!list.length){app().toast('Tu as fait toutes les questions de ce sujet aujourd’hui. Reviens demain, ou essaie les questions IA.');return}
  session({key:'topic-'+id,title:card(id).title,topicId:id,items:list,back:{label:card(id).title,fn:()=>go('#g/'+id)},extraMore:moreFor(id),
    more:{label:`Encore ${SERIES} questions`,fn:()=>{P=null;renderPractice(id);if(location.hash!=='#gp/'+id)history.replaceState(null,'','#gp/'+id)}}},true);
}
/* cfg: {key,title,items:[{tid,i,x}],mixed?,topicId?,back:{label,fn},onEnd?(summary),endPrimary?{label,fn}} */
function session(cfg,viaRoute){
  P={...cfg,idx:0,results:[]};
  if(!viaRoute&&location.hash!=='#gs/'+cfg.key){location.hash='#gs/'+cfg.key;return}
  app().show('gpractice');window.scrollTo(0,0);renderExercise();
}
function head(){
  const done=P.results.length,ok=P.results.filter(r=>r.ok).length;
  return `<div class="practice-head"><button class="back-link" data-lesson>‹ ${esc(P.back.label)}</button>${P.mixed||P.subtitle?`<div class="practice-title">${esc(P.title)}</div>`:''}<div class="practice-progress"><span>${Math.min(P.idx+1,P.items.length)}/${P.items.length}</span><span class="muted">${ok} juste${ok>1?'s':''} sur ${done}</span></div><div class="mini-bar"><i style="width:${Math.round(100*P.idx/P.items.length)}%"></i></div></div>`;
}
/* « (aller, futur simple) », « aller (futur simple) » and « aller, futur simple » are all shown as (aller, futur simple). */
const cueText=h=>String(h).trim().replace(/^\((.*)\)$/,'$1').replace(/\s*\(([^()]*)\)/g,', $1').replace(/^,\s*/,'').trim();
function promptHTML(s,inputHTML){
  const parts=String(s).split(/_{3,}/);
  if(parts.length<2)return esc(s)+(inputHTML?`<div style="margin-top:10px">${inputHTML}</div>`:'');
  return parts.map(esc).join(inputHTML||'<span class="gap">____</span>');
}
function renderExercise(){
  const root=$('#gpracticeBody');
  if(P.idx>=P.items.length)return renderEnd();
  const it=P.items[P.idx],x=it.x;
  let body='';
  if(x.type==='mcq'){
    const order=shuffle(x.choices.map((c,i)=>({c,ok:i===x.answer})));
    body=`<p class="ex-prompt">${promptHTML(x.prompt)}</p><div class="choice-list">${order.map(o=>`<button class="choice" data-ok="${o.ok?1:0}">${esc(o.c)}</button>`).join('')}</div>`;
  }else if(x.type==='fill'){
    /* A gap's hint says which word or form goes in it (« pouvoir », « possessif, je »), so it is shown right after the gap, textbook style. */
    const cue=x.hint?` <span class="ex-cue">(${esc(cueText(x.hint))})</span>`:'';
    body=`<p class="ex-prompt">${promptHTML(x.prompt,'<input class="gap-input" id="exInput" autocomplete="off" autocapitalize="none" spellcheck="false" enterkeyhint="done">'+cue)}</p>${accentBar()}<button class="btn" id="exCheck">Vérifier</button>`;
  }else if(x.type==='fix'||x.type==='transform'){
    body=`${x.instruction?`<p class="ex-instruction">${esc(x.instruction)}</p>`:'<p class="ex-instruction">Cette phrase contient une erreur. Réécris-la correctement.</p>'}<div class="doc-box ex-source">${esc(x.prompt)}</div><textarea class="writing-area ex-area" id="exInput" rows="3" autocomplete="off" autocapitalize="sentences" spellcheck="false">${x.type==='fix'?esc(x.prompt):''}</textarea>${x.hint?`<button class="hint-btn" id="exHint">Indice</button><span class="muted" id="exHintText" hidden>${esc(x.hint)}</span>`:''}${accentBar()}<button class="btn" id="exCheck">Vérifier</button>`;
  }else if(x.type==='order'){
    body=`<p class="ex-instruction">Touche les mots dans le bon ordre pour former la phrase.</p><div class="order-line" id="orderLine"><span class="muted">Ta phrase apparaîtra ici</span></div><div class="order-bank" id="orderBank">${shuffle(x.words.map((w,i)=>({w,i}))).map(o=>`<button class="token" data-t="${o.i}">${esc(o.w)}</button>`).join('')}</div><div class="button-row"><button class="btn ghost small" id="orderReset">Recommencer</button><button class="btn" id="exCheck">Vérifier</button></div>`;
  }
  const topicChip=(P.mixed?`<span class="chip topic-chip">${esc(card(it.tid).title)}</span>`:'')+(x.ai?'<span class="chip ai-chip">IA</span>':x.gen?'<span class="chip ai-chip">auto</span>':'');
  root.innerHTML=head()+`<div class="card exercise"><div class="exercise-top"><span class="kicker">${TYPE_LABEL[x.type]||''}</span>${topicChip}</div>${body}<div id="exFb"></div><div class="runner-nav" id="exNav" hidden><span></span><button class="btn" id="exNext">${P.idx<P.items.length-1?'Suivant ›':'Voir mon score'}</button></div></div>`;
  $('[data-lesson]',root).onclick=()=>P.back.fn();
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
  feedback(r.verdict,x,ok?'':(x.type==='fill'?`<strong>${esc(best)}</strong>`:esc(best)),ok?'':diff(fullGiven,fullBest),x.answers.length>1&&!ok?alsoOk(x.answers,best):null);
}
/* Other accepted answers, without the ones that only differ by a comma; at most three are shown. */
function alsoOk(answers,best){
  const seen=new Set([nocomma(norm(best))]),out=[];
  for(const a of answers){const k=nocomma(norm(a));if(!seen.has(k)){seen.add(k);out.push(a)}}
  return out.length>3?[...out.slice(0,3),'…']:out;
}
function feedback(verdict,x,expected,diffHTML,others){
  const title={ok:'✓ Correct',accents:'≈ Presque : vérifie les accents',wrong:'✕ Pas tout à fait'}[verdict];
  $('#exFb').innerHTML=`<div class="feedback ex-feedback v-${verdict}"><strong>${title}</strong>${expected?`<div>Réponse attendue : ${expected}</div>`:''}${diffHTML?`<div class="diff">${diffHTML}</div>`:''}${others?.length?`<div class="muted">Aussi accepté : ${others.map(esc).join(' · ')}</div>`:''}${x.explain?`<div class="ex-explain">${esc(x.explain)}</div>`:''}</div>`;
  if(!P.items[P.idx]?.x?.gen)$('#exFb').insertAdjacentHTML('beforeend','<button class="link-btn flag-btn" id="exFlag">Signaler une erreur dans cette question</button>');
  $('#exFlag')&&($('#exFlag').onclick=()=>{
    const it=P.items[P.idx],st=S();st.flags=st.flags||{};
    st.flags[sig(it.x)]={t:Date.now(),tid:it.tid,type:it.x.type,ai:!!it.x.ai};
    if(it.x.ai)it.x.flagged=true;
    app().save();$('#exFlag').textContent='Merci : cette question ne reviendra plus.';$('#exFlag').disabled=true;
  });
  $('#exNav').hidden=false;$('#exNext').focus();
  $('#exNext').onclick=()=>{P.idx++;renderExercise()};
}
function record(ok,given,expected){
  const st=S(),it=P.items[P.idx],x=it.x,g=card(it.tid);
  st.gstats[it.tid]=st.gstats[it.tid]||{n:0,ok:0};st.gstats[it.tid].n++;if(ok)st.gstats[it.tid].ok++;
  P.results.push({ok,k:P.idx});
  daily()?.logAnswer(it.tid,it.i,ok);
  if(!ok&&given&&x.type!=='mcq'&&x.type!=='order'){
    st.aiErrors=app().mergeAIErrors(st.aiErrors,[{original:String(x.type==='fill'?x.prompt.replace(/_{3,}/,given.trim()):given).trim(),correction:x.type==='fill'?x.prompt.replace(/_{3,}/,expected):expected,rule:x.explain||g.short,category:`Grammaire : ${g.title}`}]);
  }
  app().save();
}
function renderEnd(){
  const ok=P.results.filter(r=>r.ok).length,total=P.results.length,wrongK=P.results.filter(r=>!r.ok).map(r=>r.k);
  const st=S();st.gbest=st.gbest||{};
  if(P.topicId&&P.items.length===practiceItems(P.topicId).length&&(!st.gbest[P.topicId]||ok>st.gbest[P.topicId].score))st.gbest[P.topicId]={score:ok,total,date:new Date().toISOString()};
  app().addMin(Math.max(2,Math.round(total*0.7)));app().save();app().errors?.();
  // per-topic breakdown for mixed sessions
  const by={};P.results.forEach(r=>{const t=P.items[r.k].tid;by[t]=by[t]||{ok:0,n:0};by[t].n++;if(r.ok)by[t].ok++});
  const breakdown=P.mixed?`<div class="breakdown">${Object.entries(by).map(([t,v])=>`<div class="bd-row"><span>${esc(card(t).title)}</span><strong class="${v.ok===v.n?'ok':v.ok/v.n>=.5?'mid':'low'}">${v.ok}/${v.n}</strong></div>`).join('')}</div>`:'';
  const cb=P.onEnd;P.onEnd=null; // only the first full pass counts for the daily plan
  cb?.({ok,total,by});
  const pct=total?Math.round(100*ok/total):0;
  const msg=pct>=85?'Excellent : c’est en place.':pct>=60?'Bien. Refais tes erreurs maintenant, puis relis la partie « À retenir ».':'Relis la règle et les exemples, puis refais tes erreurs. Elles sont aussi dans « Mes erreurs ».';
  const primary=P.endPrimary,more=P.more,extra=P.extraMore;
  $('#gpracticeBody').innerHTML=`<div class="practice-head"><button class="back-link" data-lesson>‹ ${esc(P.back.label)}</button></div><div class="card intro-card"><h2>${ok}/${total}</h2><p>${msg}</p>${breakdown}<div class="button-row" style="justify-content:center">${primary?`<button class="btn" id="endPrimary">${esc(primary.label)}</button>`:''}${wrongK.length?`<button class="btn ${primary?'secondary':''}" id="redoWrong">Refaire mes erreurs (${wrongK.length})</button>`:''}${more?`<button class="btn ${wrongK.length||primary?'secondary':''}" id="moreQ">${esc(more.label)}</button>`:''}${extra?`<button class="btn ghost" id="extraQ">${esc(extra.label)}</button>`:''}<button class="btn ghost" data-lesson>${P.topicId?'Revoir le cours':'Retour'}</button></div></div>`;
  $$('[data-lesson]').forEach(b=>b.onclick=()=>P.back.fn());
  $('#endPrimary')&&($('#endPrimary').onclick=()=>primary.fn());
  $('#redoWrong')&&($('#redoWrong').onclick=()=>session({...P,key:P.key+'-r',title:P.title,items:wrongK.map(k=>P.items[k]),onEnd:null},false));
  $('#moreQ')&&($('#moreQ').onclick=e=>more.fn(e.currentTarget));
  $('#extraQ')&&($('#extraQ').onclick=e=>extra.fn(e.currentTarget));
}

function init(){
  window.addEventListener('hashchange',()=>{if(!route()&&/^#?$/.test(location.hash)){const v=S().view;if(/^g(topic|practice|copy)$/.test(v))app().show(origin==='today'?'today':'grammar')}});
  route();
}
window.TEF_TOPIC={init,open:(id,o)=>{origin=o||'grammar';go('#g/'+id)},copy:(id,o)=>{origin=o||'grammar';go('#c/'+id)},practice:id=>go('#gp/'+id),
  session:(cfg)=>{origin='today';session(cfg,false)},check,norm,practiceItems,isFlagged,levelOf,lessonLines,notebookLines:linesFor,updatesOf,markCopied,notebookUpdates,invalidate,moreFor,unlimited,generateAI,route,current:()=>P&&{key:P.key,items:P.items.map(o=>({tid:o.tid,i:o.i,x:o.x})),idx:P.idx}};
})();
