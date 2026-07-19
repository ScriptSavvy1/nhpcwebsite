import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { isLang, t, localizedHref } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import { processTitle, processIntro, processStages, damagesNotice } from '@/content/complaints';
import { COMPLAINT_URL } from '@/content/site';
import PageHeader from '@/components/ui/PageHeader';
import ActFooter from '@/components/ui/ActFooter';
import SectionBand from '@/components/ui/SectionBand';
import NumberedRows from '@/components/ui/NumberedRows';

// Bespoke page — NOT RegulationPageLayout. The seven stages are a
// complaint lifecycle, not an application flow, and this page has no
// requirements, fees, obligations, classes or apply CTA. Forcing it
// through the regulation layout would re-drift `process` back to
// meaning "any sequence".
export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return { title: t(processTitle, lang), description: t(processIntro, lang) };
}

export default function ComplaintsProcessPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';

  return (
    <>
      <PageHeader
        kicker="NHPC Act Lr.31 · Article 17"
        title={t(processTitle, lang)}
        intro={t(processIntro, lang)}
      />

      <div className="mx-auto max-w-4xl px-4">
        <section className="py-10" aria-labelledby="stages-heading">
          <SectionBand id="stages-heading">
            {lang === 'so' ? 'Marxaladaha' : 'The stages'}
          </SectionBand>
          <div className="mt-5">
            <NumberedRows items={processStages} lang={lang} as="ol" />
          </div>
        </section>

        <section className="pb-10">
          <div className="border-l-[3px] border-nhpc-blue bg-nhpc-wash p-4">
            <p className="leading-relaxed text-slate-800">{t(damagesNotice, lang)}</p>
          </div>
        </section>

        {/* CTA — separated from the legal footer below. The two were fused
            here originally, which is why this page's footer did not match
            the other three. */}
        <section className="pb-2">
          <a
            href={COMPLAINT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-nhpc-blue transition-colors duration-150 hover:text-nhpc-dark"
          >
            {lang === 'so' ? 'Gudbi cabasho' : 'File a complaint'}
            <ArrowRight className="h-4 w-4 flex-none" aria-hidden="true" />
          </a>
        </section>

        <ActFooter
          articles={{
            en: 'Articles 17, 32(3), 40, 46 and 69',
            so: 'Qodobbada 17, 32(3), 40, 46 iyo 69',
          }}
          lang={lang}
        />
      </div>
    </>
  );
}
