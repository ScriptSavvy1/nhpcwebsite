import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Scale, Users, FileText, MinusCircle } from 'lucide-react';
import { isLang, t, localizedHref } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import { orgName, missionShort } from '@/content/site';
import { mandates, notOurRole } from '@/content/about';
import PageHeader from '@/components/ui/PageHeader';
import ActFooter from '@/components/ui/ActFooter';
import SectionBand from '@/components/ui/SectionBand';

// The About hub. Two jobs: say what the Council is for (Art. 10), and say
// plainly what it is NOT for — the second is what stops a frightened patient
// wasting a week on the wrong institution.
export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: lang === 'so' ? 'Ku Saabsan NHPC' : 'About NHPC',
    description: t(missionShort, lang),
  };
}

export default function AboutPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  const so = lang === 'so';

  const sections = [
    {
      href: '/about/council',
      icon: Users,
      title: { en: 'The Council', so: 'Golaha' },
      desc: {
        en: 'The fifteen seats fixed by Article 3, who is represented, and the rules members serve under.',
        so: 'Shanta iyo tobanka kursi ee uu Qodobka 3aad go’aamiyay, cidda matalaad leh, iyo xeerarka ay xubnuhu ku shaqeeyaan.',
      },
    },
    {
      href: '/about/secretariat',
      icon: Users,
      title: { en: 'Secretariat & Committees', so: 'Xoghaynta iyo Guddiyada' },
      desc: {
        en: 'The day-to-day arm of the Council, and the three special committees under Article 17.',
        so: 'Cutubka maalin-kasta u shaqeeya Golaha, iyo saddexda guddi ee gaarka ah ee Qodobka 17aad.',
      },
    },
    {
      href: '/about/act',
      icon: FileText,
      title: { en: 'NHPC Act Lr.31', so: 'Sharciga NHPC Lr.31' },
      desc: {
        en: 'The law the Council operates under. An overview, and the full text to download.',
        so: 'Sharciga uu Goluhu ku shaqeeyo. Soo koobid, iyo qoraalka oo dhammeystiran oo la soo dejisan karo.',
      },
    },
  ];

  return (
    <>
      <PageHeader
        kicker="NHPC Act Lr.31 · Articles 1 and 10"
        title={so ? 'Ku Saabsan NHPC' : 'About NHPC'}
        intro={t(missionShort, lang)}
      />

      <div className="mx-auto max-w-4xl px-4">
        {/* Independence is the trust proposition — Art 1(1) says it outright. */}
        <div className="mt-8 flex gap-3 border-l-[3px] border-nhpc-blue bg-nhpc-wash p-4">
          <Scale className="mt-0.5 h-5 w-5 flex-none text-nhpc-blue" aria-hidden="true" />
          <p className="leading-relaxed text-slate-800">
            {so
              ? `${t(orgName, 'so')} waa gole madax-bannaan oo leh maqaam sharci markuu fulinayo waajibaadkiisa (Qodobka 1aad (1)). Wuxuu u jiraa inuu dadweynaha ka ilaaliyo waxyeellada ka dhalan karta xad-gudubka caafimaad — ma aha inuu mihnadlayaasha u doodo.`
              : `The ${t(orgName, 'en')} is an independent council with legal status in the execution of its mandate (Art. 1(1)). It exists to protect the public from harm arising from medical malpractice — not to advocate for professionals.`}
          </p>
        </div>

        <section className="pt-10" aria-labelledby="mandate-heading">
          <SectionBand id="mandate-heading">
            {so ? 'Waajibaadka iyo hawlaha Golaha' : 'What the Council does'}
          </SectionBand>
          <p className="mt-4 leading-relaxed text-nhpc-grey">
            {so
              ? 'Qodobka 10aad ayaa qeexaya waajibaadka iyo hawlaha NHPC. Kuwan waa soo koobid — qoraalka sharcigu waa isha rasmiga ah.'
              : 'Article 10 sets out the NHPC’s mandate and functions. These are summarised — the text of the Act governs.'}
          </p>
          <ul className="mt-5 space-y-2.5">
            {mandates.map((m) => (
              <li key={m.en} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-nhpc-blue"
                  aria-hidden="true"
                />
                <span className="leading-relaxed text-slate-800">{t(m, lang)}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* The boundary. Just as important as the mandate. */}
        <section className="pt-10" aria-labelledby="not-heading">
          <SectionBand id="not-heading">
            {so ? 'Waxa aan NHPC qaban' : 'What the Council does not do'}
          </SectionBand>
          <ul className="mt-5 space-y-3">
            {notOurRole.map((item) => (
              <li
                key={item.en}
                className="flex gap-3 rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-blue p-4"
              >
                <MinusCircle
                  className="mt-0.5 h-5 w-5 flex-none text-nhpc-grey"
                  aria-hidden="true"
                />
                <span className="leading-relaxed text-slate-800">{t(item, lang)}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="pt-10" aria-labelledby="more-heading">
          <SectionBand id="more-heading">{so ? 'Sii akhri' : 'Read more'}</SectionBand>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.href}>
                  <Link
                    href={localizedHref(s.href, lang)}
                    className="group flex h-full flex-col rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-blue p-4 transition-colors duration-150 hover:border-nhpc-blue"
                  >
                    <Icon className="h-5 w-5 flex-none text-nhpc-blue" aria-hidden="true" />
                    <p className="mt-2 font-semibold text-nhpc-dark">{t(s.title, lang)}</p>
                    <p className="mt-1 flex-1 text-sm leading-relaxed text-nhpc-grey">
                      {t(s.desc, lang)}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-nhpc-blue">
                      {so ? 'Fur' : 'Open'}
                      <ArrowRight
                        className="h-4 w-4 flex-none transition-transform duration-150 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <ActFooter
          articles={{ en: 'Articles 1 and 10', so: 'Qodobbada 1 iyo 10' }}
          lang={lang}
        />
      </div>
    </>
  );
}
