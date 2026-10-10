(()=>{const B=window.TEF_BANK=window.TEF_BANK||{};B.grammarPlus=Object.assign(B.grammarPlus||{},{
  g20:{
    intro:"Le subjonctif est attendu au niveau B2 : à l’écrit (section B, lettre argumentée) comme à l’oral (section A, demander poliment, section B, convaincre), des formes comme « il faut que je fasse » ou « pour que vous puissiez » montrent immédiatement au correcteur que tu maîtrises la langue.",
    rule:[
      "Pars de la 3e personne du pluriel du présent de l’indicatif : ils partent, ils écrivent, ils finissent.",
      "Enlève -ent pour obtenir le radical : part-, écriv-, finiss-.",
      "Ajoute -e, -es, -e, -ent pour je, tu, il/elle, ils/elles : que je parte, que tu écrives, qu’ils finissent.",
      "Pour nous et vous, reprends la forme de l’imparfait : que nous partions, que vous écriviez ; c’est là que les verbes à deux radicaux changent (que je boive / que nous buvions).",
      "Apprends par cœur les irréguliers : être, avoir, aller, faire, pouvoir, savoir, vouloir, ainsi que falloir (qu’il faille) et pleuvoir (qu’il pleuve)."
    ],
    table:{head:["Verbe","que je / tu / il","que nous / vous","qu’ils"],rows:[
      ["être","sois, sois, soit","soyons, soyez","soient"],
      ["avoir","aie, aies, ait","ayons, ayez","aient"],
      ["aller","aille, ailles, aille","allions, alliez","aillent"],
      ["faire","fasse, fasses, fasse","fassions, fassiez","fassent"],
      ["pouvoir","puisse, puisses, puisse","puissions, puissiez","puissent"],
      ["savoir","sache, saches, sache","sachions, sachiez","sachent"],
      ["vouloir","veuille, veuilles, veuille","voulions, vouliez","veuillent"],
      ["prendre","prenne, prennes, prenne","prenions, preniez","prennent"],
      ["venir","vienne, viennes, vienne","venions, veniez","viennent"],
      ["devoir","doive, doives, doive","devions, deviez","doivent"]
    ]},
    tips:[
      "Pour les verbes en -er, je, tu, il et ils ont la même forme qu’à l’indicatif (que je parle) : seuls nous et vous changent (que nous parlions). Les irréguliers sont donc tes meilleurs « marqueurs » de niveau.",
      "Ne confonds pas « que j’aie » (avoir, prononcé comme « è ») et « que j’aille » (aller, prononcé « aïe »).",
      "Les verbes en -ier et -yer s’écrivent avec deux i ou y + i à nous/vous : que nous étudiions, que vous envoyiez. C’est une faute très fréquente à l’écrit.",
      "Être et avoir n’ont jamais de i après le y : que nous soyons, que vous ayez (et non « soyions », « ayiez »).",
      "Récite une phrase modèle pour mémoriser : « Il faut que je sois là, que j’aie mes papiers, que j’aille à la mairie, que je fasse la queue, que je puisse signer et que je sache quoi dire. »"
    ],
    examples:[
      {fr:"Il faut que je prenne rendez-vous chez le médecin avant vendredi.",en:"I need to make an appointment with the doctor before Friday.",note:"prendre → ils prennent → que je prenne"},
      {fr:"Le propriétaire souhaite que nous lui envoyions une attestation d’assurance.",en:"The landlord would like us to send him a certificate of insurance.",note:"envoyer : y + i avec nous (envoyions)"},
      {fr:"Il est indispensable que vous ayez votre titre de séjour sur vous.",en:"It is essential that you have your residence permit on you.",note:"avoir : que vous ayez, sans i"},
      {fr:"Il faut qu’elle aille chercher son colis à la poste.",en:"She has to go and pick up her parcel at the post office.",note:"aller : qu’elle aille"},
      {fr:"Je voudrais que tu saches que tu peux compter sur moi.",en:"I’d like you to know that you can count on me.",note:"savoir : que tu saches"},
      {fr:"Le médecin veut que je boive plus d’eau.",en:"The doctor wants me to drink more water.",note:"boire : que je boive, mais que nous buvions"},
      {fr:"Il faut que nous recevions une réponse de la CAF avant la fin du mois.",en:"We need to get an answer from the CAF before the end of the month.",note:"recevoir : nous/vous sur l’imparfait (recevions)"},
      {fr:"Il est possible qu’il pleuve demain : prends un parapluie.",en:"It may rain tomorrow, so take an umbrella.",note:"pleuvoir : qu’il pleuve"}
    ],
    summary:[
      "Radical de « ils » au présent + -e, -es, -e, -ent.",
      "Nous et vous = forme de l’imparfait : que nous venions, que vous preniez.",
      "Irréguliers à connaître : sois, aie, aille, fasse, puisse, sache, veuille.",
      "Pas de i après le y pour être et avoir : soyons, ayez ; mais envoyions, étudiions."
    ],
    practice:[
      {type:"mcq",prompt:"Il faut que tu ___ ce formulaire avant lundi.",choices:["remplis","remplisses","remplissais"],answer:1,explain:"Remplir → ils remplissent → que tu remplisses."},
      {type:"mcq",prompt:"Il est important que vous ___ à l’heure à l’entretien.",choices:["soyez","êtes","soyiez"],answer:0,explain:"Être au subjonctif : que vous soyez, sans i après le y."},
      {type:"fill",prompt:"Il faut que je ___ une demande de logement social.",answers:["fasse"],hint:"faire",explain:"Faire a un subjonctif irrégulier : que je fasse."},
      {type:"fill",prompt:"Il faut que vous ___ à la réunion de mardi.",answers:["veniez"],hint:"venir",explain:"Pour vous, le subjonctif reprend la forme de l’imparfait : vous veniez."},
      {type:"mcq",prompt:"Je ne suis pas sûr que mon fils ___ nager.",choices:["sait","sache","saches","sachait"],answer:1,explain:"Savoir au subjonctif : que je sache, qu’il sache (troisième personne, sans s)."},
      {type:"order",words:["à","faut","j’aille","la","il","mairie","que"],answers:["Il faut que j’aille à la mairie."],explain:"Il faut que + subjonctif ; aller → que j’aille."},
      {type:"fill",prompt:"Il faut que nous ___ des photos d’identité récentes.",answers:["ayons"],hint:"avoir",explain:"Avoir au subjonctif : que nous ayons, sans i après le y."},
      {type:"fix",prompt:"Il faut que vous m’envoyez votre RIB.",answers:["Il faut que vous m’envoyiez votre RIB."],explain:"Au subjonctif, vous prend la forme de l’imparfait : vous envoyiez (y + iez)."},
      {type:"fix",prompt:"Il faut que nous soyions prêts à huit heures.",answers:["Il faut que nous soyons prêts à huit heures."],explain:"Être au subjonctif : que nous soyons, jamais « soyions »."},
      {type:"transform",instruction:"Commencez la phrase par « Il faut que… ».",prompt:"Tu prends le bus de huit heures.",answers:["Il faut que tu prennes le bus de huit heures."],explain:"Prendre → ils prennent → que tu prennes (deux n)."},
      {type:"transform",instruction:"Commencez la phrase par « Il est nécessaire que… ».",prompt:"Les candidats savent utiliser ce logiciel.",answers:["Il est nécessaire que les candidats sachent utiliser ce logiciel."],explain:"Savoir a un subjonctif irrégulier : qu’ils sachent."},
      {type:"order",words:["buvions","il","d’eau","que","faut","plus","nous"],answers:["Il faut que nous buvions plus d’eau."],explain:"Boire a deux radicaux : que je boive, mais que nous buvions."}
    ]
  },
  g21:{
    intro:"En expression écrite et orale (section B), on exprime sans cesse des souhaits, des craintes et des conditions : « je souhaite que », « à condition que », « pour que ». Savoir quand le subjonctif est obligatoire, et quand il est interdit, est un critère clé du niveau B2.",
    rule:[
      "Repère le verbe principal : obligation (il faut que, il est nécessaire que), volonté (vouloir, souhaiter, exiger, demander que), sentiment (être content, regretter, avoir peur que) ou doute (douter que, il est possible que) → subjonctif.",
      "Certaines conjonctions imposent le subjonctif : pour que, afin que, avant que, bien que, à condition que, à moins que, sans que, jusqu’à ce que.",
      "Espérer que, après que, parce que, pendant que, il est probable que, il est certain que → indicatif.",
      "Si le sujet est le même dans les deux propositions, utilise l’infinitif : je veux partir, je suis content d’être là, avant de partir, pour réussir.",
      "Pour un fait déjà accompli, emploie le subjonctif passé (avoir ou être au subjonctif + participe passé) : je suis content que tu sois venu."
    ],
    table:{head:["+ subjonctif","+ indicatif"],rows:[
      ["il faut que, il est important que","il est certain que, il est évident que"],
      ["je veux, je souhaite, j’exige que","j’espère que"],
      ["il est possible que","il est probable que"],
      ["avant que","après que"],
      ["pour que, afin que","parce que, puisque"],
      ["bien que","même si, alors que"]
    ]},
    tips:[
      "Souhaiter → subjonctif, espérer → indicatif : je souhaite qu’il vienne / j’espère qu’il viendra.",
      "« Il est possible que » + subjonctif, mais « il est probable que » + indicatif : la forte probabilité se rapproche de la certitude.",
      "Après avant que, à moins que ou de peur que, l’écrit soutenu ajoute souvent un « ne » explétif (avant qu’il ne parte) : ce n’est pas une négation.",
      "« I want you to come » se dit « je veux que tu viennes », jamais « je veux toi venir » ; et « je veux que je… » est impossible : dis « je veux + infinitif »."
    ],
    examples:[
      {fr:"Je souhaiterais que vous m’envoyiez la liste des pièces à fournir.",en:"I would like you to send me the list of documents required.",note:"souhait → subjonctif"},
      {fr:"Le médecin exige que je fasse une prise de sang à jeun.",en:"The doctor insists that I have a blood test on an empty stomach.",note:"exiger que + subjonctif"},
      {fr:"J’ai peur que le dossier ne soit pas complet.",en:"I’m afraid the file isn’t complete.",note:"crainte → subjonctif"},
      {fr:"Je vous laisse mes coordonnées pour que vous puissiez me rappeler.",en:"I’m leaving you my contact details so that you can call me back.",note:"but : pour que"},
      {fr:"Il est possible que la réunion soit reportée à jeudi.",en:"The meeting may be postponed to Thursday.",note:"possibilité → subjonctif"},
      {fr:"Restez dans la salle d’attente jusqu’à ce que le médecin vous appelle.",en:"Stay in the waiting room until the doctor calls you.",note:"jusqu’à ce que + subjonctif"},
      {fr:"J’espère que vous trouverez rapidement un appartement.",en:"I hope you find a flat quickly.",note:"espérer → indicatif (ici futur)"},
      {fr:"Je regrette que vous n’ayez pas pu venir à la réunion.",en:"I’m sorry you couldn’t come to the meeting.",note:"subjonctif passé : fait déjà accompli"}
    ],
    summary:[
      "Obligation, volonté, sentiment, doute + que → subjonctif.",
      "Pour que, avant que, bien que, à condition que, sans que, jusqu’à ce que → subjonctif.",
      "Espérer que, après que, il est probable que → indicatif.",
      "Même sujet → infinitif : je veux partir, avant de partir."
    ],
    practice:[
      {type:"mcq",prompt:"Je souhaite que mes enfants ___ dans une bonne école.",choices:["vont","aillent","iront"],answer:1,explain:"Souhaiter que exprime une volonté : subjonctif, aller → qu’ils aillent."},
      {type:"mcq",prompt:"J’espère que tu ___ bientôt ton permis.",choices:["auras","aies","avoir"],answer:0,explain:"Espérer que est suivi de l’indicatif (ici le futur)."},
      {type:"fill",prompt:"Je vous explique le trajet pour que vous ne vous ___ pas.",answers:["perdiez"],hint:"perdre",explain:"Pour que + subjonctif : que vous perdiez."},
      {type:"fill",prompt:"Il est possible que le bureau ___ fermé lundi.",answers:["soit"],hint:"être",explain:"Il est possible que exprime une possibilité : subjonctif."},
      {type:"mcq",prompt:"Nous attendrons ici jusqu’à ce que le magasin ___.",choices:["ouvre","ouvrira","ouvert"],answer:0,explain:"Jusqu’à ce que + subjonctif : qu’il ouvre."},
      {type:"mcq",prompt:"Il est probable que le train ___ du retard.",choices:["ait","aura","aie"],answer:1,explain:"Il est probable que exprime une quasi-certitude : indicatif."},
      {type:"fix",prompt:"Je veux que je trouve un emploi avant l’été.",answers:["Je veux trouver un emploi avant l’été."],explain:"Même sujet dans les deux propositions : on utilise l’infinitif."},
      {type:"fix",prompt:"Il faut que tu viens signer le bail.",answers:["Il faut que tu viennes signer le bail."],explain:"Il faut que + subjonctif : que tu viennes."},
      {type:"transform",instruction:"Reliez les deux phrases avec « avant que ».",prompt:"Rentre le linge. Il va pleuvoir.",answers:["Rentre le linge avant qu’il pleuve.","Rentre le linge avant qu’il ne pleuve."],explain:"Avant que + subjonctif (pleuvoir → qu’il pleuve) ; le ne explétif est facultatif."},
      {type:"transform",instruction:"Commencez la phrase par « Je suis content que… ».",prompt:"Tu as obtenu ton diplôme.",answers:["Je suis content que tu aies obtenu ton diplôme."],explain:"Sentiment + subjonctif ; le fait est accompli, donc subjonctif passé : que tu aies obtenu."},
      {type:"order",words:["puisse","fort","pour","t’entendre","parle","qu’il","plus"],answers:["Parle plus fort pour qu’il puisse t’entendre."],explain:"Pour que + subjonctif : qu’il puisse."},
      {type:"order",words:["sans","je","saches","partirai","que","ne","le","tu","pas"],answers:["Je ne partirai pas sans que tu le saches."],explain:"Sans que + subjonctif : que tu saches."}
    ]
  },
  g22:{
    intro:"En section B (écrit et oral), tu donnes ton opinion et tu réfutes celle des autres : « je pense que…, mais je ne crois pas que… ». Alterner correctement indicatif et subjonctif dans ces phrases d’opinion est une marque nette du niveau B2.",
    rule:[
      "Opinion affirmative (penser, croire, trouver, estimer, être sûr, il me semble que) → indicatif : je pense qu’il a raison.",
      "Opinion négative → subjonctif dans un registre soigné : je ne pense pas qu’il ait raison.",
      "Question avec inversion → subjonctif fréquent : croyez-vous qu’il puisse venir ? Avec est-ce que ou l’intonation, l’indicatif reste courant.",
      "Doute ou incertitude (douter que, ne pas être sûr que, il n’est pas certain que, il semble que) → subjonctif.",
      "Le subjonctif n’a pas de futur : je pense qu’il viendra → je ne pense pas qu’il vienne."
    ],
    table:{head:["Expression","Mode","Exemple"],rows:[
      ["je pense / crois / trouve que","indicatif","Je crois qu’il est parti."],
      ["je ne pense pas / ne crois pas que","subjonctif","Je ne crois pas qu’il soit parti."],
      ["pensez-vous que… ? (inversion)","subjonctif (souvent)","Pensez-vous qu’il soit parti ?"],
      ["je suis sûr(e) que, il est certain que","indicatif","Je suis sûre qu’il viendra."],
      ["je ne suis pas sûr(e) que, je doute que","subjonctif","Je doute qu’il vienne."],
      ["il me semble que / il semble que","indicatif / subjonctif","Il me semble qu’il est là. / Il semble que ce soit fermé."]
    ]},
    tips:[
      "Moyen mnémotechnique : affirmation = certitude = indicatif ; négation ou doute = subjonctif.",
      "À l’oral spontané, on entend « je ne pense pas que c’est… » : à l’examen, montre le registre soigné avec « que ce soit ».",
      "Formule utile pour réfuter en section B : « Je ne crois pas que ce soit la meilleure solution, car… ».",
      "Attention à la petite différence : « il me semble que » + indicatif, mais « il semble que » + subjonctif le plus souvent."
    ],
    examples:[
      {fr:"Je trouve que les transports en commun sont trop chers dans cette ville.",en:"I think public transport is too expensive in this city.",note:"opinion affirmative → indicatif"},
      {fr:"Je ne pense pas que ce loyer soit justifié pour un appartement aussi petit.",en:"I don’t think this rent is justified for such a small flat.",note:"négation → subjonctif"},
      {fr:"Croyez-vous que je puisse obtenir un rendez-vous cette semaine ?",en:"Do you think I could get an appointment this week?",note:"inversion → subjonctif"},
      {fr:"Il me semble que la pharmacie ferme à dix-neuf heures.",en:"I think the pharmacy closes at 7 p.m.",note:"il me semble que → indicatif"},
      {fr:"Il semble que la grève soit terminée.",en:"It seems that the strike is over.",note:"il semble que → subjonctif le plus souvent"},
      {fr:"Je ne suis pas certain que cette formation soit reconnue par l’État.",en:"I’m not sure this training is recognised by the State.",note:"incertitude → subjonctif"},
      {fr:"Je suis convaincue que le télétravail améliore la qualité de vie.",en:"I’m convinced that working from home improves quality of life.",note:"conviction → indicatif"},
      {fr:"Je ne crois pas que le directeur ait lu mon courriel.",en:"I don’t think the manager has read my email.",note:"subjonctif passé pour un fait passé"}
    ],
    summary:[
      "Je pense / crois / trouve que + indicatif.",
      "Je ne pense pas / ne crois pas que + subjonctif.",
      "Douter que, ne pas être sûr que → subjonctif.",
      "Pas de futur au subjonctif : on emploie le subjonctif présent."
    ],
    practice:[
      {type:"mcq",prompt:"Je pense que cette école ___ une bonne réputation.",choices:["a","ait","aie"],answer:0,explain:"Opinion affirmative : indicatif."},
      {type:"mcq",prompt:"Je ne pense pas que ce restaurant ___ ouvert le lundi.",choices:["est","soit","sera"],answer:1,explain:"Opinion négative : subjonctif."},
      {type:"fill",prompt:"Je crois que le bus ___ toutes les dix minutes.",answers:["passe"],hint:"passer, au présent",explain:"Croire à la forme affirmative : indicatif présent."},
      {type:"fill",prompt:"Je ne crois pas que nous ___ le temps de visiter le musée.",answers:["ayons"],hint:"avoir",explain:"Croire à la forme négative : subjonctif, que nous ayons."},
      {type:"mcq",prompt:"Je doute que la mairie ___ financer ce projet.",choices:["peut","puisse","pourra"],answer:1,explain:"Douter que exprime une incertitude : subjonctif."},
      {type:"mcq",prompt:"Il me semble que tu ___ raison.",choices:["as","aies","ait"],answer:0,explain:"Il me semble que présente une opinion : indicatif."},
      {type:"fix",prompt:"Je pense que ce soit une bonne idée.",answers:["Je pense que c’est une bonne idée."],explain:"À la forme affirmative, penser est suivi de l’indicatif."},
      {type:"fix",prompt:"Je ne suis pas sûr qu’il viendra demain.",answers:["Je ne suis pas sûr qu’il vienne demain."],explain:"Ne pas être sûr exprime un doute : subjonctif, qui n’a pas de futur."},
      {type:"transform",instruction:"Mettez la phrase à la forme négative.",prompt:"Je crois qu’il a compris la consigne.",answers:["Je ne crois pas qu’il ait compris la consigne."],explain:"La négation entraîne le subjonctif ; passé composé → subjonctif passé."},
      {type:"transform",instruction:"Mettez la phrase à la forme négative.",prompt:"Je pense que ce quartier est dangereux.",answers:["Je ne pense pas que ce quartier soit dangereux."],explain:"Je ne pense pas que + subjonctif : soit."},
      {type:"order",words:["pas","ce","je","possible","pense","que","soit","ne"],answers:["Je ne pense pas que ce soit possible."],explain:"Négation de l’opinion → subjonctif : que ce soit."},
      {type:"order",words:["puisse","ce","qu’il","doute","venir","je","soir"],answers:["Je doute qu’il puisse venir ce soir."],explain:"Douter que + subjonctif, même à la forme affirmative."}
    ]
  },
  g23:{
    intro:"Les documents de compréhension écrite (articles, avis officiels, règlements) et les annonces sont remplis de passifs : « les dossiers seront traités », « le stationnement est interdit ». À l’écrit (section A, fait divers), le passif met en valeur l’événement plutôt que son auteur.",
    rule:[
      "Prends le COD de la phrase active : il devient le sujet (La police a arrêté le voleur → Le voleur…).",
      "Conjugue être au temps du verbe actif : a arrêté → a été arrêté ; arrêtera → sera arrêté ; arrête → est arrêté.",
      "Ajoute le participe passé et accorde-le avec le nouveau sujet : la voleuse a été arrêtée.",
      "L’ancien sujet devient complément d’agent avec par (action) ou de (sentiment, état : aimé de, connu de, entouré de) ; supprime-le si c’est « on » ou s’il est évident.",
      "Seuls les verbes avec un COD se mettent au passif : on ne dit pas « j’ai été téléphoné » mais « on m’a téléphoné »."
    ],
    table:{head:["Temps","Actif","Passif"],rows:[
      ["présent","On nettoie la salle.","La salle est nettoyée."],
      ["passé composé","On a nettoyé la salle.","La salle a été nettoyée."],
      ["imparfait","On nettoyait la salle.","La salle était nettoyée."],
      ["futur","On nettoiera la salle.","La salle sera nettoyée."],
      ["plus-que-parfait","On avait nettoyé la salle.","La salle avait été nettoyée."],
      ["conditionnel","On nettoierait la salle.","La salle serait nettoyée."]
    ]},
    tips:[
      "Au passif, le temps se lit sur être : « est construit » = présent, « a été construit » = passé composé.",
      "Piège anglophone : « I was told » ne se traduit pas par « j’ai été dit », mais par « on m’a dit » ; « I was given » → « on m’a donné ».",
      "« Été » est toujours invariable ; seul le dernier participe s’accorde : elles ont été invitées.",
      "La forme pronominale a souvent un sens passif : ce plat se mange froid, ce mot ne s’utilise plus.",
      "Dans un fait divers (écrit A), le passif est idéal : « Un cycliste a été blessé hier soir… »."
    ],
    examples:[
      {fr:"Les dossiers incomplets ne seront pas examinés.",en:"Incomplete applications will not be considered.",note:"futur passif sans agent"},
      {fr:"Mon vélo a été volé devant la gare.",en:"My bike was stolen outside the station.",note:"agent inconnu : on l’omet"},
      {fr:"L’appartement a été rénové par l’ancien propriétaire.",en:"The flat was renovated by the previous owner.",note:"agent introduit par par"},
      {fr:"La rue sera fermée à la circulation pendant les travaux.",en:"The street will be closed to traffic during the works.",note:"accord au féminin"},
      {fr:"Cette pharmacie est connue de tous les habitants du quartier.",en:"This pharmacy is known to everyone in the neighbourhood.",note:"de avec un verbe d’état"},
      {fr:"Les candidats ont été convoqués à huit heures.",en:"The candidates were asked to come at eight o’clock.",note:"accord au masculin pluriel"},
      {fr:"On m’a demandé un justificatif de domicile.",en:"I was asked for proof of address.",note:"demander à quelqu’un : pas de passif, on garde on + actif"},
      {fr:"Ce médicament doit être pris pendant le repas.",en:"This medicine must be taken with a meal.",note:"infinitif passif : être pris"}
    ],
    summary:[
      "Être au temps de l’actif + participe passé accordé avec le sujet.",
      "Agent : par pour une action, de pour un sentiment ou un état ; souvent omis.",
      "« Été » ne s’accorde jamais.",
      "Pas de passif avec un COI : I was told → on m’a dit."
    ],
    practice:[
      {type:"mcq",prompt:"La lettre ___ hier matin.",choices:["a été envoyée","est envoyée","a envoyé"],answer:0,explain:"Action passée : être au passé composé (a été) + participe accordé avec lettre."},
      {type:"mcq",prompt:"Les nouveaux horaires ___ affichés la semaine prochaine.",choices:["seront","auront","ont"],answer:0,explain:"Passif futur : être au futur + participe passé."},
      {type:"fill",prompt:"Les résultats de l’examen ont été ___ en ligne.",answers:["publiés"],hint:"publier",explain:"Le participe s’accorde avec le sujet résultats (masculin pluriel)."},
      {type:"fill",prompt:"Cette décision a ___ prise par la directrice.",answers:["été"],hint:"auxiliaire du passif",explain:"Passif au passé composé : a été + participe passé."},
      {type:"mcq",prompt:"On m’a proposé un nouveau contrat. → ___",choices:["J’ai été proposé un nouveau contrat.","Un nouveau contrat m’a été proposé.","Un nouveau contrat a proposé à moi."],answer:1,explain:"Seul le COD (un nouveau contrat) peut devenir sujet du passif ; « me » reste complément."},
      {type:"fix",prompt:"Les fenêtres ont été changé l’année dernière.",answers:["Les fenêtres ont été changées l’année dernière."],explain:"Au passif, le participe s’accorde avec le sujet : fenêtres, féminin pluriel."},
      {type:"fix",prompt:"J’ai été dit que le bureau était fermé.",answers:["On m’a dit que le bureau était fermé."],explain:"Dire à quelqu’un n’a pas de passif personnel : on traduit « I was told » par « on m’a dit »."},
      {type:"order",words:["été","la","à","reportée","réunion","jeudi","a"],answers:["La réunion a été reportée à jeudi."],explain:"Passé composé passif : a été + participe accordé (reportée)."},
      {type:"order",words:["terminés","juin","travaux","en","les","seront"],answers:["Les travaux seront terminés en juin."],explain:"Futur passif : seront + participe accordé au masculin pluriel."},
      {type:"transform",instruction:"Mettez la phrase à la voix passive.",prompt:"Le maire inaugurera la médiathèque.",answers:["La médiathèque sera inaugurée par le maire."],explain:"Futur → sera ; participe accordé avec médiathèque ; agent introduit par par."},
      {type:"transform",instruction:"Mettez la phrase à la voix passive, sans complément d’agent.",prompt:"On a annulé tous les vols.",answers:["Tous les vols ont été annulés."],explain:"On disparaît au passif ; passé composé → ont été + participe accordé."},
      {type:"transform",instruction:"Mettez la phrase à la voix active.",prompt:"Le dossier a été validé par la préfecture.",answers:["La préfecture a validé le dossier."],explain:"L’agent devient sujet ; a été validé (passé composé passif) → a validé."}
    ]
  },
  g24:{
    intro:"En compréhension orale, il faut souvent comprendre qui a dit quoi ; à l’écrit et à l’oral, tu rapportes les propos d’un voisin, d’un employeur ou d’un article : « il m’a expliqué que… ». Les changements de temps, de pronoms et de repères sont très évalués au B2.",
    rule:[
      "Supprime les guillemets, ajoute un verbe introducteur (dire, expliquer, répondre, annoncer) + que, et adapte pronoms et possessifs : « Je perds mes clés » → Il dit qu’il perd ses clés.",
      "Si le verbe introducteur est au présent, les temps ne changent pas : Elle dit qu’elle viendra.",
      "S’il est au passé : présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel présent, futur antérieur → conditionnel passé ; imparfait, plus-que-parfait et conditionnel ne changent pas.",
      "Questions : question fermée → si ; qu’est-ce que → ce que ; qu’est-ce qui → ce qui ; où, quand, pourquoi, comment se gardent, sans inversion ni est-ce que.",
      "Impératif → de + infinitif : « Fermez la porte » → Il m’a demandé de fermer la porte.",
      "Adapte les repères : aujourd’hui → ce jour-là, demain → le lendemain, hier → la veille, ici → là."
    ],
    table:{head:["Discours direct","Discours indirect (verbe au passé)"],rows:[
      ["« Je travaille. »","qu’il travaillait"],
      ["« J’ai fini. »","qu’il avait fini"],
      ["« Je partirai. »","qu’il partirait"],
      ["« Tu viens ? »","si je venais"],
      ["« Qu’est-ce que tu veux ? »","ce que je voulais"],
      ["« Qu’est-ce qui se passe ? »","ce qui se passait"],
      ["« Viens ! »","de venir"],
      ["demain / hier / aujourd’hui","le lendemain / la veille / ce jour-là"]
    ]},
    tips:[
      "Si + il → s’il ; mais si + elle ne s’élide jamais : elle m’a demandé si elle pouvait entrer.",
      "Ne garde jamais l’inversion ni « est-ce que » dans une question indirecte : il m’a demandé où j’habitais (et non « où habitais-je »).",
      "Varie les verbes introducteurs pour enrichir ta copie : affirmer, préciser, rappeler, assurer, se plaindre que, promettre de.",
      "Pense aux pronoms : « je » de l’autre devient il ou elle, « vous » peut devenir je ou nous selon la situation."
    ],
    examples:[
      {fr:"La secrétaire m’a répondu que le docteur était en congé jusqu’au lundi suivant.",en:"The secretary told me the doctor was on leave until the following Monday.",note:"présent → imparfait"},
      {fr:"Mon employeur m’a promis qu’il augmenterait mon salaire en janvier.",en:"My employer promised me he would raise my salary in January.",note:"futur → conditionnel"},
      {fr:"L’agent m’a demandé où j’habitais.",en:"The officer asked me where I lived.",note:"pas d’inversion"},
      {fr:"Le propriétaire voulait savoir ce que je faisais comme métier.",en:"The landlord wanted to know what I did for a living.",note:"qu’est-ce que → ce que"},
      {fr:"Elle m’a demandé ce qui s’était passé la veille.",en:"She asked me what had happened the day before.",note:"qu’est-ce qui → ce qui ; hier → la veille"},
      {fr:"Le contrôleur nous a demandé de descendre du train.",en:"The ticket inspector asked us to get off the train.",note:"impératif → de + infinitif"},
      {fr:"Ma voisine m’a dit qu’elle avait déjà rempli sa déclaration d’impôts.",en:"My neighbour told me she had already filled in her tax return.",note:"passé composé → plus-que-parfait"},
      {fr:"Le conseiller affirme que les délais seront plus courts.",en:"The adviser says the waiting times will be shorter.",note:"verbe introducteur au présent : pas de changement"}
    ],
    summary:[
      "Verbe introducteur au passé : présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel.",
      "Question fermée → si ; qu’est-ce que → ce que ; qu’est-ce qui → ce qui ; pas d’inversion.",
      "Impératif → de + infinitif.",
      "Demain → le lendemain, hier → la veille, aujourd’hui → ce jour-là."
    ],
    practice:[
      {type:"mcq",prompt:"« Je suis malade. » → La semaine dernière, Paul a dit qu’il ___ malade.",choices:["est","était","sera"],answer:1,explain:"Verbe introducteur au passé : le présent devient imparfait."},
      {type:"mcq",prompt:"« Qu’est-ce que vous cherchez ? » → Le vendeur m’a demandé ___ je cherchais.",choices:["qu’est-ce que","ce que","que"],answer:1,explain:"Au discours indirect, qu’est-ce que devient ce que."},
      {type:"fill",prompt:"« Vous avez fini ? » → Il nous a demandé ___ nous avions fini.",answers:["si"],explain:"Une question fermée se rapporte avec si."},
      {type:"fill",prompt:"« J’appellerai le plombier. » → Mon propriétaire m’a assuré qu’il ___ le plombier.",answers:["appellerait"],hint:"appeler",explain:"Après un verbe au passé, le futur devient conditionnel présent (deux l)."},
      {type:"mcq",prompt:"« Remplissez ce formulaire. » → L’employée m’a demandé ___ ce formulaire.",choices:["de remplir","que je remplis","remplir"],answer:0,explain:"Un ordre à l’impératif devient de + infinitif."},
      {type:"order",words:["l’aider","demandé","pouvais","m’a","si","elle","je"],answers:["Elle m’a demandé si je pouvais l’aider."],explain:"Question fermée → si ; présent (« tu peux ») → imparfait."},
      {type:"order",words:["au","de","le","lit","médecin","dit","rester","m’a"],answers:["Le médecin m’a dit de rester au lit."],explain:"Impératif (« Restez au lit ») → de + infinitif."},
      {type:"fix",prompt:"Il m’a demandé où est-ce que j’habitais.",answers:["Il m’a demandé où j’habitais."],explain:"Dans une question indirecte, on supprime est-ce que."},
      {type:"fix",prompt:"Hier, ma sœur m’a dit qu’elle déménagera le mois prochain.",answers:["Hier, ma sœur m’a dit qu’elle déménagerait le mois prochain.","Hier, ma sœur m’a dit qu’elle déménagerait le mois suivant."],explain:"Verbe introducteur au passé : le futur devient conditionnel présent."},
      {type:"transform",instruction:"Mettez au discours indirect en commençant par « Elle m’a dit que… ».",prompt:"« J’ai perdu mon passeport. »",answers:["Elle m’a dit qu’elle avait perdu son passeport."],explain:"Passé composé → plus-que-parfait ; je → elle ; mon → son."},
      {type:"transform",instruction:"Mettez au discours indirect en commençant par « Il m’a demandé… ».",prompt:"« Qu’est-ce qui ne va pas ? »",answers:["Il m’a demandé ce qui n’allait pas."],explain:"Qu’est-ce qui → ce qui ; présent → imparfait."},
      {type:"transform",instruction:"Mettez au discours indirect en commençant par « Le directeur a annoncé que… ».",prompt:"« Le magasin ouvrira demain. »",answers:["Le directeur a annoncé que le magasin ouvrirait le lendemain."],explain:"Futur → conditionnel ; demain → le lendemain."}
    ]
  },
  g25:{
    intro:"Le gérondif rend ton expression plus fluide et plus concise, à l’écrit comme à l’oral : « en arrivant en France, j’ai… », « on économise en prenant le vélo ». En section B, il permet de présenter un moyen ou une condition en quelques mots.",
    rule:[
      "Prends nous au présent, enlève -ons et ajoute -ant : nous finissons → finissant ; nous faisons → faisant.",
      "Place en devant ; pour un verbe pronominal, garde le pronom accordé avec le sujet : en me levant, en vous inscrivant.",
      "Retiens les trois irréguliers : être → en étant, avoir → en ayant, savoir → en sachant.",
      "Vérifie que le sujet du gérondif est le même que celui du verbe principal.",
      "Choisis le sens : simultanéité, moyen ou manière, condition, cause ; tout en ajoute une idée d’opposition.",
      "Pour la négation, encadre le participe : en ne disant rien, en n’ayant pas vu."
    ],
    table:{head:["Sens","Exemple","Équivalent"],rows:[
      ["simultanéité","Il téléphone en conduisant.","pendant qu’il conduit"],
      ["moyen / manière","J’économise en cuisinant chez moi.","grâce au fait que je cuisine"],
      ["condition","En t’inscrivant aujourd’hui, tu auras une réduction.","si tu t’inscris aujourd’hui"],
      ["cause","Il s’est blessé en tombant de vélo.","parce qu’il est tombé"],
      ["opposition (tout en)","Tout en gagnant bien sa vie, il se plaint.","bien qu’il gagne bien sa vie"]
    ]},
    tips:[
      "Le gérondif est invariable : jamais de -e ni de -s (elles sont parties en courant).",
      "« By doing » = en faisant ; « while doing » = en faisant ou tout en faisant ; « on arriving » = en arrivant. Jamais « par faisant ».",
      "Attention à l’orthographe des irréguliers : en ayant (pas « en avant »), en sachant (pas « en savant »).",
      "Commence un récit par un gérondif pour gagner en fluidité : « En sortant du travail, j’ai remarqué… »."
    ],
    examples:[
      {fr:"En m’inscrivant à France Travail, j’ai pu suivre une formation gratuite.",en:"By registering with France Travail, I was able to take a free training course.",note:"verbe pronominal : en m’inscrivant"},
      {fr:"Vous économiserez de l’argent en achetant un abonnement annuel.",en:"You’ll save money by buying an annual pass.",note:"moyen"},
      {fr:"Il s’est cassé le bras en tombant dans l’escalier.",en:"He broke his arm falling down the stairs.",note:"cause"},
      {fr:"En ayant tous vos documents le jour du rendez-vous, vous gagnerez du temps.",en:"If you have all your documents on the day of the appointment, you’ll save time.",note:"condition ; avoir → ayant"},
      {fr:"Tout en travaillant à temps plein, elle prépare un diplôme en ligne.",en:"While working full-time, she is studying for an online degree.",note:"tout en : simultanéité et opposition"},
      {fr:"En ne répondant pas à ce courrier, vous risquez une pénalité.",en:"If you don’t reply to this letter, you risk a penalty.",note:"négation autour du participe"},
      {fr:"J’ai rencontré mes voisins en promenant mon chien.",en:"I met my neighbours while walking my dog.",note:"simultanéité"},
      {fr:"En sachant parler français, vous trouverez plus facilement un emploi.",en:"If you can speak French, you’ll find a job more easily.",note:"savoir → sachant"}
    ],
    summary:[
      "En + radical de nous + -ant ; irréguliers : étant, ayant, sachant.",
      "Même sujet que le verbe principal.",
      "Sens : simultanéité, moyen, condition, cause ; tout en = opposition.",
      "Invariable ; le pronom réfléchi suit le sujet (en me levant)."
    ],
    practice:[
      {type:"mcq",prompt:"Quel est le gérondif du verbe « avoir » ?",choices:["en avant","en ayant","en eyant"],answer:1,explain:"Avoir fait partie des trois gérondifs irréguliers : en ayant."},
      {type:"mcq",prompt:"Elle chante ___ la vaisselle.",choices:["en faisant","en fait","en faire"],answer:0,explain:"Gérondif : en + participe présent (nous faisons → faisant)."},
      {type:"fill",prompt:"J’ai appris l’anglais ___ des séries en version originale.",answers:["en regardant"],hint:"regarder, au gérondif",explain:"Le moyen s’exprime avec en + participe présent."},
      {type:"fill",prompt:"Ne téléphone pas ___ !",answers:["en conduisant"],hint:"conduire, au gérondif",explain:"Nous conduisons → conduisant : simultanéité."},
      {type:"mcq",prompt:"Je me suis fait mal au dos ___ des cartons.",choices:["en portant","en portants","par porter"],answer:0,explain:"Le gérondif est invariable et ne se construit pas avec par."},
      {type:"order",words:["en","il","travaille","suivant","des","tout","cours"],answers:["Il travaille tout en suivant des cours."],explain:"Tout en + participe présent souligne que les deux actions se font en même temps."},
      {type:"order",words:["une","pratiquant","on","la","apprend","en","langue"],answers:["On apprend une langue en la pratiquant."],explain:"Le pronom complément se place entre en et le participe : en la pratiquant."},
      {type:"fix",prompt:"En nous levant tôt, tu éviteras les embouteillages.",answers:["En te levant tôt, tu éviteras les embouteillages."],explain:"Le pronom réfléchi doit correspondre au sujet tu : en te levant."},
      {type:"fix",prompt:"Il a trouvé un appartement en lisants les annonces.",answers:["Il a trouvé un appartement en lisant les annonces."],explain:"Le gérondif est invariable : en lisant."},
      {type:"transform",instruction:"Remplacez la subordonnée par un gérondif.",prompt:"Si vous réservez en ligne, vous paierez moins cher.",answers:["En réservant en ligne, vous paierez moins cher."],explain:"Le gérondif peut exprimer la condition ; le sujet (vous) est le même."},
      {type:"transform",instruction:"Remplacez la subordonnée par un gérondif.",prompt:"Pendant qu’il attendait le bus, il a lu le journal.",answers:["En attendant le bus, il a lu le journal.","Tout en attendant le bus, il a lu le journal."],explain:"Simultanéité avec le même sujet : en attendant."},
      {type:"transform",instruction:"Remplacez « parce que » et la subordonnée par un gérondif.",prompt:"Il s’est blessé parce qu’il est tombé de l’échelle.",answers:["Il s’est blessé en tombant de l’échelle."],explain:"Le gérondif peut exprimer la cause quand le sujet est le même."}
    ]
  },
  g26:{
    intro:"Toute argumentation (écrit B, oral B) repose sur des liens logiques : justifier une opinion, montrer les effets d’une mesure. Varier les connecteurs de cause et de conséquence, au-delà de « parce que » et « donc », améliore directement la note de cohérence.",
    rule:[
      "Cause + proposition : parce que (réponse à pourquoi), puisque (cause connue), comme (en tête de phrase), car (après la principale), étant donné que, vu que.",
      "Cause + nom : grâce à (résultat positif), à cause de (résultat négatif), en raison de (neutre, administratif), faute de (manque), à force de (répétition).",
      "Conséquence + proposition : donc, alors, c’est pourquoi, par conséquent, si bien que, de sorte que + indicatif.",
      "Intensité + conséquence : si / tellement + adjectif ou adverbe + que ; tant de / tellement de + nom + que.",
      "Autres moyens : entraîner, provoquer, causer + nom ; d’où + nom (d’où mon retard)."
    ],
    table:{head:["Connecteur","Construction","Exemple"],rows:[
      ["comme","+ proposition, en tête","Comme le bureau était fermé, je suis revenu le lendemain."],
      ["étant donné que","+ indicatif","Étant donné que le bus est en retard, je prends un taxi."],
      ["faute de","+ nom sans article ou infinitif","Faute de place, la réunion est reportée."],
      ["à force de","+ infinitif ou nom","À force de travailler, il a réussi."],
      ["par conséquent","entre deux phrases","Le dossier est incomplet ; par conséquent, il est refusé."],
      ["d’où","+ nom","Il y avait des travaux, d’où le retard."],
      ["tellement de… que","+ nom","Il y avait tellement de monde que nous sommes partis."]
    ]},
    tips:[
      "Car ne commence jamais une phrase et ne répond pas à « pourquoi ? » : « Pourquoi ? — Parce que… ».",
      "Grâce à = résultat positif, à cause de = résultat négatif ; dans une lettre officielle, en raison de est toujours sûr.",
      "À cause de + nom, parce que + verbe conjugué : à cause de la grève / parce qu’il y a une grève.",
      "Dans une lettre de réclamation, enchaîne cause et conséquence : « En raison de ce retard, j’ai manqué mon rendez-vous ; par conséquent, je demande un remboursement. »"
    ],
    examples:[
      {fr:"Comme je ne parlais pas bien français, j’ai suivi des cours du soir.",en:"As I didn’t speak French well, I took evening classes.",note:"comme en tête de phrase"},
      {fr:"Le vol a été annulé en raison d’une grève des contrôleurs aériens.",en:"The flight was cancelled due to an air traffic controllers’ strike.",note:"en raison de : neutre, administratif"},
      {fr:"Faute de justificatif, votre demande ne peut pas être traitée.",en:"Without supporting documents, your application cannot be processed.",note:"faute de + nom sans article"},
      {fr:"À force de pratiquer, elle parle maintenant couramment.",en:"By dint of practising, she now speaks fluently.",note:"à force de : répétition"},
      {fr:"Étant donné que vous habitez loin, vous pouvez travailler à distance le vendredi.",en:"Given that you live far away, you can work remotely on Fridays.",note:"étant donné que + indicatif"},
      {fr:"Il y avait tellement de bruit dans l’immeuble que nous avons déménagé.",en:"There was so much noise in the building that we moved out.",note:"tellement de + nom + que"},
      {fr:"Le loyer n’a pas été payé ; par conséquent, le propriétaire a envoyé une lettre de relance.",en:"The rent wasn’t paid; consequently, the landlord sent a reminder letter.",note:"par conséquent : registre soutenu"},
      {fr:"La route était inondée, d’où le retard du bus.",en:"The road was flooded, hence the bus delay.",note:"d’où + nom"}
    ],
    summary:[
      "Parce que (après), comme (en tête), puisque (cause connue), car (écrit, jamais en tête).",
      "Grâce à (+), à cause de (−), en raison de (neutre), faute de (manque) + nom.",
      "Donc, c’est pourquoi, par conséquent, si bien que + indicatif.",
      "Si / tellement + adjectif + que ; tant de / tellement de + nom + que."
    ],
    practice:[
      {type:"mcq",prompt:"Il est arrivé en retard ___ un accident sur l’autoroute.",choices:["à cause d’","parce qu’","grâce à"],answer:0,explain:"Devant un nom et pour un résultat négatif : à cause de."},
      {type:"mcq",prompt:"___ il faisait beau, nous avons mangé dans le jardin.",choices:["Car","Comme","Donc"],answer:1,explain:"En tête de phrase, la cause s’exprime avec comme ; car ne commence pas une phrase."},
      {type:"fill",prompt:"___ argent, ils n’ont pas pu partir en vacances.",answers:["Faute d’","Par manque d’"],hint:"exprime un manque",explain:"Faute de + nom sans article exprime un manque ; élision devant argent."},
      {type:"fill",prompt:"Il y avait ___ monde à la préfecture que j’ai attendu trois heures.",answers:["tellement de","tant de"],explain:"Devant un nom, l’intensité se marque avec tellement de ou tant de… que."},
      {type:"mcq",prompt:"Le dossier est incomplet ; ___, il ne peut pas être accepté.",choices:["par conséquent","puisque","grâce à"],answer:0,explain:"Par conséquent introduit la conséquence entre deux propositions."},
      {type:"mcq",prompt:"« Pourquoi tu n’es pas venu ? — ___ j’étais malade. »",choices:["Car","Parce que","Comme"],answer:1,explain:"Pour répondre à « pourquoi ? », on emploie parce que."},
      {type:"order",words:["a","réussi","qu’elle","tellement","elle","travaillé","a"],answers:["Elle a tellement travaillé qu’elle a réussi."],explain:"Verbe + tellement… que exprime une conséquence liée à l’intensité."},
      {type:"order",words:["en","grève","le","d’une","annulé","train","raison","est"],answers:["Le train est annulé en raison d’une grève."],explain:"En raison de + nom : cause neutre, ton administratif."},
      {type:"fix",prompt:"Je n’ai pas pu dormir à cause de mes voisins faisaient du bruit.",answers:["Je n’ai pas pu dormir parce que mes voisins faisaient du bruit.","Je n’ai pas pu dormir car mes voisins faisaient du bruit.","Je n’ai pas pu dormir à cause de mes voisins qui faisaient du bruit."],explain:"À cause de doit être suivi d’un nom ; devant une proposition, il faut parce que (ou car)."},
      {type:"fix",prompt:"Grâce à la grève, je suis arrivé en retard au travail.",answers:["À cause de la grève, je suis arrivé en retard au travail.","En raison de la grève, je suis arrivé en retard au travail."],explain:"Le résultat est négatif : à cause de (ou en raison de), pas grâce à."},
      {type:"transform",instruction:"Reliez les deux phrases avec « si bien que ».",prompt:"Il a beaucoup neigé. Les écoles sont fermées.",answers:["Il a beaucoup neigé, si bien que les écoles sont fermées.","Il a beaucoup neigé si bien que les écoles sont fermées."],explain:"Si bien que introduit une conséquence et se construit avec l’indicatif."},
      {type:"transform",instruction:"Commencez la phrase par « Comme ».",prompt:"Je suis resté chez moi parce que j’étais fatigué.",answers:["Comme j’étais fatigué, je suis resté chez moi.","Comme j’étais fatigué je suis resté chez moi."],explain:"Comme place la cause en tête de phrase, avant la conséquence."}
    ]
  },
  g27:{
    intro:"Nuancer son point de vue est indispensable en section B, à l’écrit comme à l’oral : reconnaître un argument adverse avant de le réfuter (« bien que…, je pense que… ») est exactement ce que le correcteur attend au B2. En compréhension, ces connecteurs signalent souvent la réponse attendue.",
    rule:[
      "Bien que, quoique + subjonctif : bien qu’il soit tard, nous continuons.",
      "Malgré, en dépit de + nom : malgré la fatigue, en dépit des difficultés.",
      "Même si + indicatif (jamais futur ni conditionnel juste après si) ; alors que, tandis que + indicatif pour opposer deux faits.",
      "Entre deux phrases : pourtant, cependant, néanmoins, toutefois ; en revanche pour un contraste (par contre est plus oral).",
      "Avoir beau + infinitif : avoir se conjugue, beau ne change pas (J’ai beau essayer, je n’y arrive pas)."
    ],
    table:{head:["Connecteur","Suivi de","Exemple"],rows:[
      ["bien que / quoique","subjonctif","Bien qu’il soit cher, ce logement me plaît."],
      ["malgré / en dépit de","nom","Malgré son prix, ce logement me plaît."],
      ["même si","indicatif","Même s’il est cher, ce logement me plaît."],
      ["alors que / tandis que","indicatif","Il est cher, alors que l’autre est abordable."],
      ["pourtant / cependant","phrase","Il est cher ; pourtant, il me plaît."],
      ["avoir beau","infinitif","J’ai beau chercher, je ne trouve rien de moins cher."],
      ["en revanche","phrase (contraste)","Le loyer est élevé ; en revanche, les charges sont comprises."]
    ]},
    tips:[
      "Trio à retenir : bien que + subjonctif, malgré + nom, même si + indicatif — trois façons d’exprimer la même idée.",
      "Même si ne prend jamais le futur ni le conditionnel : même s’il pleut (et non « même s’il pleuvra »).",
      "« Malgré que » est critiqué par la norme : à l’examen, utilise bien que.",
      "Avoir beau : nous avons beau, elles ont eu beau — beau reste toujours invariable.",
      "Alors que peut aussi indiquer le temps (au moment où) : c’est le contexte qui décide."
    ],
    examples:[
      {fr:"Bien que j’aie envoyé mon dossier en mars, je n’ai toujours pas de réponse.",en:"Although I sent my application in March, I still haven’t had an answer.",note:"bien que + subjonctif passé"},
      {fr:"Malgré la grève, la plupart des bus circulent normalement.",en:"Despite the strike, most buses are running normally.",note:"malgré + nom"},
      {fr:"Même si le trajet est long, je préfère habiter à la campagne.",en:"Even if the commute is long, I prefer living in the country.",note:"même si + indicatif"},
      {fr:"Ce quartier est animé le jour ; en revanche, il est très calme le soir.",en:"This area is lively during the day; on the other hand, it’s very quiet in the evening.",note:"en revanche : contraste"},
      {fr:"J’ai beau relancer le service client, personne ne me répond.",en:"However much I chase customer service, nobody answers me.",note:"avoir beau + infinitif"},
      {fr:"En dépit des difficultés, l’association a maintenu son festival.",en:"In spite of the difficulties, the association kept its festival going.",note:"en dépit de : soutenu"},
      {fr:"Les loyers augmentent, tandis que les salaires stagnent.",en:"Rents are rising, whereas wages are stagnating.",note:"tandis que : opposition de deux faits"},
      {fr:"L’appartement est petit ; il est néanmoins très lumineux.",en:"The flat is small; it is nevertheless very bright.",note:"néanmoins entre deux phrases"}
    ],
    summary:[
      "Bien que + subjonctif ; malgré + nom ; même si + indicatif.",
      "Alors que, tandis que + indicatif pour opposer deux faits.",
      "Pourtant, cependant, néanmoins, en revanche relient deux phrases.",
      "Avoir beau + infinitif : tournure idiomatique de niveau B2."
    ],
    practice:[
      {type:"mcq",prompt:"___ le froid, beaucoup de gens attendaient devant la mairie.",choices:["Malgré","Bien que","Même si"],answer:0,explain:"Devant un nom (le froid), on utilise malgré."},
      {type:"mcq",prompt:"Même si tu ___ en retard, viens quand même.",choices:["sois","es","serais"],answer:1,explain:"Même si est suivi de l’indicatif."},
      {type:"fill",prompt:"Bien qu’elle ___ trois langues, elle a du mal à trouver un emploi.",answers:["connaisse"],hint:"connaître",explain:"Bien que + subjonctif : qu’elle connaisse."},
      {type:"fill",prompt:"J’ai ___ chercher, je ne trouve pas d’appartement à ce prix.",answers:["beau"],hint:"avoir … + infinitif",explain:"Avoir beau + infinitif exprime un effort inutile."},
      {type:"mcq",prompt:"Mon mari préfère la ville, ___ je rêve de la campagne.",choices:["tandis que","malgré","bien que"],answer:0,explain:"Tandis que oppose deux faits et se construit avec l’indicatif."},
      {type:"mcq",prompt:"Ce poste est bien payé ; ___, les horaires sont difficiles.",choices:["en revanche","bien que","malgré"],answer:0,explain:"Entre deux phrases, on marque le contraste avec en revanche."},
      {type:"order",words:["que","travaille","son","tandis","étudie","elle","mari"],answers:["Elle travaille tandis que son mari étudie."],explain:"Tandis que + indicatif oppose deux situations."},
      {type:"order",words:["malgré","sortis","la","nous","pluie","sommes"],answers:["Nous sommes sortis malgré la pluie."],explain:"Malgré + nom."},
      {type:"fix",prompt:"Même s’il pleuvra demain, la brocante aura lieu.",answers:["Même s’il pleut demain, la brocante aura lieu."],explain:"Après même si, on n’emploie pas le futur : présent de l’indicatif."},
      {type:"fix",prompt:"Bien que le médecin est en vacances, le cabinet reste ouvert.",answers:["Bien que le médecin soit en vacances, le cabinet reste ouvert."],explain:"Bien que exige le subjonctif : soit."},
      {type:"transform",instruction:"Remplacez « bien que » et la subordonnée par « malgré » + nom.",prompt:"Bien qu’il y ait des travaux, le magasin reste ouvert.",answers:["Malgré les travaux, le magasin reste ouvert."],explain:"Malgré est suivi d’un nom, pas d’une proposition."},
      {type:"transform",instruction:"Reformulez avec « avoir beau ».",prompt:"Même si j’étudie beaucoup, j’oublie le vocabulaire.",answers:["J’ai beau étudier beaucoup, j’oublie le vocabulaire.","J’ai beau beaucoup étudier, j’oublie le vocabulaire."],explain:"Avoir beau + infinitif ; avoir se conjugue avec le sujet (j’ai beau)."}
    ]
  },
  g28:{
    intro:"Comparer est au cœur de l’expression orale (section B : comparer deux solutions, deux villes) et de la compréhension (offres, tarifs, annonces). Les formes irrégulières meilleur, mieux et pire sont des pièges classiques que les correcteurs repèrent immédiatement.",
    rule:[
      "Adjectif ou adverbe : plus / moins / aussi + mot + que (plus cher que, aussi vite que).",
      "Nom : plus de / moins de / autant de + nom + que ; verbe : verbe + plus / moins / autant + que.",
      "Irréguliers : bon → meilleur (s’accorde), bien → mieux (invariable), mauvais → pire ou plus mauvais.",
      "Superlatif : le / la / les + plus / moins + adjectif ; complément introduit par de (le plus cher de la ville). Si l’adjectif suit le nom, on répète l’article : le quartier le plus calme.",
      "Avec un verbe ou un nom : verbe + le plus / le moins (c’est lui qui travaille le plus) ; le plus de + nom (c’est ici qu’il y a le plus de commerces)."
    ],
    table:{head:["Base","Comparatif","Superlatif"],rows:[
      ["bon(ne)","meilleur(e) que","le / la meilleur(e)"],
      ["bien","mieux que","le mieux"],
      ["mauvais(e)","pire / plus mauvais(e) que","le / la pire"],
      ["beaucoup","plus que","le plus"],
      ["peu","moins que","le moins"],
      ["cher","plus cher que","le plus cher"]
    ]},
    tips:[
      "Test meilleur ou mieux : sans comparaison, dirais-tu bon ou bien ? « Ce plat est bon » → meilleur ; « il cuisine bien » → mieux.",
      "« C’est mieux de réserver » (= c’est préférable) est correct : avec c’est + infinitif, on utilise mieux.",
      "« Plus pire » est toujours fautif : pire est déjà un comparatif.",
      "Le complément du superlatif est introduit par de, jamais par dans ou en : le plus grand parc de Paris.",
      "Devant un nombre, on dit plus de / moins de : plus de vingt personnes (et non « plus que vingt personnes »)."
    ],
    examples:[
      {fr:"Le loyer est moins élevé en banlieue qu’en centre-ville.",en:"Rent is lower in the suburbs than in the city centre.",note:"comparatif d’infériorité"},
      {fr:"Il y a autant de candidats que l’année dernière.",en:"There are as many applicants as last year.",note:"autant de + nom"},
      {fr:"Ma fille lit mieux depuis qu’elle a des cours de soutien.",en:"My daughter reads better since she started tutoring.",note:"mieux : adverbe, avec un verbe"},
      {fr:"Les légumes sont meilleurs au marché qu’au supermarché.",en:"Vegetables are better at the market than at the supermarket.",note:"meilleurs : adjectif accordé"},
      {fr:"C’est la pire période de l’année pour chercher un logement.",en:"It’s the worst time of year to look for housing.",note:"pire au superlatif"},
      {fr:"C’est le médecin le plus disponible du quartier.",en:"He’s the most available doctor in the neighbourhood.",note:"article répété + de"},
      {fr:"C’est en août qu’il y a le moins de monde au bureau.",en:"August is when there are the fewest people at the office.",note:"le moins de + nom"},
      {fr:"Plus de trois cents personnes ont participé à la réunion publique.",en:"More than three hundred people took part in the public meeting.",note:"plus de + nombre"}
    ],
    summary:[
      "Plus / moins / aussi + adjectif + que ; plus de / moins de / autant de + nom.",
      "Bon → meilleur (adjectif accordé) ; bien → mieux (adverbe invariable) ; mauvais → pire.",
      "Superlatif : le / la / les + plus / moins … de.",
      "Jamais « plus bon », « plus bien » ni « plus pire »."
    ],
    practice:[
      {type:"mcq",prompt:"Le tramway est ___ rapide que le bus.",choices:["plus","plus de","meilleur"],answer:0,explain:"Devant un adjectif : plus + adjectif + que."},
      {type:"mcq",prompt:"Elle parle français ___ que son frère.",choices:["meilleur","mieux","plus bien"],answer:1,explain:"Avec un verbe, on utilise l’adverbe mieux."},
      {type:"fill",prompt:"Ce café est le ___ de la ville.",answers:["meilleur"],hint:"bon, au superlatif",explain:"Le superlatif de bon est le meilleur."},
      {type:"fill",prompt:"Cette année, il y a ___ touristes que l’année dernière.",answers:["autant de"],hint:"comparatif d’égalité",explain:"Avec un nom, l’égalité s’exprime avec autant de."},
      {type:"mcq",prompt:"C’est la ville la plus peuplée ___ région.",choices:["dans la","de la","en"],answer:1,explain:"Le complément du superlatif est introduit par de."},
      {type:"mcq",prompt:"C’est le vendredi soir que la circulation est la ___.",choices:["pire","plus pire","pirement"],answer:0,explain:"Pire est déjà un comparatif : au superlatif, on dit la pire."},
      {type:"order",words:["du","boulangerie","c’est","la","quartier","meilleure"],answers:["C’est la meilleure boulangerie du quartier."],explain:"Superlatif de bon, accordé au féminin, + du (de + le)."},
      {type:"order",words:["bruit","a","moins","y","de","qu’avant","il"],answers:["Il y a moins de bruit qu’avant."],explain:"Moins de + nom + que."},
      {type:"fix",prompt:"Cette solution est plus meilleure que l’autre.",answers:["Cette solution est meilleure que l’autre."],explain:"Meilleur est déjà un comparatif : on n’ajoute pas plus."},
      {type:"fix",prompt:"C’est elle qui travaille le meilleur.",answers:["C’est elle qui travaille le mieux."],explain:"Avec un verbe, le superlatif de bien est le mieux."},
      {type:"transform",instruction:"Mettez l’adjectif au superlatif de supériorité en ajoutant « de la ville ».",prompt:"C’est un parc agréable.",answers:["C’est le parc le plus agréable de la ville."],explain:"L’adjectif suit le nom : on répète l’article (le parc le plus agréable) ; complément avec de."},
      {type:"transform",instruction:"Faites une comparaison d’infériorité avec « que la voiture ».",prompt:"Le train est cher.",answers:["Le train est moins cher que la voiture."],explain:"Infériorité : moins + adjectif + que."}
    ]
  }
});})();
