/* Generate fresh grammar exercises for one topic with Claude, then have a second pass verify every answer key.
   Only structurally valid, verified exercises are returned. POST {topic:{id,title,short,rule[],examples[],mistakes[]}, n, level, avoid[]} */
import {json,body,verifyUser,aiResponse,outputText,parseJSON,cors} from "./_lib.js";

const TYPES=["mcq","fill","fix","transform","order"];
const norm=s=>String(s||"").replace(/[  ]/g," ").replace(/['`ʼ]/g,"’").replace(/\s+/g," ").trim().replace(/\s*[.!?…]+$/,"").toLocaleLowerCase("fr");
const fixApos=v=>typeof v==="string"?v.replace(/(\w)'(\w)/g,"$1’$2").replace(/'/g,"’"):Array.isArray(v)?v.map(fixApos):v&&typeof v==="object"?Object.fromEntries(Object.entries(v).map(([k,x])=>[k,fixApos(x)])):v;

function valid(x){
  if(!x||!TYPES.includes(x.type)||typeof x.prompt!=="string"&&x.type!=="order")return false;
  if(x.type==="mcq"){
    if(!Array.isArray(x.choices)||x.choices.length<3||x.choices.length>4)return false;
    if(new Set(x.choices.map(norm)).size!==x.choices.length)return false;
    return Number.isInteger(x.answer)&&x.answer>=0&&x.answer<x.choices.length;
  }
  if(!Array.isArray(x.answers)||!x.answers.length||!x.answers.every(a=>typeof a==="string"&&a.trim()))return false;
  if(x.type==="fill")return (x.prompt.match(/_{3,}/g)||[]).length===1;
  if(x.type==="fix")return x.answers.every(a=>norm(a)!==norm(x.prompt));
  if(x.type==="transform")return typeof x.instruction==="string"&&x.instruction.trim().length>0;
  if(x.type==="order"){
    if(!Array.isArray(x.words)||x.words.length<4||x.words.length>9)return false;
    const sorted=a=>a.map(w=>norm(w)).sort().join("|");
    return x.answers.every(a=>sorted(norm(a).split(" "))===sorted(x.words));
  }
  return false;
}

const SPEC=`Exercise formats (JSON objects):
- {"type":"mcq","lvl":1|2|3,"prompt":"Sentence with ___ .","choices":["a","b","c"],"answer":<index>,"explain":"why"} — 3–4 unique choices, exactly one correct.
- {"type":"fill","lvl":..,"prompt":"Sentence with exactly one ___ gap.","answers":["every correct variant"],"hint":"e.g. venir, futur simple","explain":"why"} — the learner types only the gap; the hint is shown in brackets right after the gap, so use it to name the base word and form whenever another word could fit.
- {"type":"fix","lvl":..,"prompt":"Sentence with exactly ONE typical learner error on this topic.","answers":["Full corrected sentence."],"explain":"what was wrong"}
- {"type":"transform","lvl":..,"instruction":"Consigne en français (vous)","prompt":"Source sentence.","answers":["Target sentence."],"explain":"why"}
- {"type":"order","lvl":..,"words":["shuffled","tokens"],"answers":["The sentence."],"explain":"why"} — tokens = the answer split on spaces, final punctuation removed; 4–9 tokens; no commas or question marks.
Rules: unambiguous (if another tense/form could fit, add a hint or constrain the instruction; list ALL correct variants);
the answer must be decided by the topic's rule; natural, impeccable French; adult everyday life in France (administration,
logement, travail, santé, transports, école, banque, loisirs, médias, environnement, citoyenneté); vary subjects and contexts;
typographic apostrophe ’; explanations in French, one short sentence.`;

export default async function handler(req,res){cors(req,res);if(req.method==="OPTIONS")return res.status(204).end();if(req.method!=="POST")return json(res,405,{error:"POST only"});try{
  const user=await verifyUser(req),b=await body(req),t=b.topic||{};
  if(!t.title)return json(res,400,{error:"topic missing"});
  const n=Math.max(4,Math.min(12,parseInt(b.n,10)||10));
  const level=[1,2,3].includes(b.level)?`all at level ${b.level}`:"mixed levels (about 40% level 1, 40% level 2, 20% level 3)";
  const topicText=`Topic: ${t.title} — ${t.short||""}\nRule:\n${(t.rule||[]).slice(0,8).map(r=>"- "+r).join("\n")}\nTypical mistakes:\n${(t.mistakes||[]).slice(0,4).map(m=>"- "+m).join("\n")}`;
  const avoid=(b.avoid||[]).slice(0,80).map(s=>String(s).slice(0,160));
  const instructions=`You write French grammar exercises for an adult learner preparing the TEF IRN (target B2). ${SPEC}
Write exactly ${n} NEW exercises on the topic below, ${level}, using at least 4 different types. Level 1 = basic application, 2 = intermediate with a typical trap, 3 = B2 nuance.
Do not reuse any sentence from the avoid list. Return ONLY JSON: {"exercises":[...]}`;
  const draft=parseJSON(outputText(await aiResponse({user,json:true,instructions,input:`${topicText}\n\nAvoid these sentences:\n${avoid.join("\n")}`})));
  let items=(draft?.exercises||[]).map(fixApos).filter(valid);
  if(!items.length)return json(res,502,{error:"Aucun exercice valide généré. Réessaie."});
  // Second pass: an independent strict check of every answer key.
  const verifyInstr=`You are a strict French teacher checking exercises before a learner sees them. For EACH exercise decide:
"ok" if the marked answer is correct, no other choice/answer is also correct (or all correct variants are listed), the French is natural and it tests the topic;
"fix" if a small correction makes it right (return the corrected exercise in the same format);
"drop" otherwise. ${SPEC}
Return ONLY JSON: {"results":[{"index":0,"verdict":"ok|fix|drop","exercise":{...only when fix...}}]}`;
  const check=parseJSON(outputText(await aiResponse({user,json:true,instructions:verifyInstr,input:`${topicText}\n\nExercises:\n${JSON.stringify(items)}`})));
  const results=Array.isArray(check?.results)?check.results:null;
  if(!results)return json(res,502,{error:"Vérification indisponible. Réessaie."});
  const verified=[];
  for(const r of results){
    const i=Number(r?.index);if(!Number.isInteger(i)||!items[i])continue;
    if(r.verdict==="ok")verified.push(items[i]);
    else if(r.verdict==="fix"){const f=fixApos(r.exercise);if(valid(f))verified.push({...f,lvl:f.lvl||items[i].lvl})}
  }
  const avoidN=new Set(avoid.map(norm));
  const out=verified.filter(x=>!avoidN.has(norm(x.prompt||x.answers?.[0]))).map(x=>({...x,lvl:[1,2,3].includes(x.lvl)?x.lvl:2,ai:true}));
  json(res,200,{exercises:out,dropped:items.length-out.length});
}catch(e){json(res,e.status||500,{error:e.message})}}
