/* g35 — Les adverbes en -ment : formation et place (card, lesson, 12 practice, 28 bank questions) */
(()=>{const B=window.TEF_BANK=window.TEF_BANK||{};
(B.grammar=B.grammar||[]).push({
  id:"g35", section:"Les déterminants et accords", order:22, title:"Les adverbes en -ment : formation et place", status:"untested",
  short:"Féminin de l’adjectif + -ment (lente → lentement) ; -ant → -amment, -ent → -emment ; j’ai bien compris.",
  details:"On forme la plupart des adverbes en ajoutant -ment au féminin de l’adjectif : lent → lente → lentement, heureux → heureuse → heureusement. Si l’adjectif masculin se termine par une voyelle, on ajoute -ment au masculin : vrai → vraiment, poli → poliment. Les adjectifs en -ant et -ent donnent -amment et -emment (courant → couramment, évident → évidemment). Quelques irréguliers : bon → bien, mauvais → mal, gentil → gentiment, bref → brièvement, précis → précisément. L’adverbe se place après le verbe conjugué ; aux temps composés, les adverbes courts vont entre l’auxiliaire et le participe.",
  examples:["Parlez lentement, s’il vous plaît.","Il parle couramment trois langues.","Évidemment, nous vous rembourserons.","J’ai bien compris la consigne."],
  mistakes:[
    {wrong:"Il conduit très prudent.", right:"Il conduit très prudemment.", why:"Pour modifier un verbe, on emploie l’adverbe : prudent → prudemment."},
    {wrong:"Elle parle courament anglais.", right:"Elle parle couramment anglais.", why:"-ant → -amment, avec deux m."},
    {wrong:"J’ai compris bien.", right:"J’ai bien compris.", why:"Aux temps composés, les adverbes courts se placent entre l’auxiliaire et le participe."},
    {wrong:"Il travaille bon.", right:"Il travaille bien.", why:"Bon est un adjectif ; l’adverbe correspondant est bien."}
  ],
  drill:{prompt:"Complète : Il a répondu très ___ .", choices:["poli","poliment","polie","polimment"], answer:1}
});
B.grammarPlus=Object.assign(B.grammarPlus||{},{g35:{
  intro:"Les adverbes rendent vos productions plus précises et plus nuancées (heureusement, réellement, malheureusement) : à l’écrit B et à l’oral B, ils structurent l’argumentation. Leur orthographe (-amment / -emment) et leur place au passé composé sont des points de correction fréquents.",
  rule:[
    "Règle générale : féminin de l’adjectif + -ment : lent → lente → lentement ; heureux → heureuse → heureusement ; actif → active → activement.",
    "Adjectif masculin terminé par une voyelle (-ai, -é, -i, -u) : masculin + -ment : vrai → vraiment, aisé → aisément, poli → poliment, absolu → absolument.",
    "Adjectifs en -ant → -amment, en -ent → -emment (prononcés de la même façon) : courant → couramment, constant → constamment ; évident → évidemment, récent → récemment, prudent → prudemment. Exception : lent → lentement.",
    "Formes particulières : bon → bien, mauvais → mal, meilleur → mieux, gentil → gentiment, bref → brièvement ; quelques adverbes en -ément : précis → précisément, énorme → énormément, profond → profondément.",
    "Adjectif ou adverbe ? L’adjectif qualifie un nom (une réponse rapide) ; l’adverbe modifie un verbe, un adjectif ou un autre adverbe (il répond rapidement ; très rapide). Après être, sembler, devenir : l’adjectif (elle est rapide).",
    "Place : après le verbe conjugué (Il parle lentement). Aux temps composés, les adverbes courts et fréquents (bien, mal, déjà, souvent, beaucoup, vraiment, toujours) se placent entre l’auxiliaire et le participe (J’ai bien compris ; il a souvent travaillé le dimanche) ; les adverbes longs en -ment vont plutôt après le participe (Il a répondu rapidement).",
    "Adverbes de phrase, en tête et suivis d’une virgule, pour commenter : Heureusement, …, Malheureusement, …, Évidemment, …, Finalement, …, Actuellement, … (= currently)."
  ],
  table:{head:["Adjectif","Règle","Adverbe"],rows:[
    ["lent → lente","féminin + -ment","lentement"],
    ["sérieux → sérieuse","féminin + -ment","sérieusement"],
    ["vrai, poli, absolu","masculin + -ment (voyelle finale)","vraiment, poliment, absolument"],
    ["courant, constant","-ant → -amment","couramment, constamment"],
    ["évident, récent, prudent","-ent → -emment","évidemment, récemment, prudemment"],
    ["précis, énorme, profond","-ément","précisément, énormément, profondément"],
    ["bon, mauvais, gentil, bref","formes particulières","bien, mal, gentiment, brièvement"]
  ]},
  tips:[
    "-amment et -emment se prononcent de la même façon : seule l’orthographe de l’adjectif (courant / évident) dit s’il faut a ou e.",
    "Faux amis : actuellement = currently (« actually » = en fait) ; éventuellement = possibly (« eventually » = finalement).",
    "Variez les adverbes de phrase à l’écrit B : heureusement, malheureusement, finalement, personnellement.",
    "Pas de « très beaucoup » : dites beaucoup ou vraiment beaucoup."
  ],
  examples:[
    {fr:"Remplissez soigneusement le formulaire.", en:"Fill in the form carefully.", note:"soigneuse + -ment."},
    {fr:"Elle parle couramment l’arabe et l’anglais.", en:"She speaks Arabic and English fluently.", note:"-ant → -amment."},
    {fr:"Récemment, les prix de l’énergie ont augmenté.", en:"Recently, energy prices have gone up.", note:"-ent → -emment."},
    {fr:"Heureusement, le bus est arrivé à l’heure.", en:"Fortunately, the bus arrived on time."},
    {fr:"Je n’ai pas bien entendu votre nom.", en:"I didn’t hear your name properly.", note:"Adverbe court entre l’auxiliaire et le participe."},
    {fr:"Actuellement, je travaille à temps partiel.", en:"I currently work part-time.", note:"Actuellement = currently."},
    {fr:"Il a répondu poliment à toutes les questions.", en:"He answered all the questions politely."},
    {fr:"Les loyers ont énormément augmenté dans ce quartier.", en:"Rents have gone up enormously in this area."}
  ],
  summary:[
    "Féminin + -ment (lentement) ; voyelle finale : masculin + -ment (vraiment).",
    "-ant → -amment ; -ent → -emment.",
    "Bon → bien, mauvais → mal ; précis → précisément.",
    "Temps composés : j’ai bien compris (adverbe court entre l’auxiliaire et le participe)."
  ],
  practice:[
    {type:"mcq", lvl:1, prompt:"Conduisez ___ , la route est glissante.", choices:["prudemment","prudent","prudamment"], answer:0, explain:"Prudent (-ent) → prudemment."},
    {type:"mcq", lvl:1, prompt:"Il parle ___ français.", choices:["bien","bon","bonne"], answer:0, explain:"Avec un verbe, l’adverbe : bien (bon est un adjectif)."},
    {type:"fill", lvl:1, prompt:"Parlez plus ___ , s’il vous plaît.", answers:["lentement"], hint:"lent", explain:"lente + -ment."},
    {type:"fill", lvl:1, prompt:"Le dossier est ___ complet.", answers:["vraiment"], hint:"vrai", explain:"Adjectif terminé par une voyelle : vrai → vraiment."},
    {type:"transform", lvl:1, instruction:"Remplacez « de façon rapide » par un adverbe.", prompt:"Il a répondu de façon rapide.", answers:["Il a répondu rapidement."], explain:"rapide + -ment."},
    {type:"order", lvl:1, words:["bien","J’ai","dormi","très"], answers:["J’ai très bien dormi."], explain:"Adverbe court entre l’auxiliaire et le participe."},
    {type:"fix", lvl:2, prompt:"Elle a évidament raison.", answers:["Elle a évidemment raison."], explain:"Évident (-ent) → évidemment."},
    {type:"fix", lvl:2, prompt:"Nous avons mangé bien.", answers:["Nous avons bien mangé."], explain:"Bien se place entre l’auxiliaire et le participe."},
    {type:"transform", lvl:2, instruction:"Remplacez « d’une manière constante » par un adverbe.", prompt:"Les prix augmentent d’une manière constante.", answers:["Les prix augmentent constamment."], explain:"Constant (-ant) → constamment."},
    {type:"order", lvl:2, words:["déjà","a","Il","payé","facture","la"], answers:["Il a déjà payé la facture."], explain:"Déjà entre l’auxiliaire et le participe."},
    {type:"mcq", lvl:3, prompt:"___ , je travaille dans une banque, mais je cherche autre chose.", choices:["Actuellement","Éventuellement","Finalement"], answer:0, explain:"Actuellement = currently ; éventuellement = possibly."},
    {type:"fill", lvl:3, prompt:"Les ventes ont ___ baissé cette année.", answers:["énormément"], hint:"énorme", explain:"Énorme → énormément (-ément)."}
  ]
}});
B.grammarMore=Object.assign(B.grammarMore||{},{g35:[
  {type:"mcq", lvl:1, prompt:"Elle chante très ___ .", choices:["mal","mauvais","mauvaise"], answer:0, explain:"Avec un verbe, l’adverbe : mal (mauvais est un adjectif)."},
  {type:"mcq", lvl:1, prompt:"Ils ont ___ accepté notre proposition.", choices:["finalement","final","finale"], answer:0, explain:"Pour modifier le verbe : l’adverbe finalement."},
  {type:"mcq", lvl:1, prompt:"Fermez la porte ___ , le bébé dort.", choices:["doucement","doux","douce"], answer:0, explain:"douce + -ment."},
  {type:"mcq", lvl:1, prompt:"Il est ___ malade.", choices:["gravement","grave","gravemment"], answer:0, explain:"Pour modifier un adjectif : l’adverbe gravement."},
  {type:"fill", lvl:1, prompt:"Il fait ___ ses devoirs.", answers:["sérieusement"], hint:"sérieux", explain:"sérieuse + -ment."},
  {type:"fill", lvl:1, prompt:"Elle m’a ___ aidé.", answers:["gentiment"], hint:"gentil", explain:"Gentil → gentiment (forme particulière)."},
  {type:"fill", lvl:1, prompt:"Répondez ___ aux questions.", answers:["simplement"], hint:"simple", explain:"simple + -ment."},
  {type:"fix", lvl:1, prompt:"Il marche rapide.", answers:["Il marche rapidement."], explain:"Avec un verbe, l’adverbe : rapidement."},
  {type:"fix", lvl:1, prompt:"Elle a fait ce travail parfaitemment.", answers:["Elle a fait ce travail parfaitement."], explain:"parfaite + -ment : un seul m."},
  {type:"transform", lvl:1, instruction:"Remplacez « avec patience » par un adverbe.", prompt:"Elle explique avec patience.", answers:["Elle explique patiemment."], explain:"Patient (-ent) → patiemment."},
  {type:"order", lvl:1, words:["souvent","au","Nous","allons","cinéma"], answers:["Nous allons souvent au cinéma.","Souvent, nous allons au cinéma."], explain:"L’adverbe suit le verbe conjugué."},
  {type:"mcq", lvl:2, prompt:"Il a ___ réussi son examen.", choices:["brillamment","brillament","brillemment"], answer:0, explain:"Brillant (-ant) → brillamment."},
  {type:"mcq", lvl:2, prompt:"Nous avons ___ reçu votre demande.", choices:["bien","bon","bonne"], answer:0, explain:"Adverbe bien, entre l’auxiliaire et le participe."},
  {type:"mcq", lvl:2, prompt:"Les prix ont ___ augmenté.", choices:["énormément","énormement","énorme"], answer:0, explain:"Énorme → énormément."},
  {type:"fill", lvl:2, prompt:"Il a ___ quitté la salle.", answers:["brusquement"], hint:"brusque", explain:"brusque + -ment."},
  {type:"fill", lvl:2, prompt:"Je l’ai vu ___ .", answers:["récemment"], hint:"récent", explain:"Récent (-ent) → récemment."},
  {type:"fill", lvl:2, prompt:"Elle s’exprime ___ .", answers:["aisément"], hint:"aisé", explain:"Adjectif en -é : aisé + -ment."},
  {type:"fix", lvl:2, prompt:"J’ai vu souvent ce film.", answers:["J’ai souvent vu ce film."], explain:"Adverbe court entre l’auxiliaire et le participe."},
  {type:"fix", lvl:2, prompt:"Il parle couramment l’anglais et très bon l’espagnol.", answers:["Il parle couramment l’anglais et très bien l’espagnol."], explain:"Avec le verbe parler, l’adverbe : bien."},
  {type:"transform", lvl:2, instruction:"Remplacez « de manière prudente » par un adverbe.", prompt:"Il a agi de manière prudente.", answers:["Il a agi prudemment."], explain:"Prudent (-ent) → prudemment."},
  {type:"transform", lvl:2, instruction:"Mettez la phrase au passé composé.", prompt:"Je comprends bien la question.", answers:["J’ai bien compris la question."], explain:"Bien se place entre l’auxiliaire et le participe."},
  {type:"order", lvl:2, words:["Heureusement","pas","n’a","plu","il"], answers:["Heureusement, il n’a pas plu.","Il n’a heureusement pas plu."], explain:"Adverbe de phrase en tête, suivi d’une virgule."},
  {type:"mcq", lvl:3, prompt:"Nous pourrions ___ décaler la réunion à jeudi.", choices:["éventuellement","actuellement","eventuellement"], answer:0, explain:"Éventuellement = possibly (avec un é)."},
  {type:"fill", lvl:3, prompt:"Il a ___ décrit la situation.", answers:["brièvement"], hint:"bref", explain:"Bref → brièvement (forme particulière)."},
  {type:"fill", lvl:3, prompt:"Je vous remercie ___ .", answers:["profondément"], hint:"profond", explain:"Profond → profondément (-ément)."},
  {type:"fix", lvl:3, prompt:"Le directeur nous a reçus très gentilment.", answers:["Le directeur nous a reçus très gentiment."], explain:"Gentil → gentiment (sans l)."},
  {type:"transform", lvl:3, instruction:"Remplacez « avec précision » par un adverbe.", prompt:"Indiquez avec précision vos dates de disponibilité.", answers:["Indiquez précisément vos dates de disponibilité."], explain:"Précis → précisément (-ément)."},
  {type:"order", lvl:3, words:["répondu","m’a","Il","immédiatement"], answers:["Il m’a répondu immédiatement.","Il m’a immédiatement répondu."], explain:"Les adverbes longs vont plutôt après le participe."}
]});
})();
