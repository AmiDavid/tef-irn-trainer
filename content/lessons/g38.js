/* g38 — Tout, chaque, chacun et les indéfinis (card, lesson, 12 practice, 28 bank questions) */
(()=>{const B=window.TEF_BANK=window.TEF_BANK||{};
(B.grammar=B.grammar||[]).push({
  id:"g38", section:"Les déterminants et accords", order:31, title:"Tout, chaque, chacun, quelqu’un… : les indéfinis", status:"untested",
  short:"Tout / toute / tous / toutes s’accordent ; chaque + nom singulier, chacun seul ; quelque chose de + adjectif ; n’importe qui / quoi / où.",
  details:"Tout s’accorde avec le nom : tout le dossier, toute la journée, tous les jours, toutes les semaines. Chaque (déterminant) est toujours suivi d’un nom singulier : chaque jour ; chacun, chacune (pronom) s’emploient seuls : chacun a reçu un badge. Quelqu’un, quelque chose, quelque part s’opposent à personne, rien, nulle part ; avec un adjectif : quelque chose d’intéressant, rien de grave. N’importe qui / quoi / où / quand = any… : Appelez-moi n’importe quand.",
  examples:["Je travaille tous les jours sauf le dimanche.","Chaque candidat doit présenter une pièce d’identité.","Il y a quelqu’un à l’accueil ?","Je n’ai rien remarqué de bizarre."],
  mistakes:[
    {wrong:"Je vais au marché tout les samedis.", right:"Je vais au marché tous les samedis.", why:"Tout s’accorde : tous les samedis (masculin pluriel)."},
    {wrong:"Chaque élèves a un casier.", right:"Chaque élève a un casier.", why:"Chaque + nom singulier, verbe au singulier."},
    {wrong:"Chaque a reçu une convocation.", right:"Chacun a reçu une convocation.", why:"Sans nom, on emploie le pronom chacun."},
    {wrong:"J’ai vu quelque chose intéressant.", right:"J’ai vu quelque chose d’intéressant.", why:"Quelque chose, rien, quelqu’un + de + adjectif."}
  ],
  drill:{prompt:"Complète : J’ai attendu ___ la matinée.", choices:["toute","tout","tous","toutes"], answer:0}
});
B.grammarPlus=Object.assign(B.grammarPlus||{},{g38:{
  intro:"Les indéfinis sont dans toutes les phrases sur les habitudes et les règles (« tous les jours », « chaque mois », « chacun doit… ») et dans les textes administratifs (« toute demande incomplète sera refusée »). L’accord de tout et la différence chaque / chacun sont des erreurs classiques à l’écrit.",
  rule:[
    "Tout + déterminant + nom s’accorde : tout le monde, tout le temps ; toute la journée ; tous les jours ; toutes les semaines. Tous / toutes les + durée = la fréquence : tous les deux jours, toutes les heures.",
    "Tout pronom : tout (= toutes les choses : Tout est prêt), tous (le s se prononce : Ils sont tous venus), toutes (Elles sont toutes là). Tout adverbe (= très, complètement) reste invariable (tout petit, tout heureux, tout entière), sauf devant un adjectif féminin commençant par une consonne ou un h aspiré : toute contente, toutes petites, toute honteuse.",
    "Tout / toute + nom singulier sans article = chaque, n’importe quel (écrit administratif) : Tout retard sera signalé ; toute demande incomplète sera refusée.",
    "Chaque + nom singulier (déterminant) : chaque jour, chaque candidat ; chacun, chacune (pronoms, sans nom) : Chacun a sa place ; chacune de ses sœurs. Chaque… ou chacun sujet : verbe au singulier (Chacun de nous a voté) ; mais Les enfants ont chacun un cahier (le sujet est les enfants).",
    "Quelqu’un / personne, quelque chose / rien, quelque part / nulle part (personne, rien, nulle part avec ne : Je n’ai vu personne ; rien n’a changé) ; avec un adjectif : + de + adjectif au masculin : quelque chose d’important, rien de nouveau, quelqu’un de sympathique.",
    "Quelques (= a few) + nom pluriel ; plusieurs (= several), invariable ; certain(e)s (= some) ; d’autres (= other, others) ; aucun(e) + nom singulier (= no, not any, avec ne) : Quelques personnes sont venues ; certains pensent que… ; je n’ai aucune idée.",
    "N’importe qui / quoi / où / quand / comment / lequel (= any…, peu importe) et n’importe quel(le)(s) + nom : N’importe qui peut s’inscrire ; ne dis pas n’importe quoi ; appelez-moi n’importe quand ; venez à n’importe quelle heure."
  ],
  table:{head:["Forme","Emploi","Exemple"],rows:[
    ["tout / toute","+ le, la, ce, mon… (singulier)","toute la journée, tout le temps"],
    ["tous / toutes","+ les, ces, mes… (pluriel) ; pronom","tous les jours ; ils sont tous là"],
    ["chaque","+ nom singulier","chaque semaine"],
    ["chacun / chacune","pronom, sans nom","Chacun paie sa part."],
    ["quelqu’un / personne","une personne / aucune","Quelqu’un a appelé ? Personne."],
    ["quelque chose / rien","une chose / aucune","Tu veux quelque chose ? Rien."],
    ["quelques / plusieurs","+ nom pluriel","quelques jours, plusieurs fois"],
    ["aucun / aucune","ne… aucun + nom singulier","Je n’ai aucune idée."],
    ["n’importe qui / quoi / où / quel…","any…","Ne dis pas n’importe quoi ; à n’importe quelle heure."]
  ]},
  tips:[
    "Prononciation : tous pronom se prononce avec le s (« Ils sont tous venus ») ; tous déterminant, sans le s (« tous les jours »).",
    "Tout le monde = everybody, avec un verbe au singulier : Tout le monde est là.",
    "Quelques ≠ quel que : quelques jours (a few days) ; quel que soit le prix (whatever the price, écrit soutenu). Mais quelque temps (= some time) reste au singulier.",
    "Chacun s’accorde en genre : chacune de mes amies, chacun des candidats.",
    "Tous les deux / toutes les deux = both : Nous y sommes allés tous les deux."
  ],
  examples:[
    {fr:"Le marché a lieu tous les mercredis et tous les samedis.", en:"The market takes place every Wednesday and Saturday."},
    {fr:"J’ai passé toute la soirée à remplir le dossier.", en:"I spent the whole evening filling in the application."},
    {fr:"Prenez un comprimé toutes les huit heures.", en:"Take one tablet every eight hours.", note:"Fréquence : tous / toutes les + durée."},
    {fr:"Chaque participant recevra une attestation.", en:"Each participant will receive a certificate."},
    {fr:"Les enfants ont chacun un cahier.", en:"The children each have a notebook."},
    {fr:"Il y a quelque chose de bizarre dans cette lettre.", en:"There’s something strange about this letter."},
    {fr:"Toute réclamation doit être faite par écrit.", en:"Any complaint must be made in writing.", note:"Toute + nom sans article = chaque (écrit administratif)."},
    {fr:"Vous pouvez m’appeler n’importe quand.", en:"You can call me any time."}
  ],
  summary:[
    "Tout le / toute la / tous les / toutes les : accord avec le nom.",
    "Chaque + nom singulier ; chacun, chacune sans nom.",
    "Quelque chose / rien / quelqu’un + de + adjectif.",
    "N’importe qui / quoi / où / quand = any…"
  ],
  practice:[
    {type:"mcq", lvl:1, prompt:"Je fais du sport ___ les matins.", choices:["tous","tout","toutes"], answer:0, explain:"Les matins : masculin pluriel → tous les."},
    {type:"mcq", lvl:1, prompt:"___ client reçoit un ticket.", choices:["Chaque","Chacun","Tous"], answer:0, explain:"Devant un nom singulier : chaque."},
    {type:"fill", lvl:1, prompt:"Elle a travaillé ___ la nuit.", answers:["toute"], hint:"tout", explain:"La nuit : féminin singulier → toute la nuit."},
    {type:"fill", lvl:1, prompt:"Il y a ___ à la porte.", answers:["quelqu’un"], hint:"une personne", explain:"Une personne indéterminée : quelqu’un."},
    {type:"fix", lvl:1, prompt:"Toutes les étudiants sont venus.", answers:["Tous les étudiants sont venus."], explain:"Les étudiants : masculin pluriel → tous les."},
    {type:"order", lvl:1, words:["le","Tout","monde","là","est"], answers:["Tout le monde est là."], explain:"Tout le monde + verbe au singulier."},
    {type:"mcq", lvl:2, prompt:"Les invités sont ___ arrivés en retard.", choices:["tous","tout","toute"], answer:0, explain:"Pronom tous (le s se prononce) : ils sont tous arrivés."},
    {type:"fill", lvl:2, prompt:"Je n’ai ___ entendu.", answers:["rien"], hint:"aucune chose", explain:"Aucune chose : ne… rien."},
    {type:"fix", lvl:2, prompt:"Il n’y a rien d’intéressante à la télé.", answers:["Il n’y a rien d’intéressant à la télé."], explain:"Rien + de + adjectif au masculin."},
    {type:"transform", lvl:2, instruction:"Remplacez « chaque personne » par un pronom.", prompt:"Chaque personne apporte un plat.", answers:["Chacun apporte un plat.","Chacune apporte un plat."], explain:"Sans nom : chacun (chacune si ce sont des femmes)."},
    {type:"transform", lvl:3, instruction:"Réécrivez en style administratif avec « Toute » + nom sans article.", prompt:"Chaque demande incomplète sera retournée.", answers:["Toute demande incomplète sera retournée."], explain:"Toute + nom sans article = chaque (écrit administratif)."},
    {type:"order", lvl:3, words:["n’importe","Ne","quoi","pas","crois"], answers:["Ne crois pas n’importe quoi."], explain:"N’importe quoi = any old thing."}
  ]
}});
B.grammarMore=Object.assign(B.grammarMore||{},{g38:[
  {type:"mcq", lvl:1, prompt:"Je l’appelle ___ les semaines.", choices:["toutes","tous","tout"], answer:0, explain:"Les semaines : féminin pluriel → toutes les."},
  {type:"mcq", lvl:1, prompt:"Il a plu ___ la journée.", choices:["toute","tout","toutes"], answer:0, explain:"La journée : féminin singulier → toute la."},
  {type:"mcq", lvl:1, prompt:"Tu veux ___ à boire ?", choices:["quelque chose","quelqu’un","rien"], answer:0, explain:"Une chose indéterminée : quelque chose."},
  {type:"mcq", lvl:1, prompt:"___ de ses enfants a une chambre.", choices:["Chacun","Chaque","Tout"], answer:0, explain:"Sans nom juste après : le pronom chacun (de)."},
  {type:"fill", lvl:1, prompt:"Je prends le bus ___ les jours.", answers:["tous"], explain:"Les jours : masculin pluriel → tous les."},
  {type:"fill", lvl:1, prompt:"Il n’y a ___ dans la salle.", answers:["personne"], hint:"aucune personne", explain:"Aucune personne : ne… personne."},
  {type:"fill", lvl:1, prompt:"J’ai lu ___ le livre en un week-end.", answers:["tout"], hint:"tout", explain:"Le livre : masculin singulier → tout le."},
  {type:"fix", lvl:1, prompt:"Chaque semaines, je vais à la piscine.", answers:["Chaque semaine, je vais à la piscine.","Toutes les semaines, je vais à la piscine."], explain:"Chaque + nom singulier (ou toutes les + pluriel)."},
  {type:"fix", lvl:1, prompt:"Tout les magasins sont fermés.", answers:["Tous les magasins sont fermés."], explain:"Les magasins : masculin pluriel → tous."},
  {type:"transform", lvl:1, instruction:"Remplacez « chaque jour » par « tous les… ».", prompt:"Je lis le journal chaque jour.", answers:["Je lis le journal tous les jours."], explain:"Chaque jour = tous les jours."},
  {type:"order", lvl:1, words:["quelques","dans","Il","jours","arrive"], answers:["Il arrive dans quelques jours.","Dans quelques jours, il arrive."], explain:"Quelques + nom pluriel = a few."},
  {type:"mcq", lvl:2, prompt:"Les filles sont ___ venues.", choices:["toutes","tous","tout"], answer:0, explain:"Pronom féminin pluriel : toutes."},
  {type:"mcq", lvl:2, prompt:"Ton frère ? C’est ___ de très gentil.", choices:["quelqu’un","quelque chose","chacun"], answer:0, explain:"Une personne + de + adjectif : quelqu’un de gentil."},
  {type:"mcq", lvl:2, prompt:"Prenez ce médicament ___ six heures.", choices:["toutes les","tous les","chaque"], answer:0, explain:"Fréquence : toutes les + heures (féminin pluriel)."},
  {type:"fill", lvl:2, prompt:"J’ai invité ___ amis, pas beaucoup.", answers:["quelques"], hint:"a few", explain:"Un petit nombre : quelques + nom pluriel."},
  {type:"fill", lvl:2, prompt:"Avez-vous remarqué quelque chose ___ anormal ?", answers:["d’"], explain:"Quelque chose + de (d’) + adjectif."},
  {type:"fill", lvl:2, prompt:"___ des candidates a présenté son projet.", answers:["Chacune"], hint:"each one", explain:"Pronom féminin, sans nom juste après : chacune (des)."},
  {type:"fix", lvl:2, prompt:"Personne n’ont appelé.", answers:["Personne n’a appelé."], explain:"Personne sujet : verbe au singulier."},
  {type:"fix", lvl:2, prompt:"J’ai acheté quelque chose de jolie.", answers:["J’ai acheté quelque chose de joli."], explain:"Quelque chose + de + adjectif au masculin."},
  {type:"transform", lvl:2, instruction:"Mettez la phrase au pluriel avec « tous les ».", prompt:"Chaque employé a reçu une prime.", answers:["Tous les employés ont reçu une prime."], explain:"Chaque + singulier → tous les + pluriel, verbe au pluriel."},
  {type:"transform", lvl:2, instruction:"Mettez la phrase à la forme négative avec « rien ».", prompt:"J’ai acheté quelque chose.", answers:["Je n’ai rien acheté."], explain:"Quelque chose → ne… rien (rien avant le participe)."},
  {type:"order", lvl:2, words:["partis","Ils","tous","sont"], answers:["Ils sont tous partis."], explain:"Pronom tous entre l’auxiliaire et le participe."},
  {type:"mcq", lvl:3, prompt:"Ma fille était ___ contente de son cadeau.", choices:["toute","tout","tous"], answer:0, explain:"Devant un adjectif féminin commençant par une consonne, tout s’accorde : toute contente."},
  {type:"fill", lvl:3, prompt:"Vous pouvez vous asseoir ___.", answers:["n’importe où"], hint:"indéfini, any place", explain:"N’importe où = anywhere."},
  {type:"fill", lvl:3, prompt:"___ les deux jours, je change les draps.", answers:["Tous"], explain:"Fréquence : tous les deux jours."},
  {type:"fix", lvl:3, prompt:"Je n’ai aucuns problèmes avec mes voisins.", answers:["Je n’ai aucun problème avec mes voisins."], explain:"Aucun(e) + nom singulier : aucun problème."},
  {type:"transform", lvl:3, instruction:"Remplacez « à l’heure que vous voulez » par « n’importe quel » + nom.", prompt:"Vous pouvez venir à l’heure que vous voulez.", answers:["Vous pouvez venir à n’importe quelle heure."], explain:"N’importe quel s’accorde avec le nom : n’importe quelle heure (féminin)."},
  {type:"order", lvl:3, words:["n’importe","Vous","m’appeler","quand","pouvez"], answers:["Vous pouvez m’appeler n’importe quand.","N’importe quand, vous pouvez m’appeler."], explain:"N’importe quand = any time."}
]});
})();
