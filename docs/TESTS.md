# Mechanical verification - actual evidence

## Deployment 1
Commit: 9dcbe99ad35d54c8a6a281a346325423916cf46f
Vercel ID: dpl_AdQVKhC1CPVA8kPdM8QqhXEw7bdT
URL: https://buyer-guard-week-10.vercel.app
Status: READY, verified through Vercel and browser.

The live invented example computes 3000 - 1200 = 1800 MXN against a 2499 MXN price. Consent gates the AI request. The live request returns the truthful configuration error because GEMINI_API_KEY is not yet configured. No real AI response or vision success is claimed.

## Observed bug / correction
Reproduction on deployment 1: load invented example, replace Product with three spaces, submit the checklist. Actual: review appears for an empty trimmed product. Expected: reject blank-looking text and explain correction. Screenshot: evidence/04-blank-product-bug.png.
Fix: trim-check product and both questions before creating a review; native validation says 'Escribe texto, no solo espacios.' The server already rejected these values. Regression test executes the actual browser script against a small DOM harness and verifies that each whitespace-only required text blocks the review and shows the correction.

## Automated checks
Seven tests pass: blank-looking browser text, exact cent arithmetic, invalid input/image rejection, bounded AI schema, mocked provider request shape, quota error, and missing-key behavior. Provider responses in unit tests are explicitly mocks, not live evidence. No keys, accounts or real-person data used.

## Persona correction
Fresh synthetic reviewer identified ambiguity in 'Dinero disponible': a shopper could deduct obligations twice. Changed to 'Dinero que tienes antes de pagar pendientes (MXN)'. No additional feature added.

## Still pending
Deploy 2 must include the fixes and configured free-tier key. Then verify live text and vision, capture fixed screens, and record deployed regression, override, export and clear behavior. Local HTTP preview was unavailable because the environment denied binding a local port; this is not reported as a successful browser check. Per-instance request caps are not a global anti-abuse limit; free provider quotas remain the cost boundary. No claim of five human shopper tests.
