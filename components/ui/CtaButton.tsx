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

// Same buttons, sitting on a nhpc-dark surface (the hero / About band).
// primary inverts to white-on-dark for contrast; outline/danger keep their
// shape with light strokes. danger stays OUTLINE-only — red discipline holds.
const darkVariants: Record<Variant, string> = {
  primary: 'bg-white text-nhpc-dark hover:bg-nhpc-wash',
  outline: 'border border-white/70 text-white hover:bg-white/10',
  danger: 'border-2 border-nhpc-red text-white hover:bg-white/10',
};

type Props = {
  href: string;
  variant?: Variant;
  external?: boolean;
  /** Render for placement on a nhpc-dark surface. */
  onDark?: boolean;
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
};

export default function CtaButton({
  href,
  variant = 'primary',
  external = false,
  onDark = false,
  children,
  className = '',
  ...rest
}: Props) {
  const styles = onDark ? darkVariants : variants;
  const cls = `${base} ${styles[variant]} ${className}`.trim();

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
