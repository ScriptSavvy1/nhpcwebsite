import type { Bilingual, Lang } from '@/content/types';

export const LANGS: Lang[] = ['en', 'so'];
export const DEFAULT_LANG: Lang = 'en';

export function isLang(value: string): value is Lang {
  return value === 'en' || value === 'so';
}

/** Pick the active-language string from a Bilingual object. */
export function t(value: Bilingual, lang: Lang): string {
  return value[lang];
}

/** Prefix a lang-agnostic path with the active language segment.
 *  localizedHref('/about', 'so')  → '/so/about'
 *  localizedHref('/', 'en')       → '/en'
 */
export function localizedHref(path: string, lang: Lang): string {
  if (path === '/') return `/${lang}`;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${clean}`;
}

/** Swap the [lang] segment of the CURRENT pathname, preserving the rest.
 *  swapLangInPath('/en/about/council', 'so') → '/so/about/council'
 *  swapLangInPath('/en', 'so')               → '/so'
 */
export function swapLangInPath(pathname: string, next: Lang): string {
  const parts = pathname.split('/'); // ['', 'en', 'about', ...]
  if (parts.length > 1 && isLang(parts[1] ?? '')) {
    parts[1] = next;
    return parts.join('/') || `/${next}`;
  }
  // No lang segment present — prepend one.
  return localizedHref(pathname, next);
}

export const langLabel: Record<Lang, string> = {
  en: 'EN',
  so: 'SO',
};
