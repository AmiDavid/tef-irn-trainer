(window.TEF_BANK=window.TEF_BANK||{}).grammar=[
  {
    id:"g11", section:"Les temps", order:6, title:"Présent des verbes irréguliers fréquents", status:"untested",
    short:"Être, avoir, aller, faire, pouvoir, vouloir, devoir, prendre, venir : des formes à connaître par cœur.",
    details:"Les verbes les plus fréquents sont irréguliers au présent et doivent être mémorisés. Être : je suis, nous sommes, ils sont ; avoir : j’ai, nous avons, ils ont ; aller : je vais, nous allons, ils vont ; faire : je fais, nous faisons, ils font. Pouvoir, vouloir et devoir changent de radical avec nous et vous : je peux, nous pouvons, ils peuvent ; je veux, nous voulons, ils veulent ; je dois, nous devons, ils doivent. Prendre et ses composés (apprendre, comprendre) s’écrivent avec un seul n à nous et vous, mais deux n à la 3e personne du pluriel : nous prenons, ils prennent ; de même, venir donne je viens, nous venons, ils viennent. Attention aux trois formes en -es au lieu de -ez : vous êtes, vous faites, vous dites.",
    examples:["Nous faisons nos courses le samedi matin.","Mes voisins prennent le bus tous les jours.","Vous dites que la réunion est reportée ?","Ils viennent de Marseille et veulent s’installer ici."],
    mistakes:[
      {wrong:"Vous faisez du sport ?", right:"Vous faites du sport ?", why:"Faire est irrégulier : vous faites, comme vous êtes et vous dites."},
      {wrong:"Ils prendent le métro.", right:"Ils prennent le métro.", why:"À la 3e personne du pluriel, prendre double le n : ils prennent."},
      {wrong:"Ils veut partir tôt.", right:"Ils veulent partir tôt.", why:"Avec ils, vouloir devient veulent : le radical change au pluriel."}
    ],
    drill:{prompt:"Complète : Qu’est-ce que vous ___ ce week-end ?", choices:["faisez","fait","faisons","faites"], answer:3},
    drills:[
      {prompt:"Complète : Mes enfants ___ l’anglais à l’école.", choices:["apprennent","apprendent","apprenent"], answer:0},
      {prompt:"Complète : Nous ___ partir avant 18 heures.", choices:["doivons","doit","devons","dois"], answer:2},
      {prompt:"Complète : Ils ___ à la réunion demain matin.", choices:["viennent","vient","venent"], answer:0}
    ]
  },
  {
    id:"g12", section:"Les temps", order:18, title:"Passé composé : avoir ou être, et accord du participe", status:"untested",
    short:"Être avec les verbes de mouvement et les pronominaux ; l’accord du participe dépend de l’auxiliaire.",
    details:"La plupart des verbes forment le passé composé avec avoir. Une quinzaine de verbes, surtout de mouvement ou de changement d’état (aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, retourner, devenir…), ainsi que tous les verbes pronominaux, se conjuguent avec être. Avec être, le participe passé s’accorde en général avec le sujet : elle est partie, nous nous sommes inscrits. Avec avoir, il ne s’accorde jamais avec le sujet, mais avec le complément d’objet direct lorsque celui-ci est placé avant le verbe : la lettre que j’ai écrite, ces films, je les ai vus. Monter, descendre, sortir, rentrer, retourner et passer prennent avoir quand ils ont un COD : j’ai sorti la poubelle.",
    examples:["Ma sœur est arrivée à Lyon hier soir.","Nous nous sommes inscrits au cours du soir.","Les documents que vous m’avez envoyés sont complets.","J’ai sorti la poubelle avant de partir."],
    mistakes:[
      {wrong:"J’ai allé à la mairie.", right:"Je suis allé à la mairie.", why:"Aller se conjugue avec être au passé composé."},
      {wrong:"Elle a tombée dans l’escalier.", right:"Elle est tombée dans l’escalier.", why:"Tomber prend être, et le participe s’accorde avec le sujet féminin."},
      {wrong:"Les clés que j’ai perdu étaient sur la table.", right:"Les clés que j’ai perdues étaient sur la table.", why:"Avec avoir, le participe s’accorde avec le COD placé avant le verbe (que = les clés, féminin pluriel)."}
    ],
    drill:{prompt:"Complète : Hier, mes parents ___ au cinéma.", choices:["ont allé","sont allés","sont allé","ont allés"], answer:1},
    drills:[
      {prompt:"Complète : Ce matin, elle ___ à 7 heures.", choices:["s’est levée","a levé","s’a levée"], answer:0},
      {prompt:"Choisis la phrase correcte.", choices:["J’ai monté au troisième étage.","Je suis monté les valises.","J’ai monté les valises."], answer:2},
      {prompt:"Complète : Voici les photos que j’ai ___ pendant les vacances.", choices:["pris","prise","prises"], answer:2}
    ]
  },
  {
    id:"g13", section:"Les temps", order:45, title:"Le plus-que-parfait", status:"untested",
    short:"Une action passée antérieure à une autre action passée : avais/étais + participe passé.",
    details:"Le plus-que-parfait se forme avec l’auxiliaire avoir ou être à l’imparfait, suivi du participe passé : j’avais fini, elle était partie. Il exprime une action accomplie avant un autre moment du passé : Quand je suis arrivé, le film avait déjà commencé. Le choix de l’auxiliaire et les règles d’accord sont les mêmes qu’au passé composé. On l’emploie aussi pour exprimer un regret (Si seulement j’avais su !) et dans le discours rapporté au passé (Il m’a dit qu’il avait déménagé). Des indicateurs comme déjà, la veille ou auparavant l’accompagnent souvent.",
    examples:["Quand je suis arrivé à la gare, le train était déjà parti.","Elle a réussi l’examen parce qu’elle avait beaucoup révisé.","Je lui ai rendu le livre qu’il m’avait prêté.","Si seulement j’avais su plus tôt !"],
    mistakes:[
      {wrong:"Quand je suis arrivé, le cours a déjà commencé.", right:"Quand je suis arrivé, le cours avait déjà commencé.", why:"Le début du cours est antérieur à l’arrivée : on emploie le plus-que-parfait."},
      {wrong:"Il m’a dit qu’il a trouvé un appartement.", right:"Il m’a dit qu’il avait trouvé un appartement.", why:"Après un verbe introducteur au passé, le passé composé devient plus-que-parfait."},
      {wrong:"Nous avions partis tôt.", right:"Nous étions partis tôt.", why:"Partir se conjugue avec être, y compris au plus-que-parfait."}
    ],
    drill:{prompt:"Complète : Quand nous sommes arrivés, ils ___ déjà dîné.", choices:["avaient","ont","auraient"], answer:0},
    drills:[
      {prompt:"Complète : Elle était épuisée parce qu’elle ___ toute la nuit.", choices:["avait travaillé","a travaillé","travaillera"], answer:0},
      {prompt:"Complète : J’ai retrouvé mes clés au bureau : je les y ___ la veille.", choices:["oubliais","oublierai","avais oubliées"], answer:2},
      {prompt:"Complète : Je ne savais pas que tu ___ en Espagne.", choices:["as vécu","avais vécu","vivras"], answer:1}
    ]
  },
  {
    id:"g14", section:"Les temps", order:30, title:"Futur simple ou futur proche", status:"untested",
    short:"Aller + infinitif pour un futur imminent ou déjà engagé ; futur simple pour un projet, une prévision, une promesse.",
    details:"Le futur proche (aller au présent + infinitif) présente une action imminente ou déjà engagée : Attention, il va pleuvoir ; je vais déménager le mois prochain. Le futur simple présente l’avenir de façon plus détachée : prévisions, promesses, projets plus lointains, consignes et écrits formels. Il se forme sur l’infinitif + -ai, -as, -a, -ons, -ez, -ont (je parlerai, je prendrai), mais plusieurs radicaux sont irréguliers : être → ser-, avoir → aur-, aller → ir-, faire → fer-, pouvoir → pourr-, voir → verr-, venir → viendr-, devoir → devr-. Après quand, lorsque et dès que, on emploie le futur si l’action est à venir, et non le présent comme en anglais : Je t’appellerai quand j’arriverai. À l’écrit du TEF, le futur simple donne un registre plus soutenu.",
    examples:["Je vais passer l’examen dans deux semaines.","Quand vous viendrez à Lyon, nous visiterons la vieille ville.","Je vous enverrai le dossier dès que je l’aurai complété.","Regarde le ciel : il va pleuvoir."],
    mistakes:[
      {wrong:"Je t’appellerai quand j’arrive.", right:"Je t’appellerai quand j’arriverai.", why:"Après quand, une action future se met au futur (contrairement à l’anglais « when I arrive »)."},
      {wrong:"Nous allerons à la plage.", right:"Nous irons à la plage.", why:"Au futur, le radical d’aller est irrégulier : ir-."},
      {wrong:"Je fairai les courses demain.", right:"Je ferai les courses demain.", why:"Au futur, faire a le radical irrégulier fer-."}
    ],
    drill:{prompt:"Complète : Je te préviendrai dès que j’___ les résultats.", choices:["ai","aurais","aurai"], answer:2},
    drills:[
      {prompt:"Complète : L’année prochaine, nous ___ en Bretagne.", choices:["irons","allerons","irions"], answer:0},
      {prompt:"Complète : Dépêche-toi, le bus ___ partir !", choices:["ira","allait","va"], answer:2},
      {prompt:"Complète : D’après la météo, il ___ beau demain.", choices:["fera","faira","fairait"], answer:0}
    ]
  },
  {
    id:"g15", section:"Les pronoms", order:24, title:"Pronoms COD et COI : le, la, les, lui, leur", status:"untested",
    short:"Le, la, les remplacent un COD ; lui, leur remplacent « à + personne ».",
    details:"Le pronom complément d’objet direct (le, la, l’, les) remplace un complément construit sans préposition : Je vois Marie → Je la vois. Le pronom complément d’objet indirect (lui, leur) remplace une personne introduite par à : Je parle à mes voisins → Je leur parle. Il faut donc connaître la construction du verbe : on aide quelqu’un (COD : je l’aide), mais on téléphone à quelqu’un (COI : je lui téléphone). Le pronom se place devant le verbe conjugué, devant l’auxiliaire au passé composé (je lui ai écrit), ou devant l’infinitif dont il dépend (je vais l’appeler). Le pronom leur est invariable, contrairement au déterminant possessif leurs.",
    examples:["Ce livre ? Je l’ai déjà lu.","J’ai appelé ma propriétaire et je lui ai expliqué le problème.","Mes collègues ? Je leur envoie le rapport demain.","Je vais les inviter samedi soir."],
    mistakes:[
      {wrong:"Je le téléphone ce soir.", right:"Je lui téléphone ce soir.", why:"On téléphone à quelqu’un : c’est un COI, donc lui."},
      {wrong:"Je leurs ai répondu.", right:"Je leur ai répondu.", why:"Le pronom leur est invariable : il ne prend jamais de s."},
      {wrong:"Je lui aide à faire ses devoirs.", right:"Je l’aide à faire ses devoirs.", why:"On aide quelqu’un, sans préposition : c’est un COD."}
    ],
    drill:{prompt:"J’ai écrit à ma sœur. → Je ___ ai écrit.", choices:["la","lui","l’","leur"], answer:1},
    drills:[
      {prompt:"Tu connais mes voisins ? Oui, je ___ connais bien.", choices:["les","leur","leurs"], answer:0},
      {prompt:"Tu as posé la question à tes parents ? Oui, je ___ ai posé la question.", choices:["les","leurs","leur"], answer:2},
      {prompt:"Tu peux aider Paul ? Oui, je peux ___.", choices:["lui aider","aider le","l’aider"], answer:2}
    ]
  },
  {
    id:"g16", section:"Les pronoms", order:60, title:"L’ordre des doubles pronoms", status:"untested",
    short:"Me/te/nous/vous, puis le/la/les, puis lui/leur, puis y, puis en ; à l’impératif affirmatif : donne-le-moi.",
    details:"Quand deux pronoms compléments se suivent devant le verbe, leur ordre est fixe : me, te, se, nous, vous → le, la, les → lui, leur → y → en. On dit donc : Il me le donne, Je le lui donne, Je leur en parle, Il y en a. À l’impératif affirmatif, les pronoms se placent après le verbe, reliés par des traits d’union, et le COD vient avant le COI : Donne-le-moi, Envoyez-la-leur. Me et te deviennent moi et toi en fin de groupe, mais m’ et t’ devant en : Donne-m’en. À l’impératif négatif, on revient à l’ordre habituel : Ne me le donne pas.",
    examples:["Ton adresse ? Je te la donnerai demain.","Les clés, je les lui ai rendues hier.","Ce document, envoyez-le-moi par courriel, s’il vous plaît.","Des conseils ? Mon professeur m’en a donné plusieurs."],
    mistakes:[
      {wrong:"Je lui le donne.", right:"Je le lui donne.", why:"Le COD le, la, les se place avant lui ou leur."},
      {wrong:"Donne-moi-le.", right:"Donne-le-moi.", why:"À l’impératif affirmatif, le COD vient avant le COI."},
      {wrong:"Il en m’a parlé.", right:"Il m’en a parlé.", why:"En se place toujours en dernier, juste avant le verbe ou l’auxiliaire."}
    ],
    drill:{prompt:"Tu as rendu le livre à Marc ? Oui, je ___ ai rendu.", choices:["le lui","lui le","lui l’"], answer:0},
    drills:[
      {prompt:"Il t’a parlé du projet ? Oui, il ___ a parlé.", choices:["m’en","en m’","m’y"], answer:0},
      {prompt:"Tu as donné les clés aux voisins ? Oui, je ___ ai données.", choices:["leur les","les leurs","les leur"], answer:2},
      {prompt:"Impératif : Ces photos, montre-___ !", choices:["nous-les","les-nous","leur-les"], answer:1}
    ]
  },
  {
    id:"g17", section:"Les pronoms", order:84, title:"Pronoms relatifs composés : lequel, auquel, duquel", status:"untested",
    short:"Après une préposition : lequel, laquelle, lesquels, lesquelles (auquel, duquel, grâce auquel…).",
    details:"Après une préposition (avec, pour, sans, chez, sur, parmi…), on emploie lequel, laquelle, lesquels ou lesquelles, accordé avec l’antécédent : l’outil avec lequel je travaille, la raison pour laquelle j’écris. Avec à, la forme se contracte : auquel, auxquels, auxquelles (mais à laquelle) ; c’est aussi le cas avec les locutions terminées par à : le programme grâce auquel j’ai progressé. Avec une locution terminée par de (près de, à côté de, au cours de), on obtient duquel, de laquelle, desquels, desquelles : le parc près duquel j’habite. Pour une personne, on emploie le plus souvent qui après une préposition : la collègue avec qui je travaille. En revanche, quand de introduit simplement le complément d’un verbe ou d’un nom, on utilise dont : le livre dont je parle.",
    examples:["C’est la raison pour laquelle je souhaite changer de poste.","Le projet auquel je participe se termine en juin.","La maison à côté de laquelle nous habitons est à vendre.","C’est un stage grâce auquel j’ai beaucoup appris."],
    mistakes:[
      {wrong:"C’est la raison pour que j’écris.", right:"C’est la raison pour laquelle j’écris.", why:"Après la préposition pour, il faut le relatif composé, accordé avec raison (féminin) : laquelle."},
      {wrong:"Le collègue avec que je travaille.", right:"Le collègue avec qui je travaille.", why:"Que ne s’emploie jamais après une préposition ; pour une personne, on dit avec qui (ou avec lequel)."},
      {wrong:"Les questions à lesquelles il a répondu.", right:"Les questions auxquelles il a répondu.", why:"À + lesquelles se contracte en auxquelles."}
    ],
    drill:{prompt:"Complète : C’est l’ordinateur avec ___ je travaille.", choices:["que","laquelle","dont","lequel"], answer:3},
    drills:[
      {prompt:"Complète : Voici les conditions ___ nous acceptons le contrat.", choices:["sous lesquelles","sous lesquels","sous que"], answer:0},
      {prompt:"Complète : C’est un sujet ___ je m’intéresse beaucoup.", choices:["dont","lequel","auquel"], answer:2},
      {prompt:"Complète : Le restaurant près ___ j’habite est excellent.", choices:["duquel","dont","de lequel"], answer:0}
    ]
  },
  {
    id:"g18", section:"Les modes", order:39, title:"Le conditionnel présent", status:"untested",
    short:"Pour être poli, exprimer un souhait, donner un conseil ou rapporter une information non confirmée.",
    details:"Le conditionnel présent se forme avec le radical du futur et les terminaisons de l’imparfait : je voudrais, tu pourrais, il faudrait, nous aimerions. Il sert à formuler une demande polie (Pourriez-vous m’envoyer le formulaire ?), à exprimer un souhait (J’aimerais suivre cette formation) et à donner un conseil (Tu devrais réserver à l’avance ; à ta place, je comparerais les prix). Dans la presse, il signale une information non confirmée : Le maire envisagerait de fermer la rue. On le trouve aussi dans la principale après si + imparfait. À l’oral du TEF, il est indispensable pour téléphoner poliment et pour conseiller un ami.",
    examples:["Je voudrais savoir s’il reste des places pour le cours.","À ta place, je prendrais l’appartement le plus proche du travail.","Selon la presse, la piscine fermerait pendant deux mois.","Pourriez-vous me rappeler demain matin ?"],
    mistakes:[
      {wrong:"Je voudrai un renseignement, s’il vous plaît.", right:"Je voudrais un renseignement, s’il vous plaît.", why:"Pour une demande polie, on emploie le conditionnel (-ais), pas le futur (-ai) : la différence s’entend peu, mais elle s’écrit."},
      {wrong:"Tu devrait demander au propriétaire.", right:"Tu devrais demander au propriétaire.", why:"Avec tu, la terminaison du conditionnel est -ais."},
      {wrong:"Est-ce que vous pouvriez m’aider ?", right:"Est-ce que vous pourriez m’aider ?", why:"Le radical de pouvoir au conditionnel est pourr-, comme au futur."}
    ],
    drill:{prompt:"Demande polie : ___-vous m’indiquer les horaires ?", choices:["Pourrez","Pourriez","Pouvriez"], answer:1},
    drills:[
      {prompt:"Conseil : À ta place, je ___ un autre logement.", choices:["chercherais","chercherai","cherchais"], answer:0},
      {prompt:"Information non confirmée : Selon plusieurs médias, l’usine ___ à la fin de l’année.", choices:["a fermé","ferme","fermerait"], answer:2},
      {prompt:"Souhait : Nous ___ visiter l’appartement samedi.", choices:["aimions","aimerons","aimerions"], answer:2}
    ]
  },
  {
    id:"g19", section:"Les modes", order:78, title:"Conditionnel passé et si + plus-que-parfait", status:"untested",
    short:"Si + plus-que-parfait → conditionnel passé : hypothèse sur le passé, regret ou reproche.",
    details:"Le conditionnel passé se forme avec avoir ou être au conditionnel présent, suivi du participe passé : j’aurais aimé, elle serait venue. Il exprime une hypothèse non réalisée dans le passé, avec si + plus-que-parfait : Si j’avais su, je serais venu plus tôt. Il sert aussi à exprimer un regret (J’aurais dû accepter ce poste) ou un reproche (Tu aurais pu me prévenir !). Comme le conditionnel présent, il peut présenter un fait passé non confirmé : L’incendie aurait été causé par un court-circuit. On peut également croiser les époques : Si j’avais accepté ce poste, je vivrais aujourd’hui à Lyon. Dans tous les cas, on ne met jamais de conditionnel juste après si.",
    examples:["Si nous étions partis plus tôt, nous n’aurions pas raté le train.","J’aurais aimé suivre cette formation l’an dernier.","Tu aurais dû m’en parler avant.","Si j’avais appris le français plus jeune, je serais bilingue aujourd’hui."],
    mistakes:[
      {wrong:"Si j’aurais su, je serais venu.", right:"Si j’avais su, je serais venu.", why:"Après si, on n’emploie jamais le conditionnel : si + plus-que-parfait."},
      {wrong:"J’aurais dû de partir.", right:"J’aurais dû partir.", why:"Devoir est suivi directement de l’infinitif, sans préposition."},
      {wrong:"Si tu m’avais appelé, je t’aurai aidé.", right:"Si tu m’avais appelé, je t’aurais aidé.", why:"Il faut le conditionnel passé (aurais), et non le futur antérieur (aurai)."}
    ],
    drill:{prompt:"Complète : Si j’avais vu l’annonce, j’___ ma candidature.", choices:["aurais envoyé","avais envoyé","aurai envoyé","enverrai"], answer:0},
    drills:[
      {prompt:"Complète : Si tu ___ plus tôt, tu aurais vu le début du spectacle.", choices:["étais arrivé","serais arrivé","es arrivé"], answer:0},
      {prompt:"Regret : J’___ accepter cette proposition.", choices:["avais dû","aurai dû","aurais dû"], answer:2},
      {prompt:"Complète : Si elle avait pris ce poste, elle ___ aujourd’hui à Bordeaux.", choices:["habitait","habiterait","avait habité"], answer:1}
    ]
  },
  {
    id:"g20", section:"Les modes", order:51, title:"Former le subjonctif présent", status:"untested",
    short:"Radical de « ils » au présent + -e, -es, -e, -ions, -iez, -ent ; quelques irréguliers à connaître.",
    details:"Pour la plupart des verbes, on part de la 3e personne du pluriel du présent (ils finissent → que je finisse ; ils prennent → que je prenne) et on ajoute -e, -es, -e, -ent. Pour nous et vous, on reprend les formes de l’imparfait : que nous prenions, que vous veniez. Plusieurs verbes très fréquents sont irréguliers : être (que je sois, que nous soyons), avoir (que j’aie, qu’il ait), aller (que j’aille, que nous allions), faire (que je fasse), pouvoir (que je puisse), savoir (que je sache, que vous sachiez), vouloir (que je veuille, que nous voulions). Pour les verbes en -er, les formes de je, tu, il et ils sont identiques au présent de l’indicatif : ce sont donc surtout les verbes irréguliers qui montrent que tu maîtrises ce mode.",
    examples:["Il faut que tu fasses une copie de ton passeport.","Je voudrais que vous m’envoyiez le contrat.","Il est important que nous soyons à l’heure.","Il faut qu’ils puissent s’inscrire en ligne."],
    mistakes:[
      {wrong:"Il faut que je fais mes devoirs.", right:"Il faut que je fasse mes devoirs.", why:"Faire a un subjonctif irrégulier : que je fasse."},
      {wrong:"Il faut que nous prennions le train.", right:"Il faut que nous prenions le train.", why:"Avec nous et vous, le subjonctif reprend la forme de l’imparfait : nous prenions, avec un seul n."},
      {wrong:"Je veux qu’il a son diplôme.", right:"Je veux qu’il ait son diplôme.", why:"Avoir au subjonctif : que j’aie, qu’il ait."}
    ],
    drill:{prompt:"Complète : Il faut que tu ___ patient.", choices:["es","soit","seras","sois"], answer:3},
    drills:[
      {prompt:"Complète : Il faut que j’___ à la préfecture demain.", choices:["aille","alle","vais"], answer:0},
      {prompt:"Complète : Pour ce poste, il faut que vous ___ conduire.", choices:["savez","sachez","sachiez"], answer:2},
      {prompt:"Complète : Il faudrait que nous ___ une solution rapidement.", choices:["trouvions","trouvons","trouverons"], answer:0}
    ]
  },
  {
    id:"g21", section:"Les modes", order:57, title:"Subjonctif : volonté, sentiment, obligation, doute", status:"untested",
    short:"Il faut que, je veux que, je suis content que, bien que, avant que, à condition que + subjonctif.",
    details:"Le subjonctif s’emploie dans une subordonnée introduite par que lorsque le verbe principal exprime une obligation (il faut que, il est nécessaire que), une volonté ou un souhait (je veux que, je souhaite que, je préfère que), un sentiment (je suis content que, je regrette que, j’ai peur que) ou un doute (je doute que, il est possible que). Certaines conjonctions l’exigent aussi : bien que, avant que, pour que, à condition que, à moins que, sans que, jusqu’à ce que. En revanche, après que, parce que, pendant que et espérer que se construisent avec l’indicatif. Si le sujet est le même dans les deux propositions, on emploie l’infinitif : je veux partir, avant de partir.",
    examples:["Je suis content que tu aies trouvé un travail.","Nous partirons avant qu’il fasse nuit.","Je peux te prêter ma voiture à condition que tu me la rendes dimanche.","Bien qu’il soit fatigué, il continue à travailler."],
    mistakes:[
      {wrong:"Je veux que je parte tôt.", right:"Je veux partir tôt.", why:"Quand le sujet est le même dans les deux propositions, on utilise l’infinitif."},
      {wrong:"J’espère que tu sois en forme.", right:"J’espère que tu es en forme.", why:"Espérer que est suivi de l’indicatif, contrairement à souhaiter que."},
      {wrong:"Après qu’il soit parti, nous avons rangé.", right:"Après qu’il est parti, nous avons rangé.", why:"Selon la norme, après que se construit avec l’indicatif ; c’est avant que qui demande le subjonctif."}
    ],
    drill:{prompt:"Complète : Je suis ravi que vous ___ venir.", choices:["pouvez","pourrez","puissiez"], answer:2},
    drills:[
      {prompt:"Complète : Rentre avant qu’il ___ à pleuvoir.", choices:["commence","commencera","a commencé"], answer:0},
      {prompt:"Quelle phrase est correcte ?", choices:["Je souhaite qu’il vienne.","J’espère qu’il vienne.","Je souhaite qu’il viendra."], answer:0},
      {prompt:"Complète : J’accepte, à condition que tu ___ la vaisselle.", choices:["fais","feras","fasses","faisais"], answer:2}
    ]
  },
  {
    id:"g22", section:"Les modes", order:66, title:"Indicatif ou subjonctif après penser, croire", status:"untested",
    short:"Je pense que + indicatif ; je ne pense pas que + subjonctif.",
    details:"À la forme affirmative, les verbes d’opinion comme penser, croire, trouver, être sûr que ou il me semble que sont suivis de l’indicatif, car le locuteur présente le fait comme réel : Je pense qu’il a raison. À la forme négative, le doute apparaît et on emploie généralement le subjonctif : Je ne pense pas qu’il ait raison. À la forme interrogative avec inversion, le subjonctif est également fréquent : Pensez-vous que ce soit possible ? Avec est-ce que ou une simple intonation, l’indicatif reste courant à l’oral. Douter que, en revanche, exprime déjà l’incertitude et demande le subjonctif même à la forme affirmative : Je doute qu’il vienne.",
    examples:["Je crois que cette solution est la meilleure.","Je ne crois pas que ce soit une bonne idée.","Pensez-vous que la mairie puisse financer ce projet ?","Je suis sûr qu’elle viendra."],
    mistakes:[
      {wrong:"Je pense qu’il soit en retard.", right:"Je pense qu’il est en retard.", why:"À la forme affirmative, penser est suivi de l’indicatif."},
      {wrong:"Je ne pense pas que c’est utile.", right:"Je ne pense pas que ce soit utile.", why:"À la forme négative, l’opinion devient incertaine : on emploie le subjonctif à l’écrit soigné."},
      {wrong:"Je doute qu’il a compris.", right:"Je doute qu’il ait compris.", why:"Douter que exprime une incertitude et demande toujours le subjonctif."}
    ],
    drill:{prompt:"Complète : Je ne crois pas que ce projet ___ réaliste.", choices:["est","soit","sera"], answer:1},
    drills:[
      {prompt:"Complète : Je trouve que ce quartier ___ très agréable.", choices:["soit","sois","est"], answer:2},
      {prompt:"Complète : Je doute que nous ___ finir avant ce soir.", choices:["puissions","pouvons","pourrons"], answer:0},
      {prompt:"Choisis la phrase correcte.", choices:["Je suis sûr qu’il ait raison.","Je pense qu’il ait raison.","Je ne suis pas sûr qu’il ait raison."], answer:2}
    ]
  },
  {
    id:"g23", section:"La phrase complexe", order:75, title:"La voix passive", status:"untested",
    short:"Être au temps voulu + participe passé accordé ; l’agent est introduit par « par » (parfois « de »).",
    details:"À la voix passive, le complément d’objet direct de la phrase active devient sujet : La mairie a voté le projet → Le projet a été voté par la mairie. On conjugue être au temps de la phrase active et on accorde le participe passé avec le sujet : Les travaux seront terminés en mai. Le complément d’agent est introduit par par, mais souvent par de avec des verbes de sentiment ou d’état (être apprécié de, être entouré de). On peut omettre l’agent s’il est inconnu ou évident : Le magasin a été cambriolé. Seuls les verbes qui ont un COD peuvent se mettre au passif ; dans un registre courant, on est souvent une alternative plus légère : On a annulé la réunion.",
    examples:["Le nouveau centre culturel sera inauguré en septembre.","Cette décision a été prise par le conseil municipal.","Le directeur est très apprécié de ses employés.","Les candidats retenus seront contactés par téléphone."],
    mistakes:[
      {wrong:"La réunion a été annulé.", right:"La réunion a été annulée.", why:"Au passif, le participe s’accorde avec le sujet (réunion, féminin)."},
      {wrong:"Le projet a été accepté de la direction.", right:"Le projet a été accepté par la direction.", why:"Pour une action, l’agent est introduit par par ; de s’emploie surtout avec des verbes de sentiment ou d’état."},
      {wrong:"Le bâtiment est construit l’année dernière.", right:"Le bâtiment a été construit l’année dernière.", why:"Pour une action passée, être se met au passé composé : a été construit."}
    ],
    drill:{prompt:"Mets au passif : On a réparé la voiture. → La voiture ___.", choices:["a été réparée","a réparé","a été réparé"], answer:0},
    drills:[
      {prompt:"Complète : Les résultats ___ publiés demain.", choices:["seront","auront","ont été"], answer:0},
      {prompt:"Forme passive de : « Le jury a choisi deux candidates. »", choices:["Deux candidates ont choisi le jury.","Deux candidates ont été choisi par le jury.","Deux candidates ont été choisies par le jury."], answer:2},
      {prompt:"Complète : Ce musée ___ par plus d’un million de personnes chaque année.", choices:["visite","est visité","a visité"], answer:1}
    ]
  },
  {
    id:"g24", section:"La phrase complexe", order:81, title:"Discours rapporté et concordance des temps", status:"untested",
    short:"Il a dit que… : présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel.",
    details:"Au discours indirect, on supprime les guillemets et on adapte les pronoms et les possessifs : « Je suis malade » → Il dit qu’il est malade. Si le verbe introducteur est au passé (il a dit, elle expliquait), les temps changent : présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel présent ; l’imparfait et le plus-que-parfait restent inchangés. Les indicateurs de temps changent aussi : aujourd’hui → ce jour-là, demain → le lendemain, hier → la veille, la semaine prochaine → la semaine suivante. Une question fermée est introduite par si (Elle m’a demandé si j’étais libre) ; qu’est-ce que devient ce que, et l’inversion disparaît. Un ordre à l’impératif devient de + infinitif : Il m’a dit de rappeler.",
    examples:["Elle m’a dit qu’elle partirait le lendemain.","Le propriétaire m’a expliqué qu’il avait déjà loué l’appartement.","Mon voisin m’a demandé si je pouvais garder son chat.","Le médecin m’a conseillé de me reposer."],
    mistakes:[
      {wrong:"Il m’a demandé qu’est-ce que je voulais.", right:"Il m’a demandé ce que je voulais.", why:"Au discours indirect, qu’est-ce que devient ce que."},
      {wrong:"La semaine dernière, elle a dit qu’elle viendra le lendemain.", right:"La semaine dernière, elle a dit qu’elle viendrait le lendemain.", why:"Après un verbe introducteur au passé, le futur devient conditionnel présent."},
      {wrong:"Il m’a demandé est-ce que j’étais libre.", right:"Il m’a demandé si j’étais libre.", why:"Une question fermée se rapporte avec si, sans est-ce que."}
    ],
    drill:{prompt:"« Je cherche un appartement. » → Il m’a dit qu’il ___ un appartement.", choices:["cherche","a cherché","cherchait"], answer:2},
    drills:[
      {prompt:"« Tu as fini ? » → Elle m’a demandé ___ j’avais fini.", choices:["si","que","est-ce que"], answer:0},
      {prompt:"« J’ai raté le bus. » → Il a expliqué qu’il ___ le bus.", choices:["a raté","ratera","avait raté"], answer:2},
      {prompt:"« Rappelez-moi demain. » → Elle m’a demandé ___ le lendemain.", choices:["de la rappeler","la rappeler","à la rappeler"], answer:0}
    ]
  },
  {
    id:"g25", section:"La phrase complexe", order:72, title:"Le gérondif", status:"untested",
    short:"En + participe présent : simultanéité, manière, moyen ou condition, avec le même sujet.",
    details:"Le gérondif se forme avec en + participe présent ; le participe présent se construit sur le radical de nous au présent + -ant : nous prenons → en prenant. Trois formes sont irrégulières : en étant, en ayant, en sachant. Il exprime la simultanéité (Il écoute la radio en conduisant), la manière ou le moyen (On apprend en pratiquant) ou la condition (En partant tôt, tu éviteras les bouchons). Le sujet du gérondif doit être le même que celui du verbe principal : En arrivant, j’ai vu Paul signifie que c’est moi qui arrive. Tout en souligne la simultanéité ou une opposition : Tout en reconnaissant ses qualités, je reste prudent.",
    examples:["J’ai trouvé ce travail en lisant les petites annonces.","En prenant le train, tu arriveras plus vite.","Elle prépare le dîner en écoutant la radio.","Tout en reconnaissant les avantages du projet, je reste prudent."],
    mistakes:[
      {wrong:"En faisant du sport, ma santé s’est améliorée.", right:"En faisant du sport, j’ai amélioré ma santé.", why:"Le sujet du gérondif doit être celui du verbe principal : ce n’est pas « ma santé » qui fait du sport."},
      {wrong:"J’ai appris le français par regarder des films.", right:"J’ai appris le français en regardant des films.", why:"Pour exprimer le moyen avec un verbe, on utilise en + participe présent, et non par + infinitif."}
    ],
    drill:{prompt:"Complète : J’ai amélioré mon français ___ la radio tous les jours.", choices:["en écoutant","par écouter","en écouté","écoutant de"], answer:0},
    drills:[
      {prompt:"Complète : ___ plus tôt, tu trouveras une place.", choices:["En arrivé","En arrivant","Pour arrivant"], answer:1},
      {prompt:"Gérondif du verbe « savoir » :", choices:["en savant","en saisant","en sachant"], answer:2},
      {prompt:"Quelle phrase est correcte ?", choices:["En attendant le bus, il a commencé à pleuvoir.","En attendant le bus, le journal a été lu.","En attendant le bus, j’ai lu le journal."], answer:2}
    ]
  },
  {
    id:"g26", section:"Argumenter", order:48, title:"Exprimer la cause et la conséquence", status:"untested",
    short:"Parce que, puisque, car, comme, grâce à, à cause de ; donc, c’est pourquoi, si bien que.",
    details:"Parce que répond à la question pourquoi et apporte une information nouvelle ; puisque présente une cause connue ou évidente pour l’interlocuteur ; car, plutôt écrit, relie deux propositions et ne se place jamais en tête de phrase, où l’on emploie plutôt comme. Devant un nom, grâce à introduit une cause au résultat positif et à cause de une cause au résultat plutôt négatif ; en raison de est plus neutre et administratif. Pour la conséquence, on utilise donc, c’est pourquoi, par conséquent, ou si bien que suivi de l’indicatif : Il a beaucoup plu, si bien que la fête a été annulée. Si… que et tellement… que soulignent l’intensité : Il était si fatigué qu’il s’est endormi.",
    examples:["Je n’ai pas pu venir parce que j’étais malade.","Puisque tu connais bien la ville, tu pourrais nous guider.","Grâce à cette formation, j’ai trouvé un emploi.","Les trains étaient en grève, si bien que je suis arrivé en retard."],
    mistakes:[
      {wrong:"Grâce à la pluie, le match a été annulé.", right:"À cause de la pluie, le match a été annulé.", why:"Grâce à introduit une cause au résultat positif ; pour un résultat négatif, on utilise à cause de."},
      {wrong:"Car il pleuvait, je suis resté chez moi.", right:"Comme il pleuvait, je suis resté chez moi.", why:"Car ne se place pas en tête de phrase ; dans cette position, on emploie comme."},
      {wrong:"Je suis venu à cause de je voulais te voir.", right:"Je suis venu parce que je voulais te voir.", why:"À cause de est suivi d’un nom ; devant une proposition, il faut parce que."}
    ],
    drill:{prompt:"Complète : ___ ton aide, j’ai réussi mon déménagement.", choices:["Grâce à","À cause de","Parce que"], answer:0},
    drills:[
      {prompt:"Complète : ___ tu es libre ce soir, viens dîner avec nous !", choices:["Puisque","Car","Grâce à"], answer:0},
      {prompt:"Complète : Le loyer a beaucoup augmenté, ___ nous avons dû déménager.", choices:["parce que","puisque","si bien que"], answer:2},
      {prompt:"Complète : Le vol a été retardé ___ une tempête.", choices:["parce qu’","à cause d’","grâce à"], answer:1}
    ]
  },
  {
    id:"g27", section:"Argumenter", order:69, title:"Exprimer l’opposition et la concession", status:"untested",
    short:"Bien que + subjonctif, malgré + nom, même si et alors que + indicatif.",
    details:"La concession reconnaît un fait qui n’empêche pas le résultat. Bien que (ou quoique, plus soutenu) est suivi du subjonctif : Bien qu’il pleuve, nous sortons. Malgré est suivi d’un nom : Malgré la pluie, nous sortons. Même si est suivi de l’indicatif, jamais du subjonctif ni du conditionnel : Même s’il pleut, nous sortirons. Alors que et tandis que opposent deux faits et se construisent avec l’indicatif : Mon frère adore la ville, alors que je préfère la campagne. Entre deux phrases, on utilise pourtant, cependant ou néanmoins ; enfin, avoir beau + infinitif est une tournure B2 très idiomatique : J’ai beau chercher, je ne trouve pas mes clés.",
    examples:["Bien que le loyer soit élevé, l’appartement est très bien situé.","Malgré ses efforts, il n’a pas obtenu le poste.","Même si je suis occupé, je prendrai le temps de t’aider.","Elle prend le vélo, alors que son mari préfère la voiture."],
    mistakes:[
      {wrong:"Malgré qu’il soit malade, il travaille.", right:"Bien qu’il soit malade, il travaille.", why:"Malgré que est critiqué par la norme : devant une proposition, emploie bien que ; malgré s’utilise devant un nom."},
      {wrong:"Bien qu’il est tard, je continue.", right:"Bien qu’il soit tard, je continue.", why:"Bien que exige le subjonctif."},
      {wrong:"Même s’il fasse froid, je sortirai.", right:"Même s’il fait froid, je sortirai.", why:"Même si est suivi de l’indicatif."}
    ],
    drill:{prompt:"Complète : ___ la grève, j’ai pu aller au travail.", choices:["Bien que","Même si","Malgré"], answer:2},
    drills:[
      {prompt:"Complète : Bien qu’elle ___ beaucoup de travail, elle vient à la fête.", choices:["ait","a","aura"], answer:0},
      {prompt:"Complète : Même s’il ___ demain, le marché aura lieu.", choices:["pleuve","pleuvrait","pleut"], answer:2},
      {prompt:"Complète : Je préfère la mer, ___ ma sœur adore la montagne.", choices:["alors que","bien que","malgré"], answer:0}
    ]
  },
  {
    id:"g28", section:"Les déterminants et accords", order:36, title:"Comparatif et superlatif : meilleur, mieux, pire", status:"untested",
    short:"Plus, moins, aussi… que ; meilleur (adjectif) et mieux (adverbe) ; pire.",
    details:"Le comparatif se construit avec plus, moins ou aussi + adjectif ou adverbe + que : Ce trajet est plus rapide que l’autre. Avec un nom, on utilise plus de, moins de, autant de ; avec un verbe, verbe + plus, moins ou autant : Il y a autant de bruit qu’avant ; je travaille autant que toi. Bon devient meilleur (adjectif, qui s’accorde) et bien devient mieux (adverbe, invariable) : Cette solution est meilleure ; elle cuisine mieux que moi. Mauvais a pour comparatif plus mauvais ou pire, surtout au sens abstrait. Le superlatif ajoute l’article défini (le plus cher, la moins chère, les meilleurs, le mieux) et son complément est introduit par de : le meilleur restaurant du quartier.",
    examples:["Le train est plus pratique que la voiture pour aller au centre.","C’est la meilleure solution pour les habitants.","Elle parle mieux anglais que moi.","C’est le quartier le plus calme de la ville."],
    mistakes:[
      {wrong:"Ce gâteau est plus bon que l’autre.", right:"Ce gâteau est meilleur que l’autre.", why:"Le comparatif de supériorité de bon est meilleur."},
      {wrong:"Il chante meilleur que moi.", right:"Il chante mieux que moi.", why:"Avec un verbe, on utilise l’adverbe mieux ; meilleur qualifie un nom."},
      {wrong:"C’est la ville la plus belle dans la France.", right:"C’est la plus belle ville de France.", why:"Le complément du superlatif est introduit par de : de France, du monde, de la ville."}
    ],
    drill:{prompt:"Complète : Cette offre est ___ que la précédente.", choices:["mieux","meilleure","plus bonne","meilleur"], answer:1},
    drills:[
      {prompt:"Complète : Depuis que je fais du sport, je dors ___.", choices:["mieux","meilleur","plus bien"], answer:0},
      {prompt:"Complète : Il y a ___ voitures qu’avant dans le centre.", choices:["moins","moins des","moins de"], answer:2},
      {prompt:"Complète : Cette année, la situation est ___ que l’année dernière.", choices:["plus pire","pirement","pire"], answer:2}
    ]
  }
];
