import type { Bilingual, Lang } from '@/content/types';

// Centred bilingual section title for the homepage: active language on top
// (~24px, 700, nhpc-dark), the other language beneath (~60%, italic,
// nhpc-blue), then a short 3px nhpc-blue rule. Reader-aware, like the hero.
//
// The rule is nhpc-BLUE. Red is reserved for meaning (alerts, the active nav
// underline, the Report CTA) — a decorative underline is not one of those.
//
// Distinct from SectionBand (the solid-blue marker used on interior pages).
// This is the homepage-only centred treatment; the id lands on the <h2> so
// section aria-labelledby still resolves to a single accessible name.
export default function SectionHead({
  title,
  lang,
  id,
}: {
  title: Bilingual;
  lang: Lang;
  id?: string;
}) {
  const primary = lang === 'so' ? title.so : title.en;
  const secondary = lang === 'so' ? title.en : title.so;
  return (
    <div className="text-center">
      <h2 id={id} className="text-2xl font-bold tracking-tight text-nhpc-dark">
        {primary}
      </h2>
      <p className="mt-1 text-sm italic text-nhpc-blue">{secondary}</p>
      <span className="mx-auto mt-3 block h-[3px] w-12 bg-nhpc-blue" aria-hidden="true" />
    </div>
  );
}
