import type { Bilingual, Lang } from '@/content/types';

// A two-line CTA label: the active language on top (uppercase, 600), the other
// language beneath (~70%, 400). Used by the three hero CTAs and the header
// Verify / Report actions — five identical structures, one component.
//
// The primary line follows the ACTIVE language, not English. Pinning English
// on top would demote Somali on /so, which the bilingual contract forbids.
export default function StackedLabel({
  label,
  lang,
  className = '',
}: {
  label: Bilingual;
  lang: Lang;
  className?: string;
}) {
  const primary = lang === 'so' ? label.so : label.en;
  const secondary = lang === 'so' ? label.en : label.so;
  return (
    <span className={`flex flex-col items-center leading-tight ${className}`.trim()}>
      <span className="text-sm font-semibold uppercase tracking-wide">{primary}</span>
      <span className="mt-0.5 text-[0.7rem] font-normal normal-case opacity-90">{secondary}</span>
    </span>
  );
}
