import type { Metadata } from 'next';
import { isLang, t } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import { institutionsProgrammes } from '@/content/regulation/institutions-programmes';
import RegulationPageLayout from '@/components/regulation/RegulationPageLayout';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: t(institutionsProgrammes.title, lang),
    description: t(institutionsProgrammes.intro, lang),
  };
}

export default function InstitutionsProgrammesPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return <RegulationPageLayout content={institutionsProgrammes} lang={lang} />;
}
