import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        mist: '#f5f3ee',
        ember: '#d97706',
        spruce: '#0f766e',
        steel: '#475569',
        clay: '#d6c5b3',
      },
      boxShadow: {
        panel: '0 24px 60px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        'page-glow':
          'radial-gradient(circle at top left, rgba(217, 119, 6, 0.16), transparent 34%), radial-gradient(circle at top right, rgba(15, 118, 110, 0.16), transparent 28%), linear-gradient(180deg, #f8f6f1 0%, #f3efe7 100%)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
      },
      maxWidth: {
        prose: '72ch',
      },
    },
  },
  plugins: [],
} satisfies Config;
