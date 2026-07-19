import { Check, ExternalLink, Scale } from 'lucide-react';
import type { Lang, RegulationContent } from '@/content/types';
import { t } from '@/lib/i18n';
import { REGISTER_URL } from '@/content/site';
import { documentById } from '@/content/documents';
import SectionBand from '@/components/ui/SectionBand';
import NumberedRows from '@/components/ui/NumberedRows';
import DocumentCard from '@/components/ui/DocumentCard';
import CtaButton from '@/components/ui/CtaButton';
import ActFooter from '@/components/ui/ActFooter';

// The single reusable regulation layout. Every regulation page renders
// this with a different `content` object — no JSX is copied per page.
export default function RegulationPageLayout({
  content,
  lang,
}: {
  content: RegulationContent;
  lang: Lang;
}) {
  const docs = content.documentIds
    .map((id) => documentById(id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  const applyLabel = content.applyLabel
    ? t(content.applyLabel, lang)
    : lang === 'so'
      ? 'Codso Online'
      : 'Apply Online';

  // The Apply CTA exists only where there is an application flow. A page you
  // cannot apply to — an inspection regime you are simply subject to — must
  // never show an "Apply Online" button.
  const hasApplication = Boolean(content.process && content.process.length > 0);

  const hasFeeNotes = Boolean(content.fees?.some((f) => f.note));
  const amountHeading = lang === 'so' ? 'Qadarka' : 'Amount';

  return (
    <>
      {/* a. Page header */}
      <section className="border-b border-nhpc-rule bg-nhpc-wash">
        <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-wide text-nhpc-blue">
            {content.docRef}
          </p>
          <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-nhpc-dark md:text-4xl">
            {t(content.title, lang)}
          </h1>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate-800">{t(content.intro, lang)}</p>
          {hasApplication && (
            <div className="mt-6">
              <CtaButton href={REGISTER_URL} variant="primary" external>
                {applyLabel}
                <ExternalLink className="h-4 w-4 flex-none" aria-hidden="true" />
                <span className="sr-only">
                  {lang === 'so' ? '(wuxuu ku furmayaa tab cusub)' : '(opens in new tab)'}
                </span>
              </CtaButton>
            </div>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4">
        {/* b. Who this applies to */}
        <section className="py-10" aria-labelledby="who-heading">
          <h2 id="who-heading" className="text-xl font-bold tracking-tight text-nhpc-dark">
            {lang === 'so' ? 'Yaa khuseeya' : 'Who this applies to'}
          </h2>
          <ul className="mt-4 space-y-2.5">
            {content.whoApplies.map((point, i) => (
              <li key={i} className="flex gap-2.5">
                <Check className="mt-1 h-4 w-4 flex-none text-nhpc-blue" aria-hidden="true" />
                <span className="leading-relaxed text-slate-800">{t(point, lang)}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* b2. Registration classes — PARALLEL variants, never a sequence */}
        {content.classes && content.classes.length > 0 && (
          <section className="pb-10" aria-labelledby="classes-heading">
            <SectionBand id="classes-heading">
              {lang === 'so' ? 'Noocyada diiwaangelinta' : 'Registration classes'}
            </SectionBand>

            {/* Comparison table ≥640px */}
            <table className="mt-5 hidden w-full border-collapse text-sm sm:table">
              <thead>
                <tr className="border-b border-nhpc-rule text-left">
                  <th className="py-2 pr-4 font-semibold text-nhpc-dark">
                    {lang === 'so' ? 'Nooca' : 'Class'}
                  </th>
                  <th className="py-2 pr-4 font-semibold text-nhpc-dark">
                    {lang === 'so' ? 'Yaa loogu talagalay' : 'Who it’s for'}
                  </th>
                  <th className="py-2 pr-4 font-semibold text-nhpc-dark">
                    {lang === 'so' ? 'Muddada ugu badan' : 'Maximum duration'}
                  </th>
                  <th className="py-2 font-semibold text-nhpc-dark">
                    {lang === 'so' ? 'Shuruudaha' : 'Conditions'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.classes.map((c, i) => (
                  <tr key={i} className="border-b border-nhpc-rule align-top">
                    <td className="py-3 pr-4 font-semibold text-nhpc-dark">{t(c.name, lang)}</td>
                    <td className="py-3 pr-4 text-slate-800">{t(c.whoItsFor, lang)}</td>
                    <td className="py-3 pr-4 font-semibold text-nhpc-dark">{t(c.cap, lang)}</td>
                    <td className="py-3 text-nhpc-grey">
                      <ul className="list-disc space-y-1 pl-4">
                        {c.conditions.map((cond, j) => (
                          <li key={j}>{t(cond, lang)}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Comparison cards <640px */}
            <ul className="mt-5 space-y-3 sm:hidden">
              {content.classes.map((c, i) => (
                <li
                  key={i}
                  className="rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-blue p-4"
                >
                  <p className="font-semibold text-nhpc-dark">{t(c.name, lang)}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-800">
                    {t(c.whoItsFor, lang)}
                  </p>
                  <p className="mt-2 text-sm">
                    <span className="text-nhpc-grey">
                      {lang === 'so' ? 'Muddada ugu badan' : 'Maximum duration'}:{' '}
                    </span>
                    <span className="font-semibold text-nhpc-dark">{t(c.cap, lang)}</span>
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-nhpc-grey">
                    {c.conditions.map((cond, j) => (
                      <li key={j}>{t(cond, lang)}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Key legal facts — surfaced prominently */}
        <section className="pb-10" aria-labelledby="facts-heading">
          <div className="border-l-[3px] border-nhpc-blue bg-nhpc-wash px-4 py-4">
            <h2
              id="facts-heading"
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-nhpc-dark"
            >
              <Scale className="h-4 w-4 flex-none text-nhpc-blue" aria-hidden="true" />
              {lang === 'so' ? 'Xaqiiqooyin sharci oo muhiim ah' : 'Key legal facts'}
            </h2>
            <dl className="mt-3 space-y-2.5">
              {content.keyFacts.map((fact, i) => (
                <div key={i} className="text-sm leading-relaxed">
                  <dt className="inline font-semibold text-nhpc-dark">{t(fact.ref, lang)} — </dt>
                  <dd className="inline text-slate-800">{t(fact.text, lang)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* c. Requirements — omitted where there is nothing to submit */}
        {content.requirements && content.requirements.length > 0 && (
          <section className="pb-10" aria-labelledby="req-heading">
            <SectionBand id="req-heading">
              {lang === 'so' ? 'Shuruudaha loo baahan yahay' : 'Required documents'}
            </SectionBand>
            <div className="mt-5">
              <NumberedRows items={content.requirements} lang={lang} as="ol" />
            </div>
          </section>
        )}

        {/* d. Process — omitted where the page is a regime, not an application */}
        {hasApplication && (
          <section className="pb-10" aria-labelledby="process-heading">
            <SectionBand id="process-heading">
              {lang === 'so' ? 'Habka codsiga' : 'The process'}
            </SectionBand>
            <div className="mt-5">
              <NumberedRows items={content.process!} lang={lang} as="ol" />
            </div>
          </section>
        )}

        {/* d2. Ongoing obligations — what you must keep doing while registered */}
        {content.obligations && content.obligations.length > 0 && (
          <section className="pb-10" aria-labelledby="obligations-heading">
            <SectionBand id="obligations-heading">
              {lang === 'so'
                ? 'Ka dib diiwaangelinta — Waajibaadka joogtada ah'
                : 'After registration — Ongoing obligations'}
            </SectionBand>
            <div className="mt-5">
              <NumberedRows items={content.obligations} lang={lang} as="ul" />
            </div>
          </section>
        )}

        {/* e. Fees — omitted where the Act authorises no fee */}
        {content.fees && content.fees.length > 0 && (
          <section className="pb-10" aria-labelledby="fees-heading">
            <SectionBand id="fees-heading">{lang === 'so' ? 'Khidmadaha' : 'Fees'}</SectionBand>

            {/* Table ≥640px */}
            <table className="mt-5 hidden w-full border-collapse text-sm sm:table">
              <thead>
                <tr className="border-b border-nhpc-rule text-left">
                  <th className="py-2 pr-4 font-semibold text-nhpc-dark">
                    {lang === 'so' ? 'Adeeg' : 'Item'}
                  </th>
                  <th className="py-2 pr-4 font-semibold text-nhpc-dark">{amountHeading}</th>
                  {hasFeeNotes && (
                    <th className="py-2 font-semibold text-nhpc-dark">
                      {lang === 'so' ? 'Fiiro' : 'Note'}
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {content.fees.map((fee, i) => (
                  <tr key={i} className="border-b border-nhpc-rule">
                    <td className="py-2.5 pr-4 text-slate-800">{t(fee.item, lang)}</td>
                    <td className="py-2.5 pr-4 font-semibold text-nhpc-dark">
                      {t(fee.amount, lang)}
                    </td>
                    {hasFeeNotes && (
                      <td className="py-2.5 text-nhpc-grey">{fee.note ? t(fee.note, lang) : '—'}</td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Cards <640px */}
            <ul className="mt-5 space-y-3 sm:hidden">
              {content.fees.map((fee, i) => (
                <li key={i} className="rounded-lg border border-nhpc-rule p-4">
                  <p className="font-semibold text-nhpc-dark">{t(fee.item, lang)}</p>
                  <p className="mt-1 text-sm text-nhpc-grey">
                    {amountHeading}:{' '}
                    <span className="font-semibold text-nhpc-dark">{t(fee.amount, lang)}</span>
                  </p>
                  {fee.note && <p className="mt-1 text-sm text-nhpc-grey">{t(fee.note, lang)}</p>}
                </li>
              ))}
            </ul>

            {content.feesNote && (
              <p className="mt-3 text-xs leading-relaxed text-nhpc-grey">
                {t(content.feesNote, lang)}
              </p>
            )}
          </section>
        )}

        {/* f. Documents & Forms */}
        {docs.length > 0 && (
          <section className="pb-10" aria-labelledby="docs-heading">
            <SectionBand id="docs-heading">
              {lang === 'so' ? 'Dukumiintiga & Foomamka' : 'Documents & Forms'}
            </SectionBand>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {docs.map((doc) => (
                <DocumentCard key={doc.id} doc={doc} lang={lang} />
              ))}
            </div>
          </section>
        )}

        {/* g. FAQ — native <details>, no JS */}
        {content.faqs.length > 0 && (
          <section className="pb-10" aria-labelledby="faq-heading">
            <SectionBand id="faq-heading">
              {lang === 'so' ? 'Su’aalaha badanaa la weydiiyo' : 'Frequently asked questions'}
            </SectionBand>
            <div className="mt-5 divide-y divide-nhpc-rule border-y border-nhpc-rule">
              {content.faqs.map((faq, i) => (
                <details key={i} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 font-semibold text-nhpc-dark marker:content-none">
                    <span>{t(faq.question, lang)}</span>
                    <span
                      aria-hidden="true"
                      className="flex-none text-nhpc-blue transition-transform duration-150 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-4 leading-relaxed text-slate-800">{t(faq.answer, lang)}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* h. Apply CTA — only where there is something to apply for */}
        {hasApplication && (
        <section className="pb-10" aria-labelledby="apply-heading">
          <div className="rounded-lg border border-nhpc-rule bg-nhpc-wash p-6 text-center">
            <h2 id="apply-heading" className="text-xl font-bold tracking-tight text-nhpc-dark">
              {lang === 'so' ? 'Diyaar ma u tahay inaad codsato?' : 'Ready to apply?'}
            </h2>
            {content.applyNote && (
              <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-nhpc-grey">
                {t(content.applyNote, lang)}
              </p>
            )}
            <div className="mt-5 flex justify-center">
              <CtaButton href={REGISTER_URL} variant="primary" external>
                {applyLabel}
                <ExternalLink className="h-4 w-4 flex-none" aria-hidden="true" />
                <span className="sr-only">
                  {lang === 'so' ? '(wuxuu ku furmayaa tab cusub)' : '(opens in new tab)'}
                </span>
              </CtaButton>
            </div>
          </div>
        </section>
        )}

        {/* i. Legal footer */}
        <ActFooter articles={content.governingArticles} lang={lang} />
      </div>
    </>
  );
}
