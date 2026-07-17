import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, ArrowRight, Users } from 'lucide-react';
import { isLang, t, localizedHref } from '@/lib/i18n';
import type { Lang, NumberedItem } from '@/content/types';
import { PORTAL_URL } from '@/content/site';
import { sittings } from '@/content/examinations';
import PageHeader from '@/components/ui/PageHeader';
import ActFooter from '@/components/ui/ActFooter';
import EmptyState from '@/components/ui/EmptyState';
import SectionBand from '@/components/ui/SectionBand';
import NumberedRows from '@/components/ui/NumberedRows';
import CtaButton from '@/components/ui/CtaButton';

// Bespoke. Like /public/disciplinary this is mostly an empty table — but
// unlike it, this page hands off to the portal, has a status badge, and its
// deadlines are the thing candidates come for.
export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: lang === 'so' ? 'Imtixaanaadka' : 'Examinations',
    description:
      lang === 'so'
        ? 'Cidda imtixaan gasha, jadwalka imtixaanaadka, iyo sida loo diiwaangeliyo.'
        : 'Who must sit a council examination, the schedule, and how to register.',
  };
}

const whoMustSit: NumberedItem[] = [
  {
    title: { en: 'Anyone applying for registration', so: 'Qof kasta oo codsanaya diiwaangelin' },
    detail: {
      en: 'A prescribed interview and examination conducted by the Council are a registration requirement (Art. 26(1)(b)).',
      so: 'Wareysi iyo imtixaan la go’aamiyay oo uu Goluhu qabto waa shuruud diiwaangelin (Qodobka 26(1)(b)).',
    },
  },
  {
    title: {
      en: 'Provisional registrants moving to permanent registration',
      so: 'Kuwa diiwaangelinta ku-meel-gaadhka ah ee u gudbaya tan joogtada ah',
    },
    detail: {
      en: 'You must pass an examination assessing your ability to practise competently and safely (Art. 29(2)).',
      so: 'Waa inaad ka gudubtaa imtixaan qiimeeya awooddaada aad ku shaqeyn karto si karti iyo badqab leh (Qodobka 29(2)).',
    },
  },
  {
    title: { en: 'Anyone applying for re-registration', so: 'Qof kasta oo codsanaya dib-u-diiwaangelin' },
    detail: {
      en: 'A holder of a provisional certificate must pass the prescribed examination subjects to be re-registered (Art. 34(5)(a)(ii)).',
      so: 'Qofka haysta shahaado ku-meel-gaadh ah waa inuu ka gudbaa maadooyinka imtixaanka la go’aamiyay si dib loogu diiwaangeliyo (Qodobka 34(5)(a)(ii)).',
    },
  },
  {
    title: { en: 'Foreign-qualified practitioners', so: 'Mihnadlayaasha shahaadada dibadda' },
    detail: {
      en: 'Every foreign registration class requires the prescribed examination — full (Art. 36(1)(c)), temporary (Art. 37(2)(c)) and limited (Art. 38(1)(c)).',
      so: 'Nooc kasta oo diiwaangelin ajnabi ah wuxuu u baahan yahay imtixaanka la go’aamiyay — buuxda (Qodobka 36(1)(c)), ku-meel-gaadh (Qodobka 37(2)(c)) iyo xaddidan (Qodobka 38(1)(c)).',
    },
  },
];

export default function ExaminationsPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  const so = lang === 'so';

  const headings = {
    exam: so ? 'Imtixaanka' : 'Exam',
    cadre: so ? 'Heerka' : 'Cadre',
    date: so ? 'Taariikhda' : 'Date',
    deadline: so ? 'Xiritaanka diiwaangelinta' : 'Registration deadline',
    venue: so ? 'Goobta' : 'Venue',
    status: so ? 'Xaaladda' : 'Status',
  };
  const statusLabel = {
    open: so ? 'Furan' : 'Open',
    closed: so ? 'Xiran' : 'Closed',
  };

  return (
    <>
      <PageHeader
        kicker="NHPC Act Lr.31 · Article 17(1)(c)"
        title={so ? 'Imtixaanaadka' : 'Examinations'}
        intro={
          so
            ? 'Guddiga Qiimaynta Mihnadlayaasha Caafimaadka ayaa qabta imtixaanaadka Golaha. Imtixaanku waa shuruud diiwaangelin — ma jiro diiwaangelin la’aanteed.'
            : 'The Health Professionals Assessment Committee conducts the Council’s examinations. Passing one is a registration requirement — there is no registration without it.'
        }
      >
        <div className="mt-6">
          <CtaButton href={PORTAL_URL} variant="primary" external>
            {so ? 'Isu diiwaangeli imtixaan' : 'Register for an examination'}
            <ExternalLink className="h-4 w-4 flex-none" aria-hidden="true" />
            <span className="sr-only">{so ? '(wuxuu ku furmayaa tab cusub)' : '(opens in new tab)'}</span>
          </CtaButton>
        </div>
      </PageHeader>

      <div className="mx-auto max-w-4xl px-4">
        <section className="pt-10" aria-labelledby="who-heading">
          <SectionBand id="who-heading">
            {so ? 'Cidda imtixaan gasha' : 'Who must sit an examination'}
          </SectionBand>
          <div className="mt-5">
            <NumberedRows items={whoMustSit} lang={lang} as="ul" />
          </div>
        </section>

        {/* Schedule — launch-empty. */}
        <section className="pt-10" aria-labelledby="schedule-heading">
          <SectionBand id="schedule-heading">
            {so ? 'Jadwalka imtixaanaadka' : 'Examination schedule'}
          </SectionBand>

          {sittings.length === 0 ? (
            <div className="mt-5">
              <EmptyState
                lang={lang}
                heading={{
                  en: 'No examinations are scheduled yet.',
                  so: 'Ma jiraan imtixaanno la qorsheeyay weli.',
                }}
                body={{
                  en: 'When the Council schedules a sitting, it will be published here and announced in News & Notices.',
                  so: 'Marka Goluhu imtixaan qorsheeyo, halkan ayaa lagu daabici doonaa, waxaana lagu dhawaaqi doonaa Wararka & Ogeysiisyada.',
                }}
              />
            </div>
          ) : (
            <>
              <table className="mt-5 hidden w-full border-collapse text-sm sm:table">
                <thead>
                  <tr className="border-b border-nhpc-rule text-left">
                    <th className="py-2 pr-4 font-semibold text-nhpc-dark">{headings.exam}</th>
                    <th className="py-2 pr-4 font-semibold text-nhpc-dark">{headings.cadre}</th>
                    <th className="py-2 pr-4 font-semibold text-nhpc-dark">{headings.date}</th>
                    <th className="py-2 pr-4 font-semibold text-nhpc-dark">{headings.deadline}</th>
                    <th className="py-2 pr-4 font-semibold text-nhpc-dark">{headings.venue}</th>
                    <th className="py-2 font-semibold text-nhpc-dark">{headings.status}</th>
                  </tr>
                </thead>
                <tbody>
                  {sittings.map((s, i) => (
                    <tr key={i} className="border-b border-nhpc-rule align-top">
                      <td className="py-3 pr-4 font-semibold text-nhpc-dark">{t(s.exam, lang)}</td>
                      <td className="py-3 pr-4 text-slate-800">{t(s.cadre, lang)}</td>
                      <td className="py-3 pr-4 whitespace-nowrap text-slate-800">{s.date}</td>
                      <td className="py-3 pr-4 whitespace-nowrap font-semibold text-nhpc-dark">
                        {s.registrationDeadline}
                      </td>
                      <td className="py-3 pr-4 text-slate-800">{t(s.venue, lang)}</td>
                      <td className="py-3">
                        <span
                          className={[
                            'rounded px-1.5 py-0.5 text-xs font-semibold',
                            s.status === 'open'
                              ? 'border border-nhpc-rule bg-nhpc-wash text-nhpc-blue'
                              : 'bg-nhpc-red text-white',
                          ].join(' ')}
                        >
                          {statusLabel[s.status]}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <ul className="mt-5 space-y-3 sm:hidden">
                {sittings.map((s, i) => (
                  <li
                    key={i}
                    className={[
                      'rounded-lg border border-l-[3px] p-4',
                      s.status === 'open'
                        ? 'border-nhpc-rule border-l-nhpc-red'
                        : 'border-nhpc-rule border-l-nhpc-rule',
                    ].join(' ')}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold text-nhpc-dark">{t(s.exam, lang)}</p>
                      <span
                        className={[
                          'flex-none rounded px-1.5 py-0.5 text-xs font-semibold',
                          s.status === 'open'
                            ? 'border border-nhpc-rule bg-nhpc-wash text-nhpc-blue'
                            : 'bg-nhpc-red text-white',
                        ].join(' ')}
                      >
                        {statusLabel[s.status]}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-nhpc-grey">{t(s.cadre, lang)}</p>
                    <p className="mt-2 text-sm text-slate-800">
                      <span className="text-nhpc-grey">{headings.date}: </span>
                      {s.date}
                    </p>
                    <p className="mt-1 text-sm text-slate-800">
                      <span className="text-nhpc-grey">{headings.deadline}: </span>
                      <span className="font-semibold text-nhpc-dark">{s.registrationDeadline}</span>
                    </p>
                    <p className="mt-1 text-sm text-slate-800">
                      <span className="text-nhpc-grey">{headings.venue}: </span>
                      {t(s.venue, lang)}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>

        {/* Past papers / syllabus — not published. Say so. */}
        <section className="pt-10" aria-labelledby="papers-heading">
          <SectionBand id="papers-heading">
            {so ? 'Manhajka iyo imtixaannadii hore' : 'Syllabus and past papers'}
          </SectionBand>
          <div className="mt-5 border-l-[3px] border-nhpc-blue bg-nhpc-wash p-4">
            <p className="leading-relaxed text-slate-800">
              {so
                ? 'Manhajka imtixaanka iyo imtixaannadii hore weli lama daabicin. Marka la daabaco, waxaa laga heli doonaa Kheyraadka.'
                : 'The examination syllabus and past papers have not been published yet. When they are, they will be available from Resources.'}
            </p>
            <Link
              href={localizedHref('/resources', lang)}
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-nhpc-blue transition-colors duration-150 hover:text-nhpc-dark"
            >
              {so ? 'Eeg Kheyraadka' : 'Go to Resources'}
              <ArrowRight className="h-4 w-4 flex-none" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Results */}
        <section className="pt-10" aria-labelledby="results-heading">
          <SectionBand id="results-heading">{so ? 'Natiijooyinka' : 'Results'}</SectionBand>
          <div className="mt-5 flex gap-3 border-l-[3px] border-nhpc-blue bg-nhpc-wash p-4">
            <Users className="mt-0.5 h-5 w-5 flex-none text-nhpc-blue" aria-hidden="true" />
            <div>
              <p className="leading-relaxed text-slate-800">
                {so
                  ? 'Natiijooyinka waxaa lagu daabacaa ogeysiis rasmi ah. Natiijo shaqsiyeed lagama siiyo taleefanka.'
                  : 'Results are published as an official notice. Individual results are not given over the phone.'}
              </p>
              <Link
                href={localizedHref('/news', lang)}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-nhpc-blue transition-colors duration-150 hover:text-nhpc-dark"
              >
                {so ? 'Wararka & Ogeysiisyada' : 'News & Notices'}
                <ArrowRight className="h-4 w-4 flex-none" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <ActFooter
          articles={{
            en: 'Articles 17(1)(c), 26, 29, 34 and 36–38',
            so: 'Qodobbada 17(1)(c), 26, 29, 34 iyo 36–38',
          }}
          lang={lang}
        />
      </div>
    </>
  );
}
