import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { isLang, localizedHref } from '@/lib/i18n';
import type { Lang, NumberedItem } from '@/content/types';
import PageHeader from '@/components/ui/PageHeader';
import SectionBand from '@/components/ui/SectionBand';
import NumberedRows from '@/components/ui/NumberedRows';

// Bespoke page — NOT RegulationPageLayout. Nothing is submitted or applied
// for. Structure is real; the full Charter is pending Council publication.
// Every right below is anchored to a provision that already exists — none
// are invented.
export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: lang === 'so' ? 'Axdiga Xuquuqda Bukaanka' : 'Patient Rights Charter',
    description:
      lang === 'so'
        ? 'Waxa aad ka filan karto mihnadlaha caafimaadka ee diiwaangashan iyo xarunta caafimaadka ee shatiga leh.'
        : 'What you can expect from a registered health professional and a licensed health facility.',
  };
}

const rights: NumberedItem[] = [
  {
    title: {
      en: 'To be protected from harm caused by malpractice',
      so: 'In lagaa ilaaliyo waxyeelo ka dhalatay xad-gudub caafimaad',
    },
    detail: {
      en: 'Protecting the community from harm arising from medical malpractice is the Council’s first stated objective (Art. 1(2)(a)).',
      so: 'Ilaalinta bulshada waxyeelada ka dhalan karta xad-gudubka caafimaadka waa ujeeddada koowaad ee Golaha (Qodobka 1(2)(a)).',
    },
  },
  {
    title: {
      en: 'To be treated with dignity, respect and compassion',
      so: 'In lagula dhaqmo sharaf, ixtiraam iyo naxariis',
    },
    detail: {
      en: 'Registered professionals must treat you with respect and compassion, and respect your culture, religion, gender, age and needs (Code of Conduct, Principle 2).',
      so: 'Mihnadlayaasha diiwaangashan waa inay kugula dhaqmaan xushmad iyo naxariis, oo ay ixtiraamaan dhaqankaaga, diintaada, jinsigaaga, da’daada iyo baahiyahaaga (Xeerka Anshaxa, Mabda’a 2aad).',
    },
  },
  {
    title: {
      en: 'To give informed consent before treatment',
      so: 'Inaad bixiso oggolaansho sugan ka hor daaweynta',
    },
    detail: {
      en: 'Valid, current consent must be obtained before treatment or care begins, and you may refuse care (Code of Conduct, Principle 2).',
      so: 'Oggolaansho sax ah oo aan dhicin waa in la helo ka hor inta aan la bilaabin daaweynta ama daryeelka, waadna diidi kartaa daryeelka (Xeerka Anshaxa, Mabda’a 2aad).',
    },
  },
  {
    title: {
      en: 'To have your information kept confidential',
      so: 'In xogtaada la ilaaliyo',
    },
    detail: {
      en: 'Your records must be protected. Disseminating patient records without reason is an offence (Art. 40(10)).',
      so: 'Diiwaankaaga waa in la ilaaliyo. Faafinta diiwaanka bukaanka sabab la’aan waa dembi (Qodobka 40(10)).',
    },
  },
  {
    title: {
      en: 'To be treated only by someone qualified and registered',
      so: 'In lagu daaweeyo oo keliya qof u qalma oo diiwaangashan',
    },
    detail: {
      en: 'Practising without registration, or beyond your permitted scope of practice, is an offence (Art. 39, 40(8)). You can check anyone’s registration before you are treated.',
      so: 'Ka-shaqaynta iyada oo aan diiwaangelin lahayn, ama ka baxsan xadka shaqada la ogolyahay, waa dembi (Qodobka 39, 40(8)). Waad hubin kartaa diiwaangelinta qof kasta ka hor inta aan lagu daaweyn.',
    },
  },
  {
    title: {
      en: 'To complain, and to be heard',
      so: 'Inaad cabato, oo lagu dhageysto',
    },
    detail: {
      en: 'The Health Professional Disciplinary Committee deals with allegations of misconduct (Art. 17(1)(b)). If you are dissatisfied with a decision, you may appeal to the Court within 30 days (Art. 69).',
      so: 'Guddiga Edbinta Mihnadlayaasha Caafimaadka ayaa qabta eedeymaha xad-gudubka (Qodobka 17(1)(b)). Haddii aadan ku qanacsaneyn go’aanka, rafcaan ayaad u qaadan kartaa Maxkamadda 30 maalmood gudahood (Qodobka 69).',
    },
  },
];

export default function RightsPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  const so = lang === 'so';

  return (
    <>
      <PageHeader
        kicker={so ? 'Dadweynaha' : 'For the public'}
        title={so ? 'Axdiga Xuquuqda Bukaanka' : 'Patient Rights Charter'}
        intro={
          so
            ? 'Waxa aad ka filan karto mihnadlaha caafimaadka ee diiwaangashan iyo xarunta caafimaadka ee shatiga leh.'
            : 'What you can expect from a registered health professional and a licensed health facility.'
        }
      />

      <div className="mx-auto max-w-4xl px-4">
        {/* Honest status — the Charter itself is not yet published */}
        <section className="pt-10">
          <div className="border-l-[3px] border-nhpc-blue bg-nhpc-wash p-4">
            <p className="leading-relaxed text-slate-800">
              {so
                ? 'Axdiga buuxa ee Xuquuqda Bukaanka wali lama daabicin. Xuquuqda hoos ku xusan mid kastaa waxay ku salaysan tahay qodob hore u jira oo Sharciga NHPC Lr.31 ah ama Xeerka Anshax Wanaagga. Bogganu waa la cusbooneysiin doonaa marka Goluhu Axdiga daabaco.'
                : 'The full Patient Rights Charter has not yet been published. Each right below rests on a provision that already exists in the NHPC Act Lr.31 or the Code of Conduct. This page will be updated when the Council publishes the Charter.'}
            </p>
          </div>
        </section>

        <section className="pt-10" aria-labelledby="rights-heading">
          <SectionBand id="rights-heading">
            {so ? 'Xuquuqdaada' : 'Your rights'}
          </SectionBand>
          <div className="mt-5">
            <NumberedRows items={rights} lang={lang} as="ul" />
          </div>
        </section>

        <section className="pb-16 pt-10">
          <div className="rounded-lg border border-nhpc-rule bg-nhpc-wash p-6 text-center">
            <p className="leading-relaxed text-slate-800">
              {so
                ? 'Xuquuqdaada ma la jebiyay? Noo soo gudbi cabasho — waa bilaash.'
                : 'Have your rights been breached? File a complaint with us — it is free.'}
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link
                href={localizedHref('/public/complaints', lang)}
                className="inline-flex h-11 items-center gap-2 rounded-md bg-nhpc-blue px-5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-nhpc-dark"
              >
                {so ? 'Gudbi cabasho' : 'File a complaint'}
                <ArrowRight className="h-4 w-4 flex-none" aria-hidden="true" />
              </Link>
              <Link
                href={localizedHref('/public/verify', lang)}
                className="inline-flex h-11 items-center gap-2 rounded-md border border-nhpc-blue px-5 text-sm font-semibold text-nhpc-blue transition-colors duration-150 hover:bg-white"
              >
                {so ? 'Xaqiiji mihnadle' : 'Verify a professional'}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
