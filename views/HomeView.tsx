import Link from 'next/link';
import { ShieldCheck, UserPlus, AlertTriangle, ArrowRight } from 'lucide-react';
import type { Lang } from '@/content/types';
import { t, localizedHref } from '@/lib/i18n';
import { missionShort } from '@/content/site';
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
      {/* Hero — diagonal blue gradient over nhpc-dark (no photo, no logo). The
          blue fades to transparent toward the left; a dot-grid texture and a
          soft glow fill the left so it doesn't read empty. White text clears
          AA over the whole field. */}
      <section className="relative overflow-hidden bg-nhpc-dark text-white">
        {/* Dot-grid texture — subtle, fills the empty space (esp. the left). */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1.5px)] [background-size:22px_22px]"
        />
        {/* Diagonal blue, fading to transparent toward the top-left. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 [background:linear-gradient(110deg,transparent_38%,rgba(0,85,170,0.85)_100%)]"
        />
        {/* Soft glow lifting the left, where the text sits. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-1/2 h-[440px] w-[440px] -translate-y-1/2 rounded-full bg-nhpc-blue/25 blur-[120px]"
        />

        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              {t(heroKicker, lang)}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              {t(heroHeading, lang)}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
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
