import type { Metadata } from 'next';
import Link from 'next/link';
import { Globe, Mail, MessageCircle, Phone, ArrowRight, ExternalLink } from 'lucide-react';
import { isLang, localizedHref } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import { contact, fraudWarning, PORTAL_URL } from '@/content/site';
import PageHeader from '@/components/ui/PageHeader';
import SectionBand from '@/components/ui/SectionBand';

// Bespoke page — NOT RegulationPageLayout. Nothing is submitted, no fees,
// no process, no obligations. It lists the only official channels and the
// offences to report.
export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: lang === 'so' ? 'Soo Sheeg Khiyaano' : 'Report Fraud',
    description:
      lang === 'so'
        ? 'Qaadadaha rasmiga ah ee NHPC iyo sida loo soo sheego khiyaanada, shahaadooyinka been abuurka ah, iyo xarumaha aan shatiga lahayn.'
        : 'NHPC’s only official channels, and how to report impersonation, fake certificates, and unlicensed facilities.',
  };
}

export default function ReportFraudPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  const so = lang === 'so';

  const offences = [
    {
      title: so ? 'Qof isku sheegaya mihnadle diiwaangashan' : 'Someone impersonating a registered professional',
      body: so
        ? 'Qofka aan diiwaangashaneyn ee isticmaala cinwaanka “dhakhtar” ama astaan muujinaysa awood shaqo sharci ah waa dembi — ganaax ilaa US$2,000 (Qodobka 63).'
        : 'An unregistered person using the title “doctor”, or any title, symbol or description implying authority to practise, commits an offence — a fine of up to US$2,000 (Art. 63).',
    },
    {
      title: so ? 'Shahaado been abuur ah' : 'A fake or forged certificate',
      body: so
        ? 'Been-abuurka shahaadada diiwaangelinta ama shahaado kale oo Goluhu bixiyay waa dembi (Qodobka 40(6)).'
        : 'Forging a certificate of registration or any other certificate issued by the Council is an offence (Art. 40(6)).',
    },
    {
      title: so ? 'Xarun caafimaad oo aan shati lahayn' : 'An unlicensed health facility',
      body: so
        ? 'Xarun lama shaqaalaysiin karo iyada oo aan marka hore helin liisan — ganaax ilaa US$2,000 (Qodobka 48).'
        : 'No facility may operate without first receiving a licence — a fine of up to US$2,000 (Art. 48).',
    },
    {
      title: so ? 'Lacag laga codsaday akoon shakhsi ah' : 'Payment requested to a personal account',
      body: so
        ? 'NHPC marnaba kuma codsado lacag ku bixi akoon shakhsi ah. Codsi kastoo noocaas ah waa khiyaano.'
        : 'NHPC never requests payment via personal accounts. Any such request is fraudulent.',
    },
  ];

  return (
    <>
      <PageHeader
        kicker={so ? 'Dadweynaha' : 'For the public'}
        title={so ? 'Soo Sheeg Khiyaano' : 'Report Fraud'}
        intro={
          so
            ? 'Kuwan hoos ku xusan waa qaadadaha rasmiga ah ee kaliya ee NHPC. Wax kasta oo aan kuwan ka mid ahayn waa in laga shakiyaa.'
            : 'The channels below are NHPC’s only official ones. Anything else should be treated as suspicious.'
        }
      />

      <div className="mx-auto max-w-4xl px-4">
        {/* The fraud warning, both languages, always */}
        <section className="pt-10">
          <div className="border-l-[3px] border-nhpc-red bg-nhpc-wash p-4">
            <p className="font-bold text-nhpc-dark">{fraudWarning.en}</p>
            <p className="mt-1 font-semibold text-nhpc-grey" lang="so">
              {fraudWarning.so}
            </p>
          </div>
        </section>

        {/* Official channels */}
        <section className="pt-10" aria-labelledby="channels-heading">
          <SectionBand id="channels-heading">
            {so ? 'Qaadadaha rasmiga ah ee kaliya' : 'The only official channels'}
          </SectionBand>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              { Icon: Globe, label: so ? 'Websaydka' : 'Website', value: contact.domain, href: `https://${contact.domain}` },
              { Icon: Mail, label: so ? 'Iimayl' : 'Email', value: contact.email, href: `mailto:${contact.email}` },
              {
                Icon: MessageCircle,
                label: 'WhatsApp',
                value: contact.whatsapp,
                href: `https://wa.me/${contact.whatsapp.replace(/[^\d]/g, '')}`,
              },
              {
                Icon: Phone,
                label: so ? 'Khadka cabashooyinka 24/7' : '24/7 complaints line',
                value: contact.complaintsLine,
                href: `tel:${contact.complaintsLine}`,
              },
            ].map(({ Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center gap-3 rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-blue bg-white p-4 transition-colors duration-150 hover:border-nhpc-blue"
                >
                  <Icon className="h-5 w-5 flex-none text-nhpc-blue" aria-hidden="true" />
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-nhpc-grey">
                      {label}
                    </span>
                    <span className="block font-semibold text-nhpc-dark">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* What to report */}
        <section className="pt-10" aria-labelledby="offences-heading">
          <SectionBand id="offences-heading">
            {so ? 'Waxa aad soo sheegi karto' : 'What you can report'}
          </SectionBand>
          <ul className="mt-5 space-y-3">
            {offences.map((o) => (
              <li
                key={o.title}
                className="rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-red bg-white p-4"
              >
                <p className="font-semibold text-nhpc-dark">{o.title}</p>
                <p className="mt-1 leading-relaxed text-slate-800">{o.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="pb-16 pt-10">
          <div className="rounded-lg border border-nhpc-rule bg-nhpc-wash p-6 text-center">
            <p className="leading-relaxed text-slate-800">
              {so
                ? 'Ma aragtay mid ka mid ah kuwan? Noo soo gudbi cabasho ama nagala soo xiriir 2376.'
                : 'Seen any of these? File a complaint with us, or call 2376.'}
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-nhpc-blue px-5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-nhpc-dark"
              >
                {so ? 'Gudbi cabasho' : 'File a complaint'}
                <ExternalLink className="h-4 w-4 flex-none" aria-hidden="true" />
              </a>
              <a
                href={`tel:${contact.complaintsLine}`}
                className="inline-flex h-11 items-center gap-2 rounded-md border-2 border-nhpc-red px-5 text-sm font-semibold text-nhpc-dark transition-colors duration-150 hover:bg-white"
              >
                <Phone className="h-4 w-4 flex-none text-nhpc-red" aria-hidden="true" />
                {so ? 'Wac 2376' : 'Call 2376'}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
