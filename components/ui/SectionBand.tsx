import type { ReactNode } from 'react';

// Section header "band": solid nhpc-blue, white 600 text, 4px nhpc-red
// left-border. The recurring section marker across the site.
export default function SectionBand({
  children,
  as: As = 'h2',
  id,
}: {
  children: ReactNode;
  as?: 'h2' | 'h3';
  id?: string;
}) {
  return (
    <div className="border-l-4 border-nhpc-red bg-nhpc-blue px-4 py-2.5">
      <As id={id} className="text-sm font-semibold text-white">
        {children}
      </As>
    </div>
  );
}
