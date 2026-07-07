export type AppRoute = {
  href: string;
  label: string;
  description: string;
};

export const routes: AppRoute[] = [
  {
    href: '/',
    label: 'Home',
    description: 'AI engineer profile, featured projects, and current focus areas.',
  },
  {
    href: '/projects',
    label: 'Projects',
    description: 'AI systems, data engineering, fraud analytics, and modeling work.',
  },
  {
    href: '/work',
    label: 'Work',
    description: 'Experience highlights across analytics, AI systems, and data delivery.',
  },
  {
    href: '/education',
    label: 'Education',
    description: 'Academic background and technical foundations.',
  },
  {
    href: '/contact',
    label: 'Contact',
    description: 'Contact details and current role interests.',
  },
];
