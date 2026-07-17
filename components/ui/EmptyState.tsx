import type { LucideIcon } from 'lucide-react';
import type { Bilingual, Lang } from '@/content/types';
import { t } from '@/lib/i18n';

// The honest empty panel. Extracted at the fourth identical instance
// (NoticeBoard, /public/disciplinary, /professionals/examinations,
// /professionals/cpd), all of which differed only in these two strings.
//
// The contract is deliberately two strings: WHAT is absent, and WHEN it will
// appear. A launch-empty section on a regulator's site must answer both — an
// empty table with no explanation reads as broken, and a visitor who cannot
// tell "not published yet" from "site is broken" stops trusting the register.
//
// NOTE: this is NOT a table component. The tables it sits beside share
// nothing — different columns, cell renderers, row types and mobile layouts.
// Only the empty case repeats. Do not grow this into EmptyStateTable.
//
// Margin is the caller's business: wrap it, don't pass a className.
export default function EmptyState({
  heading,
  body,
  lang,
  icon: Icon,
}: {
  /** What is not here yet, e.g. "No decisions have been published yet." */
  heading: Bilingual;
  /** When it will appear, and where else to look. */
  body: Bilingual;
  lang: Lang;
  /** Optional muted lucide icon centred above the heading. Off by default —
   *  most empty states are inline table/section panels that read cleaner
   *  without one; the notice board opts in. */
  icon?: LucideIcon;
}) {
  return (
    <div className="border-l-[3px] border-nhpc-blue bg-nhpc-wash px-4 py-6 text-center">
      {Icon && <Icon className="mx-auto mb-2 h-8 w-8 text-nhpc-tint" aria-hidden="true" />}
      <p className="text-sm font-semibold text-nhpc-dark">{t(heading, lang)}</p>
      <p className="mt-1 text-sm text-nhpc-grey">{t(body, lang)}</p>
    </div>
  );
}
