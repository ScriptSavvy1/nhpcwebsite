import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { isLang, t, localizedHref } from '@/lib/i18n';
import type { Lang, NoticeType } from '@/content/types';
import { notices, noticeBySlug } from '@/content/news';

// Detail page for one notice. generateStaticParams is driven entirely by
// content/news.ts: zero notices → zero params → zero pages, and with
// dynamicParams=false no notice URL resolves. Add a notice and its page
// appears. Nothing here invents content — the body is whatever the notice
// carries, and a notice with no body renders as its summary.
export function generateStaticParams() {
  return notices.map((n) => ({ slug: n.slug }));
}
export const dynamicParams = false;

const typeLabel: Record<NoticeType, { en: string; so: string }> = {
  notice: { en: 'Notice', so: 'Ogeysiis' },
  exam: { en: 'Examination', so: 'Imtixaan' },
  cpd: { en: 'CPD', so: 'CPD' },
  disciplinary: { en: 'Disciplinary', so: 'Edbin' },
  press: { en: 'Press', so: 'Saxaafad' },
};

function formatDate(iso: string, lang: Lang): string {
  const d = new Date(iso + 'T00:00:00');
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(lang === 'so' ? 'so-SO' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string };
}): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  const notice = noticeBySlug(params.slug);
  if (!notice) return {};
  return {
    title: t(notice.title, lang),
    description: t(notice.summary, lang),
  };
}

export default function NoticePage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  const so = lang === 'so';
  const notice = noticeBySlug(params.slug);
  if (!notice) notFound();

  const isExam = notice.type === 'exam';

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 md:py-12">
      <Link
        href={localizedHref('/news', lang)}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-nhpc-blue transition-colors duration-150 hover:text-nhpc-dark"
      >
        <ArrowLeft className="h-4 w-4 flex-none" aria-hidden="true" />
        {so ? 'Dib ugu noqo Wararka' : 'Back to News & Notices'}
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-nhpc-grey">
        <span
          className={[
            'rounded px-1.5 py-0.5 font-semibold',
            isExam
              ? 'bg-nhpc-red text-white'
              : 'border border-nhpc-rule bg-nhpc-wash text-nhpc-blue',
          ].join(' ')}
        >
          {t(typeLabel[notice.type], lang)}
        </span>
        <span aria-hidden="true">·</span>
        <time dateTime={notice.date}>{formatDate(notice.date, lang)}</time>
      </div>

      <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-nhpc-dark md:text-4xl">
        {t(notice.title, lang)}
      </h1>

      <p className="mt-4 text-lg leading-relaxed text-slate-800">{t(notice.summary, lang)}</p>

      {notice.body && notice.body.length > 0 && (
        <div className="mt-6 space-y-4 leading-relaxed text-slate-800">
          {notice.body.map((para, i) => (
            <p key={i}>{t(para, lang)}</p>
          ))}
        </div>
      )}
    </article>
  );
}
