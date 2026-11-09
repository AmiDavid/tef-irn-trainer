/* g43 — Homophones grammaticaux (card, lesson, 12 practice, 28 bank questions) */
(()=>{const B=window.TEF_BANK=window.TEF_BANK||{};
(B.grammar=B.grammar||[]).push({
  id:"g43", section:"L’orthographe", order:20, title:"Homophones : a / à, et / est, ce / se, -é / -er…", status:"untested",
  short:"Des mots qui se prononcent pareil mais s’écrivent autrement : un test de remplacement suffit presque toujours.",
  details:"Beaucoup de fautes d’orthographe viennent de mots qui se prononcent de la même façon. Un test de remplacement règle presque tout : a (verbe avoir) se remplace par avait, à non ; est (être) par était, et par et puis ; sont (être) par étaient, son (possessif) par mon ; ont (avoir) par avaient, on par il ; se va devant un verbe pronominal, ce devant un nom ; -er (infinitif) se remplace par vendre, -é (participe) par vendu.",
  examples:["Il a rendez-vous à la mairie.","Elle est partie et elle n’est pas revenue.","Je vais acheter du pain ; j’ai acheté du pain.","Ses enfants sont à l’école."],
  mistakes:[
    {wrong:"Il à oublié son badge.", right:"Il a oublié son badge.", why:"a = verbe avoir (il avait oublié) ; à = préposition."},
    {wrong:"Je vais acheté du pain.", right:"Je vais acheter du pain.", why:"Après un verbe conjugué comme aller, l’infinitif en -er (test : je vais vendre)."},
    {wrong:"Mes voisins son très gentils.", right:"Mes voisins sont très gentils.", why:"sont = verbe être (ils étaient gentils) ; son = possessif."},
    {wrong:"Les documents qu’ils on envoyés sont arrivés.", right:"Les documents qu’ils ont envoyés sont arrivés.", why:"ont = verbe avoir (ils avaient envoyé) ; on = pronom."}
  ],
  drill:{prompt:"Complète : Elle ___ partie à huit heures.", choices:["est","et","ai","es"], answer:0}
});
B.grammarPlus=Object.assign(B.grammarPlus||{},{g43:{
  intro:"À l’écrit du TEF, les fautes d’homophones (a / à, et / est, -é / -er…) pèsent sur la note de correction linguistique et se voient à chaque ligne. Ce ne sont pas des fautes de grammaire « difficile » : un simple test de remplacement, fait à la relecture, suffit à les éviter.",
  rule:[
    "a / à : a = verbe avoir, on peut dire avait (Il a un rendez-vous → il avait). À = préposition, aucun remplacement possible (Je vais à la poste).",
    "et / est / es : est = verbe être, on peut dire était (Elle est malade → elle était) ; avec tu : tu es (tu étais). Et = et puis (du pain et du fromage).",
    "sont / son, ont / on : sont = être (étaient), son = possessif (mon) ; ont = avoir (avaient), on = pronom (il) : Ils ont perdu leur chien → ils avaient ; on a perdu → il a.",
    "se / ce, s’est / c’est / sait, ses / ces : se + verbe pronominal (il se lève) ; ce + nom, + être ou + qui / que (ce dossier, ce sont, ce que je veux) ; s’est = passé composé pronominal (il s’est levé), c’est = cela est ; sais, sait = savoir (je ne sais pas → je ne savais pas) ; ses = les siens, ces = ceux-là.",
    "ou / où : ou = ou bien (thé ou café ?) ; où = lieu ou temps (la ville où j’habite, le jour où il est parti).",
    "-er / -é / -ez / -ais / -ait : après une préposition (à, de, pour, sans) ou un autre verbe conjugué → infinitif en -er (test : vendre) ; après avoir ou être, ou employé comme adjectif (un dossier complété) → participe en -é (test : vendu), puis accordé si nécessaire (elle est arrivée, les lettres envoyées) ; avec vous → -ez ; à l’imparfait → -ais, -ait.",
    "leur / leurs, quelle / qu’elle, peu / peut, là / la / l’a : leur devant un verbe est un pronom invariable (je leur parle) ; devant un nom, leur + singulier (leur maison), leurs + pluriel (leurs enfants) ; quelle + nom (quelle heure ?), qu’elle = que + elle (test : qu’il) ; peut = pouvoir (pouvait), peu = pas beaucoup ; là = lieu (là-bas), la = article ou pronom (la clé, je la vois), l’a = le ou la + a (l’avait).",
    "quand / quant à / qu’en, près / prêt : quand = when (quand il pleut) ; quant à = as for (quant à moi) ; qu’en = que + en (qu’en pensez-vous ?) ; près de = near (près de la gare), prêt(e) à = ready to (elle est prête à partir)."
  ],
  table:{head:["Homophones","Test","Exemple"],rows:[
    ["a / à","a → avait","Il a froid. / Il va à Paris."],
    ["est / et","est → était","Elle est là et lui aussi."],
    ["sont / son","sont → étaient ; son → mon","Ils sont venus avec son frère."],
    ["ont / on","ont → avaient ; on → il","Ils ont dit qu’on viendrait."],
    ["se / ce","se + verbe ; ce + nom","Il se trompe : ce calcul est faux."],
    ["s’est / c’est","s’est + participe ; c’est = cela est","Il s’est trompé, c’est sûr."],
    ["ses / ces","ses → les siens ; ces → ceux-là","Il range ses dossiers dans ces boîtes."],
    ["où / ou","où = lieu, temps ; ou = ou bien","Où vas-tu : à la plage ou en ville ?"],
    ["-er / -é","-er → vendre ; -é → vendu","Je vais manger. J’ai mangé."],
    ["leur / leurs","leur + verbe ou nom singulier ; leurs + nom pluriel","Je leur rends leurs clés."]
  ]},
  tips:[
    "À la relecture de l’écrit, faites une passe « homophones » : cherchez chaque a, et, son, on, ce, ou et chaque -é / -er, et faites le test de remplacement.",
    "-é ou -er après un verbe ? Remplacez par prendre / pris : je vais (prendre) → manger ; j’ai (pris) → mangé.",
    "Après une préposition (pour, sans, de, à), toujours l’infinitif : sans attendre, pour réserver, avant de partir.",
    "Peu / peut / peux : il peut (pouvait), je peux, tu peux ; peu = pas beaucoup (peu de temps).",
    "Négation avec on : devant une voyelle, le n’ ne s’entend pas mais il s’écrit : On n’a pas reçu le colis (pas « on a pas reçu »)."
  ],
  examples:[
    {fr:"Mon fils a un rendez-vous à l’hôpital à dix heures.", en:"My son has an appointment at the hospital at ten.", note:"a = avait ; à = préposition."},
    {fr:"La boulangerie est fermée et la pharmacie aussi.", en:"The bakery is closed and so is the pharmacy."},
    {fr:"Les voisins ont déménagé ; on ne les voit plus.", en:"The neighbours have moved; we don’t see them any more."},
    {fr:"Il s’est inscrit hier : c’est confirmé.", en:"He signed up yesterday: it’s confirmed."},
    {fr:"Je dois envoyer le dossier que j’ai complété.", en:"I have to send the file I filled in.", note:"dois + infinitif (-er) ; ai + participe (-é)."},
    {fr:"Où est-ce que je peux payer, en ligne ou au guichet ?", en:"Where can I pay, online or at the counter?"},
    {fr:"Ses enfants sont dans cette école depuis septembre.", en:"His children have been at this school since September."},
    {fr:"Je leur ai rendu leurs clés.", en:"I gave them back their keys."}
  ],
  summary:[
    "a → avait ; est → était ; sont → étaient ; ont → avaient.",
    "se + verbe pronominal ; ce + nom ; c’est = cela est.",
    "Après une préposition ou un verbe conjugué : -er ; après avoir ou être : -é.",
    "Relisez avec le test de remplacement."
  ],
  practice:[
    {type:"mcq", lvl:1, prompt:"Il ___ trois enfants.", choices:["a","à","as"], answer:0, explain:"Verbe avoir (il avait trois enfants) : a."},
    {type:"mcq", lvl:1, prompt:"Le dossier ___ complet.", choices:["est","et","es"], answer:0, explain:"Verbe être (le dossier était complet) : est."},
    {type:"fill", lvl:1, prompt:"Je vais ___ la banque cet après-midi.", answers:["à"], explain:"Préposition : on ne peut pas dire « avait »."},
    {type:"fill", lvl:1, prompt:"Mes parents ___ arrivés hier.", answers:["sont"], explain:"Verbe être (ils étaient arrivés) : sont."},
    {type:"fix", lvl:1, prompt:"Elle va téléphoné à sa sœur.", answers:["Elle va téléphoner à sa sœur."], explain:"Après va (aller), l’infinitif : téléphoner (test : elle va vendre)."},
    {type:"order", lvl:1, words:["et","Paul","Marie","sont","malades"], answers:["Paul et Marie sont malades.","Marie et Paul sont malades."], explain:"et relie les deux noms ; sont = verbe être."},
    {type:"mcq", lvl:2, prompt:"Ils ___ oublié leurs papiers.", choices:["ont","on","sont"], answer:0, explain:"Verbe avoir (ils avaient oublié) : ont."},
    {type:"fill", lvl:2, prompt:"Il ___ trompé de date.", answers:["s’est"], hint:"passé composé", explain:"Passé composé du verbe pronominal se tromper : il s’est trompé."},
    {type:"fix", lvl:2, prompt:"J’ai oublier mon parapluie.", answers:["J’ai oublié mon parapluie."], explain:"Après avoir, le participe passé en -é (test : j’ai vendu)."},
    {type:"transform", lvl:2, instruction:"Mettez la phrase à l’imparfait.", prompt:"Il a peur et elle est inquiète.", answers:["Il avait peur et elle était inquiète."], explain:"a → avait, est → était ; et ne change pas."},
    {type:"transform", lvl:2, instruction:"Mettez la phrase au pluriel (ils).", prompt:"Il a fini son travail.", answers:["Ils ont fini leur travail."], explain:"il a → ils ont ; son → leur."},
    {type:"order", lvl:3, words:["C’est","la","ville","où","il","a","passé","son","enfance"], answers:["C’est la ville où il a passé son enfance."], explain:"C’est (= cela est), où (lieu), a (= avait), passé (participe après avoir), son (= mon)."}
  ]
}});
B.grammarMore=Object.assign(B.grammarMore||{},{g43:[
  {type:"mcq", lvl:1, prompt:"Tu viens ___ pied ?", choices:["à","a","as"], answer:0, explain:"Préposition : à pied."},
  {type:"mcq", lvl:1, prompt:"Du thé ___ du café ?", choices:["ou","où","ont"], answer:0, explain:"ou = ou bien."},
  {type:"mcq", lvl:1, prompt:"___ un bon restaurant.", choices:["C’est","S’est","Ses"], answer:0, explain:"c’est = cela est."},
  {type:"mcq", lvl:1, prompt:"Ils ___ très contents de leur voyage.", choices:["sont","son","ont"], answer:0, explain:"Verbe être (ils étaient contents) : sont."},
  {type:"fill", lvl:1, prompt:"Elle ___ partie en vacances.", answers:["est"], hint:"passé composé", explain:"Verbe être (elle était partie) : est."},
  {type:"fill", lvl:1, prompt:"On ___ reçu une lettre de la mairie.", answers:["a"], hint:"passé composé", explain:"Verbe avoir (on avait reçu) : a."},
  {type:"fill", lvl:1, prompt:"Je dois ___ ce formulaire avant lundi.", answers:["envoyer"], hint:"envoyer", explain:"Après dois (devoir conjugué), l’infinitif en -er."},
  {type:"fix", lvl:1, prompt:"Il et parti ce matin.", answers:["Il est parti ce matin."], explain:"Verbe être (il était parti) : est."},
  {type:"fix", lvl:1, prompt:"Ont va au marché samedi ?", answers:["On va au marché samedi ?"], explain:"Pronom sujet (= il va) : on."},
  {type:"transform", lvl:1, instruction:"Mettez la phrase à l’imparfait.", prompt:"Elle est à la maison et elle a froid.", answers:["Elle était à la maison et elle avait froid."], explain:"est → était, a → avait ; à et et ne changent pas."},
  {type:"order", lvl:1, words:["Il","à","a","parlé","directeur","son"], answers:["Il a parlé à son directeur."], explain:"a = verbe avoir ; à = préposition."},
  {type:"mcq", lvl:2, prompt:"Elle ___ lavé les mains.", choices:["s’est","c’est","ses"], answer:0, explain:"Passé composé pronominal : elle s’est lavé les mains."},
  {type:"mcq", lvl:2, prompt:"Je ne sais pas ___ j’ai mis mes clés.", choices:["où","ou","ont"], answer:0, explain:"Un lieu : où."},
  {type:"mcq", lvl:2, prompt:"Je ___ ai téléphoné hier.", choices:["leur","leurs","l’heure"], answer:0, explain:"Leur devant un verbe : pronom invariable."},
  {type:"fill", lvl:2, prompt:"Vous pouvez ___ le formulaire en ligne.", answers:["télécharger"], hint:"télécharger", explain:"Après pouvez, l’infinitif en -er."},
  {type:"fill", lvl:2, prompt:"Le colis est ___ hier.", answers:["arrivé"], hint:"arriver", explain:"Après être, le participe passé en -é."},
  {type:"fill", lvl:2, prompt:"Il ne ___ pas venir demain.", answers:["peut"], hint:"pouvoir, présent", explain:"Verbe pouvoir (il ne pouvait pas) : peut ; peu = pas beaucoup."},
  {type:"fix", lvl:2, prompt:"Il a acheter du pain.", answers:["Il a acheté du pain."], explain:"Après avoir, le participe passé en -é."},
  {type:"fix", lvl:2, prompt:"Les enfants on fini leurs devoirs.", answers:["Les enfants ont fini leurs devoirs."], explain:"Verbe avoir (ils avaient fini) : ont."},
  {type:"transform", lvl:2, instruction:"Mettez la phrase au pluriel (elles).", prompt:"Elle s’est inscrite et elle est contente.", answers:["Elles se sont inscrites et elles sont contentes."], explain:"s’est → se sont ; est → sont."},
  {type:"transform", lvl:2, instruction:"Mettez la phrase au passé composé.", prompt:"Je vais réserver une table.", answers:["J’ai réservé une table."], explain:"aller + infinitif (-er) → avoir + participe (-é)."},
  {type:"order", lvl:2, words:["ses","range","Il","dans","ces","dossiers","boîtes"], answers:["Il range ses dossiers dans ces boîtes.","Il range ces dossiers dans ses boîtes."], explain:"ses = les siens ; ces = ceux-là."},
  {type:"mcq", lvl:3, prompt:"La décision ___ a prise est définitive.", choices:["qu’elle","quelle","quel"], answer:0, explain:"que + elle : la décision qu’elle a prise."},
  {type:"fill", lvl:3, prompt:"Je ne connais pas ___ nouveaux voisins.", answers:["ces"], hint:"= ceux-là", explain:"Démonstratif (ceux-là) : ces."},
  {type:"fill", lvl:3, prompt:"Merci de ___ l’entrée libre.", answers:["laisser"], hint:"laisser", explain:"Après la préposition de, l’infinitif en -er."},
  {type:"fix", lvl:3, prompt:"C’est employés travaillent le samedi.", answers:["Ces employés travaillent le samedi.","Ses employés travaillent le samedi."], explain:"Devant un nom pluriel : ces (ceux-là) ou ses (les siens), jamais c’est."},
  {type:"transform", lvl:3, instruction:"Remplacez « nous » par « on ».", prompt:"Nous n’avons rien entendu.", answers:["On n’a rien entendu."], explain:"On + a (verbe avoir à la 3e personne du singulier) ; le n’ de la négation s’écrit, même s’il ne s’entend pas."},
  {type:"order", lvl:3, words:["Quant","à","moi","je","suis","prêt","à","partir"], answers:["Quant à moi, je suis prêt à partir.","Je suis prêt à partir, quant à moi."], explain:"Quant à = as for (≠ quand) ; prêt à = ready to (≠ près de = near)."}
]});
})();
