import '../globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { publicSans } from '@/lib/fonts';
import { isLang } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import { orgName, missionShort } from '@/content/site';
import SiteChrome from '@/components/layout/SiteChrome';

// Statically generate both languages; 404 anything else at build time.
export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'so' }];
}
export const dynamicParams = false;

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    metadataBase: new URL('https://nhpc.gov.so'),
    title: {
      default: orgName[lang],
      template: `%s · ${lang === 'so' ? 'NHPC' : 'NHPC'}`,
    },
    description: missionShort[lang],
    icons: { icon: '/nhpc-stamp.png' },
    alternates: {
      languages: { en: '/en', so: '/so' },
    },
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  if (!isLang(params.lang)) notFound();
  const lang: Lang = params.lang;

  return (
    <html lang={lang} className={publicSans.variable}>
      <body className="font-sans">
        <SiteChrome lang={lang}>{children}</SiteChrome>
      </body>
    </html>
  );
}
