import {json,body,verifyUser,openaiResponse,outputText,parseJSON,cors} from "./_lib.js";
export default async function handler(req,res){cors(req,res);if(req.method==="OPTIONS")return res.status(204).end();if(req.method!=="POST")return json(res,405,{error:"POST only"});try{
 const user=await verifyUser(req), b=await body(req);
 const instructions=`Assess French writing for TEF IRN with a B2 target. Return ONLY valid JSON with keys: estimated_cefr, b2_sufficient (boolean), task_fulfilment, organisation, grammar, vocabulary, spelling, register, major_errors (array of {original,correction,rule,category}), corrected_version, b2_model, key_learnings (array max 5). Be strict but useful. The B2 model must remain realistically reproducible, not C1/C2.`;
 const input=`Task: ${b.task||""}\nConstraints: ${JSON.stringify(b.constraints||{})}\nLearner text:\n${b.text||""}\nKnown recurring errors:\n${JSON.stringify((b.errors||[]).slice(0,25))}`;
 const j=await openaiResponse({user,instructions,input}), raw=outputText(j), parsed=parseJSON(raw);
 json(res,200,parsed||{raw});
}catch(e){json(res,e.status||500,{error:e.message})}}
