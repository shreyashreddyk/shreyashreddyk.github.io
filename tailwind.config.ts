import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#07111f',
        surface: '#0e1a2b',
        'surface-strong': '#162338',
        text: '#f4f7fb',
        muted: '#93a4bd',
        border: '#2b3c57',
        accent: '#7dd3fc',
        'accent-soft': '#14324d',
        focus: '#bae6fd',
      },
      boxShadow: {
        panel: '0 24px 80px rgba(2, 10, 24, 0.44)',
        lift: '0 20px 50px rgba(2, 10, 24, 0.3)',
        glow: '0 0 0 1px rgba(255, 255, 255, 0.04)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
      },
      borderRadius: {
        card: '1.75rem',
        panel: '2.25rem',
      },
      backdropBlur: {
        panel: '20px',
      },
      maxWidth: {
        site: '78rem',
        prose: '72ch',
      },
    },
  },
  plugins: [],
} satisfies Config;
