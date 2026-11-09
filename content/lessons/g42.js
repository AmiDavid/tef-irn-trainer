/* g42 — La nominalisation : augmenter → l’augmentation (card, lesson, 12 practice, 28 bank questions) */
(()=>{const B=window.TEF_BANK=window.TEF_BANK||{};
(B.grammar=B.grammar||[]).push({
  id:"g42", section:"Argumenter", order:85, title:"La nominalisation : augmenter → l’augmentation", status:"untested",
  short:"Transformer un verbe ou un adjectif en nom (augmenter → l’augmentation, rapide → la rapidité) pour un style écrit concis : titres, notes, textes administratifs.",
  details:"La nominalisation transforme un verbe ou un adjectif en nom : augmenter → l’augmentation, ouvrir → l’ouverture, partir → le départ, rapide → la rapidité. Elle sert à écrire de façon concise et soutenue (titres de presse, notes, courriers administratifs, plans d’argumentation) : « Les prix augmentent » → « L’augmentation des prix ». Suffixes fréquents : -tion / -sion (féminin), -ment (masculin), -age (masculin), -ure (féminin), -ée (féminin) pour les verbes ; -té, -ité, -esse, -eur (féminin) pour les adjectifs. Le sujet du verbe devient un complément avec de : Les trains arrivent → l’arrivée des trains.",
  examples:["La fermeture de la piscine est prévue en juin.","L’augmentation des loyers inquiète les habitants.","Après réception de votre dossier, nous vous contacterons.","La rapidité du service est appréciée."],
  mistakes:[
    {wrong:"L’augmentement des prix", right:"L’augmentation des prix", why:"Augmenter → l’augmentation (suffixe -ation)."},
    {wrong:"Le départure du train", right:"Le départ du train", why:"Partir → le départ, sans suffixe."},
    {wrong:"La construisation du pont", right:"La construction du pont", why:"Construire → la construction."},
    {wrong:"Après recevoir votre dossier, nous vous appellerons.", right:"Après réception de votre dossier, nous vous appellerons.", why:"Après + nom (après réception de…) ou après + infinitif passé (après avoir reçu…)."}
  ],
  drill:{prompt:"Complète : « Les prix baissent » → « La ___ des prix ».", choices:["baisse","baissement","baissure","baissation"], answer:0}
});
B.grammarPlus=Object.assign(B.grammarPlus||{},{g42:{
  intro:"La nominalisation est une marque du niveau B2 à l’écrit : elle résume une idée en quelques mots (titres, notes, introduction d’un argument) et elle est partout dans les articles de presse et les documents administratifs du TEF : « En raison de la fermeture du bureau… », « Suite à la hausse des prix… ».",
  rule:[
    "Principe : verbe ou adjectif → nom ; le sujet devient un complément avec de et le verbe conjugué disparaît : Les prix augmentent → l’augmentation des prix ; le service est rapide → la rapidité du service.",
    "Verbes → noms en -tion, -sion, -ation (féminin) : augmenter → l’augmentation, réduire → la réduction, décider → la décision, inscrire → l’inscription.",
    "Verbes → noms en -ment (masculin) : changer → le changement, payer → le paiement, rembourser → le remboursement, déménager → le déménagement.",
    "Verbes → noms en -age (masculin), -ure, -ée, -ance / -ence (féminin) : nettoyer → le nettoyage, ouvrir → l’ouverture, fermer → la fermeture, arriver → l’arrivée, naître → la naissance, préférer → la préférence.",
    "Noms sans suffixe : partir → le départ, refuser → le refus, choisir → le choix, envoyer → l’envoi, baisser → la baisse, vendre → la vente, perdre → la perte, aider → l’aide.",
    "Adjectifs → noms (souvent féminins) : -té / -ité (rapide → la rapidité, propre → la propreté, gratuit → la gratuité), -esse (jeune → la jeunesse, faible → la faiblesse), -eur (long → la longueur, chaud → la chaleur), -ence (violent → la violence).",
    "Emplois : titres (Fermeture exceptionnelle de la médiathèque) ; préposition + nom au lieu d’une proposition (après réception de…, avant son départ, en raison de la fermeture) ; plan et introduction d’un texte argumentatif."
  ],
  table:{head:["Suffixe","Exemples","Genre"],rows:[
    ["-tion, -sion, -ation","augmenter → l’augmentation, décider → la décision","féminin"],
    ["-ment","changer → le changement, payer → le paiement","masculin"],
    ["-age","nettoyer → le nettoyage, recycler → le recyclage","masculin"],
    ["-ure","ouvrir → l’ouverture, fermer → la fermeture","féminin"],
    ["-ée","arriver → l’arrivée, entrer → l’entrée","féminin"],
    ["-ance, -ence","naître → la naissance, préférer → la préférence","féminin"],
    ["sans suffixe","partir → le départ, baisser → la baisse, refuser → le refus","variable"],
    ["-té, -ité, -esse, -eur","rapide → la rapidité, jeune → la jeunesse, long → la longueur","féminin"]
  ]},
  tips:[
    "Le genre suit le suffixe : -tion, -ure, -ée, -ance, -té → féminin ; -ment, -age → masculin (voir la leçon « Genre et accord »).",
    "Pour un titre ou une note, supprimez le verbe conjugué : « La mairie va rénover l’école » → « Rénovation de l’école par la mairie ».",
    "Avec une préposition, le nom évite une subordonnée : avant qu’il parte → avant son départ ; parce que les prix augmentent → en raison de la hausse des prix.",
    "Pièges : propre → la propreté (la propriété = property) ; recevoir → la réception (un reçu = a receipt)."
  ],
  examples:[
    {fr:"La fermeture de la piscine est prévue du 1er au 15 août.", en:"The pool will be closed from 1 to 15 August.", note:"fermer → la fermeture."},
    {fr:"L’augmentation des loyers inquiète les familles.", en:"The rise in rents worries families."},
    {fr:"Après réception de votre dossier, nous vous contacterons.", en:"Once we receive your file, we will contact you.", note:"Après + nom : plus concis qu’une subordonnée."},
    {fr:"En raison de la grève, le départ du train est retardé.", en:"Because of the strike, the train’s departure is delayed."},
    {fr:"La propreté des rues est une priorité pour la mairie.", en:"Clean streets are a priority for the town hall.", note:"propre → la propreté."},
    {fr:"Le remboursement sera effectué sous dix jours.", en:"The refund will be made within ten days."},
    {fr:"Nouvelle hausse du prix de l’électricité", en:"Another rise in the price of electricity", note:"Titre de presse : pas de verbe conjugué."},
    {fr:"Le choix d’un logement dépend surtout du budget.", en:"Choosing accommodation depends mainly on the budget."}
  ],
  summary:[
    "Verbe → nom : le sujet devient « de + nom » (l’arrivée des trains).",
    "-tion, -ure, -ée, -ance, -té : féminin ; -ment, -age : masculin.",
    "Sans suffixe : le départ, la baisse, le refus, le choix.",
    "Titres, notes, après / avant / en raison de + nom."
  ],
  practice:[
    {type:"mcq", lvl:1, prompt:"« Les magasins ouvrent » → « L’___ des magasins ».", choices:["ouverture","ouvrement","ouvrage"], answer:0, explain:"Ouvrir → l’ouverture (un ouvrage est un livre ou un travail)."},
    {type:"mcq", lvl:1, prompt:"« Le train part » → « Le ___ du train ».", choices:["départ","partie","partement"], answer:0, explain:"Partir → le départ (une partie = a part)."},
    {type:"fill", lvl:1, prompt:"« On vend la maison » → « La ___ de la maison ».", answers:["vente"], explain:"Vendre → la vente."},
    {type:"fill", lvl:1, prompt:"« Il est jeune » → « Sa ___ ».", answers:["jeunesse"], explain:"Jeune → la jeunesse (-esse)."},
    {type:"order", lvl:1, words:["La","inquiète","prix","hausse","des","les","habitants"], answers:["La hausse des prix inquiète les habitants."], explain:"Hausser → la hausse ; le sujet devient « des prix »."},
    {type:"transform", lvl:2, instruction:"Transformez la phrase en titre avec un nom.", prompt:"La piscine municipale ferme.", answers:["Fermeture de la piscine municipale","La fermeture de la piscine municipale"], explain:"Fermer → la fermeture ; pas de verbe conjugué dans un titre."},
    {type:"transform", lvl:2, instruction:"Remplacez la proposition par « après » + nom.", prompt:"Après que vous aurez payé, vous recevrez une facture.", answers:["Après paiement, vous recevrez une facture.","Après le paiement, vous recevrez une facture.","Après votre paiement, vous recevrez une facture."], explain:"Payer → le paiement."},
    {type:"fix", lvl:2, prompt:"Le changation d’horaire est prévu lundi.", answers:["Le changement d’horaire est prévu lundi."], explain:"Changer → le changement (-ment)."},
    {type:"fix", lvl:2, prompt:"La livraisation est gratuite.", answers:["La livraison est gratuite."], explain:"Livrer → la livraison."},
    {type:"order", lvl:2, words:["de","En","raison","grève","la","fermé","est","musée","le"], answers:["En raison de la grève, le musée est fermé.","Le musée est fermé en raison de la grève."], explain:"En raison de + nom."},
    {type:"mcq", lvl:3, prompt:"« Les employés refusent » → « Le ___ des employés ».", choices:["refus","refusement","refusion"], answer:0, explain:"Refuser → le refus, sans suffixe."},
    {type:"fill", lvl:3, prompt:"« Le service est rapide » → « La ___ du service ».", answers:["rapidité"], explain:"Rapide → la rapidité (-ité)."}
  ]
}});
B.grammarMore=Object.assign(B.grammarMore||{},{g42:[
  {type:"mcq", lvl:1, prompt:"« Je paie » → « Le ___ ».", choices:["paiement","payage","payation"], answer:0, explain:"Payer → le paiement (-ment)."},
  {type:"mcq", lvl:1, prompt:"« On construit un pont » → « La ___ d’un pont ».", choices:["construction","construisure","construisement"], answer:0, explain:"Construire → la construction."},
  {type:"mcq", lvl:1, prompt:"« Les invités arrivent » → « L’___ des invités ».", choices:["arrivée","arrivage","arrivement"], answer:0, explain:"Arriver → l’arrivée (un arrivage = une livraison de marchandises)."},
  {type:"mcq", lvl:1, prompt:"« Il fait chaud » → « La ___ ».", choices:["chaleur","chaudesse","chaudité"], answer:0, explain:"Chaud → la chaleur (-eur)."},
  {type:"fill", lvl:1, prompt:"« Nous déménageons » → « Notre ___ ».", answers:["déménagement"], explain:"Déménager → le déménagement (-ment)."},
  {type:"fill", lvl:1, prompt:"« Elle est gentille » → « Sa ___ ».", answers:["gentillesse"], explain:"Gentil → la gentillesse (-esse)."},
  {type:"fill", lvl:1, prompt:"« On nettoie les rues » → « Le ___ des rues ».", answers:["nettoyage"], explain:"Nettoyer → le nettoyage (-age)."},
  {type:"fix", lvl:1, prompt:"Le fermement du magasin est à 20 heures.", answers:["La fermeture du magasin est à 20 heures."], explain:"Fermer → la fermeture (féminin)."},
  {type:"fix", lvl:1, prompt:"L’inscriptement est obligatoire.", answers:["L’inscription est obligatoire."], explain:"Inscrire → l’inscription."},
  {type:"transform", lvl:1, instruction:"Transformez en titre avec un nom.", prompt:"Les transports sont gratuits le dimanche.", answers:["Gratuité des transports le dimanche","La gratuité des transports le dimanche"], explain:"Gratuit → la gratuité (-ité)."},
  {type:"order", lvl:1, words:["Le","n’est","remboursement","pas","automatique"], answers:["Le remboursement n’est pas automatique."], explain:"Rembourser → le remboursement."},
  {type:"mcq", lvl:2, prompt:"« Les entreprises licencient » → « Les ___ ».", choices:["licenciements","licenciations","licences"], answer:0, explain:"Licencier → le licenciement (une licence est un diplôme ou un permis)."},
  {type:"mcq", lvl:2, prompt:"« La cuisine est propre » → « La ___ de la cuisine ».", choices:["propreté","propriété","propresse"], answer:0, explain:"Propre → la propreté (la propriété = property)."},
  {type:"mcq", lvl:2, prompt:"« Il perd son emploi » → « La ___ de son emploi ».", choices:["perte","perdition","perdement"], answer:0, explain:"Perdre → la perte."},
  {type:"fill", lvl:2, prompt:"« Les loyers augmentent » → « L’___ des loyers ».", answers:["augmentation"], explain:"Augmenter → l’augmentation (-ation)."},
  {type:"fill", lvl:2, prompt:"« Il faut réduire les déchets » → « La ___ des déchets ».", answers:["réduction"], explain:"Réduire → la réduction."},
  {type:"fill", lvl:2, prompt:"« Il est faible » → « Sa ___ ».", answers:["faiblesse"], explain:"Faible → la faiblesse (-esse)."},
  {type:"fix", lvl:2, prompt:"Le choisissement du logement est difficile.", answers:["Le choix du logement est difficile."], explain:"Choisir → le choix, sans suffixe."},
  {type:"fix", lvl:2, prompt:"Après le reçu de votre courrier, nous avons contacté le service.", answers:["Après réception de votre courrier, nous avons contacté le service.","Après la réception de votre courrier, nous avons contacté le service."], explain:"Recevoir → la réception (un reçu = a receipt)."},
  {type:"transform", lvl:2, instruction:"Remplacez la proposition par « avant » + nom.", prompt:"Avant qu’il parte, il a rangé son bureau.", answers:["Avant son départ, il a rangé son bureau."], explain:"Partir → le départ ; avant + nom."},
  {type:"transform", lvl:2, instruction:"Remplacez « parce que les prix augmentent » par « en raison de » + nom.", prompt:"Les ventes baissent parce que les prix augmentent.", answers:["Les ventes baissent en raison de l’augmentation des prix.","Les ventes baissent en raison de la hausse des prix."], explain:"En raison de + nom (l’augmentation, la hausse)."},
  {type:"order", lvl:2, words:["Suite","votre","à","demande","envoyons","nous","dossier","le"], answers:["Suite à votre demande, nous envoyons le dossier.","Nous envoyons le dossier suite à votre demande."], explain:"Suite à + nom (formule administrative)."},
  {type:"mcq", lvl:3, prompt:"« Le gouvernement décide » → « La ___ du gouvernement ».", choices:["décision","décidation","décidement"], answer:0, explain:"Décider → la décision (-sion)."},
  {type:"fill", lvl:3, prompt:"« On envoie le colis » → « L’___ du colis ».", answers:["envoi"], explain:"Envoyer → l’envoi (masculin, sans suffixe)."},
  {type:"fill", lvl:3, prompt:"« Les jeunes sont violents » → « La ___ des jeunes ».", answers:["violence"], explain:"Violent → la violence (-ence)."},
  {type:"fix", lvl:3, prompt:"La diminuation du chômage se confirme.", answers:["La diminution du chômage se confirme."], explain:"Diminuer → la diminution."},
  {type:"transform", lvl:3, instruction:"Transformez en titre de presse avec un nom.", prompt:"Le maire a démissionné hier.", answers:["Démission du maire","La démission du maire","Démission du maire hier"], explain:"Démissionner → la démission ; pas de verbe conjugué dans un titre."},
  {type:"order", lvl:3, words:["des","horaires","Modification","d’ouverture"], answers:["Modification des horaires d’ouverture"], explain:"Titre : nom + complément, sans verbe."}
]});
})();
