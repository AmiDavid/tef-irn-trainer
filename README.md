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
4. On the phone, open the app → Tuteur → « Serveur IA de l’app » → paste the Vercel URL → sign in with ☁️ Sync. Features marked **IA** then work.

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
