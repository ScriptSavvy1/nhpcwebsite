import type { Metadata } from 'next';
import { isLang, t } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import { facilitiesInspection } from '@/content/regulation/facilities-inspection';
import RegulationPageLayout from '@/components/regulation/RegulationPageLayout';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: t(facilitiesInspection.title, lang),
    description: t(facilitiesInspection.intro, lang),
  };
}

export default function FacilitiesInspectionPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return <RegulationPageLayout content={facilitiesInspection} lang={lang} />;
}
