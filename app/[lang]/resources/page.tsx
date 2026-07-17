import type { Metadata } from 'next';
import { isLang } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import { documents } from '@/content/documents';
import PageHeader from '@/components/ui/PageHeader';
import SectionBand from '@/components/ui/SectionBand';
import ResourceFilter from '@/components/resources/ResourceFilter';

// The downloads hub. Bespoke, and deliberately without an ActFooter: this
// page cites no Articles — it is an index of documents, not a summary of
// the law. (Another instance where a one-size layout would not have fit.)
export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: lang === 'so' ? 'Kheyraadka' : 'Resources',
    description:
      lang === 'so'
        ? 'Dhammaan dukumiintiyada rasmiga ah ee NHPC daabacay, meel keliya. Bilaash ayaa loo soo dejin karaa.'
        : 'Every official document NHPC publishes, in one place. All free to download.',
  };
}

export default function ResourcesPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  const so = lang === 'so';

  return (
    <>
      <PageHeader
        title={so ? 'Kheyraadka' : 'Resources'}
        intro={
          so
            ? 'Dhammaan dukumiintiyada rasmiga ah ee NHPC daabacay, meel keliya. Bilaash ayaa loo soo dejin karaa. Dukumiintigu waa isha rasmiga ah — bogagga websaydku waa soo koobid.'
            : 'Every official document NHPC publishes, in one place. All free to download. The document is the authority — the web pages only summarise it.'
        }
      />

      <div className="mx-auto max-w-4xl px-4">
        <section className="py-10" aria-labelledby="docs-heading">
          <SectionBand id="docs-heading">
            {so ? 'Dukumiintiga & Foomamka' : 'Documents & Forms'}
          </SectionBand>
          <div className="mt-5">
            <ResourceFilter documents={documents} lang={lang} />
          </div>

          <p className="mt-6 border-l-[3px] border-nhpc-blue bg-nhpc-wash p-4 text-sm leading-relaxed text-slate-800">
            {so
              ? 'Dukumiintiyada lagu calaamadeeyay “Weli lama daabicin” waa la diyaarinayaa. Lama soo dejin karo weli — halkan ayay ka soo bixi doonaan marka la daabaco.'
              : 'Documents marked “Not yet published” are being prepared. They cannot be downloaded yet — they will appear here when the Council publishes them.'}
          </p>

          <p className="mt-4 border-l-[3px] border-nhpc-red bg-nhpc-wash p-4 text-sm text-slate-800">
            <strong className="text-nhpc-dark">NHPC never requests payment via personal accounts.</strong>
            <br />
            <span lang="so">NHPC marnaba kuma codsado lacag ku bixi akoon shakhsi ah.</span>
          </p>
        </section>
      </div>
    </>
  );
}
