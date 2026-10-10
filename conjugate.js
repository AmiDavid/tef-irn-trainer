/*
 * TEF conjugation engine — French verb conjugation (Bescherelle-standard, traditional spelling).
 * Works as a plain <script> (exposes window.TEF_CONJ) and from Node (module.exports / globalThis.TEF_CONJ).
 *
 *   TEF_CONJ.conjugate('se lever') → { infinitive, pronominal, group, aux, participle, presentParticiple,
 *                                      impersonal, tenses:{present, passeCompose, imparfait, plusQueParfait,
 *                                      futur, conditionnel, conditionnelPasse, subjonctif, imperatif}, note? }
 */
(function (root) {
  'use strict';

  const PERSONS = ['je', 'tu', 'il', 'elle', 'nous', 'vous', 'ils'];
  const TENSES = ['present', 'passeCompose', 'imparfait', 'plusQueParfait', 'futur',
    'conditionnel', 'conditionnelPasse', 'subjonctif', 'imperatif'];
  const REFLEXIVE = ['me', 'te', 'se', 'se', 'nous', 'vous', 'se'];
  // row (7) → grammatical person index (6)
  const PIDX = [0, 1, 2, 2, 3, 4, 5];
  const APOS = '’';

  const END_IMP = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'];
  const END_FUT = ['ai', 'as', 'a', 'ons', 'ez', 'ont'];

  const VOWELS = 'aeiouyàâäéèêëîïôöùûüœæ';

  // Verbs beginning with h aspiré (no elision: « je hais », « je hurle »). Everything else with h is muet.
  const H_ASPIRE = new Set(('haïr hurler heurter hacher hanter harceler hausser hisser hâter haleter ' +
    'handicaper harponner hasarder hérisser hocher honnir huer hennir héler hiérarchiser hululer ' +
    'hâler hoqueter houspiller hennir hachurer harasser harnacher hérisser hiérarchiser ' +
    'houer hucher humer hurler hutter').split(/\s+/));

  // Auxiliary être (intransitive default). Pronominal verbs always take être.
  const ETRE = new Set(('aller venir devenir revenir redevenir intervenir parvenir survenir provenir ' +
    'arriver partir repartir sortir ressortir entrer rentrer monter remonter descendre redescendre ' +
    'tomber retomber rester retourner naître renaître mourir décéder apparaître advenir').split(/\s+/));

  const TRANSITIVE_NOTE = {
    monter: 'Auxiliaire être (intransitif : « elle est montée ») ; avoir quand le verbe a un COD (« elle a monté les valises »).',
    remonter: 'Auxiliaire être (intransitif) ; avoir avec un COD (« il a remonté la pente »).',
    descendre: 'Auxiliaire être (intransitif : « il est descendu ») ; avoir avec un COD (« il a descendu l’escalier »).',
    redescendre: 'Auxiliaire être (intransitif) ; avoir avec un COD.',
    sortir: 'Auxiliaire être (intransitif : « elle est sortie ») ; avoir avec un COD (« elle a sorti le chien »).',
    ressortir: 'Auxiliaire être (intransitif) ; avoir avec un COD (« il a ressorti ses notes »).',
    rentrer: 'Auxiliaire être (intransitif : « nous sommes rentrés ») ; avoir avec un COD (« nous avons rentré la voiture »).',
    retourner: 'Auxiliaire être (intransitif : « ils sont retournés ») ; avoir avec un COD (« il a retourné la crêpe »).',
    passer: 'Auxiliaire avoir par défaut (« j’ai passé un examen ») ; être au sens intransitif de déplacement (« je suis passé chez toi »).'
  };

  // ---------------------------------------------------------------------------
  // Irregular tables.
  // pres: 6 bare forms (je tu il nous vous ils); fut: futur/conditionnel stem; pp: past participle.
  // Optional: imp (imparfait stem; default = nous-form minus "ons"), subj ([stem je/tu/il/ils, stem nous/vous]
  // or 6 full forms), ppr (present participle), imper (3 forms or ''), group, impersonal.
  // ---------------------------------------------------------------------------
  const T = {
    'être': { pres: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'], imp: 'ét', fut: 'ser',
      subj: ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient'], pp: 'été', ppr: 'étant',
      imper: ['sois', 'soyons', 'soyez'] },
    'avoir': { pres: ['ai', 'as', 'a', 'avons', 'avez', 'ont'], fut: 'aur',
      subj: ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient'], pp: 'eu', ppr: 'ayant',
      imper: ['aie', 'ayons', 'ayez'] },
    'aller': { pres: ['vais', 'vas', 'va', 'allons', 'allez', 'vont'], fut: 'ir', subj: ['aill', 'all'],
      pp: 'allé', imper: ['va', 'allons', 'allez'] },
    'faire': { pres: ['fais', 'fais', 'fait', 'faisons', 'faites', 'font'], fut: 'fer', subj: ['fass', 'fass'], pp: 'fait' },
    'dire': { pres: ['dis', 'dis', 'dit', 'disons', 'dites', 'disent'], fut: 'dir', pp: 'dit' },
    'pouvoir': { pres: ['peux', 'peux', 'peut', 'pouvons', 'pouvez', 'peuvent'], fut: 'pourr', subj: ['puiss', 'puiss'],
      pp: 'pu', imper: ['', '', ''] },
    'vouloir': { pres: ['veux', 'veux', 'veut', 'voulons', 'voulez', 'veulent'], fut: 'voudr', subj: ['veuill', 'voul'],
      pp: 'voulu', imper: ['veuille', 'veuillons', 'veuillez'] },
    'devoir': { pres: ['dois', 'dois', 'doit', 'devons', 'devez', 'doivent'], fut: 'devr', pp: 'dû' },
    'savoir': { pres: ['sais', 'sais', 'sait', 'savons', 'savez', 'savent'], fut: 'saur', subj: ['sach', 'sach'],
      pp: 'su', ppr: 'sachant', imper: ['sache', 'sachons', 'sachez'] },
    'voir': { pres: ['vois', 'vois', 'voit', 'voyons', 'voyez', 'voient'], fut: 'verr', pp: 'vu' },
    'venir': { pres: ['viens', 'viens', 'vient', 'venons', 'venez', 'viennent'], fut: 'viendr', pp: 'venu' },
    'tenir': { pres: ['tiens', 'tiens', 'tient', 'tenons', 'tenez', 'tiennent'], fut: 'tiendr', pp: 'tenu' },
    'prendre': { pres: ['prends', 'prends', 'prend', 'prenons', 'prenez', 'prennent'], fut: 'prendr', pp: 'pris' },
    'mettre': { pres: ['mets', 'mets', 'met', 'mettons', 'mettez', 'mettent'], fut: 'mettr', pp: 'mis' },
    'lire': { pres: ['lis', 'lis', 'lit', 'lisons', 'lisez', 'lisent'], fut: 'lir', pp: 'lu' },
    'naître': { pres: ['nais', 'nais', 'naît', 'naissons', 'naissez', 'naissent'], fut: 'naîtr', pp: 'né' },
    'mourir': { pres: ['meurs', 'meurs', 'meurt', 'mourons', 'mourez', 'meurent'], fut: 'mourr', pp: 'mort' },
    'vivre': { pres: ['vis', 'vis', 'vit', 'vivons', 'vivez', 'vivent'], fut: 'vivr', pp: 'vécu' },
    'suivre': { pres: ['suis', 'suis', 'suit', 'suivons', 'suivez', 'suivent'], fut: 'suivr', pp: 'suivi' },
    'boire': { pres: ['bois', 'bois', 'boit', 'buvons', 'buvez', 'boivent'], fut: 'boir', pp: 'bu' },
    'croire': { pres: ['crois', 'crois', 'croit', 'croyons', 'croyez', 'croient'], fut: 'croir', pp: 'cru' },
    'courir': { pres: ['cours', 'cours', 'court', 'courons', 'courez', 'courent'], fut: 'courr', pp: 'couru' },
    'rire': { pres: ['ris', 'ris', 'rit', 'rions', 'riez', 'rient'], fut: 'rir', pp: 'ri' },
    'plaire': { pres: ['plais', 'plais', 'plaît', 'plaisons', 'plaisez', 'plaisent'], fut: 'plair', pp: 'plu' },
    'asseoir': { pres: ['assieds', 'assieds', 'assied', 'asseyons', 'asseyez', 'asseyent'], fut: 'assiér', pp: 'assis' },
    'valoir': { pres: ['vaux', 'vaux', 'vaut', 'valons', 'valez', 'valent'], fut: 'vaudr', subj: ['vaill', 'val'], pp: 'valu' },
    'falloir': { impersonal: true, pres: ['', '', 'faut', '', '', ''], imp: 'fall', fut: 'faudr',
      subj: ['', '', 'faille', '', '', ''], pp: 'fallu', ppr: '' },
    'pleuvoir': { impersonal: true, pres: ['', '', 'pleut', '', '', ''], imp: 'pleuv', fut: 'pleuvr',
      subj: ['', '', 'pleuve', '', '', ''], pp: 'plu', ppr: 'pleuvant' },
    'résoudre': { pres: ['résous', 'résous', 'résout', 'résolvons', 'résolvez', 'résolvent'], fut: 'résoudr', pp: 'résolu' },
    'coudre': { pres: ['couds', 'couds', 'coud', 'cousons', 'cousez', 'cousent'], fut: 'coudr', pp: 'cousu' },
    'fuir': { pres: ['fuis', 'fuis', 'fuit', 'fuyons', 'fuyez', 'fuient'], fut: 'fuir', pp: 'fui' },
    'haïr': { group: 2, pres: ['hais', 'hais', 'hait', 'haïssons', 'haïssez', 'haïssent'], fut: 'haïr', pp: 'haï' },
    'vaincre': { pres: ['vaincs', 'vaincs', 'vainc', 'vainquons', 'vainquez', 'vainquent'], fut: 'vaincr', pp: 'vaincu' },
    'maudire': { pres: ['maudis', 'maudis', 'maudit', 'maudissons', 'maudissez', 'maudissent'], fut: 'maudir', pp: 'maudit' },
    // 1st-group verbs with an irregular futur (rest generated by the 1st-group rules)
    'envoyer': { firstGroup: true, fut: 'enverr' },
    'renvoyer': { firstGroup: true, fut: 'renverr' }
  };

  // Productive models keyed by ending; the part before the ending is a prefix copied onto every form.
  const MODELS = [
    ['prendre', T['prendre']],
    ['mettre', T['mettre']],
    ['venir', T['venir']],
    ['tenir', T['tenir']],
    ['faire', T['faire']],
    ['crire', { pres: ['cris', 'cris', 'crit', 'crivons', 'crivez', 'crivent'], fut: 'crir', pp: 'crit' }],
    ['cevoir', { pres: ['çois', 'çois', 'çoit', 'cevons', 'cevez', 'çoivent'], fut: 'cevr', pp: 'çu' }],
    ['aître', { pres: ['ais', 'ais', 'aît', 'aissons', 'aissez', 'aissent'], fut: 'aîtr', pp: 'u' }],
    ['uire', { pres: ['uis', 'uis', 'uit', 'uisons', 'uisez', 'uisent'], fut: 'uir', pp: 'uit' }],
    ['indre', { pres: ['ins', 'ins', 'int', 'ignons', 'ignez', 'ignent'], fut: 'indr', pp: 'int' }],
    ['vrir', { pres: ['vre', 'vres', 'vre', 'vrons', 'vrez', 'vrent'], fut: 'vrir', pp: 'vert' }],
    ['frir', { pres: ['fre', 'fres', 'fre', 'frons', 'frez', 'frent'], fut: 'frir', pp: 'fert' }],
    ['rompre', { pres: ['romps', 'romps', 'rompt', 'rompons', 'rompez', 'rompent'], fut: 'rompr', pp: 'rompu' }],
    ['quérir', { pres: ['quiers', 'quiers', 'quiert', 'quérons', 'quérez', 'quièrent'], fut: 'querr', pp: 'quis' }],
    ['cueillir', { pres: ['cueille', 'cueilles', 'cueille', 'cueillons', 'cueillez', 'cueillent'], fut: 'cueiller', pp: 'cueilli' }],
    ['battre', { pres: ['bats', 'bats', 'bat', 'battons', 'battez', 'battent'], fut: 'battr', pp: 'battu' }]
  ];
  // -tir/-mir/-vir verbs of the partir type (pars, part, partons).
  function partirType(base, cons) {
    return { pres: [base + 's', base + 's', base + 't', base + cons + 'ons', base + cons + 'ez', base + cons + 'ent'],
      fut: base + cons + 'ir', pp: base + cons + 'i' };
  }
  T.partir = partirType('par', 't');
  T.sortir = partirType('sor', 't');
  T.dormir = partirType('dor', 'm');
  T.servir = partirType('ser', 'v');
  T.sentir = partirType('sen', 't');
  T.mentir = partirType('men', 't');
  ['écrire', 'connaître', 'conduire', 'construire', 'craindre', 'peindre', 'ouvrir', 'offrir', 'recevoir',
    'interrompre', 'acquérir', 'cueillir', 'battre'].forEach(function (v) { T[v] = fromModel(v); });

  // Explicit derived verbs: [base, prefix, overrides]
  const D = {
    'revoir': ['voir', 're', { fut: 'reverr' }],
    'entrevoir': ['voir', 'entre', { fut: 'entreverr' }],
    'prévoir': ['voir', 'pré', { fut: 'prévoir' }],
    'relire': ['lire', 're'], 'élire': ['lire', 'é'],
    'contredire': ['dire', 'contre', { vous: 'contredisez' }],
    'interdire': ['dire', 'inter', { vous: 'interdisez' }],
    'prédire': ['dire', 'pré', { vous: 'prédisez' }],
    'médire': ['dire', 'mé', { vous: 'médisez' }],
    'dédire': ['dire', 'dé', { vous: 'dédisez' }],
    'redire': ['dire', 're'],
    'sourire': ['rire', 'sou'],
    'déplaire': ['plaire', 'dé'], 'complaire': ['plaire', 'com'],
    'revivre': ['vivre', 're'], 'survivre': ['vivre', 'sur'],
    'poursuivre': ['suivre', 'pour'], 'ensuivre': ['suivre', 'en'],
    'parcourir': ['courir', 'par'], 'accourir': ['courir', 'ac'], 'secourir': ['courir', 'se'],
    'recourir': ['courir', 're'], 'concourir': ['courir', 'con'], 'discourir': ['courir', 'dis'],
    'repartir': ['partir', 're'], 'ressortir': ['sortir', 'res'],
    'endormir': ['dormir', 'en'], 'rendormir': ['dormir', 'ren'],
    'desservir': ['servir', 'des'], 'resservir': ['servir', 're'],
    'ressentir': ['sentir', 'res'], 'consentir': ['sentir', 'con'], 'pressentir': ['sentir', 'pres'],
    'démentir': ['mentir', 'dé'],
    'enfuir': ['fuir', 'en'],
    'revaloir': ['valoir', 're'], 'équivaloir': ['valoir', 'équi'],
    'renaître': ['naître', 're'],
    'rasseoir': ['asseoir', 'r'],
    'accroire': ['croire', 'ac'],
    'combattre': ['battre', 'com'], 'débattre': ['battre', 'dé'], 'abattre': ['battre', 'a'],
    'nuire': ['conduire', '', { pres: ['nuis', 'nuis', 'nuit', 'nuisons', 'nuisez', 'nuisent'], fut: 'nuir', pp: 'nui' }],
    'découdre': ['coudre', 'dé'], 'recoudre': ['coudre', 're'],
    'convaincre': ['vaincre', 'con']
  };

  function fromModel(inf) {
    for (let i = 0; i < MODELS.length; i++) {
      const end = MODELS[i][0];
      if (inf.length >= end.length && inf.slice(-end.length) === end) {
        return prefixSpec(MODELS[i][1], inf.slice(0, inf.length - end.length));
      }
    }
    return null;
  }

  function prefixSpec(spec, p) {
    const add = function (s) { return s ? p + s : s; };
    const out = {};
    Object.keys(spec).forEach(function (k) {
      const v = spec[k];
      if (typeof v === 'string' && ['fut', 'pp', 'imp', 'ppr'].indexOf(k) >= 0) out[k] = add(v);
      else if (Array.isArray(v)) out[k] = v.map(add);
      else out[k] = v;
    });
    return out;
  }

  // ---------------------------------------------------------------------------
  // 1st group (‑er) with spelling changes
  // ---------------------------------------------------------------------------
  // -eler/-eter verbs taking è (no doubling). All other -eler/-eter double (traditional spelling).
  const E_GRAVE_ELET = new Set(('acheter racheter geler dégeler congeler surgeler peler modeler remodeler ' +
    'marteler harceler ciseler démanteler écarteler crocheter fureter haleter celer déceler receler ' +
    'bégueter corseter').split(/\s+/));
  const CONS = 'bcdfghjklmnpqrstvwxzç';

  function firstGroup(inf, extra) {
    const s0 = inf.slice(0, -2);
    let s1 = s0;      // stem before a mute e (je/tu/il/ils present & subj, imperative tu)
    let fut = inf;    // futur/conditionnel stem
    let m;
    if (/[ou]y$/.test(s0) || /ay$/.test(s0)) {
      s1 = s0.slice(0, -1) + 'i';           // nettoie, essuie, paie (paie preferred over paye)
      fut = s1 + 'er';
    } else if ((m = s0.match(/([eé])(ch|gn|gu|qu|[bcdfgjkmnpqrstvlz][lr]?)$/)) && !(m[2].length === 2 && m[2][0] === m[2][1])) {
      const pos = s0.length - m[0].length;
      if (pos > 0) {
        if (m[1] === 'é') {
          s1 = s0.slice(0, pos) + 'è' + m[2];   // préfère; futur keeps é (préférerai, traditional)
        } else if ((m[2] === 'l' || m[2] === 't') && !E_GRAVE_ELET.has(inf)) {
          s1 = s0 + m[2];                      // appelle, jette
          fut = s1 + 'er';
        } else {
          s1 = s0.slice(0, pos) + 'è' + m[2];  // lève, achète
          fut = s1 + 'er';
        }
      }
    }
    const spec = {
      group: 1, soft: true,
      pres: [s1 + 'e', s1 + 'es', s1 + 'e', soften(s0, 'ons'), s0 + 'ez', s1 + 'ent'],
      imp: s0, fut: fut, subj: [s1, s0], pp: s0 + 'é', ppr: soften(s0, 'ant'),
      imper: [s1 + 'e', soften(s0, 'ons'), s0 + 'ez']
    };
    return Object.assign(spec, extra || {});
  }

  function soften(stem, ending) {
    if (/^[aoâ]/.test(ending)) {
      if (/c$/.test(stem)) return stem.slice(0, -1) + 'ç' + ending;
      if (/g$/.test(stem)) return stem + 'e' + ending;
    }
    return stem + ending;
  }

  function secondGroup(inf) {
    const s = inf.slice(0, -2);
    return { group: 2, pres: [s + 'is', s + 'is', s + 'it', s + 'issons', s + 'issez', s + 'issent'],
      fut: inf, pp: s + 'i' };
  }

  function regularRe(inf) {
    const s = inf.slice(0, -2);
    return { pres: [s + 's', s + 's', /d$/.test(s) ? s : s + 't', s + 'ons', s + 'ez', s + 'ent'],
      fut: s + 'r', pp: s + 'u' };
  }

  // ---------------------------------------------------------------------------
  // Resolve an infinitive (no pronoun) to a full spec. Returns {spec, irregular} or null.
  // ---------------------------------------------------------------------------
  function resolve(inf) {
    let spec = null, irregular = true;
    if (Object.prototype.hasOwnProperty.call(T, inf)) {
      spec = T[inf].firstGroup ? firstGroup(inf, { fut: T[inf].fut }) : T[inf];
    } else if (Object.prototype.hasOwnProperty.call(D, inf)) {
      const d = D[inf], ov = d[2] || {};
      spec = Object.assign(prefixSpec(T[d[0]], d[1]), ov);
      if (ov.vous) {
        spec.pres = spec.pres.slice(); spec.pres[4] = ov.vous;
        spec.imper = [spec.pres[1], spec.pres[3], ov.vous];
        delete spec.vous;
      }
    } else if (/(?:ir|re|oir)$/.test(inf) && (spec = fromModel(inf))) {
      // productive irregular model
    } else if (/er$/.test(inf)) {
      spec = firstGroup(inf); irregular = false;
    } else if (/oir$/.test(inf)) {
      return null;
    } else if (/ir$/.test(inf)) {
      spec = secondGroup(inf); irregular = false;
    } else if (/re$/.test(inf)) {
      spec = regularRe(inf); irregular = false;
    } else {
      return null;
    }
    return { spec: spec, irregular: irregular };
  }

  function fill(spec) {
    const s = Object.assign({}, spec);
    if (!s.group) s.group = 3;
    if (s.imp === undefined) s.imp = s.pres[3].replace(/ons$/, '');
    if (!s.subj) s.subj = [s.pres[5].replace(/ent$/, ''), s.imp];
    if (s.ppr === undefined) s.ppr = attach(s.imp, 'ant', s.soft);
    if (!s.imper) {
      const tu = /es$/.test(s.pres[1]) ? s.pres[1].slice(0, -1) : s.pres[1];
      s.imper = [tu, s.pres[3], s.pres[4]];
    }
    return s;
  }

  function attach(stem, ending, soft) {
    return soft ? soften(stem, ending) : stem + ending;
  }

  // Bare (pronoun-less) simple-tense forms, 6 persons each.
  function simpleForms(s) {
    const subj = s.subj.length === 6 ? s.subj.slice() : [s.subj[0] + 'e', s.subj[0] + 'es', s.subj[0] + 'e',
      s.subj[1] + 'ions', s.subj[1] + 'iez', s.subj[0] + 'ent'];
    return {
      present: s.pres.slice(),
      imparfait: END_IMP.map(function (e) { return attach(s.imp, e, s.soft); }),
      futur: END_FUT.map(function (e) { return s.fut + e; }),
      conditionnel: END_IMP.map(function (e) { return s.fut + e; }),
      subjonctif: subj
    };
  }

  const AUX = {};
  function auxForms(name) {
    if (!AUX[name]) AUX[name] = simpleForms(fill(T[name]));
    return AUX[name];
  }

  function fem(pp) { return pp === 'dû' ? 'due' : pp + 'e'; }
  function plur(pp) { return /[sx]$/.test(pp) ? pp : (pp === 'dû' ? 'dus' : pp + 's'); }

  // ---------------------------------------------------------------------------
  function normalize(input) {
    if (typeof input !== 'string') return null;
    let s = input.trim().toLowerCase().replace(/['`´ʼ]/g, APOS).replace(/\s+/g, ' ');
    let pronominal = false;
    let m = s.match(/^(?:se |s’)(.+)$/);
    if (m) { pronominal = true; s = m[1].trim(); }
    if (!/^[a-zàâäçéèêëîïôöùûüœ]{3,}$/.test(s)) return null;
    return { inf: s, pronominal: pronominal };
  }

  function conjugate(input) {
    const n = normalize(input);
    if (!n) return null;
    const inf = n.inf, pronominal = n.pronominal;
    const r = resolve(inf);
    if (!r) return null;
    const s = fill(r.spec);
    const impersonal = !!s.impersonal;
    if (impersonal && pronominal) return null;
    const hAsp = H_ASPIRE.has(inf);

    function startsVowel(w) {
      if (!w) return false;
      const c = w[0];
      if (VOWELS.indexOf(c) >= 0) return true;
      return c === 'h' && !hAsp;
    }
    function join(word, next) {
      if ((word === 'je' || word === 'me' || word === 'te' || word === 'se' || word === 'que') && startsVowel(next)) {
        return word.slice(0, -1) + APOS + next;
      }
      return word + ' ' + next;
    }
    function row(r, form) {
      if (!form) return '';
      if (impersonal && r !== 2) return '';
      const body = pronominal ? join(REFLEXIVE[r], form) : form;
      return join(PERSONS[r], body);
    }

    const aux = (pronominal || ETRE.has(inf)) ? 'être' : 'avoir';
    const simple = simpleForms(s);
    const auxF = auxForms(aux);
    function agreed(r) {
      if (aux !== 'être') return s.pp;
      if (r === 3) return fem(s.pp);
      if (r >= 4) return plur(s.pp);
      return s.pp;
    }
    function simpleRows(forms) { return PIDX.map(function (p, r) { return row(r, forms[p]); }); }
    function compoundRows(auxTense) {
      return PIDX.map(function (p, r) { return row(r, auxF[auxTense][p] + ' ' + agreed(r)); });
    }

    const tenses = {
      present: simpleRows(simple.present),
      passeCompose: compoundRows('present'),
      imparfait: simpleRows(simple.imparfait),
      plusQueParfait: compoundRows('imparfait'),
      futur: simpleRows(simple.futur),
      conditionnel: simpleRows(simple.conditionnel),
      conditionnelPasse: compoundRows('conditionnel'),
      subjonctif: simpleRows(simple.subjonctif).map(function (x) { return x ? join('que', x) : ''; }),
      imperatif: impersonal ? ['', '', ''] : s.imper.map(function (f, i) {
        if (!f) return '';
        return pronominal ? f + '-' + ['toi', 'nous', 'vous'][i] : f;
      })
    };

    const result = {
      infinitive: pronominal ? join('se', inf) : inf,
      pronominal: pronominal,
      group: s.group,
      aux: aux,
      participle: s.pp,
      presentParticiple: s.ppr,
      impersonal: impersonal,
      tenses: tenses
    };
    if (!pronominal && TRANSITIVE_NOTE[inf]) result.note = TRANSITIVE_NOTE[inf];
    return result;
  }

  function isKnownIrregular(input) {
    const n = normalize(input);
    if (!n) return false;
    const r = resolve(n.inf);
    return !!(r && r.irregular);
  }

  function listIrregulars() {
    return Object.keys(T).concat(Object.keys(D)).sort(function (a, b) { return a.localeCompare(b, 'fr'); });
  }

  const API = { conjugate: conjugate, isKnownIrregular: isKnownIrregular, listIrregulars: listIrregulars,
    TENSES: TENSES, PERSONS: PERSONS };
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  root.TEF_CONJ = API;
})(typeof window !== 'undefined' ? window : globalThis);
