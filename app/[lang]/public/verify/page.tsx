import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, Search, Stethoscope, Building2, GraduationCap } from 'lucide-react';
import { isLang, localizedHref } from '@/lib/i18n';
import type { Lang, NumberedItem } from '@/content/types';
import { PORTAL_URL } from '@/content/site';
import PageHeader from '@/components/ui/PageHeader';
import ActFooter from '@/components/ui/ActFooter';
import SectionBand from '@/components/ui/SectionBand';
import NumberedRows from '@/components/ui/NumberedRows';
import CtaButton from '@/components/ui/CtaButton';

// Bespoke page. This site holds no register — verification happens on the
// portal. Everything here either explains what can be checked, or hands
// off. Nothing is submitted.
export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: lang === 'so' ? 'Xaqiiji Mihnadle ama Xarun' : 'Verify a Professional or Facility',
    description:
      lang === 'so'
        ? 'Hubi in qofka ku daaweynaya uu ka diiwaangashan yahay NHPC iyo in xaruntu shati leedahay. Xaqiijintu waa bilaash.'
        : 'Check that whoever treats you is registered with NHPC, and that the facility is licensed. Verification is free.',
  };
}

const checklist: NumberedItem[] = [
  {
    title: {
      en: 'Look for the practising certificate on display',
      so: 'Raadi shahaadada shaqada oo la soo bandhigay',
    },
    detail: {
      en: 'A registered professional must display their practising certificate in a conspicuous place where they practise (Art. 45).',
      so: 'Mihnadlaha diiwaangashan waa inuu shahaadadiisa shaqada ka muujiyaa meel muuqata oo uu ka shaqeeyo (Qodobka 45).',
    },
  },
  {
    title: {
      en: 'Look for the facility’s licence on display',
      so: 'Raadi liisanka xarunta oo la soo bandhigay',
    },
    detail: {
      en: 'A licensed facility must show a copy of its licence in a prominent place on the premises (Art. 47(2)).',
      so: 'Xarunta shatiga leh waa inay nuqul liisankeeda ah ka muujiso meel muuqata oo xarunta ku taal (Qodobka 47(2)).',
    },
  },
  {
    title: {
      en: 'Check the name and registration number against the register',
      so: 'Hubi magaca iyo lambarka diiwaangelinta diiwaanka',
    },
    detail: {
      en: 'The name on the certificate should match the person treating you. Search the register to confirm the registration is current.',
      so: 'Magaca ku qoran shahaadadu waa inuu la mid noqdaa qofka ku daaweynaya. Ka raadi diiwaanka si aad u xaqiijiso in diiwaangelintu ay hadda socoto.',
    },
  },
  {
    title: {
      en: 'Ask — a registered professional will not object',
      so: 'Weydii — mihnadlaha diiwaangashan kama xumaanayo',
    },
    detail: {
      en: 'You are entitled to know who is treating you and whether they are registered. Being asked is normal and expected.',
      so: 'Waxaad xaq u leedahay inaad ogaato cidda ku daaweyneysa iyo inay diiwaangashan yihiin. In lagu weydiiyo waa wax caadi ah oo la filayo.',
    },
  },
];

export default function VerifyPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  const so = lang === 'so';

  const canCheck = [
    {
      Icon: Stethoscope,
      title: so ? 'Mihnadle caafimaad' : 'A health professional',
      body: so
        ? 'In uu diiwaangashan yahay oo uu haysto shati shaqo oo ansax ah — dhakhaatiirta, kalkaaliyayaasha, umuliyayaasha, farmashiistayaasha, tignoolajiyada sheybaarka iyo kuwa kale.'
        : 'That they are registered and hold a valid licence to practise — doctors, nurses, midwives, pharmacists, lab technicians and others.',
    },
    {
      Icon: Building2,
      title: so ? 'Xarun caafimaad' : 'A health facility',
      body: so
        ? 'In ay diiwaangashan tahay oo ay haysato liisan shaqo — isbitaallo, rugo caafimaad, sheybaarro, farmasiyo iyo xarumo takhasus leh.'
        : 'That it is registered and holds a licence to operate — hospitals, clinics, laboratories, pharmacies and specialised centres.',
    },
    {
      Icon: GraduationCap,
      title: so ? 'Machad waxbarasho caafimaad' : 'A health education institution',
      body: so
        ? 'In uu shati ka haysto Golaha iyo in barnaamijkiisu ansixiyay — shahaadooyinka barnaamijyada aan la ansixin lama aqoonsado.'
        : 'That it is licensed by the Council and its programme approved — qualifications from unapproved programmes are not recognised.',
    },
  ];

  return (
    <>
      <PageHeader
        kicker={so ? 'Dadweynaha' : 'For the public'}
        title={so ? 'Xaqiiji Mihnadle ama Xarun' : 'Verify a Professional or Facility'}
        intro={
          so
            ? 'Hubi in qofka ku daaweynaya uu ka diiwaangashan yahay NHPC iyo in xaruntu shati leedahay. Xaqiijintu waa bilaash, waxayna qaadanaysaa daqiiqado.'
            : 'Check that whoever treats you is registered with NHPC, and that the facility is licensed. Verification is free and takes a minute.'
        }
      >
        <div className="mt-6">
          <CtaButton href={PORTAL_URL} variant="primary" external>
            <Search className="h-4 w-4 flex-none" aria-hidden="true" />
            {so ? 'Ka raadi diiwaanka' : 'Search the register'}
            <ExternalLink className="h-4 w-4 flex-none" aria-hidden="true" />
            <span className="sr-only">{so ? '(wuxuu ku furmayaa tab cusub)' : '(opens in new tab)'}</span>
          </CtaButton>
        </div>
      </PageHeader>

      <div className="mx-auto max-w-4xl px-4">
        <section className="pt-10" aria-labelledby="can-check-heading">
          <SectionBand id="can-check-heading">
            {so ? 'Waxa aad hubin karto' : 'What you can check'}
          </SectionBand>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            {canCheck.map(({ Icon, title, body }) => (
              <li
                key={title}
                className="rounded-lg border border-t-[3px] border-nhpc-rule border-t-nhpc-blue bg-white p-5"
              >
                <Icon className="h-7 w-7 flex-none text-nhpc-blue" aria-hidden="true" />
                <h3 className="mt-3 font-bold text-nhpc-dark">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-nhpc-grey">{body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="pt-10" aria-labelledby="checklist-heading">
          <SectionBand id="checklist-heading">
            {so ? 'Ka hor inta lagugu daaweyn' : 'Before you are treated'}
          </SectionBand>
          <div className="mt-5">
            <NumberedRows items={checklist} lang={lang} as="ul" />
          </div>
        </section>

        {/* Not registered → this is an offence, and what to do about it */}
        <section className="pt-10" aria-labelledby="not-registered-heading">
          <div className="border-l-[3px] border-nhpc-red bg-nhpc-wash p-5">
            <h2 id="not-registered-heading" className="text-lg font-bold text-nhpc-dark">
              {so ? 'Haddii aysan diiwaangashaneyn' : 'If they are not registered'}
            </h2>
            <p className="mt-2 leading-relaxed text-slate-800">
              {so
                ? 'Ka-shaqaynta iyada oo aan diiwaangelin lahayn waa dembi (Qodobka 39), sidoo kalena waa dembi in qof aan diiwaangashaneyn uu isticmaalo cinwaanka “dhakhtar” ama mid la mid ah (Qodobka 63). Xarun aan shati lahayn lama shaqaalaysiin karo (Qodobka 48). Fadlan noo soo sheeg.'
                : 'Practising without registration is an offence (Art. 39), and it is also an offence for an unregistered person to use the title “doctor” or anything like it (Art. 63). A facility may not operate without a licence (Art. 48). Please tell us.'}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={localizedHref('/public/report-fraud', lang)}
                className="inline-flex h-11 items-center rounded-md bg-nhpc-blue px-5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-nhpc-dark"
              >
                {so ? 'Soo sheeg khiyaano' : 'Report fraud'}
              </Link>
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-1.5 rounded-md border border-nhpc-blue px-5 text-sm font-semibold text-nhpc-blue transition-colors duration-150 hover:bg-white"
              >
                {so ? 'Gudbi cabasho' : 'File a complaint'}
                <ExternalLink className="h-4 w-4 flex-none" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
        <ActFooter
          articles={{ en: "Articles 39, 45, 47(2), 48 and 63", so: "Qodobbada 39, 45, 47(2), 48 iyo 63" }}
          lang={lang}
        />
      </div>
    </>
  );
}
