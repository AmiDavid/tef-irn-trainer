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
  `grammarFiche[id] = [{h, l: [lines], t: {head, rows}}]`, `*…*` marks keywords (blue highlighter). Content QA keeps each
  fiche to one page (≤ 32 lines) and fails if a lesson has none (all 43 since build 26). A lesson without a fiche would fall back to the **short** page: « À retenir », tables, examples
  and mistakes, with the detailed rules and tips folded (« à relire, pas à recopier ») and hidden when printing.
- A copy remembers its version (`S.copied[id].mode`: fiche, short or full; copies before build 24 count as full). Updates are
  computed only on the lines of that version (`notebookLines(id, mode)`), and while a copy has lines to add, the page opens
  on that version until the learner picks another one with the switch. « J’ai recopié cette page » records any lesson.

## Running locally

Serve this folder over HTTP, e.g. `python -m http.server 8000`, then open `http://localhost:8000`.

```
npm test            # conjugation engine
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
