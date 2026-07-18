import Link from 'next/link';
import Image from 'next/image';
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
      {/* Hero — a SUBTLE single-hue deepening (nhpc-blue #0055AA at top-left to
          nhpc-dark #003D7A at bottom-right), dot texture on top, and the
          Federal Republic of Somalia coat of arms as a faint watermark bleeding
          off the right (it signals state authority under Act Lr.31). One mark
          only — the NHPC seal stays in the header. */}
      <section className="relative overflow-hidden text-white [background:linear-gradient(135deg,#0055AA_0%,#003D7A_100%)]">
        {/* Dot-grid texture, on top of the deepening. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1.5px)] [background-size:22px_22px]"
        />
        {/* Coat of arms watermark — right, bleeding off the edge, faint. Full
            colour: at low opacity over the blue it reads as a tonal, blue-
            tinted emblem. Hidden below lg so it never crowds the text on
            phones. Placeholder asset (public-domain emblem); swap in the final
            file at the same path. */}
        <Image
          src="/somalia-coat-of-arms.svg"
          alt=""
          aria-hidden="true"
          width={1240}
          height={1000}
          className="pointer-events-none absolute right-0 top-1/2 hidden h-[520px] w-auto -translate-y-1/2 translate-x-[28%] select-none opacity-[0.14] lg:block"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
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
