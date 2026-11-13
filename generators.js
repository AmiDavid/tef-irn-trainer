/* TEF B2 Coach — unlimited drills generated from data the app already trusts:
   the conjugation engine (conjugate.js, 318 unit tests) and the vocabulary list (genders, plurals, feminine forms).
   Only topics whose answers are fully mechanical get a generator, so every generated answer key is correct. */
(()=>{
'use strict';
const app=()=>window.TEF_APP,D=()=>app().D;
const C=()=>window.TEF_CONJ;
const pick=a=>a[Math.floor(Math.random()*a.length)];
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const PERS=['je','tu','il','elle','nous','vous','ils'];
const TENSE={present:'Présent',passeCompose:'Passé composé',plusQueParfait:'Plus-que-parfait',futur:'Futur simple',conditionnel:'Conditionnel présent',conditionnelPasse:'Conditionnel passé',subjonctif:'Subjonctif présent',imparfait:'Imparfait'};
const COMPOUND=new Set(['passeCompose','plusQueParfait','conditionnelPasse']);

/* Verb pools chosen so every form is unambiguous (no reciprocal pronominal verbs, no impersonal verbs). */
const V={
  irregular:['être','avoir','aller','faire','dire','pouvoir','vouloir','devoir','savoir','voir','venir','tenir','prendre','mettre','écrire','lire','connaître','vivre','suivre','recevoir','boire','croire','courir','ouvrir','offrir','partir','sortir','dormir','servir','sentir','conduire','construire','craindre','peindre','rire','plaire','s’asseoir','valoir','envoyer','mourir','naître','comprendre','apprendre','devenir','revenir','obtenir','permettre','promettre','reconnaître','découvrir','traduire','s’inscrire','se souvenir','décrire','produire','atteindre','rejoindre'],
  regular:['parler','travailler','habiter','chercher','payer','acheter','appeler','commencer','manger','préférer','finir','choisir','réussir','remplir','attendre','répondre','vendre','perdre','se lever','se reposer','s’habiller','se dépêcher','se renseigner','s’installer','envoyer','essayer','nettoyer','employer','réfléchir'],
  compoundAvoir:['parler','travailler','finir','choisir','prendre','faire','voir','mettre','écrire','lire','recevoir','ouvrir','dire','boire','vivre','connaître','devoir','pouvoir','vouloir','savoir','attendre','payer','envoyer','appeler','acheter','comprendre','apprendre','obtenir','offrir','découvrir','répondre','perdre','remplir','réussir','croire','courir','suivre'],
  compoundEtre:['aller','venir','partir','sortir','arriver','rester','tomber','naître','mourir','devenir','revenir','entrer','rentrer','retourner','descendre','monter'],
  compoundPron:['se lever','s’inscrire','se souvenir','s’asseoir','se promener','s’habiller','se reposer','se dépêcher','se renseigner','s’installer','se tromper','se perdre'],
  subj:['être','avoir','aller','faire','pouvoir','savoir','vouloir','venir','prendre','devoir','recevoir','boire','croire','voir','dire','mettre','écrire','lire','partir','sortir','parler','finir','attendre','choisir','remplir','répondre','vendre','connaître','vivre','suivre','comprendre','obtenir','envoyer','payer','se lever','s’inscrire'],
};
const SUBJECT_RE=/^(que |qu’)?(je |j’|tu |il |elle |nous |vous |ils )/;
/* Accepted spellings of one conjugated row: the full form, without « que », and without the subject pronoun;
   for être / pronominal compound tenses every correct agreement (je, tu: m/f; nous, vous: m/f plural; vous: polite singular). */
function variants(r,t,row){
  let forms=[r.tenses[t][row]];
  if(COMPOUND.has(t)&&(r.aux==='être'||r.pronominal)){
    // Rebuild from the participle so that every correct agreement is accepted (assis → assise, assis, assises).
    const full=forms[0],prefix=full.slice(0,full.lastIndexOf(' ')),pp=r.participle;
    const mp=/[sx]$/.test(pp)?pp:pp+'s',f=pp+'e',fp=pp+'es';
    const agree=[[pp,f],[pp,f],[pp],[f],[mp,fp],[pp,f,mp,fp],[mp]][row];
    forms=agree.map(a=>prefix+' '+a);
  }
  // Verbs in -ayer have two accepted spellings: je paie / je paye, je paierai / je payerai.
  if(/ayer$/.test(r.infinitive))forms=[...forms,...forms.map(f=>f.replace(/ai(?=e)/g,'ay'))];
  const out=new Set();
  for(const f of forms){out.add(f);const noQue=f.replace(/^(que |qu’)/,'');out.add(noQue);out.add(noQue.replace(SUBJECT_RE,''))}
  return [...out].filter(Boolean);
}
const stemOf=r=>String(r.tenses.futur[0]).replace(/^(je |j’)/,'').replace(/^(me |m’)/,'').replace(/ai$/,'');
function explainFor(r,t){
  const inf=r.infinitive;
  if(t==='present')return `Présent de « ${inf} » : forme irrégulière à connaître par cœur.`;
  if(t==='futur')return `Futur simple : radical « ${stemOf(r)} » + -ai, -as, -a, -ons, -ez, -ont.`;
  if(t==='conditionnel')return `Conditionnel présent : radical du futur « ${stemOf(r)} » + terminaisons de l’imparfait (-ais, -ait, -ions, -iez, -aient).`;
  if(t==='subjonctif')return `Subjonctif présent de « ${inf} » : à partir du radical de « ils » au présent (formes irrégulières pour être, avoir, aller, faire, pouvoir, savoir, vouloir).`;
  const aux=r.aux==='être'?'être':'avoir';
  const when={passeCompose:'au présent',plusQueParfait:'à l’imparfait',conditionnelPasse:'au conditionnel'}[t];
  return `${TENSE[t]} : auxiliaire ${aux} ${when} + participe passé « ${r.participle} »${aux==='être'?' (accord avec le sujet)':''}.`;
}
function conjItem(inf,t,lvl){
  const r=C()?.conjugate(inf);if(!r||r.impersonal)return null;
  const row=Math.floor(Math.random()*7),correct=r.tenses[t]?.[row];if(!correct)return null;
  const label=`${TENSE[t]} de « ${r.infinitive} » — ${PERS[row]}`;
  if(Math.random()<.4){ // multiple choice: the same person in other tenses
    const noQue=x=>x.replace(/^(que |qu’)/,''),right=noQue(correct); // no « que » anywhere, or it would give the subjunctive away
    const others=['present','imparfait','futur','conditionnel','passeCompose','subjonctif','plusQueParfait'].filter(x=>x!==t).map(x=>r.tenses[x]?.[row]).filter(Boolean).map(noQue);
    const choices=[right];for(const o of shuffle(others)){if(choices.length>=4)break;if(!choices.includes(o))choices.push(o)}
    if(choices.length>=3){const sh=shuffle(choices);return {type:'mcq',lvl,gen:true,prompt:`${label} : ___`,choices:sh,answer:sh.indexOf(right),explain:explainFor(r,t)}}
  }
  return {type:'fill',lvl,gen:true,prompt:`${label} : ___`,answers:variants(r,t,row),explain:explainFor(r,t),hint:'avec ou sans le pronom'};
}
function conjGen(tenses,pools){
  return n=>{const out=[];for(let g=0;out.length<n&&g<n*6;g++){const t=pick(tenses),pool=pick(pools);const x=conjItem(pick(pool),t,pool===V.regular?1:2);if(x&&!out.some(o=>o.prompt===x.prompt))out.push(x)}return out};
}

/* ---------- imperative (from the conjugation engine): tu / nous / vous, negative for pronominal verbs ---------- */
const IMP=['parler','finir','prendre','faire','aller','venir','dire','être','avoir','savoir','mettre','attendre','écrire','lire','ouvrir','offrir','envoyer','acheter','appeler','remplir','choisir','répondre','boire','manger','commencer','payer','sortir','partir','dormir','courir','suivre','croire','descendre','tourner','se lever','se dépêcher','s’asseoir','s’inscrire','se reposer','s’habiller','se renseigner','s’installer','se coucher'];
const IMP_P=['tu','nous','vous'];
const IRREG_IMP={être:'sois, soyons, soyez',avoir:'aie, ayons, ayez',savoir:'sache, sachons, sachez',vouloir:'veuille, veuillons, veuillez'};
function explainImp(r,row){
  const inf=r.infinitive.replace(/^(se |s’)/,'');
  if(IRREG_IMP[inf])return `Impératif irrégulier de « ${inf} » : ${IRREG_IMP[inf]}.`;
  if(r.pronominal)return 'Verbe pronominal : à l’affirmatif, le pronom suit le verbe avec un trait d’union (toi, nous, vous).';
  if(row===0&&/(er|ouvrir|offrir)$/.test(inf))return 'Verbes en -er (et aller, ouvrir, offrir) : pas de s avec tu à l’impératif.';
  return 'Impératif : la forme du présent, sans sujet.';
}
function imperItem(){
  const r=C()?.conjugate(pick(IMP));if(!r||r.impersonal)return null;
  const forms=r.tenses.imperatif;if(!forms||!forms[0])return null;
  const row=Math.floor(Math.random()*3),aff=forms[row];
  if(r.pronominal&&Math.random()<.5){ // negative: ne te lève pas / ne t’assieds pas / ne vous levez pas
    const verb=aff.split('-')[0],pron=['te','nous','vous'][row];
    const ans=`ne ${pron==='te'&&/^[aeiouyhéèêâîôû]/i.test(verb)?'t’':pron+' '}${verb} pas`;
    return {type:'fill',lvl:2,gen:true,prompt:`Impératif négatif de « ${r.infinitive} » — ${IMP_P[row]} : ___`,answers:[ans],explain:`À la forme négative, le pronom revient devant le verbe : ${ans}.`};
  }
  const presTu=String(r.tenses.present[1]||'').replace(/^tu /,'');
  if(row===0&&!r.pronominal&&presTu&&presTu!==aff&&Math.random()<.5){ // the classic trap: parles / parle
    const choices=shuffle([aff,presTu,r.infinitive]);
    if(new Set(choices).size===3)return {type:'mcq',lvl:1,gen:true,prompt:`Impératif de « ${r.infinitive} » — tu : ___ !`,choices,answer:choices.indexOf(aff),explain:explainImp(r,row)};
  }
  const answers=/ayer$/.test(r.infinitive)?[...new Set([aff,aff.replace(/ai(?=e)/g,'ay')])]:[aff];
  return {type:'fill',lvl:1,gen:true,prompt:`Impératif de « ${r.infinitive} » — ${IMP_P[row]} : ___`,answers,explain:explainImp(r,row)};
}

/* ---------- vocabulary-based drills ---------- */
const nouns=()=>(D().vocab||[]).filter(v=>v.pos==='nom'&&/^(le |la |l’|les )/.test(v.front)&&['m','f'].includes(v.gender));
const adjs=()=>(D().vocab||[]).filter(v=>v.pos==='adj'&&v.fem&&v.fem!==v.front);
const bare=f=>f.replace(/^(le |la |l’|les )/,'');
/* People named by the same word for a man or a woman (un / une locataire): « un / une ? » has two right answers, so they are not asked. */
const BOTH=new Set(['propriétaire','locataire','bénévole','maire','médecin','médecin traitant','ministre','juge','secrétaire','élève','collègue','fonctionnaire','stagiaire','responsable','enfant','notaire','partenaire','camarade','adulte','interprète','architecte','pédiatre','psychologue','comptable','gendarme','guide']);
/* « C’est ___ attestation (possessif, je) » → mon: ma, ta, sa become mon, ton, son before a vowel or a silent h. */
const POSS={je:['mon','ma'],tu:['ton','ta'],il:['son','sa'],elle:['son','sa']};
function possessiveItem(v,sing){
  const who=pick(Object.keys(POSS)),[m,f]=POSS[who],vowel=/^l’/.test(v.front),ans=vowel||v.gender==='m'?m:f;
  const explain=vowel&&v.gender==='f'?`« ${sing} » est féminin, mais commence par une voyelle (ou un h muet) : ${f} → ${m} ${sing}.`
    :`« ${sing} » est ${v.gender==='f'?'féminin':'masculin'} : ${ans} ${sing}.`;
  return {type:'fill',lvl:1,gen:true,prompt:`C’est ___ ${sing}.`,hint:`possessif, ${who}`,answers:[ans],explain};
}
function genderItem(){
  const v=pick(nouns()),sing=bare(v.front);
  if(/^les /.test(v.front))return null;
  const r=Math.random();
  if(r>=.3&&r<.48)return possessiveItem(v,sing);
  if(r<.3&&!BOTH.has(sing)&&!/iste$/.test(sing)){
    /* The meaning goes with the word: some nouns have both genders with two meanings (le poste = job ≠ la poste = post office). */
    const back=String(v.back||''),meaning=back.replace(/\s*\(.*$/,'').trim(),twin=((back.match(/\(≠\s*([^)]*)\)/)||[])[1]||'').match(/^(?:(?:le|la|un|une) |l’).*/)?.[0];
    const ch=['un','une'];
    return {type:'mcq',lvl:1,gen:true,prompt:`___ ${sing}${meaning?` (${meaning})`:''}`,choices:ch,answer:v.gender==='f'?1:0,
      explain:`« ${sing} » est ${v.gender==='f'?'féminin':'masculin'} : ${v.gender==='f'?'une':'un'} ${sing}.${twin?` Attention : ${twin.replace(/,\s*/,' = ')}.`:''}`}}
  if(r<.75&&v.plural&&v.plural!=='les '+sing)return {type:'fill',lvl:1,gen:true,prompt:`Pluriel de « ${v.front} » : ___`,answers:[v.plural,v.plural.replace(/^les /,'')],explain:`Pluriel : ${v.plural}.`};
  const a=pick(adjs());if(!a)return null;
  return {type:'fill',lvl:1,gen:true,prompt:`Féminin de l’adjectif « ${a.front} » : ___`,answers:[a.fem],explain:`${a.front} → ${a.fem}.`};
}
const DE=['Je parle','Nous avons discuté','Elle s’occupe','Il a besoin','Ils se plaignent','Vous vous souvenez'];
const A=['Je pense','Elle fait attention','Nous nous intéressons','Il s’habitue','Vous réfléchissez','Ils participent'];
function contraction(prep,front){
  const art=front.match(/^(le |la |l’|les )/)[1],rest=front.slice(art.length);
  if(prep==='de')return {'le ':'du ','la ':'de la ','l’':'de l’','les ':'des '}[art]+rest;
  return {'le ':'au ','la ':'à la ','l’':'à l’','les ':'aux '}[art]+rest;
}
function contractionItem(){
  const v=pick(nouns()),prep=Math.random()<.5?'de':'à',frame=pick(prep==='de'?DE:A);
  const answer=contraction(prep,v.front);
  const why={de:'de + le = du, de + les = des ; de la et de l’ ne changent pas.',à:'à + le = au, à + les = aux ; à la et à l’ ne changent pas.'}[prep];
  if(Math.random()<.4){
    const art=v.front.match(/^(le |la |l’|les )/)[1],rest=v.front.slice(art.length);
    const wrong=prep==='de'?[`de ${v.front}`,`des ${rest}`,`du ${rest}`,`de la ${rest}`]:[`à ${v.front}`,`au ${rest}`,`aux ${rest}`,`à la ${rest}`];
    const choices=[answer,...shuffle(wrong.filter(w=>w!==answer)).slice(0,2)];const sh=shuffle(choices);
    return {type:'mcq',lvl:1,gen:true,prompt:`${frame} ___ (${prep} + ${v.front}).`,choices:sh,answer:sh.indexOf(answer),explain:why};
  }
  return {type:'fill',lvl:1,gen:true,prompt:`${frame} ___ (${prep} + ${v.front}).`,answers:[answer],explain:why};
}
const fromFn=f=>n=>{const out=[];for(let g=0;out.length<n&&g<n*8;g++){const x=f();if(x&&!out.some(o=>o.prompt===x.prompt))out.push(x)}return out};

const GEN={
  g5:fromFn(genderItem),
  g2:fromFn(contractionItem),
  g11:conjGen(['present'],[V.irregular]),
  g12:conjGen(['passeCompose'],[V.compoundAvoir,V.compoundEtre,V.compoundPron]),
  g13:conjGen(['plusQueParfait'],[V.compoundAvoir,V.compoundEtre,V.compoundPron]),
  g14:conjGen(['futur'],[V.irregular,V.regular]),
  g18:conjGen(['conditionnel'],[V.irregular,V.regular]),
  g19:conjGen(['conditionnelPasse'],[V.compoundAvoir,V.compoundEtre,V.compoundPron]),
  g20:conjGen(['subjonctif'],[V.subj]),
  g31:n=>{const out=[];for(let g=0;out.length<n&&g<n*8;g++){const x=imperItem();if(x&&!out.some(o=>o.prompt===x.prompt))out.push(x)}return out},
};
/* The last 200 generated prompts per topic, on this device only (not synced). */
const RKEY='tef-gen-recent-v1';
function recentAll(){try{return JSON.parse(localStorage.getItem(RKEY)||'{}')||{}}catch{return {}}}
const recent=tid=>new Set(recentAll()[tid]||[]);
function remember(tid,prompts){try{const all=recentAll(),l=[...(all[tid]||[]).filter(p=>!prompts.includes(p)),...prompts];all[tid]=l.slice(-200);localStorage.setItem(RKEY,JSON.stringify(all))}catch{}}
window.TEF_GEN={
  has:tid=>!!GEN[tid]&&!!C(),
  /* n generated exercises for a topic, as session items (i = 'gen': not part of the review history).
     Questions already generated recently on this device come last, so « Encore 15 questions » brings new ones. */
  make:(tid,n)=>{
    if(!GEN[tid]||!C())return [];
    const seen=recent(tid),pool=GEN[tid](n*3),fresh=pool.filter(x=>!seen.has(x.prompt)),old=pool.filter(x=>seen.has(x.prompt));
    const out=[...fresh,...old].slice(0,n);remember(tid,out.map(x=>x.prompt));
    return out.map(x=>({tid,i:'gen',x}));
  },
  _variants:variants,
};
})();
