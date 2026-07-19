import Link from 'next/link';
import { ShieldCheck, UserPlus, Flag, QrCode, ArrowRight } from 'lucide-react';
import type { Lang } from '@/content/types';
import { t, localizedHref } from '@/lib/i18n';
import { VERIFY_URL, REGISTER_URL, COMPLAINT_URL } from '@/content/site';
import {
  heroHeading,
  heroKicker,
  heroBody,
  stats,
  statsCaption,
  aboutTeaser,
} from '@/content/home';
import { latestNotices } from '@/content/news';
import CtaButton from '@/components/ui/CtaButton';
import SectionBand from '@/components/ui/SectionBand';
import StatCard from '@/components/ui/StatCard';
import NoticeBoard from '@/components/ui/NoticeBoard';
import AudienceGrid from '@/components/home/AudienceGrid';

export default function HomeView({ lang }: { lang: Lang }) {
  const notices = latestNotices(5);

  // Two-tier headline: the active language leads, the other sits beneath.
  const primaryHeading = lang === 'so' ? heroHeading.so : heroHeading.en;
  const secondaryHeading = lang === 'so' ? heroHeading.en : heroHeading.so;

  return (
    <>
      {/* Hero — light. Left: text + CTAs. Right (lg+ only): an illustration of
          an NHPC health-professional licence. The card drops entirely below lg
          so it never shrinks onto a phone. */}
      <section className="border-b border-nhpc-rule bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Left — text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-nhpc-blue">
              {t(heroKicker, lang)}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-nhpc-dark md:text-5xl">
              {primaryHeading}
            </h1>
            <p className="mt-2 text-2xl font-semibold leading-tight text-nhpc-blue md:text-3xl">
              {secondaryHeading}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-nhpc-grey md:text-lg">
              {t(heroBody, lang)}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CtaButton href={VERIFY_URL} variant="primary" external>
                <ShieldCheck className="h-4 w-4 flex-none" aria-hidden="true" />
                {lang === 'so' ? 'Xaqiiji' : 'Verify'}
              </CtaButton>
              <CtaButton href={REGISTER_URL} variant="outline" external>
                <UserPlus className="h-4 w-4 flex-none" aria-hidden="true" />
                {lang === 'so' ? 'Is-diiwaangeli' : 'Register'}
              </CtaButton>
              <CtaButton href={COMPLAINT_URL} variant="danger" external>
                <Flag className="h-4 w-4 flex-none text-nhpc-red" aria-hidden="true" />
                {lang === 'so' ? 'Gudbi Cabasho' : 'File a Complaint'}
              </CtaButton>
            </div>
          </div>

          {/* Right — licence card illustration (lg+ only, NOT interactive) */}
          <div className="relative hidden lg:block">
            {/* light-blue backing panel */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-nhpc-wash"
            />
            <div className="relative rounded-2xl border border-nhpc-rule bg-white p-7">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-nhpc-blue">
                  NHPC · Health Professional Licence
                </p>
                <span className="inline-flex flex-none items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                  Licence active
                </span>
              </div>

              <div className="mt-5 border-t border-nhpc-rule pt-5">
                <p className="text-lg font-bold text-nhpc-dark">[ Full name of professional ]</p>
                <p className="mt-0.5 text-sm text-nhpc-grey">General Doctor</p>
              </div>

              <dl className="mt-5 grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-wide text-nhpc-grey">
                    Registration no.
                  </dt>
                  <dd className="mt-0.5 font-mono text-sm font-semibold text-nhpc-dark">
                    NHPC-2026-100001
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-wide text-nhpc-grey">
                    Valid to
                  </dt>
                  <dd className="mt-0.5 font-mono text-sm font-semibold text-nhpc-dark">
                    31 Dec 2027
                  </dd>
                </div>
              </dl>

              <div className="mt-5 flex items-center gap-3 border-t border-nhpc-rule pt-5">
                <QrCode className="h-14 w-14 flex-none text-nhpc-dark" aria-hidden="true" />
                <p className="text-xs leading-relaxed text-nhpc-grey">
                  Scan to verify at{' '}
                  <span className="font-semibold text-nhpc-dark">nhpc.gov.so/verify</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        {/* Audience doors */}
        <section className="py-12" aria-labelledby="doors-heading">
          <h2 id="doors-heading" className="mb-5 text-xl font-bold tracking-tight text-nhpc-dark">
            {lang === 'so' ? 'Dooro dariiqaaga' : 'Choose your path'}
          </h2>
          <AudienceGrid lang={lang} />
        </section>

        {/* Internship → licence promo */}
        <section className="pb-12" aria-labelledby="internship-heading">
          <div className="flex flex-col gap-4 rounded-lg border border-l-4 border-nhpc-rule border-l-nhpc-blue bg-white p-6 md:flex-row md:items-center md:justify-between md:gap-8 md:p-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-nhpc-blue">
                {lang === 'so' ? 'Tababarka → Shatiga' : 'Internship → Licence'}
              </p>
              <h2
                id="internship-heading"
                className="mt-1 text-xl font-bold tracking-tight text-nhpc-dark"
              >
                {lang === 'so' ? 'U beddel tababarkaaga shati' : 'Turn your internship into a licence'}
              </h2>
              <p className="mt-2 leading-relaxed text-nhpc-grey">
                {lang === 'so'
                  ? 'Qalin-jabiyeyaasha cusub waxay dhammaystiraan tababar la kormeeray, kadibna waxay si toos ah u gudbaan diiwaangelinta buuxda.'
                  : 'New graduates complete a supervised internship and move straight into full registration.'}
              </p>
            </div>
            <div className="flex-none">
              <CtaButton href={REGISTER_URL} variant="primary" external>
                <UserPlus className="h-4 w-4 flex-none" aria-hidden="true" />
                {lang === 'so' ? 'Is-diiwaangeli' : 'Register'}
              </CtaButton>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="pb-12" aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="mb-5 text-xl font-bold tracking-tight text-nhpc-dark">
            {lang === 'so' ? 'NHPC tirooyin ahaan' : 'NHPC at a glance'}
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((s, i) => (
              <StatCard key={i} stat={s} lang={lang} />
            ))}
          </div>
          <p className="mt-3 text-xs text-nhpc-grey">{t(statsCaption, lang)}</p>
        </section>

        {/* News & notices */}
        <section className="pb-12" aria-labelledby="notices-heading">
          <SectionBand id="notices-heading">
            {lang === 'so' ? 'Wararka & Ogeysiisyada' : 'News & Notices'}
          </SectionBand>
          <div className="mt-5">
            <NoticeBoard notices={notices} lang={lang} />
          </div>
          <div className="mt-4">
            <Link
              href={localizedHref('/news', lang)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-nhpc-blue transition-colors duration-150 hover:text-nhpc-dark"
            >
              {lang === 'so' ? 'Eeg dhammaan wararka' : 'View all news'}
              <ArrowRight className="h-4 w-4 flex-none" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* About teaser — deep-blue panel, bookending the blue hero. */}
        <section className="pb-16" aria-labelledby="about-teaser-heading">
          <div className="rounded-lg bg-nhpc-dark px-6 py-8 text-white md:px-10 md:py-10">
            <h2
              id="about-teaser-heading"
              className="text-2xl font-bold tracking-tight text-white"
            >
              {lang === 'so' ? 'Ku Saabsan NHPC' : 'About NHPC'}
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-white/85">{t(aboutTeaser, lang)}</p>
            <div className="mt-6">
              <CtaButton href={localizedHref('/about', lang)} variant="primary" onDark>
                {lang === 'so' ? 'Wax badan baro' : 'Learn more'}
                <ArrowRight className="h-4 w-4 flex-none" aria-hidden="true" />
              </CtaButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
