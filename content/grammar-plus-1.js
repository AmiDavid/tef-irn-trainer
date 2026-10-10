(()=>{const B=window.TEF_BANK=window.TEF_BANK||{};B.grammarPlus=Object.assign(B.grammarPlus||{},{
  g1:{
    intro: "Les expressions de quantité reviennent sans cesse au TEF : décrire un quartier ou un problème à l’écrit A, chiffrer un argument à l’écrit B, demander « combien de… » à l’oral A. Une erreur sur « beaucoup de » se remarque immédiatement.",
    rule: [
      "Adverbe de quantité (beaucoup, peu, assez, trop, tant, autant, plus, moins, combien) + de + nom, sans article : beaucoup de travail, peu de place.",
      "Devant une voyelle ou un h muet, de devient d’ : peu d’habitants, trop d’heures supplémentaires.",
      "Les noms de quantité se construisent aussi avec de : un kilo de pommes, une bouteille d’eau, un paquet de riz.",
      "Exceptions : la plupart des + nom pluriel et bien des + nom pluriel (la plupart des gens) ; le verbe s’accorde alors au pluriel.",
      "Si le nom est précisé (par une relative ou un complément), on peut garder l’article défini : beaucoup des candidats que j’ai rencontrés (= many of the candidates)."
    ],
    table: { head:["Expression","Exemple"], rows:[
      ["beaucoup de / d’","beaucoup de monde"],
      ["peu de / d’","peu d’expérience"],
      ["assez de / d’","assez de places"],
      ["trop de / d’","trop de bruit"],
      ["combien de / d’","combien de documents ?"],
      ["un peu de (non comptable)","un peu de patience"],
      ["un kilo, un litre, une boîte de","une boîte de conserve"],
      ["la plupart des (exception)","la plupart des salariés"]
    ]},
    tips: [
      "Piège anglophone : « many people » se dit « beaucoup de gens », pas « beaucoup des gens ». « Of the » ne se traduit par « des » que si le nom est précisé.",
      "« Un peu de » s’emploie avec un nom non comptable (un peu de temps) ; avec un nom comptable pluriel, dites « quelques » (quelques jours).",
      "« La plupart » est l’exception à retenir : la plupart des gens pensent… (verbe au pluriel).",
      "Relisez vos productions écrites en cherchant chaque « beaucoup », « peu », « trop » : le mot suivant doit être de ou d’."
    ],
    examples: [
      {fr:"À la préfecture, il y a toujours beaucoup de monde le lundi matin.", en:"At the prefecture there are always lots of people on Monday mornings.", note:"« monde » = gens ; pas d’article après beaucoup."},
      {fr:"Il y a trop de bruit dans l’immeuble depuis le début des travaux.", en:"There’s too much noise in the building since the work started.", note:"Nom non comptable : trop de + singulier."},
      {fr:"Combien de documents faut-il fournir pour le titre de séjour ?", en:"How many documents do you have to provide for the residence permit?"},
      {fr:"J’ai peu d’expérience dans ce domaine, mais je suis très motivé.", en:"I have little experience in this field, but I’m very motivated.", note:"d’ devant une voyelle."},
      {fr:"Achetez un kilo de tomates et une bouteille d’huile, s’il vous plaît.", en:"Buy a kilo of tomatoes and a bottle of oil, please.", note:"Noms de quantité + de."},
      {fr:"La plupart des salariés prennent leurs congés en août.", en:"Most employees take their holidays in August.", note:"Exception : la plupart des + verbe au pluriel."},
      {fr:"Beaucoup des candidats que j’ai rencontrés étaient très qualifiés.", en:"Many of the candidates I met were highly qualified.", note:"Nom précisé par une relative : « beaucoup des » = many of the."},
      {fr:"Il n’y a pas assez de places en crèche dans notre ville.", en:"There aren’t enough nursery places in our town."}
    ],
    summary: [
      "Quantité + de/d’ + nom, sans article.",
      "d’ devant une voyelle ou un h muet.",
      "Exceptions : la plupart des, bien des (+ verbe au pluriel).",
      "« beaucoup des » seulement si le nom est précisé (= many of the)."
    ],
    practice: [
      {type:"mcq", prompt:"Il y a ___ monde à la mairie aujourd’hui.", choices:["beaucoup du","beaucoup de","beaucoup des"], answer:1, explain:"Après beaucoup, on met de sans article : beaucoup de monde."},
      {type:"fill", prompt:"Je n’ai pas assez ___ argent pour payer la caution.", answers:["d’"], hint:"de ou d’ ?", explain:"assez + de, qui s’élide devant une voyelle : assez d’argent."},
      {type:"mcq", prompt:"___ habitants du quartier utilisent le bus.", choices:["La plupart de","La plupart des","La plupart"], answer:1, explain:"La plupart est l’exception : la plupart des + nom pluriel."},
      {type:"fill", prompt:"Combien ___ personnes viendront à la réunion ?", answers:["de"], explain:"Combien + de + nom : combien de personnes."},
      {type:"order", words:["dossiers","trop","nous","retard","de","avons","en"], answers:["Nous avons trop de dossiers en retard."], explain:"trop + de + nom, sans article."},
      {type:"fill", prompt:"Prenez une bouteille ___ eau pour la randonnée.", answers:["d’"], hint:"de ou d’ ?", explain:"Nom de quantité + de ; devant une voyelle, de devient d’."},
      {type:"fix", prompt:"Il y a beaucoup des voitures dans cette rue.", answers:["Il y a beaucoup de voitures dans cette rue."], explain:"Après beaucoup, on emploie de, pas des : beaucoup de voitures."},
      {type:"transform", instruction:"Remplacez « des plaintes » par « beaucoup de plaintes ».", prompt:"Nous avons reçu des plaintes des voisins.", answers:["Nous avons reçu beaucoup de plaintes des voisins."], explain:"beaucoup de + nom ; le second « des » (de + les voisins) ne change pas."},
      {type:"mcq", prompt:"J’ai besoin de ___ jours pour réfléchir à votre proposition.", choices:["un peu de","quelques","peu des"], answer:1, explain:"Avec un nom comptable pluriel, on dit quelques jours ; « un peu de » s’emploie avec un nom non comptable."},
      {type:"fix", prompt:"La plupart des gens pense que les loyers sont trop chers.", answers:["La plupart des gens pensent que les loyers sont trop chers."], explain:"Après la plupart des + nom pluriel, le verbe se met au pluriel : pensent."},
      {type:"transform", instruction:"Remplacez « Quelques » par « Peu de ».", prompt:"Quelques candidats ont réussi l’examen.", answers:["Peu de candidats ont réussi l’examen."], explain:"peu de + nom, sans article ; le sens devient négatif (few)."},
      {type:"order", words:["signé","plupart","la","pétition","des","ont","locataires","la"], answers:["La plupart des locataires ont signé la pétition."], explain:"La plupart des + nom pluriel, verbe au pluriel (ont signé)."}
    ]
  },
  g2:{
    intro: "Les contractions (au, aux, du, des) sont partout : lettre à la mairie à l’écrit A, description d’un quartier à l’écrit B, questions à l’oral A. « De les » ou « à le » devant un nom sont des fautes très visibles pour le correcteur.",
    rule: [
      "à + le → au ; à + les → aux : aller au marché, écrire aux services sociaux.",
      "de + le → du ; de + les → des : la sortie du métro, la liste des pièces justificatives.",
      "Aucune contraction avec la ni avec l’ : à la gare, à l’hôpital, de la mairie, de l’école.",
      "Pas de contraction quand le / les est un pronom COD devant un infinitif : J’ai oublié de les appeler.",
      "Les noms de pays masculins suivent la même règle : au Canada, aux États-Unis, du Maroc, des Pays-Bas."
    ],
    table: { head:["Préposition + article","Forme","Exemple"], rows:[
      ["à + le","au","Je vais au guichet."],
      ["à + la","à la","Je vais à la poste."],
      ["à + l’","à l’","Je vais à l’accueil."],
      ["à + les","aux","Je téléphone aux services."],
      ["de + le","du","le bureau du directeur"],
      ["de + la","de la","la sortie de la gare"],
      ["de + l’","de l’","l’entrée de l’immeuble"],
      ["de + les","des","la liste des documents"]
    ]},
    tips: [
      "Test rapide à la relecture : « à le », « à les », « de le », « de les » suivis d’un nom = erreur à corriger.",
      "Exception légitime : devant un infinitif, le / les sont des pronoms, donc pas de contraction (Il a décidé de le vendre).",
      "En anglais, « of the » et « to the » restent deux mots ; en français, la fusion est obligatoire.",
      "Avec un h aspiré, il n’y a pas d’élision, donc la contraction se fait : au Havre, du haut de l’immeuble."
    ],
    examples: [
      {fr:"J’ai rendez-vous au service des étrangers de la préfecture.", en:"I have an appointment at the prefecture’s foreigners’ department.", note:"au = à + le ; des = de + les."},
      {fr:"Le cabinet du médecin se trouve au deuxième étage.", en:"The doctor’s surgery is on the second floor."},
      {fr:"Nous avons écrit aux propriétaires pour signaler la fuite d’eau.", en:"We wrote to the owners to report the water leak.", note:"écrire à quelqu’un : à + les → aux."},
      {fr:"Le prix des loyers augmente chaque année dans le centre.", en:"The price of rents goes up every year in the town centre."},
      {fr:"Elle revient du Canada et repart aux États-Unis la semaine prochaine.", en:"She’s coming back from Canada and leaving for the United States next week.", note:"Pays masculins : du, au, aux."},
      {fr:"Ces formulaires ? J’ai oublié de les envoyer.", en:"Those forms? I forgot to send them.", note:"les = pronom COD : pas de contraction."},
      {fr:"Je suis passé à l’hôpital, puis à la pharmacie.", en:"I went to the hospital, then to the pharmacy.", note:"Pas de contraction avec l’ et la."},
      {fr:"Le maire a répondu aux questions des parents d’élèves.", en:"The mayor answered the parents’ questions.", note:"répondre à + les → aux ; de + les → des."}
    ],
    summary: [
      "à + le = au, à + les = aux.",
      "de + le = du, de + les = des.",
      "la et l’ ne se contractent jamais.",
      "le / les pronoms devant un infinitif : pas de contraction."
    ],
    practice: [
      {type:"mcq", prompt:"Je vais ___ marché tous les samedis.", choices:["à le","au","à la"], answer:1, explain:"marché est masculin : à + le → au."},
      {type:"fill", prompt:"La sortie ___ métro est fermée ce soir.", answers:["du"], hint:"de + le", explain:"de + le se contracte en du."},
      {type:"mcq", prompt:"Nous avons envoyé la lettre ___ services sociaux.", choices:["aux","à les","des"], answer:0, explain:"envoyer quelque chose à quelqu’un : à + les → aux."},
      {type:"fill", prompt:"J’ai besoin ___ documents que je vous ai envoyés hier.", answers:["des"], hint:"de + les", explain:"avoir besoin de + les documents (précisés par la relative) → des."},
      {type:"order", words:["répond","usagers","la","aux","des","mairie","demandes"], answers:["La mairie répond aux demandes des usagers."], explain:"répondre à + les → aux ; de + les → des."},
      {type:"fix", prompt:"Le directeur du lycée a parlé à les élèves.", answers:["Le directeur du lycée a parlé aux élèves."], explain:"à + les se contracte obligatoirement en aux."},
      {type:"transform", instruction:"Mettez « guichet » au pluriel et faites les modifications nécessaires.", prompt:"Adressez-vous au guichet du rez-de-chaussée.", answers:["Adressez-vous aux guichets du rez-de-chaussée."], explain:"à + les guichets → aux guichets."},
      {type:"mcq", prompt:"Ces formulaires, n’oubliez pas ___ remplir avant le rendez-vous.", choices:["de les","des","les"], answer:0, explain:"Ici, les est un pronom COD de « remplir » : pas de contraction (oublier de + les remplir)."},
      {type:"fill", prompt:"Elle est originaire ___ Portugal, mais elle vit en France depuis dix ans.", answers:["du"], explain:"Portugal est un pays masculin : de + le → du."},
      {type:"fix", prompt:"Le prix de les transports en commun a encore augmenté.", answers:["Le prix des transports en commun a encore augmenté."], explain:"de + les se contracte en des."},
      {type:"transform", instruction:"Remplacez « la bibliothèque » par « le bureau » et « la piscine » par « les urgences ».", prompt:"Je pars de la bibliothèque et je vais à la piscine.", answers:["Je pars du bureau et je vais aux urgences."], explain:"de + le → du ; à + les → aux."},
      {type:"order", words:["conseils","j’ai","médecin","aux","pensé","du"], answers:["J’ai pensé aux conseils du médecin."], explain:"penser à + les → aux ; de + le → du."}
    ]
  },
  g3:{
    intro: "Exprimer un but est indispensable dans les lettres formelles de l’écrit A, à l’écrit B (proposer, convaincre) et à l’oral A (« Je vous appelle pour que… »). Le subjonctif après « pour que » est un marqueur clair du niveau B2.",
    rule: [
      "Deux sujets différents → pour que + subjonctif : Je parle lentement pour que tu comprennes.",
      "Même sujet → pour + infinitif : J’économise pour acheter une voiture.",
      "Formation : radical de « ils » au présent + -e, -es, -e, -ions, -iez, -ent (ils prennent → que je prenne, que nous prenions).",
      "Irréguliers fréquents : être (soit), avoir (ait), aller (aille), faire (fasse), pouvoir (puisse), savoir (sache), vouloir (veuille).",
      "Même construction avec afin que (plus soutenu) et de peur que ; afin de / de peur de + infinitif si le sujet est le même.",
      "Négation : pour ne pas + infinitif ; pour que + sujet + ne + subjonctif + pas."
    ],
    table: { head:["Infinitif","que je…","que vous…"], rows:[
      ["prendre","prenne","preniez"],
      ["venir","vienne","veniez"],
      ["faire","fasse","fassiez"],
      ["pouvoir","puisse","puissiez"],
      ["être","sois","soyez"],
      ["avoir","aie","ayez"],
      ["aller","aille","alliez"],
      ["savoir","sache","sachiez"]
    ]},
    tips: [
      "Ne confondez pas « pour que » (but, + subjonctif) et « parce que » (cause, + indicatif).",
      "Après « que », il faut toujours un verbe conjugué : jamais d’infinitif après « pour que ».",
      "Les formes en -ions / -iez ressemblent à l’imparfait (que nous prenions, que vous preniez) : apprenez-les comme un bloc.",
      "Formule de lettre très rentable : « Je vous écris afin que vous puissiez examiner ma situation. »"
    ],
    examples: [
      {fr:"Je vous envoie une copie du bail pour que vous la vérifiiez.", en:"I’m sending you a copy of the lease so that you can check it.", note:"vérifier → que vous vérifiiez (deux i)."},
      {fr:"Le médecin m’a fait un certificat pour que je le présente à mon employeur.", en:"The doctor wrote me a certificate so that I can show it to my employer."},
      {fr:"Parlez plus fort pour que tout le monde vous entende.", en:"Speak louder so that everyone can hear you."},
      {fr:"J’ai pris rendez-vous tôt pour être sûr d’avoir une place.", en:"I booked early to be sure of getting a slot.", note:"Même sujet : pour + infinitif."},
      {fr:"La mairie a ouvert une nouvelle crèche afin que les parents puissent travailler.", en:"The town hall opened a new nursery so that parents can work.", note:"afin que = registre soutenu."},
      {fr:"Je laisse la clé à la gardienne pour que le plombier ait accès à l’appartement.", en:"I’m leaving the key with the caretaker so that the plumber can get into the flat."},
      {fr:"Il faut prévenir les voisins pour qu’ils ne soient pas surpris par le bruit.", en:"We need to warn the neighbours so that they aren’t surprised by the noise.", note:"Négation autour du subjonctif."},
      {fr:"Je relis ma lettre deux fois pour ne pas faire de fautes.", en:"I reread my letter twice so as not to make mistakes.", note:"Même sujet : pour ne pas + infinitif."}
    ],
    summary: [
      "Deux sujets : pour que / afin que + subjonctif.",
      "Un seul sujet : pour / afin de + infinitif.",
      "Irréguliers à connaître : soit, ait, aille, fasse, puisse, sache, veuille.",
      "pour ne pas + infinitif ; pour que… ne… pas + subjonctif."
    ],
    practice: [
      {type:"mcq", prompt:"Je ferme la fenêtre pour que le bébé ___ dormir.", choices:["peut","puisse","pouvoir"], answer:1, explain:"Deux sujets différents (je / le bébé) : pour que + subjonctif (puisse)."},
      {type:"mcq", prompt:"J’économise ___ acheter une voiture.", choices:["pour que","pour","parce que"], answer:1, explain:"Même sujet et verbe à l’infinitif : pour + infinitif."},
      {type:"fill", prompt:"Je vous donne mon numéro pour que vous ___ me joindre facilement.", answers:["puissiez"], hint:"pouvoir", explain:"pour que + subjonctif : que vous puissiez."},
      {type:"fill", prompt:"Je vous écris pour que vous ___ le nécessaire au plus vite.", answers:["fassiez"], hint:"faire", explain:"Subjonctif irrégulier de faire : que vous fassiez."},
      {type:"fill", prompt:"Le professeur répète la consigne pour que nous la ___ bien.", answers:["comprenions"], hint:"comprendre", explain:"ils comprennent → radical compren- + -ions : que nous comprenions."},
      {type:"order", words:["qu’il","lentement","je","comprenne","pour","parle"], answers:["Je parle lentement pour qu’il comprenne."], explain:"pour que (élidé en qu’ devant il) + subjonctif."},
      {type:"fix", prompt:"Je vous appelle pour que vous m’aidez à remplir ce dossier.", answers:["Je vous appelle pour que vous m’aidiez à remplir ce dossier."], explain:"Après pour que, subjonctif : que vous m’aidiez (pas l’indicatif aidez)."},
      {type:"transform", instruction:"Réunissez les deux phrases avec « pour que ».", prompt:"Je vous envoie le dossier. Vous pouvez l’étudier.", answers:["Je vous envoie le dossier pour que vous puissiez l’étudier."], explain:"Deux sujets différents : pour que + subjonctif (puissiez)."},
      {type:"mcq", prompt:"Il est parti tôt ___ rater son train.", choices:["pour ne pas","pour que ne pas","pour pas"], answer:0, explain:"Même sujet, sens négatif : pour ne pas + infinitif. « pour pas » est familier."},
      {type:"fix", prompt:"Elle a laissé un mot pour que ses colocataires savent qu’elle rentre tard.", answers:["Elle a laissé un mot pour que ses colocataires sachent qu’elle rentre tard."], explain:"Subjonctif irrégulier de savoir : qu’ils sachent."},
      {type:"transform", instruction:"Le sujet est le même : réécrivez la phrase avec « pour » + infinitif.", prompt:"Je travaille le samedi pour que je gagne plus d’argent.", answers:["Je travaille le samedi pour gagner plus d’argent."], explain:"Avec un seul sujet, on n’emploie pas pour que : pour + infinitif."},
      {type:"order", words:["dossier","afin","ici","soit","que","signez","complet","le"], answers:["Signez ici afin que le dossier soit complet."], explain:"afin que + subjonctif (soit)."}
    ]
  },
  g4:{
    intro: "À l’écrit du TEF, un « ne » oublié fait perdre des points de correction linguistique. À l’oral et en compréhension, il faut aussi maîtriser et reconnaître les autres négations (ne… plus, ne… jamais, ne… que) pour nuancer.",
    rule: [
      "Structure de base : sujet + ne/n’ + verbe conjugué + pas : Je ne travaille pas le lundi.",
      "Temps composés : ne + auxiliaire + pas + participe : Je n’ai pas reçu le courrier. Mais personne, aucun et que se placent après le participe : Je n’ai vu personne.",
      "Les pronoms compléments restent entre ne et le verbe : Je ne le connais pas ; il ne m’a pas répondu.",
      "Avec un infinitif, ne pas se place ensemble devant l’infinitif : Merci de ne pas fumer.",
      "Après une négation, un / une / des / du / de la deviennent de / d’ (sauf avec être) : Je n’ai pas de voiture, mais ce n’est pas un problème.",
      "Rien, personne, jamais, plus, aucun remplacent pas : on ne les combine jamais avec pas."
    ],
    table: { head:["Négation","Sens","Exemple"], rows:[
      ["ne… pas","not","Je ne fume pas."],
      ["ne… plus","no longer","Il n’habite plus ici."],
      ["ne… jamais","never","Elle ne prend jamais la voiture."],
      ["ne… rien","nothing","Je n’ai rien signé."],
      ["ne… personne","nobody","Je n’ai vu personne."],
      ["ne… aucun(e)","not any","Il n’y a aucune place."],
      ["ne… que","only","Je n’ai que dix euros."]
    ]},
    tips: [
      "À la relecture, vérifiez chaque « pas », « plus », « jamais » : il leur faut un « ne » avant le verbe.",
      "« Ne… que » n’est pas une vraie négation mais une restriction (= seulement) : on garde l’article (Je ne bois que de l’eau).",
      "Rien et personne peuvent être sujets : Personne n’est venu. Rien ne marche. (sans pas !)",
      "Les formes orales « j’sais pas », « y a pas » sont à comprendre en compréhension orale, jamais à écrire."
    ],
    examples: [
      {fr:"Je n’ai pas encore reçu ma carte Vitale.", en:"I haven’t received my health insurance card yet.", note:"Temps composé : ne + auxiliaire + pas."},
      {fr:"Mon fils ne mange plus à la cantine depuis septembre.", en:"My son hasn’t eaten at the school canteen since September."},
      {fr:"Il n’y a aucune place de parking près de la gare.", en:"There isn’t a single parking space near the station."},
      {fr:"Personne ne m’a prévenu du changement d’horaire.", en:"Nobody told me about the timetable change.", note:"Personne sujet + ne, sans pas."},
      {fr:"Merci de ne pas laisser vos vélos dans le hall.", en:"Please do not leave your bikes in the entrance hall.", note:"Infinitif : ne pas devant le verbe."},
      {fr:"Je ne connais personne dans ce quartier.", en:"I don’t know anyone in this neighbourhood."},
      {fr:"Le pharmacien ne délivre ce médicament que sur ordonnance.", en:"The pharmacist only dispenses this medicine with a prescription.", note:"ne… que = seulement."},
      {fr:"Je n’ai pas de mutuelle, mais j’en cherche une.", en:"I don’t have top-up health insurance, but I’m looking for one.", note:"pas de après la négation."}
    ],
    summary: [
      "ne + verbe conjugué (ou auxiliaire) + pas.",
      "ne pas + infinitif.",
      "pas de / d’ après la négation (sauf avec être).",
      "rien, personne, jamais, plus remplacent pas : jamais les deux ensemble."
    ],
    practice: [
      {type:"mcq", prompt:"À l’écrit : Je ___ compris la question.", choices:["n’ai pas","ne pas ai","ai pas"], answer:0, explain:"ne + auxiliaire + pas + participe ; « ai pas » sans ne est oral familier."},
      {type:"fill", prompt:"Merci de ___ pas stationner devant le garage.", answers:["ne"], explain:"Devant un infinitif, on écrit ne pas ensemble."},
      {type:"mcq", prompt:"Je n’ai ___ voiture, alors je prends le bus.", choices:["pas une","pas de","pas la"], answer:1, explain:"Après la négation, l’article indéfini devient de : pas de voiture."},
      {type:"fill", prompt:"Je suis arrivé tôt : il n’y avait ___ au guichet, j’ai été servi tout de suite.", answers:["personne"], hint:"nobody", explain:"ne… personne = nobody."},
      {type:"order", words:["lu","ne","encore","je","pas","l’ai"], answers:["Je ne l’ai pas encore lu."], explain:"ne + pronom + auxiliaire + pas (encore) + participe."},
      {type:"fix", prompt:"Je ne vois pas personne à l’accueil.", answers:["Je ne vois personne à l’accueil."], explain:"personne remplace pas : on ne combine pas les deux."},
      {type:"transform", instruction:"Mettez la phrase à la forme négative avec « ne… plus ».", prompt:"J’habite encore chez mes parents.", answers:["Je n’habite plus chez mes parents."], explain:"ne… plus est le contraire de encore / toujours ; ne s’élide devant une voyelle."},
      {type:"mcq", prompt:"___ ne fonctionne dans cet appartement : ni le chauffage ni l’eau chaude.", choices:["Rien","Personne","Pas"], answer:0, explain:"Rien sujet (pour des choses) + ne, sans pas."},
      {type:"fill", prompt:"Ce bureau n’est ouvert ___ le matin.", answers:["que"], hint:"= seulement", explain:"ne… que exprime une restriction : seulement le matin."},
      {type:"fix", prompt:"Il a décidé de ne travailler pas le dimanche.", answers:["Il a décidé de ne pas travailler le dimanche."], explain:"Devant un infinitif, ne pas se place ensemble avant le verbe."},
      {type:"transform", instruction:"Mettez la phrase à la forme négative avec « ne… jamais ».", prompt:"Elle a déjà pris l’avion.", answers:["Elle n’a jamais pris l’avion."], explain:"ne… jamais est le contraire de déjà ; jamais se place entre l’auxiliaire et le participe."},
      {type:"order", words:["la","aucune","n’avons","de","nous","réponse","mairie","reçu"], answers:["Nous n’avons reçu aucune réponse de la mairie.","Nous n’avons reçu de la mairie aucune réponse."], explain:"Au passé composé, aucun(e) se place après le participe."}
    ]
  },
  g5:{
    intro: "Les erreurs de genre et d’accord sont les plus fréquentes chez les anglophones : elles pèsent sur la correction linguistique dans chaque production écrite (A et B) et s’entendent à l’oral (un / une, nouveau / nouvelle).",
    rule: [
      "Apprenez chaque nom avec son article : une semaine, un problème, une facture, un logement.",
      "Le déterminant s’accorde avec le nom : le / la / les, un / une / des, mon / ma / mes, ce / cette / ces.",
      "L’adjectif s’accorde en genre et en nombre : un loyer élevé, des charges élevées.",
      "Devant une voyelle ou un h muet : ma / ta / sa → mon / ton / son (mon adresse) ; beau / nouveau / vieux → bel / nouvel / vieil (un nouvel appartement).",
      "Un adjectif qui qualifie un nom masculin et un nom féminin se met au masculin pluriel : une cuisine et un salon lumineux.",
      "Avec être, l’adjectif et le participe s’accordent avec le sujet : La salle est fermée ; les dossiers sont complets."
    ],
    table: { head:["Terminaison","Genre le plus fréquent","Exemples"], rows:[
      ["-tion, -sion","féminin","la situation, la décision"],
      ["-té","féminin","la santé, la société (mais le côté, l’été m.)"],
      ["-ure","féminin","la voiture, la facture"],
      ["-ment","masculin","le logement, le document"],
      ["-age","masculin","le chômage, le garage (mais la page, la plage, l’image f.)"],
      ["-eau","masculin","le bureau, le tableau (mais l’eau f., la peau)"],
      ["-isme","masculin","le tourisme, le racisme"]
    ]},
    tips: [
      "Pièges fréquents : le problème, le système, le programme sont masculins ; la personne est toujours féminin, même pour un homme.",
      "Relisez chaque groupe nominal de gauche à droite : déterminant, nom et adjectif doivent avoir le même genre et le même nombre.",
      "À l’oral, l’accord s’entend sur beaucoup d’adjectifs (grand / grande, nouveau / nouvelle) : prononcez-les distinctement.",
      "En cas de doute à l’écrit, choisissez un autre mot dont vous êtes sûr du genre."
    ],
    examples: [
      {fr:"J’ai trouvé un nouvel appartement près de mon lieu de travail.", en:"I’ve found a new flat near my workplace.", note:"nouvel devant une voyelle."},
      {fr:"Mon adresse électronique a changé.", en:"My email address has changed.", note:"mon devant une voyelle, même au féminin."},
      {fr:"Les charges sont comprises dans le loyer.", en:"The service charges are included in the rent.", note:"charges (f. pl.) → comprises."},
      {fr:"Ce problème est assez fréquent dans les vieux immeubles.", en:"This problem is quite common in old buildings.", note:"problème est masculin."},
      {fr:"La réunion est prévue pour la fin du mois.", en:"The meeting is scheduled for the end of the month."},
      {fr:"Le propriétaire a fait installer une cuisine et un chauffage neufs.", en:"The landlord had a new kitchen and new heating installed.", note:"Masculin + féminin → masculin pluriel."},
      {fr:"Mon conseiller est une personne très patiente.", en:"My adviser is a very patient person.", note:"personne est toujours féminin."},
      {fr:"Les factures d’électricité sont devenues trop chères.", en:"Electricity bills have become too expensive."}
    ],
    summary: [
      "Mémorisez nom + article ensemble.",
      "Accordez déterminant, adjectif (et participe avec être).",
      "mon / ton / son et bel / nouvel / vieil devant une voyelle.",
      "Masculin + féminin → masculin pluriel."
    ],
    practice: [
      {type:"mcq", prompt:"J’ai perdu ___ clés de la boîte aux lettres.", choices:["mon","ma","mes"], answer:2, explain:"clés est au pluriel : mes."},
      {type:"mcq", prompt:"C’est ___ problème important.", choices:["une","un","la"], answer:1, explain:"problème est masculin malgré sa terminaison en -e : un problème."},
      {type:"fill", prompt:"La salle d’attente était ___ quand je suis arrivé.", answers:["pleine"], hint:"plein", explain:"salle est féminin : pleine."},
      {type:"fill", prompt:"Nous cherchons un ___ appartement avec deux chambres.", answers:["nouvel"], hint:"nouveau", explain:"Devant un nom masculin commençant par une voyelle, nouveau devient nouvel."},
      {type:"mcq", prompt:"Elle a ___ expérience dans la vente.", choices:["une grande","un grand","une grand"], answer:0, explain:"expérience est féminin : une grande expérience."},
      {type:"order", words:["moderne","nouvelle","est","la","très","mairie"], answers:["La nouvelle mairie est très moderne."], explain:"mairie est féminin : la nouvelle mairie."},
      {type:"fix", prompt:"Ma adresse a changé depuis le mois dernier.", answers:["Mon adresse a changé depuis le mois dernier."], explain:"Devant une voyelle, ma devient mon, même si le nom est féminin."},
      {type:"transform", instruction:"Mettez le sujet au féminin : « le nouveau directeur » → « la nouvelle directrice ».", prompt:"Le nouveau directeur est très attentif.", answers:["La nouvelle directrice est très attentive."], explain:"Tout s’accorde : la nouvelle directrice… attentive."},
      {type:"fill", prompt:"Les démarches administratives sont souvent ___.", answers:["longues"], hint:"long", explain:"démarches est féminin pluriel : longues."},
      {type:"fix", prompt:"Les charges ne sont pas compris dans le loyer.", answers:["Les charges ne sont pas comprises dans le loyer."], explain:"Avec être, le participe s’accorde avec le sujet charges (f. pl.) : comprises."},
      {type:"transform", instruction:"Mettez la phrase au pluriel.", prompt:"Ce vieil immeuble est mal isolé.", answers:["Ces vieux immeubles sont mal isolés."], explain:"vieil (devant voyelle au singulier) devient vieux au pluriel ; ce → ces ; isolé → isolés."},
      {type:"order", words:["salon","cuisine","sont","le","et","lumineux","la"], answers:["La cuisine et le salon sont lumineux.","Le salon et la cuisine sont lumineux."], explain:"Un nom féminin et un nom masculin : adjectif au masculin pluriel."}
    ]
  },
  g6:{
    intro: "Raconter un événement passé est au cœur de l’écrit A (suite d’un article) et de nombreux échanges oraux ; les épreuves de compréhension jouent aussi sur ces nuances. Bien choisir entre passé composé et imparfait rend le récit clair.",
    rule: [
      "Passé composé : action ponctuelle, terminée, datée ou comptée : Hier, j’ai déposé mon dossier.",
      "Imparfait : décor, description, état (âge, météo, sentiments) : Il faisait froid et j’étais fatigué.",
      "Imparfait : habitude passée (souvent, tous les jours, d’habitude) : Je prenais le bus chaque matin.",
      "Action en cours (imparfait) interrompue par un événement (passé composé) : Je remplissais le formulaire quand le téléphone a sonné.",
      "Durée limitée et terminée → passé composé, même si elle est longue : J’ai vécu dix ans à Marseille.",
      "Succession d’actions → passé composé : Je suis arrivé, j’ai pris un ticket et j’ai attendu."
    ],
    table: { head:["Imparfait","Passé composé"], rows:[
      ["description, décor","événement principal"],
      ["habitude (souvent, chaque jour)","action unique (un jour, soudain)"],
      ["action en cours","action qui interrompt"],
      ["durée non limitée","durée limitée (pendant deux ans, de… à…)"],
      ["d’habitude, autrefois, à l’époque","soudain, tout à coup, hier, ce jour-là"]
    ]},
    tips: [
      "L’anglais « was …ing » et « used to » correspondent presque toujours à l’imparfait.",
      "« Pendant + durée » avec une action terminée → passé composé : J’ai travaillé pendant trois ans chez eux.",
      "Les verbes d’état (être, avoir, savoir) sont souvent à l’imparfait ; au passé composé, ils marquent un changement ponctuel : J’ai eu peur.",
      "N’oubliez pas l’auxiliaire être avec les verbes de mouvement et les verbes pronominaux : je suis allé(e), je me suis inscrit(e)."
    ],
    examples: [
      {fr:"Quand je suis arrivé en France, je ne parlais pas bien français.", en:"When I arrived in France, I didn’t speak French well.", note:"Arrivée = événement ; niveau de langue = état."},
      {fr:"Le guichet était fermé, alors je suis revenu le lendemain.", en:"The counter was closed, so I came back the next day."},
      {fr:"Pendant mes études, je travaillais tous les week-ends dans un restaurant.", en:"During my studies, I worked every weekend in a restaurant.", note:"Habitude → imparfait."},
      {fr:"J’attendais le bus quand un accident s’est produit au carrefour.", en:"I was waiting for the bus when an accident happened at the crossroads.", note:"Action en cours + interruption."},
      {fr:"J’ai vécu cinq ans à Lille avant de m’installer à Lyon.", en:"I lived in Lille for five years before settling in Lyon.", note:"Durée limitée et terminée → passé composé."},
      {fr:"Il y avait beaucoup de monde, donc j’ai pris un numéro.", en:"There were a lot of people, so I took a number.", note:"Décor (imparfait) + action (passé composé)."},
      {fr:"Ce matin, je me suis levé tôt, j’ai pris le métro et je suis arrivé à l’heure.", en:"This morning I got up early, took the metro and arrived on time.", note:"Succession d’actions."},
      {fr:"À l’époque, les loyers étaient moins chers dans ce quartier.", en:"Back then, rents were cheaper in this area."}
    ],
    summary: [
      "Passé composé = événement, action terminée, succession.",
      "Imparfait = décor, état, habitude, action en cours.",
      "Action en cours (imparfait) + interruption (passé composé).",
      "Durée précise et terminée → passé composé."
    ],
    practice: [
      {type:"mcq", prompt:"Hier matin, j’___ mon dossier à la préfecture, puis je suis rentré.", choices:["déposais","ai déposé","dépose"], answer:1, explain:"Action ponctuelle et terminée dans une succession : passé composé."},
      {type:"mcq", prompt:"Quand j’étais petit, je ___ au foot tous les mercredis.", choices:["jouais","ai joué","joue"], answer:0, explain:"Habitude passée (tous les mercredis) : imparfait."},
      {type:"fill", prompt:"Il ___ très froid ce jour-là, alors j’ai mis deux pulls.", answers:["faisait"], hint:"faire", explain:"Description de la météo (décor) : imparfait."},
      {type:"fill", prompt:"Je regardais la télévision quand quelqu’un ___ à la porte.", answers:["a frappé"], hint:"frapper", explain:"Événement qui interrompt une action en cours : passé composé."},
      {type:"order", words:["réveil","dormais","sonné","je","a","le","quand"], answers:["Je dormais quand le réveil a sonné."], explain:"Action en cours (imparfait) interrompue par un événement (passé composé)."},
      {type:"mcq", prompt:"J’___ dix ans à Toulouse, puis j’ai déménagé à Bordeaux.", choices:["habitais","ai habité","habite"], answer:1, explain:"Durée limitée et terminée (dix ans) suivie d’un autre événement : passé composé."},
      {type:"fix", prompt:"Quand j’ai été jeune, j’habitais à la campagne.", answers:["Quand j’étais jeune, j’habitais à la campagne."], explain:"Un état dans le passé (être jeune) se met à l’imparfait."},
      {type:"transform", instruction:"Mettez la phrase au passé (imparfait ou passé composé selon le sens).", prompt:"Il pleut, alors je prends un taxi.", answers:["Il pleuvait, alors j’ai pris un taxi."], explain:"La météo est le décor (imparfait) ; prendre un taxi est l’action (passé composé)."},
      {type:"fill", prompt:"Avant, je ___ le bus tous les jours ; maintenant, je fais du vélo.", answers:["prenais"], hint:"prendre", explain:"Habitude passée opposée au présent : imparfait."},
      {type:"fix", prompt:"Ce matin, je me levais à six heures et j’ai pris le premier train.", answers:["Ce matin, je me suis levé à six heures et j’ai pris le premier train.","Ce matin, je me suis levée à six heures et j’ai pris le premier train."], explain:"Deux actions ponctuelles qui se suivent : passé composé (je me suis levé·e)."},
      {type:"transform", instruction:"Réunissez les deux phrases avec « quand ».", prompt:"Je traversais la rue. Une voiture a klaxonné.", answers:["Je traversais la rue quand une voiture a klaxonné."], explain:"Action en cours + quand + événement soudain."},
      {type:"order", words:["donc","n’est","malade","venu","voisin","il","était","pas","mon"], answers:["Mon voisin était malade donc il n’est pas venu."], explain:"État (imparfait) puis conséquence ponctuelle (passé composé)."}
    ]
  },
  g7:{
    intro: "L’hypothèse est indispensable à l’écrit B et à l’oral B pour imaginer les conséquences d’une proposition (« Si la mairie créait une piste cyclable… ») et à l’oral A pour poser des questions sur des conditions.",
    rule: [
      "Condition réelle ou probable : si + présent → présent, futur ou impératif : Si tu es libre, viens.",
      "Hypothèse sur le présent ou l’avenir (peu probable ou irréelle) : si + imparfait → conditionnel présent.",
      "Hypothèse sur le passé (irréel du passé) : si + plus-que-parfait → conditionnel passé : Si j’avais su, je serais venu.",
      "Jamais de futur ni de conditionnel directement après le si de condition.",
      "si + il / ils → s’il / s’ils ; mais si elle, si on ne s’élident pas.",
      "La proposition avec si peut venir avant ou après la principale : Je viendrais si j’avais le temps."
    ],
    table: { head:["Proposition avec si","Principale","Exemple"], rows:[
      ["si + présent","présent / futur / impératif","Si tu veux, je t’aiderai."],
      ["si + imparfait","conditionnel présent","Si je gagnais plus, je déménagerais."],
      ["si + plus-que-parfait","conditionnel passé","Si j’étais parti plus tôt, j’aurais eu mon train."],
      ["si + plus-que-parfait","conditionnel présent (conséquence actuelle)","Si j’avais fait médecine, je serais médecin aujourd’hui."]
    ]},
    tips: [
      "Moyen mnémotechnique : « Les si n’aiment pas les -rais. »",
      "Le conditionnel = radical du futur + terminaisons de l’imparfait : je pourrais, il faudrait, nous serions.",
      "Ne confondez pas -ais (imparfait) et -rais (conditionnel) : je pouvais / je pourrais. À l’oral, le « r » fait la différence.",
      "Le si interrogatif (= whether) accepte le futur : Je ne sais pas s’il viendra. Ce n’est pas un si de condition."
    ],
    examples: [
      {fr:"Si vous perdez votre titre de séjour, déclarez-le immédiatement.", en:"If you lose your residence permit, report it immediately.", note:"Condition réelle → impératif."},
      {fr:"Si la ville construisait plus de logements sociaux, les loyers baisseraient.", en:"If the city built more social housing, rents would fall.", note:"Hypothèse : imparfait + conditionnel."},
      {fr:"Si j’habitais plus près, j’irais au travail à vélo.", en:"If I lived closer, I would cycle to work."},
      {fr:"Si j’avais réservé plus tôt, j’aurais payé moins cher.", en:"If I had booked earlier, I would have paid less.", note:"Irréel du passé."},
      {fr:"Nous partirons en randonnée s’il fait beau samedi.", en:"We’ll go hiking if the weather is nice on Saturday.", note:"s’il ; principale avant la condition."},
      {fr:"Que feriez-vous si votre propriétaire refusait de faire les travaux ?", en:"What would you do if your landlord refused to carry out the work?"},
      {fr:"Si elle avait accepté ce poste, elle vivrait à Paris aujourd’hui.", en:"If she had accepted that job, she would be living in Paris today.", note:"Condition passée, conséquence présente."},
      {fr:"Je ne sais pas si la mairie sera ouverte lundi.", en:"I don’t know whether the town hall will be open on Monday.", note:"si = whether : futur possible."}
    ],
    summary: [
      "si + présent → présent / futur / impératif.",
      "si + imparfait → conditionnel présent.",
      "si + plus-que-parfait → conditionnel passé.",
      "Jamais de -rais juste après le si de condition."
    ],
    practice: [
      {type:"mcq", prompt:"Si tu ___ fatigué, repose-toi.", choices:["es","serais","seras"], answer:0, explain:"Condition réelle avec un impératif : si + présent."},
      {type:"mcq", prompt:"Si nous avions une voiture, nous ___ à la campagne le week-end.", choices:["allons","irions","irons"], answer:1, explain:"si + imparfait → conditionnel présent (irions)."},
      {type:"fill", prompt:"S’il ___ moins cher, je prendrais cet appartement.", answers:["était"], hint:"être", explain:"Avec un conditionnel dans la principale : si + imparfait."},
      {type:"fill", prompt:"Si vous m’aviez prévenu, je ___ venu vous chercher.", answers:["serais"], hint:"auxiliaire être", explain:"si + plus-que-parfait → conditionnel passé : je serais venu."},
      {type:"order", words:["le","conduirais","j’avais","je","permis","si"], answers:["Je conduirais si j’avais le permis."], explain:"Principale au conditionnel + si + imparfait."},
      {type:"fix", prompt:"Si j’aurais plus de temps, je ferais du bénévolat.", answers:["Si j’avais plus de temps, je ferais du bénévolat."], explain:"Pas de conditionnel après si : si + imparfait (j’avais)."},
      {type:"transform", instruction:"Transformez en hypothèse peu probable (si + imparfait).", prompt:"Si je trouve un travail, je resterai à Nantes.", answers:["Si je trouvais un travail, je resterais à Nantes."], explain:"si + imparfait → conditionnel présent."},
      {type:"mcq", prompt:"Si j’avais su que le bureau était fermé, je ne me ___ pas déplacé.", choices:["serais","suis","serai"], answer:0, explain:"si + plus-que-parfait → conditionnel passé : je ne me serais pas déplacé."},
      {type:"fill", prompt:"Je me demande s’il ___ demain.", answers:["pleuvra"], hint:"pleuvoir, au futur", explain:"Ici, si signifie « whether » (interrogation indirecte) : le futur est possible."},
      {type:"fix", prompt:"Si elle serait venue plus tôt, elle aurait vu le médecin.", answers:["Si elle était venue plus tôt, elle aurait vu le médecin."], explain:"Après si, plus-que-parfait (était venue), pas de conditionnel."},
      {type:"transform", instruction:"Mettez l’hypothèse au passé (si + plus-que-parfait → conditionnel passé).", prompt:"Si tu lisais le contrat, tu comprendrais les conditions.", answers:["Si tu avais lu le contrat, tu aurais compris les conditions."], explain:"Irréel du passé : plus-que-parfait + conditionnel passé."},
      {type:"order", words:["si","loto","feriez-vous","gagniez","que","au","vous"], answers:["Que feriez-vous si vous gagniez au loto ?"], explain:"Question au conditionnel + si + imparfait."}
    ]
  },
  g8:{
    intro: "À l’écrit B et à l’oral B, la cohérence de l’argumentation est évaluée : les connecteurs montrent la logique de votre raisonnement. En compréhension écrite, ils permettent de repérer l’opinion de l’auteur et ses nuances.",
    rule: [
      "Identifiez d’abord le rapport logique : addition, opposition, concession, cause, conséquence, but ou conclusion.",
      "Connecteurs adverbiaux (cependant, en revanche, par conséquent, en effet, de plus) : en début de phrase suivis d’une virgule, ou après un point-virgule.",
      "Conjonctions (bien que, alors que, puisque, même si) : elles relient deux propositions dans la même phrase ; bien que + subjonctif, même si + indicatif.",
      "Prépositions (grâce à, à cause de, malgré, en raison de) : elles sont suivies d’un nom, pas d’une proposition.",
      "« En effet » confirme ou justifie ce qui précède ; « en fait » corrige ou précise (= actually).",
      "Un seul connecteur par lien logique : n’empilez pas « mais cependant » ou « donc par conséquent »."
    ],
    table: { head:["Rapport","Connecteurs","Construction"], rows:[
      ["Addition","de plus, en outre, d’ailleurs","+ phrase"],
      ["Opposition","cependant, en revanche, alors que","alors que + indicatif"],
      ["Concession","bien que, même si, malgré","bien que + subjonctif ; malgré + nom"],
      ["Cause","puisque, étant donné que, grâce à, à cause de","grâce à / à cause de + nom"],
      ["Conséquence","donc, par conséquent, c’est pourquoi","+ phrase"],
      ["Conclusion","en somme, en conclusion, en définitive","+ phrase"]
    ]},
    tips: [
      "Faux ami : « in fact » se dit souvent « en fait » ; « en effet » sert à justifier (= indeed).",
      "« Grâce à » introduit une cause positive, « à cause de » une cause négative.",
      "« Malgré que » est à éviter à l’écrit : dites « bien que » + subjonctif ou « malgré » + nom.",
      "Variez les connecteurs d’opposition : cependant, toutefois, en revanche, néanmoins plutôt que « mais » à chaque phrase."
    ],
    examples: [
      {fr:"Le quartier est calme ; en revanche, il est mal desservi le soir.", en:"The area is quiet; on the other hand, it has poor transport links in the evening.", note:"en revanche = contraste entre deux aspects."},
      {fr:"Bien que le loyer soit élevé, l’appartement reste intéressant.", en:"Although the rent is high, the flat is still worthwhile.", note:"bien que + subjonctif."},
      {fr:"Grâce à la nouvelle ligne de tram, je mets vingt minutes de moins pour aller au travail.", en:"Thanks to the new tram line, it takes me twenty minutes less to get to work."},
      {fr:"Le train a été annulé à cause de la grève.", en:"The train was cancelled because of the strike.", note:"à cause de + nom (cause négative)."},
      {fr:"Je soutiens ce projet. En effet, il créera des emplois dans la commune.", en:"I support this project. Indeed, it will create jobs in the town.", note:"en effet = justification."},
      {fr:"Malgré les efforts de la mairie, le centre-ville reste très embouteillé.", en:"Despite the town hall’s efforts, the town centre is still very congested.", note:"malgré + nom."},
      {fr:"Puisque vous êtes déjà inscrit, vous n’avez pas besoin de remplir ce formulaire.", en:"Since you are already registered, you don’t need to fill in this form.", note:"puisque = cause connue de tous."},
      {fr:"Le télétravail réduit les trajets ; de plus, il permet de mieux concilier vie privée et vie professionnelle.", en:"Remote work reduces commuting; moreover, it helps balance private and professional life."}
    ],
    summary: [
      "Choisissez le rapport logique avant le mot.",
      "Connecteur + phrase ; préposition (malgré, grâce à) + nom.",
      "bien que + subjonctif ; en effet = justification.",
      "Un seul connecteur par lien logique."
    ],
    practice: [
      {type:"mcq", prompt:"Le train a été supprimé ___ la grève.", choices:["grâce à","à cause de","malgré"], answer:1, explain:"Cause négative + nom : à cause de."},
      {type:"mcq", prompt:"J’aime beaucoup mon quartier ; ___, les magasins ferment trop tôt.", choices:["en effet","par conséquent","en revanche"], answer:2, explain:"On oppose un point positif et un point négatif : en revanche."},
      {type:"fill", prompt:"___ la pluie, le marché a eu lieu comme prévu.", answers:["Malgré","En dépit de"], hint:"concession + nom", explain:"Concession suivie d’un nom : malgré (ou en dépit de)."},
      {type:"fill", prompt:"Bien que ce cours ___ cher, je vais m’inscrire.", answers:["soit"], hint:"être", explain:"bien que + subjonctif : soit."},
      {type:"order", words:["à","travail","il","grâce","réussi","a","son"], answers:["Il a réussi grâce à son travail."], explain:"grâce à + nom, pour une cause positive."},
      {type:"mcq", prompt:"Ce projet est indispensable. ___, il améliorera la sécurité des piétons.", choices:["En effet","Pourtant","Alors que"], answer:0, explain:"La deuxième phrase justifie la première : en effet."},
      {type:"fix", prompt:"Malgré qu’il pleuve, nous sortons.", answers:["Bien qu’il pleuve, nous sortons.","Malgré la pluie, nous sortons."], explain:"« Malgré que » est à éviter : bien que + subjonctif, ou malgré + nom."},
      {type:"transform", instruction:"Réunissez les deux phrases avec « bien que ».", prompt:"Il a beaucoup travaillé. Il n’a pas obtenu le poste.", answers:["Bien qu’il ait beaucoup travaillé, il n’a pas obtenu le poste.","Il n’a pas obtenu le poste bien qu’il ait beaucoup travaillé."], explain:"bien que + subjonctif passé (ait travaillé)."},
      {type:"fill", prompt:"Il fait très chaud ; ___, la piscine municipale restera ouverte jusqu’à 21 heures.", answers:["par conséquent","en conséquence"], hint:"conséquence, deux mots", explain:"La deuxième idée est la conséquence de la première : par conséquent."},
      {type:"fix", prompt:"À cause de l’aide de mes collègues, j’ai fini le dossier à temps.", answers:["Grâce à l’aide de mes collègues, j’ai fini le dossier à temps."], explain:"La cause est positive : grâce à, pas à cause de."},
      {type:"transform", instruction:"Remplacez la proposition introduite par « bien que » par « malgré » + nom.", prompt:"Bien qu’il soit fatigué, il est venu à la réunion.", answers:["Malgré sa fatigue, il est venu à la réunion."], explain:"malgré est suivi d’un nom : sa fatigue."},
      {type:"order", words:["du","vol","annulé","en","brouillard","le","raison","est"], answers:["Le vol est annulé en raison du brouillard."], explain:"en raison de + nom (registre administratif) ; de + le → du."}
    ]
  },
  g9:{
    intro: "Les pronoms relatifs permettent d’écrire des phrases complexes sans répétition, un critère du niveau B2 à l’écrit A et B. En compréhension, ils aident à suivre les longues phrases des documents administratifs.",
    rule: [
      "qui = sujet du verbe qui suit : l’agent qui m’a reçu.",
      "que / qu’ = complément d’objet direct : le formulaire que j’ai rempli. Au passé composé, le participe s’accorde avec ce COD placé avant : la lettre que j’ai écrite.",
      "dont = complément introduit par de (verbe, adjectif ou nom) : le document dont j’ai besoin, le voisin dont le chien aboie.",
      "où = lieu ou moment : la ville où je travaille, le jour où je suis arrivé.",
      "Préposition + lequel / laquelle / lesquels / lesquelles pour une chose, préposition + qui pour une personne ; à + lequel → auquel, auxquels, auxquelles.",
      "ce qui / ce que / ce dont = « what » : Ce qui me plaît, c’est le calme ; dites-moi ce dont vous avez besoin."
    ],
    table: { head:["Pronom","Fonction","Exemple"], rows:[
      ["qui","sujet","le médecin qui me suit"],
      ["que / qu’","COD","le dossier que j’ai envoyé"],
      ["dont","complément avec de","la formation dont je rêve"],
      ["où","lieu / temps","l’année où j’ai déménagé"],
      ["préposition + lequel","complément (chose)","la raison pour laquelle je vous écris"],
      ["préposition + qui","complément (personne)","la personne à qui je dois parler"]
    ]},
    tips: [
      "Test : si le mot remplacé serait « il / elle » → qui ; « le / la » → que ; « de ça » → dont.",
      "dont ne remplace jamais un complément avec à : penser à → le projet auquel je pense.",
      "Après dont, ne répétez pas le complément : « le document dont j’ai besoin » (pas de en en plus).",
      "qui ne s’élide jamais : qui est, qui a. Formule de lettre utile : « la raison pour laquelle je vous écris »."
    ],
    examples: [
      {fr:"L’employée qui m’a reçu à la CAF était très aimable.", en:"The employee who saw me at the family benefits office was very kind.", note:"qui = sujet de « a reçu »."},
      {fr:"Voici l’attestation que la mairie m’a délivrée.", en:"Here is the certificate the town hall issued me.", note:"Accord : délivrée (que = l’attestation)."},
      {fr:"C’est le logement dont je vous ai parlé au téléphone.", en:"This is the flat I told you about on the phone.", note:"parler de → dont."},
      {fr:"Je me souviens du jour où j’ai reçu ma carte de résident.", en:"I remember the day I received my resident card.", note:"où pour un moment."},
      {fr:"Le quartier dans lequel nous habitons est très animé.", en:"The neighbourhood we live in is very lively."},
      {fr:"La collègue avec qui je fais du covoiturage déménage le mois prochain.", en:"The colleague I carpool with is moving next month.", note:"Personne : préposition + qui."},
      {fr:"Ce dont j’ai besoin, c’est d’un logement plus grand.", en:"What I need is a bigger place to live.", note:"ce dont + avoir besoin de."},
      {fr:"Voici les raisons pour lesquelles je souhaite changer de poste.", en:"Here are the reasons why I wish to change jobs."}
    ],
    summary: [
      "qui = sujet ; que = COD.",
      "dont = de + … ; où = lieu ou temps.",
      "Préposition + lequel (choses) ou + qui (personnes).",
      "ce qui / ce que / ce dont = what."
    ],
    practice: [
      {type:"mcq", prompt:"Le bus ___ passe devant chez moi va à la gare.", choices:["que","qui","dont"], answer:1, explain:"Le relatif est sujet de « passe » : qui."},
      {type:"mcq", prompt:"La pharmacie ___ je vais est ouverte le dimanche.", choices:["où","que","dont"], answer:0, explain:"aller à + lieu : où."},
      {type:"fill", prompt:"Le formulaire ___ vous avez besoin est sur le site.", answers:["dont"], explain:"avoir besoin de quelque chose → dont."},
      {type:"fill", prompt:"La lettre ___ j’ai reçue hier vient de la préfecture.", answers:["que"], explain:"recevoir quelque chose : COD → que (d’où l’accord reçue)."},
      {type:"order", words:["enfants","voisine","c’est","garde","la","mes","qui"], answers:["C’est la voisine qui garde mes enfants."], explain:"qui est sujet de « garde »."},
      {type:"mcq", prompt:"Voici la raison pour ___ je vous écris.", choices:["lequel","laquelle","qui"], answer:1, explain:"raison est une chose féminine : pour laquelle."},
      {type:"fix", prompt:"C’est le médecin que je vous ai parlé.", answers:["C’est le médecin dont je vous ai parlé."], explain:"parler de quelqu’un → dont, pas que."},
      {type:"transform", instruction:"Réunissez les deux phrases avec un pronom relatif.", prompt:"J’ai un nouveau collègue. Son bureau est à côté du mien.", answers:["J’ai un nouveau collègue dont le bureau est à côté du mien."], explain:"Le bureau de ce collègue → dont le bureau."},
      {type:"fill", prompt:"C’est un projet ___ je pense depuis longtemps.", answers:["auquel"], hint:"à + lequel", explain:"penser à quelque chose : à + lequel → auquel (pas dont)."},
      {type:"fix", prompt:"Le document dont j’en ai besoin n’est pas prêt.", answers:["Le document dont j’ai besoin n’est pas prêt."], explain:"dont remplace déjà « de ce document » : en fait double emploi."},
      {type:"transform", instruction:"Réunissez les deux phrases avec « où ».", prompt:"Je travaille dans une entreprise. L’ambiance y est excellente.", answers:["Je travaille dans une entreprise où l’ambiance est excellente."], explain:"où remplace le lieu (y) ; on supprime y."},
      {type:"order", words:["inquiète","ce","dites-moi","vous","qui"], answers:["Dites-moi ce qui vous inquiète."], explain:"ce qui = what, sujet de « inquiète »."}
    ]
  },
  g10:{
    intro: "« y » et « en » évitent les répétitions et rendent les réponses naturelles à l’oral A et B (« Oui, j’y suis allé ») comme à l’écrit. Ils sont aussi très fréquents dans les documents sonores de la compréhension orale.",
    rule: [
      "y remplace un lieu introduit par à, en, dans, chez, sur… : Tu vas à la poste ? Oui, j’y vais.",
      "y remplace à + chose (penser à, s’habituer à, participer à, répondre à) : Je m’y habitue.",
      "en remplace de + chose ou un lieu d’origine : J’en ai parlé ; Je sors de la mairie → J’en sors.",
      "en remplace un nom avec un, des, du, de la ou une quantité ; on répète la quantité : J’ai deux enfants → J’en ai deux.",
      "Place : devant le verbe conjugué, devant l’auxiliaire, ou devant l’infinitif qu’il complète (Je vais y aller). À l’impératif affirmatif, après le verbe avec un trait d’union : Vas-y ! Prends-en !",
      "Pour les personnes : à + personne → lui / leur ou à lui ; de + personne → de lui / d’elle."
    ],
    table: { head:["Construction","Pronom","Exemple"], rows:[
      ["à / dans / en / chez + lieu","y","Je vais à Lyon → J’y vais."],
      ["à + chose","y","Je réponds à l’e-mail → J’y réponds."],
      ["de + chose","en","Je parle de mon projet → J’en parle."],
      ["de + lieu (origine)","en","Je sors du bureau → J’en sors."],
      ["du / de la / des + nom","en","Je bois du café → J’en bois."],
      ["quantité + nom","en + quantité","J’ai trois frères → J’en ai trois."]
    ]},
    tips: [
      "Avec d’autres pronoms, y et en se placent en dernier : Il m’en a parlé ; Il y en a.",
      "« Il y en a » (there is / are some) est très fréquent à l’oral : Il y en a deux ; il n’y en a plus.",
      "À l’impératif, les verbes en -er reprennent un s devant y et en : Vas-y ! Achètes-en !",
      "Au passé composé, le participe ne s’accorde pas avec en : Des photos, j’en ai pris beaucoup.",
      "Pour une personne, évitez y et en : je parle de mon frère → je parle de lui."
    ],
    examples: [
      {fr:"Vous êtes déjà allé à la sous-préfecture ? Oui, j’y suis allé hier.", en:"Have you been to the sub-prefecture yet? Yes, I went there yesterday.", note:"y devant l’auxiliaire."},
      {fr:"Le nouveau rythme de travail ? Je m’y habitue peu à peu.", en:"The new work schedule? I’m gradually getting used to it.", note:"s’habituer à + chose → y."},
      {fr:"Des rendez-vous ? Il n’y en a plus avant le mois prochain.", en:"Appointments? There are none left before next month.", note:"il n’y en a plus."},
      {fr:"Tu as des timbres ? Oui, j’en ai trois dans mon portefeuille.", en:"Do you have any stamps? Yes, I have three in my wallet.", note:"On répète la quantité."},
      {fr:"Ce stage ? Je vais en parler à ma conseillère.", en:"That internship? I’m going to talk to my adviser about it.", note:"en devant l’infinitif."},
      {fr:"Il rentre du travail ? Oui, il en revient à l’instant.", en:"Is he back from work? Yes, he’s just come back.", note:"de + lieu d’origine → en."},
      {fr:"Voici le formulaire ; joignez-y une photo d’identité.", en:"Here is the form; attach an ID photo to it.", note:"Impératif affirmatif : verbe-y."},
      {fr:"Ma voisine ? Je parle souvent d’elle à mes amis.", en:"My neighbour? I often talk about her to my friends.", note:"Personne : de + pronom tonique, pas en."}
    ],
    summary: [
      "y = lieu ou à + chose.",
      "en = de + chose, partitif, quantité (on répète la quantité).",
      "Devant le verbe, l’auxiliaire ou l’infinitif ; après le verbe à l’impératif affirmatif.",
      "Personnes : lui, leur, de lui, d’elle."
    ],
    practice: [
      {type:"mcq", prompt:"Tu vas au marché ? Oui, j’___ vais ce matin.", choices:["en","y","le"], answer:1, explain:"aller à + lieu → y."},
      {type:"mcq", prompt:"Tu as des enfants ? Oui, j’___ ai deux.", choices:["y","en","les"], answer:1, explain:"Quantité : en + on répète le nombre."},
      {type:"fill", prompt:"Tu as répondu à l’e-mail du propriétaire ? Oui, j’___ ai répondu.", answers:["y"], explain:"répondre à + chose → y."},
      {type:"fill", prompt:"Tu veux du café ? Non merci, j’___ ai déjà bu.", answers:["en"], explain:"Partitif (du café) → en."},
      {type:"order", words:["suis","n’y","allé","je","jamais"], answers:["Je n’y suis jamais allé."], explain:"y se place devant l’auxiliaire, à l’intérieur de la négation."},
      {type:"mcq", prompt:"Tu parles souvent de ton frère ? Oui, je parle souvent ___.", choices:["en","de lui","y"], answer:1, explain:"Pour une personne : de + pronom tonique (de lui)."},
      {type:"fix", prompt:"Le dossier ? J’ai en parlé à mon chef.", answers:["Le dossier ? J’en ai parlé à mon chef."], explain:"Au passé composé, en se place devant l’auxiliaire."},
      {type:"transform", instruction:"Remplacez « à la réunion » par un pronom.", prompt:"Nous avons participé à la réunion.", answers:["Nous y avons participé."], explain:"participer à + chose → y, devant l’auxiliaire."},
      {type:"fill", prompt:"Des places ? Il n’y ___ a plus pour ce soir.", answers:["en"], explain:"Il n’y en a plus : en remplace « de places »."},
      {type:"fix", prompt:"Tu vas à la pharmacie ? Va-y avant midi !", answers:["Tu vas à la pharmacie ? Vas-y avant midi !"], explain:"À l’impératif, va prend un s devant y : vas-y."},
      {type:"transform", instruction:"Remplacez « de pommes de terre » par un pronom.", prompt:"J’ai acheté trois kilos de pommes de terre.", answers:["J’en ai acheté trois kilos."], explain:"en remplace le nom ; la quantité (trois kilos) reste après le verbe."},
      {type:"order", words:["a","il","réfrigérateur","encore","le","dans","en","y"], answers:["Il y en a encore dans le réfrigérateur."], explain:"il y en a : y puis en ; encore après le verbe."}
    ]
  }
});})();
