import type { ReactNode } from 'react';

// The wash page header shared by the non-regulation pages. Same block the
// RegulationPageLayout uses, minus the apply CTA.
export default function PageHeader({
  kicker,
  title,
  intro,
  children,
}: {
  kicker?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-nhpc-rule bg-nhpc-wash">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        {kicker && (
          <p className="text-xs font-semibold uppercase tracking-wide text-nhpc-blue">{kicker}</p>
        )}
        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-nhpc-dark md:text-4xl">
          {title}
        </h1>
        {intro && <p className="mt-3 max-w-2xl leading-relaxed text-slate-800">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
