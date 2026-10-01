import assert from "node:assert/strict";

globalThis.window = {};
await import("../data.js");
const D = globalThis.window.TEF_DATA;

const fail = (msg) => { throw new Error(msg); };
const req = (v, msg) => { if (typeof v !== "string" || !v.trim()) fail(msg); };
const unique = (items, label) => {
  const seen = new Set();
  for (const x of items) {
    const k = String(x).trim().toLocaleLowerCase("fr");
    if (seen.has(k)) fail(`Duplicate ${label}: ${x}`);
    seen.add(k);
  }
};
const safeText = (text, where) => {
  const s = String(text || "");
  const bad = [
    /\bundefined\b/i,
    /\bnull\b/i,
    /TODO/i,
    /C’est l’examen auquel je me prépare demande/i,
    /\bbeaucoup les\b/i,
    /\bun nouvelle travail\b/i
  ];
  for (const re of bad) if (re.test(s)) fail(`Suspicious content in ${where}: ${s}`);
};

assert.ok(D && typeof D === "object", "TEF_DATA missing");
assert.equal(D.profile.name, "Amichai");
assert.equal(D.profile.skills.length, 4);
unique(D.profile.skills.map(x => x.id), "skill id");
for (const s of D.profile.skills) {
  req(s.name, "skill name missing");
  assert.ok(s.readiness >= 0 && s.readiness <= 100, `bad readiness for ${s.id}`);
}

assert.ok(D.official?.checked, "official verification date missing");
const checked = new Date("2026-09-30T00:00:00Z");
assert.ok(!Number.isNaN(checked.getTime()), "official date invalid");
const ageDays = (Date.now() - checked.getTime()) / 86400000;
assert.ok(ageDays < 150, "Official TEF rules are stale: re-verify them with CCI Paris Île-de-France.");

unique(D.errors.map(x => x.id), "error id");
for (const e of D.errors) {
  req(e.wrong, `wrong form missing for ${e.id}`);
  req(e.correct, `correct form missing for ${e.id}`);
  assert.notEqual(e.wrong.trim(), e.correct.trim(), `wrong and correct identical for ${e.id}`);
  req(e.note, `error note missing for ${e.id}`);
}

unique(D.vocab.map(x => x.id), "vocab id");
unique(D.vocab.map(x => x.front), "vocab front");
for (const v of D.vocab) {
  req(v.front, `vocab front missing for ${v.id}`);
  req(v.back, `vocab translation missing for ${v.id}`);
  req(v.example, `vocab example missing for ${v.id}`);
  req(v.tag, `vocab tag missing for ${v.id}`);
  safeText(v.front, `vocab ${v.id} front`);
  safeText(v.example, `vocab ${v.id} example`);
}

unique(D.grammar.map(x => x.id), "grammar id");
const allowedStatuses = new Set(["weak","learning","untested","reliable","mastered"]);
for (const g of D.grammar) {
  req(g.title, `grammar title missing for ${g.id}`);
  req(g.short, `grammar short missing for ${g.id}`);
  req(g.details, `grammar details missing for ${g.id}`);
  assert.ok(allowedStatuses.has(g.status), `bad grammar status: ${g.id}`);
  assert.ok(Array.isArray(g.examples) && g.examples.length >= 2, `not enough examples: ${g.id}`);
  assert.ok(g.drill && Array.isArray(g.drill.choices), `drill missing: ${g.id}`);
  assert.ok(g.drill.choices.length >= 3, `need >=3 choices: ${g.id}`);
  unique(g.drill.choices, `choices in ${g.id}`);
  assert.ok(Number.isInteger(g.drill.answer) && g.drill.answer >= 0 && g.drill.answer < g.drill.choices.length, `bad answer index: ${g.id}`);
  safeText(g.short, `grammar ${g.id} short`);
  safeText(g.details, `grammar ${g.id} details`);
  g.examples.forEach((x,i)=>safeText(x,`grammar ${g.id} example ${i}`));
}

const g3 = D.grammar.find(x => x.id === "g3");
assert.equal(g3.drill.choices[g3.drill.answer], "preniez", "pour que drill must use subjunctive");
const g7 = D.grammar.find(x => x.id === "g7");
assert.equal(g7.drill.choices[g7.drill.answer], "avais", "si + imperfect drill is wrong");
const g9 = D.grammar.find(x => x.id === "g9");
assert.equal(g9.drill.choices[g9.drill.answer], "dont", "relative pronoun drill is wrong");
assert.ok(g9.details.includes("complément introduit par de"), "dont explanation is not precise enough");
assert.ok(g9.details.includes("auquel je me prépare"), "auquel example missing");

for (const [kind, items] of [["reading",D.reading],["listening",D.listening]]) {
  unique(items.map(x=>x.id), `${kind} id`);
  for (const q of items) {
    req(q.question, `${kind} question missing ${q.id}`);
    assert.equal(q.choices.length, 4, `${kind} ${q.id} must have 4 choices`);
    unique(q.choices, `${kind} choices ${q.id}`);
    assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4, `bad ${kind} answer ${q.id}`);
    req(q.choices[q.answer], `correct ${kind} answer empty ${q.id}`);
    safeText(q.text, `${kind} ${q.id} text`);
  }
}

const wa = D.writingPrompts.find(x=>x.type==="A"), wb = D.writingPrompts.find(x=>x.type==="B");
assert.deepEqual([wa.minutes,wa.minWords],[10,40],"Writing A no longer matches verified TEF IRN format");
assert.deepEqual([wb.minutes,wb.minWords],[20,100],"Writing B no longer matches verified TEF IRN format");
assert.equal(D.speakingPrompts.length,2);
for (const s of D.speakingPrompts) assert.equal(s.minutes,5,`Speaking ${s.type} must be 5 minutes`);

console.log(`CONTENT QA OK — ${D.vocab.length} vocab items, ${D.grammar.length} grammar lessons, ${D.reading.length + D.listening.length} comprehension items.`);
