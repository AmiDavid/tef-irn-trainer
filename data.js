window.TEF_DATA = {
  official: {
    checked: '1 octobre 2026',
    requirement: 'Objectif personnel : B2 dans les 4 compétences. Le TEF IRN attribue un score de 0 à 499 par compétence.',
    links: [
      {label:'TEF IRN — présentation officielle', url:'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-irn/presentation/'},
      {label:'TEF IRN — déroulement et règles', url:'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-irn/passation/'},
      {label:'TEF IRN — préparation officielle', url:'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-irn/preparation/'},
      {label:'Naturalisation — ministère de l’Intérieur', url:'https://www.immigration.interieur.gouv.fr/devenir-francais/procedures-dacces-a-nationalite-francaise'}
    ]
  },
  profile: {
    name: 'Amichai',
    diagnosticDate: '2026-09-30',
    skills: [
      {id:'reading', name:'Compréhension écrite', level:'B2 probable', readiness:74, status:'strength'},
      {id:'listening', name:'Compréhension orale', level:'B1+ → B2', readiness:67, status:'watch'},
      {id:'writing', name:'Expression écrite', level:'B1', readiness:49, status:'priority'},
      {id:'speaking', name:'Expression orale', level:'B1+', readiness:58, status:'priority'}
    ],
    priorities: [
      'Stabiliser les phrases quand tu improvises',
      'Articles, genre et accords',
      'Prépositions et contractions',
      'Subjonctif et structures verbales',
      'Lexique précis de la vie quotidienne',
      'Argumentation orale B2',
      'Orthographe et accents à l’écrit'
    ]
  },
  errors: [
    {id:'e1', category:'Lexique', wrong:'une course de cuisine', correct:'un cours de cuisine', note:'cours = lesson; course = race/shopping errand', severity:'high', seen:4, next:'today'},
    {id:'e2', category:'Lexique', wrong:'un magazine du quartier', correct:'un magasin / un commerce du quartier', note:'magazine = revue; magasin = shop', severity:'high', seen:3, next:'today'},
    {id:'e3', category:'Quantité', wrong:'beaucoup des commerces', correct:'beaucoup de commerces', note:'Après beaucoup, peu, assez, trop : de + nom.', severity:'high', seen:3, next:'today'},
    {id:'e4', category:'Articles', wrong:'la opinion de les habitants', correct:'l’opinion des habitants', note:'Élision + de + les = des.', severity:'high', seen:2, next:'tomorrow'},
    {id:'e5', category:'Subjonctif', wrong:'pour que vous prendre en compte', correct:'pour que vous preniez en compte', note:'pour que + subjonctif', severity:'high', seen:2, next:'today'},
    {id:'e6', category:'Négation', wrong:'le quartier est pas assez bien desservi', correct:'le quartier n’est pas assez bien desservi', note:'À l’écrit formel, conserve ne…pas.', severity:'medium', seen:2, next:'3d'},
    {id:'e7', category:'Accord', wrong:'la semaine dernier', correct:'la semaine dernière', note:'Accord de l’adjectif avec semaine.', severity:'medium', seen:1, next:'3d'},
    {id:'e8', category:'Genre', wrong:'une nouvelle travaille', correct:'un nouveau travail', note:'travail = nom masculin; travaille = verbe.', severity:'high', seen:1, next:'today'},
    {id:'e9', category:'Expression', wrong:'prendre son retrait', correct:'prendre sa retraite', note:'Expression fixe.', severity:'medium', seen:1, next:'7d'},
    {id:'e10', category:'Registre', wrong:'changer de tu à vous', correct:'garder le même registre', note:'Choisir tu ou vous et rester cohérent.', severity:'medium', seen:2, next:'3d'}
  ],
  vocab: [
    {id:'v1', front:'tenir compte de', back:'to take into account', example:'Il faut tenir compte de l’avis des habitants.', tag:'argumentation'},
    {id:'v2', front:'être desservi par', back:'to be served by (transport)', example:'Le quartier est bien desservi par le métro.', tag:'ville'},
    {id:'v3', front:'un compromis', back:'a compromise', example:'Il faut trouver un compromis acceptable.', tag:'argumentation'},
    {id:'v4', front:'une solution équilibrée', back:'a balanced solution', example:'La mairie cherche une solution équilibrée.', tag:'argumentation'},
    {id:'v5', front:'cela vaut le coup', back:'it is worth it', example:'À mon avis, cela vaut le coup d’essayer.', tag:'oral'},
    {id:'v6', front:'en revanche', back:'on the other hand', example:'C’est pratique. En revanche, c’est cher.', tag:'connecteur'},
    {id:'v7', front:'cependant', back:'however', example:'Le projet est utile. Cependant, il coûte cher.', tag:'connecteur'},
    {id:'v8', front:'pourtant', back:'yet / however', example:'Il était fatigué. Pourtant, il a continué.', tag:'connecteur'},
    {id:'v9', front:'progressivement', back:'gradually', example:'La ville peut réduire le trafic progressivement.', tag:'adverbe'},
    {id:'v10', front:'un cours d’essai', back:'a trial lesson', example:'Je voudrais réserver un cours d’essai.', tag:'quotidien'},
    {id:'v11', front:'prendre sa retraite', back:'to retire', example:'Mon père va prendre sa retraite.', tag:'quotidien'},
    {id:'v12', front:'les transports en commun', back:'public transport', example:'Je prends les transports en commun.', tag:'ville'},
    {id:'v13', front:'accéder à', back:'to access / get to', example:'Il est difficile d’accéder au centre en voiture.', tag:'ville'},
    {id:'v14', front:'d’ailleurs', back:'besides / moreover', example:'C’est moins cher. D’ailleurs, c’est plus écologique.', tag:'connecteur'},
    {id:'v15', front:'par conséquent', back:'therefore / consequently', example:'Le trafic augmente ; par conséquent, le bruit aussi.', tag:'connecteur'}
  ],
  grammar: [
    {
      id:'g1', title:'Quantité + de', status:'weak', short:'Après beaucoup, peu, assez, trop, combien : de + nom.',
      details:'On emploie généralement de après une expression de quantité : beaucoup de commerces, peu de temps, assez d’argent, trop de voitures. Devant une voyelle, de devient d’ : beaucoup d’idées. On ne met pas automatiquement des après beaucoup.',
      examples:['beaucoup de magasins','assez de temps','trop d’erreurs','beaucoup d’idées'],
      drill:{prompt:'Complète : Il y a ___ commerces dans ce quartier.', choices:['beaucoup des','beaucoup de','beaucoup les'], answer:1}
    },
    {
      id:'g2', title:'De + les = des', status:'weak', short:'La contraction de + les devient des.',
      details:'Certaines prépositions et certains articles se contractent. de + le = du, de + les = des, à + le = au, à + les = aux. On dit l’opinion des habitants, l’accès au métro, parler aux voisins.',
      examples:['l’opinion des habitants','près du métro','accéder au centre','parler aux voisins'],
      drill:{prompt:'Choisis : l’avis ___ habitants.', choices:['de les','des','du'], answer:1}
    },
    {
      id:'g3', title:'Pour que + subjonctif', status:'weak', short:'Après pour que, le verbe se met au subjonctif.',
      details:'Pour exprimer un but avec deux sujets différents, on utilise pour que + subjonctif : Je vous écris pour que vous preniez ma demande en compte. Si le sujet est le même, on préfère pour + infinitif : Je travaille pour réussir.',
      examples:['pour que vous preniez','pour qu’il puisse venir','pour que nous trouvions une solution'],
      drill:{prompt:'Complète : Je vous écris pour que vous ___ ma demande.', choices:['prenez','prendre','preniez'], answer:2}
    },
    {
      id:'g4', title:'Négation : ne…pas', status:'learning', short:'À l’oral courant, « ne » est souvent omis ; à l’écrit soigné, garde-le.',
      details:'En français standard écrit : sujet + ne/n’ + verbe + pas. Il n’est pas assez bien desservi. Je ne comprends pas. À l’oral familier, on entend souvent “je sais pas”, mais évite cette forme dans la production écrite du TEF.',
      examples:['Je ne suis pas disponible.','Le quartier n’est pas bien desservi.','Nous n’avons pas assez de temps.'],
      drill:{prompt:'Version écrite correcte : “Le quartier est pas pratique.”', choices:['Le quartier ne pas est pratique.','Le quartier n’est pas pratique.','Le quartier n’est pratique pas.'], answer:1}
    },
    {
      id:'g5', title:'Genre et accord', status:'weak', short:'Déterminant, nom et adjectif doivent s’accorder.',
      details:'Repère le genre du nom, puis accorde les éléments qui dépendent de lui. semaine est féminin : la semaine dernière. travail est masculin : un nouveau travail. Les erreurs de genre sont particulièrement visibles dans une production courte.',
      examples:['la semaine dernière','un nouveau travail','une solution équilibrée','des transports publics'],
      drill:{prompt:'Choisis la bonne forme : ___ travail intéressant.', choices:['une nouvelle','un nouveau','un nouvelle'], answer:1}
    },
    {
      id:'g6', title:'Passé composé ou imparfait', status:'untested', short:'Action terminée vs contexte/habitude dans le passé.',
      details:'Le passé composé présente généralement un événement borné : J’ai commencé un nouveau travail lundi. L’imparfait décrit un état, une habitude ou un arrière-plan : Quand j’habitais à Lyon, je prenais le tram tous les jours.',
      examples:['J’ai commencé lundi.','Je travaillais souvent le soir.','Il pleuvait quand je suis sorti.'],
      drill:{prompt:'Quand j’___ à Paris, je prenais souvent le métro.', choices:['ai habité','habitais','habiterai'], answer:1}
    },
    {
      id:'g7', title:'Hypothèse avec si', status:'untested', short:'Si + imparfait → conditionnel présent pour une hypothèse.',
      details:'Pour une situation hypothétique au présent : si + imparfait, conditionnel présent. Si j’avais plus de temps, je suivrais deux cours. Pour une possibilité réelle : si + présent, futur ou présent.',
      examples:['Si j’avais le temps, je viendrais.','Si je peux, je viendrai.'],
      drill:{prompt:'Si j’___ plus de temps, je suivrais deux cours.', choices:['aurais','avais','ai'], answer:1}
    },
    {
      id:'g8', title:'Connecteurs B2', status:'learning', short:'Relie les idées avec précision, sans empiler les connecteurs.',
      details:'Cependant introduit une opposition ou une nuance ; pourtant marque une contradiction ou une concession ; en revanche met deux éléments en contraste ; en effet apporte une explication ou une justification ; par conséquent introduit une conséquence ; d’ailleurs ajoute un argument ou une précision. Au B2, le but est surtout de choisir le lien logique qui correspond exactement au rapport entre les idées.',
      examples:['C’est pratique. Cependant, c’est cher.','Il n’y a pas de métro ; par conséquent, beaucoup prennent la voiture.','Le projet est utile. D’ailleurs, il réduit le bruit.'],
      drill:{prompt:'Il n’y a pas de métro ; ___, beaucoup prennent la voiture.', choices:['par conséquent','cependant','tandis que'], answer:0}
    },
    {
      id:'g9', title:'Pronoms relatifs : qui, que, dont, où', status:'untested', short:'Choisis le pronom selon sa fonction dans la proposition.',
      details:'qui = sujet ; que = complément d’objet direct ; dont remplace un complément introduit par de ; où = lieu ou moment. Avec un complément introduit par à, on emploie notamment lequel, laquelle, lesquels ou lesquelles après la préposition : C’est l’examen auquel je me prépare.',
      examples:['Le livre qui est ici','Le livre que je lis','Le sujet dont je parle','La ville où j’habite','L’examen auquel je me prépare'],
      drill:{prompt:'Le sujet ___ je parle est important.', choices:['que','dont','qui'], answer:1}
    },
    {
      id:'g10', title:'Y et en', status:'untested', short:'y remplace souvent à + lieu/chose ; en remplace de + chose/quantité.',
      details:'J’y vais = je vais à cet endroit. J’en parle = je parle de cela. J’en veux deux = je veux deux de ces objets. Pour des personnes, on emploie souvent un pronom tonique ou lui/leur selon la structure.',
      examples:['J’y vais demain.','J’en ai besoin.','J’en voudrais deux.'],
      drill:{prompt:'J’ai parlé de ce problème. → J’___ ai parlé.', choices:['y','en','lui'], answer:1}
    }
  ],
  games: [
    {id:'article', title:'Article Attack', icon:'⚡', blurb:'Répare tes erreurs de de/des, genre et accord.', minutes:3},
    {id:'connector', title:'Connector Challenge', icon:'🔗', blurb:'Choisis le lien logique qui exprime vraiment ton idée.', minutes:4},
    {id:'error', title:'Find My Error', icon:'🧯', blurb:'Tes propres erreurs reviennent sous une nouvelle forme.', minutes:4},
    {id:'speed', title:'Speed Vocab', icon:'⏱️', blurb:'10 mots à reconnaître rapidement.', minutes:3}
  ],
  listening: [
    {
      id:'l1', level:'B1+', text:'Bonjour, je vous appelle au sujet de l’atelier de samedi. J’avais réservé une place pour dix heures, mais mon train arrive finalement à onze heures. Est-ce qu’il serait possible de participer au groupe de l’après-midi à la place ?',
      question:'Pourquoi la personne appelle-t-elle ?', choices:['Pour demander le remboursement d’un billet','Pour changer d’horaire','Pour réserver un train','Pour annuler définitivement'], answer:1
    },
    {
      id:'l2', level:'B2', text:'Le télétravail reste apprécié pour la souplesse qu’il offre, mais plusieurs salariés disent désormais qu’ils préfèrent venir au bureau deux ou trois jours par semaine. Ce n’est donc pas un rejet du travail à distance : ils cherchent surtout un meilleur équilibre entre autonomie et échanges avec leurs collègues.',
      question:'Quelle idée principale est exprimée ?', choices:['Les salariés veulent supprimer le télétravail','Les salariés cherchent un compromis','Les entreprises refusent le travail hybride','Le bureau est toujours plus efficace'], answer:1
    },
    {
      id:'l3', level:'B2', text:'Au départ, la mairie voulait fermer entièrement la rue aux voitures. Après plusieurs réunions avec les habitants, elle a finalement décidé de maintenir l’accès le matin pour les livraisons et les personnes à mobilité réduite. Le projet a donc été modifié, mais son objectif environnemental reste le même.',
      question:'Qu’est-ce qui a changé ?', choices:['L’objectif environnemental','La possibilité d’un accès limité','Le nombre d’habitants','La date du projet'], answer:1
    }
  ],
  reading: [
    {
      id:'r1', text:'La mairie expérimente pendant six mois une nouvelle organisation de la collecte des déchets. Les habitants devront sortir les bacs le soir précédant le passage, et non plus le matin même. Cette mesure vise à réduire les retards, particulièrement fréquents aux heures de pointe. Un bilan sera réalisé avant toute décision définitive.',
      question:'Pourquoi la mairie change-t-elle l’organisation ?', choices:['Pour supprimer la collecte','Pour réduire les retards','Pour faire payer les habitants','Pour diminuer le nombre de bacs'], answer:1
    },
    {
      id:'r2', text:'De nombreux salariés apprécient les formations en ligne parce qu’elles sont faciles à intégrer à leur emploi du temps. Toutefois, lorsque le contenu exige beaucoup d’échanges ou de pratique, le présentiel reste souvent préféré. Le choix dépend donc moins d’une opposition entre ancien et moderne que des objectifs de la formation.',
      question:'Quelle est la conclusion du texte ?', choices:['Le présentiel est toujours meilleur','Le numérique remplace toutes les formations','Le format doit dépendre du but recherché','Les salariés refusent les formations en ligne'], answer:2
    }
  ],
  writingPrompts: [
    {type:'A', minutes:10, minWords:40, prompt:'Tu écris à une connaissance que tu n’as pas vue depuis longtemps. Prends de ses nouvelles et propose de reprendre contact.'},
    {type:'B', minutes:20, minWords:100, prompt:'Ta mairie envisage de supprimer des places de stationnement pour créer davantage d’espaces verts. Écris pour expliquer ton point de vue et essayer de convaincre.'}
  ],
  speakingPrompts: [
    {type:'A', minutes:5, title:'Obtenir des renseignements', prompt:'Tu téléphones à une association qui propose des cours du soir. Demande les horaires, le prix, le niveau, la durée et les modalités d’inscription.'},
    {type:'B', minutes:5, title:'Convaincre un ami', prompt:'Convaincs un ami de participer avec toi à une activité le samedi. Il trouve cela trop cher et pense ne pas avoir le niveau.'}
  ],
  quests: [
    {id:'q1', title:'Maîtriser 10 mots faibles', target:10, progress:0},
    {id:'q2', title:'Faire 2 sessions orales', target:2, progress:0},
    {id:'q3', title:'Écrire une réponse de 100 mots', target:1, progress:0},
    {id:'q4', title:'Atteindre 80% sur de/des', target:5, progress:1}
  ]
};
