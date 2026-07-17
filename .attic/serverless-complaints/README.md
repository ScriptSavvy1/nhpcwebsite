# Serverless complaints — removed 2026-07-17

NCA administers `.gov.so`, refused to delegate a subdomain, and hosts
WordPress/cPanel with no Node. The site therefore ships as a static export
and the online complaint form was removed. This directory holds the removed
code so the decision is reversible.

**This project is not under version control** — there is no `git log` to
recover these from. That is the only reason they are kept here rather than
deleted outright. If a repo is initialised, commit this history and delete
this directory.

Files use a `.bak` suffix so no tooling touches them: `tsconfig.json`
includes `**/*.ts`, and `next build`/`eslint` walk the tree — a live `.ts`
here would be compiled (and would fail, since `resend` is uninstalled).

| File | Restored to |
| --- | --- |
| `route.ts.bak` | `app/api/complaints/route.ts` |
| `rate-limit.ts.bak` | `lib/rate-limit.ts` |
| `complaint-email.ts.bak` | `lib/complaint-email.ts` |
| `ComplaintForm.tsx.bak` | `components/complaints/ComplaintForm.tsx` |
| `env.example.bak` | `.env.example` |

## To restore (if NCA delegates a subdomain, or we host elsewhere)

1. Copy the files back to the paths above, dropping `.bak`.
2. `npm install resend`
3. `next.config.mjs` — remove `output: 'export'` and `trailingSlash: true`;
   restore the `redirects()` block for `/` → `/en`. Keep or drop
   `images: { unoptimized: true }` as you prefer (it is only *required*
   for export).
4. Delete `public/index.html` — it exists solely to replace the redirect
   that export drops, and it would otherwise fight `redirects()`.
5. `views/ComplaintsView.tsx` — re-add the ComplaintForm import and a
   "File online" section. Keep everything else: "Ways to file", the
   anonymity caveat, the damages notice, the 7-day acknowledgement.
   The caveat was moved OUT of the form onto the page — if the form comes
   back, do not move it back inside a checkbox. Everyone should read it.
6. Set env: `RESEND_API_KEY`, `COMPLAINTS_FROM`, `COMPLAINTS_TO`,
   `IP_HASH_SALT`, and — **mandatory in production** —
   `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN`. `rate-limit.ts`
   throws on cold start without them, deliberately.

## What was retained deliberately

`content/complaints.ts` keeps the form labels, validation messages and
success/failure strings even though nothing renders them now. They are
data, cost nothing, and are the fiddly part to recreate (fully translated
Somali). The form component above expects them unchanged.
