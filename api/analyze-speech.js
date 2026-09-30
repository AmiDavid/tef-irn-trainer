import {json,body,verifyUser,openaiResponse,outputText,parseJSON,safetyId,cors} from "./_lib.js";
export default async function handler(req,res){cors(req,res);if(req.method==="OPTIONS")return res.status(204).end();if(req.method!=="POST")return json(res,405,{error:"POST only"});try{
 const user=await verifyUser(req), b=await body(req);if(!b.audio) return json(res,400,{error:"audio required"});
 const m=String(b.audio).match(/^data:([^;]+);base64,(.+)$/);if(!m)return json(res,400,{error:"invalid audio"});
 const bytes=Buffer.from(m[2],"base64");const fd=new FormData();fd.append("model",process.env.OPENAI_TRANSCRIBE_MODEL||"gpt-transcribe");fd.append("language","fr");fd.append("file",new Blob([bytes],{type:m[1]}),"oral.webm");
 const tr=await fetch("https://api.openai.com/v1/audio/transcriptions",{method:"POST",headers:{Authorization:"Bearer "+process.env.OPENAI_API_KEY,"OpenAI-Safety-Identifier":safetyId(user)},body:fd});const tj=await tr.json();if(!tr.ok)throw Object.assign(new Error(tj?.error?.message||"Transcription failed"),{status:tr.status});
 const transcript=tj.text||"";
 const instructions=`Assess a TEF IRN B2 oral performance from a transcript. Return ONLY valid JSON with keys estimated_cefr, b2_sufficient, task_fulfilment, fluency, interaction, grammar, vocabulary, coherence, argumentation, recurring_errors (array of {original,correction,rule,category}), b2_alternatives (array max 5), key_learnings (array max 5). Account for the fact that pronunciation cannot be perfectly judged from transcript alone.`;
 const j=await openaiResponse({user,instructions,input:`Task: ${b.prompt||""}\nTranscript:\n${transcript}\nKnown errors:\n${JSON.stringify((b.errors||[]).slice(0,25))}`});const raw=outputText(j), parsed=parseJSON(raw);
 json(res,200,{transcript,assessment:parsed||{raw}});
}catch(e){json(res,e.status||500,{error:e.message})}}
