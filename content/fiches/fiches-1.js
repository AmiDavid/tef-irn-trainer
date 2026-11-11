/* One-page summaries (« fiches »), part 1: the page to copy into the notebook and to look things up in when a question
   blocks. Each fiche = sections {h: heading, l: lines, t: optional compact table}; *…* = keyword (highlighted).
   qa/content-qa.txt keeps each fiche to one page, or a double page when it carries the lesson’s full tables ({h, tab: n}
   shows the lesson’s table n exactly as in the lesson). Lessons: g5, g29, g11, g30, g4, g31. */
(()=>{const B=window.TEF_BANK=window.TEF_BANK||{};const F=B.grammarFiche=B.grammarFiche||{};
Object.assign(F,{
g5:[
  {h:"Un ou une ? Apprendre chaque nom avec son article",tab:0,l:[
    "Toujours féminin : *la personne* (même pour un homme). Masculin malgré le -e : *le* problème, *le* système, *le* programme."
  ]},
  {h:"Accorder",l:[
    "Déterminant + nom + adjectif : *même genre, même nombre* (le / la / les, un / une / des, mon / ma / mes, ce / cette / ces).",
    "Avec *être* : accord avec le sujet (la salle est fermée, les dossiers sont complets).",
    "Masculin + féminin → *masculin pluriel* (une cuisine et un salon lumineux)."
  ]},
  {h:"Féminin des adjectifs",tab:1},
  {h:"Pluriel des noms et des adjectifs",tab:2},
  {h:"Devant une voyelle ou un h muet",l:[
    "ma, ta, sa → *mon, ton, son* : mon adresse, son école.",
    "beau, nouveau, vieux → *bel, nouvel, vieil* : un nouvel appartement."
  ]},
  {h:"Avant ou après le nom ?",l:[
    "En général *après* : une voiture rouge, un loyer élevé.",
    "*Avant* (BAGS) : beau, joli · jeune, vieux, nouveau · bon, mauvais · grand, petit, gros · autre.",
    "des + adjectif + nom pluriel → *de* : de nouveaux voisins (mais des grands-parents).",
    "Le sens change : un *ancien* collègue (former) / un immeuble *ancien* (old) ; mon *propre* bureau (own) / un bureau *propre* (clean)."
  ]}
],
g29:[
  {h:"Quel article ?",l:[
    "*le, la, les* : connu, unique ou général ; après aimer, adorer, détester, préférer (J’aime le café).",
    "*un, une, des* : un élément parmi d’autres, qu’on compte (J’ai un rendez-vous).",
    "*du, de la, de l’* : une quantité qu’on ne compte pas (Je bois du café ; il faut de la patience).",
    "J’aimerais, je voudrais → comme vouloir : *un* café, *du* pain."
  ]},
  {h:"Quand l’article devient de",l:[
    "Après une négation : pas *de* voiture. Mais : ce n’est pas *un* problème (être) ; je n’aime pas *le* café.",
    "Après une quantité ou un verbe en de : beaucoup *de* patience ; j’ai besoin *d’*aide.",
    "des + adjectif + nom pluriel → *de* : de bons amis."
  ]},
  {h:"Pas d’article",l:[
    "Métier, nationalité après être, devenir : il est *médecin*, elle est *italienne*.",
    "en + nom (en voiture, en hiver) ; nom + de + nom (un cours d’anglais, un jus d’orange)."
  ]},
  {h:"C’est ou il est ?",l:[
    "*C’est* + déterminant + nom, nom propre ou pronom : c’est un bon médecin, c’est Julie, c’est lui.",
    "*Il / elle est* + adjectif, ou + métier sans article : elle est compétente, il est médecin.",
    "Juger une idée : *c’est* + adjectif masculin (Paris, c’est cher) ; à l’écrit : *il est* difficile *de* trouver…",
    "Ce formulaire ? *C’est facile à* remplir (à + infinitif, rien après)."
  ]},
  {h:"Jours et parties du corps",l:[
    "*le lundi* = tous les lundis ; *lundi* = ce lundi-là.",
    "Je me lave *les* mains ; j’ai mal *à la* tête (pas de possessif)."
  ]}
],
g11:[
  {h:"Les formes à savoir par cœur",t:{head:["Verbe","je","nous","ils"],rows:[
    ["être","suis","sommes","sont"],["avoir","ai","avons","ont"],["aller","vais","allons","vont"],["faire","fais","faisons","font"],
    ["pouvoir","peux","pouvons","peuvent"],["vouloir","veux","voulons","veulent"],["devoir","dois","devons","doivent"],
    ["prendre","prends","prenons","prennent"],["venir","viens","venons","viennent"],["savoir","sais","savons","savent"],["dire","dis","disons","disent"]
  ]}},
  {h:"Repères",l:[
    "*Vous êtes, vous faites, vous dites* : les seules formes en -es ; sinon *-ez* (vous prenez, vous allez).",
    "tu et il se prononcent comme je : je fais, tu fais, il fait ; je prends, tu prends, il prend.",
    "Les composés suivent leur verbe : comprendre (prendre), devenir, obtenir (venir), refaire (faire).",
    "*-er* : -e, -es, -e, -ons, -ez, -ent · *finir* : -is, -is, -it, -issons, -issez, -issent · *attendre* : -s, -s, -, -ons, -ez, -ent",
    "Orthographe : nous mangeons, commençons ; j’achète, j’appelle, je jette (mais nous achetons) ; je paie, nous payons.",
    "partir, sortir, dormir : je pars, il dort / ils partent ; ouvrir, offrir : j’ouvre, il offre (comme parler).",
    "Aussi : mettre (mets, mettons, mettent) ; voir (vois, voyons, voient) ; boire (bois, buvons, boivent) ; écrire (écrivons)."
  ]},
  {h:"Pièges",l:[
    "ils *ont* (son z) ≠ ils *sont* (son s) ; je suis = être ou suivre (je suis un cours).",
    "vous *faites* (pas « faisez ») ; ils *prennent* (pas « prendent ») ; il faut, il pleut : toujours il."
  ]}
],
g30:[
  {h:"Question oui / non : trois registres",l:[
    "Familier : *Vous venez ?* · courant : *Est-ce que vous venez ?* · soutenu : *Venez-vous ?*"
  ]},
  {h:"L’inversion",l:[
    "Verbe-pronom avec trait d’union : Pouvez-vous… ? ; *-t-* entre deux voyelles : A-t-il… ? Va-t-elle… ?",
    "Temps composé : *Avez-vous reçu…* ? ; avec je : Puis-je… ? Dois-je… ?",
    "Nom sujet repris : *Votre fils parle-t-il* anglais ? ; Pourquoi *le bureau est-il* fermé ?",
    "Sans COD, inversion simple : Où travaille votre fils ? Que fait votre fils ?",
    "Jamais *est-ce que* + inversion (« Où est-ce qu’habitez-vous ? » est faux)."
  ]},
  {h:"Mots interrogatifs",l:[
    "Personne : *qui* · chose sujet : *qu’est-ce qui* (Qu’est-ce qui se passe ?) · chose complément : *qu’est-ce que / que*",
    "*quoi* après une préposition : De quoi parlez-vous ? ; à l’oral : Vous faites quoi ?",
    "où, quand, comment, combien (de), pourquoi + est-ce que ou inversion.",
    "*quel, quelle, quels, quelles* + nom ou + être (Quelle est votre adresse ?) ; *lequel, laquelle…* pour un choix.",
    "La préposition en tête : *À* quelle heure… ? *Avec* qui… ? *Depuis* quand… ?"
  ]},
  {h:"Questions polies et indirectes",l:[
    "Pourriez-vous me dire… ? Je voudrais savoir si… Serait-il possible de… ?",
    "Indirecte : oui / non → *si* ; qu’est-ce qui → *ce qui* ; qu’est-ce que → *ce que* ; pas d’inversion ni d’est-ce que.",
    "Pourriez-vous me dire *à quelle heure le bureau ferme* ?"
  ]}
],
g4:[
  {h:"La place",l:[
    "*ne* + verbe conjugué + *pas* : Je ne travaille pas le lundi.",
    "Temps composé : *ne* + auxiliaire + *pas* + participe : Je n’ai pas reçu… ; mais Je n’ai vu *personne*.",
    "Les pronoms restent entre ne et le verbe : Je ne *le* connais pas ; il ne *m’*a pas répondu.",
    "Infinitif : *ne pas* + infinitif (Merci de ne pas fumer) ; mais ne voir *personne*."
  ]},
  {h:"Les mots négatifs (jamais avec pas)",l:[
    "ne… *plus* (no longer) · *jamais* (never) · *rien* (nothing) · *personne* (nobody) · *aucun(e)* (not any)",
    "ne… *que* (only) · *pas encore* (not yet) · *nulle part* (nowhere) · *ni… ni…* (neither… nor)",
    "Ensemble : Je ne vois *plus personne* ; il ne dit *jamais rien*."
  ]},
  {h:"Les articles",l:[
    "un, une, des, du, de la → *de* : Je n’ai pas *de* voiture.",
    "Mais : ce n’est pas *un* problème (être) ; je ne bois que *du* thé (ne… que) ; je n’aime pas *le* café."
  ]},
  {h:"À savoir",l:[
    "En sujet : *Personne* n’est venu ; *rien* ne marche.",
    "Répondre oui à une question négative : *Si* ! · moi aussi ≠ *moi non plus*.",
    "À l’écrit, toujours le *ne* : on *n’*a pas reçu ; « j’sais pas » = oral seulement."
  ]}
],
g31:[
  {h:"Former",l:[
    "Le présent sans sujet, trois personnes : (tu) *Prends !* (nous) *Prenons !* (vous) *Prenez !*",
    "Verbes en -er, aller, ouvrir, offrir : *pas de s* avec tu : Parle ! Va ! Ouvre ! (mais *vas-y*, *parles-en*)",
    "Irréguliers : *sois, soyons, soyez* · *aie, ayons, ayez* · *sache, sachons, sachez* · *veuillez*"
  ]},
  {h:"Négatif",l:[
    "*Ne* + verbe + *pas* : Ne fume pas ! N’oubliez pas vos papiers."
  ]},
  {h:"Les pronoms",l:[
    "Affirmatif : *après* le verbe, avec trait d’union ; me, te → *moi, toi* : Appelle-moi ! Lève-toi ! Prends-en !",
    "Deux pronoms : Donne-*le-moi* ! Donnez-*le-lui* ! ; devant en : Donne-*m’en*.",
    "Négatif : *devant* le verbe : Ne *m’*appelle pas ! Ne *te* lève pas ! Ne *me le* donne pas !"
  ]},
  {h:"Adoucir et conseiller",l:[
    "s’il te plaît, s’il vous plaît · Pourriez-vous… ? · *Merci de* + infinitif · *Veuillez* + infinitif",
    "Consignes écrites : l’infinitif (Ne pas jeter sur la voie publique).",
    "*Allons-y !* = Let’s… ; conseil à l’oral B : Prends le temps de comparer."
  ]}
]
});})();
