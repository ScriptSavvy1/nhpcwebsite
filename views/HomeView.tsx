import Link from 'next/link';
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
      {/* Hero — mission, no image */}
      <section className="border-b border-nhpc-rule bg-nhpc-wash">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-wide text-nhpc-blue">
            {t(heroKicker, lang)}
          </p>
          <h1 className="mt-2 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-nhpc-dark md:text-4xl">
            {t(heroHeading, lang)}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-800 md:text-lg">
            {t(missionShort, lang)}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaButton href={localizedHref('/public/verify', lang)} variant="primary">
              <ShieldCheck className="h-4 w-4 flex-none" aria-hidden="true" />
              {lang === 'so' ? 'Xaqiiji Mihnadle' : 'Verify a Professional'}
            </CtaButton>
            <CtaButton href={localizedHref('/professionals/register', lang)} variant="outline">
              <UserPlus className="h-4 w-4 flex-none" aria-hidden="true" />
              {lang === 'so' ? 'Is-diiwaangeli' : 'Register'}
            </CtaButton>
            <CtaButton href={localizedHref('/public/complaints', lang)} variant="danger">
              <AlertTriangle className="h-4 w-4 flex-none text-nhpc-red" aria-hidden="true" />
              {lang === 'so' ? 'Soo Sheeg Xad-gudub' : 'Report Malpractice'}
            </CtaButton>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        {/* Audience doors */}
        <section className="py-12" aria-labelledby="doors-heading">
          <h2
            id="doors-heading"
            className="mb-5 text-xl font-bold tracking-tight text-nhpc-dark"
          >
            {lang === 'so' ? 'Dooro dariiqaaga' : 'Choose your path'}
          </h2>
          <AudienceGrid lang={lang} />
        </section>

        {/* Statistics */}
        <section className="pb-12" aria-labelledby="stats-heading">
          <h2
            id="stats-heading"
            className="mb-5 text-xl font-bold tracking-tight text-nhpc-dark"
          >
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

        {/* About teaser */}
        <section className="pb-16" aria-labelledby="about-teaser-heading">
          <div className="border-l-[3px] border-nhpc-blue bg-nhpc-wash px-5 py-6 md:px-8 md:py-8">
            <h2
              id="about-teaser-heading"
              className="text-xl font-bold tracking-tight text-nhpc-dark"
            >
              {lang === 'so' ? 'Ku Saabsan NHPC' : 'About NHPC'}
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-slate-800">
              {t(aboutTeaser, lang)}
            </p>
            <div className="mt-5">
              <CtaButton href={localizedHref('/about', lang)} variant="outline">
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
