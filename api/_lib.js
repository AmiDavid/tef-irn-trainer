import crypto from "node:crypto";

export function json(res,status,data){res.status(status).setHeader("Content-Type","application/json; charset=utf-8");res.setHeader("Cache-Control","no-store");res.end(JSON.stringify(data))}
export async function body(req){if(req.body && typeof req.body==="object") return req.body; let s=""; for await(const c of req) s+=c; try{return JSON.parse(s||"{}")}catch{return {}}}
export async function verifyUser(req){
  const url=process.env.SUPABASE_URL, key=process.env.SUPABASE_PUBLISHABLE_KEY||process.env.SUPABASE_ANON_KEY;
  const auth=req.headers.authorization||"";
  if(!url||!key||!auth.startsWith("Bearer ")) throw Object.assign(new Error("Authentication required"),{status:401});
  const r=await fetch(url+"/auth/v1/user",{headers:{apikey:key,Authorization:auth}});
  if(!r.ok) throw Object.assign(new Error("Invalid session"),{status:401});
  return r.json();
}
export function safetyId(user){return crypto.createHash("sha256").update(String(user?.id||"anonymous")).digest("hex").slice(0,64)}
async function openaiCall({instructions,input,user,model}){
  if(!process.env.OPENAI_API_KEY) throw Object.assign(new Error("OPENAI_API_KEY is not configured"),{status:503});
  const r=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{
    Authorization:"Bearer "+process.env.OPENAI_API_KEY,
    "Content-Type":"application/json",
    "OpenAI-Safety-Identifier":safetyId(user)
  },body:JSON.stringify({model:model||process.env.OPENAI_TEXT_MODEL||"gpt-5.6-luna",instructions,input})});
  const j=await r.json();
  if(!r.ok) throw Object.assign(new Error(j?.error?.message||"OpenAI request failed"),{status:r.status});
  return j;
}
/* ---------- provider dispatch ----------
   AI_PROVIDER=anthropic|openai (default: anthropic when ANTHROPIC_API_KEY is set).
   Realtime voice and audio transcription stay on OpenAI (they need OPENAI_API_KEY). */
export function provider(){const p=(process.env.AI_PROVIDER||"").trim().toLowerCase();if(p==="openai"||p==="anthropic")return p;return process.env.ANTHROPIC_API_KEY?"anthropic":"openai"}
export function aiConfigured(){return Boolean(provider()==="anthropic"?process.env.ANTHROPIC_API_KEY:process.env.OPENAI_API_KEY)}
/* Current Claude model ids, best first; ANTHROPIC_MODEL overrides. Retired ids are never used. */
function claudeModels(model){return [...new Set([model&&/^claude-/.test(model)?model:null,process.env.ANTHROPIC_MODEL,"claude-sonnet-5-5","claude-haiku-5-5"].filter(Boolean))]}
function claudeContent(input){
  if(typeof input==="string")return [{type:"text",text:input}];
  const out=[];
  for(const msg of input||[])for(const c of (msg.content||[])){
    if(c.type==="input_text")out.push({type:"text",text:c.text});
    else if(c.type==="input_image"){const m=String(c.image_url||"").match(/^data:(image\/[a-z+]+);base64,(.+)$/);if(m)out.push({type:"image",source:{type:"base64",media_type:m[1],data:m[2]}})}
  }
  return out.length?out:[{type:"text",text:"(empty)"}];
}
async function claudeCall({instructions,input,user,model,json}){
  if(!process.env.ANTHROPIC_API_KEY) throw Object.assign(new Error("ANTHROPIC_API_KEY is not configured"),{status:503});
  let lastErr;
  for(const m of claudeModels(model)){
    let forceTool=Boolean(json);
    for(let attempt=0;attempt<2;attempt++){
      const payload={model:m,max_tokens:json?6000:2500,system:instructions,messages:[{role:"user",content:claudeContent(input)}],metadata:{user_id:safetyId(user)}};
      if(json){payload.tools=[{name:"submit_result",description:"Return the complete result as one JSON object with the keys requested in the instructions.",input_schema:{type:"object",additionalProperties:true}}];payload.tool_choice=forceTool?{type:"tool",name:"submit_result"}:{type:"auto"}}
      const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"x-api-key":String(process.env.ANTHROPIC_API_KEY).trim(),"anthropic-version":"2023-06-01","content-type":"application/json"},body:JSON.stringify(payload)});
      const j=await r.json().catch(()=>({}));
      if(r.ok){
        const tool=(j.content||[]).find(c=>c.type==="tool_use");
        if(tool)return {output_text:JSON.stringify(tool.input),model:m};
        return {output_text:(j.content||[]).filter(c=>c.type==="text").map(c=>c.text).join("\n"),model:m};
      }
      const msg=j?.error?.message||("Claude request failed ("+r.status+")");
      lastErr=Object.assign(new Error(msg),{status:r.status});
      if(forceTool&&r.status===400&&/tool_choice|tool use|forced/i.test(msg)){forceTool=false;continue} // some models reject forced tool_choice
      break;
    }
    if(!(lastErr.status===404||(lastErr.status===400&&/model/i.test(lastErr.message))||lastErr.status===529||lastErr.status>=500))throw lastErr; // only fall back on model/overload errors
  }
  throw lastErr;
}
/* Returns an object compatible with outputText(): { output_text }. */
export async function aiResponse({instructions,input,user,model,json}){
  if(provider()==="anthropic")return claudeCall({instructions,input,user,model,json});
  return openaiCall({instructions,input,user,model:model&&!/^claude-/.test(model)?model:undefined});
}
export const openaiResponse=aiResponse;

export function outputText(j){
  if(typeof j?.output_text==="string") return j.output_text;
  return (j?.output||[]).flatMap(o=>o?.content||[]).filter(c=>c?.type==="output_text").map(c=>c.text).join("\n");
}
export function parseJSON(text){try{return JSON.parse(text)}catch{const m=String(text).match(/\{[\s\S]*\}/);if(m)try{return JSON.parse(m[0])}catch{} return null}}
export async function qaJSON({user,payload,purpose}){
  if(!payload || process.env.OPENAI_QA_SECOND_PASS==="false") return payload;
  const instructions=`You are the second-pass French language QA reviewer for a TEF IRN B2 learning app. Audit the supplied JSON for French grammar, spelling, vocabulary meaning, register, internal consistency, and unjustified certainty. Preserve the exact JSON schema and the learner's original text fields. Correct only the app's analyses, corrections, explanations, examples, model answers, and labels. If handwriting/transcription is uncertain, preserve or increase uncertainty rather than inventing text. Never upgrade language to unnecessarily advanced C1/C2. Return ONLY valid JSON.`;
  const j=await aiResponse({user,json:true,model:provider()==="anthropic"?process.env.ANTHROPIC_QA_MODEL:(process.env.OPENAI_QA_MODEL||process.env.OPENAI_TEXT_MODEL),instructions,input:`Purpose: ${purpose||"French learning QA"}\nJSON to audit:\n${JSON.stringify(payload)}`});
  return parseJSON(outputText(j))||payload;
}
export async function qaText({user,text,purpose}){
  if(!text || process.env.OPENAI_QA_SECOND_PASS==="false") return text;
  const instructions=`You are the second-pass French language QA reviewer for a TEF IRN B2 tutor. Check the draft for factual French-language errors, incorrect corrections, misleading grammar claims, bad vocabulary meanings, and unnatural examples. Keep the same purpose, tone and approximate length. Do not invent rules. If unsure, state the uncertainty briefly. Return only the corrected final response, with no QA commentary.`;
  const j=await aiResponse({user,model:provider()==="anthropic"?process.env.ANTHROPIC_QA_MODEL:(process.env.OPENAI_QA_MODEL||process.env.OPENAI_TEXT_MODEL),instructions,input:`Purpose: ${purpose||"TEF tutoring"}\nDraft:\n${text}`});
  return outputText(j)||text;
}
export function cors(req,res){const allowed=(process.env.APP_ORIGIN||"").split(",").map(x=>x.trim()).filter(Boolean);const origin=req.headers.origin;if(origin && allowed.includes(origin))res.setHeader("Access-Control-Allow-Origin",origin);res.setHeader("Vary","Origin");res.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization");res.setHeader("Access-Control-Allow-Methods","GET,POST,OPTIONS")}
