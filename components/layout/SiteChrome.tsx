import type { ReactNode } from 'react';
import type { Lang } from '@/content/types';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';

// Composes the whole page frame once. Used by app/[lang]/layout.tsx.
export default function SiteChrome({
  lang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}) {
  return (
    <>
      <a href="#main" className="skip-link">
        {lang === 'so' ? 'U bood nuxurka' : 'Skip to content'}
      </a>
      <TopBar />
      <Header lang={lang} />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer lang={lang} />
    </>
  );
}
