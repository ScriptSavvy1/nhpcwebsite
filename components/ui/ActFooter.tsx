import Link from 'next/link';
import type { Bilingual, Lang } from '@/content/types';
import { t, localizedHref } from '@/lib/i18n';

// The legal footer. Extracted after four identical instances
// (RegulationPageLayout, /public/complaints/process, /public/verify,
// /public/disciplinary) — the prose, markup and link were byte-identical;
// only the article list varied. That list is the entire contract.
//
// `articles` is the LIST ONLY — e.g. "Articles 39, 45 and 63" /
// "Qodobbada 39, 45 iyo 63". The sentence around it lives here so the
// "the Act prevails" wording can never drift between pages.
export default function ActFooter({
  articles,
  lang,
}: {
  articles: Bilingual;
  lang: Lang;
}) {
  const list = t(articles, lang);
  const sentence =
    lang === 'so'
      ? `Boggani wuxuu soo koobayaa ${list} ee Sharciga NHPC Lr.31. Sharcigu waa isha rasmiga ah; halka soo-koobankani ku kala duwan yahay, sharciga ayaa mudan.`
      : `This page summarises ${list} of the NHPC Act Lr.31. The Act is the authoritative source; where this summary differs, the Act prevails.`;

  return (
    <section className="pb-16 pt-10">
      <div className="border-t border-nhpc-rule pt-5">
        <p className="text-xs leading-relaxed text-nhpc-grey">{sentence}</p>
        <Link
          href={localizedHref('/about/act', lang)}
          className="mt-2 inline-flex text-xs font-semibold text-nhpc-blue transition-colors duration-150 hover:text-nhpc-dark"
        >
          {lang === 'so' ? 'Akhri Sharciga NHPC Lr.31 →' : 'Read the NHPC Act Lr.31 →'}
        </Link>
      </div>
    </section>
  );
}
