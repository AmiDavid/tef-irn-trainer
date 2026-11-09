/* g37 — Verbe + à, de ou rien + infinitif (card, lesson, 12 practice, 28 bank questions) */
(()=>{const B=window.TEF_BANK=window.TEF_BANK||{};
(B.grammar=B.grammar||[]).push({
  id:"g37", section:"Les prépositions", order:28, title:"Verbe + à, de ou rien + infinitif : réussir à, décider de, vouloir", status:"untested",
  short:"Certains verbes prennent à (réussir à), d’autres de (décider de), d’autres rien (vouloir, pouvoir) devant un infinitif : à apprendre avec le verbe.",
  details:"Devant un infinitif, certains verbes se construisent sans préposition (vouloir, pouvoir, devoir, savoir, aimer, préférer, espérer, aller, venir, falloir), d’autres avec à (commencer à, réussir à, arriver à, apprendre à, aider quelqu’un à, hésiter à, s’habituer à) et d’autres avec de (décider de, essayer de, finir de, arrêter de, oublier de, accepter de, refuser de, éviter de, avoir besoin de, avoir envie de). Avec une personne : demander / conseiller / permettre / dire à quelqu’un de faire quelque chose.",
  examples:["J’ai décidé de changer de travail.","Mon fils apprend à nager.","Je voudrais prendre rendez-vous.","Le médecin m’a conseillé de me reposer."],
  mistakes:[
    {wrong:"J’ai décidé à partir.", right:"J’ai décidé de partir.", why:"Décider de + infinitif."},
    {wrong:"Il a réussi de trouver un logement.", right:"Il a réussi à trouver un logement.", why:"Réussir à + infinitif."},
    {wrong:"Je veux de partir.", right:"Je veux partir.", why:"Vouloir + infinitif, sans préposition."},
    {wrong:"Il m’a demandé à attendre.", right:"Il m’a demandé d’attendre.", why:"Demander à quelqu’un de faire quelque chose."}
  ],
  drill:{prompt:"Complète : J’ai oublié ___ fermer la fenêtre.", choices:["de","à","par","pour"], answer:0}
});
B.grammarPlus=Object.assign(B.grammarPlus||{},{g37:{
  intro:"Les verbes suivis d’un infinitif sont partout dans vos productions (« j’ai décidé de… », « je n’arrive pas à… », « je vous demande de… »). La préposition ne se devine pas : il faut l’apprendre avec le verbe, comme un bloc. C’est une erreur très fréquente, même au niveau B2.",
  rule:[
    "Sans préposition : verbes modaux, de volonté, de goût, de mouvement et de perception : vouloir, pouvoir, devoir, savoir, falloir (il faut), il vaut mieux, aimer, adorer, préférer, détester, espérer, souhaiter, compter, aller, venir, partir, laisser, faire, sembler, oser, voir, entendre, regarder, écouter : Je voudrais réserver ; j’espère vous revoir ; je l’ai entendu partir.",
    "Verbe + à + infinitif : commencer à, continuer à, réussir à, arriver à, apprendre à, chercher à, hésiter à, s’habituer à, se mettre à, tenir à, avoir du mal à, passer du temps à : J’ai du mal à dormir ; il a réussi à trouver un emploi.",
    "Verbe + de + infinitif (le cas le plus fréquent) : décider de, essayer de, finir de, arrêter de, oublier de, accepter de, refuser de, éviter de, choisir de, se dépêcher de, regretter de, rêver de, avoir besoin de, avoir envie de, avoir peur de, avoir le droit de, être content de : J’ai envie de partir.",
    "Verbe + à quelqu’un + de + infinitif : demander, dire, conseiller, permettre, interdire, proposer, promettre, rappeler à quelqu’un de… : Le médecin m’a conseillé de me reposer ; je leur ai demandé d’attendre.",
    "Verbe + quelqu’un + à / de + infinitif : aider, inviter, encourager, autoriser, obliger quelqu’un à… (mais être obligé de) ; empêcher, remercier, féliciter, prier, convaincre quelqu’un de… : Il m’a aidé à remplir le dossier ; je vous remercie de m’avoir répondu.",
    "Devant une voyelle, de devient d’ (essayer d’arriver). De ne se contracte pas avec le pronom le / les : J’ai essayé de le joindre (pas « du joindre »). Pour une action antérieure, infinitif passé : Je vous remercie de m’avoir aidé ; je regrette de ne pas être venu.",
    "La préposition peut changer le sens : venir faire (= se déplacer pour) / venir de faire (= passé récent : je viens de rentrer) ; finir de faire (= terminer) / finir par faire (= en fin de compte) ; commencer à faire / commencer par faire (= d’abord) ; penser faire (= avoir l’intention) / penser à faire (= ne pas oublier) ; demander à quelqu’un de faire / demander à faire (= demander la permission : il demande à parler au directeur).",
    "La construction peut changer devant un nom : décider quelque chose / décider de faire ; mais avoir besoin de quelque chose / avoir besoin de faire."
  ],
  table:{head:["Sans préposition","+ à","+ de"],rows:[
    ["vouloir, pouvoir, devoir","commencer à, continuer à","décider de, choisir de"],
    ["savoir, il faut","réussir à, arriver à","essayer de, tenter de"],
    ["aimer, préférer, détester","apprendre à, chercher à","finir de, arrêter de"],
    ["espérer, souhaiter, compter","hésiter à, tenir à","oublier de, éviter de"],
    ["aller, venir, partir","s’habituer à, se mettre à","accepter de, refuser de"],
    ["faire, laisser, oser","avoir du mal à","avoir besoin / envie / peur de"]
  ]},
  tables:[
    {title:"Avec une personne", head:["Construction","Verbes","Exemple"], rows:[
      ["à quelqu’un de + infinitif","demander, dire, conseiller, permettre, interdire, proposer, promettre","Je lui ai conseillé de patienter."],
      ["quelqu’un à + infinitif","aider, inviter, encourager, autoriser, obliger","Il m’a aidé à remplir le dossier."],
      ["quelqu’un de + infinitif","empêcher, remercier, féliciter, prier, convaincre","Je vous remercie de m’avoir répondu."]
    ]}
  ],
  tips:[
    "Apprenez chaque verbe avec sa préposition, comme un bloc : « décider de », « réussir à », « vouloir + infinitif ».",
    "Piège de l’anglais « to » : I decided to go → j’ai décidé de partir ; I want to go → je veux partir ; I managed to go → j’ai réussi à partir.",
    "Formules utiles à l’écrit : « Je vous prie de bien vouloir… », « Je me permets de vous écrire… », « Je vous remercie de m’avoir répondu ».",
    "Continuer à et continuer de sont tous les deux courants ; commencer de est littéraire : dites commencer à."
  ],
  examples:[
    {fr:"J’ai décidé de suivre une formation en comptabilité.", en:"I’ve decided to take an accounting course."},
    {fr:"Ma fille commence à lire toute seule.", en:"My daughter is starting to read on her own."},
    {fr:"Nous espérons trouver un appartement avant l’été.", en:"We hope to find a flat before the summer.", note:"Espérer + infinitif, sans préposition."},
    {fr:"Je n’arrive pas à me connecter à mon compte.", en:"I can’t manage to log into my account."},
    {fr:"Le propriétaire a refusé de baisser le loyer.", en:"The landlord refused to lower the rent."},
    {fr:"Ma conseillère m’a proposé de faire un bilan de compétences.", en:"My adviser suggested I do a skills assessment.", note:"Proposer à quelqu’un de + infinitif."},
    {fr:"Pouvez-vous m’aider à remplir ce formulaire ?", en:"Can you help me fill in this form?"},
    {fr:"Je me permets de vous écrire au sujet de ma demande.", en:"I am writing to you regarding my request.", note:"Formule de lettre."}
  ],
  summary:[
    "Sans préposition : vouloir, pouvoir, devoir, savoir, aimer, préférer, espérer, aller.",
    "+ à : réussir, arriver, apprendre, hésiter, s’habituer, avoir du mal.",
    "+ de : décider, essayer, finir, arrêter, oublier, accepter, refuser, avoir besoin.",
    "Demander / conseiller / permettre à quelqu’un de… ; aider quelqu’un à…"
  ],
  practice:[
    {type:"mcq", lvl:1, prompt:"J’ai fini ___ ranger la cuisine.", choices:["de","à","pour"], answer:0, explain:"Finir de + infinitif."},
    {type:"mcq", lvl:1, prompt:"Mon fils apprend ___ conduire.", choices:["à","de","pour"], answer:0, explain:"Apprendre à + infinitif."},
    {type:"fill", lvl:1, prompt:"Il a arrêté ___ fumer.", answers:["de"], explain:"Arrêter de + infinitif."},
    {type:"fill", lvl:1, prompt:"Nous avons réussi ___ obtenir un rendez-vous.", answers:["à"], explain:"Réussir à + infinitif."},
    {type:"fix", lvl:1, prompt:"Je dois de partir tôt.", answers:["Je dois partir tôt."], explain:"Devoir + infinitif, sans préposition."},
    {type:"order", lvl:1, words:["de","J’ai","partir","envie"], answers:["J’ai envie de partir."], explain:"Avoir envie de + infinitif."},
    {type:"mcq", lvl:2, prompt:"Le médecin lui a interdit ___ manger salé.", choices:["de","à","pour"], answer:0, explain:"Interdire à quelqu’un de + infinitif."},
    {type:"fill", lvl:2, prompt:"Je vous remercie ___ m’avoir répondu si vite.", answers:["de"], explain:"Remercier quelqu’un de + infinitif (ici passé)."},
    {type:"fix", lvl:2, prompt:"Elle m’a aidé de déménager.", answers:["Elle m’a aidé à déménager.","Elle m’a aidée à déménager."], explain:"Aider quelqu’un à + infinitif."},
    {type:"transform", lvl:2, instruction:"Reformulez avec « conseiller ».", prompt:"Le médecin m’a dit : « Reposez-vous. »", answers:["Le médecin m’a conseillé de me reposer."], explain:"Conseiller à quelqu’un de + infinitif."},
    {type:"transform", lvl:3, instruction:"Commencez par « J’hésite ».", prompt:"Je ne sais pas si je dois accepter cette offre.", answers:["J’hésite à accepter cette offre."], explain:"Hésiter à + infinitif."},
    {type:"order", lvl:3, words:["de","m’a","Il","demandé","rappeler","le"], answers:["Il m’a demandé de le rappeler."], explain:"Demander à quelqu’un (m’) de + infinitif."}
  ]
}});
B.grammarMore=Object.assign(B.grammarMore||{},{g37:[
  {type:"mcq", lvl:1, prompt:"J’ai oublié ___ acheter du pain.", choices:["d’","à","pour"], answer:0, explain:"Oublier de + infinitif ; de devient d’ devant une voyelle."},
  {type:"mcq", lvl:1, prompt:"Je voudrais ___ un renseignement.", choices:["avoir","d’avoir","à avoir"], answer:0, explain:"Vouloir + infinitif, sans préposition."},
  {type:"mcq", lvl:1, prompt:"Nous avons décidé ___ vendre la voiture.", choices:["de","à","pour"], answer:0, explain:"Décider de + infinitif."},
  {type:"mcq", lvl:1, prompt:"J’espère ___ bientôt.", choices:["vous revoir","de vous revoir","à vous revoir"], answer:0, explain:"Espérer + infinitif, sans préposition."},
  {type:"fill", lvl:1, prompt:"Elle a accepté ___ venir à la réunion.", answers:["de"], explain:"Accepter de + infinitif."},
  {type:"fill", lvl:1, prompt:"Je n’arrive pas ___ dormir.", answers:["à"], explain:"Arriver à + infinitif (= réussir à)."},
  {type:"fill", lvl:1, prompt:"Il a refusé ___ signer le contrat.", answers:["de"], explain:"Refuser de + infinitif."},
  {type:"fix", lvl:1, prompt:"J’ai essayé à appeler la banque.", answers:["J’ai essayé d’appeler la banque."], explain:"Essayer de + infinitif (d’ devant une voyelle)."},
  {type:"fix", lvl:1, prompt:"Je préfère de rester à la maison.", answers:["Je préfère rester à la maison."], explain:"Préférer + infinitif, sans préposition."},
  {type:"transform", lvl:1, instruction:"Commencez par « J’ai décidé ».", prompt:"Je vais changer d’opérateur.", answers:["J’ai décidé de changer d’opérateur."], explain:"Décider de + infinitif."},
  {type:"order", lvl:1, words:["à","Il","nager","apprend"], answers:["Il apprend à nager."], explain:"Apprendre à + infinitif."},
  {type:"mcq", lvl:2, prompt:"Je tiens ___ vous remercier personnellement.", choices:["à","de","pour"], answer:0, explain:"Tenir à + infinitif (= vouloir absolument)."},
  {type:"mcq", lvl:2, prompt:"Le directeur nous a permis ___ partir plus tôt.", choices:["de","à","pour"], answer:0, explain:"Permettre à quelqu’un de + infinitif."},
  {type:"mcq", lvl:2, prompt:"Il m’a invité ___ dîner samedi.", choices:["à","de","pour"], answer:0, explain:"Inviter quelqu’un à + infinitif."},
  {type:"fill", lvl:2, prompt:"Je me suis dépêché ___ finir le rapport.", answers:["de","pour"], explain:"Se dépêcher de + infinitif (pour + infinitif, qui exprime le but, est aussi correct ici)."},
  {type:"fill", lvl:2, prompt:"Tu t’habitues ___ vivre à Paris ?", answers:["à"], explain:"S’habituer à + infinitif."},
  {type:"fill", lvl:2, prompt:"Elle a peur ___ prendre l’avion.", answers:["de"], explain:"Avoir peur de + infinitif."},
  {type:"fix", lvl:2, prompt:"Il m’a promis à rappeler demain.", answers:["Il m’a promis de rappeler demain.","Il m’a promis de me rappeler demain."], explain:"Promettre à quelqu’un de + infinitif."},
  {type:"fix", lvl:2, prompt:"Nous cherchons de trouver une solution.", answers:["Nous cherchons à trouver une solution."], explain:"Chercher à + infinitif (= essayer de)."},
  {type:"transform", lvl:2, instruction:"Reformulez avec « demander à quelqu’un de ».", prompt:"J’ai dit à mon voisin : « Baissez la musique, s’il vous plaît. »", answers:["J’ai demandé à mon voisin de baisser la musique.","J’ai demandé à mon voisin de baisser sa musique."], explain:"Demander à quelqu’un de + infinitif."},
  {type:"transform", lvl:2, instruction:"Reformulez avec « avoir du mal à ».", prompt:"Je trouve difficilement un emploi.", answers:["J’ai du mal à trouver un emploi."], explain:"Avoir du mal à + infinitif."},
  {type:"order", lvl:2, words:["les","Je","aidés","ai","à","déménager"], answers:["Je les ai aidés à déménager."], explain:"Aider quelqu’un à + infinitif ; accord avec le COD les placé avant."},
  {type:"mcq", lvl:3, prompt:"Je me permets ___ vous relancer au sujet de ma candidature.", choices:["de","à","pour"], answer:0, explain:"Se permettre de + infinitif (formule de lettre)."},
  {type:"fill", lvl:3, prompt:"Je vous prie ___ bien vouloir m’envoyer une attestation.", answers:["de"], explain:"Prier quelqu’un de + infinitif (formule de lettre)."},
  {type:"fill", lvl:3, prompt:"Rien ne l’empêche ___ postuler.", answers:["de"], explain:"Empêcher quelqu’un de + infinitif."},
  {type:"fix", lvl:3, prompt:"Je vous remercie à m’avoir répondu rapidement.", answers:["Je vous remercie de m’avoir répondu rapidement."], explain:"Remercier quelqu’un de + infinitif passé."},
  {type:"transform", lvl:3, instruction:"Reformulez avec « regretter de » et un infinitif passé.", prompt:"Je regrette : je n’ai pas accepté ce poste.", answers:["Je regrette de ne pas avoir accepté ce poste.","Je regrette de n’avoir pas accepté ce poste."], explain:"Regretter de + infinitif passé ; ne pas se place devant avoir (ou n’avoir pas, plus soutenu)."},
  {type:"order", lvl:3, words:["à","encouragé","m’a","Elle","reprendre","études","mes"], answers:["Elle m’a encouragé à reprendre mes études."], explain:"Encourager quelqu’un à + infinitif."}
]});
})();
