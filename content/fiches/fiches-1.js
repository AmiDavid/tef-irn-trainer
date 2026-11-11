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
    "Avec *être*, l’adjectif *et le participe passé* s’accordent avec le sujet : la salle est *fermée*, les charges sont *comprises*, la demande a été *transmise*.",
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
  {h:"Quel article ?",tab:0,l:[
    "Goûts : aimer, adorer, détester, préférer + *le, la, les* (J’aime le café) ; mais j’aimerais, je voudrais + *un, du* (comme vouloir).",
    "Négation : *de* (pas de voiture) ; mais *ce n’est pas un* problème (être), je ne bois que *du* thé, je n’aime pas *le* café.",
    "Après un verbe en de : j’ai besoin *d’*aide ; écrit : *de* bons amis (adjectif avant le nom)."
  ]},
  {h:"C’est ou il est ?",tab:1},
  {h:"Jours et parties du corps",l:[
    "*le lundi* = tous les lundis ; *lundi* = ce lundi-là.",
    "Je me lave *les* mains ; j’ai mal *à la* tête (pas de possessif)."
  ]}
],
g11:[
  {h:"Les formes à savoir : je, nous, ils",tab:0},
  {h:"Les autres personnes : tu, il, vous",tab:1},
  {h:"Autres verbes fréquents",tab:2},
  {h:"Repères",l:[
    "*Vous êtes, vous faites, vous dites* : les seules formes en -es ; sinon *-ez* (vous prenez, vous allez).",
    "Les composés suivent leur verbe : comprendre (prendre), devenir, obtenir (venir), refaire (faire).",
    "*-er* : -e, -es, -e, -ons, -ez, -ent · *finir* : -is, -is, -it, -issons, -issez, -issent · *attendre* : -s, -s, -, -ons, -ez, -ent",
    "Orthographe : nous mangeons, commençons ; j’achète, j’appelle, je jette (mais nous achetons) ; je paie, nous payons."
  ]},
  {h:"Pièges",l:[
    "ils *ont* (son z) ≠ ils *sont* (son s) ; je suis = être ou suivre (je suis un cours).",
    "vous *faites* (pas « faisez ») ; ils *prennent* (pas « prendent ») ; il faut, il pleut : toujours il."
  ]}
],
g30:[
  {h:"Trois registres",tab:0},
  {h:"L’inversion",l:[
    "Verbe-pronom avec trait d’union ; *-t-* entre deux voyelles : A-t-il… ? Va-t-elle… ? Parle-t-on… ?",
    "Temps composé : *Avez-vous reçu…* ? ; avec je : Puis-je… ? Dois-je… ?",
    "Nom sujet repris : *Votre fils parle-t-il* anglais ? ; Pourquoi *le bureau est-il* fermé ?",
    "Sans COD, inversion simple : Où travaille votre fils ? Que fait votre fils ?",
    "Jamais *est-ce que* + inversion (« Où est-ce qu’habitez-vous ? » est faux)."
  ]},
  {h:"Les mots interrogatifs",tab:1,l:[
    "La préposition en tête : *À* quelle heure… ? *Avec* qui… ? *Depuis* quand… ?"
  ]},
  {h:"Questions polies et indirectes",l:[
    "Pourriez-vous me dire… ? Je voudrais savoir si… Serait-il possible de… ?",
    "Indirecte : oui / non → *si* ; qu’est-ce qui → *ce qui* ; qu’est-ce que → *ce que* ; ni inversion ni est-ce que.",
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
  {h:"Les négations (jamais avec pas)",tab:0,l:[
    "Ensemble : je ne vois *plus personne* ; il ne dit *jamais rien* ; il n’y a *plus rien*."
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
  {h:"Les formes",tab:0,l:[
    "Le présent sans sujet ; verbes en -er, aller, ouvrir, offrir : *pas de s* avec tu (Parle ! Va ! Ouvre !), sauf *vas-y*, *parles-en*.",
    "*Veuillez* + infinitif = please, très poli (Veuillez patienter)."
  ]},
  {h:"Les pronoms",tab:1,l:[
    "Affirmatif : après le verbe, avec *moi, toi* ; deux pronoms : COD puis COI (donne-*le-moi*) ; devant en : donne-*m’en*.",
    "Négatif : l’ordre habituel, devant le verbe (ne *me le* donne pas)."
  ]},
  {h:"Adoucir et conseiller",l:[
    "s’il te plaît, s’il vous plaît · Pourriez-vous… ? · *Merci de* + infinitif · *Veuillez* + infinitif",
    "Consignes écrites : l’infinitif (Ne pas jeter sur la voie publique).",
    "*Allons-y !* = Let’s… ; conseil à l’oral B : Prends le temps de comparer."
  ]}
]
});})();
