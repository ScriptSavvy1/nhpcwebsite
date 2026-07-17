import type { Metadata } from 'next';
import { isLang, t } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import { professionalsStandards } from '@/content/regulation/professionals-standards';
import RegulationPageLayout from '@/components/regulation/RegulationPageLayout';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: t(professionalsStandards.title, lang),
    description: t(professionalsStandards.intro, lang),
  };
}

export default function ProfessionalsStandardsPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return <RegulationPageLayout content={professionalsStandards} lang={lang} />;
}
