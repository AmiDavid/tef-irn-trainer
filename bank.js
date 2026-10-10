/* Merges the curated content banks (content/*.js) into TEF_DATA. Order matters:
   data.js → content/*.js → bank.js → app.js. */
(()=>{
'use strict';
const D=window.TEF_DATA,B=window.TEF_BANK||{};
for(const k of ['reading','listening','vocab','grammar','writingPrompts','speakingPrompts']){
  D[k]=D[k]||[];
  const ids=new Set(D[k].map(x=>x.id));
  for(const x of B[k]||[])if(!ids.has(x.id)){D[k].push(x);ids.add(x.id)}
}
D.grammar.sort((a,b)=>(a.order??999)-(b.order??999));
})();
