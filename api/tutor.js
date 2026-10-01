import {json,body,verifyUser,openaiResponse,outputText,qaText,cors} from "./_lib.js";
const RULES=`You are the personal TEF IRN B2 coach for one adult learner. Be concise, practical and encouraging without empty praise. Exercises should usually be in French; explanations may be in English when that helps. Use the learner profile and error log provided. Correct recurring mistakes precisely and force reuse. Never pretend a practice estimate is an official TEF score. For exam simulations, do not help until the task is complete. Prefer reproducible B2 French over C1/C2 sophistication.`;
export default async function handler(req,res){cors(req,res);if(req.method==="OPTIONS")return res.status(204).end();if(req.method!=="POST")return json(res,405,{error:"POST only"});try{
 const user=await verifyUser(req), b=await body(req);
 const context={profile:b.profile||{},errors:(b.errors||[]).slice(0,30),vocab:(b.vocab||[]).slice(0,80),state:b.state||{}};
 const j=await openaiResponse({user,instructions:RULES,input:`Learner context:\n${JSON.stringify(context)}\n\nLearner message:\n${String(b.message||"")}`});
 const draft=outputText(j);
 const reply=await qaText({user,text:draft,purpose:"Personal TEF B2 tutoring"});
 json(res,200,{reply});
}catch(e){json(res,e.status||500,{error:e.message})}}
