'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const mod = require('../errcount.js');
const E = (mod && typeof mod.count === 'function') ? mod : (mod && mod.default && mod.default.count) ? mod.default : globalThis.TEF_ERRCOUNT;

test('two separate errors are counted as two', () => {
  assert.equal(E.count("J'aime beaucoup du fromage de chèvre, surtout quand il est fait dans une ferme local.",
    ['J’aime beaucoup le fromage de chèvre, surtout quand il est fait dans une ferme locale.']), 2);
  assert.equal(E.count('Il a un nouvelle travail et une grand maison.', ['Il a un nouveau travail et une grande maison.']), 2);
});
test('one error stays one: replaced words, moved words, swapped pronouns', () => {
  assert.equal(E.count('La livraisation est gratuite.', ['La livraison est gratuite.']), 1);
  assert.equal(E.count('Le fermement du magasin est à 20 heures.', ['La fermeture du magasin est à 20 heures.']), 1);
  assert.equal(E.count('Il a décidé de ne travailler pas le dimanche.', ['Il a décidé de ne pas travailler le dimanche.']), 1);
  assert.equal(E.count('Le pharmacien demande ma carte Vitale : je lui la donne.', ['Le pharmacien demande ma carte Vitale : je la lui donne.']), 1);
  assert.equal(E.count('C’est l’association que je travaille pour.', ['C’est l’association pour laquelle je travaille.']), 1);
});
test('ignores case, commas, apostrophe style and final punctuation; accents count', () => {
  assert.equal(E.count("j'ai fini, merci", ['J’ai fini merci.']), 0);
  assert.equal(E.count('Il est alle à la mairie.', ['Il est allé à la mairie.']), 1);
});
test('takes the closest accepted answer, and a lesson’s own count wins', () => {
  assert.equal(E.count('Ils ont arrivé.', ['Elles sont arrivées.', 'Ils sont arrivés.']), 1);
  assert.equal(E.count('Ma sœur ? J’y pense souvent.', ['Ma sœur ? Je pense souvent à elle.'], 1), 1);
});
test('instruction states the number', () => {
  assert.equal(E.instruction({prompt: 'Je mange du pomme avec un amie.', answers: ['Je mange une pomme avec une amie.']}),
    'Cette phrase contient deux erreurs. Réécris-la correctement.');
  assert.equal(E.instruction({prompt: 'La livraisation est gratuite.', answers: ['La livraison est gratuite.']}),
    'Cette phrase contient une erreur. Réécris-la correctement.');
  assert.equal(E.instruction({instruction: 'Cette phrase contient une erreur : corrigez le verbe en gardant le passé simple.', prompt: 'Ils voulèrent et prenèrent.', answers: ['Ils voulurent et prirent.']}),
    'Cette phrase contient deux erreurs : corrigez le verbe en gardant le passé simple.');
});

test('AI mix question with one error from each subject says two (reported 24 Nov)', () => {
  const x = { type: 'fix', prompt: 'Les bureaux de la préfecture sont ouvert tous les matins, mais il n’y a pas des rendez-vous disponibles.',
    answers: ['Les bureaux de la préfecture sont ouverts tous les matins, mais il n’y a pas de rendez-vous disponibles.'] };
  assert.equal(E.count(x.prompt, x.answers), 2);
  assert.equal(E.instruction(x), 'Cette phrase contient deux erreurs. Réécris-la correctement.');
});
