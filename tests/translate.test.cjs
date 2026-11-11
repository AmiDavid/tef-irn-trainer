'use strict';
// Word picking for the translation pane (translate.js): which characters make "the word under the pointer",
// and which sentence is sent with it as context.
const test = require('node:test');
const assert = require('node:assert/strict');

require('../translate.js');
const T = globalThis.TEF_TR_CORE;

/* The word picked when the pointer is on character `at` (an index, or the first match of a string + offset). */
const pick = (text, at, off = 0) => {
  const i = typeof at === 'number' ? at : text.indexOf(at) + off;
  const r = T.wordAt(text, i);
  return r && text.slice(r.start, r.end);
};

test('a plain word, from any of its letters or right after it', () => {
  const s = 'Je mange une pomme.';
  assert.equal(pick(s, 'mange'), 'mange');
  assert.equal(pick(s, 'mange', 4), 'mange');
  assert.equal(pick(s, 'mange', 5), 'mange'); // caret just after the last letter
  assert.equal(pick(s, 'pomme', 5), 'pomme'); // on the full stop
});

test('accents and œ are letters', () => {
  assert.equal(pick('un œil, des yeux', 'œil'), 'œil');
  assert.equal(pick('la société générale', 'générale', 3), 'générale');
  assert.equal(pick('Ça va ?', 0), 'Ça');
});

test('no word under the pointer', () => {
  assert.equal(pick('a , b', 2), null);
  assert.equal(pick('en 2019 déjà', '2019', 1), null);
  assert.equal(pick('   ', 1), null);
});

test('elisions are cut after the apostrophe', () => {
  assert.equal(pick('à l’hôpital', 'hôpital', 2), 'hôpital');
  assert.equal(pick('à l’hôpital', 'l’'), 'l’');
  assert.equal(pick('à l’hôpital', '’'), 'l’');
  assert.equal(pick('Je pense qu’il viendra', 'il'), 'il');
  assert.equal(pick('Je pense qu’il viendra', 'qu’', 1), 'qu’');
  assert.equal(pick('jusqu’à demain', 'à'), 'à');
  assert.equal(pick('jusqu’à demain', 0), 'jusqu’');
  assert.equal(pick("l'école", 'école', 1), 'école'); // typewriter apostrophe too
});

test('words that keep their apostrophe', () => {
  assert.equal(pick('Aujourd’hui, il pleut', 'hui'), 'Aujourd’hui');
  assert.equal(pick('quelqu’un a appelé', 'un'), 'quelqu’un');
  assert.equal(pick('quelqu’une', 0), 'quelqu’une');
});

test('hyphenated words stay whole', () => {
  assert.equal(pick('Il viendra peut-être demain', 'être'), 'peut-être');
  assert.equal(pick('c’est-à-dire', 'dire'), 'c’est-à-dire');
  assert.equal(pick('Dis-le !', 'le'), 'Dis-le');
  assert.equal(pick('les grands-parents', 'parents'), 'grands-parents');
  assert.equal(pick('un mot - un autre', 'mot'), 'mot'); // a dash between spaces is not a hyphen
});

test('an elided word cut by an inline tag keeps its apostrophe', () => {
  assert.equal(pick('j’', 0), 'j’');
  assert.equal(pick('d’', 0), 'd’');
  assert.equal(pick('mot’', 0), 'mot'); // a closing quote is not an elision
  assert.equal(pick('‘mot’', 'mot'), 'mot');
});

test('the context is the sentence around the word', () => {
  const s = 'Première phrase. La personne est toujours féminin, même pour un homme ! Fin.';
  const i = s.indexOf('personne');
  assert.equal(T.sentenceAt(s, i, i + 8), 'La personne est toujours féminin, même pour un homme !');
  const t = 'Titre\nLa  personne\n est là';
  const j = t.indexOf('personne');
  assert.equal(T.sentenceAt(t, j, j + 8), 'La personne');
});

test('a long passage is cut around the word', () => {
  const long = 'mot '.repeat(300) + 'cible ' + 'mot '.repeat(300);
  const i = long.indexOf('cible');
  const c = T.sentenceAt(long, i, i + 5, 120);
  assert.ok(c.length <= 120, 'at most 120 characters');
  assert.ok(c.includes('cible'), 'keeps the word');
});
