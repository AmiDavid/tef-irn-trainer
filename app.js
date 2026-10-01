(()=>{'use strict';const D=TEF_DATA,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)],K='tef-b2-v1';let S={minutes:0,view:'today',examDate:'',done:{},ratings:{},flash:0,quests:{q1:0,q2:0,q3:0,q4:1},mocks:[],custom:[],endpoint:'',scanText:''};try{Object.assign(S,JSON.parse(localStorage.getItem(K)||'{}'))}catch{}const save=()=>{S.updatedAt=new Date().toISOString();localStorage.setItem(K,JSON.stringify(S));window.dispatchEvent(new CustomEvent('tef:state',{detail:S}))},toast=t=>{let e=$('#toast');e.textContent=t;e.classList.add('show');setTimeout(()=>e.classList.remove('show'),1600)},addMin=n=>{S.minutes+=n;save();$('#momentumPill').textContent=`🔥 ${S.minutes} min cette semaine`};function show(v){$$('.view').forEach(x=>x.classList.toggle('active',x.id===`view-${v}`));$$('[data-view]').forEach(x=>x.classList.toggle('active',x.dataset.view===v));S.view=v;save();if(v==='plan')plan();if(v==='flashcards')card()}$$('[data-view]').forEach(b=>b.onclick=()=>show(b.dataset.view));
$('#mobileMoreBtn')?.addEventListener('click',()=>{
  modal('Plus',`
    <div class="more-grid">
      <button class="choice" data-more-view="plan">🗓️ Plan & Gantt</button>
      <button class="choice" data-more-view="grammar">📚 Grammaire</button>
      <button class="choice" data-more-view="errors">🧯 Mes erreurs</button>
      <button class="choice" data-more-view="scan">📷 Scanner le cours</button>
      <button class="choice" data-more-view="mock">🧪 Examens</button>
      <button class="choice" data-more-view="official">🏛️ TEF officiel</button>
    </div>`);
  setTimeout(()=>$$('[data-more-view]').forEach(b=>b.onclick=()=>{const v=b.dataset.moreView;close();show(v)}),0);
});
function modal(t,h){$('#modalTitle').textContent=t;$('#modalBody').innerHTML=h;$('#modal').classList.add('open')}const close=()=>$('#modal').classList.remove('open');$('#closeModal').onclick=close;$('#modal').onclick=e=>{if(e.target.id==='modal')close()};
const daily=[['cards','🃏','5 flashcards faibles','4 min',()=>show('flashcards')],['article','⚡','Article Attack','de/des + accord • 4 min',()=>game('article')],['oral','🗣️','Argumentation express','5 min',()=>speakTask('B')],['errors','🧯','Réparer mes erreurs','3 min',()=>game('error')]];function today(){$('#momentumPill').textContent=`🔥 ${S.minutes||0} min cette semaine`;$('#todayTasks').innerHTML=daily.map(x=>`<div class="task ${S.done[x[0]]?'done':''}"><div class="task-icon">${x[1]}</div><div class="task-main"><strong>${x[2]}</strong><span>${x[3]}</span></div><button class="check" data-daily="${x[0]}">${S.done[x[0]]?'✓':'→'}</button></div>`).join('');$$('[data-daily]').forEach(b=>b.onclick=()=>daily.find(x=>x[0]===b.dataset.daily)[4]());$('#skillList').innerHTML=D.profile.skills.map(s=>`<div><div class="skill-head"><strong>${s.name}</strong><span class="level ${s.status==='strength'?'':'warn'}">${s.level}</span></div><div class="bar"><i style="width:${s.readiness}%"></i></div></div>`).join('');$('#priorityList').innerHTML=D.profile.priorities.slice(0,5).map((p,i)=>`<div class="task"><div class="task-icon">${i+1}</div><div class="task-main"><strong>${p}</strong><span>${i<3?'Priorité haute':'À consolider'}</span></div></div>`).join('');$('#questList').innerHTML=D.quests.map(q=>{let p=S.quests[q.id]??q.progress;return `<div class="quest"><div class="quest-top"><span>${q.title}</span><strong>${Math.min(p,q.target)}/${q.target}</strong></div><div class="mini-bar"><i style="width:${Math.min(100,p/q.target*100)}%"></i></div></div>`}).join('')}$('#startToday').onclick=()=>daily[0][4]();$('#surpriseBtn').onclick=()=>daily[Math.floor(Math.random()*daily.length)][4]();$('#quick5').onclick=()=>modal('J’ai 5 minutes','<p>Choisis un mini-exercice.</p><div class="button-row"><button class="btn" id="q1">🧯 Erreurs</button><button class="btn secondary" id="q2">🃏 Cartes</button><button class="btn ghost" id="q3">🎧 Écoute</button></div>');document.addEventListener('click',e=>{if(e.target.id==='q1'){close();game('error')}if(e.target.id==='q2'){close();show('flashcards')}if(e.target.id==='q3'){close();listen()}});
function plan(){$('#examDate').value=S.examDate||'';let p=[['Stabilisation',0,24,'Erreurs B1 → phrases fiables'],['Passage B1 → B2',18,54,'Argumentation + écrit'],['TEF intensif',48,76,'Chrono + formats'],['Mocks répétés',70,92,'Conditions réelles'],['Révision finale',88,100,'Faiblesses + stratégie']];$('#gantt').innerHTML=p.map((x,i)=>`<div class="phase"><div class="phase-info"><strong>${x[0]}</strong><small>${x[3]}</small></div><div class="phase-track"><div class="phase-bar ${i===0?'current':''}" style="left:${x[1]}%;width:${x[2]-x[1]}%"></div></div></div>`).join('');$('#phaseCards').innerHTML=p.slice(0,4).map((x,i)=>`<div class="card"><h3>${i+1}. ${x[0]}</h3><p>${x[3]}</p><span class="chip">${i===0?'En cours':'À venir'}</span></div>`).join('')}$('#saveExamDate').onclick=()=>{S.examDate=$('#examDate').value;save();plan();toast('Plan recalculé')};$('#resetPlan').onclick=()=>{S.examDate='';save();plan()};
let tab='games';$$('#practiceTabs button').forEach(b=>b.onclick=()=>{$$('#practiceTabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');tab=b.dataset.tab;practice()});function practice(){let r=$('#practiceContent');if(tab==='games'){r.innerHTML=`<div class="grid grid-4">${D.games.map(g=>`<div class="card game-card"><div class="game-ico">${g.icon}</div><h3>${g.title}</h3><p>${g.blurb}</p><button class="btn secondary" data-game="${g.id}">${g.minutes} min</button></div>`).join('')}</div>`;$$('[data-game]',r).forEach(b=>b.onclick=()=>game(b.dataset.game));return}if(tab==='reading'){r.innerHTML='<div class="card"><h2>Compréhension écrite</h2><p>Textes pratiques et opinion.</p><button class="btn" id="startRead">Commencer</button></div>';$('#startRead').onclick=read;return}if(tab==='listening'){r.innerHTML='<div class="card"><h2>Compréhension orale</h2><p>Audio TEF-style joué une fois.</p><button class="btn" id="startListen">Commencer</button></div>';$('#startListen').onclick=listen;return}if(tab==='writing'){r.innerHTML=`<div class="grid grid-2">${D.writingPrompts.map(p=>`<div class="card"><h3>Section ${p.type}</h3><p>${p.minutes} min • ${p.minWords} mots</p><button class="btn" data-w="${p.type}">Lancer</button></div>`).join('')}</div>`;$$('[data-w]',r).forEach(b=>b.onclick=()=>writeTask(b.dataset.w));return}r.innerHTML=`<div class="grid grid-2">${D.speakingPrompts.map(p=>`<div class="card"><h3>Section ${p.type}</h3><p>${p.title}</p><button class="btn" data-s="${p.type}">Lancer</button></div>`).join('')}</div>`;$$('[data-s]',r).forEach(b=>b.onclick=()=>speakTask(b.dataset.s))}
const sets={article:[['Il y a ___ commerces.',['beaucoup des','beaucoup de','beaucoup les'],1,'Après une quantité : de.'],['___ travail intéressant.',['une nouvelle','un nouveau','un nouvelle'],1,'travail est masculin.'],['l’avis ___ habitants',['de les','des','du'],1,'de + les = des.']],connector:[['Il n’y a pas de métro ; ___, beaucoup prennent la voiture.',['par conséquent','cependant','d’ailleurs'],0,'Conséquence → par conséquent.'],['Le projet est utile. ___, il coûte cher.',['Cependant','Donc','En effet'],0,'Opposition → cependant.']],error:[['Je vous écris pour que vous ___ ma demande.',['prenez','prendre','preniez'],2,'pour que + subjonctif'],['Le quartier ___ pas bien desservi.',['est','n’est','ne'],1,'À l’écrit : ne…pas.'],['Mon père va ___.',['prendre son retrait','prendre sa retraite','faire sa retraite'],1,'Expression fixe.']]};function game(type){if(type==='speed'){show('flashcards');return}let a=sets[type]||sets.error,i=0,score=0;const next=()=>{if(i>=a.length){close();S.done[type==='article'?'article':'errors']=true;addMin(3);today();toast(`Score ${score}/${a.length}`);return}let q=a[i];modal(type==='article'?'Article Attack':type==='connector'?'Connector Challenge':'Find My Error',`<p>${q[0]}</p><div class="choice-list">${q[1].map((o,j)=>`<button class="choice" data-a="${j}">${o}</button>`).join('')}</div><div id="fb"></div>`);$$('[data-a]').forEach(b=>b.onclick=()=>{let ok=+b.dataset.a===q[2];if(ok)score++;$$('[data-a]').forEach(x=>x.disabled=true);b.classList.add(ok?'correct':'wrong');$('#fb').innerHTML=`<div class="feedback">${ok?'✓ Bien':'✕ À revoir'}<br>${q[3]}<br><button class="btn small" id="next">Suivant</button></div>`;$('#next').onclick=()=>{i++;next()}})};next()}
function read(){let q=D.reading[Math.floor(Math.random()*D.reading.length)];modal('Compréhension écrite',`<p>${q.text}</p><h3>${q.question}</h3><div class="choice-list">${q.choices.map((c,i)=>`<button class="choice" data-r="${i}">${c}</button>`).join('')}</div><div id="rf"></div>`);$$('[data-r]').forEach(b=>b.onclick=()=>{let ok=+b.dataset.r===q.answer;$$('[data-r]').forEach((x,j)=>{x.disabled=true;if(j===q.answer)x.classList.add('correct')});if(!ok)b.classList.add('wrong');$('#rf').innerHTML=`<div class="feedback"><strong>${ok?'Correct':'Réponse : '+q.choices[q.answer]}</strong><br>Repère l’idée principale avant les détails.</div>`;if(ok)addMin(3)})}function say(t){if(!speechSynthesis)return toast('Audio indisponible');speechSynthesis.cancel();let u=new SpeechSynthesisUtterance(t);u.lang='fr-FR';u.rate=1;speechSynthesis.speak(u)}function listen(){let q=D.listening[Math.floor(Math.random()*D.listening.length)];modal('Écoute — une seule fois',`<button class="btn" id="play">▶ Écouter</button><div id="lq" hidden><h3>${q.question}</h3><div class="choice-list">${q.choices.map((c,i)=>`<button class="choice" data-l="${i}">${c}</button>`).join('')}</div><div id="lf"></div></div>`);$('#play').onclick=()=>{$('#play').disabled=true;say(q.text);$('#lq').hidden=false};$$('[data-l]').forEach(b=>b.onclick=()=>{let ok=+b.dataset.l===q.answer;$$('[data-l]').forEach((x,j)=>{x.disabled=true;if(j===q.answer)x.classList.add('correct')});if(!ok)b.classList.add('wrong');$('#lf').innerHTML=`<div class="feedback"><strong>${ok?'Correct':'Réponse : '+q.choices[q.answer]}</strong><br><button class="btn small ghost" id="tr">Voir le transcript</button><div id="tt" hidden>${q.text}</div></div>`;$('#tr').onclick=()=>$('#tt').hidden=false;addMin(3)})}
function known(t){let o=[];if(/beaucoup\s+des/i.test(t))o.push('beaucoup de — quantité + de');if(/\bde\s+les\b/i.test(t))o.push('des — de + les');if(/\best\s+pas\b/i.test(t))o.push('n’est pas — négation écrite');if(/pour que vous prendre/i.test(t))o.push('pour que vous preniez — subjonctif');if(/course de cuisine/i.test(t))o.push('cours de cuisine');if(/magazines? du quartier/i.test(t))o.push('magasins / commerces');return o}function timer(sec,el){let n=sec;const p=()=>el.textContent=`${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`;p();let x=setInterval(()=>{n--;p();if(n<=0)clearInterval(x)},1000);return()=>clearInterval(x)}function writeTask(type){let p=D.writingPrompts.find(x=>x.type===type);modal(`Expression écrite — ${type}`,`<div class="kicker">${p.minutes} min • ${p.minWords} mots minimum</div><p>${p.prompt}</p><div class="meta-row"><span class="timer" id="wt"></span><span id="wc">0 mot</span></div><textarea class="writing-area" id="wtext"></textarea><button class="btn" id="wend">Terminer</button><div id="wfb"></div>`);let stop=timer(p.minutes*60,$('#wt'));$('#wtext').oninput=()=>$('#wc').textContent=`${($('#wtext').value.match(/\S+/g)||[]).length} mots`;$('#wend').onclick=async()=>{stop();let t=$('#wtext').value.trim(),n=(t.match(/\S+/g)||[]).length;if(n<p.minWords)return $('#wfb').innerHTML=`<div class="feedback">${n}/${p.minWords} mots. Continue.</div>`;let f=known(t);$('#wfb').innerHTML=`<div class="feedback"><strong>Analyse locale</strong><br>${f.length?f.map(x=>'• '+x).join('<br>'):'Aucune erreur connue détectée.'}</div>`;S.quests.q3=1;addMin(p.minutes);save();today();if(window.TEF_CONNECTED?.ready){$('#wfb').innerHTML+='<div class="feedback" style="margin-top:10px">Analyse B2 par le tuteur IA…</div>';try{let a=await window.TEF_CONNECTED.analyzeWriting({text:t,task:p.prompt,constraints:{minutes:p.minutes,minWords:p.minWords,type:p.type},errors:[...D.errors,...(S.aiErrors||[])]});if(a.major_errors?.length){S.aiErrors=mergeAIErrors(S.aiErrors,a.major_errors);save()}$('#wfb').innerHTML=window.TEF_CONNECTED.assessmentHTML(a)+(a.corrected_version?`<div class="feedback" style="margin-top:10px"><strong>Version corrigée</strong><br>${a.corrected_version}</div>`:'')+(a.b2_model?`<div class="feedback" style="margin-top:10px"><strong>Modèle B2 reproductible</strong><br>${a.b2_model}</div>`:'')}catch(e){$('#wfb').innerHTML+=`<div class="feedback">Analyse IA indisponible : ${e.message}</div>`}}}}
function speakTask(type){let p=D.speakingPrompts.find(x=>x.type===type);modal(`Expression orale — ${type}`,`<div class="kicker">5 min</div><h3>${p.title}</h3><p>${p.prompt}</p><div class="timer" id="st">05:00</div><textarea class="writing-area" id="spt" placeholder="Après avoir parlé, note ici les phrases dont tu n’étais pas sûr."></textarea><div class="button-row"><button class="btn" id="liveVoice">🎙️ Examinateur IA</button><button class="btn secondary" id="ss">Chrono sans IA</button><button class="btn ghost" id="se">Terminer</button></div><div id="sfb"></div>`);let stop;$('#liveVoice').onclick=async()=>{if(!window.TEF_CONNECTED?.ready)return toast('Connecte le compte synchronisé pour utiliser la voix IA.');try{close();await window.TEF_CONNECTED.startVoice({prompt:p.prompt,mode:'exam',onDone:(result)=>{if(result?.assessment?.recurring_errors?.length)S.aiErrors=mergeAIErrors(S.aiErrors,result.assessment.recurring_errors);S.quests.q2=(S.quests.q2||0)+1;S.done.oral=true;addMin(5);save();today()}})}catch(e){toast(e.message)}};$('#ss').onclick=()=>stop=timer(300,$('#st'));$('#se').onclick=()=>{stop?.();let f=known($('#spt').value);$('#sfb').innerHTML=`<div class="feedback">Simulation terminée.<br>${f.length?f.map(x=>'• '+x).join('<br>'):'Structure cible : position → argument → exemple → nuance.'}</div>`;S.quests.q2=(S.quests.q2||0)+1;S.done.oral=true;addMin(5);save();today()}}$$('[data-open-writing]').forEach(b=>b.onclick=()=>{show('practice');tab='writing';practice()});$$('[data-open-speaking]').forEach(b=>b.onclick=()=>{show('practice');tab='speaking';practice()});
let deck=[];const vocab=()=>[...D.vocab,...(S.custom||[])];function build(weak=false){deck=vocab().filter(v=>!weak||(S.ratings[v.id]||0)<2);if(!deck.length)deck=vocab()}
function shuffled(a){return [...a].sort(()=>Math.random()-.5)}
function mcqOptions(v,mode){
  const all=vocab().filter(x=>x.id!==v.id);
  const field=mode==='reverse'?'front':'back';
  const correct=v[field];
  const distractors=shuffled(all.map(x=>x[field]).filter(Boolean).filter(x=>x!==correct)).slice(0,3);
  return shuffled([correct,...distractors]);
}
function clozeFor(v){
  const ex=v.example||'';
  const target=v.front;
  if(!ex||!target||!ex.toLowerCase().includes(target.toLowerCase()))return null;
  const i=ex.toLowerCase().indexOf(target.toLowerCase());
  return ex.slice(0,i)+'_____ '+ex.slice(i+target.length);
}
function card(){
  if(!deck.length)build();
  let v=deck[S.flash%deck.length],c=$('#flashcard');
  c.classList.remove('flipped');
  $('.back',c).style.display='none';
  $('.flash-actions').style.visibility='hidden';
  const modes=['meaning','reverse','cloze'];
  let mode=modes[(S.flash||0)%modes.length],prompt,correct,options;
  if(mode==='reverse'){
    prompt=`Quel français correspond à : “${v.back}” ?`; correct=v.front; options=mcqOptions(v,'reverse');
  }else if(mode==='cloze'&&clozeFor(v)){
    prompt=`Complète la phrase :<br><span class="muted">${clozeFor(v)}</span>`; correct=v.front; options=mcqOptions(v,'reverse');
  }else{
    mode='meaning'; prompt=`Que signifie : <strong>“${v.front}”</strong> ?`; correct=v.back; options=mcqOptions(v,'meaning');
  }
  $('.front',c).innerHTML=`<div class="kicker" style="margin-bottom:10px">Question vocabulaire</div><div style="font-size:22px;line-height:1.35">${prompt}</div><div class="choice-list flash-choices" style="width:100%;margin-top:18px">${options.map((o,i)=>`<button class="choice" data-flash-answer="${i}">${o}</button>`).join('')}</div><div id="flashFeedback"></div>`;
  $('.back',c).innerHTML=`<strong>${v.front}</strong><br><span>${v.back}</span><br><small>${v.example||''}</small>`;
  $('#flashMeta').textContent=`Question ${S.flash+1}/${deck.length} • ${v.tag}`;
  c.onclick=null;
  $$('[data-flash-answer]',c).forEach(b=>b.onclick=e=>{
    e.stopPropagation();
    const choice=options[+b.dataset.flashAnswer],ok=choice===correct;
    $$('[data-flash-answer]',c).forEach(x=>{x.disabled=true;if(options[+x.dataset.flashAnswer]===correct)x.classList.add('correct')});
    if(!ok)b.classList.add('wrong');
    S.ratings[v.id]=ok?Math.max(2,S.ratings[v.id]||0):0;
    $('#flashFeedback',c).innerHTML=`<div class="feedback" style="margin-top:12px"><strong>${ok?'✓ Correct':'✕ À revoir'}</strong><br>${v.front} = ${v.back}<br><small>${v.example||''}</small></div>`;
    $('.flash-actions').style.visibility='visible';
    save();if(vocabTab==='list')renderVocabList();
  });
}
$$('[data-rate]').forEach(b=>b.onclick=()=>{
  let v=deck[S.flash%deck.length];
  S.ratings[v.id]=b.dataset.rate==='good'?3:b.dataset.rate==='hard'?1:0;
  S.flash=(S.flash+1)%deck.length;
  S.quests.q1=Object.values(S.ratings).filter(x=>x>=2).length;
  save();card();if(vocabTab==='list')renderVocabList()
});
$('#shuffleCards').onclick=()=>{build();deck=shuffled(deck);S.flash=0;card()};
$('#weakCards').onclick=()=>{build(true);S.flash=0;card();toast(`${deck.length} cartes faibles`)};
let vocabTab='practice',vocabStatusFilter='all',vocabTypeFilter='all';
function mastery(v){
  const has=Object.prototype.hasOwnProperty.call(S.ratings||{},v.id);
  if(!has)return {key:'new',label:'Pas testé',score:null};
  const r=S.ratings[v.id];
  if(r>=3)return {key:'good',label:'Bien connu',score:r};
  if(r>=1)return {key:'ok',label:'En cours',score:r};
  return {key:'bad',label:'À apprendre',score:r};
}
function vocabKind(v){return String(v.front||'').trim().split(/\s+/).length>1?'expression':'word'}
function renderVocabSummary(){
  const all=vocab(),counts={good:0,ok:0,bad:0,new:0};
  all.forEach(v=>counts[mastery(v).key]++);
  const root=$('#vocabSummary');if(!root)return;
  root.innerHTML=`
    <div class="vocab-stat good"><strong>${counts.good}</strong><span>Bien connus</span></div>
    <div class="vocab-stat ok"><strong>${counts.ok}</strong><span>En cours</span></div>
    <div class="vocab-stat bad"><strong>${counts.bad}</strong><span>À apprendre</span></div>
    <div class="vocab-stat new"><strong>${counts.new}</strong><span>Pas testés</span></div>`;
}
function renderVocabList(){
  const root=$('#vocabList');if(!root)return;
  renderVocabSummary();
  const q=($('#vocabSearch')?.value||'').trim().toLowerCase();
  const items=vocab().filter(v=>{
    const m=mastery(v),kind=vocabKind(v);
    if(vocabStatusFilter!=='all'&&m.key!==vocabStatusFilter)return false;
    if(vocabTypeFilter!=='all'&&kind!==vocabTypeFilter)return false;
    if(q&&!([v.front,v.back,v.example,v.tag].join(' ').toLowerCase().includes(q)))return false;
    return true;
  });
  root.innerHTML=items.length?items.map(v=>{
    const m=mastery(v),kind=vocabKind(v);
    return `<div class="vocab-item">
      <div class="vocab-main">
        <div class="vocab-title-row"><strong>${v.front}</strong><span class="chip">${kind==='expression'?'Expression':'Mot'} · ${v.tag||'général'}</span></div>
        <div class="vocab-translation">${v.back||''}</div>
        <small>${v.example||''}</small>
      </div>
      <div class="vocab-side">
        <span class="mastery mastery-${m.key}">${m.label}</span>
        <div class="mastery-actions" aria-label="Modifier la maîtrise">
          <button title="À apprendre" data-vmark="0" data-vid="${v.id}">🔴</button>
          <button title="En cours" data-vmark="1" data-vid="${v.id}">🟡</button>
          <button title="Bien connu" data-vmark="3" data-vid="${v.id}">🟢</button>
        </div>
      </div>
    </div>`;
  }).join(''):'<div class="card"><p class="muted">Aucun mot ne correspond à ce filtre.</p></div>';
  $$('[data-vmark]',root).forEach(b=>b.onclick=()=>{
    S.ratings[b.dataset.vid]=+b.dataset.vmark;
    S.quests.q1=Object.values(S.ratings).filter(x=>x>=2).length;
    save();renderVocabList();today();
  });
}
function setVocabTab(tab){
  vocabTab=tab;
  $$('[data-vocab-tab]').forEach(b=>b.classList.toggle('active',b.dataset.vocabTab===tab));
  $('#vocabPractice').hidden=tab!=='practice';
  $('#vocabListPanel').hidden=tab!=='list';
  if(tab==='list')renderVocabList();else card();
}
$$('[data-vocab-tab]').forEach(b=>b.onclick=()=>setVocabTab(b.dataset.vocabTab));
$$('[data-vstatus]').forEach(b=>b.onclick=()=>{
  vocabStatusFilter=b.dataset.vstatus;
  $$('[data-vstatus]').forEach(x=>x.classList.toggle('active',x===b));
  renderVocabList();
});
$$('[data-vtype]').forEach(b=>b.onclick=()=>{
  vocabTypeFilter=b.dataset.vtype;
  $$('[data-vtype]').forEach(x=>x.classList.toggle('active',x===b));
  renderVocabList();
});
$('#vocabSearch')?.addEventListener('input',renderVocabList);

function grammar(){$('#grammarList').innerHTML=D.grammar.map(g=>`<div class="grammar-item" data-g="${g.id}"><div class="grammar-head"><div><strong>${g.title}</strong><div class="muted">${g.short}</div></div><span class="status ${g.status}">${g.status}</span></div><div class="grammar-details"><p>${g.details}</p><div class="examples">${g.examples.map(x=>`<span class="chip">${x}</span>`).join('')}</div><div class="feedback"><strong>Mini-exercice</strong><br>${g.drill.prompt}<div class="choice-list">${g.drill.choices.map((x,i)=>`<button class="choice" data-gc="${i}">${x}</button>`).join('')}</div><div class="gfb"></div></div></div></div>`).join('');$$('.grammar-item').forEach(it=>{it.querySelector('.grammar-head').onclick=()=>it.classList.toggle('open');$$('[data-gc]',it).forEach(b=>b.onclick=e=>{e.stopPropagation();let g=D.grammar.find(x=>x.id===it.dataset.g),ok=+b.dataset.gc===g.drill.answer;b.classList.add(ok?'correct':'wrong');it.querySelector('.gfb').textContent=ok?'✓ Correct':'À revoir : '+g.short})})}$$('[data-grammar-filter]').forEach(b=>b.onclick=()=>{$$('[data-grammar-filter]').forEach(x=>x.classList.remove('active'));b.classList.add('active');$$('.grammar-item').forEach(it=>{let g=D.grammar.find(x=>x.id===it.dataset.g);it.style.display=b.dataset.grammarFilter==='all'||g.status===b.dataset.grammarFilter?'':'none'})});function mergeAIErrors(existing=[],incoming=[]){let all=[...(existing||[])];for(const x of incoming||[]){let wrong=x.original||x.wrong||'',correct=x.correction||x.correct||'';if(!wrong||!correct)continue;let hit=all.find(e=>e.wrong.toLowerCase()===wrong.toLowerCase()&&e.correct.toLowerCase()===correct.toLowerCase());if(hit){hit.seen=(hit.seen||1)+1;hit.note=x.rule||x.explanation||hit.note}else all.push({id:'ai-'+Date.now()+'-'+all.length,category:x.category||'Production',wrong,correct,note:x.rule||x.explanation||'Détecté par le tuteur IA',severity:'high',seen:1,next:'today'})}return all.slice(-60)}
function errors(){let all=[...D.errors,...(S.aiErrors||[])];$('#errorRows').innerHTML=all.map(e=>`<tr><td>${e.category}</td><td class="wrong">${e.wrong}</td><td><span class="right">${e.correct}</span><div class="muted">${e.note}</div></td><td>${e.seen||1}×</td><td>${e.next==='today'?'Aujourd’hui':(e.next||'Bientôt')}</td></tr>`).join('')}$('#practiceErrors').onclick=()=>game('error');
let img=null;$('#scanInput').onchange=e=>{img=e.target.files?.[0];if(!img)return;$('#scanPreview').src=URL.createObjectURL(img);$('#scanPreview').hidden=false;$('#ocrStatus').textContent='Image chargée.'};$('#runOcr').onclick=async()=>{if(!img)return toast('Ajoute une image');if(!window.TEF_CONNECTED?.ready){$('#ocrStatus').textContent='Mode local : colle ou corrige la transcription manuellement.';return}$('#ocrStatus').textContent='Lecture de la page et analyse de l’écriture…';try{let a=await window.TEF_CONNECTED.analyzeNotes(img,$('#scanText').value,D.errors);if(a.transcription)$('#scanText').value=a.transcription;let corr=(a.corrections||[]).map(x=>`<div class="finding"><strong>${x.original}</strong> → ${x.correction}<br><small>${x.explanation||''}</small></div>`).join(''),gram=(a.grammar_concepts||[]).map(x=>`<div class="finding ok"><strong>${x.name}</strong><br><small>${x.explanation||''}</small></div>`).join('');$('#noteAnalysis').innerHTML=corr+gram+(a.uncertain_segments?.length?`<div class="finding">Lecture incertaine : ${a.uncertain_segments.join(' · ')}</div>`:'');S.lastScan=a;if(a.corrections?.length)S.aiErrors=mergeAIErrors(S.aiErrors,a.corrections);save();errors();$('#ocrStatus').textContent='Analyse terminée. Vérifie la transcription avant d’ajouter le vocabulaire.'}catch(e){$('#ocrStatus').textContent='Erreur : '+e.message}};$('#analyzeNotes').onclick=async()=>{if(window.TEF_CONNECTED?.ready){try{let a=await window.TEF_CONNECTED.analyzeNotes(null,$('#scanText').value,D.errors);$('#noteAnalysis').innerHTML=(a.corrections||[]).map(x=>`<div class="finding"><strong>${x.original}</strong> → ${x.correction}<br><small>${x.explanation||''}</small></div>`).join('')||'<div class="finding ok">Aucune correction majeure.</div>';S.lastScan=a;save();return}catch(e){}}let f=known($('#scanText').value);$('#noteAnalysis').innerHTML=f.length?f.map(x=>`<div class="finding">À vérifier : ${x}</div>`).join(''):'<div class="finding ok">Aucune erreur connue détectée.</div>'};$('#extractVocab').onclick=()=>{let structured=S.lastScan?.vocabulary||[],n=0;if(structured.length){structured.slice(0,12).forEach(v=>{let x=v.french||'';if(x&&!vocab().some(k=>k.front.toLowerCase()===x.toLowerCase())){S.custom.push({id:'c'+Date.now()+n,front:x,back:v.meaning_en||'À définir',example:v.example||'Ajouté depuis tes notes.',tag:'scan'});n++}})}else{let w=[...new Set(($('#scanText').value.toLowerCase().match(/[a-zàâçéèêëîïôûùüÿœæ'-]{6,}/g)||[]))].slice(0,8);w.forEach(x=>{if(!vocab().some(v=>v.front===x)){S.custom.push({id:'c'+Date.now()+n,front:x,back:'À définir avec le tuteur',example:'Ajouté depuis tes notes.',tag:'scan'});n++}})}save();build();toast(`${n} mots ajoutés`)};
function msg(t,w='bot'){let d=document.createElement('div');d.className='msg '+w;d.textContent=t;$('#messages').appendChild(d);d.scrollIntoView({behavior:'smooth'})}function local(q){q=q.toLowerCase();if(q.includes('erreur'))return `Priorités : ${D.errors.slice(0,3).map(e=>e.correct).join(' ; ')}.`;if(q.includes('plan')||q.includes('aujourd'))return 'Aujourd’hui : 5 cartes, de/des, puis 5 minutes d’argumentation.';if(q.includes('grammaire')||q.includes('beaucoup'))return 'Après beaucoup, peu, assez et trop, utilise généralement de : beaucoup de commerces.';if(q.includes('vocab'))return 'Révise : tenir compte de, un compromis, être desservi par, en revanche, par conséquent.';return 'Mode local actif. Un endpoint IA sécurisé permettra la correction libre, la voix et l’analyse complète.'}async function remote(q){let endpoint=window.TEF_CONNECTED?.ready?'/api/tutor':S.endpoint;if(!endpoint)return null;try{let r=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json',...(window.TEF_CONNECTED?.headers?.()||{})},body:JSON.stringify({message:q,profile:D.profile,errors:D.errors,vocab:vocab(),state:S})});if(!r.ok)throw new Error('Tutor unavailable');let j=await r.json();return j.reply||j.message}catch{return null}}$('#chatForm').onsubmit=async e=>{e.preventDefault();let q=$('#chatInput').value.trim();if(!q)return;$('#chatInput').value='';msg(q,'user');msg(await remote(q)||local(q))};$('#saveEndpoint').onclick=()=>{S.endpoint=$('#apiEndpoint').value.trim();save();toast('Endpoint enregistré')};$('#dictateBtn').onclick=async()=>{if(!window.TEF_CONNECTED?.ready)return toast('Connecte le compte pour la conversation vocale.');try{await window.TEF_CONNECTED.startVoice({mode:'tutor',prompt:'Conversation libre de français B2. Corrige les erreurs importantes après la fin de chaque idée.'})}catch(e){toast(e.message)}};
$('#miniMock').onclick=()=>{show('practice');tab='reading';practice();toast('Mini-mock v1 : commence par lecture puis écoute')};function mocks(){$('#mockHistory').innerHTML=S.mocks.length?S.mocks.map(m=>`<div class="quest"><div class="quest-top"><span>${new Date(m.date).toLocaleDateString('fr-FR')}</span><strong>${m.score}/${m.total}</strong></div></div>`).join(''):'<p class="muted">Aucun mock enregistré pour l’instant.</p>'}function official(){$('#officialRequirement').textContent=D.official.requirement;$('#officialChecked').textContent=D.official.checked;$('#officialLinks').innerHTML=D.official.links.map(l=>`<a class="official-link" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join('')}
async function clearNativeCaches(){
  const native=new URLSearchParams(location.search).has('native');
  if(!native)return;
  try{
    if('serviceWorker' in navigator){
      const regs=await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map(r=>r.unregister()));
    }
    if('caches' in window){
      const keys=await caches.keys();
      await Promise.all(keys.map(k=>caches.delete(k)));
    }
  }catch{}
}
async function init(){
  await clearNativeCaches();
  today();plan();practice();grammar();errors();official();mocks();build();card();renderVocabList();
  $('#apiEndpoint').value=S.endpoint||'';
  $('#scanText').value=S.scanText||'';
  msg('Bonjour ! Ton diagnostic est déjà chargé. Demande-moi ton plan ou une révision de tes erreurs.');
  show(S.view||'today');
  if('serviceWorker'in navigator&&!new URLSearchParams(location.search).has('native'))navigator.serviceWorker.register('./sw.js?v=9').catch(()=>{});
  const v=document.querySelector('#buildVersion');if(v)v.textContent='v1.3 • build 9';
}
init()})();
