import {json,cors,provider,aiConfigured} from "./_lib.js";
export default async function handler(req,res){cors(req,res);if(req.method==="OPTIONS")return res.status(204).end();json(res,200,{
  connected:Boolean(process.env.SUPABASE_URL&&aiConfigured()),
  supabaseUrl:process.env.SUPABASE_URL||"",
  supabaseKey:process.env.SUPABASE_PUBLISHABLE_KEY||process.env.SUPABASE_ANON_KEY||"",
  ai:aiConfigured(),
  provider:aiConfigured()?(provider()==="anthropic"?"Claude":"OpenAI"):"",
  voice:Boolean(process.env.OPENAI_API_KEY),
  /* Non-secret diagnostics: never returns key material. */
  diagnostics:{server:"2026-10-10b",anthropicKey:(()=>{const k=String(process.env.ANTHROPIC_API_KEY||"");return !k?"missing":/^\s|\s$/.test(k)?"has spaces":/^sk-ant-/.test(k)?"ok":"unexpected format"})(),providerSetting:process.env.AI_PROVIDER||"(auto)"}
})}
