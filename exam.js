/* TEF B2 Coach — comprehension practice series, full mock exam ("examen blanc"),
   per-skill level estimates and exam history. Loaded after app.js. */
(()=>{
'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const app=()=>window.TEF_APP,S=()=>app().S,D=()=>app().D;
const esc=x=>String(x??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const LEVELS=['A2','B1','B2','C1'];
const SKILL={reading:'Compréhension écrite',listening:'Compréhension orale',writing:'Expression écrite',speaking:'Expression orale'};
const GENRE={affiche:'affiche',avis:'avis',courriel:'courriel',lettre:'lettre',annonce:'annonce',article:'article',opinion:'texte d’opinion',reglement:'règlement',horaires:'horaires',offre:'offre',formulaire:'formulaire',brochure:'brochure',repondeur:'message vocal',dialogue:'dialogue',radio:'flash radio',interview:'interview',debat:'débat',publicite:'publicité',chronique:'chronique'};
const SHORT={reading:'CE',listening:'CO',writing:'EE',speaking:'EO'};
const fmt=sec=>`${String(Math.floor(sec/60)).padStart(2,'0')}:${String(sec%60).padStart(2,'0')}`;

/* Official format comes from data.js (verified against Le français des affaires). */
const F=()=>D().official.format;
/* Practice item mix for a 20-question section: progressive difficulty, B2-weighted.
   This is our training choice, not an official distribution. */
const DIST_FULL={A2:3,B1:6,B2:8,C1:3};
const DIST_MINI={A2:1,B1:2,B2:2,C1:1};

/* ---------- item selection & logging ---------- */
function pick(kind,dist,levelFilter){
  const st=S(),items=D()[kind].filter(x=>!levelFilter||levelFilter==='all'||(x.level||'B1')===levelFilter);
  const score=x=>(st.seen[x.id]||0)+Math.random()*1000;
  if(typeof dist==='number'){return [...items].sort((a,b)=>score(a)-score(b)).slice(0,dist)}
  const out=[];
  for(const L of LEVELS){out.push(...items.filter(x=>(x.level||'B1')===L).sort((a,b)=>score(a)-score(b)).slice(0,dist[L]||0))}
  return out;
}
function logItem(kind,item,ok,mode){
  const st=S();st.seen[item.id]=Date.now();
  st.items.push({k:kind,id:item.id,lv:item.level||'B1',ok:ok?1:0,t:Date.now(),m:mode});
  if(st.items.length>800)st.items=st.items.slice(-800);
}

/* ---------- level estimates ---------- */
const LEVEL_PCT={A1:10,A2:25,B1:50,'B1+':62,B2:78,'B2+':88,C1:95,C2:100};
function byLevel(rows){const by={};rows.forEach(r=>{const b=by[r.lv]=by[r.lv]||{n:0,ok:0};b.n++;b.ok+=r.ok});return by}
function levelFrom(by,minN){
  let est=null;
  for(const L of LEVELS){const b=by[L];if(!b||b.n<minN)continue;if(b.ok/b.n>=.6)est=L}
  if(!est){const tot=Object.values(by).reduce((a,b)=>a+b.n,0);if(tot>=minN*2)est='A2'}
  return est;
}
function compEstimate(kind){
  const rows=S().items.filter(r=>r.k===kind).slice(-60);
  if(rows.length<8)return null;
  const by=byLevel(rows),level=levelFrom(by,3);
  const hi=rows.filter(r=>r.lv==='B2'||r.lv==='C1');
  const readiness=hi.length>=4?Math.round(100*hi.reduce((a,r)=>a+r.ok,0)/hi.length):(LEVEL_PCT[level]||40);
  return {level:level||'—',readiness,note:`${rows.length} questions récentes${hi.length?` • ${Math.round(100*hi.reduce((a,r)=>a+r.ok,0)/hi.length)} % juste aux niveaux B2–C1`:''}`};
}
function prodEstimate(skill){
  const rows=S().prod.filter(r=>r.skill===skill).slice(-3);
  if(!rows.length)return null;
  const norm=l=>String(l).toUpperCase().replace(/\s/g,'').match(/(A1|A2|B1\+?|B2\+?|C1|C2)/)?.[1]||'B1';
  const vals=rows.map(r=>LEVEL_PCT[norm(r.level)]||50),avg=Math.round(vals.reduce((a,b)=>a+b,0)/vals.length);
  return {level:norm(rows[rows.length-1].level),readiness:avg,note:`${rows.length} correction${rows.length>1?'s':''} IA récente${rows.length>1?'s':''}`};
}
function skillEstimates(){
  return D().profile.skills.map(s=>{
    const e=(s.id==='reading'||s.id==='listening')?compEstimate(s.id):prodEstimate(s.id);
    if(!e)return {...s,note:'Diagnostic du '+new Date(D().profile.diagnosticDate).toLocaleDateString('fr-FR')};
    const b2=['B2','B2+','C1','C2'].includes(e.level);
    return {...s,level:e.level,readiness:Math.max(3,Math.min(100,e.readiness)),status:b2?'strength':'priority',note:e.note};
  });
}

/* ---------- speech (TTS + recognition) ---------- */
let voices=[];
function loadVoices(){if(!('speechSynthesis' in window))return;voices=speechSynthesis.getVoices().filter(v=>/^fr/i.test(v.lang));voices.sort((a,b)=>(/fr-FR/i.test(b.lang)?1:0)-(/fr-FR/i.test(a.lang)?1:0))}
if('speechSynthesis' in window){loadVoices();speechSynthesis.onvoiceschanged=loadVoices}
const FEMALE=/(amelie|amélie|audrey|aurelie|aurélie|marie|julie|celine|céline|denise|eloise|éloïse|virginie|léa|lea|chantal|sylvie|female|femme|google français)/i;
const MALE=/(thomas|daniel|henri|paul|nicolas|claude|remy|rémy|jerome|jérôme|antoine|male|homme|mathieu)/i;
function voiceFor(sp){
  if(!voices.length)loadVoices();
  if(!voices.length)return {voice:null,pitch:1};
  const f=voices.find(v=>FEMALE.test(v.name)),m=voices.find(v=>MALE.test(v.name));
  if(/^F/.test(sp))return {voice:f||voices[0],pitch:f?1:1.15};
  if(/^H/.test(sp))return {voice:m||voices.find(v=>v!==f)||voices[0],pitch:m?1:.82};
  return {voice:voices[0],pitch:1};
}
function speakItem(item,onEnd){
  if(!('speechSynthesis' in window)){onEnd?.(false);return false}
  speechSynthesis.cancel();
  const parts=item.lines?.length?item.lines.map(l=>({sp:l[0],t:l[1]})):[{sp:'',t:item.text}];
  let i=0;
  const next=()=>{
    if(i>=parts.length){onEnd?.(true);return}
    const p=parts[i++],u=new SpeechSynthesisUtterance(p.t),v=voiceFor(p.sp);
    u.lang='fr-FR';if(v.voice)u.voice=v.voice;u.pitch=v.pitch;u.rate=.98;
    u.onend=()=>setTimeout(next,item.lines?350:0);u.onerror=()=>setTimeout(next,0);
    speechSynthesis.speak(u);
  };
  next();return true;
}
/* Continuous French speech recognition (no push-to-talk). Returns a stop() that yields the transcript. */
function recognize(el){
  const R=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!R){app().toast('Transcription vocale indisponible dans ce navigateur (essaie Chrome).');return ()=>''}
  let finalText='',live=true,rec;
  const start=()=>{rec=new R();rec.lang='fr-FR';rec.continuous=true;rec.interimResults=true;
    rec.onresult=e=>{let interim='';for(let i=e.resultIndex;i<e.results.length;i++){const r=e.results[i];if(r.isFinal)finalText+=r[0].transcript.trim()+' ';else interim+=r[0].transcript}
      if(el){el.hidden=false;el.innerHTML=esc(finalText)+(interim?`<span class="muted">${esc(interim)}</span>`:'')}};
    rec.onend=()=>{if(live)try{rec.start()}catch{}};rec.onerror=e=>{if(e.error==='not-allowed'){live=false;app().toast('Micro refusé.')}};
    try{rec.start()}catch{}};
  start();if(el){el.hidden=false;el.innerHTML='<span class="muted">🎙️ J’écoute… parle naturellement.</span>'}
  return ()=>{live=false;try{rec.stop()}catch{}return finalText.trim()};
}

/* ---------- runner overlay ---------- */
let R=null; // current run
function overlay(){
  let o=$('#examRunner');
  if(!o){o=document.createElement('div');o.id='examRunner';o.className='exam-runner';document.body.appendChild(o)}
  o.hidden=false;document.body.classList.add('exam-open');
  queueMicrotask(()=>{if(!o.querySelector('.city-bg')&&window.TEF_CITY)o.appendChild(window.TEF_CITY())});
  return o;
}
function closeOverlay(){const o=$('#examRunner');if(o){o.hidden=true;o.innerHTML=''}document.body.classList.remove('exam-open');if('speechSynthesis' in window)speechSynthesis.cancel();clearInterval(R?.tick);R?.stopRec?.();R=null}
function header(title,sub){
  return `<div class="runner-head"><div><div class="kicker">${esc(R.type==='practice'?'Entraînement':'Examen blanc')}</div><strong>${esc(title)}</strong>${sub?`<div class="muted">${sub}</div>`:''}</div><div class="runner-right"><span class="timer" id="rTimer"></span><button class="close" id="rQuit" title="Quitter">×</button></div></div>`;
}
function bindQuit(){$('#rQuit').onclick=()=>{if(R.type==='practice'||confirm('Quitter l’examen blanc ? Il ne sera pas enregistré.'))closeOverlay()}}
function startClock(sec,onEnd){
  clearInterval(R.tick);R.left=sec;const el=()=>$('#rTimer');
  const paint=()=>{if(el()){el().textContent=fmt(Math.max(0,R.left));el().classList.toggle('low',R.left<=60)}};
  paint();R.tick=setInterval(()=>{R.left--;paint();if(R.left<=0){clearInterval(R.tick);onEnd()}},1000);
}

/* ---------- public: practice series ---------- */
function series(kind,level){
  const items=pick(kind,5,level||S().practiceLevel||'all');
  if(!items.length)return app().toast('Aucun document pour ce niveau.');
  if(kind==='reading'&&!level&&!(S().practiceLevel&&S().practiceLevel!=='all'))items.sort((a,b)=>LEVELS.indexOf(a.level)-LEVELS.indexOf(b.level));
  R={type:'practice',plan:[{kind,items,answers:[],i:0}],step:0,results:{}};
  runComp();
}
/* ---------- public: mock exam ---------- */
const PLANS={
  full:['reading','listening','writing','speaking'],
  mini:['reading','listening'],
  reading:['reading'],listening:['listening'],writing:['writing'],speaking:['speaking']
};
function startMock(kind){
  const mini=kind==='mini';
  R={type:'mock',mock:kind,plan:PLANS[kind].map(k=>({kind:k})),step:0,results:{},started:Date.now()};
  R.plan.forEach(p=>{
    if(p.kind==='reading'||p.kind==='listening'){p.items=pick(p.kind,mini?DIST_MINI:DIST_FULL);p.answers=new Array(p.items.length).fill(null);p.i=0}
  });
  intro();
}
function sectionInfo(p){
  const f=F(),n=p.items?.length;
  if(p.kind==='reading')return {title:SKILL.reading,sub:`${n} questions • ${R.mock==='mini'?Math.round(n*f.reading.minutes/f.reading.questions):f.reading.minutes} min • retour en arrière autorisé`,sec:(R.mock==='mini'?Math.round(n*f.reading.minutes/f.reading.questions):f.reading.minutes)*60};
  if(p.kind==='listening')return {title:SKILL.listening,sub:`${n} questions • ${R.mock==='mini'?Math.round(n*f.listening.minutes/f.listening.questions):f.listening.minutes} min • chaque audio une seule fois • pas de retour`,sec:(R.mock==='mini'?Math.round(n*f.listening.minutes/f.listening.questions):f.listening.minutes)*60};
  if(p.kind==='writing')return {title:SKILL.writing,sub:`Section A : ${f.writing.sections[0].minutes} min, ${f.writing.sections[0].minWords} mots min. • Section B : ${f.writing.sections[1].minutes} min, ${f.writing.sections[1].minWords} mots min.`};
  return {title:SKILL.speaking,sub:`Section A : ${f.speaking.sections[0].minutes} min • Section B : ${f.speaking.sections[1].minutes} min`};
}
function intro(){
  const p=R.plan[R.step],info=sectionInfo(p),o=overlay();
  const ttsWarn=p.kind==='listening'&&!('speechSynthesis' in window)?'<p class="feedback">⚠️ Synthèse vocale indisponible sur cet appareil : l’écoute ne pourra pas être jouée.</p>':'';
  o.innerHTML=`<div class="runner">${header(info.title,`Épreuve ${R.step+1}/${R.plan.length}`)}<div class="runner-body"><div class="card intro-card"><h2>${esc(info.title)}</h2><p>${info.sub}</p>${p.kind==='listening'?'<p class="muted">Lis la question, puis lance l’audio. Il ne sera joué qu’une fois. Mets le son ou des écouteurs.</p>':''}${p.kind==='speaking'?'<p class="muted">Sans serveur IA, tu parles seul(e) : l’app chronomètre et transcrit. Avec le serveur IA, un examinateur vocal te répond.</p>':''}${ttsWarn}<button class="btn" id="rGo">Commencer</button></div></div></div>`;
  $('#rTimer').textContent='';bindQuit();
  $('#rGo').onclick=()=>{if(p.kind==='reading'||p.kind==='listening')runComp();else if(p.kind==='writing')runWriting(0);else runSpeaking(0)};
}
function nextStep(){
  clearInterval(R.tick);
  if(R.step<R.plan.length-1){R.step++;intro()}else finish();
}

/* ---------- comprehension sections ---------- */
function runComp(){
  const p=R.plan[R.step];
  if(R.type==='mock'&&p.i===0&&!p.clock){p.clock=true;const info=sectionInfo(p);startClock(info.sec,()=>{app().toast('Temps écoulé');endComp()})}
  renderItem();
}
function renderItem(){
  const p=R.plan[R.step],item=p.items[p.i],o=overlay(),practice=R.type==='practice',isL=p.kind==='listening';
  const n=p.items.length,chosen=p.answers[p.i];
  const doc=isL?`<div class="audio-box"><button class="btn" id="rPlay" ${p.played?.[p.i]?'disabled':''}>${p.played?.[p.i]?'✓ Écouté':'▶ Écouter (une seule fois)'}</button><span class="muted" id="rAudioState"></span></div>`:`<div class="doc-box">${esc(item.text)}</div>`;
  o.innerHTML=`<div class="runner">${header(SKILL[p.kind],`Question ${p.i+1}/${n} • niveau ${item.level||'—'}${item.genre?' • '+esc(GENRE[item.genre]||item.genre):''}`)}<div class="runner-body">${doc}<h3 class="q">${esc(item.question)}</h3><div class="choice-list">${item.choices.map((c,i)=>`<button class="choice ${chosen===i?'selected':''}" data-ans="${i}">${esc(c)}</button>`).join('')}</div><div id="rFb"></div><div class="runner-nav">${!isL&&!practice&&p.i>0?'<button class="btn ghost" id="rPrev">‹ Précédente</button>':'<span></span>'}<button class="btn" id="rNext">${p.i<n-1?'Suivante ›':(practice?'Terminer':'Terminer l’épreuve')}</button></div><div class="dots">${p.items.map((_,k)=>`<i class="${k===p.i?'cur':''} ${p.answers[k]!=null?'done':''}"></i>`).join('')}</div></div></div>`;
  if(!practice)$('#rTimer').textContent=fmt(Math.max(0,R.left||0));else $('#rTimer').textContent='';
  bindQuit();
  if(isL){
    p.played=p.played||[];
    $('#rPlay').onclick=()=>{
      if(p.played[p.i])return;p.played[p.i]=true;$('#rPlay').disabled=true;$('#rAudioState').textContent='🔊 Lecture…';
      const ok=speakItem(item,()=>{const s=$('#rAudioState');if(s)s.textContent='Fin de l’audio.';const b=$('#rPlay');if(b)b.textContent='✓ Écouté'});
      if(!ok)$('#rAudioState').textContent='Audio indisponible sur cet appareil.';
    };
  }
  const lock=practice&&p.answers[p.i]!=null;
  $$('[data-ans]').forEach(b=>{b.disabled=lock;b.onclick=()=>{
    const a=+b.dataset.ans;
    if(practice){
      if(p.answers[p.i]!=null)return;p.answers[p.i]=a;const ok=a===item.answer;logItem(p.kind,item,ok,'practice');app().save();
      $$('[data-ans]').forEach((x,k)=>{x.disabled=true;if(k===item.answer)x.classList.add('correct')});if(!ok)b.classList.add('wrong');
      $('#rFb').innerHTML=`<div class="feedback"><strong>${ok?'✓ Correct':'✕ Réponse : '+esc(item.choices[item.answer])}</strong>${item.explain?`<br>${esc(item.explain)}`:''}${isL?`<details class="transcript"><summary>Voir la transcription</summary><div class="doc-box">${esc(item.text)}</div></details>`:''}</div>`;
    }else{p.answers[p.i]=a;$$('[data-ans]').forEach(x=>x.classList.toggle('selected',x===b))}
  }});
  if(practice&&p.answers[p.i]!=null){/* re-render after answer: keep state */}
  $('#rPrev')&&($('#rPrev').onclick=()=>{p.i--;renderItem()});
  $('#rNext').onclick=()=>{
    if(practice&&p.answers[p.i]==null)return app().toast('Choisis une réponse.');
    if(isL&&!practice&&!p.played?.[p.i]&&!confirm('Tu n’as pas écouté l’audio. Passer quand même ?'))return;
    if('speechSynthesis' in window)speechSynthesis.cancel();
    if(p.i<n-1){p.i++;renderItem()}else if(practice)endPractice();else{if(!isL&&p.answers.some(x=>x==null)&&!confirm('Certaines questions sont sans réponse. Terminer l’épreuve ?'))return;endComp()}
  };
}
function compResult(p){
  const rows=p.items.map((it,k)=>({lv:it.level||'B1',ok:p.answers[k]===it.answer?1:0}));
  const by=byLevel(rows),correct=rows.reduce((a,r)=>a+r.ok,0);
  return {correct,total:rows.length,by,level:levelFrom(by,R.mock==='mini'?1:2)||'—'};
}
function endComp(){
  const p=R.plan[R.step];clearInterval(R.tick);
  p.items.forEach((it,k)=>logItem(p.kind,it,p.answers[k]===it.answer,'mock'));
  R.results[p.kind]=compResult(p);app().save();nextStep();
}
function endPractice(){
  const p=R.plan[0],r=compResult(p);app().addMin(p.kind==='reading'?7:6);
  const st=S();st.done[p.kind==='reading'?'read':'listen']=true;app().save();app().today();
  const o=overlay();
  o.innerHTML=`<div class="runner">${header(SKILL[p.kind],'Série terminée')}<div class="runner-body"><div class="card intro-card"><h2>${r.correct}/${r.total}</h2><p>${LEVELS.filter(L=>r.by[L]).map(L=>`${L} : ${r.by[L].ok}/${r.by[L].n}`).join(' • ')}</p><div class="button-row" style="justify-content:center"><button class="btn" id="rAgain">Nouvelle série</button><button class="btn ghost" id="rClose">Fermer</button></div></div></div></div>`;
  $('#rTimer').textContent='';bindQuit();
  $('#rAgain').onclick=()=>series(p.kind);$('#rClose').onclick=closeOverlay;
  refresh();
}

/* ---------- writing section ---------- */
function choosePrompt(list,type){
  const st=S(),c=list.filter(x=>x.type===type),fresh=c.filter(x=>!st.seenPrompts[x.id]),pool=fresh.length?fresh:c;
  const p=pool[Math.floor(Math.random()*pool.length)];if(p?.id)st.seenPrompts[p.id]=Date.now();return p;
}
function runWriting(k){
  const p=R.plan[R.step];p.tasks=p.tasks||[choosePrompt(D().writingPrompts,'A'),choosePrompt(D().writingPrompts,'B')];p.texts=p.texts||['',''];
  const t=p.tasks[k],sec=F().writing.sections[k],o=overlay();
  o.innerHTML=`<div class="runner">${header(SKILL.writing,`Section ${sec.id} • ${sec.minutes} min • ${sec.minWords} mots minimum`)}<div class="runner-body"><h3>${esc(t.title||'')}</h3><p>${esc(t.prompt)}</p><div class="meta-row"><span id="rWc">0 mot</span></div><textarea class="writing-area exam-area" id="rText" spellcheck="false" autocomplete="off" autocapitalize="sentences"></textarea><div class="runner-nav"><span></span><button class="btn" id="rNext">${k===0?'Section B ›':'Terminer l’épreuve'}</button></div></div></div>`;
  bindQuit();
  const ta=$('#rText');ta.value=p.texts[k];
  const wc=()=>{const n=(ta.value.match(/\S+/g)||[]).length;$('#rWc').textContent=`${n} mot${n>1?'s':''} / ${sec.minWords}`;$('#rWc').classList.toggle('ok',n>=sec.minWords)};
  ta.oninput=()=>{p.texts[k]=ta.value;wc()};wc();ta.focus();
  const go=()=>{p.texts[k]=ta.value;clearInterval(R.tick);if(k===0)runWriting(1);else{R.results.writing={tasks:p.tasks.map(x=>({id:x.id,title:x.title,prompt:x.prompt,type:x.type,checklist:x.checklist})),texts:p.texts,words:p.texts.map(x=>(x.match(/\S+/g)||[]).length)};nextStep()}};
  startClock(sec.minutes*60,()=>{app().toast('Temps écoulé');go()});
  $('#rNext').onclick=go;
}

/* ---------- speaking section ---------- */
function runSpeaking(k){
  const p=R.plan[R.step];p.tasks=p.tasks||[choosePrompt(D().speakingPrompts,'A'),choosePrompt(D().speakingPrompts,'B')];p.transcripts=p.transcripts||['',''];p.ai=p.ai||[null,null];
  const t=p.tasks[k],sec=F().speaking.sections[k],o=overlay(),ai=!!window.TEF_CONNECTED?.ready;
  o.innerHTML=`<div class="runner">${header(SKILL.speaking,`Section ${k===0?'A':'B'} • ${sec.minutes} min`)}<div class="runner-body"><h3>${esc(t.title||'')}</h3><p>${esc(t.prompt)}</p>${t.document?`<div class="doc-box">${esc(t.document)}</div>`:''}${t.points?`<ul class="checklist">${t.points.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}<div class="button-row">${ai?'<button class="btn" id="rVoice">🎙️ Commencer avec l’examinateur IA <span class="ai-tag">IA</span></button>':''}<button class="btn ${ai?'secondary':''}" id="rSolo">🎙️ Commencer (chrono + transcription)</button></div><div id="rLive" class="voice-transcript" hidden></div><div class="runner-nav"><span></span><button class="btn" id="rNext">${k===0?'Section B ›':'Terminer l’épreuve'}</button></div></div></div>`;
  bindQuit();$('#rTimer').textContent=fmt(sec.minutes*60);
  const go=()=>{clearInterval(R.tick);if(R.stopRec){p.transcripts[k]=R.stopRec();R.stopRec=null}if(k===0)runSpeaking(1);else{R.results.speaking={tasks:p.tasks.map(x=>({id:x.id,title:x.title,type:x.type,examiner:x.examiner})),transcripts:p.transcripts,ai:p.ai};nextStep()}};
  const begin=()=>{startClock(sec.minutes*60,()=>{app().toast('Temps écoulé');go()});$$('#rVoice,#rSolo').forEach(b=>b&&(b.disabled=true))};
  $('#rSolo').onclick=()=>{begin();R.stopRec=recognize($('#rLive'))};
  $('#rVoice')&&($('#rVoice').onclick=async()=>{
    begin();
    try{await window.TEF_CONNECTED.startVoice({prompt:app().examinerBriefFor?app().examinerBriefFor(t):t.prompt,mode:'exam',onDone:res=>{p.ai[k]=res?.assessment||null;if(res?.transcript)p.transcripts[k]=res.transcript}})}catch(e){app().toast(e.message)}
  });
  $('#rNext').onclick=go;
}

/* ---------- results ---------- */
async function finish(){
  clearInterval(R.tick);
  const o=overlay(),res=R.results;
  o.innerHTML=`<div class="runner">${header('Résultats','Calcul…')}<div class="runner-body"><div class="card intro-card"><p>Préparation des résultats…</p></div></div></div>`;bindQuit();
  // Writing: AI assessment when connected
  if(res.writing){
    res.writing.local=res.writing.texts.map(t=>app().known(t));
    if(window.TEF_CONNECTED?.ready){
      $('.intro-card p').textContent='Correction de l’expression écrite par le tuteur IA…';
      res.writing.ai=[];
      for(let k=0;k<2;k++){
        const t=res.writing.tasks[k],sec=F().writing.sections[k];
        if(!res.writing.words[k]){res.writing.ai.push(null);continue}
        try{res.writing.ai.push(await window.TEF_CONNECTED.analyzeWriting({text:res.writing.texts[k],task:t.prompt,constraints:{minutes:sec.minutes,minWords:sec.minWords,type:t.type,checklist:t.checklist||[]},errors:[...D().errors,...(S().aiErrors||[])]}))}catch(e){res.writing.ai.push({error:e.message})}
      }
      res.writing.ai.forEach(a=>{if(a?.estimated_cefr){S().prod.push({skill:'writing',level:a.estimated_cefr,t:Date.now(),task:'mock'})}if(a?.major_errors?.length)S().aiErrors=app().mergeAIErrors(S().aiErrors,a.major_errors)});
      const lv=res.writing.ai.map(a=>a?.estimated_cefr).filter(Boolean);res.writing.level=lv.length?lowest(lv):'—';
    }else res.writing.level='non évalué';
  }
  if(res.speaking){
    const lv=(res.speaking.ai||[]).map(a=>a?.estimated_cefr).filter(Boolean);
    lv.forEach(l=>S().prod.push({skill:'speaking',level:l,t:Date.now(),task:'mock'}));
    res.speaking.level=lv.length?lowest(lv):'non évalué';
  }
  const rec={date:new Date().toISOString(),type:R.mock,minutes:Math.round((Date.now()-R.started)/60000),skills:{}};
  for(const k of ['reading','listening','writing','speaking'])if(res[k])rec.skills[k]=summarize(k,res[k]);
  const st=S();st.mocks.unshift(rec);st.mocks=st.mocks.slice(0,40);
  st.lastMockDetail={date:rec.date,plan:R.plan.map(p=>({kind:p.kind,items:p.items?.map(x=>x.id),answers:p.answers})),writing:res.writing||null,speaking:res.speaking?{transcripts:res.speaking.transcripts,tasks:res.speaking.tasks}:null};
  app().addMin(rec.minutes||1);app().save();app().today();refresh();
  renderResults(rec,res);
}
function lowest(levels){const order=['A1','A2','B1','B1+','B2','B2+','C1','C2'];const n=l=>{const m=String(l).toUpperCase().replace(/\s/g,'').match(/(A1|A2|B1\+?|B2\+?|C1|C2)/);return m?order.indexOf(m[1]):-1};return levels.reduce((a,b)=>n(b)<n(a)?b:a)}
function summarize(k,r){
  if(k==='reading'||k==='listening')return {correct:r.correct,total:r.total,level:r.level,by:r.by};
  return {level:r.level,words:r.words||null};
}
function verdict(level){
  if(!level||level==='—'||/non/.test(level))return {cls:'',txt:'—'};
  const ok=['B2','B2+','C1','C2'].some(x=>String(level).toUpperCase().includes(x));
  return {cls:ok?'ok':'warn',txt:ok?'B2 atteint ✓':'Sous le B2'};
}
function renderResults(rec,res){
  const o=overlay(),skills=Object.keys(rec.skills);
  const cards=skills.map(k=>{
    const s=rec.skills[k],v=verdict(s.level);
    const detail=(k==='reading'||k==='listening')?`<div class="big">${s.correct}/${s.total}</div><p class="muted">${LEVELS.filter(L=>s.by[L]).map(L=>`${L} ${s.by[L].ok}/${s.by[L].n}`).join(' • ')}</p>`:(k==='writing'?`<p class="muted">${(s.words||[]).map((w,i)=>`Section ${i?'B':'A'} : ${w} mots`).join(' • ')}</p>`:'');
    return `<div class="card result-card"><div class="kicker">${SHORT[k]} — ${SKILL[k]}</div>${detail}<div class="skill-head"><strong>Niveau estimé : ${esc(s.level)}</strong><span class="level ${v.cls==='ok'?'':'warn'}">${v.txt}</span></div></div>`;
  }).join('');
  const review=R.plan.filter(p=>p.items).map(p=>{
    const wrong=p.items.map((it,k)=>({it,a:p.answers[k]})).filter(x=>x.a!==x.it.answer);
    if(!wrong.length)return `<p>✓ ${SKILL[p.kind]} : aucune erreur.</p>`;
    return `<h3>${SKILL[p.kind]} — à revoir (${wrong.length})</h3>`+wrong.map(({it,a})=>`<details class="review"><summary><span class="chip">${it.level}</span> ${esc(it.question)}</summary><div class="doc-box">${esc(it.text)}</div><p>${a==null?'Sans réponse':'Ta réponse : <span class="wrong">'+esc(it.choices[a])+'</span>'}<br>Bonne réponse : <span class="right">${esc(it.choices[it.answer])}</span></p>${it.explain?`<p class="muted">${esc(it.explain)}</p>`:''}</details>`).join('');
  }).join('');
  const wr=res.writing?res.writing.tasks.map((t,k)=>{const a=res.writing.ai?.[k];return `<details class="review" open><summary>Expression écrite — section ${t.type} : ${esc(t.title||'')}</summary><div class="doc-box">${esc(res.writing.texts[k]||'(vide)')}</div>${a&&!a.error?window.TEF_CONNECTED.assessmentHTML(a)+(a.corrected_version?`<div class="feedback"><strong>Version corrigée</strong><br>${esc(a.corrected_version)}</div>`:''):''}${a?.error?`<p class="muted">Correction IA indisponible : ${esc(a.error)}</p>`:''}${!a&&t.checklist?`<p class="muted">Auto-vérification :</p><ul class="checklist">${t.checklist.map(c=>`<li>${esc(c)}</li>`).join('')}</ul>`:''}${res.writing.local[k]?.length?`<p>Erreurs connues repérées : ${res.writing.local[k].map(esc).join(' ; ')}</p>`:''}</details>`}).join(''):'';
  const sp=res.speaking?res.speaking.tasks.map((t,k)=>`<details class="review"><summary>Expression orale — section ${t.type} : ${esc(t.title||'')}</summary>${res.speaking.transcripts[k]?`<div class="doc-box">${esc(res.speaking.transcripts[k])}</div>`:'<p class="muted">Pas de transcription.</p>'}${res.speaking.ai?.[k]?window.TEF_CONNECTED.assessmentHTML(res.speaking.ai[k]):''}${t.examiner?`<p class="muted"><strong>Rôle de l’examinateur :</strong> ${esc(t.examiner)}</p>`:''}</details>`).join(''):'';
  o.innerHTML=`<div class="runner">${header('Résultats de l’examen blanc',new Date(rec.date).toLocaleString('fr-FR'))}<div class="runner-body"><p class="muted">Estimation d’entraînement, pas un score officiel : le barème sur 499 du TEF n’est pas public. Règle officielle B2 : au moins 400 dans trois épreuves et au moins 367 dans la quatrième — ton objectif personnel reste le B2 dans les quatre.</p><div class="grid grid-2">${cards}</div>${!window.TEF_CONNECTED?.ready&&(res.writing||res.speaking)?'<p class="feedback">Pour un niveau estimé à l’écrit et à l’oral, connecte le serveur IA (onglet Tuteur). <span class="ai-tag">IA</span></p>':''}<div class="card" style="margin-top:14px">${review}${wr}${sp}</div><div class="button-row" style="margin-top:14px"><button class="btn" id="rClose">Fermer</button></div></div></div>`;
  $('#rTimer').textContent='';bindQuit();$('#rClose').onclick=closeOverlay;
}

/* ---------- history & practice cards ---------- */
function renderHistory(){
  const root=$('#mockHistory');if(!root)return;const m=S().mocks||[];
  if(!m.length){root.innerHTML='<p class="muted">Aucun examen blanc enregistré pour l’instant.</p>';return}
  const cell=s=>!s?'<td class="muted">—</td>':`<td>${s.total?`${s.correct}/${s.total}<br>`:''}<strong>${esc(s.level)}</strong></td>`;
  const name={full:'Complet',mini:'Mini',reading:'CE',listening:'CO',writing:'EE',speaking:'EO'};
  root.innerHTML=`<div style="overflow:auto"><table class="error-table history-table"><thead><tr><th>Date</th><th>Type</th><th>CE</th><th>CO</th><th>EE</th><th>EO</th></tr></thead><tbody>${m.filter(x=>x.skills).map(x=>`<tr><td>${new Date(x.date).toLocaleDateString('fr-FR')}</td><td>${name[x.type]||esc(x.type)}</td>${cell(x.skills.reading)}${cell(x.skills.listening)}${cell(x.skills.writing)}${cell(x.skills.speaking)}</tr>`).join('')}</tbody></table></div>`;
}
function practiceCard(kind,root){
  const items=D()[kind],seen=items.filter(x=>S().seen[x.id]).length,est=compEstimate(kind),lv=S().practiceLevel||'all';
  const counts=LEVELS.map(L=>`${L} : ${items.filter(x=>x.level===L).length}`).join(' • ');
  root.innerHTML=`<div class="card"><h2>${SKILL[kind]}</h2><p>${kind==='reading'?'Documents de la vie quotidienne, administratifs et articles.':'Annonces, messages, dialogues et chroniques lus par la voix du navigateur, une seule écoute.'} ${items.length} questions (${counts}).</p><div class="vocab-filter-row">${['all',...LEVELS].map(L=>`<button class="vocab-filter ${lv===L?'active':''}" data-plevel="${L}">${L==='all'?'Tous niveaux':L}</button>`).join('')}</div><div class="button-row"><button class="btn" id="startSeries">Série de 5 questions</button><button class="btn ghost" id="startSection">Épreuve chronométrée (${kind==='reading'?F().reading.questions+' q • '+F().reading.minutes:F().listening.questions+' q • '+F().listening.minutes} min)</button></div><p class="muted">Déjà vues : ${seen}/${items.length}${est?` • niveau estimé : <strong>${est.level}</strong> (${est.note})`:''}</p></div>`;
  $$('[data-plevel]',root).forEach(b=>b.onclick=()=>{S().practiceLevel=b.dataset.plevel;app().save();practiceCard(kind,root)});
  $('#startSeries',root).onclick=()=>series(kind);
  $('#startSection',root).onclick=()=>startMock(kind);
}
function refresh(){renderHistory();const v=$('#view-practice');if(v?.classList.contains('active'))app().practice?.()}
function init(){
  $$('[data-mock]').forEach(b=>b.onclick=()=>startMock(b.dataset.mock));
  renderHistory();
}
window.TEF_EXAM={init,series,startMock,practiceCard,renderHistory,skillEstimates,speakItem,recognize,compEstimate};
})();
