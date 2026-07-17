import Link from 'next/link';
import { BellOff } from 'lucide-react';
import type { Lang, Notice, NoticeType } from '@/content/types';
import { t, localizedHref } from '@/lib/i18n';
import EmptyState from './EmptyState';

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
    month: 'short',
    day: 'numeric',
  });
}

export default function NoticeBoard({
  notices,
  lang,
}: {
  notices: Notice[];
  lang: Lang;
}) {
  if (notices.length === 0) {
    return (
      <EmptyState
        lang={lang}
        icon={BellOff}
        heading={{
          en: 'No notices have been published yet.',
          so: 'Ma jiraan ogeysiisyo weli.',
        }}
        body={{
          en: 'Official notices and examination deadlines will appear here.',
          so: 'Wararka rasmiga ah iyo xilliyada imtixaanadu halkan ayay ka soo bixi doonaan.',
        }}
      />
    );
  }

  return (
    <ul className="flex flex-col gap-3">
      {notices.map((n) => {
        const isExam = n.type === 'exam';
        return (
          <li key={n.slug}>
            <Link
              href={localizedHref(`/news/${n.slug}`, lang)}
              className={[
                'block rounded-lg border border-l-[3px] bg-white p-4 transition-colors duration-150 hover:border-nhpc-blue',
                isExam ? 'border-nhpc-rule border-l-nhpc-red' : 'border-nhpc-rule border-l-nhpc-blue',
              ].join(' ')}
            >
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-nhpc-grey">
                <span
                  className={[
                    'rounded px-1.5 py-0.5 font-semibold',
                    isExam
                      ? 'bg-nhpc-red text-white'
                      : 'border border-nhpc-rule bg-nhpc-wash text-nhpc-blue',
                  ].join(' ')}
                >
                  {t(typeLabel[n.type], lang)}
                </span>
                <span aria-hidden="true">·</span>
                <time dateTime={n.date}>{formatDate(n.date, lang)}</time>
              </div>
              <p className="mt-1.5 font-semibold text-nhpc-dark">{t(n.title, lang)}</p>
              <p className="mt-1 text-sm leading-relaxed text-nhpc-grey">{t(n.summary, lang)}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
