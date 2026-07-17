import type { Metadata } from 'next';
import { isLang, t } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import { professionalsRegister } from '@/content/regulation/professionals-register';
import RegulationPageLayout from '@/components/regulation/RegulationPageLayout';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: t(professionalsRegister.title, lang),
    description: t(professionalsRegister.intro, lang),
  };
}

export default function ProfessionalsRegisterPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return <RegulationPageLayout content={professionalsRegister} lang={lang} />;
}
