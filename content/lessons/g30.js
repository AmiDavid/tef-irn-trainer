/* g30 — Poser des questions (card, lesson, 12 practice, 28 bank questions) */
(()=>{const B=window.TEF_BANK=window.TEF_BANK||{};
(B.grammar=B.grammar||[]).push({
  id:"g30", section:"La phrase complexe", order:7, title:"Poser des questions : est-ce que, inversion, quel", status:"untested",
  short:"Intonation (oral familier), est-ce que (courant), inversion (soutenu) ; quel s’accorde avec le nom.",
  details:"On pose une question fermée par l’intonation (Vous êtes libre ?), avec est-ce que (Est-ce que vous êtes libre ?) ou par l’inversion du sujet (Êtes-vous libre ?). Avec un mot interrogatif : Où est-ce que vous habitez ? / Où habitez-vous ? Quel (quelle, quels, quelles) s’accorde avec le nom ; qu’est-ce qui demande une chose sujet, qu’est-ce que une chose complément. À l’oral du TEF, variez les formes et restez poli : Pourriez-vous me dire… ?",
  examples:["Est-ce que le cours a lieu le samedi ?","À quelle heure ouvre la mairie ?","Pouvez-vous m’envoyer le formulaire ?","Qu’est-ce qui est inclus dans le prix ?"],
  mistakes:[
    {wrong:"Qu’est-ce que se passe ?", right:"Qu’est-ce qui se passe ?", why:"La chose est le sujet du verbe : qu’est-ce qui."},
    {wrong:"Quel est votre adresse ?", right:"Quelle est votre adresse ?", why:"Quel s’accorde avec le nom : adresse est féminin."},
    {wrong:"Où est-ce qu’habitez-vous ?", right:"Où est-ce que vous habitez ?", why:"Est-ce que + sujet + verbe, ou bien l’inversion seule (Où habitez-vous ?) : jamais les deux ensemble."},
    {wrong:"A-il reçu le message ?", right:"A-t-il reçu le message ?", why:"Entre deux voyelles, on ajoute -t- : a-t-il, va-t-elle."}
  ],
  drill:{prompt:"Complète : ___ heure commence la réunion ?", choices:["À quel","À quelle","Quelle","À qu’est-ce que"], answer:1}
});
B.grammarPlus=Object.assign(B.grammarPlus||{},{g30:{
  intro:"À l’expression orale A du TEF, vous devez poser une dizaine de questions variées et polies pour obtenir des informations (horaires, prix, conditions). À l’écrit et en compréhension, l’inversion et quel / lequel sont partout. Une question mal construite gêne tout de suite la communication.",
  rule:[
    "Question fermée (réponse oui / non), trois registres : intonation (Vous venez demain ?) — familier ; est-ce que (Est-ce que vous venez demain ?) — courant ; inversion (Venez-vous demain ?) — soutenu.",
    "Inversion : verbe-pronom avec un trait d’union (Pouvez-vous… ? Avez-vous… ?). Entre deux voyelles, on ajoute -t- : A-t-il… ? Va-t-elle… ? Parle-t-on… ? Aux temps composés, le pronom suit l’auxiliaire : Avez-vous reçu mon message ? N’avez-vous pas reçu… ? Avec je, l’inversion est rare, sauf avec quelques verbes courts : Puis-je… ? Dois-je… ? Ai-je… ?",
    "Avec un nom sujet, l’inversion reprend le nom par un pronom : Votre fils parle-t-il anglais ? Le magasin ouvre-t-il le dimanche ?",
    "Inversion simple : après où, quand, comment, combien, à quelle heure…, le nom sujet peut aussi passer après le verbe si le verbe n’a pas de COD : Où travaille votre fils ? Quand commence le stage ? Après que, c’est la seule possibilité (Que fait votre fils ?) ; après pourquoi, elle est impossible (Pourquoi le bureau est-il fermé ?).",
    "Mots interrogatifs (où, quand, comment, combien, pourquoi) + est-ce que ou inversion : Où est-ce que vous habitez ? / Où habitez-vous ? Jamais est-ce que avec l’inversion verbe-pronom (« Où est-ce qu’habitez-vous ? » est faux). À l’oral familier, le mot va souvent à la fin : Vous habitez où ?",
    "Personnes : qui (Qui est venu ? Qui avez-vous vu ? ou Qui est-ce que vous avez vu ?). Choses : qu’est-ce qui pour le sujet (Qu’est-ce qui se passe ?), qu’est-ce que ou que pour le complément (Qu’est-ce que vous voulez ? Que voulez-vous ?), quoi après une préposition (De quoi parlez-vous ?) ou à la fin, à l’oral familier (Vous faites quoi ?).",
    "Quel, quelle, quels, quelles s’accordent avec le nom : Quelle est votre adresse ? Quels documents faut-il apporter ? Lequel, laquelle, lesquels, lesquelles remplacent quel + nom pour un choix : Il y a deux formulaires : lequel dois-je remplir ?",
    "La préposition se place au début de la question : À quelle heure… ? Avec qui… ? Depuis quand… ? Pour combien de personnes… ? De quoi avez-vous besoin ?",
    "Pour être poli (oral A) : Pourriez-vous me dire… ? Je voudrais savoir si… Serait-il possible de… ? Dans une question indirecte, pas de est-ce que ni de trait d’union : Pourriez-vous me dire à quelle heure le bureau ferme ?",
    "Question indirecte : question oui / non → si ; qu’est-ce qui → ce qui ; qu’est-ce que → ce que ; les autres mots (où, quand, comment, quel…) ne changent pas : Je voudrais savoir si le cours a lieu le samedi, ce qui est inclus dans le prix et ce que je dois apporter."
  ],
  table:{head:["Registre","Question fermée","Avec un mot interrogatif"],rows:[
    ["familier (oral)","Vous êtes libre ?","Vous habitez où ?"],
    ["courant","Est-ce que vous êtes libre ?","Où est-ce que vous habitez ?"],
    ["soutenu (écrit, oral poli)","Êtes-vous libre ?","Où habitez-vous ?"]
  ]},
  tables:[
    {title:"Les mots interrogatifs", head:["Mot","On demande…","Exemple"], rows:[
      ["qui","une personne","Qui est votre conseiller ?"],
      ["qu’est-ce qui","une chose, sujet","Qu’est-ce qui ne marche pas ?"],
      ["qu’est-ce que / que","une chose, complément","Qu’est-ce que vous cherchez ? Que cherchez-vous ?"],
      ["quoi","une chose, après une préposition","À quoi sert ce document ?"],
      ["où","un lieu","Où se trouve la pharmacie ?"],
      ["quand","un moment","Quand commence le stage ?"],
      ["comment","la manière","Comment est-ce que je peux payer ?"],
      ["combien (de)","une quantité, un prix","Combien de temps dure la formation ?"],
      ["pourquoi","la cause","Pourquoi le bureau est-il fermé ?"],
      ["quel, quelle, quels, quelles","+ nom, ou + être","Quelle est la date limite ?"],
      ["lequel, laquelle, lesquels, lesquelles","un choix parmi plusieurs","Laquelle de ces formules recommandez-vous ?"]
    ]}
  ],
  tips:[
    "À l’oral A, variez : quelques questions avec est-ce que, quelques-unes avec l’inversion, et des formules polies (Pourriez-vous… ? Je voudrais savoir…). L’examinateur note la variété.",
    "Que s’élide devant une voyelle (Qu’avez-vous dit ?), qui jamais (Qui est là ?).",
    "Après pourquoi, un nom sujet est repris par un pronom : Pourquoi le train est-il en retard ? (et non « pourquoi est le train en retard »).",
    "Quelle ou qu’elle ? Quelle est votre adresse ? (interrogatif) ≠ Je pense qu’elle est partie (que + elle).",
    "Quel sert aussi à l’exclamation et s’accorde : Quel beau temps ! Quelle bonne idée !"
  ],
  examples:[
    {fr:"Est-ce que le stage est rémunéré ?", en:"Is the internship paid?", note:"Registre courant : est-ce que."},
    {fr:"Pouvez-vous me rappeler demain matin ?", en:"Can you call me back tomorrow morning?", note:"Inversion : verbe-pronom avec un trait d’union."},
    {fr:"Le loyer comprend-il les charges ?", en:"Does the rent include service charges?", note:"Le nom sujet est repris par il."},
    {fr:"À quelle heure ferme la piscine le dimanche ?", en:"What time does the pool close on Sundays?"},
    {fr:"Qu’est-ce qui est compris dans l’abonnement ?", en:"What’s included in the subscription?", note:"La chose est le sujet : qu’est-ce qui."},
    {fr:"Combien de personnes peuvent participer à l’atelier ?", en:"How many people can take part in the workshop?"},
    {fr:"Il y a deux offres : laquelle est la moins chère ?", en:"There are two offers: which one is cheaper?"},
    {fr:"Pourriez-vous me dire s’il reste des places ?", en:"Could you tell me if there are any places left?", note:"Question indirecte : si, sans inversion."}
  ],
  summary:[
    "Oui / non : intonation (familier), est-ce que (courant), inversion (soutenu).",
    "Inversion : trait d’union, -t- entre deux voyelles, nom sujet repris par il / elle.",
    "Qu’est-ce qui (sujet), qu’est-ce que (complément), quoi après une préposition.",
    "Quel s’accorde ; lequel = quel + nom ; la préposition va au début.",
    "Jamais est-ce que + inversion ; question indirecte : si, ce qui, ce que, sans est-ce que."
  ],
  practice:[
    {type:"mcq", lvl:1, prompt:"___ vous habitez ?", choices:["Où est-ce que","Où est-ce","Est-ce où"], answer:0, explain:"Mot interrogatif + est-ce que + sujet + verbe."},
    {type:"mcq", lvl:1, prompt:"___ est votre numéro de téléphone ?", choices:["Quel","Quelle","Qu’est-ce que"], answer:0, explain:"Numéro est masculin singulier : quel."},
    {type:"fill", lvl:1, prompt:"___ vous avez un rendez-vous ?", answers:["Est-ce que"], hint:"question fermée, registre courant", explain:"Question fermée courante : est-ce que + sujet + verbe."},
    {type:"fill", lvl:1, prompt:"___ coûte le billet ?", answers:["Combien"], explain:"Pour un prix : combien."},
    {type:"transform", lvl:1, instruction:"Posez la question avec l’inversion.", prompt:"Vous parlez anglais ?", answers:["Parlez-vous anglais ?"], explain:"Inversion : verbe-pronom avec un trait d’union."},
    {type:"order", lvl:1, words:["commence","heure","quelle","À","le","cours"], answers:["À quelle heure commence le cours ?","À quelle heure le cours commence ?"], explain:"La préposition et quelle + nom ouvrent la question ; à l’écrit, on inverse le nom sujet : commence le cours."},
    {type:"fix", lvl:2, prompt:"Qu’est-ce que ne fonctionne pas ?", answers:["Qu’est-ce qui ne fonctionne pas ?"], explain:"La chose est le sujet de fonctionner : qu’est-ce qui."},
    {type:"fix", lvl:2, prompt:"Quelle sont les horaires de la piscine ?", answers:["Quels sont les horaires de la piscine ?"], explain:"Horaires est masculin pluriel : quels."},
    {type:"transform", lvl:2, instruction:"Posez la question avec l’inversion.", prompt:"Est-ce que votre fille va à la cantine ?", answers:["Votre fille va-t-elle à la cantine ?"], explain:"Le nom sujet est repris par elle ; -t- entre deux voyelles."},
    {type:"order", lvl:2, words:["ces","Lequel","deux","de","modèles","préférez-vous"], answers:["Lequel de ces deux modèles préférez-vous ?"], explain:"Lequel (masculin, comme modèle) pour un choix, puis l’inversion."},
    {type:"mcq", lvl:3, prompt:"De ___ avez-vous besoin pour constituer le dossier ?", choices:["quoi","que","qu’est-ce que"], answer:0, explain:"Après une préposition, pour une chose : quoi."},
    {type:"fill", lvl:3, prompt:"Pourriez-vous me dire ___ le bureau ouvre le samedi ?", answers:["si"], hint:"question oui / non", explain:"Question fermée indirecte : si, sans inversion."}
  ]
}});
B.grammarMore=Object.assign(B.grammarMore||{},{g30:[
  {type:"mcq", lvl:1, prompt:"___ s’appelle votre médecin ?", choices:["Comment","Quel","Qu’est-ce que"], answer:0, explain:"Pour demander un nom : comment s’appelle… ?"},
  {type:"mcq", lvl:1, prompt:"___ est la date limite d’inscription ?", choices:["Quel","Quelle","Quelles"], answer:1, explain:"Date est féminin singulier : quelle."},
  {type:"mcq", lvl:1, prompt:"___ vous cherchez ?", choices:["Qu’est-ce que","Qu’est-ce qui","Quoi"], answer:0, explain:"Une chose complément (vous cherchez quelque chose) : qu’est-ce que."},
  {type:"mcq", lvl:1, prompt:"___ est votre conseillère ?", choices:["Qui","Que","Quoi"], answer:0, explain:"Pour une personne : qui."},
  {type:"fill", lvl:1, prompt:"___ partez-vous en vacances ?", answers:["Quand","À quel moment"], hint:"le moment", explain:"Pour un moment : quand (ou à quel moment)."},
  {type:"fill", lvl:1, prompt:"___ est-ce que vous apprenez le français ?", answers:["Pourquoi","Pour quelle raison"], hint:"la raison", explain:"Pour une raison : pourquoi (ou pour quelle raison)."},
  {type:"fill", lvl:1, prompt:"Le magasin est-___ ouvert le dimanche ?", answers:["il"], explain:"À l’inversion, le nom sujet est repris par il."},
  {type:"fix", lvl:1, prompt:"Est-ce vous pouvez m’aider ?", answers:["Est-ce que vous pouvez m’aider ?"], explain:"La formule complète est est-ce que."},
  {type:"fix", lvl:1, prompt:"Quel heure est-il ?", answers:["Quelle heure est-il ?"], explain:"Heure est féminin : quelle."},
  {type:"transform", lvl:1, instruction:"Posez la question avec « est-ce que ».", prompt:"Vous êtes disponible jeudi ?", answers:["Est-ce que vous êtes disponible jeudi ?"], explain:"Est-ce que + sujet + verbe, sans inversion."},
  {type:"order", lvl:1, words:["en","quand","Depuis","habitez-vous","France"], answers:["Depuis quand habitez-vous en France ?"], explain:"La préposition reste devant le mot interrogatif ; puis l’inversion verbe-pronom."},
  {type:"mcq", lvl:2, prompt:"___ se passe dans la rue ?", choices:["Qu’est-ce qui","Qu’est-ce que","Que"], answer:0, explain:"La chose est le sujet de se passer : qu’est-ce qui."},
  {type:"mcq", lvl:2, prompt:"Il y a trois salles. Dans ___ a lieu la réunion ?", choices:["laquelle","quelle","lequel"], answer:0, explain:"Un choix parmi des salles (féminin) : laquelle."},
  {type:"mcq", lvl:2, prompt:"Votre mari ___ venir à la réunion ?", choices:["peut-il","peut-t-il","il peut"], answer:0, explain:"Nom sujet + verbe-il ; pas de -t- ajouté : peut se termine déjà par t."},
  {type:"fill", lvl:2, prompt:"Avec ___ avez-vous rendez-vous ?", answers:["qui"], explain:"Une personne après une préposition : qui."},
  {type:"fill", lvl:2, prompt:"___ de temps faut-il pour obtenir le titre de séjour ?", answers:["Combien"], explain:"Une quantité (de temps) : combien de."},
  {type:"fill", lvl:2, prompt:"Parle-___ anglais à l’accueil ?", answers:["t-on"], hint:"pronom on", explain:"Entre deux voyelles, on ajoute -t- : parle-t-on."},
  {type:"fix", lvl:2, prompt:"Qu’est-ce qui vous voulez boire ?", answers:["Qu’est-ce que vous voulez boire ?"], explain:"Une chose complément (vous voulez quelque chose) : qu’est-ce que."},
  {type:"fix", lvl:2, prompt:"Quand est-ce que partez-vous en congé ?", answers:["Quand est-ce que vous partez en congé ?","Quand partez-vous en congé ?"], explain:"On ne combine pas est-ce que et l’inversion : est-ce que + sujet + verbe, ou bien l’inversion seule."},
  {type:"transform", lvl:2, instruction:"Posez la question avec l’inversion.", prompt:"Est-ce que le colis est arrivé ?", answers:["Le colis est-il arrivé ?"], explain:"Le nom sujet est repris par il après l’auxiliaire."},
  {type:"transform", lvl:2, instruction:"Posez la question qui correspond à la réponse « à 18 heures », avec l’inversion.", prompt:"La médiathèque ferme à 18 heures.", answers:["À quelle heure la médiathèque ferme-t-elle ?","À quelle heure ferme la médiathèque ?","Quand la médiathèque ferme-t-elle ?","Quand ferme la médiathèque ?"], explain:"À quelle heure (ou quand) en tête, puis l’inversion (reprise par elle, ou inversion simple du nom)."},
  {type:"order", lvl:2, words:["est-ce","quoi","De","vous","que","parlez"], answers:["De quoi est-ce que vous parlez ?"], explain:"Préposition + quoi, puis est-ce que + sujet + verbe."},
  {type:"mcq", lvl:3, prompt:"Pourriez-vous me dire ___ ?", choices:["où se trouve le service des urgences","où se trouve-t-il le service des urgences","où est-ce que se trouve le service des urgences"], answer:0, explain:"Question indirecte : ni trait d’union ni est-ce que."},
  {type:"fill", lvl:3, prompt:"Je voudrais savoir ___ vous acceptez les chèques.", answers:["si"], hint:"question oui / non", explain:"Question fermée indirecte : si."},
  {type:"fill", lvl:3, prompt:"___ de ces deux appartements avez-vous visité en premier ?", answers:["Lequel"], explain:"Un choix parmi des appartements (masculin) : lequel."},
  {type:"fix", lvl:3, prompt:"Pourquoi est fermé le guichet ?", answers:["Pourquoi le guichet est-il fermé ?","Pourquoi est-ce que le guichet est fermé ?"], explain:"Après pourquoi, le nom sujet est repris par un pronom : le guichet est-il…"},
  {type:"transform", lvl:3, instruction:"Transformez en question indirecte polie qui commence par « Pourriez-vous me dire ».", prompt:"Quand est-ce que les résultats seront publiés ?", answers:["Pourriez-vous me dire quand les résultats seront publiés ?","Pourriez-vous me dire quand seront publiés les résultats ?"], explain:"Question indirecte : sans est-ce que, sujet + verbe (ou inversion simple du nom : quand seront publiés les résultats)."},
  {type:"order", lvl:3, words:["voulez-vous","Que","dire","par","là"], answers:["Que voulez-vous dire par là ?"], explain:"Que + inversion, registre soutenu."}
]});
})();
