/* g40 — Faire + infinitif : faire réparer, se faire aider, laisser entrer (card, lesson, 12 practice, 28 bank questions) */
(()=>{const B=window.TEF_BANK=window.TEF_BANK||{};
(B.grammar=B.grammar||[]).push({
  id:"g40", section:"La phrase complexe", order:73, title:"Faire + infinitif : faire réparer, se faire aider, laisser entrer", status:"untested",
  short:"Faire + infinitif : quelqu’un d’autre fait l’action ; se faire + infinitif : le sujet la subit ou en bénéficie ; laisser + infinitif : permettre.",
  details:"Faire + infinitif indique qu’on fait faire l’action par quelqu’un d’autre : Je fais réparer ma voiture (le garagiste la répare). Il peut aussi signifier provoquer : Ce film m’a fait pleurer. La personne qui agit est introduite par par ou à : Je fais réparer la voiture par le garagiste. Les pronoms se placent devant faire : Je la fais réparer. Se faire + infinitif : le sujet subit ou bénéficie de l’action (Il s’est fait voler son vélo ; je me suis fait couper les cheveux). Au passé composé, fait reste invariable : Je les ai fait venir. Laisser + infinitif = permettre, ne pas empêcher : Laissez-moi passer.",
  examples:["Je fais installer la fibre la semaine prochaine.","Elle s’est fait opérer du genou.","Le professeur nous a fait lire un article.","Laissez les passagers descendre."],
  mistakes:[
    {wrong:"Je fais réparer elle.", right:"Je la fais réparer.", why:"Le pronom se place devant faire."},
    {wrong:"Je suis fait couper les cheveux.", right:"Je me suis fait couper les cheveux.", why:"Se faire + infinitif : forme pronominale (je me suis fait…)."},
    {wrong:"Je les ai faits venir.", right:"Je les ai fait venir.", why:"Fait suivi d’un infinitif reste invariable."},
    {wrong:"Il a fait réparé sa machine à laver.", right:"Il a fait réparer sa machine à laver.", why:"Faire + infinitif : réparer, pas le participe."}
  ],
  drill:{prompt:"Complète : Ma voiture ? Je ___ réviser chaque année.", choices:["la fais","fais la","la fait","fais-la"], answer:0}
});
B.grammarPlus=Object.assign(B.grammarPlus||{},{g40:{
  intro:"Faire + infinitif est indispensable dans la vie quotidienne (faire réparer, faire installer, faire venir un plombier) et dans les faits divers (« il s’est fait voler son téléphone »). À l’écrit A, il sert à prendre des nouvelles (« J’ai appris que tu t’étais fait opérer… ») ; à l’écrit B, à se présenter (« Je souhaite faire valoir mon expérience »).",
  rule:[
    "Faire + infinitif : le sujet décide, quelqu’un d’autre fait l’action : Je fais réparer ma voiture (un garagiste la répare) ; ils font construire une maison. Il peut aussi signifier provoquer : Ce film m’a fait pleurer ; faites cuire les pâtes.",
    "La personne qui fait l’action est introduite par par ou à : Je fais vérifier les comptes par un expert ; je fais lire le texte aux élèves. Sans autre complément, elle suit directement l’infinitif : Je fais venir le plombier (jamais « je fais le plombier venir »).",
    "Les pronoms se placent devant faire, pas devant l’infinitif : Je le fais venir ; je la fais réparer. La personne qui agit devient le / la / les si l’infinitif n’a pas de COD (je le fais venir), lui / leur s’il en a un (je leur fais lire le texte). À l’impératif affirmatif, les pronoms suivent faire : Faites-le entrer !",
    "Aux temps composés, fait suivi d’un infinitif reste invariable : Ma voiture, je l’ai fait réparer ; les techniciens que j’ai fait venir.",
    "Se faire + infinitif : le sujet subit l’action (Il s’est fait voler son portefeuille ; elle s’est fait renverser par un vélo) ou en bénéficie (Je me suis fait couper les cheveux ; il s’est fait rembourser).",
    "Laisser + infinitif = permettre, ne pas empêcher : Laissez-moi passer ; il laisse ses enfants jouer dehors (ou : il laisse jouer ses enfants ; avec faire, le nom suit toujours l’infinitif). Le pronom se place aussi devant laisser : Je les laisse sortir.",
    "Expressions fréquentes : faire savoir (informer), faire valoir (mettre en avant), faire attendre quelqu’un, faire remarquer, faire suivre son courrier, se faire comprendre, se faire rembourser."
  ],
  table:{head:["Construction","Sens","Exemple"],rows:[
    ["faire + infinitif","quelqu’un d’autre fait l’action","Je fais repeindre la cuisine."],
    ["faire + infinitif","provoquer","Ce film m’a fait rire."],
    ["faire + infinitif + par / à","qui fait l’action","Je la fais vérifier par un expert."],
    ["pronom + faire + infinitif","le pronom va devant faire","Je le fais venir demain."],
    ["temps composés : fait + infinitif","fait reste invariable","Je les ai fait venir ; elle s’est fait opérer."],
    ["se faire + infinitif","le sujet subit ou bénéficie","Il s’est fait voler son vélo."],
    ["laisser + infinitif","permettre","Laissez-le parler."]
  ]},
  tips:[
    "Anglais : I’m having my car repaired / I got my hair cut → je fais réparer ma voiture / je me suis fait couper les cheveux.",
    "Faire faire existe : je fais faire des travaux (une entreprise les réalise).",
    "Fait + infinitif reste invariable, même avec un COD féminin ou pluriel placé avant : la lettre que j’ai fait traduire. Laissé + infinitif peut aussi rester invariable (orthographe de 1990) : je les ai laissé partir (l’accord laissés reste admis).",
    "« Make » + adjectif ne se traduit pas par faire : Ce travail me rend heureux (et non « me fait heureux »).",
    "À l’écrit A, pour prendre des nouvelles : « J’ai appris que tu t’étais fait opérer », « Fais-moi savoir comment tu vas »."
  ],
  examples:[
    {fr:"Nous faisons installer une nouvelle chaudière.", en:"We’re having a new boiler installed."},
    {fr:"Je dois faire traduire mon acte de naissance.", en:"I have to have my birth certificate translated."},
    {fr:"Le professeur nous a fait écrire une lettre de réclamation.", en:"The teacher had us write a letter of complaint."},
    {fr:"Ma voisine s’est fait voler son sac dans le métro.", en:"My neighbour had her bag stolen on the metro.", note:"Se faire + infinitif : le sujet subit."},
    {fr:"Il s’est fait rembourser son billet.", en:"He got his ticket refunded.", note:"Le sujet bénéficie de l’action."},
    {fr:"Le plombier ? Je l’ai fait venir hier.", en:"The plumber? I had him come yesterday.", note:"Pronom devant faire ; fait invariable."},
    {fr:"Faites-moi savoir si vous êtes disponible.", en:"Let me know if you are available."},
    {fr:"Laissez les enfants jouer, ils ne dérangent personne.", en:"Let the children play, they’re not bothering anyone."}
  ],
  summary:[
    "Faire + infinitif : quelqu’un d’autre fait l’action (par / à + la personne).",
    "Pronom devant faire : je la fais réparer.",
    "Se faire + infinitif : subir ou bénéficier (il s’est fait voler).",
    "Fait + infinitif : invariable ; laisser + infinitif = permettre."
  ],
  practice:[
    {type:"mcq", lvl:1, prompt:"Je ___ couper les cheveux tous les mois.", choices:["me fais","fais","me fait"], answer:0, explain:"Se faire + infinitif : je me fais couper les cheveux."},
    {type:"mcq", lvl:1, prompt:"Mon ordinateur est en panne : je vais le faire ___ .", choices:["réparer","réparé","répare"], answer:0, explain:"Faire + infinitif."},
    {type:"fill", lvl:1, prompt:"Ils font ___ une maison à la campagne.", answers:["construire"], hint:"construire", explain:"Faire + infinitif : une entreprise construit la maison."},
    {type:"fill", lvl:1, prompt:"Ce document ? Je ___ fais traduire.", answers:["le"], hint:"pronom : le document", explain:"Le pronom se place devant faire."},
    {type:"order", lvl:1, words:["les","Je","laisse","sortir"], answers:["Je les laisse sortir."], explain:"Pronom devant laisser + infinitif."},
    {type:"fix", lvl:2, prompt:"J’ai fait entrer eux dans le salon.", answers:["Je les ai fait entrer dans le salon."], explain:"Le pronom COD se place devant l’auxiliaire ; fait reste invariable."},
    {type:"fix", lvl:2, prompt:"La facture que j’ai faite corriger est arrivée.", answers:["La facture que j’ai fait corriger est arrivée."], explain:"Fait suivi d’un infinitif reste invariable."},
    {type:"transform", lvl:2, instruction:"Reformulez avec « faire » + infinitif : vous ne faites pas l’action vous-même.", prompt:"Un électricien vérifie mon installation.", answers:["Je fais vérifier mon installation par un électricien.","Je fais vérifier mon installation à un électricien."], explain:"Faire + infinitif + par (ou à) + la personne qui agit."},
    {type:"transform", lvl:2, instruction:"Reformulez avec « se faire » + infinitif.", prompt:"On a volé le téléphone de Paul.", answers:["Paul s’est fait voler son téléphone."], explain:"Se faire + infinitif : le sujet subit l’action."},
    {type:"order", lvl:2, words:["fait","Il","venir","a","plombier","le"], answers:["Il a fait venir le plombier."], explain:"Faire venir quelqu’un."},
    {type:"mcq", lvl:3, prompt:"Les ouvriers que nous avons ___ venir sont arrivés.", choices:["fait","faits","faites"], answer:0, explain:"Fait suivi d’un infinitif : invariable."},
    {type:"fill", lvl:3, prompt:"Faites-___ savoir quand vous serez disponible.", answers:["moi"], hint:"me", explain:"Impératif affirmatif : le pronom suit faire et me devient moi : faites-moi savoir."}
  ]
}});
B.grammarMore=Object.assign(B.grammarMore||{},{g40:[
  {type:"mcq", lvl:1, prompt:"Je fais ___ ma voiture au garage.", choices:["laver","lavé","lave"], answer:0, explain:"Faire + infinitif."},
  {type:"mcq", lvl:1, prompt:"Elle ___ opérer la semaine dernière.", choices:["s’est fait","a fait","s’est faite"], answer:0, explain:"Se faire + infinitif ; fait reste invariable."},
  {type:"mcq", lvl:1, prompt:"Le chien ? Je ___ sortir le matin.", choices:["le fais","fais le","le fait"], answer:0, explain:"Le pronom se place devant faire."},
  {type:"mcq", lvl:1, prompt:"Laissez-___ parler, s’il vous plaît.", choices:["moi","me","je"], answer:0, explain:"Impératif affirmatif : laissez-moi."},
  {type:"fill", lvl:1, prompt:"Nous avons fait ___ un plombier.", answers:["venir"], hint:"venir", explain:"Faire venir quelqu’un."},
  {type:"fill", lvl:1, prompt:"Il s’est fait ___ son portefeuille.", answers:["voler"], hint:"voler", explain:"Se faire + infinitif : le sujet subit l’action."},
  {type:"fill", lvl:1, prompt:"Je ___ fais réviser chaque année.", answers:["la"], hint:"pronom : la voiture", explain:"Le pronom se place devant faire."},
  {type:"fix", lvl:1, prompt:"Je fais réparé mon vélo.", answers:["Je fais réparer mon vélo."], explain:"Faire + infinitif (réparer)."},
  {type:"fix", lvl:1, prompt:"Je vais faire le venir demain.", answers:["Je vais le faire venir demain."], explain:"Le pronom se place devant faire."},
  {type:"transform", lvl:1, instruction:"Remplacez « ma machine à laver » par un pronom.", prompt:"Je fais réparer ma machine à laver.", answers:["Je la fais réparer."], explain:"Le pronom se place devant faire."},
  {type:"order", lvl:1, words:["les","Laisse","dormir","enfants"], answers:["Laisse les enfants dormir.","Laisse dormir les enfants."], explain:"Laisser + infinitif = permettre."},
  {type:"mcq", lvl:2, prompt:"Hier, je ___ rembourser par la compagnie.", choices:["me suis fait","me suis faite","ai fait"], answer:0, explain:"Se faire + infinitif (bénéficier) ; fait reste invariable."},
  {type:"mcq", lvl:2, prompt:"La maison qu’ils ont ___ construire est magnifique.", choices:["fait","faite","faites"], answer:0, explain:"Fait suivi d’un infinitif : invariable."},
  {type:"mcq", lvl:2, prompt:"Il nous a fait ___ longtemps.", choices:["attendre","attendu","attendons"], answer:0, explain:"Faire attendre quelqu’un."},
  {type:"fill", lvl:2, prompt:"Le directeur m’a fait ___ par sa secrétaire.", answers:["appeler"], hint:"appeler", explain:"Faire + infinitif + par + la personne qui agit."},
  {type:"fill", lvl:2, prompt:"Ne ___ laissez pas entrer sans badge.", answers:["les"], hint:"pronom : les visiteurs", explain:"À la forme négative, le pronom se place devant laisser."},
  {type:"fill", lvl:2, prompt:"Ma sœur s’est fait ___ par une voiture.", answers:["renverser"], hint:"renverser", explain:"Se faire + infinitif : le sujet subit l’action."},
  {type:"fix", lvl:2, prompt:"Les documents que j’ai faits traduire sont prêts.", answers:["Les documents que j’ai fait traduire sont prêts."], explain:"Fait suivi d’un infinitif : invariable."},
  {type:"fix", lvl:2, prompt:"Il s’est fait volé sa voiture.", answers:["Il s’est fait voler sa voiture."], explain:"Se faire + infinitif (voler)."},
  {type:"transform", lvl:2, instruction:"Reformulez avec « faire » : c’est le professeur qui décide.", prompt:"Les élèves lisent un roman à la demande du professeur.", answers:["Le professeur fait lire un roman aux élèves.","Le professeur fait lire un roman par les élèves."], explain:"Faire + infinitif + à / par + la personne qui agit."},
  {type:"transform", lvl:2, instruction:"Mettez la phrase au passé composé.", prompt:"Je les fais venir.", answers:["Je les ai fait venir."], explain:"Fait suivi d’un infinitif reste invariable."},
  {type:"order", lvl:2, words:["me","fait","Je","suis","cheveux","couper","les"], answers:["Je me suis fait couper les cheveux."], explain:"Se faire + infinitif (bénéficier)."},
  {type:"mcq", lvl:3, prompt:"___-le entrer, je vous prie.", choices:["Faites","Faites-vous","Fais-vous"], answer:0, explain:"Impératif affirmatif : faites-le entrer."},
  {type:"fill", lvl:3, prompt:"Je vous ferai ___ ma réponse avant vendredi.", answers:["savoir"], hint:"savoir", explain:"Faire savoir = informer."},
  {type:"fill", lvl:3, prompt:"Elle s’est ___ comprendre sans difficulté.", answers:["fait"], explain:"Se faire comprendre ; fait suivi d’un infinitif reste invariable."},
  {type:"fix", lvl:3, prompt:"Il laisse ses enfants de jouer dehors.", answers:["Il laisse ses enfants jouer dehors.","Il laisse jouer ses enfants dehors."], explain:"Laisser + infinitif, sans préposition."},
  {type:"transform", lvl:3, instruction:"Reformulez avec « se faire » + infinitif.", prompt:"Un chien a mordu le facteur.", answers:["Le facteur s’est fait mordre par un chien."], explain:"Se faire + infinitif + par : le sujet subit l’action."},
  {type:"order", lvl:3, words:["savoir","Je","vous","ferai","le"], answers:["Je vous le ferai savoir."], explain:"Pronoms devant faire : vous + le."}
]});
})();
