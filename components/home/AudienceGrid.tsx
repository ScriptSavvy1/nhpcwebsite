import Link from 'next/link';
import { Users, Stethoscope, Building2, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Lang } from '@/content/types';
import { t, localizedHref } from '@/lib/i18n';
import { audiences, type AudienceId } from '@/content/home';

const icons: Record<AudienceId, LucideIcon> = {
  public: Users,
  professionals: Stethoscope,
  facilities: Building2,
};

// The three doors — the homepage's primary navigation device.
export default function AudienceGrid({ lang }: { lang: Lang }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {audiences.map((a) => {
        const Icon = icons[a.id];
        return (
          <section
            key={a.id}
            className="flex flex-col rounded-lg border border-l-4 border-nhpc-rule border-l-nhpc-blue bg-white p-6 md:p-8"
          >
            <Icon className="h-8 w-8 flex-none text-nhpc-blue" aria-hidden="true" />
            <h3 className="mt-3 text-lg font-bold tracking-tight text-nhpc-dark">
              {t(a.title, lang)}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-nhpc-grey">{t(a.blurb, lang)}</p>

            <ul className="mt-4 flex flex-col gap-px border-t border-nhpc-rule pt-4">
              {a.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={localizedHref(link.href, lang)}
                    className="group flex items-center justify-between gap-2 rounded py-1.5 text-sm font-semibold text-nhpc-blue transition-colors duration-150 hover:text-nhpc-dark"
                  >
                    <span>{t(link.label, lang)}</span>
                    <ArrowRight
                      className="h-4 w-4 flex-none text-nhpc-tint transition-colors duration-150 group-hover:text-nhpc-blue"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
