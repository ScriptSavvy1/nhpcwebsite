import Link from 'next/link';
import { Phone, Mail, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import type { Lang } from '@/content/types';
import { t, localizedHref } from '@/lib/i18n';
import { contact } from '@/content/site';
import { documentById } from '@/content/documents';
import {
  acknowledgementNotice,
  anonymousCaveat,
  anonymousHeading,
  complaintsIntro,
  complaintsTitle,
  coverageStatement,
  damagesNotice,
  urgentNotice,
  waysToFileHeading,
  waysToFileIntro,
  wayByPhone,
  wayByPhoneBody,
  wayByEmail,
  wayByEmailBody,
  wayByForm,
  wayByFormBody,
} from '@/content/complaints';
import PageHeader from '@/components/ui/PageHeader';
import SectionBand from '@/components/ui/SectionBand';
import ActFooter from '@/components/ui/ActFooter';
import DocumentCard from '@/components/ui/DocumentCard';

// HPCSA's model: download the form, email the Registrar. There is no online
// submission — the site is static (see the hosting note at the top of
// app/[lang]/public/complaints/page.tsx). Every channel here works without
// a server.
export default function ComplaintsView({ lang }: { lang: Lang }) {
  const form = documentById('complaint-form');

  return (
    <>
      <PageHeader
        kicker={lang === 'so' ? 'Dadweynaha' : 'For the public'}
        title={t(complaintsTitle, lang)}
        intro={t(complaintsIntro, lang)}
      >
        {/* Urgent route out — before anything else */}
        <div className="mt-6 border-l-[3px] border-nhpc-red bg-white p-4">
          <p className="font-semibold text-nhpc-dark">{t(urgentNotice, lang)}</p>
          <a
            href={`tel:${contact.complaintsLine}`}
            className="mt-3 inline-flex h-11 items-center gap-2 rounded-md border-2 border-nhpc-red px-4 text-sm font-semibold text-nhpc-dark transition-colors duration-150 hover:bg-nhpc-wash"
          >
            <Phone className="h-4 w-4 flex-none text-nhpc-red" aria-hidden="true" />
            {lang === 'so' ? 'Wac 2376 — 24/7' : 'Call 2376 — 24/7'}
          </a>
        </div>
      </PageHeader>

      <div className="mx-auto max-w-4xl px-4">
        {/* What NHPC covers — stated positively. No "go elsewhere" section. */}
        <section className="pt-10">
          <div className="flex gap-3 border-l-[3px] border-nhpc-blue bg-nhpc-wash p-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-nhpc-blue" aria-hidden="true" />
            <p className="leading-relaxed text-slate-800">{t(coverageStatement, lang)}</p>
          </div>
        </section>

        {/* Expectations — not buried */}
        <section className="pt-6" aria-labelledby="before-heading">
          <h2 id="before-heading" className="sr-only">
            {lang === 'so' ? 'Ka hor inta aadan gudbin' : 'Before you file'}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-blue bg-white p-4">
              <p className="leading-relaxed text-slate-800">{t(damagesNotice, lang)}</p>
            </div>
            <div className="rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-blue bg-white p-4">
              <p className="leading-relaxed text-slate-800">{t(acknowledgementNotice, lang)}</p>
              <Link
                href={localizedHref('/public/complaints/process', lang)}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-nhpc-blue transition-colors duration-150 hover:text-nhpc-dark"
              >
                {lang === 'so' ? 'Sida cabasho loo maareeyo' : 'How a complaint is handled'}
                <ArrowRight className="h-4 w-4 flex-none" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Ways to file — the whole page now ─────────────────────── */}
        <section className="pt-10" aria-labelledby="ways-heading">
          <SectionBand id="ways-heading">{t(waysToFileHeading, lang)}</SectionBand>
          <p className="mt-4 text-slate-800">{t(waysToFileIntro, lang)}</p>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-blue bg-white p-5">
              <h3 className="flex items-center gap-2 font-bold text-nhpc-dark">
                <Phone className="h-4 w-4 flex-none text-nhpc-blue" aria-hidden="true" />
                {t(wayByPhone, lang)}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-800">{t(wayByPhoneBody, lang)}</p>
              <a
                href={`tel:${contact.complaintsLine}`}
                className="mt-4 inline-flex h-11 items-center gap-2 rounded-md border border-nhpc-blue px-4 text-sm font-semibold text-nhpc-blue transition-colors duration-150 hover:bg-nhpc-wash"
              >
                {lang === 'so' ? 'Wac 2376' : 'Call 2376'}
              </a>
            </div>

            <div className="rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-blue bg-white p-5">
              <h3 className="flex items-center gap-2 font-bold text-nhpc-dark">
                <Mail className="h-4 w-4 flex-none text-nhpc-blue" aria-hidden="true" />
                {t(wayByEmail, lang)}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-800">{t(wayByEmailBody, lang)}</p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-4 inline-flex h-11 items-center gap-2 rounded-md border border-nhpc-blue px-4 text-sm font-semibold text-nhpc-blue transition-colors duration-150 hover:bg-nhpc-wash"
              >
                {contact.email}
              </a>
            </div>
          </div>

          {/* Download the form and email it — HPCSA's route. The form is not
              published yet, so the card says so rather than linking to a
              file that does not exist. */}
          <div className="mt-4 rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-blue bg-white p-5">
            <h3 className="flex items-center gap-2 font-bold text-nhpc-dark">
              <Download className="h-4 w-4 flex-none text-nhpc-blue" aria-hidden="true" />
              {t(wayByForm, lang)}
            </h3>
            <p className="mt-2 leading-relaxed text-slate-800">{t(wayByFormBody, lang)}</p>
            {form && (
              <div className="mt-4">
                <DocumentCard doc={form} lang={lang} />
              </div>
            )}
          </div>
        </section>

        {/* ── Anonymity ────────────────────────────────────────────────
            HPCSA's caveat, verbatim and unsoftened. It previously lived
            inside the form component, shown only when the checkbox was
            ticked. The form is gone; the caveat is not. It is the honest
            counterweight to offering anonymity, and now everyone reads it. */}
        <section className="pt-10" aria-labelledby="anon-heading">
          <SectionBand id="anon-heading">{t(anonymousHeading, lang)}</SectionBand>
          <div className="mt-5 border-l-[3px] border-nhpc-blue bg-nhpc-wash p-4">
            <p className="leading-relaxed text-slate-800">{t(anonymousCaveat, lang)}</p>
          </div>
        </section>

        <ActFooter
          articles={{
            en: 'Articles 17(1)(b), 32, 40, 46 and 69',
            so: 'Qodobbada 17(1)(b), 32, 40, 46 iyo 69',
          }}
          lang={lang}
        />
      </div>
    </>
  );
}
