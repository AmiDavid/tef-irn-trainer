/* g36 — Pronoms toniques, possessifs et démonstratifs (card, lesson, 12 practice, 28 bank questions) */
(()=>{const B=window.TEF_BANK=window.TEF_BANK||{};
(B.grammar=B.grammar||[]).push({
  id:"g36", section:"Les pronoms", order:25, title:"Pronoms toniques, possessifs et démonstratifs : moi, le mien, celui-ci", status:"untested",
  short:"Moi, toi, lui… après une préposition et pour insister ; le mien, la tienne… pour ne pas répéter ; celui, celle + -ci / -là, qui, que, de.",
  details:"Les pronoms toniques (moi, toi, lui, elle, nous, vous, eux, elles) s’emploient après une préposition (avec moi, chez eux), après c’est (c’est lui), pour insister (Moi, je préfère…) et dans les comparaisons (plus grand que toi). Les pronoms possessifs remplacent un nom avec son possessif et s’accordent avec la chose possédée : mon livre → le mien, ta voiture → la tienne, leurs enfants → les leurs. Les pronoms démonstratifs (celui, celle, ceux, celles) remplacent un nom déjà cité ou désignent des personnes en général (ceux qui…) ; ils ne s’emploient jamais seuls : -ci / -là, une relative (celui qui, celle que) ou de (celui de mon frère).",
  examples:["Tu viens avec moi ?","Ce n’est pas ma clé, c’est la tienne.","Je préfère celle-ci.","Ceux qui le souhaitent peuvent partir."],
  mistakes:[
    {wrong:"Il vient avec je.", right:"Il vient avec moi.", why:"Après une préposition, le pronom tonique : moi."},
    {wrong:"Ce n’est pas ton livre, c’est le mon.", right:"Ce n’est pas ton livre, c’est le mien.", why:"Pronom possessif : le mien, la mienne, les miens, les miennes."},
    {wrong:"J’aime ces chaussures, mais je préfère celles.", right:"J’aime ces chaussures, mais je préfère celles-là.", why:"Celui, celle, ceux, celles ne s’emploient jamais seuls : -ci, -là, qui, que ou de."},
    {wrong:"C’est le dossier de Marie ? Non, c’est ce de Paul.", right:"C’est le dossier de Marie ? Non, c’est celui de Paul.", why:"Pour reprendre un nom masculin : celui de."}
  ],
  drill:{prompt:"Complète : Ta valise est bleue ; ___ est noire.", choices:["la mienne","le mien","ma","mienne"], answer:0}
});
B.grammarPlus=Object.assign(B.grammarPlus||{},{g36:{
  intro:"Ces pronoms évitent les répétitions, ce qui améliore nettement vos textes à l’écrit B (« ceux qui pensent que… », « la mienne », « celle-ci »). À l’oral, les pronoms toniques servent à insister et à comparer : « Moi, je pense que… », « Lui, il préfère… ».",
  rule:[
    "Pronoms toniques : moi, toi, lui, elle, nous, vous, eux, elles. Après une préposition (avec moi, chez eux, pour elle), après c’est / ce sont (c’est lui, ce sont eux), pour insister (Moi, je reste ; lui, il part), dans une comparaison (plus âgé que moi), dans un sujet double (Mon frère et moi, nous partons) et seuls (Qui veut du café ? — Moi !). Avec -même pour insister : moi-même, eux-mêmes (Je l’ai fait moi-même). Avec on, chacun, personne : soi (On est bien chez soi).",
    "Avec aussi / non plus (moi aussi, lui non plus). Pour une personne, après penser à, s’intéresser à, faire attention à (je pense à elle, je m’intéresse à eux) et après de (je me souviens de lui, j’ai besoin d’elle ; en s’emploie plutôt pour une chose). Pour la possession : être à (Ce sac est à moi).",
    "Pronoms possessifs : le / la / les + mien, tien, sien, nôtre, vôtre, leur ; ils s’accordent avec la chose possédée, pas avec le possesseur : mon sac → le mien ; ta voiture → la tienne ; sa voiture (à lui) → la sienne ; leurs enfants → les leurs. Le nôtre et le vôtre prennent un accent circonflexe (pas notre, votre).",
    "Avec à et de, l’article du possessif se contracte : Je pense à mon projet, et toi au tien ; il parle de ses enfants, et moi des miens.",
    "Pronoms démonstratifs : celui (masculin singulier), celle (féminin singulier), ceux (masculin pluriel), celles (féminin pluriel). Jamais seuls : + -ci / -là (celui-ci, celui-là), + qui / que / dont (ceux qui travaillent), + de (celle de ma voisine).",
    "Démonstratifs neutres : ceci, cela, ça (oral) pour une idée ou une chose non nommée : Cela me semble juste ; ça ne marche pas. Et ce dans c’est, ce sont, ce qui, ce que. À l’écrit soigné, ceci annonce ce qui suit et cela reprend ce qui précède : Retenez ceci : le dossier doit être complet."
  ],
  table:{head:["Personne","Tonique","Possessif (masc. / fém. / pluriel)"],rows:[
    ["je","moi","le mien / la mienne / les miens, les miennes"],
    ["tu","toi","le tien / la tienne / les tiens, les tiennes"],
    ["il, elle","lui, elle","le sien / la sienne / les siens, les siennes"],
    ["nous","nous","le nôtre / la nôtre / les nôtres"],
    ["vous","vous","le vôtre / la vôtre / les vôtres"],
    ["ils, elles","eux, elles","le leur / la leur / les leurs"]
  ]},
  tables:[
    {title:"Les pronoms démonstratifs", head:["Genre","Singulier","Pluriel","Exemple"], rows:[
      ["masculin","celui","ceux","Celui-ci est moins cher. Ceux qui veulent venir…"],
      ["féminin","celle","celles","Celle de ma sœur. Celles que j’ai vues…"],
      ["neutre","ce, ceci, cela (ça)","—","Cela me convient. Ça marche !"]
    ]}
  ],
  tips:[
    "À l’écrit B, celui-ci, celle-ci, ceux-ci reprennent le dernier nom cité : Le maire a rencontré les habitants ; ceux-ci ont exprimé leurs inquiétudes.",
    "Le leur / la leur au singulier, les leurs quand la chose possédée est au pluriel : leurs enfants → les leurs.",
    "Le nôtre (pronom, avec accent) ≠ notre (déterminant, sans accent) : notre maison → la nôtre.",
    "Ce sont eux, ce sont mes voisins : registre soigné ; à l’oral, c’est eux est courant. Mais toujours c’est nous, c’est vous."
  ],
  examples:[
    {fr:"Tu peux venir avec moi à la préfecture ?", en:"Can you come with me to the prefecture?", note:"Préposition + pronom tonique."},
    {fr:"Moi, je préfère travailler le matin.", en:"Personally, I prefer working in the morning.", note:"Pronom tonique pour insister."},
    {fr:"Mon téléphone ne marche plus ; je peux utiliser le tien ?", en:"My phone has stopped working; can I use yours?"},
    {fr:"Nos voisins ont un jardin, mais le nôtre est plus grand.", en:"Our neighbours have a garden, but ours is bigger."},
    {fr:"Il y a deux formulaires : celui-ci est pour vous, celui-là pour votre conjoint.", en:"There are two forms: this one is for you, that one is for your spouse."},
    {fr:"Ceux qui ont réservé peuvent entrer.", en:"Those who have booked can go in."},
    {fr:"Ma voiture est en panne ; je prends celle de mon frère.", en:"My car has broken down; I’m taking my brother’s."},
    {fr:"Cela ne me dérange pas du tout.", en:"That doesn’t bother me at all."}
  ],
  summary:[
    "Après une préposition, après c’est, pour insister ou comparer : moi, toi, lui, elle, nous, vous, eux, elles.",
    "Le mien, la tienne, les leurs : accord avec la chose possédée.",
    "Celui, celle, ceux, celles + -ci / -là, qui / que, de.",
    "Le nôtre, le vôtre (accent) ≠ notre, votre."
  ],
  practice:[
    {type:"mcq", lvl:1, prompt:"Ce cadeau est pour ___.", choices:["toi","tu","te"], answer:0, explain:"Après une préposition, le pronom tonique : toi."},
    {type:"mcq", lvl:1, prompt:"Ma chambre est petite, mais ___ est grande.", choices:["la tienne","le tien","ta"], answer:0, explain:"Chambre est féminin : la tienne."},
    {type:"fill", lvl:1, prompt:"Je vais au cinéma avec ___.", answers:["lui"], hint:"il", explain:"Après une préposition : lui."},
    {type:"fill", lvl:1, prompt:"Voici ton manteau ; où est ___ ?", answers:["le mien"], hint:"je, manteau", explain:"Manteau est masculin : le mien."},
    {type:"transform", lvl:1, instruction:"Remplacez « ma valise » par un pronom possessif.", prompt:"Ce n’est pas ma valise.", answers:["Ce n’est pas la mienne."], explain:"Valise est féminin : la mienne."},
    {type:"order", lvl:1, words:["pense","Je","elle","à","souvent"], answers:["Je pense souvent à elle.","Je pense à elle souvent."], explain:"Penser à + personne : à elle (pas lui)."},
    {type:"fix", lvl:2, prompt:"Je préfère celle robe-là.", answers:["Je préfère cette robe-là.","Je préfère celle-là."], explain:"Devant un nom, le déterminant cette ; sans nom, le pronom celle-là."},
    {type:"fix", lvl:2, prompt:"C’est leur voiture ? Oui, c’est la leurs.", answers:["C’est leur voiture ? Oui, c’est la leur."], explain:"Une seule voiture : la leur, sans s."},
    {type:"transform", lvl:2, instruction:"Évitez la répétition de « les enfants » avec un pronom démonstratif.", prompt:"Mes enfants et les enfants de mes voisins jouent ensemble.", answers:["Mes enfants et ceux de mes voisins jouent ensemble."], explain:"Les enfants (masculin pluriel) → ceux de."},
    {type:"order", lvl:2, words:["qui","Ceux","ont","fini","partir","peuvent"], answers:["Ceux qui ont fini peuvent partir."], explain:"Ceux + qui (sujet)."},
    {type:"mcq", lvl:3, prompt:"J’ai comparé les deux offres : ___ de votre agence est plus intéressante.", choices:["celle","celui","cela"], answer:0, explain:"Offre est féminin : celle de."},
    {type:"fill", lvl:3, prompt:"Nous avons envoyé notre dossier ; avez-vous envoyé ___ ?", answers:["le vôtre"], hint:"vous, dossier", explain:"Pronom possessif, avec accent : le vôtre."}
  ]
}});
B.grammarMore=Object.assign(B.grammarMore||{},{g36:[
  {type:"mcq", lvl:1, prompt:"C’est ___ qui a appelé ?", choices:["lui","il","le"], answer:0, explain:"Après c’est : pronom tonique."},
  {type:"mcq", lvl:1, prompt:"Il est plus âgé que ___.", choices:["moi","je","me"], answer:0, explain:"Dans une comparaison : pronom tonique."},
  {type:"mcq", lvl:1, prompt:"Ton vélo est rouge ; ___ est vert.", choices:["le mien","la mienne","mon"], answer:0, explain:"Vélo est masculin : le mien."},
  {type:"mcq", lvl:1, prompt:"Je n’aime pas ce pull ; je préfère ___.", choices:["celui-là","celle-là","celui"], answer:0, explain:"Pull est masculin : celui-là (celui ne s’emploie jamais seul)."},
  {type:"fill", lvl:1, prompt:"Elles travaillent avec ___.", answers:["eux"], hint:"ils", explain:"Après une préposition, ils → eux."},
  {type:"fill", lvl:1, prompt:"Qui veut du café ? — ___ !", answers:["Moi"], hint:"je", explain:"Pronom employé seul : moi."},
  {type:"fill", lvl:1, prompt:"J’ai mes billets ; tu as ___ ?", answers:["les tiens"], hint:"tu, billets", explain:"Billets est masculin pluriel : les tiens."},
  {type:"fix", lvl:1, prompt:"Tu viens chez je ce soir ?", answers:["Tu viens chez moi ce soir ?"], explain:"Après chez : pronom tonique moi."},
  {type:"fix", lvl:1, prompt:"Ce sac est le sienne.", answers:["Ce sac est le sien."], explain:"Sac est masculin : le sien."},
  {type:"transform", lvl:1, instruction:"Remplacez « ma voiture » par un pronom possessif.", prompt:"Ta voiture est plus rapide que ma voiture.", answers:["Ta voiture est plus rapide que la mienne."], explain:"Voiture est féminin : la mienne."},
  {type:"order", lvl:1, words:["aussi","Moi","fatigué","suis","je"], answers:["Moi aussi, je suis fatigué.","Moi, je suis aussi fatigué.","Moi, je suis fatigué aussi."], explain:"Pronom tonique pour insister, avec aussi."},
  {type:"mcq", lvl:2, prompt:"Les clés sur la table, ce sont ___ ?", choices:["les vôtres","les votres","vos"], answer:0, explain:"Pronom possessif, avec accent : les vôtres."},
  {type:"mcq", lvl:2, prompt:"Parmi ces deux appartements, ___ du deuxième étage est plus lumineux.", choices:["celui","celle","ce"], answer:0, explain:"Appartement est masculin : celui de."},
  {type:"mcq", lvl:2, prompt:"___ me semble une bonne idée.", choices:["Cela","Celui","Celle"], answer:0, explain:"Pour une idée : démonstratif neutre cela."},
  {type:"fill", lvl:2, prompt:"Mes nouveaux collègues ? Je m’intéresse beaucoup à ___.", answers:["eux"], hint:"ils", explain:"S’intéresser à + personne : à eux (pas leur)."},
  {type:"fill", lvl:2, prompt:"Notre appartement est petit ; ___ est grand.", answers:["le leur"], hint:"ils, appartement", explain:"Un seul appartement : le leur, sans s."},
  {type:"fill", lvl:2, prompt:"Ce sont les clés de Marc ou ___ de Julie ?", answers:["celles"], explain:"Clés est féminin pluriel : celles de."},
  {type:"fix", lvl:2, prompt:"Je leur pense souvent.", answers:["Je pense souvent à eux.","Je pense souvent à elles.","Je pense à eux souvent.","Je pense à elles souvent."], explain:"Penser à + personne : à eux / à elles, jamais leur."},
  {type:"fix", lvl:2, prompt:"Ce n’est pas notre faute, c’est votre.", answers:["Ce n’est pas notre faute, c’est la vôtre.","Ce n’est pas notre faute, c’est votre faute."], explain:"Votre est un déterminant (devant un nom) ; le pronom est la vôtre, avec l’article et l’accent."},
  {type:"transform", lvl:2, instruction:"Évitez la répétition avec « celui de ».", prompt:"Mon dossier est complet, mais le dossier de Paul ne l’est pas.", answers:["Mon dossier est complet, mais celui de Paul ne l’est pas."], explain:"Le dossier (masculin) → celui de."},
  {type:"transform", lvl:2, instruction:"Insistez sur le sujet avec un pronom tonique.", prompt:"Je ne suis pas d’accord.", answers:["Moi, je ne suis pas d’accord.","Je ne suis pas d’accord, moi."], explain:"Pronom tonique en tête (ou à la fin), en plus du pronom sujet."},
  {type:"order", lvl:2, words:["la","que","Celle","préfère","je","est","bleue"], answers:["Celle que je préfère est la bleue.","La bleue est celle que je préfère."], explain:"Celle + que (COD)."},
  {type:"mcq", lvl:3, prompt:"Le directeur a reçu les syndicats ; ___ ont demandé une hausse des salaires.", choices:["ceux-ci","celles-ci","ceux"], answer:0, explain:"Ceux-ci reprend le dernier nom cité (les syndicats, masculin pluriel)."},
  {type:"fill", lvl:3, prompt:"Nous parlons de nos projets, et eux parlent ___ leurs.", answers:["des"], explain:"Parler de + les leurs → des leurs."},
  {type:"fill", lvl:3, prompt:"J’ai pensé à mon avenir ; as-tu pensé ___ tien ?", answers:["au"], explain:"Penser à + le tien → au tien."},
  {type:"fix", lvl:3, prompt:"Ceux que veulent participer doivent s’inscrire.", answers:["Ceux qui veulent participer doivent s’inscrire."], explain:"Ceux est le sujet de veulent : ceux qui."},
  {type:"transform", lvl:3, instruction:"Remplacez « ces informations » par un pronom démonstratif neutre.", prompt:"Ces informations m’inquiètent.", answers:["Cela m’inquiète.","Ça m’inquiète."], explain:"Pronom neutre cela (oral : ça), verbe au singulier."},
  {type:"order", lvl:3, words:["de","celle","C’est","voisine","ma"], answers:["C’est celle de ma voisine."], explain:"Celle + de + nom."}
]});
})();
