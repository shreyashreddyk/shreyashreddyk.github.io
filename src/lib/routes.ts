export type AppRoute = {
  href: string;
  label: string;
  description: string;
};

export const routes: AppRoute[] = [
  {
    href: '/',
    label: 'Home',
    description: 'AI engineer profile, featured projects, and current focus.',
  },
  {
    href: '/projects',
    label: 'Projects',
    description: 'AI systems, data science, engineering, and analytics work.',
  },
  {
    href: '/work',
    label: 'Work',
    description: 'Experience across analytics, AI systems, and data delivery.',
  },
  {
    href: '/education',
    label: 'Education',
    description: 'Academic background, coursework, and technical foundations.',
  },
  {
    href: '/contact',
    label: 'Contact',
    description: 'Contact details, resume, and current interests.',
  },
];
