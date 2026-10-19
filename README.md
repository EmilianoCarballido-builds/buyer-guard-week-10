# BuyerGuard MX
Buyer-controlled purchase review in Spanish and MXN. Real Gemini text + vision, manual constraints, independent free checklist, explicit unknowns and buyer override. No purchases, accounts, database or affiliate incentives.

Live verified deployment: https://buyer-guard-week-10-9q8isbule-smart-business2.vercel.app
Production alias: https://buyer-guard-week-10.vercel.app

## Evidence
- Packet was the first commit, before application code: docs/PACKET.md.
- Exactly five meaningful commits and two deployments; no automatic Git deployments.
- Seven automated checks passed. Real text and image calls verified.
- docs/TESTS.md records the observed blank-text bug, fix and redeployed check, plus verification limits.
- docs/PERSONA.md records the fresh synthetic screenshot review and wording correction; not human research.
- Submission PDFs are in docs/submission/. Record the actual video using docs/DEMO.md.

## Run tests
Node 22 or newer: npm test. No dependencies required.
Deploy on Vercel with GEMINI_API_KEY in Production only. Default model gemini-3-flash-preview; optional GEMINI_MODEL. Use an eligible free-tier project without billing. Do not commit secrets.

## Limits
Free-tier quotas and provider policies apply. No independent product verification. Per-instance capacity limits are not global rate limiting. Export download could not be confirmed in the in-app browser. Five willing-shopper comparisons and the user's demo recording remain outstanding.
