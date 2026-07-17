import { FileText, ExternalLink } from 'lucide-react';
import type { DocumentEntry, Lang } from '@/content/types';
import { t } from '@/lib/i18n';

// The web page explains; the PDF holds authority. The whole card is a single
// link opening the PDF in a new tab. 3px nhpc-red left-border; border goes
// nhpc-rule → nhpc-blue on hover. The `language` badge describes the PDF's
// own language and is shown regardless of the active site language.
//
// When href is null the document has not been published yet: the card
// renders as an inert panel saying so, never as a link to a missing file.
export default function DocumentCard({
  doc,
  lang,
}: {
  doc: DocumentEntry;
  lang: Lang;
}) {
  const updatedLabel = lang === 'so' ? 'La cusbooneysiiyay' : 'Updated';

  const body = (
    <>
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-nhpc-dark">{t(doc.title, lang)}</h3>
        {doc.href && (
          <ExternalLink
            className="mt-0.5 h-4 w-4 flex-none text-nhpc-grey transition-colors duration-150 group-hover:text-nhpc-blue"
            aria-hidden="true"
          />
        )}
      </div>

      <p className="mt-1 text-sm leading-relaxed text-nhpc-grey">{t(doc.description, lang)}</p>

      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-nhpc-grey">
        <span className="font-semibold text-nhpc-dark">{doc.docRef}</span>
        {doc.href ? (
          <>
            {doc.fileSize && (
              <>
                <span aria-hidden="true">·</span>
                <span>{doc.fileSize}</span>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span className="rounded border border-nhpc-rule bg-nhpc-wash px-1.5 py-0.5 font-semibold text-nhpc-blue">
              {doc.language}
            </span>
            {doc.lastUpdated && (
              <>
                <span aria-hidden="true">·</span>
                <span>
                  {updatedLabel} {doc.lastUpdated}
                </span>
              </>
            )}
          </>
        ) : (
          <>
            <span aria-hidden="true">·</span>
            <span className="rounded border border-nhpc-rule bg-nhpc-wash px-1.5 py-0.5 font-semibold text-nhpc-grey">
              {lang === 'so' ? 'Weli lama daabicin' : 'Not yet published'}
            </span>
          </>
        )}
      </div>
    </>
  );

  // Unpublished — inert panel, muted, not focusable, no hover affordance.
  if (!doc.href) {
    return (
      <div className="flex gap-4 rounded-lg border border-l-[3px] border-dashed border-nhpc-rule border-l-nhpc-rule bg-nhpc-wash p-4">
        <FileText className="h-5 w-5 flex-none text-nhpc-grey" aria-hidden="true" />
        <div className="min-w-0 flex-1">{body}</div>
      </div>
    );
  }

  const srSummary =
    lang === 'so'
      ? `${t(doc.title, lang)}. PDF, wuxuu ku furmayaa tab cusub${doc.fileSize ? `, ${doc.fileSize}` : ''}.`
      : `${t(doc.title, lang)}. PDF, opens in new tab${doc.fileSize ? `, ${doc.fileSize}` : ''}.`;

  return (
    <a
      href={doc.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={srSummary}
      className="group flex gap-4 rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-red bg-white p-4 transition-colors duration-150 hover:border-nhpc-blue hover:border-l-nhpc-red"
    >
      <FileText className="h-5 w-5 flex-none text-nhpc-red" aria-hidden="true" />
      <div className="min-w-0 flex-1">{body}</div>
    </a>
  );
}
