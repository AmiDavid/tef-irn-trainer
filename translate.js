/* Word translation pane (build 29).
   Computer: right-click a French word → a small pane next to it with the dictionary form, the English meaning in
   this sentence and, if chosen (🌐), one or two other languages. Select a few words first to translate the phrase.
   Shift + right-click keeps the browser's own menu.
   Phone: long-press a word (it gets selected) → the same pane slides up from the bottom; drag the handles for a phrase.
   Source: /api/translate (Claude, signed-in account); without it, the app's own word list.
   Off during a timed examen blanc, as in the real test. */
(()=>{'use strict';
const G=globalThis;

/* ---------- pure helpers (unit-tested in tests/translate.test.cjs) ---------- */
const isL=c=>!!c&&/[\p{L}\p{M}]/u.test(c);
const isApos=c=>c==='’'||c==="'";
const ELIDED=/^(?:[ldjmtsnc]|qu|jusqu|lorsqu|puisqu|quoiqu|presqu)$/i;
const WHOLE=/^(?:aujourd['’]hui|quelqu['’]une?s?|prud['’]hom\p{L}*|presqu['’]îles?)$/iu;
/* The word around position i of text → {start,end} (end excluded), or null when i is not on a word.
   Letters, plus hyphens and apostrophes between letters. Hyphenated words stay whole (peut-être, c’est-à-dire, dis-le);
   elisions are cut after the apostrophe (l’|hôpital, qu’|il), except aujourd’hui, quelqu’un… */
function wordAt(text,i){
  text=String(text||'');
  if(!isL(text[i])){if(i>0&&isL(text[i-1]))i--;else return null}
  const join=k=>(text[k]==='-'||isApos(text[k]))&&isL(text[k-1])&&isL(text[k+1]);
  let s=i,e=i+1;
  while(s>0&&(isL(text[s-1])||join(s-1)))s--;
  while(e<text.length&&(isL(text[e])||join(e)))e++;
  const tok=text.slice(s,e);
  if(!tok.includes('-')&&!WHOLE.test(tok)){
    let a=s;
    for(let k=s;k<e;k++)if(isApos(text[k])){if(i<=k){e=k+1;break}a=k+1}
    s=a;
  }
  if(isApos(text[e])&&ELIDED.test(text.slice(s,e)))e++; // « l’ » right before an inline tag keeps its apostrophe
  return {start:s,end:e};
}
/* The sentence around [s,e) of text, whitespace collapsed, at most max characters. */
function sentenceAt(text,s,e,max=400){
  text=String(text||'');const stop=/[.!?…\n]/;
  let a=s,b=e;
  while(a>0&&!stop.test(text[a-1]))a--;
  while(b<text.length&&!stop.test(text[b]))b++;
  if(b<text.length&&text[b]!=='\n')b++;
  if(b-a>max){a=Math.max(a,s-Math.floor(max/2));b=Math.min(b,a+max)}
  return text.slice(a,b).replace(/\s+/g,' ').trim();
}
G.TEF_TR_CORE={wordAt,sentenceAt};
if(typeof document==='undefined')return;

/* ---------- page ---------- */
const app=()=>G.TEF_APP,C=()=>G.TEF_CONNECTED,S=()=>app()?.S||{};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const LANGS={he:['עברית','rtl'],ar:['العربية','rtl'],es:['Español'],de:['Deutsch'],it:['Italiano'],pt:['Português'],ru:['Русский'],uk:['Українська'],fa:['فارسی','rtl'],zh:['中文']};
const MAXL=2,MAXSEL=240;
const langs=()=>(Array.isArray(S().trLangs)?S().trLangs:[]).filter(l=>LANGS[l]).slice(0,MAXL);
const NO='input,textarea,select,option,[contenteditable=""],[contenteditable="true"],.tr-pane,[data-no-tr]';
const SKIP='.en-note,[lang]:not([lang^="fr"]),script,style,noscript,[hidden],[aria-hidden="true"]';
const elOf=n=>n?(n.nodeType===1?n:n.parentElement):null;

/* French text, outside fields, not during a timed examen blanc. */
function allowed(el){
  if(!el||el.closest(NO))return false;
  const l=(el.closest('[lang]')?.getAttribute('lang')||'fr').toLowerCase();
  return l.startsWith('fr')&&!G.TEF_EXAM?.mockLive?.();
}
/* The nearest ancestor that is not display:inline (a paragraph, a cell, a list item…). */
function boxOf(el,stop){while(el&&el!==stop&&getComputedStyle(el).display==='inline')el=el.parentElement;return el||stop}
/* Text of a block, with a line break between separate boxes (so « mang<b>e</b> » stays one word but two chips don’t merge). */
function collect(block){
  const parts=[];let text='',prev=null;
  const tw=document.createTreeWalker(block,NodeFilter.SHOW_TEXT);
  for(let n;(n=tw.nextNode());){
    const el=n.parentElement,skip=el.closest(SKIP);
    if(skip&&skip!==block&&block.contains(skip))continue;
    const box=boxOf(el,block);
    if(prev&&box!==prev&&text&&!/\s$/.test(text))text+='\n';
    prev=box;parts.push([n,text.length]);text+=n.data;
  }
  return {text,parts};
}
function locate(parts,abs,end){
  for(const [n,st] of parts){const len=n.data.length;if(end?(abs>st&&abs<=st+len):(abs>=st&&abs<st+len))return [n,abs-st]}
  return null;
}
function caretAt(x,y){
  try{
    if(document.caretPositionFromPoint){const p=document.caretPositionFromPoint(x,y);return p&&{node:p.offsetNode,offset:p.offset}}
    if(document.caretRangeFromPoint){const r=document.caretRangeFromPoint(x,y);return r&&{node:r.startContainer,offset:r.startOffset}}
  }catch{}
  return null;
}
const inside=(rects,x,y,pad=2)=>[...rects].some(r=>x>=r.left-pad&&x<=r.right+pad&&y>=r.top-pad&&y<=r.bottom+pad);
const clean=t=>String(t||'').replace(/\s+/g,' ').trim();

/* A selection → {text, context, range}. */
function fromRange(r,t){
  const node=r.startContainer,block=boxOf(elOf(node),document.body),{text,parts}=collect(block);
  const p=parts.find(([n])=>n===node);
  let s=p?p[1]+r.startOffset:text.indexOf(t);if(s<0)s=0;
  return {text:t,context:sentenceAt(text,s,s+t.length,500),range:r.cloneRange()};
}
/* What is under the pointer: the selection if the click is on it, else the word. */
function pickAt(x,y,target){
  if(!allowed(elOf(target)))return null;
  const sel=getSelection();
  if(sel&&sel.rangeCount&&!sel.isCollapsed){
    const r=sel.getRangeAt(0),t=clean(sel.toString());
    if(t&&t.length<=MAXSEL&&/\p{L}/u.test(t)&&inside(r.getClientRects(),x,y)&&allowed(elOf(r.startContainer)))return fromRange(r,t);
  }
  const c=caretAt(x,y);if(!c||!c.node||c.node.nodeType!==3||!allowed(c.node.parentElement))return null;
  const block=boxOf(c.node.parentElement,document.body),{text,parts}=collect(block);
  const p=parts.find(([n])=>n===c.node);if(!p)return null;
  const w=wordAt(text,p[1]+c.offset);if(!w)return null;
  const a=locate(parts,w.start,false),b=locate(parts,w.end,true);if(!a||!b)return null;
  const range=document.createRange();range.setStart(a[0],a[1]);range.setEnd(b[0],b[1]);
  if(!inside(range.getClientRects(),x,y))return null;
  return {text:text.slice(w.start,w.end),context:sentenceAt(text,w.start,w.end),range};
}

/* ---------- lookup: AI, else the app's word list ---------- */
const KEY='tef-tr-cache-v1',MAXC=300;let MEM=null;
function mem(){if(MEM)return MEM;MEM=new Map();try{for(const [k,v] of JSON.parse(localStorage.getItem(KEY)||'[]'))MEM.set(k,v)}catch{}return MEM}
function remember(k,v){const m=mem();m.delete(k);m.set(k,v);while(m.size>MAXC)m.delete(m.keys().next().value);try{localStorage.setItem(KEY,JSON.stringify([...m]))}catch{}}
const keyOf=(t,c,l)=>[t.toLowerCase(),c,l.join(',')].join('|');
const norm=s=>String(s||'').toLowerCase().replace(/'/g,'’').replace(/\s*\((?:m|f)\.\)\s*$/,'').replace(/^(?:l’|(?:le|la|les|un|une|des|se)\s+|s’)/,'').trim();
function fromVocab(text){
  const t=norm(text);if(!t)return null;
  const v=(app()?.vocab?.()||[]).find(x=>norm(x.front)===t);
  return v?{lemma:v.front,grammar:'',en:v.back,other:{},note:'',src:'vocab'}:null;
}
const late=(ms,msg)=>new Promise((_,no)=>setTimeout(()=>no(new Error(msg)),ms));
async function lookup(text,context,ls=langs()){
  const k=keyOf(text,context,ls),hit=mem().get(k);if(hit)return hit;
  const c=C();let why='';
  if(c?.ready&&c.post){
    try{
      const r=await Promise.race([c.post('/api/translate',{text,context,langs:ls}),late(15000,'pas de réponse du serveur')]);
      const v={lemma:r.lemma||'',grammar:r.grammar||'',en:r.en,other:r.other||{},note:r.note||'',src:'ai'};
      if(v.en){remember(k,v);return v}
    }catch(e){why=e.message||''}
  }
  const v=fromVocab(text);if(v)return v;
  throw new Error(why?`Traduction indisponible : ${why}`:c?.session?'Traduction IA indisponible pour le moment.':'Connecte-toi (☁️ Sync) pour traduire chaque mot.');
}

/* ---------- pane ---------- */
let pane=null,cur=null,seq=0,lastPtr='mouse',selTimer=0;
function paneEl(){
  if(pane)return pane;
  pane=document.createElement('div');pane.className='tr-pane';pane.hidden=true;
  pane.setAttribute('role','dialog');pane.setAttribute('aria-label','Traduction');
  pane.addEventListener('click',onPaneClick);
  document.body.appendChild(pane);return pane;
}
function mark(range){
  try{if(!G.CSS?.highlights||!G.Highlight)return;if(range)CSS.highlights.set('tr-word',new Highlight(range));else CSS.highlights.delete('tr-word')}catch{}
}
const POS=[[/^nom/i,'nom'],[/^verbe/i,'verbe'],[/^adj/i,'adj'],[/^adv/i,'adv'],[/connecteur|conjonction/i,'connecteur'],[/expression|locution/i,'expr']];
function inCards(q,r){const f=norm(r.lemma||q.text);return (app()?.vocab?.()||[]).some(v=>norm(v.front)===f)}
function addCard(){
  const q=cur,r=q?.res,a=app();if(!r||!a)return;
  const card={id:'c'+Date.now(),front:clean(r.lemma||q.text).replace(/\s*\((?:m|f)\.\)$/,''),back:r.en,example:q.context&&q.context!==q.text?q.context:'',tag:'trad'};
  const pos=POS.find(([re])=>re.test(r.grammar||''));if(pos)card.pos=pos[1];
  if(/^nom f/i.test(r.grammar||''))card.gender='f';else if(/^nom m/i.test(r.grammar||''))card.gender='m';
  a.S.custom=a.S.custom||[];a.S.custom.push(card);a.save();a.toast?.('Ajouté à tes cartes');render();
}
function render(){
  const p=paneEl(),q=cur;if(!q)return;
  const r=q.res,ls=langs(),long=/\s/.test(q.text);
  const shown=q.text.length>70?q.text.slice(0,67)+'…':q.text;
  let h=`<div class="tr-head"><span class="tr-word${long?' long':''}" lang="fr">${esc(shown)}</span>`
    +('speechSynthesis' in G?'<button type="button" class="tr-icon" data-tr="say" title="Écouter" aria-label="Écouter">🔊</button>':'')
    +`<span class="tr-sp"></span><button type="button" class="tr-icon" data-tr="langs" title="Autres langues" aria-label="Autres langues" aria-expanded="${q.showLangs?'true':'false'}">🌐</button>`
    +'<button type="button" class="tr-icon tr-x" data-tr="close" title="Fermer (Échap)" aria-label="Fermer">×</button></div>';
  if(q.loading)h+='<div class="tr-en tr-wait" aria-live="polite">…</div>';
  else if(q.error)h+=`<div class="tr-err" aria-live="polite">${esc(q.error)}</div><div class="tr-foot"><button type="button" class="tr-link" data-tr="retry">Réessayer</button></div>`;
  else if(r){
    const lemma=r.lemma&&norm(r.lemma)!==norm(q.text)?r.lemma:'';
    const meta=[lemma,r.grammar].filter(Boolean).join(' · ');
    h+=(meta?`<div class="tr-meta" lang="fr">${esc(meta)}</div>`:'')
      +`<div class="tr-en" lang="en" aria-live="polite">${esc(r.en)}</div>`
      +(r.note?`<div class="tr-note" lang="en">${esc(r.note)}</div>`:'')
      +ls.filter(l=>r.other?.[l]).map(l=>`<div class="tr-other"><b lang="${l}">${LANGS[l][0]}</b><span lang="${l}" dir="${LANGS[l][1]||'auto'}">${esc(r.other[l])}</span></div>`).join('')
      +(r.src==='vocab'?'<div class="tr-src">D’après la liste de vocabulaire de l’app.</div>':'')
      +`<div class="tr-foot">${inCards(q,r)?'<span class="tr-done">✓ Dans mes cartes</span>':'<button type="button" class="tr-link" data-tr="add">＋ Mes cartes</button>'}</div>`;
  }
  if(q.showLangs)h+=`<div class="tr-langs"><div class="tr-chips">${Object.entries(LANGS).map(([k,[n]])=>`<button type="button" class="tr-chip" data-tr="lang" data-l="${k}" lang="${k}" aria-pressed="${ls.includes(k)}">${n}</button>`).join('')}</div><small>Jusqu’à 2 langues en plus de l’anglais. Maj + clic droit : menu habituel.</small></div>`;
  p.innerHTML=h;p.hidden=false;place();
}
function place(){
  const p=pane,q=cur;if(!p||!q)return;
  const sheet=q.sheet||innerWidth<560;p.classList.toggle('sheet',sheet);
  if(sheet){p.style.left=p.style.top='';return}
  const a=q.anchor,w=p.offsetWidth,h=p.offsetHeight,m=8;
  let top=a.bottom+6;if(top+h>innerHeight-m)top=Math.max(m,a.top-6-h);
  p.style.left=Math.max(m,Math.min(a.left-10,innerWidth-w-m))+'px';p.style.top=top+'px';
}
async function load(){
  const q=cur;if(!q)return;const id=++seq;q.loading=true;q.error='';render();
  try{const r=await lookup(q.text,q.context,langs());if(id!==seq||q!==cur)return;q.res=r;q.loading=false;render()}
  catch(e){if(id!==seq||q!==cur)return;q.loading=false;q.error=e.message||'Traduction indisponible.';render()}
}
function open(hit,{x=0,y=0,sheet=false}={}){
  const b=hit.range?.getBoundingClientRect?.();
  const anchor=b&&(b.width||b.height)?{left:b.left,top:b.top,bottom:b.bottom}:{left:x,top:y,bottom:y};
  cur={text:hit.text,context:hit.context||hit.text,anchor,sheet,range:sheet?null:hit.range,showLangs:false,res:null};
  mark(sheet?null:hit.range);
  return load();
}
function close(){if(!cur&&(!pane||pane.hidden))return;cur=null;seq++;mark(null);if(pane){pane.hidden=true;pane.innerHTML=''}}
function toggleLang(l){
  if(!LANGS[l])return;let ls=langs();
  ls=ls.includes(l)?ls.filter(x=>x!==l):[...ls,l].slice(-MAXL);
  S().trLangs=ls;app()?.save?.();load();
}
function onPaneClick(e){
  const b=e.target.closest('[data-tr]');if(!b||!cur)return;
  const a=b.dataset.tr;
  if(a==='close')close();
  else if(a==='say')app()?.say?.(cur.text);
  else if(a==='langs'){cur.showLangs=!cur.showLangs;render()}
  else if(a==='lang')toggleLang(b.dataset.l);
  else if(a==='retry')load();
  else if(a==='add')addCard();
}

/* Phone: a word selected by a long press (or a phrase, with the handles) opens the pane at the bottom. */
function fromSelection(){
  const sel=getSelection();if(!sel||!sel.rangeCount||sel.isCollapsed)return;
  const ae=document.activeElement;if(ae&&ae.matches?.('input,textarea,[contenteditable="true"]'))return;
  const t=clean(sel.toString());if(!t||t.length>MAXSEL||!/\p{L}/u.test(t))return;
  const r=sel.getRangeAt(0);if(!allowed(elOf(r.startContainer)))return;
  if(cur&&cur.sheet&&cur.text===t)return;
  open(fromRange(r,t),{sheet:true});
}

addEventListener('pointerdown',e=>{lastPtr=e.pointerType||'mouse';if(pane&&!pane.hidden&&!pane.contains(e.target)&&e.button!==2)close()},true);
document.addEventListener('contextmenu',e=>{
  if(pane&&pane.contains(e.target))return;
  if(e.shiftKey||e.defaultPrevented||lastPtr==='touch'){if(lastPtr!=='touch')close();return}
  const hit=pickAt(e.clientX,e.clientY,e.target);
  if(!hit){close();return}
  e.preventDefault();open(hit,{x:e.clientX,y:e.clientY});
});
document.addEventListener('selectionchange',()=>{if(lastPtr!=='touch')return;clearTimeout(selTimer);selTimer=setTimeout(fromSelection,450)});
addEventListener('keydown',e=>{if(e.key==='Escape'&&cur)close()},true);
/* The pane follows its word when the page scrolls, and closes once the word leaves the screen. */
function follow(){
  if(!cur||cur.sheet||!cur.range)return;
  const b=cur.range.getBoundingClientRect();
  if(!(b.width||b.height)||b.bottom<0||b.top>innerHeight){close();return}
  cur.anchor={left:b.left,top:b.top,bottom:b.bottom};place();
}
addEventListener('scroll',e=>{if(cur&&!(pane&&pane.contains(e.target)))follow()},true);
addEventListener('resize',()=>{if(cur)follow()});
addEventListener('hashchange',close);

G.TEF_TRANSLATE={pickAt,open,close,lookup,fromSelection,state:()=>cur,clearCache:()=>{MEM=new Map();try{localStorage.removeItem(KEY)}catch{}}};
})();
