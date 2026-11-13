# TEF B2 Coach — v2

A mobile-first PWA for personal TEF IRN preparation. The initial learner profile is seeded from the 30 Sep 2026 diagnostic.

## What's in v2 (build 11)

- **Examen blanc** in the official TEF IRN format: compréhension écrite (20 q, 30 min), compréhension orale (20 q, 20 min, each audio once, no going back), expression écrite (A 10 min / 40 words, B 20 min / 100 words), expression orale (2 × 5 min). Also a 15-minute mini-exam and single-section runs. Results per skill, review of every mistake, history table.
- **Content bank** (`content/`): 50 reading and 51 listening items tagged A2 → C1 with explanations (21 dialogues read with two voices), 271 vocabulary entries by TEF theme with gender/plural, feminine forms, verb group and auxiliary, 28 grammar cards in learning order with common mistakes and 4 drills each, 25 writing + 26 speaking prompts that follow the official task types (speaking B = « aider un(e) ami(e) à prendre une décision »), each speaking prompt with an examiner brief.
- **Levels that move**: dashboard estimates come from your recent answers (accuracy per CEFR level) and AI assessments, instead of the fixed diagnostic.
- **Spaced repetition** flashcards (1, 3, 7, 14, 30… days), theme filter, « genre & pluriel » mode.
- **Vocabulary browser**: whole-word search with exact matches first, filters by theme, nature and verb group.
- **Conjugation engine** (`conjugate.js`): all exam tenses for regular and ~100 irregular/derived verbs, with `npm test` (318 checks against hand-written tables).
- **AI backend**: Claude (default) or OpenAI for text; OpenAI only for the realtime voice examiner. The GitHub Pages app can use a Vercel backend (set its URL in the Tutor screen).
- Guest link: `?guest=Name` keeps a separate local history and never syncs.
- Daily tasks reset each day, weekly minutes/quests reset each week.

## Important distinction

The app does not redistribute CCI/TEF audio. Official resources are linked separately. Internal audio exercises are original TEF-style practice.

## Daily lesson and practice bank (builds 16–17)

- **Leçon du jour** (home screen): one grammar topic per day in learning order — read the lesson, copy the
  « version cahier » (Seyès page, printable) into a notebook, basic questions (10/15/25 per day), then from day 2 a
  spaced review of earlier topics. Unfinished days carry over. Code: `daily.js`, `topic.js`.
- **Practice bank**: ≈40 checked exercises per topic (`content/grammar-plus-*.js` + `content/grammar-more-*.js`,
  levels 1–3, five types), validated by `npm run qa:content`.
- **Unlimited automatic drills** (`generators.js`) for mechanical topics — conjugation in every exam tense
  (from the tested conjugation engine), un/une, plurals, feminine adjectives, du/de la/des, au/à la/aux.
- **AI questions on demand**: `api/generate-exercises.js` writes 10 new exercises with Claude, a second pass verifies
  every answer key, and they are saved in the learner's state so they come back in reviews.
- **Answer checking** (`topic.js`): case, spacing, final punctuation, commas and ' vs ’ are ignored; accent-only slips
  count as « presque ». A gap's `hint` (base word / tense) is shown in brackets right after the gap.
- **« Signaler une erreur »** on every bank or AI question: the question never comes back, and the report is kept in
  `S.flags` (synced with the progress), keyed by the question's sentence, so it can be corrected in the content files.

## Lessons and the notebook (build 19)

- Each lesson (`content/grammar-plus-*.js`) has `rule`, a main `table`, optional extra titled `tables:[{title, head, rows}]`,
  `examples`, `tips`, `summary`; the card (`data.js` / `content/grammar.js`) has at least three `mistakes`. The notebook page
  (`#c/<id>`) shows all of it; `npm run qa:content` checks every table row and the mistakes.
- **What was added after a page was copied**: « J’ai tout recopié » stores the page's lines in `S.copied[id]` (synced). Later
  additions or corrections are highlighted on the notebook page and listed on the Today card until « C’est fait » is pressed.
  Pages copied before build 19 are compared with `content/notebook-baseline.js` (the lessons at build 17). The line keys come
  from `lessonLines()` in `topic.js` (between `lines:start` and `lines:end`).

## 43 lessons (builds 20–21)

- Lessons g29–g43 live one per file in `content/lessons/gNN.js`: the card (pushed into `grammar`), the lesson page
  (`grammarPlus`) with 12 practice items, and 28 bank items (`grammarMore`). They cover articles, questions, the imperative,
  pronominal verbs, prepositions of place, duration (depuis / il y a / pendant), adverbs in -ment, homophones,
  tonic / possessive / demonstrative pronouns, verb + à / de + infinitive, indefinites, time clauses, faire + infinitive,
  the passé simple (to recognise in texts) and nominalisation.
- A new lesson file must be listed in `index.html`, `sw.js`, `qa/static-qa.txt` and `BANK_FILES` in `qa/content-qa.txt`.
  Its `order` must be unique and come after the lessons its exercises rely on.
- **Mon parcours** shows, for each topic, how many of its checked questions have been seen and how many are waiting to be
  redone (`coverage()` in `daily.js`). Daily picks skip what was seen today, then take questions answered wrong
  first, then unseen ones, then the ones seen longest ago.

## English explanations (build 22)

- `content/english/en-N.js` fills `grammarEn[id] = {rule, tables, tips, summary}`: one plain-English explanation per French
  line, in the same order (tables in the order of `tablesOf()`: `table` first, then `tables`). `*…*` marks French words,
  shown upright and bright inside the English. `qa/content-qa.txt` fails if an array does not line up with the lesson.
- Lesson page: button **English** under « La règle » shows or hides every explanation (choice kept in `S.ruleEn`).
  Notebook page: the box **Anglais** (`S.copyEn`) shows the explanations and the example translations.
- English lines are not notebook lines: they never appear as « nouveautés » to copy.
- Every lesson has one (build 23); a new lesson needs its English entry too, or content QA fails.
- When a French rule, tip or summary line is added, moved or removed, change the English array the same way.

## Notebook versions: fiche, short, full (builds 24–25)

- The notebook page switches between « Fiche (1 page) » and « Complète » (`S.nbMode`, fiche by default).
- **Fiche**: a one-page summary written for looking things up when a question blocks: `content/fiches/fiches-N.js` fills
  `grammarFiche[id] = [{h, l: [lines], t: {head, rows}, tab: n}]`, `*…*` marks keywords (blue highlighter); `tab: n` shows the
  lesson's own table n (as in `tablesOf()`) exactly as in the lesson, so the tables to look things up in stay identical. Content QA keeps each
  fiche to one page, or a double page when it carries full lesson tables (≤ 64 lines), and fails if a lesson has none (all 43 since build 26). A lesson without a fiche would fall back to the **short** page: « À retenir », tables, examples
  and mistakes, with the detailed rules and tips folded (« à relire, pas à recopier ») and hidden when printing.
- A copy remembers its version (`S.copied[id].mode`: fiche, short or full; copies before build 24 count as full). Updates are
  computed only on the lines of that version (`notebookLines(id, mode)`), and while a copy has lines to add, the page opens
  on that version until the learner picks another one with the switch. « J’ai recopié cette page » records any lesson.

## Word translation (build 29)

- **Computer**: right-click a French word (or a selected phrase) → a small pane next to it: a **masculin / féminin** tag (for an
  adjective or participle, the gender of that form), the dictionary form with its article and the grammar,
  the English meaning *in that sentence*, a note when something is easy to miss, and 🔊. Shift + right-click keeps the
  browser's menu; English notes and fields keep it too. **Phone**: long-press a word (drag the handles for a phrase) → the
  same pane at the bottom of the screen.
- 🌐 adds up to two more languages (Hebrew, Arabic, Spanish…; `S.trLangs`, synced with the rest of the state). « ＋ Mes cartes »
  turns the word into a flashcard (`S.custom`, theme « Mots traduits ») with the sentence as its example.
- `translate.js` sends `{text, context, langs}` to `api/translate.js` (Claude Haiku, signed-in allowed accounts only) and keeps
  the last 300 answers in `localStorage` (`tef-tr-cache-v2`). Without the AI (signed out, offline) it falls back to the app's
  word list, else asks to sign in. Off during a timed examen blanc.

## 📖 Fiche next to every question (build 30)

- Each practice question has a **📖 Fiche** button: the subject's one-page summary opens in a side panel (a bottom sheet on
  phones) at the section that fits the question, so the learner looks up the rule, as in the paper notebook. After answering,
  **📖 Voir la règle dans la fiche** (or the open panel) highlights the line or table row and the words of the answer in it.
- `ruleMatch(tid, x)` in `topic.js`: the words the answer changes (weight 3; 1 for small words unless that is all there is),
  plus the cue and the explanation (1, or 0.75 when only the section title has them), against the fiche's lines and table rows,
  ignoring accents and final -s/-x/-e. A match needs 2 points; UI QA checks known questions and that ≥ 85 % of the bank match.
- The panel stays open from question to question (no highlight before answering); × or Esc closes it.
- « un ou une ? » questions (build 32) only look at the gender table: the row whose ending fits the noun (longest ending wins,
  the explanation breaks ties, e.g. -eur feeling vs person); if no ending fits, the panel says the noun is learnt with its article.
- Automatic exercises (build 32): `TEF_GEN.make` draws 3× more than needed and serves first those not generated in the last
  200 on this device (`localStorage` `tef-gen-recent-v1`); Genre adds possessive drills (« C’est ___ attestation » → mon).

## « Mais » column (build 31)

- In lesson and fiche tables, exceptions are written at the end of the last cell as `(mais …)`; `tableHTML` shows them in their
  own **Mais** column (only in tables that have exceptions). Line keys keep the original row text, so copies made before are
  not asked to recopy anything. Content QA rejects `(mais …)` anywhere else in a row.

## 🎯 Contrôle de fin de sujet (build 33)

- Each day now has a **Contrôle** step after « Questions de base »: 10 / 15 / 20 questions (with the daily size), every level,
  past mistakes first (up to 40 %), a quarter automatic drills when the topic has some, shuffled, **without the fiche**.
  **80 %** validates the subject: the step is ticked (and « Questions de base » too if it was not), and the day can complete.
  Below 80 %, the end screen lists « À revoir dans ta fiche » (one link per rule behind a mistake, opening the fiche at that line)
  and the subject comes back more often in Révision (+4 in `pickReview`) until it is passed.
- The lesson page has a **🎯 Contrôle** button for any subject, and shows the result (« ✓ Sujet validé au contrôle (18/20) »).
- State: `S.course.ctrl[id] = {tries, last, best, passed}`; the day keeps `ctrl` (passed) or `ctrlTry` (last failed attempt).

## Running locally

Serve this folder over HTTP, e.g. `python -m http.server 8000`, then open `http://localhost:8000`.

```
npm test            # conjugation engine, word picking for the translation pane
npm run qa          # content, static and phone-size UI checks
```

## Turning on the AI (Vercel)

1. Import this repo in Vercel (no framework, no build). The `api/` folder becomes serverless functions.
2. Environment variables (see `.env.example`): `ANTHROPIC_API_KEY`, `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `APP_ORIGIN=https://amidavid.github.io`. Add `OPENAI_API_KEY` only if you want the live voice examiner.
3. Run `supabase/migrations/001_init.sql` in the Supabase SQL editor; in Supabase Auth → URL configuration, add both `https://amidavid.github.io/tef-irn-trainer/` and your Vercel URL as redirect URLs.
4. The GitHub Pages app uses `https://tef-irn-trainer.vercel.app` automatically (it can be changed in Tuteur → « Serveur IA de l’app »). Sign in with ☁️ Sync and features marked **IA** work.

Current setup: Vercel project `tef-irn-trainer` (deployed from this public repo), Supabase project shared with Arabic Made Easy (tables `learner_state`, `study_events`).

## AI tutor connection

The browser UI is ready to POST to a server endpoint configured in the Tutor screen. Expected request body:

```json
{
  "message": "user message",
  "profile": {},
  "errors": [],
  "vocab": [],
  "state": {}
}
```

Expected response:

```json
{ "reply": "Tutor response" }
```

Keep the OpenAI API key only on the server. A production backend should also persist learner state, perform full writing/scan analysis, and issue short-lived credentials for realtime voice.

## Next production steps

1. Deploy static PWA (GitHub Pages/Vercel/Cloudflare Pages).
2. Add authenticated database storage so progress syncs across devices.
3. Add `/api/tutor`, `/api/analyze-writing`, `/api/analyze-notes` and realtime voice session endpoints.
4. Replace browser OCR for handwriting with multimodal image analysis on the server.
5. Add larger original question/audio bank and full mock engine.
