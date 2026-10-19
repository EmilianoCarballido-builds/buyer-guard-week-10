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

## Deployment 2 - final verification
Vercel ID: dpl_DxGiMJ2xKNhEboRg3ETbjyVDb5sx
Exact URL: https://buyer-guard-week-10-9q8isbule-smart-business2.vercel.app
Source commit: 3546f5f46c4c2d6649172ac16f0d9d58b7fc5c89. Status READY.
Production GEMINI_API_KEY presence verified through metadata only; its value was not read or exposed.
Browser regression: three-space product rejected with 'Escribe texto, no solo espacios.' and validity=false. Revised pre-payment money label visible.
Real text call: Gemini returned PASAR, calculated a -699 MXN post-purchase balance, identified missing returns policy and unknown fit. This is actual provider output, not the unit-test fixture. Model advice remains fallible: it chose PASAR where the prompt preferred ESPERAR for missing information; neither action is enforced.
Buyer override: selected COMPRAR despite PASAR; UI confirmed that no purchase occurred.
Real vision call: the generated conceptual mockup was supplied as an explicitly invented image fixture. Gemini correctly identified the image as a conceptual design, read 1500 MXN and 1200 MXN from it, and flagged the contradiction with the manually entered 3000 MXN. It returned ESPERAR with a 699 MXN shortfall. See evidence/07-real-vision-override.png. Buyer selected COMPRAR independently.
Export verification limit: clicking Exportar nota did not produce an observable download event in the in-app browser within 10 seconds; export delivery is not claimed as verified. Clear behavior is implemented but was not rechecked in the final live pass. These remaining checks were stopped to honor the user's credit constraint.
Exactly two deployments were created. No further deployment or feature work is planned.
