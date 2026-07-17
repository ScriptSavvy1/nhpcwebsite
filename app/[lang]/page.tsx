import { isLang } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import HomeView from '@/views/HomeView';

export default function HomePage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return <HomeView lang={lang} />;
}
