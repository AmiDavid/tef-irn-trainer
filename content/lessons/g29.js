/* g29 — Les articles : le, un, du ou rien ? (card, lesson, 12 practice, 28 bank questions) */
(()=>{const B=window.TEF_BANK=window.TEF_BANK||{};
(B.grammar=B.grammar||[]).push({
  id:"g29", section:"Les déterminants et accords", order:4, title:"Les articles : le, un, du ou rien ?", status:"untested",
  short:"Le pour le connu et le général, un pour un élément parmi d’autres, du pour une quantité non comptée — et parfois pas d’article.",
  details:"On emploie l’article défini (le, la, les) pour une chose connue, unique ou générale, et après aimer, adorer, détester, préférer quand on parle d’un goût (mais j’aimerais un café = je voudrais). L’article indéfini (un, une, des) présente un élément parmi d’autres ; le partitif (du, de la, de l’) une quantité que l’on ne compte pas. Après une négation, l’article indéfini ou partitif d’un COD devient de, sauf avec être. Pas d’article devant une profession après être (il est médecin), mais c’est + un + nom (c’est un bon médecin).",
  examples:["Je bois du café le matin.","J’aime le café noir.","Elle est pharmacienne.","C’est une bonne idée."],
  mistakes:[
    {wrong:"J’aime du chocolat.", right:"J’aime le chocolat.", why:"Après aimer, adorer, détester, préférer : article défini."},
    {wrong:"Mon mari est un ingénieur.", right:"Mon mari est ingénieur.", why:"Profession après être : pas d’article (mais c’est un bon ingénieur)."},
    {wrong:"Je n’ai pas une voiture.", right:"Je n’ai pas de voiture.", why:"Après une négation, un / une / des deviennent de."},
    {wrong:"Il est un bon médecin.", right:"C’est un bon médecin.", why:"Devant un déterminant + nom, on emploie c’est, pas il est."}
  ],
  drill:{prompt:"Complète : Le matin, je bois ___ café.", choices:["le","du","de la","de"], answer:1}
});
B.grammarPlus=Object.assign(B.grammarPlus||{},{g29:{
  intro:"Le choix de l’article est une source d’erreurs typique chez les anglophones : « J’aime le café » mais « Je bois du café », « Il est médecin » sans article. Ces erreurs reviennent dans chaque production écrite et orale du TEF et se voient tout de suite.",
  rule:[
    "Article défini (le, la, l’, les) : une chose connue ou unique (la mairie de mon quartier, le soleil) et les généralités (Les enfants ont besoin de sommeil).",
    "Les verbes de goût (aimer, adorer, détester, préférer) prennent l’article défini quand on parle d’un goût en général : J’aime le café ; elle déteste la pluie. Mais j’aimerais (= je voudrais) se construit comme vouloir : J’aimerais un café ; je voudrais du pain.",
    "Article indéfini (un, une, des) : un élément parmi d’autres, que l’on peut compter : J’ai un rendez-vous ; il y a des travaux dans la rue. À l’écrit, des devient de devant un adjectif placé avant le nom : de bons amis, de nouvelles règles.",
    "Article partitif (du, de la, de l’) : une quantité non comptée d’une chose qu’on ne compte pas : Je bois du café ; il faut de la patience ; il y a de l’eau par terre. Après un verbe construit avec de (avoir besoin de, manquer de), le partitif disparaît : J’ai besoin d’aide.",
    "Après une négation, l’article indéfini ou partitif (un, une, des, du, de la, de l’) d’un COD, ou après il n’y a pas, devient de / d’ : Je n’ai pas de voiture. Mais l’article reste avec être (ce n’est pas un problème), avec ne… que (je ne bois que du thé) et après une préposition (je ne travaille pas dans une banque). L’article défini, lui, ne change pas : Je n’aime pas le café.",
    "Pas d’article : profession, nationalité ou religion après être ou devenir (Il est infirmier ; elle est devenue avocate) ; après en (en voiture, en hiver) ; dans un nom + de + nom (un professeur de français, un jus d’orange).",
    "C’est / il est : c’est + déterminant + nom ou nom propre (C’est un bon médecin ; c’est ma voisine ; c’est Julie), au pluriel ce sont (Ce sont mes collègues) ; il / elle est + adjectif, ou + profession sans article (Elle est sympathique ; il est médecin).",
    "Pour juger une idée : c’est + adjectif au masculin (Paris, c’est cher). Devant de + infinitif, l’écrit soutenu préfère il est : Il est difficile de trouver un logement. Mais quand ce reprend la chose dont on parle (le COD de l’infinitif) : c’est + adjectif + à + infinitif, sans autre complément : Ce formulaire ? C’est facile à remplir.",
    "Jours : le lundi = tous les lundis (Le lundi, je travaille) ; lundi = un lundi précis, le prochain ou le dernier (Lundi, j’ai rendez-vous). Parties du corps : article défini, pas de possessif, avec un verbe pronominal et avec avoir mal à (Je me lave les mains ; j’ai mal à la tête)."
  ],
  table:{head:["Article","Quand ?","Exemple"],rows:[
    ["le, la, l’, les","chose connue, unique ou générale ; goûts","J’aime le thé. Le maire a parlé."],
    ["un, une, des","un élément parmi d’autres (comptable)","J’ai un rendez-vous ; des amis sont venus."],
    ["du, de la, de l’","quantité non comptée","Je bois du thé ; il faut de la patience."],
    ["de / d’","après une négation ou une quantité ; des + adjectif + nom (écrit)","Je n’ai pas de rendez-vous ; beaucoup de patience ; de bons amis."],
    ["pas d’article","profession après être ; en + nom ; nom + de + nom","Il est architecte ; en train ; un billet de train."]
  ]},
  tables:[
    {title:"C’est ou il est ?", head:["Structure","Emploi","Exemple"], rows:[
      ["c’est + déterminant + nom","présenter, identifier","C’est un bon dentiste. C’est ma sœur."],
      ["c’est + pronom","identifier une personne","C’est lui. C’est quelqu’un de sérieux."],
      ["il / elle est + adjectif","décrire une personne ou une chose précise","Elle est très compétente."],
      ["il / elle est + profession, nationalité","sans article","Il est pharmacien. Elle est italienne."],
      ["c’est + adjectif masculin","juger une idée, une situation","Paris, c’est cher. C’est vrai !"],
      ["il est + adjectif + de + infinitif","écrit soutenu (oral : c’est… de)","Il est important de répondre vite."],
      ["c’est + adjectif + à + infinitif","ce = la chose dont on parle (rien après l’infinitif)","Ce formulaire ? C’est facile à remplir."]
    ]}
  ],
  tips:[
    "Piège anglais : « I like coffee » n’a pas d’article, mais le français dit J’aime le café ; « I drink coffee » → Je bois du café.",
    "Avec un adjectif, la profession reprend un article et c’est : Il est médecin, mais c’est un bon médecin.",
    "Nom + de + nom sans article = une catégorie (une carte de crédit, un cours d’anglais) ; avec l’article = une chose précise (le cours du professeur Martin).",
    "Négation : seuls un, une, des et les partitifs deviennent de. Je ne mange pas de viande, mais je n’aime pas la viande."
  ],
  examples:[
    {fr:"J’aime beaucoup le fromage, mais je n’en mange pas tous les jours.", en:"I really like cheese, but I don’t eat it every day.", note:"Goût → article défini."},
    {fr:"Le matin, je bois du thé et je mange des céréales.", en:"In the morning I drink tea and eat cereal."},
    {fr:"Mon frère est infirmier dans un hôpital de Lille.", en:"My brother is a nurse in a hospital in Lille.", note:"Profession après être : pas d’article."},
    {fr:"C’est un quartier calme, mais il n’y a pas de boulangerie.", en:"It’s a quiet area, but there’s no bakery."},
    {fr:"Je n’aime pas les embouteillages, alors je vais au travail à vélo.", en:"I don’t like traffic jams, so I cycle to work.", note:"Négation + verbe de goût : l’article défini reste."},
    {fr:"Il faut du courage et de la patience pour apprendre une langue.", en:"Learning a language takes courage and patience."},
    {fr:"Le samedi, nous faisons les courses au marché.", en:"On Saturdays we do the shopping at the market.", note:"le samedi = tous les samedis."},
    {fr:"Il est difficile de trouver un logement en centre-ville.", en:"It is difficult to find accommodation in the city centre.", note:"Écrit soutenu : il est + adjectif + de + infinitif."}
  ],
  summary:[
    "Le / la / les : connu, unique, général, et après aimer, détester, préférer.",
    "Un / une / des : un élément parmi d’autres ; du / de la : une quantité non comptée.",
    "Négation → de (sauf avec être) ; l’article défini ne change pas.",
    "Il est médecin, mais c’est un bon médecin."
  ],
  practice:[
    {type:"mcq", lvl:1, prompt:"Elle déteste ___ chats.", choices:["des","les","de"], answer:1, explain:"Après détester (verbe de goût) : article défini."},
    {type:"mcq", lvl:1, prompt:"Au petit déjeuner, je mange ___ pain grillé.", choices:["le","du","de"], answer:1, explain:"Une quantité non comptée de pain : partitif du."},
    {type:"fill", lvl:1, prompt:"Il n’y a plus ___ lait dans le frigo.", answers:["de"], explain:"Après une négation (ne… plus), du devient de."},
    {type:"fill", lvl:1, prompt:"J’ai ___ rendez-vous chez le dentiste demain.", answers:["un"], hint:"article", explain:"Un rendez-vous parmi d’autres : article indéfini."},
    {type:"order", lvl:1, words:["pas","n’aime","le","Il","thé"], answers:["Il n’aime pas le thé."], explain:"Avec un verbe de goût, l’article défini reste à la négation."},
    {type:"fix", lvl:2, prompt:"Ma sœur est une avocate à Lyon.", answers:["Ma sœur est avocate à Lyon."], explain:"Profession après être : pas d’article."},
    {type:"fix", lvl:2, prompt:"Je ne bois jamais du alcool.", answers:["Je ne bois jamais d’alcool."], explain:"Après ne… jamais, du devient de (d’ devant une voyelle)."},
    {type:"transform", lvl:2, instruction:"Mettez la phrase à la forme négative avec « ne… pas ».", prompt:"J’ai des enfants.", answers:["Je n’ai pas d’enfants.","Je n’ai pas d’enfant."], explain:"Après la négation, des devient de (d’ devant une voyelle)."},
    {type:"transform", lvl:2, instruction:"Ajoutez l’adjectif « excellent » (attention à la structure).", prompt:"Il est cuisinier.", answers:["C’est un excellent cuisinier.","C’est un cuisinier excellent."], explain:"Profession + adjectif : c’est un… (et non il est)."},
    {type:"order", lvl:2, words:["de","professeur","est","mathématiques","Elle"], answers:["Elle est professeur de mathématiques."], explain:"Profession après être sans article ; nom + de + nom sans article."},
    {type:"mcq", lvl:3, prompt:"___ important de bien relire votre dossier avant de l’envoyer.", choices:["Il est","Elle est","C’est un"], answer:0, explain:"Écrit soutenu : il est + adjectif + de + infinitif."},
    {type:"fill", lvl:3, prompt:"Je me suis cassé ___ jambe au ski.", answers:["la","une"], explain:"Partie du corps avec un verbe pronominal : article défini (la jambe ; une jambe est aussi possible), jamais le possessif « ma jambe »."}
  ]
}});
B.grammarMore=Object.assign(B.grammarMore||{},{g29:[
  {type:"mcq", lvl:1, prompt:"J’adore ___ musique classique.", choices:["de la","la","une"], answer:1, explain:"Après adorer (goût) : article défini."},
  {type:"mcq", lvl:1, prompt:"Quand il fait chaud, je bois ___ eau.", choices:["de l’","l’","d’"], answer:0, explain:"Quantité non comptée : partitif, de l’ devant une voyelle."},
  {type:"mcq", lvl:1, prompt:"Il y a ___ boulangerie au coin de la rue.", choices:["la","une","de la"], answer:1, explain:"Un commerce parmi d’autres, que l’on peut compter : une."},
  {type:"mcq", lvl:1, prompt:"Mon père est ___.", choices:["boulanger","un boulanger","du boulanger"], answer:0, explain:"Profession après être : pas d’article."},
  {type:"fill", lvl:1, prompt:"Je mets ___ sucre dans mon café.", answers:["du"], hint:"quantité non comptée", explain:"Une quantité de sucre qu’on ne compte pas : partitif du."},
  {type:"fill", lvl:1, prompt:"Nous n’avons pas ___ voiture.", answers:["de"], hint:"après la négation", explain:"Après une négation, une devient de."},
  {type:"fill", lvl:1, prompt:"J’ai acheté ___ pommes au marché.", answers:["des"], hint:"article indéfini pluriel", explain:"Des pommes, en nombre non précisé : article indéfini des."},
  {type:"fix", lvl:1, prompt:"J’aime du football.", answers:["J’aime le football."], explain:"Après aimer : article défini."},
  {type:"fix", lvl:1, prompt:"Elle est une infirmière.", answers:["Elle est infirmière.","C’est une infirmière."], explain:"Profession après être : pas d’article (ou bien c’est + une + nom : C’est une infirmière)."},
  {type:"transform", lvl:1, instruction:"Mettez la phrase à la forme négative avec « ne… pas ».", prompt:"Il boit du vin.", answers:["Il ne boit pas de vin."], explain:"Après la négation, du devient de."},
  {type:"order", lvl:1, words:["un","J’ai","demain","entretien"], answers:["J’ai un entretien demain.","Demain, j’ai un entretien.","J’ai demain un entretien."], explain:"Un entretien parmi d’autres : article indéfini."},
  {type:"mcq", lvl:2, prompt:"Je n’aime pas ___ bruit.", choices:["de","le","du"], answer:1, explain:"Verbe de goût : l’article défini reste à la négation."},
  {type:"mcq", lvl:2, prompt:"C’est ___ excellente idée !", choices:["une","la","de l’"], answer:0, explain:"c’est + un / une + nom pour présenter."},
  {type:"mcq", lvl:2, prompt:"___ une personne très patiente.", choices:["Il est","C’est","Elle est"], answer:1, explain:"Devant un déterminant + nom : c’est."},
  {type:"fill", lvl:2, prompt:"Il faut ___ courage pour changer de métier.", answers:["du"], hint:"article", explain:"Une qualité en quantité non comptée : du courage."},
  {type:"fill", lvl:2, prompt:"___ dimanche, les magasins sont souvent fermés.", answers:["Le"], hint:"tous les dimanches", explain:"le + jour = chaque semaine."},
  {type:"fill", lvl:2, prompt:"Je voudrais un billet ___ train pour Lyon.", answers:["de"], explain:"Nom + de + nom (catégorie) : pas d’article."},
  {type:"fix", lvl:2, prompt:"Je ne mange pas du poisson.", answers:["Je ne mange pas de poisson."], explain:"Après la négation, du devient de."},
  {type:"fix", lvl:2, prompt:"Il est un collègue très sympathique.", answers:["C’est un collègue très sympathique."], explain:"Devant un déterminant + nom : c’est, pas il est."},
  {type:"transform", lvl:2, instruction:"Mettez la phrase à la forme négative avec « ne… pas ».", prompt:"Nous avons des questions.", answers:["Nous n’avons pas de questions.","Nous n’avons pas de question."], explain:"Après la négation, des devient de."},
  {type:"transform", lvl:2, instruction:"Remplacez « adore » par « bois ».", prompt:"J’adore le jus d’orange.", answers:["Je bois du jus d’orange."], explain:"Goût → article défini ; consommer une quantité → partitif."},
  {type:"order", lvl:2, words:["vais","en","Je","travail","au","voiture"], answers:["Je vais au travail en voiture.","Je vais en voiture au travail."], explain:"en + moyen de transport, sans article ; au = à + le."},
  {type:"mcq", lvl:3, prompt:"Le directeur ? ___ quelqu’un de très exigeant.", choices:["Il est","C’est","Elle est"], answer:1, explain:"Devant un pronom (quelqu’un) : c’est."},
  {type:"fill", lvl:3, prompt:"Elle s’est brûlé ___ main en cuisinant.", answers:["la"], explain:"Partie du corps avec un verbe pronominal : article défini, pas de possessif."},
  {type:"fill", lvl:3, prompt:"Ce n’est pas ___ problème.", answers:["un"], hint:"article indéfini", explain:"Avec être, l’article indéfini reste après la négation."},
  {type:"fix", lvl:3, prompt:"C’est difficile à trouver un logement à Paris.", answers:["C’est difficile de trouver un logement à Paris.","Il est difficile de trouver un logement à Paris."], explain:"L’infinitif a son complément (trouver un logement) : c’est / il est + adjectif + de ; à seulement quand ce reprend la chose (Un logement à Paris ? C’est difficile à trouver)."},
  {type:"transform", lvl:3, instruction:"Réécrivez la phrase en registre soutenu avec « Il est ».", prompt:"C’est indispensable de prendre rendez-vous.", answers:["Il est indispensable de prendre rendez-vous."], explain:"Écrit soutenu : il est + adjectif + de + infinitif."},
  {type:"order", lvl:3, words:["samedi","Le","je","matin","travaille"], answers:["Le samedi matin, je travaille.","Je travaille le samedi matin."], explain:"le samedi = tous les samedis."}
]});
})();
