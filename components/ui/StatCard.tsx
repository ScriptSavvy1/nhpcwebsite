import type { Lang, Stat } from '@/content/types';
import { t } from '@/lib/i18n';

// Static figure card — no count-up animation. Placeholder stats show "—".
export default function StatCard({ stat, lang }: { stat: Stat; lang: Lang }) {
  return (
    <div className="rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-blue bg-white p-5">
      {/* Placeholder "—" reads as a deliberate blue mark, not a broken number;
          a real figure stays in nhpc-dark. */}
      <p
        className={[
          'text-[2rem] font-bold leading-none tracking-tight',
          stat.placeholder ? 'text-nhpc-blue' : 'text-nhpc-dark',
        ].join(' ')}
        aria-hidden={stat.placeholder ? true : undefined}
      >
        {stat.value}
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-nhpc-grey">
        {t(stat.label, lang)}
      </p>
    </div>
  );
}
