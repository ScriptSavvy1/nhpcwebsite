import type { Metadata } from 'next';
import { isLang, t } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import { facilitiesRegister } from '@/content/regulation/facilities-register';
import RegulationPageLayout from '@/components/regulation/RegulationPageLayout';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: t(facilitiesRegister.title, lang),
    description: t(facilitiesRegister.intro, lang),
  };
}

export default function FacilitiesRegisterPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return <RegulationPageLayout content={facilitiesRegister} lang={lang} />;
}
