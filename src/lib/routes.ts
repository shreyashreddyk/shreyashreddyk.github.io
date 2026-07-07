export type AppRoute = {
  href: string;
  label: string;
  description: string;
};

export const routes: AppRoute[] = [
  {
    href: '/',
    label: 'Home',
    description: 'Overview of strengths, selected work, and current focus.',
  },
  {
    href: '/projects',
    label: 'Projects',
    description: 'Featured AI, data, analytics, and research projects.',
  },
  {
    href: '/work',
    label: 'Work',
    description: 'Experience highlights, public-safe resume bullets, and execution signal.',
  },
  {
    href: '/education',
    label: 'Education',
    description: 'Academic background, coursework, and technical foundations.',
  },
  {
    href: '/contact',
    label: 'Contact',
    description: 'Public ways to connect and collaborate.',
  },
];
