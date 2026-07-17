import type { Metadata } from 'next';
import { isLang, t } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import { professionalsForeign } from '@/content/regulation/professionals-foreign';
import RegulationPageLayout from '@/components/regulation/RegulationPageLayout';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: t(professionalsForeign.title, lang),
    description: t(professionalsForeign.intro, lang),
  };
}

export default function ProfessionalsForeignPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return <RegulationPageLayout content={professionalsForeign} lang={lang} />;
}
