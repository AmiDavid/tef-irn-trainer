/* g31 — L’impératif (card, lesson, 12 practice, 28 bank questions) */
(()=>{const B=window.TEF_BANK=window.TEF_BANK||{};
(B.grammar=B.grammar||[]).push({
  id:"g31", section:"Les modes", order:10, title:"L’impératif : conseils et consignes", status:"untested",
  short:"Tu, nous, vous, sans sujet ; les verbes en -er perdent le s avec tu ; sois, aie, sache, veuillez sont irréguliers.",
  details:"L’impératif sert à donner un ordre, un conseil, une consigne ou une invitation. Il n’a que trois personnes (tu, nous, vous) et pas de sujet : Viens ! Allons-y ! Remplissez ce formulaire. On le forme à partir du présent, mais les verbes en -er (et aller, ouvrir, offrir) perdent le s avec tu : Parle ! Va ! Être, avoir, savoir et vouloir sont irréguliers : sois, aie, sache, veuillez. Le pronom se place après le verbe à l’affirmatif (Appelle-moi !) et devant à la forme négative (Ne m’appelle pas).",
  examples:["Remplissez ce formulaire en majuscules.","Ne t’inquiète pas !","Allons au marché samedi.","Veuillez patienter quelques instants."],
  mistakes:[
    {wrong:"Parles plus lentement, s’il te plaît.", right:"Parle plus lentement, s’il te plaît.", why:"À l’impératif, les verbes en -er perdent le s avec tu."},
    {wrong:"Tu sois prudent sur la route !", right:"Sois prudent sur la route !", why:"L’impératif n’a pas de sujet ; être → sois."},
    {wrong:"Lève-te tôt demain.", right:"Lève-toi tôt demain.", why:"À l’impératif affirmatif, te devient toi après le verbe."},
    {wrong:"Ne regarde-le pas.", right:"Ne le regarde pas.", why:"À la forme négative, le pronom revient devant le verbe, sans trait d’union."}
  ],
  drill:{prompt:"Complète : ___ la porte, s’il te plaît.", choices:["Fermes","Ferme","Fermez","Fermé"], answer:1}
});
B.grammarPlus=Object.assign(B.grammarPlus||{},{g31:{
  intro:"L’impératif est partout dans les documents du TEF (consignes, règlements, notices, affiches : « Veuillez présenter votre carte ») et dans vos productions : donner un conseil à un ami, une consigne, une invitation. À l’oral B, il aide à convaincre : « Pense à… », « Imagine… ».",
  rule:[
    "Trois personnes, sans sujet : tu, nous, vous. On part du présent : tu prends → Prends ! ; nous prenons → Prenons ! ; vous prenez → Prenez !",
    "Verbes en -er (et aller, ouvrir, offrir) : pas de s avec tu : tu parles → Parle ! ; tu vas → Va ! ; tu ouvres → Ouvre ! Mais le s revient devant les pronoms y et en : Vas-y ! Parles-en !",
    "Quatre irréguliers : être → sois, soyons, soyez ; avoir → aie, ayons, ayez ; savoir → sache, sachons, sachez ; vouloir → veuille, veuillons, veuillez (surtout « Veuillez + infinitif » dans les lettres et les consignes).",
    "Forme négative : ne + verbe + pas : Ne fume pas ! N’oubliez pas vos papiers.",
    "Pronoms à l’impératif affirmatif : après le verbe, avec un trait d’union ; me et te deviennent moi et toi : Appelle-moi ! Avec deux pronoms : verbe-COD-COI (Donnez-le-lui ! Donne-le-moi !) ; devant en, moi devient m’ (Donne-m’en). À la forme négative, ils reviennent devant le verbe, dans l’ordre habituel : Ne m’appelle pas ; ne me le donne pas.",
    "Verbes pronominaux : Lève-toi ! Levons-nous ! Levez-vous ! → Ne te lève pas ! Ne nous levons pas ! Ne vous levez pas !",
    "Pour adoucir : s’il te plaît / s’il vous plaît, ou une autre forme : Pourriez-vous… ? Merci de + infinitif (Merci de fermer la porte) ; Veuillez + infinitif (Veuillez patienter). Dans les recettes et les notices, on trouve aussi l’infinitif : Ne pas jeter sur la voie publique."
  ],
  table:{head:["Infinitif","tu","nous","vous"],rows:[
    ["parler","parle","parlons","parlez"],
    ["finir","finis","finissons","finissez"],
    ["prendre","prends","prenons","prenez"],
    ["aller","va (vas-y)","allons","allez"],
    ["faire","fais","faisons","faites"],
    ["dire","dis","disons","dites"],
    ["venir","viens","venons","venez"],
    ["être","sois","soyons","soyez"],
    ["avoir","aie","ayons","ayez"],
    ["savoir","sache","sachons","sachez"],
    ["vouloir","veuille","veuillons","veuillez"],
    ["se lever","lève-toi","levons-nous","levez-vous"]
  ]},
  tables:[
    {title:"Les pronoms à l’impératif", head:["Affirmatif","Négatif"], rows:[
      ["Appelle-moi !","Ne m’appelle pas !"],
      ["Lève-toi !","Ne te lève pas !"],
      ["Prends-le !","Ne le prends pas !"],
      ["Dis-lui la vérité !","Ne lui dis pas la vérité !"],
      ["Donne-le-moi !","Ne me le donne pas !"],
      ["Vas-y !","N’y va pas !"],
      ["Prends-en !","N’en prends pas !"]
    ]}
  ],
  tips:[
    "Test du s : infinitif en -er (ou aller, ouvrir, offrir) → pas de s avec tu : Mange ! Va ! Ouvre ! Les autres gardent la forme du présent : Finis ! Prends ! Fais ! (sauf les irréguliers aie, sache, veuille).",
    "Veuillez + infinitif = formule polie de l’écrit : « Veuillez trouver ci-joint mon CV », « Veuillez agréer, Madame, Monsieur… ».",
    "Avec nous, l’impératif propose : Allons-y ! Faisons une pause. C’est l’équivalent de « Let’s… ».",
    "À l’oral B, l’impératif rend un conseil plus direct : « Prends le temps de comparer », « Pense à ton budget »."
  ],
  examples:[
    {fr:"Remplissez ce formulaire et joignez une copie de votre pièce d’identité.", en:"Fill in this form and attach a copy of your ID.", note:"Consigne administrative : vous."},
    {fr:"Ne t’inquiète pas, tout va bien se passer.", en:"Don’t worry, everything will be fine.", note:"Pronominal négatif : ne te + verbe + pas."},
    {fr:"Va à la pharmacie de garde, elle est ouverte le dimanche.", en:"Go to the duty pharmacy, it’s open on Sundays.", note:"Aller : va, sans s."},
    {fr:"Sois patient, la réponse arrivera bientôt.", en:"Be patient, the answer will come soon.", note:"Être : sois."},
    {fr:"Prenons le métro, c’est plus rapide.", en:"Let’s take the metro, it’s quicker."},
    {fr:"Envoie-moi le lien, s’il te plaît.", en:"Send me the link, please.", note:"Pronom après le verbe : moi."},
    {fr:"Veuillez présenter votre carte à l’entrée.", en:"Please show your card at the entrance."},
    {fr:"Tu as des questions ? Pose-les au professeur.", en:"You have questions? Ask the teacher.", note:"Pronom COD après le verbe : pose-les."}
  ],
  summary:[
    "Tu, nous, vous, sans sujet ; on part du présent.",
    "Verbes en -er (et aller, ouvrir) : pas de s avec tu (mais vas-y, parles-en).",
    "Sois, aie, sache, veuillez : irréguliers.",
    "Affirmatif : appelle-moi, lève-toi ; négatif : ne m’appelle pas, ne te lève pas."
  ],
  practice:[
    {type:"mcq", lvl:1, prompt:"___ tes devoirs avant de jouer.", choices:["Fais","Fait","Faites"], answer:0, explain:"Tes devoirs → on parle à tu : fais, sans sujet (faites = vous)."},
    {type:"mcq", lvl:1, prompt:"___ à droite après la boulangerie.", choices:["Tournes","Tourne","Tourné"], answer:1, explain:"Verbe en -er : pas de s avec tu à l’impératif."},
    {type:"fill", lvl:1, prompt:"___ patients, le médecin arrive.", answers:["Soyez"], hint:"être, vous", explain:"Être à l’impératif : sois, soyons, soyez."},
    {type:"fill", lvl:1, prompt:"N’___ pas tes clés !", answers:["oublie"], hint:"oublier, tu", explain:"Verbe en -er : pas de s avec tu ; ne + verbe + pas."},
    {type:"transform", lvl:1, instruction:"Mettez la phrase à l’impératif (vous).", prompt:"Vous fermez la fenêtre.", answers:["Fermez la fenêtre."], explain:"On garde la forme du présent, sans le sujet."},
    {type:"order", lvl:1, words:["pour","Ne","t’inquiète","moi","pas"], answers:["Ne t’inquiète pas pour moi."], explain:"Pronominal négatif : ne + te + verbe + pas."},
    {type:"fix", lvl:2, prompt:"Vas à la poste avant midi.", answers:["Va à la poste avant midi."], explain:"Aller, tu : va, sans s (sauf devant y : vas-y)."},
    {type:"fix", lvl:2, prompt:"Ne le dis-lui pas.", answers:["Ne le lui dis pas."], explain:"À la forme négative, les pronoms reviennent devant le verbe : le + lui."},
    {type:"transform", lvl:2, instruction:"Mettez la phrase à la forme négative avec « ne… pas ».", prompt:"Assieds-toi ici.", answers:["Ne t’assieds pas ici.","Ne t’assois pas ici."], explain:"Négatif : ne + te (t’) + verbe + pas."},
    {type:"order", lvl:2, words:["Donne-moi","s’il","plaît","ton","numéro","te"], answers:["Donne-moi ton numéro, s’il te plaît.","S’il te plaît, donne-moi ton numéro."], explain:"Affirmatif : moi après le verbe, avec un trait d’union."},
    {type:"mcq", lvl:3, prompt:"___ agréer, Madame, l’expression de mes salutations distinguées.", choices:["Veuillez","Voulez","Vouliez"], answer:0, explain:"Formule de lettre : Veuillez + infinitif (vouloir à l’impératif)."},
    {type:"fill", lvl:3, prompt:"___-y, ils t’attendent !", answers:["Vas"], hint:"aller, tu", explain:"Devant y, va reprend un s : vas-y."}
  ]
}});
B.grammarMore=Object.assign(B.grammarMore||{},{g31:[
  {type:"mcq", lvl:1, prompt:"___ ton manteau, il fait froid !", choices:["Mets","Met","Mettes"], answer:0, explain:"Mettre : tu mets → Mets !"},
  {type:"mcq", lvl:1, prompt:"___ ensemble ce soir !", choices:["Dînons","Dînons-nous","Dînions"], answer:0, explain:"Avec nous, l’impératif propose, sans sujet ni pronom (dîner n’est pas pronominal) : Dînons !"},
  {type:"mcq", lvl:1, prompt:"S’il vous plaît, ___ votre ticket.", choices:["gardez","gardes","gardé"], answer:0, explain:"Vous : gardez (gardes = tu ; gardé = participe passé)."},
  {type:"mcq", lvl:1, prompt:"___ tranquille, tout va bien.", choices:["Sois","Soit","Es"], answer:0, explain:"Être, tu : sois."},
  {type:"fill", lvl:1, prompt:"___ la fenêtre, s’il te plaît !", answers:["Ouvre"], hint:"ouvrir, tu", explain:"Ouvrir se conjugue comme un verbe en -er : ouvre, sans s."},
  {type:"fill", lvl:1, prompt:"___ vite, le bus arrive !", answers:["Viens"], hint:"venir, tu", explain:"Venir, tu : viens."},
  {type:"fill", lvl:1, prompt:"N’___ pas peur, le chien est gentil.", answers:["aie"], hint:"avoir, tu", explain:"Avoir, tu : aie ; à la forme négative : n’aie pas."},
  {type:"fix", lvl:1, prompt:"Finit ton assiette !", answers:["Finis ton assiette !"], explain:"Finir, tu : finis (avec un s)."},
  {type:"fix", lvl:1, prompt:"Écoutes bien la consigne.", answers:["Écoute bien la consigne."], explain:"Verbe en -er : pas de s avec tu à l’impératif."},
  {type:"transform", lvl:1, instruction:"Mettez la phrase à l’impératif (tu).", prompt:"Tu attends ici.", answers:["Attends ici."], explain:"Attendre, tu : attends (le s reste)."},
  {type:"order", lvl:1, words:["la","Lève-toi","lumière","et","allume"], answers:["Lève-toi et allume la lumière.","Allume la lumière et lève-toi."], explain:"Verbe pronominal à l’impératif : lève-toi."},
  {type:"mcq", lvl:2, prompt:"Ce gâteau est délicieux, ___ !", choices:["goûtes-en","goûte-en","en goûte"], answer:0, explain:"Devant en, l’impératif en -er reprend un s : goûtes-en ; à l’affirmatif, le pronom suit le verbe."},
  {type:"mcq", lvl:2, prompt:"Ne ___ pas, nous avons le temps.", choices:["te dépêche","dépêche-toi","te dépêches"], answer:0, explain:"Négatif : ne + te + verbe + pas, sans s avec tu."},
  {type:"mcq", lvl:2, prompt:"Votre dossier ? ___ avant vendredi.", choices:["Envoyez-le-nous","Envoyez-nous-le","Nous l’envoyez"], answer:0, explain:"Impératif affirmatif : verbe-COD-COI (envoyez-le-nous)."},
  {type:"fill", lvl:2, prompt:"Ne ___ dérangez pas, je suis en réunion.", answers:["me"], hint:"pronom : moi", explain:"À la forme négative, le pronom revient devant le verbe : ne me dérangez pas."},
  {type:"fill", lvl:2, prompt:"___ que nous comptons sur vous.", answers:["Sachez"], hint:"savoir, vous", explain:"Savoir à l’impératif : sache, sachons, sachez."},
  {type:"fill", lvl:2, prompt:"Ces papiers ? Range-___ dans le tiroir.", answers:["les"], explain:"Impératif affirmatif : le pronom COD suit le verbe (range-les)."},
  {type:"fix", lvl:2, prompt:"Ne te lève-toi pas trop tard.", answers:["Ne te lève pas trop tard."], explain:"À la forme négative : ne + te + verbe + pas, sans toi."},
  {type:"fix", lvl:2, prompt:"Donne-me ton adresse.", answers:["Donne-moi ton adresse."], explain:"Après le verbe, me devient moi."},
  {type:"transform", lvl:2, instruction:"Mettez la phrase à la forme affirmative.", prompt:"Ne vous asseyez pas.", answers:["Asseyez-vous.","Assoyez-vous."], explain:"Affirmatif : le pronom passe après le verbe, avec un trait d’union."},
  {type:"transform", lvl:2, instruction:"Remplacez « à ton frère » par un pronom.", prompt:"Téléphone à ton frère.", answers:["Téléphone-lui."], explain:"Téléphoner à quelqu’un → lui, après le verbe à l’affirmatif."},
  {type:"order", lvl:2, words:["N’y","pas","va","seul","nuit","la"], answers:["N’y va pas seul la nuit.","La nuit, n’y va pas seul."], explain:"Négatif : ne + y + verbe + pas ; pas de s à va, car y n’est plus après le verbe."},
  {type:"mcq", lvl:3, prompt:"___ trouver ci-joint mon curriculum vitae.", choices:["Veuillez","Veuillez-vous","Voulez"], answer:0, explain:"Formule de lettre : Veuillez + infinitif."},
  {type:"fill", lvl:3, prompt:"Merci de ne ___ stationner devant l’entrée.", answers:["pas","plus","jamais"], explain:"Merci de + infinitif négatif : ne pas (ne plus, ne jamais) + infinitif, ensemble."},
  {type:"fill", lvl:3, prompt:"Ayons confiance et ___ prudents.", answers:["soyons"], hint:"être, nous", explain:"Être, nous : soyons (sans i)."},
  {type:"fix", lvl:3, prompt:"Veuillez nous contacter-nous rapidement.", answers:["Veuillez nous contacter rapidement."], explain:"Veuillez + infinitif : le pronom se place une seule fois, devant l’infinitif."},
  {type:"transform", lvl:3, instruction:"Rendez la consigne plus polie avec « Veuillez ».", prompt:"Patientez quelques minutes.", answers:["Veuillez patienter quelques minutes."], explain:"Veuillez + infinitif : formule polie des consignes écrites."},
  {type:"order", lvl:3, words:["Ne","le","pas","lui","dis"], answers:["Ne le lui dis pas."], explain:"Négatif : ne + le + lui + verbe + pas."}
]});
})();
