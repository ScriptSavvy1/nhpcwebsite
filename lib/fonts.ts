import localFont from 'next/font/local';

// Public Sans, vendored (self-hosted) woff2 — latin subset, weights 400/600/700.
// Exposed as the CSS variable consumed by tailwind.config.ts (fontFamily.sans).
export const publicSans = localFont({
  src: [
    {
      path: '../public/fonts/public-sans-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/public-sans-latin-600-normal.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/public-sans-latin-700-normal.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-public-sans',
  fallback: ['system-ui', 'sans-serif'],
});
