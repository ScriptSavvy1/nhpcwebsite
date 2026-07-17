'use client';

import { useState } from 'react';
import type { DocumentEntry, Lang } from '@/content/types';
import { t } from '@/lib/i18n';
import { categoryLabels, type DocCategory } from '@/content/documents';
import DocumentCard from '@/components/ui/DocumentCard';

type Filter = DocCategory | 'all';

// The only client component on the site. Filtering is the whole point of a
// downloads hub, and with no server there is nowhere else to do it. Chips
// are h-11 like every other tap target.
//
// Unpublished documents are included deliberately — DocumentCard renders
// them as inert "not yet published" panels. Someone looking for the
// complaint form should learn that it is coming, not conclude it does not
// exist.
export default function ResourceFilter({
  documents,
  lang,
}: {
  documents: DocumentEntry[];
  lang: Lang;
}) {
  const [filter, setFilter] = useState<Filter>('all');

  // Only offer categories that actually have documents.
  const present = Array.from(new Set(documents.map((d) => d.category)));
  const filters: Filter[] = ['all', ...present];

  const shown = filter === 'all' ? documents : documents.filter((d) => d.category === filter);
  const countFor = (f: Filter) =>
    f === 'all' ? documents.length : documents.filter((d) => d.category === f).length;

  return (
    <>
      <div
        role="group"
        aria-label={lang === 'so' ? 'Ku kala sooc nooca' : 'Filter by category'}
        className="flex flex-wrap gap-2"
      >
        {filters.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f)}
              className={[
                'inline-flex h-11 items-center gap-2 rounded-md border px-4 text-sm font-semibold transition-colors duration-150',
                active
                  ? 'border-nhpc-blue bg-nhpc-blue text-white'
                  : 'border-nhpc-rule bg-white text-nhpc-blue hover:bg-nhpc-wash',
              ].join(' ')}
            >
              {t(categoryLabels[f], lang)}
              <span className={active ? 'text-white/80' : 'text-nhpc-grey'}>{countFor(f)}</span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        {lang === 'so'
          ? `${shown.length} dukumiinti ayaa la muujiyay`
          : `${shown.length} documents shown`}
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {shown.map((doc) => (
          <DocumentCard key={doc.id} doc={doc} lang={lang} />
        ))}
      </div>
    </>
  );
}
