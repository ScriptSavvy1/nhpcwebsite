// ─────────────────────────────────────────────────────────────────────
// STATIC-EXPORT ESCAPE HATCH
//
// This is the ONLY page on the site that depends on a server runtime. If
// NCA will not delegate a subdomain and we cannot host serverless, the
// whole site can ship as static files. The form goes; nothing else does.
//
// Verified: with the six steps below, `next build` produces a complete
// static `out/` directory. Nothing else in this codebase blocks
// output:'export'.
//
//   1. next.config.mjs — replace the config with:
//          output: 'export',
//          trailingSlash: true,
//          images: { unoptimized: true },   // REQUIRED: next/image's
//          //   default loader needs a server; the seal is rendered with
//          //   next/image in Header, Footer and HomeView.
//      and DELETE the async redirects() block — redirects() does not
//      survive export (it is a server feature and is silently dropped).
//
//   2. Delete app/api/complaints/ (route handlers cannot be exported —
//      this is the one hard blocker).
//
//   3. views/ComplaintsView.tsx — delete the ComplaintForm import and the
//      "File online" <section>. Both are marked REMOVABLE. The page then
//      stands on its own: the 2376 line and info@nhpc.gov.so are already
//      first-class channels in "Ways to file", which never references the
//      form.
//
//   4. Add public/index.html to replace the lost / → /en redirect:
//          <!doctype html><meta charset="utf-8">
//          <meta http-equiv="refresh" content="0; url=/en/">
//          <link rel="canonical" href="/en/">
//          <title>NHPC</title>
//          <a href="/en/">National Health Professionals Council</a>
//      (Do NOT add this while we are still serverless — redirects() is
//      evaluated before the filesystem and the two would fight.)
//
//   5. Optional cleanup once the form is gone: delete
//      components/complaints/, lib/complaint-email.ts, lib/rate-limit.ts,
//      and the RESEND_*/UPSTASH_*/IP_HASH_SALT env vars.
//
//   6. `npm run build` → deploy the `out/` directory to any static host.
//
// What is lost: online complaint submission. What survives: every page,
// both languages, all PDFs, and complaints by phone (2376, 24/7) and
// email (info@nhpc.gov.so).
// ─────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next';
import { isLang, t } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import { complaintsTitle, complaintsIntro } from '@/content/complaints';
import ComplaintsView from '@/views/ComplaintsView';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: t(complaintsTitle, lang),
    description: t(complaintsIntro, lang),
  };
}

export default function ComplaintsPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return <ComplaintsView lang={lang} />;
}
