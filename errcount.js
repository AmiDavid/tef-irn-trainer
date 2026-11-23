/*
 * Counts the errors in a « Corrige l’erreur » sentence: the number of separate places where the wrong sentence
 * differs from the corrected one (word level). « du fromage … une ferme local » → « le fromage … une ferme locale » = 2.
 * Ignores what the answer check ignores (case, commas, apostrophe and quote styles, final punctuation); accents count.
 * Works as a plain <script> (window.TEF_ERRCOUNT) and from Node (module.exports).
 */
(function(root){
  const words=s=>String(s||'').replace(/[  ]/g,' ').replace(/[’'`ʼ]/g,'’').replace(/[“”«»"]/g,' ')
    .replace(/[.!?…]+\s*$/,'').replace(/,/g,' ').replace(/\s*([;:!?])/g,' $1').toLocaleLowerCase('fr').trim().split(/\s+/).filter(Boolean);
  /* Alignment that keeps the most words in common, then the fewest separate changes. Returns the changes as
     {del:[words], ins:[words], at:position in the wrong sentence}. */
  function hunks(wrong,right){
    const a=words(wrong),b=words(right),n=a.length,m=b.length;
    const better=(x,y)=>!y||x[0]>y[0]||(x[0]===y[0]&&x[1]<y[1]);
    // F[i][j][g] = [common words, changes, next step] for a[i..], b[j..]; g = the previous step was already a change.
    const F=Array.from({length:n+1},()=>Array.from({length:m+1},()=>[null,null]));
    for(let i=n;i>=0;i--)for(let j=m;j>=0;j--)for(const g of [0,1]){
      if(i===n&&j===m){F[i][j][g]=[0,0,null];continue}
      let best=null;const step=(r,add,c,op)=>{const v=[r[0]+add,r[1]+c,op];if(better(v,best))best=v};
      if(i<n&&j<m&&a[i]===b[j])step(F[i+1][j+1][0],1,0,'=');
      if(i<n)step(F[i+1][j][1],0,g?0:1,'-');
      if(j<m)step(F[i][j+1][1],0,g?0:1,'+');
      F[i][j][g]=best;
    }
    const out=[];let i=0,j=0,g=0,cur=null;
    while(i<n||j<m){
      const op=F[i][j][g][2];
      if(op==='='){cur=null;i++;j++;g=0;continue}
      if(!cur){cur={del:[],ins:[],at:i};out.push(cur)}
      if(op==='-')cur.del.push(a[i++]);else cur.ins.push(b[j++]);g=1;
    }
    return out;
  }
  /* A word that only moves (« ne travailler pas » → « ne pas travailler », « je lui la donne » → « je la lui donne »)
     shows up as one deletion and one insertion: that is one error, not two. */
  function places(wrong,right){
    const h=hunks(wrong,right),used=new Set();let n=h.length;
    for(let x=0;x<h.length;x++)for(let y=x+1;y<h.length;y++){
      if(used.has(x)||used.has(y))continue;
      const A=h[x],B=h[y],pureDel=k=>k.del.length&&!k.ins.length,pureIns=k=>k.ins.length&&!k.del.length;
      const moved=(A.del.some(w=>B.ins.includes(w))||A.ins.some(w=>B.del.includes(w)))&&[A,B].some(k=>pureDel(k)||pureIns(k));
      const swap=(pureDel(A)&&pureIns(B)||pureIns(A)&&pureDel(B))&&B.at-(A.at+A.del.length)<=1;
      if(moved||swap){used.add(x);used.add(y);n--}
    }
    return n;
  }
  /* x.errors, when a lesson sets it, wins. Otherwise the fewest places over all accepted answers (the learner only needs to reach one of them). */
  function count(wrong,answers,given){
    if(Number.isInteger(given)&&given>0)return given; // the lesson states it (a rewrite that the diff sees as two places)
    const list=(Array.isArray(answers)?answers:[answers]).filter(x=>typeof x==='string'&&x.trim());
    return list.length?Math.min(...list.map(r=>places(wrong,r))):0;
  }
  const nb=n=>['zéro','une','deux','trois','quatre','cinq'][n]||String(n);
  /* « Cette phrase contient 2 erreurs. » — rewrites a written instruction that states another number. */
  function instruction(x){
    const n=count(x.prompt,x.answers,x.errors),phrase=n<=1?'une erreur':`${nb(n)} erreurs`;
    const base=x.instruction||'Cette phrase contient une erreur. Réécris-la correctement.';
    if(n<1)return base;
    return /\b(une|deux|trois|quatre|cinq|\d+) erreurs?\b/.test(base)?base.replace(/\b(une|deux|trois|quatre|cinq|\d+) erreurs?\b/,phrase):base;
  }
  const api={count,instruction,hunks};
  root.TEF_ERRCOUNT=api;
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
