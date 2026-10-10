/* TEF B2 Coach — vocabulary (spaced repetition), vocabulary browser, grammar and conjugation.
   Loaded after app.js; app.js calls TEF_STUDY.* once the DOM is ready. */
(()=>{
'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const app=()=>window.TEF_APP;
const esc=x=>String(x??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const DAY=864e5,iso=d=>d.toISOString().slice(0,10),today=()=>iso(new Date()),inDays=n=>iso(new Date(Date.now()+n*DAY));
const fold=s=>String(s||'').toLocaleLowerCase('fr').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[’']/g,'’');

const THEMES={administration:'Administration & préfecture',logement:'Logement',travail:'Travail',sante:'Santé',transports:'Transports',ecole:'École',banque:'Banque',loisirs:'Loisirs',medias:'Médias',environnement:'Environnement',citoyennete:'Vie citoyenne',argumentation:'Argumentation',connecteur:'Connecteurs',ville:'Ville',quotidien:'Vie quotidienne',oral:'Oral',adverbe:'Adverbes',scan:'Mes notes'};
const POS={nom:'nom',verbe:'verbe',adj:'adjectif',adv:'adverbe',expr:'expression',connecteur:'connecteur'};
const TENSE_LABEL={present:'Présent',passeCompose:'Passé composé',imparfait:'Imparfait',plusQueParfait:'Plus-que-parfait',futur:'Futur simple',conditionnel:'Conditionnel présent',conditionnelPasse:'Conditionnel passé',subjonctif:'Subjonctif présent',imperatif:'Impératif'};
const INTERVALS=[0,1,3,7,14,30,60,120];
const NEW_PER_DAY=15;

const S=()=>app().S, D=()=>app().D;
const all=()=>app().vocab();
const label=t=>THEMES[t]||t||'général';
const kindOf=v=>v.pos?(['expr','connecteur'].includes(v.pos)?'expression':'word'):(String(v.front||'').trim().split(/\s+/).length>1?'expression':'word');
const stripArticle=f=>String(f||'').replace(/^(le |la |les |l’|l')/i,'');
const stripPron=f=>String(f||'').replace(/^(se |s’|s')/i,'');
const core=v=>v.pos==='verbe'?stripPron(v.front):stripArticle(v.front);

/* ---------- spaced repetition ---------- */
function grade(id,rate){
  const st=S();st.srs[id]=st.srs[id]||{box:0,reps:0,lapses:0};
  const r=st.srs[id];
  if(rate==='again'){r.box=0;r.lapses++;r.due=today()}
  else if(rate==='hard'){r.box=Math.max(1,r.box);r.due=inDays(1)}
  else{r.box=Math.min(INTERVALS.length-1,r.box+1);r.due=inDays(INTERVALS[r.box])}
  r.reps++;r.last=today();
  st.ratings[id]=rate==='good'?(r.box>=3?3:2):rate==='hard'?1:0;
  st.quests.q1=Object.values(st.ratings).filter(x=>x>=2).length;
}
function newToday(){const st=S();if(st.newDay!==today()){st.newDay=today();st.newCount=0}return st.newCount||0}
function counts(){
  const st=S(),t=today(),items=filtered();
  const due=items.filter(v=>st.srs[v.id]&&st.srs[v.id].due<=t).length;
  const fresh=items.filter(v=>!st.srs[v.id]).length;
  return {due,fresh,newLeft:Math.max(0,NEW_PER_DAY-newToday())};
}
function filtered(){const th=S().deckTheme||'all';return all().filter(v=>th==='all'||v.tag===th)}

let deck=[],pos=0,cur=null,curMode='meaning',free=false;
function build(opts={}){
  const st=S(),t=today(),items=filtered().filter(v=>S().deckMode!=='gender'||(v.pos==='nom'&&v.gender));
  if(opts.weak){deck=shuffle(items.filter(v=>(st.ratings[v.id]??0)<2&&st.ratings[v.id]!==undefined));free=true}
  else if(opts.free){deck=shuffle(items);free=true}
  else{
    const due=items.filter(v=>st.srs[v.id]&&st.srs[v.id].due<=t).sort((a,b)=>st.srs[a.id].due.localeCompare(st.srs[b.id].due));
    const fresh=items.filter(v=>!st.srs[v.id]).slice(0,Math.max(0,NEW_PER_DAY-newToday()));
    deck=[...due,...fresh];free=false;
  }
  pos=0;
}
function nounParts(v){
  const sing=stripArticle(v.front),pl=String(v.plural||'').replace(/^les /i,'');
  return {sing,pl,art:v.gender==='f'?'une':'un'};
}
function wrongPlural(sing,pl){
  if(!pl||pl===sing)return null;
  if(pl===sing+'s'){if(/al$/.test(sing))return sing.slice(0,-2)+'aux';if(/(eau|au|eu)$/.test(sing))return sing+'x';if(/ail$/.test(sing))return sing.slice(0,-3)+'aux';return sing+'x'}
  return sing+'s';
}
function genderQuestion(v){
  const {sing,pl,art}=nounParts(v),other=art==='un'?'une':'un',bad=wrongPlural(sing,pl);
  const correct=bad?`${art} ${sing} → des ${pl}`:`${art} ${sing}`;
  const opts=bad?[correct,`${other} ${sing} → des ${pl}`,`${art} ${sing} → des ${bad}`,`${other} ${sing} → des ${bad}`]:[correct,`${other} ${sing}`];
  return {prompt:`Genre et pluriel : <strong>${esc(sing)}</strong>`,correct,options:shuffle(opts)};
}
function mcq(v,field){
  const pool=all().filter(x=>x.id!==v.id&&x[field]&&x[field]!==v[field]);
  const same=pool.filter(x=>x.pos&&x.pos===v.pos&&x.tag===v.tag),rest=pool.filter(x=>!same.includes(x));
  const picks=[...shuffle(same),...shuffle(rest)].map(x=>x[field]).filter((x,i,a)=>a.indexOf(x)===i).slice(0,3);
  return shuffle([v[field],...picks]);
}
function cloze(v){
  const ex=v.example||'',t=v.front;if(!ex||!t)return null;
  const i=ex.toLowerCase().indexOf(t.toLowerCase());if(i<0)return null;
  return esc(ex.slice(0,i))+'_____'+esc(ex.slice(i+t.length));
}
function card(){
  const c=$('#flashcard');if(!c)return;
  if(!deck.length||pos>=deck.length){
    if(!deck.length)build();
    if(!deck.length||pos>=deck.length){
      const k=counts();
      c.querySelector('.front').innerHTML=`<div class="kicker" style="margin-bottom:10px">Répétition espacée</div><div style="font-size:21px;line-height:1.35">${pos?'Session terminée 🎉':'Rien à réviser pour l’instant 🎉'}</div><p class="muted">${k.due} carte(s) dues • ${k.fresh} jamais vues${k.newLeft?'':' • limite de nouvelles cartes atteinte aujourd’hui'}</p><div class="button-row" style="justify-content:center"><button class="btn secondary" id="deckFree">Réviser quand même</button></div>`;
      $('.flash-actions').style.visibility='hidden';
      $('#flashMeta').textContent='';
      $('#deckFree').onclick=e=>{e.stopPropagation();build({free:true});card()};
      return;
    }
  }
  cur=deck[pos];const v=cur,st=S();
  const mode=S().deckMode||'mix';
  const cycle=['meaning','reverse','cloze','meaning','gender'];
  curMode=mode==='gender'?'gender':mode==='meaning'?['meaning','reverse','cloze'][(st.flash||0)%3]:cycle[(st.flash||0)%cycle.length];
  if(curMode==='gender'&&!(v.pos==='nom'&&v.gender))curMode='meaning';
  if(curMode==='cloze'&&!cloze(v))curMode='reverse';
  let q;
  if(curMode==='gender')q=genderQuestion(v);
  else if(curMode==='reverse')q={prompt:`Quelle expression française correspond à : “${esc(v.back)}” ?`,correct:v.front,options:mcq(v,'front')};
  else if(curMode==='cloze')q={prompt:`Complète la phrase :<br><span class="muted">${cloze(v)}</span>`,correct:v.front,options:mcq(v,'front')};
  else q={prompt:`Que signifie : <strong>“${esc(v.front)}”</strong> ?`,correct:v.back,options:mcq(v,'back')};
  c.classList.remove('flipped');$('.back',c).style.display='none';$('.flash-actions').style.visibility='hidden';
  $('.front',c).innerHTML=`<div class="kicker" style="margin-bottom:10px">${curMode==='gender'?'Genre & pluriel':'Question vocabulaire'}</div><div style="font-size:21px;line-height:1.35">${q.prompt}</div><div class="choice-list flash-choices" style="width:100%;margin-top:18px">${q.options.map((o,i)=>`<button class="choice" data-flash-answer="${i}">${esc(o)}</button>`).join('')}</div><div id="flashFeedback"></div>`;
  const srs=st.srs[v.id];
  $('#flashMeta').textContent=`${pos+1}/${deck.length} • ${label(v.tag)}${srs?` • boîte ${srs.box}`:' • nouvelle carte'}${free?' • révision libre':''}`;
  $$('[data-flash-answer]',c).forEach(b=>b.onclick=e=>{
    e.stopPropagation();
    const choice=q.options[+b.dataset.flashAnswer],ok=choice===q.correct;
    $$('[data-flash-answer]',c).forEach(x=>{x.disabled=true;if(q.options[+x.dataset.flashAnswer]===q.correct)x.classList.add('correct')});
    if(!ok)b.classList.add('wrong');
    $('#flashFeedback',c).innerHTML=`<div class="feedback" style="margin-top:12px"><strong>${ok?'✓ Correct':'✕ À revoir'}</strong><br>${esc(v.front)} = ${esc(v.back)}${detailLine(v)?`<br><small>${detailLine(v)}</small>`:''}<br><small>${esc(v.example||'')}</small></div>`;
    $('.flash-actions').style.visibility='visible';
    c.dataset.lastOk=ok?'1':'0';
  });
}
function rate(r){
  if(!cur)return;
  const st=S(),wasNew=!st.srs[cur.id];
  if(!free||st.srs[cur.id]||r){grade(cur.id,r)}
  if(wasNew){newToday();st.newCount=(st.newCount||0)+1}
  if(r==='again'&&!free)deck.push(cur);
  st.flash=(st.flash||0)+1;pos++;
  app().save();card();if(!$('#vocabListPanel').hidden)renderList();
}

/* ---------- vocabulary browser ---------- */
function detailLine(v){
  if(v.pos==='nom')return `nom ${v.gender==='f'?'féminin':v.gender==='m'?'masculin':''}${v.plural?` · pluriel : ${esc(v.plural)}`:''}`;
  if(v.pos==='adj')return `adjectif · féminin : ${esc(v.fem||'')}${v.plural?` · pluriel : ${esc(v.plural)}`:''}`;
  if(v.pos==='verbe')return `verbe · ${v.group?(v.group===1?'1er':v.group+'e')+' groupe':''}${v.aux?` · auxiliaire ${v.aux}`:''}${v.construction?` · ${esc(v.construction)}`:''}`;
  return v.pos?POS[v.pos]:'';
}
function mastery(v){
  const st=S(),has=Object.prototype.hasOwnProperty.call(st.ratings||{},v.id);
  if(!has)return {key:'new',label:'Pas testé'};
  const r=st.ratings[v.id];
  if(r>=3)return {key:'good',label:'Bien connu'};
  if(r>=1)return {key:'ok',label:'En cours'};
  return {key:'bad',label:'À apprendre'};
}
let fStatus='all',fType='all';
function rank(v,q){
  if(!q)return 5;
  const f=fold(v.front),c=fold(core(v)),b=fold(v.back),ws=new RegExp('(^|[^a-z0-9’])'+q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'($|[^a-z0-9’])');
  if(c===q||f===q)return 0;
  if(ws.test(f))return 1;
  if(ws.test(b))return 2;
  if(f.includes(q))return 3;
  if(b.includes(q)||fold(v.example).includes(q))return 4;
  return -1;
}
function renderSummary(){
  const counts={good:0,ok:0,bad:0,new:0};all().forEach(v=>counts[mastery(v).key]++);
  const r=$('#vocabSummary');if(!r)return;
  r.innerHTML=`<div class="vocab-stat good"><strong>${counts.good}</strong><span>Bien connus</span></div><div class="vocab-stat ok"><strong>${counts.ok}</strong><span>En cours</span></div><div class="vocab-stat bad"><strong>${counts.bad}</strong><span>À apprendre</span></div><div class="vocab-stat new"><strong>${counts.new}</strong><span>Pas testés</span></div>`;
}
function renderList(){
  const root=$('#vocabList');if(!root)return;renderSummary();
  const q=fold(($('#vocabSearch')?.value||'').trim()),th=$('#vocabTheme')?.value||'all',ps=$('#vocabPos')?.value||'all';
  const items=all().map(v=>({v,r:rank(v,q)})).filter(({v,r})=>{
    if(r<0)return false;
    if(fStatus!=='all'&&mastery(v).key!==fStatus)return false;
    if(fType!=='all'&&kindOf(v)!==fType)return false;
    if(th!=='all'&&v.tag!==th)return false;
    if(ps!=='all'){const [p,g]=ps.split(':');if(v.pos!==p)return false;if(g&&String(v.group)!==g)return false}
    return true;
  }).sort((a,b)=>a.r-b.r||fold(core(a.v)).localeCompare(fold(core(b.v)),'fr')).map(x=>x.v);
  const shown=items.slice(0,300);
  root.innerHTML=(items.length?`<p class="muted vocab-count">${items.length} résultat${items.length>1?'s':''}${items.length>shown.length?' — affine la recherche pour voir la suite':''}</p>`:'')+(shown.length?shown.map(v=>{
    const m=mastery(v);
    return `<div class="vocab-item"><div class="vocab-main"><div class="vocab-title-row"><strong>${esc(v.front)}</strong><span class="chip">${kindOf(v)==='expression'?'Expression':'Mot'} · ${esc(label(v.tag))}</span></div><div class="vocab-translation">${esc(v.back||'')}</div>${detailLine(v)?`<div class="vocab-detail">${detailLine(v)}</div>`:''}<small>${esc(v.example||'')}</small>${v.pos==='verbe'&&window.TEF_CONJ?`<div><button class="btn small ghost conj-btn" data-conj="${esc(v.front)}">Conjuguer ›</button></div>`:''}</div><div class="vocab-side"><span class="mastery mastery-${m.key}">${m.label}</span><div class="mastery-actions" aria-label="Modifier la maîtrise"><button title="À apprendre" data-vmark="0" data-vid="${esc(v.id)}">🔴</button><button title="En cours" data-vmark="1" data-vid="${esc(v.id)}">🟡</button><button title="Bien connu" data-vmark="3" data-vid="${esc(v.id)}">🟢</button></div></div></div>`;
  }).join(''):'<div class="card"><p class="muted">Aucun mot ne correspond à ce filtre.</p></div>');
  $$('[data-vmark]',root).forEach(b=>b.onclick=()=>{const st=S();st.ratings[b.dataset.vid]=+b.dataset.vmark;st.quests.q1=Object.values(st.ratings).filter(x=>x>=2).length;app().save();renderList();app().today()});
  $$('[data-conj]',root).forEach(b=>b.onclick=()=>conjModal(b.dataset.conj));
}
function setTab(tab){
  $$('[data-vocab-tab]').forEach(b=>b.classList.toggle('active',b.dataset.vocabTab===tab));
  $('#vocabPractice').hidden=tab!=='practice';$('#vocabListPanel').hidden=tab!=='list';
  if(tab==='list')renderList();else card();
}

/* ---------- conjugation ---------- */
function conjTables(inf){
  const C=window.TEF_CONJ;if(!C)return '<p class="muted">Moteur de conjugaison indisponible.</p>';
  const r=C.conjugate(inf);
  if(!r)return `<p class="muted">Je ne connais pas le verbe « ${esc(inf)} ». Vérifie l’orthographe (infinitif : -er, -ir, -re, -oir).</p>`;
  const persons=r.impersonal?[2]:[0,1,2,3,4,5,6];
  const head=`<div class="conj-head"><strong>${esc(r.infinitive)}</strong><span class="chip">${r.group===1?'1er':r.group+'e'} groupe</span><span class="chip">auxiliaire ${r.aux}</span><span class="chip">participe passé : ${esc(r.participle)}</span>${r.presentParticiple?`<span class="chip">participe présent : ${esc(r.presentParticiple)}</span>`:''}</div>${r.note?`<p class="muted">${esc(r.note)}</p>`:''}`;
  const tables=Object.keys(TENSE_LABEL).map(t=>{
    const rows=t==='imperatif'?(r.impersonal?[]:r.tenses.imperatif.map((f,i)=>f?`<li>${esc(f)} <small class="muted">(${['tu','nous','vous'][i]})</small></li>`:'').filter(Boolean)):persons.map(i=>r.tenses[t][i]).filter(Boolean).map(f=>`<li>${esc(f)}</li>`);
    return rows.length?`<div class="conj-table"><h4>${TENSE_LABEL[t]}</h4><ul>${rows.join('')}</ul></div>`:'';
  }).join('');
  return head+`<div class="conj-grid">${tables}</div>`;
}
function conjModal(inf){app().modal('Conjugaison',conjTables(inf))}
function verbList(){
  const C=window.TEF_CONJ,set=new Set(all().filter(v=>v.pos==='verbe').map(v=>v.front));
  (C?.listIrregulars?.()||[]).forEach(v=>set.add(v));
  ['parler','finir','attendre','être','avoir','aller','faire','manger','commencer','appeler','acheter','préférer','payer','envoyer','se lever','habiter','travailler','choisir','répondre'].forEach(v=>set.add(v));
  return [...set].sort((a,b)=>fold(stripPron(a)).localeCompare(fold(stripPron(b)),'fr'));
}

/* ---------- grammar ---------- */
function gStatus(g){
  const st=S().gstats[g.id];
  if(!st||st.n<3)return g.status;
  const acc=st.ok/st.n;return acc>=.85&&st.n>=4?'reliable':acc>=.6?'learning':'weak';
}
const STATUS_LABEL={weak:'à renforcer',learning:'en cours',untested:'à tester',reliable:'fiable',mastered:'maîtrisé'};
let gFilter='all';
function grammar(){
  const root=$('#grammarList');if(!root)return;
  const list=D().grammar.filter(g=>gFilter==='all'||gStatus(g)===gFilter);
  const sections=[];list.forEach(g=>{const s=g.section||'Autres';if(!sections.includes(s))sections.push(s)});
  const conj=`<div class="card conj-card"><h3>🔤 Conjugaison</h3><p class="muted">Tous les temps de l’examen, pour n’importe quel verbe (réguliers et irréguliers).</p><div class="conj-form"><input id="conjInput" list="conjVerbs" placeholder="ex. prendre, s’inscrire, recevoir" autocomplete="off" autocapitalize="none"><button class="btn" id="conjGo">Conjuguer</button></div><datalist id="conjVerbs">${verbList().map(v=>`<option value="${esc(v)}">`).join('')}</datalist><div id="conjOut"></div></div>`;
  root.innerHTML=conj+(list.length?'':'<div class="card"><p class="muted">Aucune règle dans ce filtre.</p></div>')+sections.map(sec=>`<h3 class="grammar-section">${esc(sec)}</h3>`+list.filter(g=>(g.section||'Autres')===sec).map(g=>{
    const stt=gStatus(g),st=S().gstats[g.id],n=window.TEF_TOPIC?TEF_TOPIC.practiceItems(g.id).length:0,best=(S().gbest||{})[g.id];
    return `<button class="grammar-item topic-link" data-g="${g.id}"><div class="grammar-head"><div><strong>${esc(g.title)}</strong><div class="muted">${esc(g.short)}</div><div class="topic-sub">${n} exercices${best?` · meilleur score ${best.score}/${best.total}`:''}${S().gnotes?.[g.id]?' · 📝 notes':''}</div></div><div class="topic-side"><span class="status ${stt}">${STATUS_LABEL[stt]||stt}${st?` · ${st.ok}/${st.n}`:''}</span><span class="chev" aria-hidden="true">›</span></div></div></button>`;
  }).join('')).join('');
  $$('.topic-link',root).forEach(it=>it.onclick=()=>window.TEF_TOPIC?.open(it.dataset.g));
  const go=()=>{const v=$('#conjInput').value.trim();if(v)$('#conjOut').innerHTML=conjTables(v)};
  $('#conjGo').onclick=go;$('#conjInput').onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();go()}};
}

/* ---------- wiring ---------- */
function controls(){
  const themes=[...new Set(all().map(v=>v.tag).filter(Boolean))].sort((a,b)=>label(a).localeCompare(label(b),'fr'));
  const opts=`<option value="all">Tous les thèmes</option>`+themes.map(t=>`<option value="${esc(t)}">${esc(label(t))}</option>`).join('');
  const dt=$('#deckTheme');if(dt){dt.innerHTML=opts;dt.value=S().deckTheme||'all';dt.onchange=()=>{S().deckTheme=dt.value;app().save();build();card()}}
  const vt=$('#vocabTheme');if(vt){vt.innerHTML=opts;vt.onchange=renderList}
  const vp=$('#vocabPos');if(vp)vp.onchange=renderList;
  $$('[data-deck-mode]').forEach(b=>{b.classList.toggle('active',(S().deckMode||'mix')===b.dataset.deckMode);b.onclick=()=>{S().deckMode=b.dataset.deckMode;app().save();$$('[data-deck-mode]').forEach(x=>x.classList.toggle('active',x===b));build();card()}});
}
function init(){
  controls();
  $$('[data-rate]').forEach(b=>b.onclick=()=>rate(b.dataset.rate));
  $('#shuffleCards')&&($('#shuffleCards').onclick=()=>{build({free:true});card()});
  $('#weakCards')&&($('#weakCards').onclick=()=>{build({weak:true});card();app().toast(`${deck.length} cartes faibles`)});
  $$('[data-vocab-tab]').forEach(b=>b.onclick=()=>setTab(b.dataset.vocabTab));
  $$('[data-vstatus]').forEach(b=>b.onclick=()=>{fStatus=b.dataset.vstatus;$$('[data-vstatus]').forEach(x=>x.classList.toggle('active',x===b));renderList()});
  $$('[data-vtype]').forEach(b=>b.onclick=()=>{fType=b.dataset.vtype;$$('[data-vtype]').forEach(x=>x.classList.toggle('active',x===b));renderList()});
  $('#vocabSearch')?.addEventListener('input',renderList);
  $$('[data-grammar-filter]').forEach(b=>b.onclick=()=>{gFilter=b.dataset.grammarFilter;$$('[data-grammar-filter]').forEach(x=>x.classList.toggle('active',x===b));grammar()});
}
function dueCount(){const st=S(),t=today();return all().filter(v=>st.srs[v.id]&&st.srs[v.id].due<=t).length}

window.TEF_STUDY={init,build:o=>build(o||{}),card,renderList,grammar,conjModal,conjTables,dueCount,counts};
})();
