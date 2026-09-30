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
export async function openaiResponse({instructions,input,user,model}){
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
export function outputText(j){
  if(typeof j?.output_text==="string") return j.output_text;
  return (j?.output||[]).flatMap(o=>o?.content||[]).filter(c=>c?.type==="output_text").map(c=>c.text).join("\n");
}
export function parseJSON(text){try{return JSON.parse(text)}catch{const m=String(text).match(/\{[\s\S]*\}/);if(m)try{return JSON.parse(m[0])}catch{} return null}}
export function cors(req,res){const allowed=(process.env.APP_ORIGIN||"").split(",").map(x=>x.trim()).filter(Boolean);const origin=req.headers.origin;if(origin && allowed.includes(origin))res.setHeader("Access-Control-Allow-Origin",origin);res.setHeader("Vary","Origin");res.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization");res.setHeader("Access-Control-Allow-Methods","GET,POST,OPTIONS")}
