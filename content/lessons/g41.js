/* g41 — Le passé simple : le reconnaître dans les textes (card, lesson, 12 practice, 28 bank questions) */
(()=>{const B=window.TEF_BANK=window.TEF_BANK||{};
(B.grammar=B.grammar||[]).push({
  id:"g41", section:"Les temps", order:82, title:"Le passé simple : le reconnaître dans les textes", status:"untested",
  short:"Le temps du récit écrit (romans, histoire, presse) : il parla, il finit, il fut, il eut, ils firent. À reconnaître, surtout à la 3e personne.",
  details:"Le passé simple est le temps du récit à l’écrit (romans, biographies, articles historiques). À l’oral et dans vos productions, on emploie le passé composé. Il faut surtout le reconnaître à la 3e personne : verbes en -er → -a, -èrent (il parla, ils parlèrent) ; la plupart des verbes en -ir, beaucoup de verbes en -re et voir → -it, -irent (il finit, ils prirent, il vit) ; d’autres → -ut, -urent (il fut, il eut, il put, ils voulurent, il mourut) ; venir et tenir → il vint, ils vinrent.",
  examples:["Victor Hugo naquit à Besançon en 1802.","Elle ouvrit la porte et entra.","Ils furent surpris par la nouvelle.","Le roi mourut sans héritier."],
  mistakes:[
    {wrong:"Hier, j’allai au cinéma avec mes amis.", right:"Hier, je suis allé au cinéma avec mes amis.", why:"À l’oral et dans un message, surtout avec « hier », on emploie le passé composé, pas le passé simple."},
    {wrong:"Il finissa son travail.", right:"Il finit son travail.", why:"Verbes en -ir : il finit, ils finirent (-a seulement pour les verbes en -er)."},
    {wrong:"Ils parlirent longtemps.", right:"Ils parlèrent longtemps.", why:"Verbes en -er : ils parlèrent."}
  ],
  drill:{prompt:"« Il fut » est le passé simple de quel verbe ?", choices:["être","faire","falloir","fuir"], answer:0}
});
B.grammarPlus=Object.assign(B.grammarPlus||{},{g41:{
  intro:"Au TEF, le passé simple peut apparaître dans les textes de compréhension écrite (récits, biographies, articles historiques). Vous n’avez pas besoin de l’employer, mais vous devez le reconnaître immédiatement pour comprendre qui a fait quoi : « il fit », « ils vinrent », « elle sut ».",
  rule:[
    "Emploi : le récit écrit au passé (littérature, histoire, presse). Même valeur que le passé composé (action terminée) ; il alterne avec l’imparfait (décor, description). À l’oral et dans vos courriels, utilisez le passé composé.",
    "Verbes en -er (et aller) : -ai, -as, -a, -âmes, -âtes, -èrent : il parla, elle alla, ils arrivèrent.",
    "La plupart des verbes en -ir (finir, partir, ouvrir), beaucoup de verbes en -re (prendre, mettre, dire, faire, écrire) et voir, s’asseoir : -is, -is, -it, -îmes, -îtes, -irent : il finit, il prit, elle mit, il dit, ils firent, elle écrivit, il vit, elle s’assit.",
    "Les autres verbes en -oir (avoir, pouvoir, vouloir, savoir, devoir, recevoir) et quelques autres (être, courir, mourir, lire, connaître, vivre…) : -us, -us, -ut, -ûmes, -ûtes, -urent : il fut (être), il eut (avoir), il put, il voulut, il sut, il dut, il reçut, il lut, il connut, il vécut, il courut, il mourut.",
    "Venir, tenir et leurs composés : -ins, -ins, -int, -înmes, -întes, -inrent : il vint, ils revinrent, elle obtint. Naître : il naquit.",
    "Pièges de lecture : il fit (faire) ≠ il fut (être) ; il vit (voir) ≠ il vécut (vivre), mais au présent, il vit vient de vivre ; il finit, il dit ont la même forme au présent (le contexte dit le temps)."
  ],
  table:{head:["Infinitif","il / elle","ils / elles"],rows:[
    ["parler","il parla","ils parlèrent"],
    ["aller","il alla","ils allèrent"],
    ["finir","il finit","ils finirent"],
    ["prendre","il prit","ils prirent"],
    ["faire","il fit","ils firent"],
    ["dire","il dit","ils dirent"],
    ["être","il fut","ils furent"],
    ["avoir","il eut","ils eurent"],
    ["pouvoir","il put","ils purent"],
    ["voir","il vit","ils virent"],
    ["venir","il vint","ils vinrent"],
    ["naître","il naquit","ils naquirent"]
  ]},
  tips:[
    "Repérez la terminaison : -a / -èrent (verbes en -er), -it / -irent, -ut / -urent, -int / -inrent.",
    "Dans un récit, le passé simple fait avancer l’histoire, l’imparfait pose le décor : Il pleuvait quand il sortit.",
    "Ne l’utilisez pas dans vos productions du TEF : le passé composé est attendu, même à l’écrit B.",
    "Le passé antérieur (il eut fini, il fut parti) accompagne le passé simple après quand, dès que, après que : Dès qu’il eut fini, il partit.",
    "Avec un accent circonflexe, fût et eût sont des subjonctifs de l’écrit soutenu, pas des passés simples : bien qu’il fût malade ; il eût été préférable (= il aurait été préférable)."
  ],
  examples:[
    {fr:"Il ouvrit la lettre et lut les premières lignes.", en:"He opened the letter and read the first lines.", note:"ouvrir → il ouvrit ; lire → il lut."},
    {fr:"Marie Curie reçut le prix Nobel en 1903.", en:"Marie Curie received the Nobel Prize in 1903.", note:"recevoir → elle reçut."},
    {fr:"Les invités arrivèrent vers vingt heures.", en:"The guests arrived at around eight in the evening."},
    {fr:"Il faisait nuit quand ils quittèrent la ville.", en:"It was dark when they left the town.", note:"Imparfait (décor) + passé simple (action)."},
    {fr:"Elle naquit à Lyon et vécut à Paris.", en:"She was born in Lyon and lived in Paris."},
    {fr:"Le maire prit la parole et annonça sa démission.", en:"The mayor took the floor and announced his resignation."},
    {fr:"Ils firent le tour de l’Europe en un an.", en:"They travelled around Europe in a year.", note:"faire → ils firent."},
    {fr:"Ce fut une longue journée.", en:"It was a long day.", note:"être → ce fut."}
  ],
  summary:[
    "Temps du récit écrit ; à l’oral et dans vos textes : passé composé.",
    "Verbes en -er : il parla, ils parlèrent.",
    "-it / -irent (finir, prendre, faire) ; -ut / -urent (être, avoir, pouvoir).",
    "Il fit (faire) ≠ il fut (être) ; il vint (venir)."
  ],
  practice:[
    {type:"mcq", lvl:1, prompt:"« Elle parla » : passé simple du verbe ___.", choices:["parler","partir","paraître"], answer:0, explain:"-a : verbe en -er (parler)."},
    {type:"mcq", lvl:1, prompt:"« Ils firent » : passé simple du verbe ___.", choices:["faire","finir","fuir"], answer:0, explain:"Faire → il fit, ils firent."},
    {type:"fill", lvl:1, prompt:"Il ___ sans dire un mot.", answers:["sortit"], hint:"sortir, passé simple", explain:"Verbe en -ir : il sortit."},
    {type:"fill", lvl:1, prompt:"Ils ___ la ville à l’aube.", answers:["quittèrent"], hint:"quitter, passé simple", explain:"Verbe en -er : ils quittèrent."},
    {type:"order", lvl:1, words:["la","Il","ouvrit","porte"], answers:["Il ouvrit la porte."], explain:"Ouvrir → il ouvrit."},
    {type:"transform", lvl:2, instruction:"Mettez le verbe au passé composé (langue courante).", prompt:"Il prit le train de nuit.", answers:["Il a pris le train de nuit."], explain:"Il prit (passé simple) = il a pris (passé composé)."},
    {type:"transform", lvl:2, instruction:"Mettez les verbes au passé composé.", prompt:"Elle arriva et s’assit.", answers:["Elle est arrivée et s’est assise.","Elle est arrivée et elle s’est assise."], explain:"Arriver et s’asseoir se conjuguent avec être : accord avec elle."},
    {type:"fix", lvl:2, instruction:"Cette phrase contient une erreur : corrigez le verbe en gardant le passé simple.", prompt:"Ils prenèrent la route.", answers:["Ils prirent la route."], explain:"Prendre : il prit, ils prirent."},
    {type:"fix", lvl:2, instruction:"Cette phrase contient une erreur : corrigez le verbe en gardant le passé simple.", prompt:"Il venit me voir.", answers:["Il vint me voir."], explain:"Venir : il vint, ils vinrent."},
    {type:"order", lvl:2, words:["nuit","Il","faisait","quand","partit","il"], answers:["Il faisait nuit quand il partit.","Quand il partit, il faisait nuit."], explain:"Imparfait pour le décor, passé simple pour l’action."},
    {type:"mcq", lvl:3, prompt:"« Il vécut » : passé simple du verbe ___.", choices:["vivre","voir","vaincre"], answer:0, explain:"Vivre → il vécut (voir → il vit)."},
    {type:"fill", lvl:3, prompt:"Dès qu’il ___ fini, il rentra chez lui.", answers:["eut"], hint:"avoir, passé antérieur", explain:"Passé antérieur : eut fini (après dès que, avec un passé simple)."}
  ]
}});
B.grammarMore=Object.assign(B.grammarMore||{},{g41:[
  {type:"mcq", lvl:1, prompt:"« Elle eut » : passé simple du verbe ___.", choices:["avoir","être","aller"], answer:0, explain:"Avoir → il eut, ils eurent."},
  {type:"mcq", lvl:1, prompt:"« Ils allèrent » : passé simple du verbe ___.", choices:["aller","allumer","allonger"], answer:0, explain:"Aller → il alla, ils allèrent."},
  {type:"mcq", lvl:1, prompt:"« Je pris » : passé simple du verbe ___.", choices:["prendre","prier","priver"], answer:0, explain:"Prendre → je pris, il prit."},
  {type:"mcq", lvl:1, prompt:"« Elle vit » au passé simple : verbe ___.", choices:["voir","vivre","venir"], answer:0, explain:"Au passé simple, elle vit vient de voir (au présent, elle vit vient de vivre)."},
  {type:"fill", lvl:1, prompt:"Il ___ un grand sourire.", answers:["fit"], hint:"faire, passé simple", explain:"Faire → il fit."},
  {type:"fill", lvl:1, prompt:"Elle ___ dans un petit village.", answers:["naquit"], hint:"naître, passé simple", explain:"Naître → elle naquit."},
  {type:"fill", lvl:1, prompt:"Ils ___ très heureux.", answers:["furent"], hint:"être, passé simple", explain:"Être → il fut, ils furent."},
  {type:"fix", lvl:1, instruction:"Cette phrase contient une erreur : corrigez le verbe en gardant le passé simple.", prompt:"Il marcha et tomba, puis il se relevit.", answers:["Il marcha et tomba, puis il se releva."], explain:"Se relever est en -er : il se releva."},
  {type:"fix", lvl:1, instruction:"Cette phrase contient une erreur : corrigez le verbe en gardant le passé simple.", prompt:"Elle finissa son repas en silence.", answers:["Elle finit son repas en silence."], explain:"Finir : elle finit (-it)."},
  {type:"transform", lvl:1, instruction:"Mettez le verbe au passé composé.", prompt:"Il dit la vérité.", answers:["Il a dit la vérité."], explain:"Il dit (passé simple) = il a dit."},
  {type:"order", lvl:1, words:["Ils","longtemps","parlèrent","ensemble"], answers:["Ils parlèrent longtemps ensemble.","Ils parlèrent ensemble longtemps."], explain:"Verbe en -er : ils parlèrent."},
  {type:"mcq", lvl:2, prompt:"« Ils durent » : passé simple du verbe ___.", choices:["devoir","durer","dire"], answer:0, explain:"Devoir → il dut, ils durent (durer → ils durèrent)."},
  {type:"mcq", lvl:2, prompt:"« Il sut » : passé simple du verbe ___.", choices:["savoir","suivre","être"], answer:0, explain:"Savoir → il sut, ils surent."},
  {type:"mcq", lvl:2, prompt:"Soudain, nous ___ un grand bruit.", choices:["entendîmes","entendions","entendimes"], answer:0, explain:"Action soudaine dans un récit : passé simple ; nous → -îmes, avec l’accent."},
  {type:"fill", lvl:2, prompt:"Le président ___ la parole à midi.", answers:["prit"], hint:"prendre, passé simple", explain:"Prendre → il prit."},
  {type:"fill", lvl:2, prompt:"Elles ___ à Paris en 1990.", answers:["vinrent"], hint:"venir, passé simple", explain:"Venir → elles vinrent."},
  {type:"fill", lvl:2, prompt:"Il ___ ouvrir la porte sans clé.", answers:["put"], hint:"pouvoir, passé simple", explain:"Pouvoir → il put."},
  {type:"fix", lvl:2, instruction:"Cette phrase contient une erreur : corrigez le verbe en gardant le passé simple.", prompt:"Ils voulèrent partir.", answers:["Ils voulurent partir."], explain:"Vouloir : il voulut, ils voulurent."},
  {type:"fix", lvl:2, instruction:"Cette phrase contient une erreur : corrigez le verbe en gardant le passé simple.", prompt:"Elles entrirent dans la salle.", answers:["Elles entrèrent dans la salle."], explain:"Entrer est en -er : elles entrèrent."},
  {type:"transform", lvl:2, instruction:"Mettez les verbes au passé composé.", prompt:"Ils vinrent et repartirent.", answers:["Ils sont venus et repartis.","Ils sont venus et sont repartis.","Ils sont venus et ils sont repartis."], explain:"Venir et repartir se conjuguent avec être."},
  {type:"transform", lvl:2, instruction:"Mettez le verbe au passé simple (récit écrit).", prompt:"Elle a écrit une lettre.", answers:["Elle écrivit une lettre."], explain:"Écrire → elle écrivit."},
  {type:"order", lvl:2, words:["fit","Il","le","tour","monde","du"], answers:["Il fit le tour du monde."], explain:"Faire → il fit."},
  {type:"mcq", lvl:3, prompt:"Après qu’il ___ parti, la maison redevint calme.", choices:["fut","fût","fit"], answer:0, explain:"Après que + indicatif : passé antérieur (il fut parti) dans un récit au passé simple. Fût, avec l’accent, est un subjonctif."},
  {type:"fill", lvl:3, prompt:"Ce ___ une décision difficile.", answers:["fut"], hint:"être, passé simple", explain:"Être → ce fut."},
  {type:"fill", lvl:3, prompt:"Les habitants ___ leur village.", answers:["défendirent"], hint:"défendre, passé simple", explain:"Défendre → ils défendirent."},
  {type:"fix", lvl:3, prompt:"Il vu un homme étrange.", answers:["Il vit un homme étrange.","Il a vu un homme étrange."], explain:"Voir : il vit (passé simple) ou il a vu (passé composé) ; « vu » seul est le participe."},
  {type:"transform", lvl:3, instruction:"Mettez le verbe au passé composé.", prompt:"Elle naquit en 1950.", answers:["Elle est née en 1950."], explain:"Naître se conjugue avec être : elle est née."},
  {type:"order", lvl:3, words:["eut","Dès","qu’il","fini","partit","il"], answers:["Dès qu’il eut fini, il partit.","Il partit dès qu’il eut fini."], explain:"Passé antérieur après dès que, passé simple dans la principale."}
]});
})();
