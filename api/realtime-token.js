import {json,body,verifyUser,safetyId,cors} from "./_lib.js";
export default async function handler(req,res){cors(req,res);if(req.method==="OPTIONS")return res.status(204).end();if(req.method!=="POST")return json(res,405,{error:"POST only"});try{
 const user=await verifyUser(req), b=await body(req);
 if(!process.env.OPENAI_API_KEY) throw Object.assign(new Error("OPENAI_API_KEY is not configured"),{status:503});
 const mode=b.mode==="exam"?"exam":"tutor";
 const exam=`You are the interlocutor for a TEF IRN oral simulation. Speak only French. Scenario: ${b.prompt||"general TEF practice"}. Do not correct, coach, simplify, or suggest answers during the simulation. React naturally and create realistic objections/questions. Keep turns short so the learner speaks most of the time. When the learner explicitly says the exercise is finished, briefly acknowledge and stop; detailed feedback will be produced separately.`;
 const tutor=`You are a friendly but demanding French B2 speaking tutor. Speak mostly French, keep turns short, ask follow-ups, and gently recast important errors after the learner finishes a thought. Target TEF IRN B2.`;
 const r=await fetch("https://api.openai.com/v1/realtime/client_secrets",{method:"POST",headers:{
   Authorization:"Bearer "+process.env.OPENAI_API_KEY,"Content-Type":"application/json","OpenAI-Safety-Identifier":safetyId(user)
 },body:JSON.stringify({session:{type:"realtime",model:process.env.OPENAI_REALTIME_MODEL||"gpt-realtime-2.1",instructions:mode==="exam"?exam:tutor,audio:{input:{transcription:{model:process.env.OPENAI_LIVE_TRANSCRIBE_MODEL||"gpt-live-transcribe",languages:["fr"],delay:"low"}},output:{voice:process.env.OPENAI_VOICE||"marin"}}}})});
 const j=await r.json();if(!r.ok)throw Object.assign(new Error(j?.error?.message||"Realtime token failed"),{status:r.status});json(res,200,j);
}catch(e){json(res,e.status||500,{error:e.message})}}
