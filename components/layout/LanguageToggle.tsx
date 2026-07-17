'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type { Lang } from '@/content/types';
import { LANGS, langLabel, swapLangInPath } from '@/lib/i18n';

// Renders EN | SO. The active language is inert text; the inactive one is
// the clickable target, preserving the rest of the current path.
export default function LanguageToggle({ lang }: { lang: Lang }) {
  const pathname = usePathname() ?? `/${lang}`;

  return (
    <div className="flex items-center text-sm font-semibold" role="group" aria-label="Language">
      {LANGS.map((code, i) => {
        const active = code === lang;
        return (
          <span key={code} className="flex items-center">
            {i > 0 && <span className="px-1 text-nhpc-rule" aria-hidden="true">|</span>}
            {active ? (
              <span className="text-nhpc-dark" aria-current="true">
                {langLabel[code]}
              </span>
            ) : (
              <Link
                href={swapLangInPath(pathname, code)}
                className="text-nhpc-blue transition-colors duration-150 hover:text-nhpc-dark"
                hrefLang={code}
                lang={code}
              >
                <span className="sr-only">
                  {code === 'so' ? 'Switch to Somali — ' : 'Switch to English — '}
                </span>
                {langLabel[code]}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}
