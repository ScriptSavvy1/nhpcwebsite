import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Scale } from 'lucide-react';
import { isLang, t, localizedHref } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import { actParts, totalArticles } from '@/content/act';
import { documentById } from '@/content/documents';
import PageHeader from '@/components/ui/PageHeader';
import SectionBand from '@/components/ui/SectionBand';
import DocumentCard from '@/components/ui/DocumentCard';

// Same discipline as /professionals/standards: point to the document, do not
// reproduce it. This page is a MAP — what the Act establishes, roughly where
// things live, and a link to the authoritative PDF. It does not restate 73
// articles, and it must never become the place people read the law instead of
// reading the law.
//
// No ActFooter here: ActFooter's whole job is to send a reader to /about/act.
// On /about/act that is a link to itself. The DocumentCard is the pointer.
export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: lang === 'so' ? 'Sharciga NHPC Lr.31' : 'The NHPC Act Lr.31',
    description:
      lang === 'so'
        ? `Sharciga aasaasay NHPC — ${totalArticles} qodob. Soo koobid iyo qoraalka rasmiga ah oo la soo dejisan karo.`
        : `The Act establishing NHPC — ${totalArticles} Articles. An overview, and the authoritative text to download.`,
  };
}

export default function ActPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  const so = lang === 'so';
  const actDoc = documentById('act-lr31');

  // Grounded in the Council's own objectives at Article 1(2). Summarised —
  // the Act's wording governs.
  const establishes: { en: string; so: string }[] = [
    {
      en: 'An independent Council with legal status, established to protect the public from harm arising from medical malpractice.',
      so: 'Gole madax-bannaan oo sharci ahaan aqoonsan, oo loo aasaasay in uu dadweynaha ka ilaaliyo waxyeellada ka dhalan karta xad-gudubka caafimaad.',
    },
    {
      en: 'A register of health professionals, and the rule that practising unregistered is an offence.',
      so: 'Diiwaan mihnadlayaasha caafimaadka, iyo xeerka ah in ka-shaqayntu iyadoon la diiwaangelin ay dembi tahay.',
    },
    {
      en: 'Ethics and a code of conduct governing how health professionals practise.',
      so: 'Anshax iyo xeer anshaxeed oo xukuma sida mihnadlayaasha caafimaadku u shaqeeyaan.',
    },
    {
      en: 'Licensing and inspection of health facilities and health services.',
      so: 'Shatiyeynta iyo kormeerka xarumaha caafimaadka iyo adeegyada caafimaadka.',
    },
    {
      en: 'Recognition of health training institutions, and approval of the curricula and programmes that produce health cadres.',
      so: 'Aqoonsiga machadyada tababarka caafimaadka, iyo ansixinta manhajyada iyo barnaamijyada soo saara shaqaalaha caafimaadka.',
    },
    {
      en: 'A disciplinary regime: investigation of alleged misconduct, sanctions, and offences.',
      so: 'Nidaam edbin: baaritaanka eedeymaha xad-gudubka, ciqaabaha, iyo dembiyada.',
    },
  ];

  return (
    <>
      <PageHeader
        kicker={`NHPC Act Lr.31 · ${totalArticles} Articles`}
        title={so ? 'Sharciga NHPC Lr.31' : 'The NHPC Act Lr.31'}
        intro={
          so
            ? `Sharciga Lr.31 ayaa aasaasay Golaha Mihnadlayaasha Caafimaadka Qaranka wuxuuna siiyay awoodaha uu ku shaqeeyo. Boggani waa soo koobid — ma aha sharciga. Sharciga oo dhammeystiran ka soo deji hoos.`
            : `Act Lr.31 establishes the National Health Professionals Council and gives it the powers it operates under. This page is an overview — it is not the Act. Download the full text below.`
        }
      />

      <div className="mx-auto max-w-4xl px-4">
        {/* Authority note first: this page is not the law. */}
        <div className="mt-8 flex gap-3 border-l-[3px] border-nhpc-blue bg-nhpc-wash p-4">
          <Scale className="mt-0.5 h-5 w-5 flex-none text-nhpc-blue" aria-hidden="true" />
          <div>
            <p className="leading-relaxed text-slate-800">
              {so
                ? 'Sharciga qoraalkiisu waa isha rasmiga ah. Halka boggani ka duwan yahay sharciga, sharciga ayaa mudan. Haddii wax kaa taagan yahay xaaladdaada, akhri sharciga ama la tasho qareen.'
                : 'The text of the Act is the authoritative source. Where this page differs from the Act, the Act prevails. If anything turns on your particular situation, read the Act itself or take legal advice.'}
            </p>
            {/* The Act PDF is English only. Say so rather than let a Somali
                speaker discover it after downloading 339 KB. */}
            <p className="mt-2 leading-relaxed text-slate-800">
              {so
                ? 'Ogow: sharciga qoraalkiisu wuxuu ku qoran yahay Ingiriisi oo keliya. Soo koobankan Soomaaliga ah waa turjumaad shaqo — ma aha qoraal sharci oo rasmi ah. Turjumaad Soomaali ah oo rasmi ah lama daabicin.'
                : 'Note: the Act is published in English only. The Somali on this website is a working translation, not an official legal text. No official Somali translation of the Act has been published.'}
            </p>
          </div>
        </div>

        <section className="pt-10" aria-labelledby="establishes-heading">
          <SectionBand id="establishes-heading">
            {so ? 'Waxa Sharcigu aasaasay' : 'What the Act establishes'}
          </SectionBand>
          <ul className="mt-5 space-y-2.5">
            {establishes.map((item) => (
              <li key={item.en} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-nhpc-blue"
                  aria-hidden="true"
                />
                <span className="leading-relaxed text-slate-800">{t(item, lang)}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* The map. Every row is a route into the site or a plain statement. */}
        <section className="pt-10" aria-labelledby="structure-heading">
          <SectionBand id="structure-heading">
            {so ? 'Sida Sharciga loo habeeyay' : 'How the Act is organised'}
          </SectionBand>
          <p className="mt-4 leading-relaxed text-nhpc-grey">
            {so
              ? 'Tilmaame guud — ma aha liis dhammeystiran oo qodobbada ah. Riix mid kasta si aad u aragto bogga ka warramaya.'
              : 'A rough guide, not a complete list of Articles. Follow a row to the page that explains it.'}
          </p>
          <ul className="mt-5 space-y-3">
            {actParts.map((part) => {
              const inner = (
                <>
                  <p className="text-xs font-semibold uppercase tracking-wide text-nhpc-blue">
                    {t(part.articles, lang)}
                  </p>
                  <p className="mt-1 leading-relaxed text-slate-800">{t(part.subject, lang)}</p>
                </>
              );

              if (!part.href) {
                return (
                  <li
                    key={part.articles.en}
                    className="rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-rule bg-nhpc-wash p-4"
                  >
                    {inner}
                  </li>
                );
              }

              return (
                <li key={part.articles.en}>
                  <Link
                    href={localizedHref(part.href, lang)}
                    className="group flex items-start justify-between gap-3 rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-blue p-4 transition-colors duration-150 hover:border-nhpc-blue"
                  >
                    <span>{inner}</span>
                    <ArrowRight
                      className="mt-1 h-4 w-4 flex-none text-nhpc-grey transition-colors duration-150 group-hover:text-nhpc-blue"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* The document itself — the point of the page. */}
        <section className="pt-10" aria-labelledby="document-heading">
          <SectionBand id="document-heading">
            {so ? 'Qoraalka rasmiga ah' : 'The authoritative text'}
          </SectionBand>
          <div className="mt-5">
            {actDoc && <DocumentCard doc={actDoc} lang={lang} />}
          </div>
          <Link
            href={localizedHref('/resources', lang)}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-nhpc-blue transition-colors duration-150 hover:text-nhpc-dark"
          >
            {so ? 'Dhammaan dukumiintiyada' : 'All documents'}
            <ArrowRight className="h-4 w-4 flex-none" aria-hidden="true" />
          </Link>
        </section>

        <div className="pb-4" />
      </div>
    </>
  );
}
