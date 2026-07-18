import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { isLang, t, localizedHref } from '@/lib/i18n';
import type { Lang, NumberedItem } from '@/content/types';
import { cpdProviders } from '@/content/cpd';
import PageHeader from '@/components/ui/PageHeader';
import ActFooter from '@/components/ui/ActFooter';
import SectionBand from '@/components/ui/SectionBand';
import EmptyState from '@/components/ui/EmptyState';
import NumberedRows from '@/components/ui/NumberedRows';

// Bespoke. Not a RegulationPageLayout: there is nothing to apply for and
// nothing to submit — CPD is a condition attached to renewal, and the page
// that owns that flow is /professionals/renew.
//
// The Act establishes THAT CPD is required. It does not set a points figure,
// a cycle, or the categories that count, and the Council has not published
// them. Every one of those sections launches empty and says so. A professional
// who plans a year of study around a number we guessed and then fails renewal
// was harmed by this website.
export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: lang === 'so' ? 'Horumarinta Mihnadeed (CPD)' : 'Continuing Professional Development (CPD)',
    description:
      lang === 'so'
        ? 'CPD waa shuruud loogu baahan yahay cusbooneysiinta shatiga iyo dib-u-diiwaangelinta. Shuruudaha dhibcaha weli lama daabicin.'
        : 'CPD is a requirement for licence renewal and re-registration. The points requirement is not yet published.',
  };
}

const whereRequired: NumberedItem[] = [
  {
    title: {
      en: 'Every licence renewal',
      so: 'Cusbooneysiin kasta oo shati ah',
    },
    detail: {
      en: 'Continuing professional development is one of the standing requirements the Secretary General verifies before your licence is renewed (Art. 44(2)(c), 44(3)).',
      so: 'Horumarinta mihnadeed ee joogtada ah waa mid ka mid ah shuruudaha joogtada ah ee uu Xoghayaha Guud xaqiijiyo ka hor inta aan shatigaaga la cusbooneysiin (Qodobka 44(2)(c), 44(3)).',
    },
  },
  {
    title: {
      en: 'Re-registration',
      so: 'Dib-u-diiwaangelinta',
    },
    detail: {
      en: 'An applicant for re-registration must show evidence of continuing professional development (Art. 34(5)(b)(i)).',
      so: 'Codsadaha dib-u-diiwaangelinta waa inuu soo bandhigaa caddeyn ku saabsan horumarinta mihnadeed ee joogtada ah (Qodobka 34(5)(b)(i)).',
    },
  },
  {
    title: {
      en: 'As a duty of professional conduct',
      so: 'Waajib anshaxa mihnadeed ah',
    },
    detail: {
      en: 'The Code of Conduct requires every registered professional to keep their knowledge and skills current, independently of any renewal deadline.',
      so: 'Xeerka Anshax Wanaaggu wuxuu ka doonayaa mihnadle kasta oo diiwaangashan inuu aqoontiisa iyo xirfaddiisa ku hayo waqtiga, iyadoo aan loo eegayn wakhtiga cusbooneysiinta.',
    },
  },
];

export default function CpdPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  const so = lang === 'so';

  const headings = {
    provider: so ? 'Bixiyaha' : 'Provider',
    scope: so ? 'Baaxadda aqoonsiga' : 'Accredited scope',
    ref: so ? 'Tixraaca' : 'Reference',
    validUntil: so ? 'Ilaa' : 'Valid until',
  };

  return (
    <>
      <PageHeader
        kicker="NHPC Act Lr.31 · Articles 34(5)(b)(i), 44(2)(c)"
        title={so ? 'Horumarinta Mihnadeed (CPD)' : 'Continuing Professional Development (CPD)'}
        intro={
          so
            ? 'Waxbarashada joogtada ahi waa shuruud lagaa doonayo mar kasta oo aad cusbooneysanayso shatigaaga ama dib-u-diiwaangelin codsanayso. Sharcigu wuxuu dhigayaa in CPD looga baahan yahay — ma cayimin tirada dhibcaha, taasna weli Goluhu ma daabicin.'
            : 'Continuing education is a requirement every time you renew your licence or apply for re-registration. The Act establishes that CPD is required — it does not set a number of points, and the Council has not yet published one.'
        }
      />

      <div className="mx-auto max-w-4xl px-4">
        <section className="pt-10" aria-labelledby="where-heading">
          <SectionBand id="where-heading">
            {so ? 'Halka CPD looga baahan yahay' : 'Where CPD is required'}
          </SectionBand>
          <div className="mt-5">
            <NumberedRows items={whereRequired} lang={lang} as="ul" />
          </div>
        </section>

        {/* Points requirement — the Council has not set one. Say so plainly. */}
        <section className="pt-10" aria-labelledby="points-heading">
          <SectionBand id="points-heading">
            {so ? 'Shuruudaha dhibcaha iyo wareegga' : 'Points requirement and cycle'}
          </SectionBand>
          <div className="mt-5">
            <EmptyState
              lang={lang}
              heading={{
                en: 'The Council has not published a points requirement.',
                so: 'Goluhu ma daabicin shuruud dhibco ah.',
              }}
              body={{
                en: 'The number of CPD points required, the length of the cycle, and how points are counted will be published here and announced in News & Notices. Until then, keep your own records of the training you complete — renewal asks for evidence of CPD (Art. 44(2)(c)).',
                so: 'Tirada dhibcaha CPD ee loo baahan yahay, dhererka wareegga, iyo sida dhibcaha loo tiriyo halkan ayaa lagu daabici doonaa, waxaana lagu dhawaaqi doonaa Wararka & Ogeysiisyada. Ilaa intaas, diiwaan ka hay tababarrada aad dhammeysato — cusbooneysiintu waxay doonaysaa caddeyn CPD (Qodobka 44(2)(c)).',
              }}
            />
          </div>
        </section>

        {/* What counts — not published either. */}
        <section className="pt-10" aria-labelledby="counts-heading">
          <SectionBand id="counts-heading">
            {so ? 'Waxa la tiriyo' : 'What counts as CPD'}
          </SectionBand>
          <div className="mt-5">
            <EmptyState
              lang={lang}
              heading={{
                en: 'The categories of activity that count have not been published.',
                so: 'Noocyada waxqabadka la tiriyo weli lama daabicin.',
              }}
              body={{
                en: 'The Council has not yet set out which activities count towards CPD or how each is weighted. This page will list them once it does.',
                so: 'Goluhu weli ma cayimin waxqabadyada CPD loo tiriyo ama sida mid kasta loo qiimeeyo. Boggani wuxuu taxi doonaa marka la cayimo.',
              }}
            />
          </div>
        </section>

        {/* Accredited providers — empty table. */}
        <section className="pt-10" aria-labelledby="providers-heading">
          <SectionBand id="providers-heading">
            {so ? 'Bixiyayaasha CPD ee la aqoonsaday' : 'Accredited CPD providers'}
          </SectionBand>

          {cpdProviders.length === 0 ? (
            <div className="mt-5">
              <EmptyState
                lang={lang}
                heading={{
                  en: 'No CPD providers have been accredited yet.',
                  so: 'Ma jiraan bixiyayaal CPD ah oo la aqoonsaday weli.',
                }}
                body={{
                  en: 'When the Council accredits a provider, it will be listed here. Treat any claim of NHPC accreditation that does not appear on this page as unverified.',
                  so: 'Marka Goluhu bixiye aqoonsado, halkan ayaa lagu taxi doonaa. Sheegasho kasta oo aqoonsi NHPC ah oo aan boggan ku qorneyn u qaado mid aan la xaqiijin.',
                }}
              />
            </div>
          ) : (
            <>
              <table className="mt-5 hidden w-full border-collapse text-sm sm:table">
                <thead>
                  <tr className="border-b border-nhpc-rule text-left">
                    <th className="py-2 pr-4 font-semibold text-nhpc-dark">{headings.provider}</th>
                    <th className="py-2 pr-4 font-semibold text-nhpc-dark">{headings.scope}</th>
                    <th className="py-2 pr-4 font-semibold text-nhpc-dark">{headings.ref}</th>
                    <th className="py-2 font-semibold text-nhpc-dark">{headings.validUntil}</th>
                  </tr>
                </thead>
                <tbody>
                  {cpdProviders.map((p) => (
                    <tr key={p.ref} className="border-b border-nhpc-rule align-top">
                      <td className="py-3 pr-4 font-semibold text-nhpc-dark">{t(p.name, lang)}</td>
                      <td className="py-3 pr-4 text-slate-800">{t(p.scope, lang)}</td>
                      <td className="py-3 pr-4 whitespace-nowrap text-nhpc-grey">{p.ref}</td>
                      <td className="py-3 whitespace-nowrap text-slate-800">{p.validUntil}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <ul className="mt-5 space-y-3 sm:hidden">
                {cpdProviders.map((p) => (
                  <li
                    key={p.ref}
                    className="rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-blue p-4"
                  >
                    <p className="font-semibold text-nhpc-dark">{t(p.name, lang)}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-800">{t(p.scope, lang)}</p>
                    <p className="mt-2 text-sm text-nhpc-grey">
                      {headings.ref}: {p.ref}
                    </p>
                    <p className="mt-1 text-sm text-slate-800">
                      <span className="text-nhpc-grey">{headings.validUntil}: </span>
                      {p.validUntil}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="mt-5 border-l-[3px] border-nhpc-red bg-nhpc-wash p-4">
            <p className="leading-relaxed text-slate-800">
              {so
                ? 'Digniin: NHPC marnaba kuma codsado lacag ku bixi akoon shakhsi ah. Haddii qof kuu sheego inuu ka iibin karo dhibco CPD ah ama shahaado ku siin karo lacag, taasi waa khiyaano.'
                : 'Warning: NHPC never requests payment via personal accounts. Anyone offering to sell you CPD points, or to issue a certificate for a fee, is defrauding you.'}
            </p>
          </div>
          <Link
            href={localizedHref('/public/report-fraud', lang)}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-nhpc-blue transition-colors duration-150 hover:text-nhpc-dark"
          >
            {so ? 'Soo sheeg khiyaano' : 'Report fraud'}
            <ArrowRight className="h-4 w-4 flex-none" aria-hidden="true" />
          </Link>
        </section>

        {/* Where CPD actually bites. */}
        <section className="pt-10" aria-labelledby="renew-heading">
          <SectionBand id="renew-heading">
            {so ? 'CPD iyo cusbooneysiinta shatiga' : 'CPD and licence renewal'}
          </SectionBand>
          <div className="mt-5 border-l-[3px] border-nhpc-blue bg-nhpc-wash p-4">
            <p className="leading-relaxed text-slate-800">
              {so
                ? 'CPD ma aha codsi gooni ah — waa shuruud ku xidhan cusbooneysiinta shatigaaga. Shatiga aan la cusbooneysiin ma ansax aha, ka-shaqayntuna waa dembi (Qodobka 44(7), 44(8)).'
                : 'CPD is not a separate application — it is a condition attached to renewing your licence. A licence that has not been renewed is not valid, and practising on one is an offence (Art. 44(7), 44(8)).'}
            </p>
            <Link
              href={localizedHref('/professionals/renew', lang)}
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-nhpc-blue transition-colors duration-150 hover:text-nhpc-dark"
            >
              {so ? 'Cusbooneysiinta Shatiga' : 'Licence Renewal'}
              <ArrowRight className="h-4 w-4 flex-none" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <ActFooter
          articles={{
            en: 'Articles 34(5)(b)(i) and 44',
            so: 'Qodobbada 34(5)(b)(i) iyo 44',
          }}
          lang={lang}
        />
      </div>
    </>
  );
}
