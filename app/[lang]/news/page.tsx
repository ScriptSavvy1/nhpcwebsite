import type { Metadata } from 'next';
import { isLang } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import { notices } from '@/content/news';
import PageHeader from '@/components/ui/PageHeader';
import SectionBand from '@/components/ui/SectionBand';
import NoticeBoard from '@/components/ui/NoticeBoard';

// The full notice board. Reuses NoticeBoard, which already renders both the
// list (red-bordered exam deadlines and all) and the honest empty state.
//
// Adding ONE notice to content/news.ts brings this page to life AND, via the
// [slug] route's generateStaticParams, creates its detail page. Until then
// this page renders — empty, and saying so — while /news/[slug] has no pages
// at all, so no notice URL resolves. That is the intended launch state.
export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: lang === 'so' ? 'Wararka iyo Ogeysiisyada' : 'News & Notices',
    description:
      lang === 'so'
        ? 'Ogeysiisyada rasmiga ah ee Golaha: xilliyada imtixaanka, natiijooyinka, iyo warbixinno kale.'
        : 'Official notices from the Council: examination deadlines, results, and other announcements.',
  };
}

export default function NewsPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  const so = lang === 'so';

  // Newest first.
  const sorted = [...notices].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHeader
        kicker={so ? 'NHPC' : 'NHPC'}
        title={so ? 'Wararka iyo Ogeysiisyada' : 'News & Notices'}
        intro={
          so
            ? 'Ogeysiisyada rasmiga ah ee Golaha halkan ayaa laga daabacaa — xilliyada imtixaanka, natiijooyinka, iyo warbixinno kale. Natiijo shaqsiyeed lagama siiyo taleefanka.'
            : 'The Council publishes its official notices here — examination deadlines, results, and other announcements. Individual results are not given over the phone.'
        }
      />

      <div className="mx-auto max-w-4xl px-4">
        <section className="pt-10 pb-4" aria-labelledby="notices-heading">
          <SectionBand id="notices-heading">
            {so ? 'Dhammaan ogeysiisyada' : 'All notices'}
          </SectionBand>
          <div className="mt-5">
            <NoticeBoard notices={sorted} lang={lang} />
          </div>
        </section>
      </div>
    </>
  );
}
