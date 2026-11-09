/* g34 — Exprimer la durée : depuis, il y a, pendant, dans, en (card, lesson, 12 practice, 28 bank questions) */
(()=>{const B=window.TEF_BANK=window.TEF_BANK||{};
(B.grammar=B.grammar||[]).push({
  id:"g34", section:"Les prépositions", order:19, title:"Exprimer la durée : depuis, il y a, pendant, dans, en", status:"untested",
  short:"Depuis + présent (ça continue), il y a + passé (= ago), pendant (durée), dans (= in, futur), en (temps nécessaire).",
  details:"Depuis + date ou durée indique une situation commencée dans le passé qui continue : J’habite ici depuis 2020 / depuis trois ans (présent). Il y a + durée situe une action passée (= ago) : Je suis arrivé il y a trois ans. Pendant mesure une durée (J’ai travaillé là pendant deux ans). Dans + durée situe une action future à partir de maintenant (Je pars dans une semaine). En + durée indique le temps nécessaire pour faire quelque chose (J’ai fait le trajet en vingt minutes). Pour + durée exprime une durée prévue (Je pars pour un mois).",
  examples:["J’apprends le français depuis deux ans.","Je suis arrivé en France il y a cinq ans.","Le train part dans dix minutes.","J’ai lu ce livre en une semaine."],
  mistakes:[
    {wrong:"Je connais Marie pour trois ans.", right:"Je connais Marie depuis trois ans.", why:"Une situation qui a commencé dans le passé et continue : depuis + présent."},
    {wrong:"J’ai commencé ce travail depuis un mois.", right:"J’ai commencé ce travail il y a un mois.", why:"Commencer est une action ponctuelle : il y a + durée (= ago)."},
    {wrong:"Je pars en vacances en deux jours.", right:"Je pars en vacances dans deux jours.", why:"Un moment futur à partir de maintenant : dans + durée."},
    {wrong:"J’ai attendu depuis une heure.", right:"J’attends depuis une heure.", why:"Avec depuis, l’action continue : présent (si c’est fini : j’ai attendu pendant une heure)."}
  ],
  drill:{prompt:"Complète : J’apprends le français ___ deux ans.", choices:["depuis","il y a","dans","en"], answer:0}
});
B.grammarPlus=Object.assign(B.grammarPlus||{},{g34:{
  intro:"Dire depuis quand, combien de temps, quand : c’est indispensable pour parler de votre parcours (« J’habite en France depuis… », « Je suis arrivé il y a… ») à l’oral comme dans les écrits du TEF. Les confusions depuis / il y a / pendant / dans sont parmi les erreurs les plus fréquentes des anglophones (for, since, ago, in).",
  rule:[
    "Depuis + durée ou date : une situation qui a commencé dans le passé et continue maintenant → présent : J’habite ici depuis trois ans / depuis 2021 (= for / since). Dans un récit au passé : depuis + imparfait (J’habitais à Lyon depuis deux ans quand j’ai trouvé ce poste).",
    "Il y a + durée : un moment du passé (= ago) → temps du passé : Je suis arrivé il y a trois ans.",
    "Il y a… que, ça fait… que (à l’écrit : cela fait… que), voilà… que + présent = depuis, en tête de phrase : Il y a trois ans que j’habite ici ; ça fait une heure que j’attends. Avec une action ponctuelle, passé composé : ça fait trois mois que j’ai déménagé (= j’ai déménagé il y a trois mois).",
    "Pendant (soutenu : durant) + durée : la durée d’une action, passée, présente ou future : J’ai vécu à Lille pendant cinq ans ; je serai absent pendant une semaine. Devant une durée, pendant peut souvent disparaître : J’ai attendu deux heures.",
    "Dans + durée : un moment futur, compté à partir de maintenant (= in) : Le bus arrive dans cinq minutes ; je pars dans une semaine.",
    "En + durée : le temps nécessaire pour faire quelque chose : J’ai écrit ce rapport en deux heures. En + mois, année ou saison : en mai, en 2019, en été (mais au printemps).",
    "Pour + durée : une durée prévue, avec partir, venir, aller, être là : Je pars à Londres pour un mois.",
    "Autres repères : depuis que + verbe conjugué (depuis que je travaille ici) ≠ pendant que (= while) ; à partir de, à compter de + date (= starting from) ; d’ici + date ou durée (= by, within) ; jusqu’à (= until) ; de… à… (de 9 heures à 17 heures) ; au bout de + durée (= after : au bout de dix minutes, il est parti)."
  ],
  table:{head:["Expression","Sens","Temps","Exemple"],rows:[
    ["depuis","since / for (ça continue)","présent (récit : imparfait)","Je travaille ici depuis mai."],
    ["il y a","ago","passé","Je suis arrivé il y a deux ans."],
    ["ça fait / il y a… que","for (en tête de phrase)","présent","Ça fait un an que je cherche."],
    ["pendant","for, during (une durée)","tous les temps","J’ai dormi pendant huit heures."],
    ["dans","in (un moment futur)","futur, présent","Je reviens dans dix minutes."],
    ["en","in (le temps nécessaire)","tous les temps","Il a fini en une heure."],
    ["pour","for (durée prévue)","avec partir, venir, aller","Elle part pour six mois."]
  ]},
  tips:[
    "Anglais « for » : depuis si ça continue (I’ve lived here for 3 years → j’habite ici depuis 3 ans) ; pendant si c’est fini (I lived there for 3 years → j’y ai habité pendant 3 ans) ; pour avec partir (I’m going for 3 days → je pars pour 3 jours).",
    "Dans ≠ en : je finis dans une heure (le moment où je finirai) / je finis en une heure (le temps que ça me prend).",
    "Depuis + passé composé : à la forme négative (Je ne l’ai pas vu depuis des mois) et quand le participe décrit un état qui dure (Il est parti depuis une heure = il est absent depuis une heure).",
    "Depuis quand… ? demande le début ; depuis combien de temps… ? demande la durée : Depuis combien de temps habitez-vous ici ?",
    "Dans et il y a se comptent à partir de maintenant. Dans un récit au passé : deux jours plus tard ou au bout de deux jours (pas dans) ; deux jours plus tôt ou avant (pas il y a)."
  ],
  examples:[
    {fr:"J’habite en France depuis 2019.", en:"I’ve lived in France since 2019.", note:"Situation qui continue : présent."},
    {fr:"Nous avons déménagé il y a six mois.", en:"We moved six months ago."},
    {fr:"Ça fait deux heures que je vous attends !", en:"I’ve been waiting for you for two hours!"},
    {fr:"Pendant les vacances, la médiathèque ferme à 17 heures.", en:"During the holidays, the media library closes at 5 pm."},
    {fr:"Votre carte sera prête dans trois semaines.", en:"Your card will be ready in three weeks."},
    {fr:"Il a appris à conduire en deux mois.", en:"He learned to drive in two months.", note:"Temps nécessaire : en."},
    {fr:"Je pars au Canada pour un an.", en:"I’m going to Canada for a year."},
    {fr:"Je ne l’ai pas vue depuis notre dernier rendez-vous.", en:"I haven’t seen her since our last meeting."}
  ],
  summary:[
    "Depuis + présent : ça continue.",
    "Il y a + passé : ago.",
    "Pendant : une durée ; dans : un moment futur ; en : le temps nécessaire.",
    "Pour : une durée prévue (partir pour un mois)."
  ],
  practice:[
    {type:"mcq", lvl:1, prompt:"J’ai déménagé à Nantes ___ trois ans.", choices:["il y a","depuis","dans"], answer:0, explain:"Une action passée, datée par rapport à maintenant : il y a (= ago)."},
    {type:"mcq", lvl:1, prompt:"Le film commence ___ dix minutes, dépêche-toi !", choices:["dans","en","il y a"], answer:0, explain:"Un moment futur à partir de maintenant : dans."},
    {type:"fill", lvl:1, prompt:"J’étudie le français ___ deux ans.", answers:["depuis"], hint:"ça continue", explain:"Une situation qui continue : depuis + présent."},
    {type:"fill", lvl:1, prompt:"Hier, j’ai attendu le bus ___ quarante minutes.", answers:["pendant","durant"], explain:"La durée d’une action terminée : pendant."},
    {type:"transform", lvl:1, instruction:"Reformulez avec « depuis ».", prompt:"Ça fait un an que je travaille ici.", answers:["Je travaille ici depuis un an.","Depuis un an, je travaille ici."], explain:"Ça fait… que + présent = présent + depuis."},
    {type:"order", lvl:1, words:["dans","Je","heure","reviens","une"], answers:["Je reviens dans une heure.","Dans une heure, je reviens."], explain:"Un moment futur : dans une heure."},
    {type:"fix", lvl:2, prompt:"Je vis à Paris pour cinq ans déjà.", answers:["Je vis à Paris depuis cinq ans déjà.","Je vis à Paris depuis déjà cinq ans."], explain:"Une situation qui continue : depuis (pour = une durée prévue)."},
    {type:"fix", lvl:2, prompt:"Il a fini le marathon dans quatre heures.", answers:["Il a fini le marathon en quatre heures."], explain:"Le temps nécessaire pour faire quelque chose : en."},
    {type:"transform", lvl:2, instruction:"Reformulez avec « il y a… que ».", prompt:"J’attends ma réponse depuis trois semaines.", answers:["Il y a trois semaines que j’attends ma réponse."], explain:"Il y a + durée + que + présent = depuis."},
    {type:"order", lvl:2, words:["pour","part","Elle","Japon","au","mois","un"], answers:["Elle part au Japon pour un mois.","Elle part pour un mois au Japon."], explain:"Durée prévue avec partir : pour."},
    {type:"mcq", lvl:3, prompt:"Je ne l’ai pas revu ___ son départ.", choices:["depuis","il y a","pendant"], answer:0, explain:"Négation au passé composé + depuis : la situation dure encore."},
    {type:"fill", lvl:3, prompt:"___ que je travaille de nuit, je dors mal.", answers:["Depuis"], hint:"= since", explain:"Depuis que + verbe conjugué."}
  ]
}});
B.grammarMore=Object.assign(B.grammarMore||{},{g34:[
  {type:"mcq", lvl:1, prompt:"J’ai obtenu mon diplôme ___ cinq ans.", choices:["il y a","depuis","pendant"], answer:0, explain:"Un moment du passé (= ago) : il y a."},
  {type:"mcq", lvl:1, prompt:"Je connais Paul ___ l’école primaire.", choices:["depuis","il y a","pour"], answer:0, explain:"Une situation qui continue depuis un point de départ : depuis."},
  {type:"mcq", lvl:1, prompt:"Nous partons en vacances ___ une semaine.", choices:["dans","en","il y a"], answer:0, explain:"Un moment futur à partir de maintenant : dans."},
  {type:"mcq", lvl:1, prompt:"J’ai fait ce gâteau ___ trente minutes.", choices:["en","dans","depuis"], answer:0, explain:"Le temps nécessaire : en."},
  {type:"fill", lvl:1, prompt:"Ils sont mariés ___ dix ans.", answers:["depuis"], hint:"ça continue", explain:"Une situation qui continue : depuis + présent."},
  {type:"fill", lvl:1, prompt:"J’ai vécu en Espagne ___ deux ans, puis je suis rentré.", answers:["pendant","durant"], explain:"La durée d’une période terminée : pendant."},
  {type:"fill", lvl:1, prompt:"Le médecin arrive ___ cinq minutes.", answers:["dans"], hint:"moment futur", explain:"Un moment futur proche : dans."},
  {type:"fix", lvl:1, prompt:"J’ai acheté cette voiture depuis un an.", answers:["J’ai acheté cette voiture il y a un an.","J’ai cette voiture depuis un an."], explain:"Acheter est une action ponctuelle : il y a ; ou bien la situation qui continue : j’ai cette voiture depuis un an."},
  {type:"fix", lvl:1, prompt:"Le train part en cinq minutes, dépêche-toi !", answers:["Le train part dans cinq minutes, dépêche-toi !"], explain:"Un moment futur à partir de maintenant : dans."},
  {type:"transform", lvl:1, instruction:"Reformulez avec « ça fait… que ».", prompt:"J’attends depuis vingt minutes.", answers:["Ça fait vingt minutes que j’attends.","Cela fait vingt minutes que j’attends."], explain:"Ça fait + durée + que + présent."},
  {type:"order", lvl:1, words:["il","Je","l’ai","semaine","vu","y","a","une"], answers:["Je l’ai vu il y a une semaine.","Il y a une semaine, je l’ai vu."], explain:"Il y a + durée avec un temps du passé."},
  {type:"mcq", lvl:2, prompt:"___ combien de temps connaissez-vous votre voisin ?", choices:["Depuis","Pendant","Il y a"], answer:0, explain:"Une durée qui continue : depuis combien de temps… + présent."},
  {type:"mcq", lvl:2, prompt:"Je vais à Berlin ___ trois jours pour le travail.", choices:["pour","depuis","il y a"], answer:0, explain:"Une durée prévue avec aller ou partir : pour."},
  {type:"mcq", lvl:2, prompt:"___ deux ans que je cherche un appartement.", choices:["Ça fait","Depuis","Pendant"], answer:0, explain:"Ça fait + durée + que + présent."},
  {type:"fill", lvl:2, prompt:"Le bureau est ouvert ___ 9 heures à 17 heures.", answers:["de"], explain:"Une période avec un début et une fin : de… à…"},
  {type:"fill", lvl:2, prompt:"Je n’ai pas pris de vacances ___ deux ans.", answers:["depuis"], hint:"ça continue", explain:"Négation au passé composé + depuis : la situation dure encore."},
  {type:"fill", lvl:2, prompt:"Nous avons visité le musée ___ deux heures.", answers:["en"], hint:"temps nécessaire", explain:"Le temps nécessaire pour faire la visite : en."},
  {type:"fix", lvl:2, prompt:"Pendant que j’habite ici, je n’ai jamais vu de neige.", answers:["Depuis que j’habite ici, je n’ai jamais vu de neige."], explain:"Une situation qui a commencé et continue : depuis que."},
  {type:"fix", lvl:2, prompt:"J’ai travaillé dans cette entreprise depuis 2015 à 2020.", answers:["J’ai travaillé dans cette entreprise de 2015 à 2020."], explain:"Une période terminée, avec un début et une fin : de… à…"},
  {type:"transform", lvl:2, instruction:"Reformulez avec « il y a » (= ago), sans « que ».", prompt:"Ça fait trois mois que j’ai déménagé.", answers:["J’ai déménagé il y a trois mois.","Il y a trois mois, j’ai déménagé."], explain:"Une action ponctuelle passée : il y a + durée."},
  {type:"transform", lvl:2, instruction:"Mettez la phrase au passé composé : la période est terminée.", prompt:"Je travaille ici depuis trois ans.", answers:["J’ai travaillé ici pendant trois ans.","J’ai travaillé ici trois ans.","J’ai travaillé ici durant trois ans."], explain:"Période terminée : passé composé + pendant (pendant peut disparaître)."},
  {type:"order", lvl:2, words:["été","en","partons","Nous","Grèce","en"], answers:["Nous partons en Grèce en été.","En été, nous partons en Grèce.","Nous partons en été en Grèce."], explain:"En + pays féminin ; en + saison (en été)."},
  {type:"mcq", lvl:3, prompt:"Le projet doit être terminé ___ la fin du mois.", choices:["d’ici","depuis","il y a"], answer:0, explain:"D’ici + date : avant cette date (= by)."},
  {type:"fill", lvl:3, prompt:"Il y a deux jours ___ je ne dors plus.", answers:["que"], explain:"Il y a + durée + que + présent."},
  {type:"fill", lvl:3, prompt:"___ du 1er janvier, ce service sera payant.", answers:["À partir","À compter"], hint:"= starting from", explain:"À partir de (ou à compter de) + date : starting from."},
  {type:"fix", lvl:3, prompt:"Je ne l’ai pas vu il y a des mois.", answers:["Je ne l’ai pas vu depuis des mois."], explain:"Négation + durée qui continue : depuis."},
  {type:"transform", lvl:3, instruction:"Reformulez avec « depuis que ».", prompt:"Il est plus calme depuis son déménagement.", answers:["Il est plus calme depuis qu’il a déménagé.","Depuis qu’il a déménagé, il est plus calme."], explain:"Depuis + nom → depuis que + verbe conjugué."},
  {type:"order", lvl:3, words:["combien","Depuis","temps","de","attendez-vous"], answers:["Depuis combien de temps attendez-vous ?"], explain:"Depuis combien de temps + présent, avec l’inversion."}
]});
})();
