import { isLang } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import HomeView from '@/views/HomeView';

// The [lang] layout already declares these for the whole subtree, and
// `next build --output export` is satisfied by that. `next dev`, however,
// checks each page in isolation and 500s without them here — so declare them
// on the page too. Production output is unchanged (still just en + so).
export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'so' }];
}
export const dynamicParams = false;

export default function HomePage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return <HomeView lang={lang} />;
}
