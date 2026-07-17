import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MessageCircle, Phone, Clock, MapPin, AlertTriangle, ArrowRight } from 'lucide-react';
import { isLang, t, localizedHref } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import { contact, fraudWarning } from '@/content/site';
import PageHeader from '@/components/ui/PageHeader';
import SectionBand from '@/components/ui/SectionBand';

// mailto: and tel: only — no form, by design. A static site cannot receive a
// submission, and pretending to (a form that silently drops what a worried
// patient types) is worse than an honest "email us". The one place we DO take
// a structured report is the complaint flow, which is its own page.
export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: lang === 'so' ? 'Xiriir' : 'Contact',
    description:
      lang === 'so'
        ? 'Sida aad NHPC ula soo xiriirto: iimayl, WhatsApp, khadka cabashada, saacadaha shaqada iyo goobta.'
        : 'How to reach NHPC: email, WhatsApp, the complaints line, working hours and address.',
  };
}

export default function ContactPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  const so = lang === 'so';

  const emailSubject = so ? 'Weydiin guud — NHPC' : 'General enquiry — NHPC';
  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(emailSubject)}`;
  // tel: strips spaces; the complaints line is a national short code.
  const complaintsTel = `tel:${contact.complaintsLine}`;
  const whatsappTel = `tel:${contact.whatsapp.replace(/\s+/g, '')}`;

  const channels = [
    {
      icon: Mail,
      label: so ? 'Iimayl' : 'Email',
      value: contact.email,
      href: mailto,
      note: so ? 'Jawaabta guud waqtiga shaqada' : 'General replies during working hours',
      external: false,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: contact.whatsapp,
      href: whatsappTel,
      note: so ? 'Fariin ama wac' : 'Message or call',
      external: false,
    },
    {
      icon: Phone,
      label: so ? 'Khadka cabashada' : 'Complaints line',
      value: contact.complaintsLine,
      href: complaintsTel,
      note: so ? 'Khadka qaranka ee cabashooyinka' : 'National complaints short code',
      external: false,
    },
  ];

  return (
    <>
      <PageHeader
        kicker={so ? 'NHPC' : 'NHPC'}
        title={so ? 'Xiriir' : 'Contact'}
        intro={
          so
            ? 'Nala soo xiriir iimayl ama taleefan. Websaydkani ma laha foom — ma aan awoodno inaan ku qaadno foom si sax ah, mana rabno inaan ku moodsiino inaan helnay wax aanan helin.'
            : 'Reach us by email or phone. This website has no form — a static site cannot reliably receive one, and we will not give the false impression that a message got through when it did not.'
        }
      />

      <div className="mx-auto max-w-4xl px-4">
        {/* Channels */}
        <section className="pt-10" aria-labelledby="reach-heading">
          <SectionBand id="reach-heading">{so ? 'Sida nala soo gaadho' : 'How to reach us'}</SectionBand>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="group flex h-full flex-col rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-blue p-4 transition-colors duration-150 hover:border-nhpc-blue"
                  >
                    <Icon className="h-5 w-5 flex-none text-nhpc-blue" aria-hidden="true" />
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-nhpc-grey">
                      {c.label}
                    </p>
                    <p className="mt-0.5 break-words font-semibold text-nhpc-dark">{c.value}</p>
                    <p className="mt-1 flex-1 text-sm leading-relaxed text-nhpc-grey">{c.note}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Hours + address */}
        <section className="pt-10" aria-labelledby="visit-heading">
          <SectionBand id="visit-heading">{so ? 'Saacadaha iyo goobta' : 'Hours and address'}</SectionBand>
          <dl className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="flex gap-3 rounded-lg border border-nhpc-rule p-4">
              <Clock className="mt-0.5 h-5 w-5 flex-none text-nhpc-blue" aria-hidden="true" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-nhpc-grey">
                  {so ? 'Saacadaha shaqada' : 'Working hours'}
                </dt>
                <dd className="mt-0.5 leading-relaxed text-slate-800">{t(contact.hours, lang)}</dd>
              </div>
            </div>
            <div className="flex gap-3 rounded-lg border border-nhpc-rule p-4">
              <MapPin className="mt-0.5 h-5 w-5 flex-none text-nhpc-blue" aria-hidden="true" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-nhpc-grey">
                  {so ? 'Goobta' : 'Headquarters'}
                </dt>
                <dd className="mt-0.5 leading-relaxed text-slate-800">
                  {t(contact.headquarters, lang)}
                </dd>
              </div>
            </div>
          </dl>
        </section>

        {/* Route the two things people most often arrive wanting. */}
        <section className="pt-10" aria-labelledby="specific-heading">
          <SectionBand id="specific-heading">
            {so ? 'Waxaad u timid sabab gaar ah?' : 'Here for something specific?'}
          </SectionBand>
          <ul className="mt-5 space-y-3">
            <li>
              <Link
                href={localizedHref('/public/complaints', lang)}
                className="group flex items-start justify-between gap-3 rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-blue p-4 transition-colors duration-150 hover:border-nhpc-blue"
              >
                <span>
                  <p className="font-semibold text-nhpc-dark">
                    {so ? 'Gudbi cabasho' : 'File a complaint'}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-nhpc-grey">
                    {so
                      ? 'Cabasho ku saabsan mihnadle ama xarun — jid gaar ah ayay leedahay.'
                      : 'A complaint about a professional or facility has its own dedicated route.'}
                  </p>
                </span>
                <ArrowRight
                  className="mt-1 h-4 w-4 flex-none text-nhpc-grey transition-colors duration-150 group-hover:text-nhpc-blue"
                  aria-hidden="true"
                />
              </Link>
            </li>
            <li>
              <Link
                href={localizedHref('/public/verify', lang)}
                className="group flex items-start justify-between gap-3 rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-blue p-4 transition-colors duration-150 hover:border-nhpc-blue"
              >
                <span>
                  <p className="font-semibold text-nhpc-dark">
                    {so ? 'Xaqiiji mihnadle ama xarun' : 'Verify a professional or facility'}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-nhpc-grey">
                    {so
                      ? 'Hubi in qof ama xarun ay diiwaangashan yihiin.'
                      : 'Check whether a person or facility is registered.'}
                  </p>
                </span>
                <ArrowRight
                  className="mt-1 h-4 w-4 flex-none text-nhpc-grey transition-colors duration-150 group-hover:text-nhpc-blue"
                  aria-hidden="true"
                />
              </Link>
            </li>
          </ul>
        </section>

        {/* Fraud guard — both languages, always. */}
        <section className="pt-10 pb-4" aria-labelledby="fraud-heading">
          <SectionBand id="fraud-heading">{so ? 'Digniin khiyaano' : 'Fraud warning'}</SectionBand>
          <div className="mt-5 flex gap-3 border-l-[3px] border-nhpc-red bg-nhpc-wash p-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-none text-nhpc-red" aria-hidden="true" />
            <div className="space-y-1">
              <p className="leading-relaxed text-slate-800">{t(fraudWarning, lang)}</p>
              <p className="leading-relaxed text-slate-800">
                {so
                  ? 'Iimaylka rasmiga ah ee kaliya waa @nhpc.gov.so. Ha ka jawaabin cinwaanno kale.'
                  : `The only official email domain is @${contact.domain}. Do not respond to any other address.`}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
