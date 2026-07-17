import type { Lang, NumberedItem } from '@/content/types';
import { t } from '@/lib/i18n';

type Props = {
  items: NumberedItem[];
  lang: Lang;
  /** 'ol' for sequential steps/requirements, 'ul' for unordered groupings. */
  as?: 'ol' | 'ul';
};

// Reproduces the official NHPC infographic pattern in CSS — never an image.
// nhpc-blue circle + white number, text on a nhpc-wash row, 1px white gap
// between rows. Uniform, no alternating. Reused by requirements lists,
// process steps, and complaint stages.
export default function NumberedRows({ items, lang, as = 'ol' }: Props) {
  const List = as;
  return (
    <List className="flex list-none flex-col gap-px">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-4 bg-nhpc-wash p-4">
          <span
            aria-hidden="true"
            className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-nhpc-blue text-base font-bold text-white"
          >
            {i + 1}
          </span>
          <div className="min-w-0 pt-1">
            <p className="font-semibold text-nhpc-dark">{t(item.title, lang)}</p>
            {item.detail && (
              <p className="mt-1 text-sm leading-relaxed text-nhpc-grey">
                {t(item.detail, lang)}
              </p>
            )}
          </div>
        </li>
      ))}
    </List>
  );
}
