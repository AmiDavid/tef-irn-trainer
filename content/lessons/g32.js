/* g32 — Les verbes pronominaux (card, lesson, 12 practice, 28 bank questions) */
(()=>{const B=window.TEF_BANK=window.TEF_BANK||{};
(B.grammar=B.grammar||[]).push({
  id:"g32", section:"Les temps", order:11, title:"Les verbes pronominaux : se lever, se souvenir, s’en aller", status:"untested",
  short:"Je me, tu te, il se, nous nous, vous vous, ils se ; être au passé composé ; sens réfléchi, réciproque, passif ou idiomatique.",
  details:"Un verbe pronominal se conjugue avec un pronom de la même personne que le sujet : je me lève, nous nous levons. Le pronom se place devant le verbe (ou l’auxiliaire), y compris à la négation (je ne me lève pas) et devant un infinitif (je vais me lever) ; seule exception : l’impératif affirmatif (lève-toi). Au passé composé, l’auxiliaire est être : je me suis levé(e). Le sens peut être réfléchi (se laver), réciproque (se téléphoner), passif (ce plat se mange froid) ou idiomatique (se souvenir, s’en aller).",
  examples:["Je me lève à six heures en semaine.","Nous nous voyons le vendredi.","Elle s’est inscrite à la salle de sport.","Je ne me souviens pas de son nom."],
  mistakes:[
    {wrong:"Je lève à sept heures.", right:"Je me lève à sept heures.", why:"Se lever est pronominal : le pronom me est obligatoire."},
    {wrong:"Nous se voyons demain.", right:"Nous nous voyons demain.", why:"Le pronom suit la personne du sujet : nous nous."},
    {wrong:"Je me suis habillé, puis je suis brossé les dents.", right:"Je me suis habillé, puis je me suis brossé les dents.", why:"Chaque verbe pronominal garde son pronom."},
    {wrong:"Je vais se reposer.", right:"Je vais me reposer.", why:"Devant un infinitif, le pronom correspond au sujet : je vais me reposer."}
  ],
  drill:{prompt:"Complète : Nous ___ souvent au café du coin.", choices:["se retrouvons","nous retrouvons","retrouvons-nous","nous retrouver"], answer:1}
});
B.grammarPlus=Object.assign(B.grammarPlus||{},{g32:{
  intro:"Les verbes pronominaux sont partout dans la vie quotidienne (se lever, s’inscrire, s’occuper de, se renseigner) et dans les textes administratifs (« le dossier se compose de… »). Un pronom oublié ou à la mauvaise personne (« nous se… ») est une erreur très visible, à l’écrit comme à l’oral.",
  rule:[
    "Le pronom change avec le sujet : je me, tu te, il / elle / on se, nous nous, vous vous, ils / elles se. Me, te, se deviennent m’, t’, s’ devant une voyelle ou un h muet : je m’habille, il s’inscrit.",
    "Place : devant le verbe conjugué ou l’auxiliaire, y compris à la négation (Je ne me souviens pas ; je ne me suis pas réveillé). Devant un infinitif, le pronom correspond au sujet : Je vais me coucher ; nous devons nous inscrire. À l’inversion : Vous souvenez-vous… ? Vous êtes-vous inscrit ?",
    "Aux temps composés, toujours être : je me suis levé(e), ils se sont inscrits. Le participe s’accorde avec le sujet si le pronom est COD (elle s’est levée), pas s’il est COI ou si un COD suit (ils se sont parlé ; elle s’est lavé les mains).",
    "Donc pas d’accord avec se parler, se téléphoner, se dire, s’écrire, se sourire, se plaire (on parle à quelqu’un : COI). Les verbes toujours pronominaux ou de sens idiomatique s’accordent avec le sujet (elles se sont souvenues, ils se sont plaints), sauf se rendre compte, où compte est un COD placé après : elle s’est rendu compte.",
    "Impératif : Lève-toi ! Asseyez-vous ! ; à la forme négative : Ne te lève pas ! Ne vous asseyez pas !",
    "Quatre sens : réfléchi, l’action revient sur le sujet (je me lave) ; réciproque, les uns les autres (ils se téléphonent) ; passif, avec une chose pour sujet (ce plat se mange froid ; ça ne se fait pas) ; verbes qui n’existent qu’au pronominal ou changent de sens (se souvenir de, s’en aller, se rendre compte de, s’occuper de, se tromper).",
    "Parties du corps : l’article défini suffit : Je me brosse les dents ; il s’est cassé la jambe (pas « mes dents », « sa jambe »)."
  ],
  table:{head:["Personne","Présent","Passé composé"],rows:[
    ["je","je me lève","je me suis levé(e)"],
    ["tu","tu te lèves","tu t’es levé(e)"],
    ["il / elle / on","il se lève","il s’est levé / elle s’est levée"],
    ["nous","nous nous levons","nous nous sommes levé(e)s"],
    ["vous","vous vous levez","vous vous êtes levé(e)(s)"],
    ["ils / elles","ils se lèvent","ils se sont levés / elles se sont levées"]
  ]},
  tables:[
    {title:"Verbes pronominaux fréquents", head:["Verbe","Sens","Exemple"], rows:[
      ["se souvenir de","to remember","Je me souviens de cette rue."],
      ["s’occuper de","to take care of","Elle s’occupe des inscriptions."],
      ["se rendre compte de / que","to realise","Je me suis rendu compte de mon erreur."],
      ["s’en aller","to leave, go away","Il s’en va à midi."],
      ["se renseigner sur","to find out about","Renseignez-vous sur les horaires."],
      ["s’inscrire à","to register for","Je me suis inscrit à un cours."],
      ["se tromper de","to get the wrong…","Je me suis trompé de bus."],
      ["se plaindre de","to complain about","Les voisins se plaignent du bruit."],
      ["s’habituer à","to get used to","Je m’habitue à mon nouveau travail."],
      ["se servir de","to use","Tu te sers de cette application ?"]
    ]}
  ],
  tips:[
    "Le pronom et le sujet vont ensemble : nous nous, vous vous. « Nous se… » est toujours faux.",
    "Avec on, le pronom est se : On se voit demain ? On s’appelle ce soir.",
    "S’en aller : je m’en vais ; à l’impératif, va-t’en ! allez-vous-en ! ; au passé composé : je m’en suis allé(e).",
    "Le sens passif est fréquent dans les consignes et les médias : « Ce médicament se prend le matin », « Le formulaire se télécharge en ligne »."
  ],
  examples:[
    {fr:"Je me réveille à six heures, mais je me lève à six heures et demie.", en:"I wake up at six, but I get up at half past six."},
    {fr:"Nous nous sommes rencontrés à la fac.", en:"We met at university.", note:"Réciproque ; être au passé composé, accord avec nous."},
    {fr:"Est-ce que tu te souviens du nom de la rue ?", en:"Do you remember the name of the street?", note:"Se souvenir de."},
    {fr:"Ne vous inquiétez pas, je m’occupe de tout.", en:"Don’t worry, I’ll take care of everything."},
    {fr:"Ce médicament se prend avant les repas.", en:"This medicine is taken before meals.", note:"Sens passif."},
    {fr:"Elle s’est trompée de numéro.", en:"She dialled the wrong number.", note:"Se tromper de ; accord avec elle."},
    {fr:"Je vais me renseigner à la mairie.", en:"I’m going to find out at the town hall.", note:"Devant l’infinitif : me, comme le sujet je."},
    {fr:"Les enfants se sont lavé les mains avant de manger.", en:"The children washed their hands before eating.", note:"COD placé après (les mains) : pas d’accord."}
  ],
  summary:[
    "Je me, tu te, il se, nous nous, vous vous, ils se (m’, t’, s’ devant une voyelle).",
    "Négation et infinitif : je ne me… pas ; je vais me…",
    "Passé composé avec être : accord avec le sujet, sauf COI ou COD placé après.",
    "Réfléchi, réciproque, passif, ou idiomatique (se souvenir, s’en aller)."
  ],
  practice:[
    {type:"mcq", lvl:1, prompt:"Tu ___ à quelle heure le matin ?", choices:["te lèves","se lèves","lèves"], answer:0, explain:"Avec tu, le pronom est te : tu te lèves."},
    {type:"mcq", lvl:1, prompt:"Mes parents et moi, nous ___ tous les dimanches.", choices:["nous appelons","se appelons","appelons-nous"], answer:0, explain:"Réciproque avec nous : nous nous appelons."},
    {type:"fill", lvl:1, prompt:"Je ___ appelle Sophie.", answers:["m’"], hint:"s’appeler, je", explain:"me devient m’ devant une voyelle : je m’appelle."},
    {type:"fill", lvl:1, prompt:"Vous ___ reposez ce week-end ?", answers:["vous"], explain:"Avec vous, le pronom est vous : vous vous reposez."},
    {type:"transform", lvl:1, instruction:"Mettez la phrase à la forme négative avec « ne… pas ».", prompt:"Je me souviens de son adresse.", answers:["Je ne me souviens pas de son adresse."], explain:"Le pronom reste collé au verbe : ne me souviens pas."},
    {type:"order", lvl:1, words:["nous","Nous","demain","voyons"], answers:["Nous nous voyons demain.","Demain, nous nous voyons."], explain:"Sujet nous + pronom nous + verbe."},
    {type:"fix", lvl:2, prompt:"Elle s’a inscrite au club.", answers:["Elle s’est inscrite au club."], explain:"Les verbes pronominaux se conjuguent avec être : elle s’est inscrite."},
    {type:"fix", lvl:2, prompt:"Nous allons se renseigner demain.", answers:["Nous allons nous renseigner demain."], explain:"Devant l’infinitif, le pronom correspond au sujet : nous allons nous…"},
    {type:"transform", lvl:2, instruction:"Mettez la phrase au passé composé.", prompt:"Elles se promènent au bord de la mer.", answers:["Elles se sont promenées au bord de la mer."], explain:"Être + participe accordé avec elles."},
    {type:"order", lvl:2, words:["Je","suis","me","trompé","de","porte"], answers:["Je me suis trompé de porte."], explain:"Pronom + être + participe : je me suis trompé de…"},
    {type:"mcq", lvl:3, prompt:"Ils se sont ___ pendant des heures.", choices:["téléphoné","téléphonés","téléphonées"], answer:0, explain:"On téléphone à quelqu’un : se est COI, pas d’accord."},
    {type:"fill", lvl:3, prompt:"Ce vin ___ boit frais.", answers:["se"], explain:"Sens passif : ce vin se boit frais (= on le boit frais)."}
  ]
}});
B.grammarMore=Object.assign(B.grammarMore||{},{g32:[
  {type:"mcq", lvl:1, prompt:"Je ___ à 23 heures en semaine.", choices:["me couche","couche","se couche"], answer:0, explain:"Se coucher avec je : je me couche."},
  {type:"mcq", lvl:1, prompt:"Vous ___ comment ?", choices:["vous appelez","appelez","s’appelez"], answer:0, explain:"Avec vous : vous vous appelez."},
  {type:"mcq", lvl:1, prompt:"Mon fils ___ seul le matin.", choices:["s’habille","se habille","habille"], answer:0, explain:"se devient s’ devant une voyelle ou un h muet."},
  {type:"mcq", lvl:1, prompt:"Nous ___ au parc le dimanche.", choices:["nous promenons","promenons","se promenons"], answer:0, explain:"Avec nous : nous nous promenons."},
  {type:"fill", lvl:1, prompt:"Tu ___ souviens de Marc ?", answers:["te"], explain:"Avec tu : tu te souviens."},
  {type:"fill", lvl:1, prompt:"Ils ___ disputent souvent pour le ménage.", answers:["se"], explain:"Sens réciproque avec ils : ils se disputent."},
  {type:"fill", lvl:1, prompt:"Je ___ intéresse à la politique locale.", answers:["m’"], explain:"me devient m’ devant une voyelle : je m’intéresse."},
  {type:"fix", lvl:1, prompt:"Je promène le dimanche.", answers:["Je me promène le dimanche."], explain:"Sans complément, on dit se promener : je me promène."},
  {type:"fix", lvl:1, prompt:"Vous se levez tôt ?", answers:["Vous vous levez tôt ?"], explain:"Avec vous, le pronom est vous : vous vous levez."},
  {type:"transform", lvl:1, instruction:"Mettez la phrase à la forme négative avec « ne… pas ».", prompt:"Il se rase le matin.", answers:["Il ne se rase pas le matin."], explain:"ne + pronom + verbe + pas."},
  {type:"order", lvl:1, words:["me","Je","dépêche","toujours"], answers:["Je me dépêche toujours."], explain:"Sujet + pronom + verbe : je me dépêche."},
  {type:"mcq", lvl:2, prompt:"Elle s’est ___ à huit heures.", choices:["réveillée","réveillé","réveillés"], answer:0, explain:"Le pronom est COD (réveiller quelqu’un) : accord avec elle."},
  {type:"mcq", lvl:2, prompt:"Nous allons ___ souvenir longtemps de ce voyage.", choices:["nous","se","vous"], answer:0, explain:"Devant l’infinitif, le pronom correspond au sujet nous."},
  {type:"mcq", lvl:2, prompt:"Cette expression ne ___ plus.", choices:["s’utilise","utilise","s’utilisent"], answer:0, explain:"Sens passif, sujet singulier : cette expression s’utilise."},
  {type:"fill", lvl:2, prompt:"Je ne ___ rends pas compte du temps qui passe.", answers:["me"], explain:"Se rendre compte, avec je : je ne me rends pas compte."},
  {type:"fill", lvl:2, prompt:"Ma voisine s’occupe ___ mon chat pendant les vacances.", answers:["de"], explain:"S’occuper de quelqu’un ou de quelque chose."},
  {type:"fill", lvl:2, prompt:"Ils se sont ___ dans le métro.", answers:["rencontrés"], hint:"se rencontrer", explain:"Réciproque, pronom COD (rencontrer quelqu’un) : accord avec ils."},
  {type:"fix", lvl:2, prompt:"Elle s’est lavée les cheveux.", answers:["Elle s’est lavé les cheveux."], explain:"Le COD (les cheveux) est placé après : pas d’accord."},
  {type:"fix", lvl:2, prompt:"Nous nous sommes parlés hier.", answers:["Nous nous sommes parlé hier."], explain:"On parle à quelqu’un : le pronom est COI, pas d’accord."},
  {type:"transform", lvl:2, instruction:"Mettez la phrase au passé composé.", prompt:"Je m’inscris au cours du soir.", answers:["Je me suis inscrit au cours du soir.","Je me suis inscrite au cours du soir."], explain:"Être + participe accordé avec je (inscrit ou inscrite)."},
  {type:"transform", lvl:2, instruction:"Mettez la phrase à l’impératif (vous).", prompt:"Vous vous asseyez.", answers:["Asseyez-vous.","Assoyez-vous."], explain:"Impératif affirmatif : le pronom passe après le verbe."},
  {type:"order", lvl:2, words:["ne","Je","souviens","m’en","plus"], answers:["Je ne m’en souviens plus."], explain:"ne + m’ + en + verbe + plus."},
  {type:"mcq", lvl:3, prompt:"Les deux ministres se sont ___ la main.", choices:["serré","serrés","serrées"], answer:0, explain:"Le COD (la main) est placé après : pas d’accord."},
  {type:"fill", lvl:3, prompt:"Va-t’___ ! Tu vas être en retard.", answers:["en"], explain:"S’en aller à l’impératif : va-t’en."},
  {type:"fill", lvl:3, prompt:"Elle s’est rendu ___ de son erreur trop tard.", answers:["compte"], explain:"Se rendre compte de : compte est le COD, placé après, donc rendu ne s’accorde pas."},
  {type:"fix", lvl:3, prompt:"Les étudiants se sont plaint du bruit.", answers:["Les étudiants se sont plaints du bruit."], explain:"Se plaindre (= protester) est un pronominal de sens idiomatique (plaindre quelqu’un = avoir pitié de lui) : accord avec le sujet."},
  {type:"transform", lvl:3, instruction:"Remplacez « on » par une forme pronominale de sens passif.", prompt:"On vend ce produit en pharmacie.", answers:["Ce produit se vend en pharmacie."], explain:"Sens passif : la chose devient sujet + se + verbe."},
  {type:"order", lvl:3, words:["vous","Ne","pas","asseyez","ici"], answers:["Ne vous asseyez pas ici."], explain:"Impératif négatif : ne + vous + verbe + pas."}
]});
})();
