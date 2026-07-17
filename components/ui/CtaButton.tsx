import Link from 'next/link';
import type { ReactNode } from 'react';

// Shared CTA. Variants encode the red-discipline rule: 'danger' is the ONLY
// red treatment and it is outline-only, never filled.
type Variant = 'primary' | 'outline' | 'danger';

const base =
  'inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition-colors duration-150 focus-visible:outline-2';

const variants: Record<Variant, string> = {
  primary: 'bg-nhpc-blue text-white hover:bg-nhpc-dark',
  outline: 'border border-nhpc-blue text-nhpc-blue hover:bg-nhpc-wash',
  danger: 'border-2 border-nhpc-red text-nhpc-dark hover:bg-nhpc-wash',
};

type Props = {
  href: string;
  variant?: Variant;
  external?: boolean;
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
};

export default function CtaButton({
  href,
  variant = 'primary',
  external = false,
  children,
  className = '',
  ...rest
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`.trim();

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
