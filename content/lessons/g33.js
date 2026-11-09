/* g33 — Prépositions de lieu et de transport (card, lesson, 12 practice, 28 bank questions) */
(()=>{const B=window.TEF_BANK=window.TEF_BANK||{};
(B.grammar=B.grammar||[]).push({
  id:"g33", section:"Les prépositions", order:16, title:"Prépositions de lieu et de transport : à, en, chez, dans, sur", status:"untested",
  short:"À + ville ou lieu, en / au / aux + pays, chez + personne, dans + espace fermé, sur + internet ; en bus mais à pied.",
  details:"Pour situer ou indiquer une destination : à + ville ou lieu (à Lyon, à la poste), en / au / aux + pays (en France, au Japon, aux États-Unis), chez + personne ou professionnel (chez le médecin, chez moi), dans + espace fermé ou précis (dans la cuisine, dans la rue). Pour les transports : en quand on est à l’intérieur (en bus, en voiture, en train), à quand on est dessus ou à pied (à pied, à vélo, à moto). Sur pour une surface et pour internet (sur la table, sur internet), à pour la radio et la télévision.",
  examples:["Je vais chez le dentiste demain.","Elle travaille à Lyon, mais elle habite en Savoie.","Je viens au travail à vélo.","J’ai vu l’annonce sur internet."],
  mistakes:[
    {wrong:"Je vais au médecin.", right:"Je vais chez le médecin.", why:"Pour une personne ou un professionnel : chez."},
    {wrong:"Je viens en pied.", right:"Je viens à pied.", why:"À pied, à vélo, à moto ; en bus, en voiture, en train."},
    {wrong:"Il habite en Paris.", right:"Il habite à Paris.", why:"Devant une ville : à."},
    {wrong:"Je l’ai lu dans internet.", right:"Je l’ai lu sur internet.", why:"Internet, un site, un réseau social : sur."}
  ],
  drill:{prompt:"Complète : Je vais au travail ___ vélo.", choices:["en","à","par","sur"], answer:1}
});
B.grammarPlus=Object.assign(B.grammarPlus||{},{g33:{
  intro:"Les prépositions de lieu sont dans presque toutes les phrases de la vie quotidienne : prendre rendez-vous chez le médecin, expliquer un trajet, dire où l’on habite. À l’oral A du TEF, vous demandez souvent où se trouve un lieu et comment y aller ; à l’écrit, une préposition fausse (« au médecin », « en pied ») se remarque immédiatement.",
  rule:[
    "Villes et lieux : à (à Paris, à la mairie, à l’hôpital, au marché). Pays et régions : en + féminin ou voyelle (en France, en Iran, en Bretagne), au + masculin (au Canada), aux + pluriel (aux États-Unis). Les pays en -e sont presque tous féminins, sauf le Mexique, le Cambodge, le Mozambique (au Mexique). Origine : de / d’ / du / des (je viens de Lyon, d’Italie, du Maroc, des États-Unis).",
    "Chez + personne, nom de professionnel, pronom ou entreprise : chez mes parents, chez le coiffeur, chez moi, il travaille chez Renault. Mais à + le lieu : à la boulangerie / chez le boulanger.",
    "Dans + un espace fermé ou délimité (dans la cuisine, dans le tiroir), et pour la rue, le quartier, un livre ou un journal : dans la rue, dans mon quartier, dans le journal (mais sur la place, sur le boulevard).",
    "Sur + une surface (sur la table, sur le mur), un réseau ou un écran : sur internet, sur le site, sur les réseaux sociaux, sur mon téléphone. Mais à la radio, à la télévision.",
    "Transports : en quand on est à l’intérieur (en bus, en voiture, en train, en avion, en métro) ; à quand on est dessus ou à pied (à pied, à vélo, à moto, à cheval). Avec un déterminant, on dit dans ou sur : dans le bus de 8 heures, sur mon vélo. À l’oral, on entend souvent en vélo, en moto ; à l’écrit, préférez à vélo, à moto.",
    "Position : devant, derrière, entre… et… (sans de) ; à côté de, en face de, près de, loin de, à droite de, à gauche de, au bout de, au coin de (avec de) : devant la gare, en face de la gare, à côté du métro.",
    "Avec un verbe de mouvement : aller à / en / chez (destination) ; venir de, sortir de, rentrer de (provenance) : Je rentre du travail ; je sors de chez le médecin. Pour un trajet : jusqu’à (allez jusqu’au feu), par (passez par la place)."
  ],
  table:{head:["Préposition","Emploi","Exemple"],rows:[
    ["à","ville, lieu ; à pied, à vélo","à Lille, à la poste, à pied"],
    ["en","pays féminin ou à voyelle ; véhicule dans lequel on monte","en Espagne, en Iran, en train"],
    ["au / aux","pays masculin / pluriel","au Portugal, aux Pays-Bas"],
    ["chez","personne, professionnel, pronom, entreprise","chez le dentiste, chez moi, chez Renault"],
    ["dans","espace fermé, rue, quartier, journal","dans la salle, dans la rue"],
    ["sur","surface, internet, site, application","sur la table, sur internet"]
  ]},
  tables:[
    {title:"Les transports", head:["en (on est à l’intérieur)","à (on est dessus, ou à pied)"], rows:[
      ["en bus, en car","à pied"],
      ["en voiture, en taxi","à vélo"],
      ["en train, en métro, en tram","à moto"],
      ["en avion, en bateau","à cheval"]
    ]}
  ],
  tips:[
    "« Au médecin » est familier et fautif à l’écrit : dites chez le médecin, chez le dentiste. Mais à l’hôpital, à la pharmacie (ce sont des lieux).",
    "En ville = dans le centre, pour faire des courses ; à la campagne, à la montagne, au bord de la mer.",
    "Avec prendre, pas de préposition : je prends le bus ; mais je vais au travail en bus.",
    "Villes avec article : au Havre, à La Rochelle ; certaines îles : à Cuba, à Madagascar, mais en Corse."
  ],
  examples:[
    {fr:"Mes parents habitent au Maroc, mais ils viennent souvent en France.", en:"My parents live in Morocco, but they often come to France."},
    {fr:"J’ai rendez-vous chez l’ophtalmologue jeudi.", en:"I have an appointment at the ophthalmologist’s on Thursday.", note:"Professionnel : chez."},
    {fr:"Les enfants vont à l’école à pied.", en:"The children walk to school.", note:"à + lieu ; à pied."},
    {fr:"Il y a beaucoup de monde dans le métro le matin.", en:"The metro is very crowded in the morning.", note:"Avec l’article : dans le métro."},
    {fr:"J’ai trouvé cet appartement sur un site d’annonces.", en:"I found this flat on a listings website.", note:"Sur + site, internet."},
    {fr:"La pharmacie se trouve en face de la mairie.", en:"The pharmacy is opposite the town hall."},
    {fr:"Je rentre de chez ma sœur en train.", en:"I’m coming back from my sister’s by train."},
    {fr:"On a entendu la nouvelle à la radio.", en:"We heard the news on the radio."}
  ],
  summary:[
    "À + ville ou lieu ; en, au, aux + pays.",
    "Chez + personne ou professionnel (chez le médecin).",
    "Dans = à l’intérieur ; sur = surface, internet.",
    "En bus, en voiture, en train ; à pied, à vélo."
  ],
  practice:[
    {type:"mcq", lvl:1, prompt:"Ma sœur habite ___ Bordeaux.", choices:["à","en","au"], answer:0, explain:"Devant une ville : à."},
    {type:"mcq", lvl:1, prompt:"Ce soir, on dîne ___ mes beaux-parents.", choices:["chez","à","dans"], answer:0, explain:"Pour des personnes : chez."},
    {type:"fill", lvl:1, prompt:"Je vais au bureau ___ métro.", answers:["en"], explain:"On est à l’intérieur du métro : en métro."},
    {type:"fill", lvl:1, prompt:"Ils partent en vacances ___ Portugal.", answers:["au"], explain:"Pays masculin : au."},
    {type:"transform", lvl:1, instruction:"Remplacez « la boulangerie » par « le boulanger ».", prompt:"Je vais à la boulangerie.", answers:["Je vais chez le boulanger."], explain:"Lieu → à ; personne ou professionnel → chez."},
    {type:"order", lvl:1, words:["à","va","l’école","Elle","pied","à"], answers:["Elle va à l’école à pied.","Elle va à pied à l’école."], explain:"à + lieu ; à pied."},
    {type:"fix", lvl:2, prompt:"J’ai un rendez-vous au dentiste.", answers:["J’ai un rendez-vous chez le dentiste."], explain:"Pour un professionnel : chez le dentiste."},
    {type:"fix", lvl:2, prompt:"Nous sommes allés en Canada l’été dernier.", answers:["Nous sommes allés au Canada l’été dernier."], explain:"Canada est masculin : au Canada."},
    {type:"transform", lvl:2, instruction:"Remplacez « Espagne » par « Mexique ».", prompt:"Elle travaille en Espagne.", answers:["Elle travaille au Mexique."], explain:"Mexique est masculin, malgré le -e final : au Mexique."},
    {type:"order", lvl:2, words:["de","en","pharmacie","face","La","est","gare","la"], answers:["La pharmacie est en face de la gare.","La gare est en face de la pharmacie."], explain:"en face de + nom."},
    {type:"mcq", lvl:3, prompt:"J’ai lu cette information ___ un réseau social.", choices:["sur","dans","à"], answer:0, explain:"Sur + réseau social, forum, site, internet."},
    {type:"fill", lvl:3, prompt:"Il sort ___ chez le médecin avec une ordonnance.", answers:["de"], explain:"Provenance : de + chez (de chez le médecin)."}
  ]
}});
B.grammarMore=Object.assign(B.grammarMore||{},{g33:[
  {type:"mcq", lvl:1, prompt:"Nous partons ___ Italie en juillet.", choices:["en","au","à"], answer:0, explain:"Pays féminin : en."},
  {type:"mcq", lvl:1, prompt:"Je prends rendez-vous ___ le coiffeur.", choices:["chez","à","au"], answer:0, explain:"Pour un professionnel : chez."},
  {type:"mcq", lvl:1, prompt:"Les clés sont ___ la table.", choices:["sur","dans","à"], answer:0, explain:"Une surface : sur."},
  {type:"mcq", lvl:1, prompt:"Mon frère vit ___ États-Unis.", choices:["aux","en","dans les"], answer:0, explain:"Pays pluriel : aux."},
  {type:"fill", lvl:1, prompt:"Le samedi, je vais au marché ___ vélo.", answers:["à"], explain:"On est sur le vélo : à vélo."},
  {type:"fill", lvl:1, prompt:"Le chat dort ___ le salon.", answers:["dans"], explain:"À l’intérieur d’une pièce : dans."},
  {type:"fill", lvl:1, prompt:"J’habite ___ Marseille depuis trois ans.", answers:["à"], explain:"Devant une ville : à."},
  {type:"fix", lvl:1, prompt:"Je vais en pied au travail.", answers:["Je vais à pied au travail.","Je vais au travail à pied."], explain:"On dit à pied."},
  {type:"fix", lvl:1, prompt:"Elle est née en Maroc.", answers:["Elle est née au Maroc."], explain:"Maroc est masculin : au Maroc."},
  {type:"transform", lvl:1, instruction:"Remplacez « mes parents » par « moi ».", prompt:"Ce soir, je reste chez mes parents.", answers:["Ce soir, je reste chez moi."], explain:"Chez + pronom tonique : chez moi."},
  {type:"order", lvl:1, words:["Japon","au","part","Il","demain"], answers:["Il part au Japon demain.","Demain, il part au Japon.","Il part demain au Japon."], explain:"Pays masculin : au Japon."},
  {type:"mcq", lvl:2, prompt:"On se retrouve ___ la poste ?", choices:["devant","en face","à côté"], answer:0, explain:"Devant + nom, sans de ; mais en face de, à côté de."},
  {type:"mcq", lvl:2, prompt:"Il y a des travaux ___ ma rue.", choices:["dans","sur","à"], answer:0, explain:"Pour la rue : dans la rue."},
  {type:"mcq", lvl:2, prompt:"J’ai entendu l’interview ___ radio.", choices:["à la","sur la","dans la"], answer:0, explain:"À la radio, à la télévision."},
  {type:"fill", lvl:2, prompt:"Le bus 38 ? Je suis déjà ___ le bus.", answers:["dans"], explain:"Avec un article : dans le bus (en bus = le moyen de transport)."},
  {type:"fill", lvl:2, prompt:"Elle revient ___ Japon la semaine prochaine.", answers:["du"], explain:"Provenance d’un pays masculin : du."},
  {type:"fill", lvl:2, prompt:"Il y a une boulangerie au ___ de la rue.", answers:["coin"], hint:"à l’angle", explain:"Au coin de la rue = à l’angle (au bout de la rue = à l’autre extrémité)."},
  {type:"fix", lvl:2, prompt:"J’ai vu l’annonce dans le site de la mairie.", answers:["J’ai vu l’annonce sur le site de la mairie."], explain:"Un site internet : sur."},
  {type:"fix", lvl:2, prompt:"Il travaille chez la banque.", answers:["Il travaille à la banque.","Il travaille dans une banque.","Il travaille dans la banque."], explain:"Un lieu : à la banque (dans la banque = dans le secteur bancaire) ; chez s’emploie avec une personne ou un nom d’entreprise (chez Renault)."},
  {type:"transform", lvl:2, instruction:"Remplacez « en voiture » par le vélo.", prompt:"Je vais au travail en voiture.", answers:["Je vais au travail à vélo."], explain:"On est sur le vélo : à vélo."},
  {type:"transform", lvl:2, instruction:"Indiquez la provenance : remplacez « Je vais » par « Je reviens ».", prompt:"Je vais chez le pharmacien.", answers:["Je reviens de chez le pharmacien."], explain:"Provenance : de + chez."},
  {type:"order", lvl:2, words:["côté","à","du","musée","J’habite"], answers:["J’habite à côté du musée."], explain:"À côté de + le → à côté du."},
  {type:"mcq", lvl:3, prompt:"Ils passent leurs vacances ___ Corse.", choices:["en","à la","au"], answer:0, explain:"Région ou grande île féminine : en Corse."},
  {type:"fill", lvl:3, prompt:"Il est parti ___ Havre pour prendre le bateau.", answers:["au"], explain:"Ville avec article (Le Havre) : à + le → au Havre."},
  {type:"fill", lvl:3, prompt:"Mes cousins vivent ___ Pays-Bas.", answers:["aux"], explain:"Pays pluriel : aux."},
  {type:"fix", lvl:3, prompt:"Je l’ai acheté en un magasin du centre.", answers:["Je l’ai acheté dans un magasin du centre."], explain:"Devant un article, on emploie dans (en + nom sans article)."},
  {type:"transform", lvl:3, instruction:"Remplacez « en ville » par « le centre-ville ».", prompt:"Je fais mes courses en ville.", answers:["Je fais mes courses dans le centre-ville.","Je fais mes courses au centre-ville."], explain:"En + nom sans article ; avec l’article : dans le centre-ville ou au centre-ville."},
  {type:"order", lvl:3, words:["sur","l’ai","trouvé","Je","internet"], answers:["Je l’ai trouvé sur internet."], explain:"Sur internet."}
]});
})();
