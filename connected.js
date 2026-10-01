(()=>{
'use strict';
const STATE_KEY='tef-b2-v1';
const C={ready:false,session:null,supabase:null,config:null,voice:null};
window.TEF_CONNECTED=C;

const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const toast=t=>{const e=document.querySelector('#toast');if(!e)return;e.textContent=t;e.classList.add('show');setTimeout(()=>e.classList.remove('show'),1800)};
function state(){try{return JSON.parse(localStorage.getItem(STATE_KEY)||'{}')}catch{return {}}}
function setState(s){localStorage.setItem(STATE_KEY,JSON.stringify(s))}
function headers(){return C.session?.access_token?{Authorization:'Bearer '+C.session.access_token}:{}}
C.headers=headers;
async function post(url,body){const r=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json',...headers()},body:JSON.stringify(body)});const j=await r.json().catch(()=>({}));if(!r.ok)throw new Error(j.error||'Request failed');return j}
C.post=post;

function loadScript(src){return new Promise((ok,bad)=>{const s=document.createElement('script');s.src=src;s.onload=ok;s.onerror=bad;document.head.appendChild(s)})}
function addSyncButton(){
  const row=document.querySelector('.top-actions'); if(!row||document.querySelector('#syncBtn'))return;
  const b=document.createElement('button');b.id='syncBtn';b.className='btn small ghost';b.textContent='☁️ Sync';b.onclick=openAccount;row.prepend(b)
}
function overlay(title,html){
  const x=document.createElement('div');x.className='modal open';x.id='connModal';x.innerHTML='<div class="modal-box"><div class="modal-head"><h2>'+title+'</h2><button class="close" id="connClose">×</button></div>'+html+'</div>';
  document.body.appendChild(x);x.querySelector('#connClose').onclick=()=>x.remove();x.onclick=e=>{if(e.target===x)x.remove()};return x
}
async function openAccount(){
  if(!C.config?.supabaseUrl)return overlay('Connexion','<p>La synchronisation sera disponible sur le déploiement Vercel + Supabase.</p>');
  if(C.session){
    const x=overlay('Compte & synchronisation',`<p>Connecté : <strong>${C.session.user?.email||''}</strong></p><div class="button-row"><button class="btn" id="syncNow">Synchroniser</button><button class="btn ghost" id="logout">Se déconnecter</button></div><p class="muted">Tes progrès restent aussi copiés localement sur cet appareil.</p>`);
    x.querySelector('#syncNow').onclick=()=>syncState(true);
    x.querySelector('#logout').onclick=async()=>{await C.supabase.auth.signOut();location.reload()};
  }else{
    const x=overlay('Synchroniser mes progrès','<p>Entre ton email. Supabase t’enverra un lien de connexion sécurisé.</p><div class="field"><label>Email</label><input id="syncEmail" type="email" placeholder="toi@example.com"></div><button class="btn" id="sendMagic" style="margin-top:12px">Envoyer le lien</button><div id="syncMsg" class="muted" style="margin-top:10px"></div>');
    x.querySelector('#sendMagic').onclick=async()=>{const email=x.querySelector('#syncEmail').value.trim();if(!email)return;const {error}=await C.supabase.auth.signInWithOtp({email,options:{emailRedirectTo:location.origin}});x.querySelector('#syncMsg').textContent=error?error.message:'Lien envoyé. Ouvre-le sur cet appareil.'}
  }
}
async function syncState(forcePush=false){
  if(!C.session||!C.supabase)return;
  const uid=C.session.user.id, local=state();
  const {data,error}=await C.supabase.from('learner_state').select('state,updated_at').eq('user_id',uid).maybeSingle();
  if(error){toast('Sync : '+error.message);return}
  if(!data||forcePush){
    await C.supabase.from('learner_state').upsert({user_id:uid,state:local,updated_at:new Date().toISOString()});
    toast('Progression synchronisée');return
  }
  const remote=data.state||{}, lt=Date.parse(local.updatedAt||0)||0, rt=Date.parse(remote.updatedAt||data.updated_at||0)||0;
  if(rt>lt+1500){setState(remote);toast('Progression récupérée');setTimeout(()=>location.reload(),500)}
  else{await C.supabase.from('learner_state').upsert({user_id:uid,state:local,updated_at:new Date().toISOString()});toast('Progression synchronisée')}
}
let syncTimer;
window.addEventListener('tef:state',()=>{clearTimeout(syncTimer);syncTimer=setTimeout(()=>syncState(false),1200)});

C.analyzeWriting=async({text,task,constraints,errors})=>post('/api/analyze-writing',{text,task,constraints,errors});
async function fileDataURL(file,max=1600){
  const raw=await new Promise((ok,bad)=>{const r=new FileReader();r.onload=()=>ok(r.result);r.onerror=bad;r.readAsDataURL(file)});
  const img=await new Promise((ok,bad)=>{const i=new Image();i.onload=()=>ok(i);i.onerror=bad;i.src=raw});
  let w=img.width,h=img.height,scale=Math.min(1,max/Math.max(w,h));w=Math.round(w*scale);h=Math.round(h*scale);
  const c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(img,0,0,w,h);
  return c.toDataURL('image/jpeg',.76)
}
C.analyzeNotes=async(file,text,errors)=>{const image=file?await fileDataURL(file):null;return post('/api/analyze-notes',{image,text,errors})};

function assessmentHTML(a){
  if(!a)return '';
  const errs=(a.recurring_errors||a.major_errors||[]).slice(0,6).map(e=>`<div class="finding"><strong>${e.original||''}</strong> → ${e.correction||''}<br><small>${e.rule||e.explanation||''}</small></div>`).join('');
  return `<div class="feedback"><strong>Niveau estimé : ${a.estimated_cefr||'—'}</strong><br>B2 suffisant : ${a.b2_sufficient===true?'oui':a.b2_sufficient===false?'pas encore':'—'}<br><br>${errs}${(a.key_learnings||[]).length?'<br><strong>À retenir</strong><br>'+(a.key_learnings||[]).map(x=>'• '+x).join('<br>'):''}</div>`
}
C.assessmentHTML=assessmentHTML;

async function startVoice({prompt,mode='exam',onDone}){
  if(!C.session)throw new Error('Connecte ton compte d’abord.');
  if(C.voice)throw new Error('Une session orale est déjà ouverte.');
  const stream=await navigator.mediaDevices.getUserMedia({audio:true});
  const chunks=[];let recorder;
  try{recorder=new MediaRecorder(stream,{mimeType:'audio/webm;codecs=opus',audioBitsPerSecond:64000})}catch{recorder=new MediaRecorder(stream)}
  recorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data)};recorder.start(1000);
  const token=await post('/api/realtime-token',{mode,prompt});
  const key=token.value||token.client_secret?.value||token.client_secret||token.secret;
  if(!key)throw new Error('Token vocal invalide.');
  const pc=new RTCPeerConnection(), audio=document.createElement('audio');audio.autoplay=true;pc.ontrack=e=>audio.srcObject=e.streams[0];
  stream.getTracks().forEach(t=>pc.addTrack(t,stream));
  const dc=pc.createDataChannel('oai-events');
  const panel=document.createElement('div');panel.className='voice-panel';panel.innerHTML=`<div><strong>🗣️ Examinateur IA</strong><div id="voiceStatus" class="muted">Connexion…</div></div><div id="voiceTranscript" class="voice-transcript"></div><button class="btn danger" id="voiceStop">Terminer</button>`;document.body.appendChild(panel);
  const stat=panel.querySelector('#voiceStatus'),log=panel.querySelector('#voiceTranscript');
  let userLines=[],assistantText='';
  dc.onopen=()=>{stat.textContent='Connecté — parle naturellement.'};
  dc.onmessage=e=>{try{const ev=JSON.parse(e.data);
    if(ev.type==='conversation.item.input_audio_transcription.completed'&&ev.transcript){userLines.push(ev.transcript);log.innerHTML+='<div><strong>Moi :</strong> '+escapeHTML(ev.transcript)+'</div>'}
    if(ev.type==='response.output_audio_transcript.delta'&&ev.delta){assistantText+=ev.delta}
    if(ev.type==='response.output_audio_transcript.done'&&assistantText){log.innerHTML+='<div><strong>Examinateur :</strong> '+escapeHTML(assistantText)+'</div>';assistantText=''}
  }catch{}};
  const offer=await pc.createOffer();await pc.setLocalDescription(offer);
  const sdp=await fetch('https://api.openai.com/v1/realtime/calls',{method:'POST',headers:{Authorization:'Bearer '+key,'Content-Type':'application/sdp'},body:offer.sdp});
  if(!sdp.ok)throw new Error(await sdp.text());await pc.setRemoteDescription({type:'answer',sdp:await sdp.text()});
  C.voice={pc,dc,stream,recorder,panel};
  const stop=async()=>{
    panel.querySelector('#voiceStop').disabled=true;stat.textContent='Analyse de ta performance…';
    try{if(dc.readyState==='open')dc.send(JSON.stringify({type:'session.close'}))}catch{}
    await new Promise(ok=>{recorder.onstop=ok;recorder.stop()});
    stream.getTracks().forEach(t=>t.stop());pc.close();C.voice=null;
    const blob=new Blob(chunks,{type:recorder.mimeType||'audio/webm'}),data=await blobToDataURL(blob);
    try{const result=await post('/api/analyze-speech',{audio:data,prompt,errors:window.TEF_DATA?.errors||[]});stat.textContent='Terminé';log.innerHTML+=`<div class="voice-result"><strong>Transcription</strong><br>${escapeHTML(result.transcript||userLines.join(' '))}<br><br>${assessmentHTML(result.assessment)}</div>`;onDone?.(result)}
    catch(e){stat.textContent='Analyse indisponible : '+e.message}
  };
  panel.querySelector('#voiceStop').onclick=stop;
  return {stop}
}
C.startVoice=startVoice;
function blobToDataURL(blob){return new Promise((ok,bad)=>{const r=new FileReader();r.onload=()=>ok(r.result);r.onerror=bad;r.readAsDataURL(blob)})}
function escapeHTML(s){return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}

async function init(){
  addSyncButton();
  try{
    const r=await fetch('/api/config',{cache:'no-store'});if(!r.ok)return;C.config=await r.json();
    if(!C.config.supabaseUrl||!C.config.supabaseKey)return;
    await loadScript('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2');
    C.supabase=window.supabase.createClient(C.config.supabaseUrl,C.config.supabaseKey);
    const {data}=await C.supabase.auth.getSession();C.session=data.session;C.ready=Boolean(C.session&&C.config.ai);
    C.supabase.auth.onAuthStateChange((_e,s)=>{C.session=s;C.ready=Boolean(s&&C.config.ai);updateBadge();if(s)syncState(false)});
    updateBadge();if(C.session)syncState(false);
  }catch(e){console.warn('Connected mode unavailable',e)}
}
function updateBadge(){const b=document.querySelector('#syncBtn');if(b)b.textContent=C.session?'☁️ Synced':'☁️ Sync'}
init();
})();