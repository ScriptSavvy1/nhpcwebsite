import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { isLang, t, localizedHref } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import { outcomes } from '@/content/disciplinary';
import PageHeader from '@/components/ui/PageHeader';
import ActFooter from '@/components/ui/ActFooter';
import EmptyState from '@/components/ui/EmptyState';
import SectionBand from '@/components/ui/SectionBand';

// Bespoke page. Deliberately unlike /public/verify: nothing to apply for,
// no portal handoff, no CTA. Its whole substance is a table that is
// currently empty — and saying so honestly.
export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: lang === 'so' ? 'Go’aannada Edbinta' : 'Disciplinary Outcomes',
    description:
      lang === 'so'
        ? 'Go’aannada edbinta ee Golaha daabacay. Magacyada dadka cabanaya marnaba lama daabaco.'
        : 'Disciplinary decisions published by the Council. Complainants are never named.',
  };
}

const typeLabel: Record<
  'professional' | 'facility' | 'institution',
  { en: string; so: string }
> = {
  professional: { en: 'Health professional', so: 'Mihnadle caafimaad' },
  facility: { en: 'Health facility', so: 'Xarun caafimaad' },
  institution: { en: 'Education institution', so: 'Machad waxbarasho' },
};

export default function DisciplinaryPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  const so = lang === 'so';

  const headings = {
    date: so ? 'Taariikhda' : 'Date',
    subject: so ? 'Cidda go’aanku khuseeyo' : 'Subject',
    type: so ? 'Nooca' : 'Type',
    finding: so ? 'Go’aanka la gaadhay' : 'Finding',
    sanction: so ? 'Ciqaabta' : 'Sanction',
    article: so ? 'Qodobka' : 'Act article',
  };

  return (
    <>
      <PageHeader
        kicker={so ? 'Dadweynaha' : 'For the public'}
        title={so ? 'Go’aannada Edbinta' : 'Disciplinary Outcomes'}
        intro={
          so
            ? 'Marka Goluhu go’aan edbin gaadho, halkan ayaa lagu daabacaa. Daabacaaddu waxay dadweynaha u sheegaysaa in xeerarku shaqeeyaan.'
            : 'When the Council reaches a disciplinary decision, it is published here. Publishing outcomes is how the public can see that the rules are enforced.'
        }
      />

      <div className="mx-auto max-w-4xl px-4">
        {/* The privacy guarantee, stated before the table — it is the
            reason someone feels safe complaining in the first place. */}
        <section className="pt-10">
          <div className="flex gap-3 border-l-[3px] border-nhpc-blue bg-nhpc-wash p-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-nhpc-blue" aria-hidden="true" />
            <p className="leading-relaxed text-slate-800">
              {so
                ? 'Magaca qofka cabashada gudbiyay marnaba lama daabaco. Waxaa keliya la magacaabaa cidda go’aanku khuseeyo.'
                : 'The name of the person who complained is never published. Only the subject of the decision is named.'}
            </p>
          </div>
        </section>

        <section className="pt-10" aria-labelledby="outcomes-heading">
          <SectionBand id="outcomes-heading">
            {so ? 'Go’aannada la daabacay' : 'Published decisions'}
          </SectionBand>

          {outcomes.length === 0 ? (
            // Launch-empty, said plainly. No invented cases.
            <div className="mt-5">
              <EmptyState
                lang={lang}
                heading={{
                  en: 'No decisions have been published yet.',
                  so: 'Ma jiraan go’aamo la daabacay weli.',
                }}
                body={{
                  en: 'When the Council reaches a decision, it will be published here.',
                  so: 'Marka Goluhu go’aan gaadho, halkan ayaa lagu daabici doonaa.',
                }}
              />
            </div>
          ) : (
            <>
              {/* Table ≥640px */}
              <table className="mt-5 hidden w-full border-collapse text-sm sm:table">
                <thead>
                  <tr className="border-b border-nhpc-rule text-left">
                    <th className="py-2 pr-4 font-semibold text-nhpc-dark">{headings.date}</th>
                    <th className="py-2 pr-4 font-semibold text-nhpc-dark">{headings.subject}</th>
                    <th className="py-2 pr-4 font-semibold text-nhpc-dark">{headings.type}</th>
                    <th className="py-2 pr-4 font-semibold text-nhpc-dark">{headings.finding}</th>
                    <th className="py-2 pr-4 font-semibold text-nhpc-dark">{headings.sanction}</th>
                    <th className="py-2 font-semibold text-nhpc-dark">{headings.article}</th>
                  </tr>
                </thead>
                <tbody>
                  {outcomes.map((o, i) => (
                    <tr key={i} className="border-b border-nhpc-rule align-top">
                      <td className="py-3 pr-4 whitespace-nowrap text-slate-800">{o.date}</td>
                      <td className="py-3 pr-4 font-semibold text-nhpc-dark">{t(o.subjectName, lang)}</td>
                      <td className="py-3 pr-4 text-nhpc-grey">{t(typeLabel[o.subjectType], lang)}</td>
                      <td className="py-3 pr-4 text-slate-800">{t(o.finding, lang)}</td>
                      <td className="py-3 pr-4 text-slate-800">{t(o.sanction, lang)}</td>
                      <td className="py-3 font-semibold text-nhpc-dark whitespace-nowrap">
                        {t(o.article, lang)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Cards <640px */}
              <ul className="mt-5 space-y-3 sm:hidden">
                {outcomes.map((o, i) => (
                  <li key={i} className="rounded-lg border border-nhpc-rule p-4">
                    <p className="text-xs text-nhpc-grey">
                      {o.date} · {t(typeLabel[o.subjectType], lang)}
                    </p>
                    <p className="mt-1 font-semibold text-nhpc-dark">{t(o.subjectName, lang)}</p>
                    <p className="mt-2 text-sm text-slate-800">
                      <span className="text-nhpc-grey">{headings.finding}: </span>
                      {t(o.finding, lang)}
                    </p>
                    <p className="mt-1 text-sm text-slate-800">
                      <span className="text-nhpc-grey">{headings.sanction}: </span>
                      {t(o.sanction, lang)}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-nhpc-dark">{t(o.article, lang)}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
        <ActFooter
          articles={{ en: "Articles 17(1)(b), 32, 40, 46 and 69", so: "Qodobbada 17(1)(b), 32, 40, 46 iyo 69" }}
          lang={lang}
        />
      </div>
    </>
  );
}
