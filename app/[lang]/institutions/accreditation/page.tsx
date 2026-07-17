import type { Metadata } from 'next';
import { isLang, t } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import { institutionsAccreditation } from '@/content/regulation/institutions-accreditation';
import RegulationPageLayout from '@/components/regulation/RegulationPageLayout';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: t(institutionsAccreditation.title, lang),
    description: t(institutionsAccreditation.intro, lang),
  };
}

export default function InstitutionsAccreditationPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return <RegulationPageLayout content={institutionsAccreditation} lang={lang} />;
}
