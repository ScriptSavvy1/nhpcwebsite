import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, UserPlus, AlertTriangle, ArrowRight } from 'lucide-react';
import type { Bilingual, Lang } from '@/content/types';
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
import StackedLabel from '@/components/ui/StackedLabel';
import SectionBand from '@/components/ui/SectionBand';
import StatCard from '@/components/ui/StatCard';
import NoticeBoard from '@/components/ui/NoticeBoard';
import AudienceGrid from '@/components/home/AudienceGrid';

// Split a headline so its last two words can carry the nhpc-blue emphasis of
// the two-tier hero treatment. Content stays untouched — the emphasis is a
// render-time decision, not a new field.
function splitTail(text: string, tailWords = 2): { head: string; tail: string } {
  const words = text.trim().split(/\s+/);
  if (words.length <= tailWords) return { head: '', tail: text };
  return {
    head: words.slice(0, -tailWords).join(' '),
    tail: words.slice(-tailWords).join(' '),
  };
}

// Hero CTA labels, bilingual so the stacked treatment has both languages.
const verifyLabel: Bilingual = { en: 'Verify a Professional', so: 'Xaqiiji Mihnadle' };
const registerLabel: Bilingual = { en: 'Register', so: 'Is-diiwaangeli' };
const reportLabel: Bilingual = { en: 'Report Malpractice', so: 'Soo Sheeg Xad-gudub' };

export default function HomeView({ lang }: { lang: Lang }) {
  const notices = latestNotices(5);
  const so = lang === 'so';

  // Primary headline follows the reader; the other language sits beneath it.
  const primaryHeading = so ? heroHeading.so : heroHeading.en;
  const secondaryHeading = so ? heroHeading.en : heroHeading.so;
  const { head, tail } = splitTail(primaryHeading);

  const kickerPrimary = so ? heroKicker.so : heroKicker.en;
  const kickerSecondary = so ? heroKicker.en : heroKicker.so;

  return (
    <>
      {/* ── Hero — nhpc-wash, seal watermark, no photography ── */}
      <section className="relative overflow-hidden border-b border-nhpc-rule bg-nhpc-wash">
        {/* Right-hand visual field: the seal at large scale, low opacity,
            bleeding off the right edge. Decorative, hidden below md so it can
            never sit behind the headline on a phone. */}
        <Image
          src="/nhpc-stamp.png"
          alt=""
          aria-hidden="true"
          width={360}
          height={360}
          className="pointer-events-none absolute -right-12 top-1/2 hidden -translate-y-1/2 select-none opacity-[0.10] md:block lg:-right-6"
        />

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          {/* Kicker: seal + rule + two-line label */}
          <div className="flex items-center gap-3">
            <Image
              src="/nhpc-stamp.png"
              alt=""
              aria-hidden="true"
              width={28}
              height={28}
              className="h-7 w-7 flex-none"
            />
            <span className="h-8 w-px flex-none bg-nhpc-rule" aria-hidden="true" />
            <span className="block leading-tight">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-nhpc-blue">
                {kickerPrimary}
              </span>
              <span className="block text-[11px] italic text-nhpc-grey">{kickerSecondary}</span>
            </span>
          </div>

          {/* Two-tier headline: primary (active lang) large with a blue tail,
              secondary (other lang) beneath at ~60%, all blue. */}
          <h1 className="mt-7 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-nhpc-dark md:text-[2.75rem]">
            {head && <>{head} </>}
            <span className="text-nhpc-blue">{tail}</span>
          </h1>
          <p className="mt-2 max-w-2xl text-lg font-semibold leading-tight text-nhpc-blue md:text-[1.625rem]">
            {secondaryHeading}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-800 md:text-lg">
            {t(missionShort, lang)}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaButton href={localizedHref('/public/verify', lang)} variant="primary">
              <ShieldCheck className="h-4 w-4 flex-none" aria-hidden="true" />
              <StackedLabel label={verifyLabel} lang={lang} />
            </CtaButton>
            <CtaButton href={localizedHref('/professionals/register', lang)} variant="outline">
              <UserPlus className="h-4 w-4 flex-none" aria-hidden="true" />
              <StackedLabel label={registerLabel} lang={lang} />
            </CtaButton>
            <CtaButton href={localizedHref('/public/complaints', lang)} variant="danger">
              <AlertTriangle className="h-4 w-4 flex-none text-nhpc-red" aria-hidden="true" />
              <StackedLabel label={reportLabel} lang={lang} />
            </CtaButton>
          </div>
        </div>
      </section>

      {/* ── Audience doors — white ── */}
      <section className="bg-white" aria-labelledby="doors-heading">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 id="doors-heading" className="mb-5 text-xl font-bold tracking-tight text-nhpc-dark">
            {so ? 'Dooro dariiqaaga' : 'Choose your path'}
          </h2>
          <AudienceGrid lang={lang} />
        </div>
      </section>

      {/* ── Statistics — nhpc-wash ── */}
      <section className="bg-nhpc-wash" aria-labelledby="stats-heading">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 id="stats-heading" className="mb-5 text-xl font-bold tracking-tight text-nhpc-dark">
            {so ? 'NHPC tirooyin ahaan' : 'NHPC at a glance'}
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((s, i) => (
              <StatCard key={i} stat={s} lang={lang} />
            ))}
          </div>
          <p className="mt-3 text-xs text-nhpc-grey">{t(statsCaption, lang)}</p>
        </div>
      </section>

      {/* ── News & notices — white ── */}
      <section className="bg-white" aria-labelledby="notices-heading">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <SectionBand id="notices-heading">
            {so ? 'Wararka & Ogeysiisyada' : 'News & Notices'}
          </SectionBand>
          <div className="mt-5">
            <NoticeBoard notices={notices} lang={lang} />
          </div>
          <div className="mt-4">
            <Link
              href={localizedHref('/news', lang)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-nhpc-blue transition-colors duration-150 hover:text-nhpc-dark"
            >
              {so ? 'Eeg dhammaan wararka' : 'View all news'}
              <ArrowRight className="h-4 w-4 flex-none" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── About teaser — nhpc-wash (inner card white so it stays legible) ── */}
      <section className="bg-nhpc-wash" aria-labelledby="about-teaser-heading">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="border-l-[3px] border-nhpc-blue bg-white px-5 py-6 md:px-8 md:py-8">
            <h2
              id="about-teaser-heading"
              className="text-xl font-bold tracking-tight text-nhpc-dark"
            >
              {so ? 'Ku Saabsan NHPC' : 'About NHPC'}
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-slate-800">{t(aboutTeaser, lang)}</p>
            <div className="mt-5">
              <CtaButton href={localizedHref('/about', lang)} variant="outline">
                {so ? 'Wax badan baro' : 'Learn more'}
                <ArrowRight className="h-4 w-4 flex-none" aria-hidden="true" />
              </CtaButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
