import type { Metadata } from 'next';
import { isLang, t } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import { professionalsRenew } from '@/content/regulation/professionals-renew';
import RegulationPageLayout from '@/components/regulation/RegulationPageLayout';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: t(professionalsRenew.title, lang),
    description: t(professionalsRenew.intro, lang),
  };
}

export default function ProfessionalsRenewPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return <RegulationPageLayout content={professionalsRenew} lang={lang} />;
}
