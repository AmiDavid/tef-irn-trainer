import {json,body,verifyUser,openaiResponse,outputText,parseJSON,cors} from "./_lib.js";
export default async function handler(req,res){cors(req,res);if(req.method==="OPTIONS")return res.status(204).end();if(req.method!=="POST")return json(res,405,{error:"POST only"});try{
 const user=await verifyUser(req), b=await body(req);
 const instructions=`Analyze a photographed French-class notebook page. Return ONLY valid JSON with: transcription, uncertain_segments (array), corrections (array of {original,correction,explanation,category}), vocabulary (array of {french,meaning_en,example}), grammar_concepts (array of {name,explanation}), useful_expressions (array), summary. Preserve the student's intended French when correcting handwriting; flag uncertain reading instead of inventing text. Focus on B1-B2/TEF relevance.`;
 const content=[{type:"input_text",text:`Optional user transcription: ${b.text||"(none)"}\nKnown errors: ${JSON.stringify((b.errors||[]).slice(0,20))}`}];
 if(b.image)content.push({type:"input_image",image_url:b.image});
 const j=await openaiResponse({user,instructions,input:[{role:"user",content}]}), raw=outputText(j), parsed=parseJSON(raw);
 json(res,200,parsed||{raw});
}catch(e){json(res,e.status||500,{error:e.message})}}
