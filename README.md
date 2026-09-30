# TEF B2 Coach — v1

A mobile-first PWA for personal TEF IRN preparation. The initial learner profile is seeded from the 30 Sep 2026 diagnostic.

## Included in v1

- Dashboard with personalized skill estimates and priorities
- Rolling / exam-date Gantt plan
- Daily 5–20 minute sessions and weekly quests
- Vocabulary flashcards with local spaced-repetition state
- Quick games built from the learner's real errors
- Detailed grammar library + mini drills
- Reading and listening TEF-style exercises
- Timed TEF-style writing and speaking practice
- Error log seeded from diagnostic
- Class-note scanner: image import, optional in-browser OCR, known-error detection, vocabulary extraction
- Tutor screen with learner context, local coaching, voice dictation where supported
- Optional secure AI endpoint field (never put an API key in the browser)
- Mini-mock history
- Official TEF links separated from original practice content
- Installable PWA shell for mobile/desktop

## Important distinction

The app does not redistribute CCI/TEF audio. Official resources are linked separately. Internal audio exercises are original TEF-style practice.

## Running locally

Serve this folder over HTTP, e.g. `python -m http.server 8000`, then open `http://localhost:8000`.

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
