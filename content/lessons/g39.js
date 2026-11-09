/* g39 — Situer dans le temps : quand, dès que, avant que, après avoir… (card, lesson, 12 practice, 28 bank questions) */
(()=>{const B=window.TEF_BANK=window.TEF_BANK||{};
(B.grammar=B.grammar||[]).push({
  id:"g39", section:"La phrase complexe", order:46, title:"Situer dans le temps : quand, dès que, avant que, après avoir…", status:"untested",
  short:"Quand, lorsque, dès que, pendant que, après que + indicatif ; avant que, jusqu’à ce que + subjonctif ; même sujet : avant de / après avoir + infinitif.",
  details:"Les conjonctions de temps relient deux actions. En même temps : quand, lorsque, pendant que, au moment où + indicatif. Juste après : dès que, aussitôt que, une fois que + indicatif (au futur pour l’avenir). Avant : avant que, jusqu’à ce que, en attendant que + subjonctif ; après que + indicatif. Si le sujet est le même : avant de + infinitif, après + infinitif passé (après avoir mangé, après être parti). Avec un nom : avant, après, pendant, lors de, dès.",
  examples:["Appelle-moi dès que tu arrives.","Je dois finir avant que les enfants rentrent.","Après avoir déposé mon dossier, j’ai attendu trois semaines.","Lors de l’entretien, soyez ponctuel."],
  mistakes:[
    {wrong:"Je te rappellerai dès que je rentre.", right:"Je te rappellerai dès que je rentrerai.", why:"Pour une action future : dès que + futur (et non le présent)."},
    {wrong:"Après avoir arrivé, il a appelé sa mère.", right:"Après être arrivé, il a appelé sa mère.", why:"Infinitif passé avec être pour les verbes de mouvement : après être arrivé."},
    {wrong:"Avant que partir, fermez les fenêtres.", right:"Avant de partir, fermez les fenêtres.", why:"Même sujet : avant de + infinitif."},
    {wrong:"Attends jusqu’à ce qu’il revient.", right:"Attends jusqu’à ce qu’il revienne.", why:"Jusqu’à ce que + subjonctif."}
  ],
  drill:{prompt:"Complète : ___ avoir fini, il est sorti.", choices:["Après","Avant","Dès","Pendant"], answer:0}
});
B.grammarPlus=Object.assign(B.grammarPlus||{},{g39:{
  intro:"À l’écrit A (récit, fait divers) comme à l’écrit B, les connecteurs de temps rendent un texte clair et précis : « dès que », « lors de », « après avoir… ». Le choix du mode (indicatif ou subjonctif) et l’infinitif passé sont des marqueurs du niveau B2.",
  rule:[
    "En même temps : quand, lorsque, pendant que, tandis que, au moment où + indicatif : Lorsque je suis arrivé, la réunion avait commencé.",
    "Juste après : dès que, aussitôt que, une fois que + indicatif. Pour l’avenir, futur (ou futur antérieur si la première action sera terminée) : Dès que j’aurai reçu la réponse, je vous écrirai.",
    "Avant : avant que + subjonctif (Je partirai avant qu’il fasse nuit) ; jusqu’à ce que, en attendant que + subjonctif (Attendez jusqu’à ce qu’on vous appelle). Après que + indicatif (Après qu’il est parti, nous avons rangé).",
    "Même sujet : avant de + infinitif (Avant de partir, éteignez la lumière) ; après + infinitif passé : après avoir + participe, après être + participe accordé (Après avoir mangé, nous sommes sortis ; après être rentrée, elle s’est reposée).",
    "Avec un nom : avant, après, pendant, dès, lors de (= au moment de, soutenu), au cours de, à partir de : dès 8 heures, lors de la réunion, au cours de l’année.",
    "Depuis que + indicatif (situation qui continue) ; chaque fois que, toutes les fois que (répétition) : Chaque fois qu’il pleut, la cave est inondée.",
    "Écrit soutenu, même sujet : ayant + participe (Ayant terminé ses études, il a cherché un emploi) ; une fois + nom + participe (Une fois le dossier déposé, vous recevrez un reçu)."
  ],
  table:{head:["Rapport","Conjonction + mode","Même sujet / avec un nom"],rows:[
    ["en même temps","quand, lorsque, pendant que + indicatif","pendant + nom ; en + participe présent"],
    ["juste après","dès que, aussitôt que, une fois que + indicatif","dès + nom ; une fois + participe"],
    ["avant","avant que + subjonctif","avant de + infinitif ; avant + nom"],
    ["après","après que + indicatif","après + infinitif passé ; après + nom"],
    ["jusqu’à","jusqu’à ce que + subjonctif","jusqu’à + nom"],
    ["au moment de","au moment où + indicatif","lors de, au moment de + nom"]
  ]},
  tips:[
    "Quand, lorsque, dès que + futur pour l’avenir (l’anglais met le présent : « as soon as I arrive ») : Je t’appellerai quand j’arriverai.",
    "Après que + indicatif selon la norme (après qu’il est parti) ; on entend souvent le subjonctif, mais évitez-le à l’examen.",
    "L’infinitif passé est très rentable à l’écrit : « Après avoir lu votre annonce, je… », « Je vous remercie de m’avoir reçu ».",
    "À l’écrit A, variez pour enchaîner les étapes d’un récit : au moment où, lors de, au cours de, une fois…"
  ],
  examples:[
    {fr:"Quand j’ai reçu la lettre, j’ai tout de suite appelé la mairie.", en:"When I got the letter, I called the town hall straight away."},
    {fr:"Dès que vous aurez votre récépissé, envoyez-nous une copie.", en:"As soon as you have your receipt, send us a copy.", note:"Dès que + futur antérieur."},
    {fr:"Pendant que je cuisinais, les enfants faisaient leurs devoirs.", en:"While I was cooking, the children were doing their homework."},
    {fr:"Il faut prévenir l’employeur avant que le contrat se termine.", en:"You must inform the employer before the contract ends.", note:"Avant que + subjonctif."},
    {fr:"Après avoir lu votre annonce, j’ai décidé de postuler.", en:"After reading your advert, I decided to apply.", note:"Après + infinitif passé."},
    {fr:"Restez assis jusqu’à ce que l’avion soit arrêté.", en:"Remain seated until the plane has stopped.", note:"Jusqu’à ce que + subjonctif."},
    {fr:"Lors de mon entretien, on m’a demandé mes disponibilités.", en:"During my interview, I was asked about my availability."},
    {fr:"Une fois le formulaire validé, vous recevrez un courriel.", en:"Once the form is validated, you will receive an email."}
  ],
  summary:[
    "Quand, lorsque, dès que, pendant que, après que + indicatif.",
    "Avant que, jusqu’à ce que, en attendant que + subjonctif.",
    "Même sujet : avant de + infinitif ; après avoir / être + participe.",
    "Pour l’avenir : quand, dès que + futur."
  ],
  practice:[
    {type:"mcq", lvl:1, prompt:"Je t’appellerai ___ j’arriverai.", choices:["quand","pendant","avant"], answer:0, explain:"Quand + futur pour une action à venir."},
    {type:"mcq", lvl:1, prompt:"___ de partir, vérifie que tout est fermé.", choices:["Avant","Après","Pendant"], answer:0, explain:"Même sujet : avant de + infinitif."},
    {type:"fill", lvl:1, prompt:"___ que je lisais, le téléphone a sonné.", answers:["Pendant","Tandis"], explain:"Deux actions en même temps : pendant que + indicatif."},
    {type:"fill", lvl:1, prompt:"Attends-moi jusqu’à ce que je ___ .", answers:["revienne"], hint:"revenir", explain:"Jusqu’à ce que + subjonctif : que je revienne."},
    {type:"order", lvl:1, words:["dès","Appelle-moi","que","arrives","tu"], answers:["Appelle-moi dès que tu arrives.","Dès que tu arrives, appelle-moi."], explain:"Dès que + indicatif."},
    {type:"fix", lvl:2, prompt:"Après manger, nous avons fait la vaisselle.", answers:["Après avoir mangé, nous avons fait la vaisselle."], explain:"Après + infinitif passé : après avoir mangé."},
    {type:"fix", lvl:2, prompt:"Dès que je finis ce travail demain, je t’aiderai.", answers:["Dès que je finirai ce travail demain, je t’aiderai.","Dès que j’aurai fini ce travail demain, je t’aiderai."], explain:"Pour l’avenir : dès que + futur (ou futur antérieur)."},
    {type:"transform", lvl:2, instruction:"Reformulez avec « après » + infinitif passé.", prompt:"J’ai lu le contrat, puis je l’ai signé.", answers:["Après avoir lu le contrat, je l’ai signé."], explain:"Même sujet : après avoir + participe."},
    {type:"transform", lvl:2, instruction:"Reformulez avec « avant de ».", prompt:"Je réfléchis bien, puis je décide.", answers:["Je réfléchis bien avant de décider.","Avant de décider, je réfléchis bien."], explain:"Même sujet : avant de + infinitif."},
    {type:"order", lvl:2, words:["être","Après","elle","rentrée","s’est","reposée"], answers:["Après être rentrée, elle s’est reposée.","Elle s’est reposée après être rentrée."], explain:"Après être + participe accordé avec le sujet."},
    {type:"mcq", lvl:3, prompt:"___ de la réunion, le directeur a annoncé de nouvelles mesures.", choices:["Lors","Pendant que","Dès que"], answer:0, explain:"Lors de + nom (soutenu) = au moment de."},
    {type:"fill", lvl:3, prompt:"Je resterai à l’accueil en attendant que vous ___ .", answers:["finissiez","ayez fini"], hint:"finir", explain:"En attendant que + subjonctif (présent ou passé)."}
  ]
}});
B.grammarMore=Object.assign(B.grammarMore||{},{g39:[
  {type:"mcq", lvl:1, prompt:"___ il fait beau, nous mangeons dehors.", choices:["Quand","Avant que","Jusqu’à ce que"], answer:0, explain:"Quand + indicatif (chaque fois que)."},
  {type:"mcq", lvl:1, prompt:"Je ferai la vaisselle ___ le film.", choices:["après","après que","après avoir"], answer:0, explain:"Devant un nom : après."},
  {type:"mcq", lvl:1, prompt:"Lavez-vous les mains ___ manger.", choices:["avant de","avant que","avant"], answer:0, explain:"Même sujet : avant de + infinitif."},
  {type:"mcq", lvl:1, prompt:"Elle s’est endormie ___ le trajet.", choices:["pendant","pendant que","quand"], answer:0, explain:"Devant un nom : pendant."},
  {type:"fill", lvl:1, prompt:"Rentre avant ___ fasse nuit.", answers:["qu’il"], explain:"Avant que + subjonctif : avant qu’il fasse nuit."},
  {type:"fill", lvl:1, prompt:"Je t’envoie le document dès que je le ___ .", answers:["recevrai"], hint:"recevoir, futur", explain:"Pour l’avenir : dès que + futur."},
  {type:"fill", lvl:1, prompt:"Après avoir ___ , il est allé se coucher.", answers:["dîné"], hint:"dîner", explain:"Après avoir + participe passé."},
  {type:"fix", lvl:1, prompt:"Avant que tu pars, donne-moi tes clés.", answers:["Avant que tu partes, donne-moi tes clés."], explain:"Avant que + subjonctif."},
  {type:"fix", lvl:1, prompt:"Après être mangé, nous avons fait une promenade.", answers:["Après avoir mangé, nous avons fait une promenade."], explain:"Manger se conjugue avec avoir : après avoir mangé."},
  {type:"transform", lvl:1, instruction:"Reformulez avec « pendant que ».", prompt:"Je cuisine et en même temps j’écoute la radio.", answers:["J’écoute la radio pendant que je cuisine.","Pendant que je cuisine, j’écoute la radio."], explain:"Deux actions simultanées : pendant que + indicatif."},
  {type:"order", lvl:1, words:["qu’il","Dès","arrive","partons","nous"], answers:["Dès qu’il arrive, nous partons.","Nous partons dès qu’il arrive."], explain:"Dès que + indicatif."},
  {type:"mcq", lvl:2, prompt:"Nous attendrons ___ le médecin soit disponible.", choices:["jusqu’à ce que","jusqu’à","pendant que"], answer:0, explain:"Jusqu’à ce que + subjonctif (soit)."},
  {type:"mcq", lvl:2, prompt:"___ avoir signé le bail, vous recevrez les clés.", choices:["Après","Avant de","Dès que"], answer:0, explain:"Après + infinitif passé."},
  {type:"mcq", lvl:2, prompt:"Je vous rembourserai dès que j’___ mon salaire.", choices:["aurai reçu","ai reçu","avais reçu"], answer:0, explain:"Action future terminée avant l’autre : futur antérieur."},
  {type:"fill", lvl:2, prompt:"Une fois le paiement ___ , votre commande sera expédiée.", answers:["validé"], hint:"valider", explain:"Une fois + nom + participe accordé."},
  {type:"fill", lvl:2, prompt:"Il a démissionné après qu’on lui ___ refusé une augmentation.", answers:["a","avait"], hint:"avoir, indicatif", explain:"Après que + indicatif."},
  {type:"fill", lvl:2, prompt:"Avant de ___ , relisez bien votre lettre.", answers:["signer"], hint:"signer", explain:"Avant de + infinitif."},
  {type:"fix", lvl:2, prompt:"Il est resté jusqu’à ce que tout le monde est parti.", answers:["Il est resté jusqu’à ce que tout le monde soit parti."], explain:"Jusqu’à ce que + subjonctif."},
  {type:"fix", lvl:2, prompt:"Après avoir arrivée, elle a téléphoné.", answers:["Après être arrivée, elle a téléphoné."], explain:"Arriver se conjugue avec être : après être arrivée."},
  {type:"transform", lvl:2, instruction:"Reformulez avec « dès que » et le futur antérieur.", prompt:"Je finirai le rapport, puis je te l’enverrai.", answers:["Dès que j’aurai fini le rapport, je te l’enverrai.","Je te l’enverrai dès que j’aurai fini le rapport."], explain:"Dès que + futur antérieur pour l’action terminée d’abord."},
  {type:"transform", lvl:2, instruction:"Remplacez « pendant ton absence » par « pendant que » + verbe.", prompt:"Pendant ton absence, j’ai arrosé tes plantes.", answers:["Pendant que tu étais absent, j’ai arrosé tes plantes.","Pendant que tu étais absente, j’ai arrosé tes plantes."], explain:"Pendant + nom → pendant que + verbe conjugué."},
  {type:"order", lvl:2, words:["de","Avant","réfléchis","bien","répondre"], answers:["Avant de répondre, réfléchis bien.","Réfléchis bien avant de répondre."], explain:"Avant de + infinitif."},
  {type:"mcq", lvl:3, prompt:"___ terminé ses études, il a créé son entreprise.", choices:["Ayant","Après","Avoir"], answer:0, explain:"Écrit soutenu : ayant + participe (même sujet)."},
  {type:"fill", lvl:3, prompt:"Les travaux dureront jusqu’à ce que la mairie ___ une solution.", answers:["trouve","ait trouvé"], hint:"trouver", explain:"Jusqu’à ce que + subjonctif (présent ou passé)."},
  {type:"fill", lvl:3, prompt:"___ de son séjour en France, il a appris à cuisiner.", answers:["Lors","Au cours"], hint:"soutenu, + de", explain:"Lors de / au cours de + nom."},
  {type:"fix", lvl:3, prompt:"Après qu’il soit parti, nous avons fermé la porte.", answers:["Après qu’il est parti, nous avons fermé la porte."], explain:"Selon la norme, après que + indicatif."},
  {type:"transform", lvl:3, instruction:"Reformulez avec « une fois » + nom + participe.", prompt:"Quand le dossier sera déposé, vous recevrez un reçu.", answers:["Une fois le dossier déposé, vous recevrez un reçu."], explain:"Une fois + nom + participe : écrit soutenu et concis."},
  {type:"order", lvl:3, words:["avoir","Après","annonce","votre","lu","postulé","j’ai"], answers:["Après avoir lu votre annonce, j’ai postulé.","J’ai postulé après avoir lu votre annonce."], explain:"Après + infinitif passé."}
]});
})();
