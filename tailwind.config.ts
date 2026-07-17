import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './views/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        nhpc: {
          blue: '#0055AA',
          dark: '#003D7A',
          red: '#FF0018',
          grey: '#4A5568',
          wash: '#EFF4F9',
          rule: '#BFD3E9',
          tint: '#7DA7D3',
        },
      },
      fontFamily: {
        sans: ['var(--font-public-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
