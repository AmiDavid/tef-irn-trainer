/* Translate one French word (or a short selection) as it is used in its sentence.
   POST {text, context, langs:["he", …]} → {text, lemma, grammar, en, other:{he:"…"}, note}
   Small and fast: one call to the quickest Claude model; only signed-in, allowed accounts (verifyUser). */
import {json,body,verifyUser,aiResponse,outputText,parseJSON,cors} from "./_lib.js";

const LANGS={he:"Hebrew",ar:"Arabic",es:"Spanish",de:"German",it:"Italian",pt:"Portuguese",ru:"Russian",uk:"Ukrainian",fa:"Persian",zh:"Chinese"};
const clip=(s,n)=>String(s??"").replace(/\s+/g," ").trim().slice(0,n);

export default async function handler(req,res){cors(req,res);if(req.method==="OPTIONS")return res.status(204).end();if(req.method!=="POST")return json(res,405,{error:"POST only"});try{
  const user=await verifyUser(req),b=await body(req);
  const text=clip(b.text,240),context=clip(b.context,500);
  if(!text)return json(res,400,{error:"text missing"});
  const langs=[...new Set((Array.isArray(b.langs)?b.langs:[]).filter(l=>LANGS[l]))].slice(0,2);
  const phrase=text.split(" ").length>3;
  const instructions=`You are a concise French dictionary for an adult English-speaking learner (level B1 to B2) who lives in France.
You get a French word, expression or short passage, and the sentence it appears in. Give the meaning it has IN THAT SENTENCE.
Return ONLY JSON with these keys:
- "lemma": the dictionary form: infinitive for a verb ("prennent" → "prendre"); masculine singular for an adjective; for a noun, the singular with its article showing the gender ("la décision"; before a vowel add the gender: "l’hôpital (m.)"); for an elided word, its full form ("l’" → "le / la", "qu’" → "que"); for an idiom, the idiom; for a longer passage, "".
- "grammar": a very short French label, max 40 characters ("nom féminin", "verbe prendre, présent (ils)", "adjectif, féminin pluriel", "préposition", "expression"; for a passage: "phrase").
- "en": ${phrase?"a natural English translation of the passage, max 220 characters":"the English meaning in this sentence, max 60 characters; a second common meaning may follow after \" ; \" if useful"}.
- "other": {${langs.map(l=>`"${l}": the ${LANGS[l]} ${phrase?"translation":"meaning in this sentence"}`).join(", ")}}${langs.length?"":" (empty object)"}.
- "note": optional, max 90 characters, in English: only if something is easy to miss here (an idiom, a false friend, a contraction like "du = de + le", a meaning that differs from the usual one); otherwise "".
Use the typographic apostrophe ’ in French. No extra keys, no explanations outside the JSON.`;
  const input=`French: ${text}\nSentence: ${context||text}`;
  const out=parseJSON(outputText(await aiResponse({user,json:true,model:"claude-haiku-5-5",instructions,input})))||{};
  const max=phrase?260:100;
  const other={};for(const l of langs){const v=clip(out.other?.[l],max);if(v)other[l]=v}
  const en=clip(out.en,max);
  if(!en)return json(res,502,{error:"Pas de traduction. Réessaie."});
  return json(res,200,{text,lemma:clip(out.lemma,60),grammar:clip(out.grammar,50),en,other,note:clip(out.note,120)});
}catch(e){return json(res,e.status||500,{error:e.message||"Erreur"})}}
