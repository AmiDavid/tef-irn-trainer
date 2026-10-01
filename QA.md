# TEF B2 Coach — Quality Assurance

## Release gates

A production deployment is intended to pass all of these checks before release:

1. JavaScript syntax validation.
2. Content-integrity checks for vocabulary, grammar, comprehension questions, answer indexes and TEF task constraints.
3. Static integration checks for mobile navigation, Android system-bar handling, build/version markers and PWA install metadata.
4. Browser tests at Android-size viewports, including horizontal overflow, header collisions, active-recall vocabulary, mastery lists, grammar drills and access to every major section.
5. Android APK compilation.

## Curated French content review

The current built-in vocabulary bank and grammar lessons were manually reviewed on 1 October 2026.

During review, one real grammar-content defect was found and corrected: the relative-pronoun lesson previously contained a malformed sentence around **auquel**. The lesson now distinguishes **qui**, **que**, **dont**, **où**, and the use of **auquel** after **à**.

Other explanations were tightened so that:

- **pour que** is taught with the subjunctive;
- **si + imparfait → conditionnel** is taught for present hypothetical situations;
- **dont** is described as replacing a complement introduced by **de**;
- **cependant**, **pourtant**, **en revanche**, **en effet**, **par conséquent** and **d’ailleurs** are not presented as interchangeable;
- omission of **ne** is identified as common in ordinary speech but not recommended in careful TEF writing.

Reference checks included:
- Académie française — “Dont”: https://www.academie-francaise.fr/dont
- Académie française — “Pour pas que au lieu de pour que ne pas”: https://www.academie-francaise.fr/pour-pas-que-au-lieu-de-pour-que-ne-pas
- Académie française — conditional/hypothesis guidance: https://www.academie-francaise.fr/benoit-france
- Académie française — pronouns **en** and **y**: https://www.academie-francaise.fr/questions-de-langue

## Official TEF IRN facts

Exam-format facts are checked against CCI Paris Île-de-France / Le français des affaires, not inferred from practice material.

Current sources:
- Presentation: https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-irn/presentation/
- Passation: https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-irn/passation/
- Results: https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-irn/resultats/
- Attestation: https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-irn/attestation/

Verified baseline on 1 October 2026:
- Reading: 20 QCM, 30 minutes.
- Listening: 20 QCM, 20 minutes; each audio once; no return to previous listening questions.
- Writing: Section A 10 minutes / 40 words minimum; Section B 20 minutes / 100 words minimum.
- Speaking: two 5-minute role-play sections.
- B2 begins at 400/499 per skill; the official global B2 rule allows 400+ in three tests with at least 367 in the fourth.
- Result validity: two years.

The learner-facing target remains stricter: repeated B2-level performance in all four skills.

## AI-generated corrections

Core grammar/vocabulary is curated rather than generated on the fly.

When the connected AI backend is enabled, writing assessment, oral assessment, class-note analysis and tutor answers receive a second language-QA pass by default. It can be disabled only with the server environment variable `OPENAI_QA_SECOND_PASS=false`.

Handwriting analysis must preserve uncertainty instead of inventing unreadable text. Scanned vocabulary should remain user-reviewable before being treated as learned material.

## QA principle

No automated system can guarantee that a language-learning app will never contain an error. The release policy is therefore: detect mechanically detectable defects automatically, review core teaching content manually, verify exam facts at their official source, and make generated material pass a second review step.
