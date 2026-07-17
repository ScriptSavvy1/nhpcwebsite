import type { Lang, Stat } from '@/content/types';
import { t } from '@/lib/i18n';

// Static figure card — no count-up animation. Placeholder stats show "—".
export default function StatCard({ stat, lang }: { stat: Stat; lang: Lang }) {
  return (
    <div className="rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-blue bg-white p-5">
      <p
        className="text-3xl font-bold tracking-tight text-nhpc-dark"
        aria-hidden={stat.placeholder ? true : undefined}
      >
        {stat.value}
      </p>
      <p className="mt-1 text-sm font-semibold text-nhpc-grey">{t(stat.label, lang)}</p>
    </div>
  );
}
