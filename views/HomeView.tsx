import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, UserPlus, AlertTriangle, ArrowRight } from 'lucide-react';
import type { Lang } from '@/content/types';
import { t, localizedHref } from '@/lib/i18n';
import { orgName, missionShort } from '@/content/site';
import {
  heroHeading,
  heroKicker,
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

  return (
    <>
      {/* Hero — deep nhpc-dark band. Blue-dominant; no photography. The seal
          sits on a white circular plate (never bare on a blue surface). */}
      <section className="bg-nhpc-dark text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-[1fr_auto] md:items-center md:gap-12 md:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
              {t(heroKicker, lang)}
            </p>
            <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              {t(heroHeading, lang)}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              {t(missionShort, lang)}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CtaButton href={localizedHref('/public/verify', lang)} variant="primary" onDark>
                <ShieldCheck className="h-4 w-4 flex-none" aria-hidden="true" />
                {lang === 'so' ? 'Xaqiiji Mihnadle' : 'Verify a Professional'}
              </CtaButton>
              <CtaButton
                href={localizedHref('/professionals/register', lang)}
                variant="outline"
                onDark
              >
                <UserPlus className="h-4 w-4 flex-none" aria-hidden="true" />
                {lang === 'so' ? 'Is-diiwaangeli' : 'Register'}
              </CtaButton>
              <CtaButton href={localizedHref('/public/complaints', lang)} variant="danger" onDark>
                <AlertTriangle className="h-4 w-4 flex-none text-nhpc-red" aria-hidden="true" />
                {lang === 'so' ? 'Soo Sheeg Xad-gudub' : 'Report Malpractice'}
              </CtaButton>
            </div>
          </div>

          {/* Seal on a white plate — the required treatment on a blue surface.
              Above the text on mobile, to the side on desktop. */}
          <div className="order-first flex justify-center md:order-none md:justify-end">
            <div className="rounded-full bg-white p-4 md:p-5">
              <Image
                src="/nhpc-stamp.png"
                alt={t(orgName, lang) + ' — official seal'}
                width={176}
                height={176}
                priority
                className="h-28 w-28 md:h-44 md:w-44"
              />
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
