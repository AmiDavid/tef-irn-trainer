import {json,cors} from "./_lib.js";
export default async function handler(req,res){cors(req,res);if(req.method==="OPTIONS")return res.status(204).end();json(res,200,{
  connected:Boolean(process.env.SUPABASE_URL&&process.env.OPENAI_API_KEY),
  supabaseUrl:process.env.SUPABASE_URL||"",
  supabaseKey:process.env.SUPABASE_PUBLISHABLE_KEY||process.env.SUPABASE_ANON_KEY||"",
  ai:Boolean(process.env.OPENAI_API_KEY),
  voice:Boolean(process.env.OPENAI_API_KEY)
})}
