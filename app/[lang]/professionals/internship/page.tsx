import type { Metadata } from 'next';
import { isLang, t } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import { professionalsInternship } from '@/content/regulation/professionals-internship';
import RegulationPageLayout from '@/components/regulation/RegulationPageLayout';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: t(professionalsInternship.title, lang),
    description: t(professionalsInternship.intro, lang),
  };
}

export default function ProfessionalsInternshipPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return <RegulationPageLayout content={professionalsInternship} lang={lang} />;
}
