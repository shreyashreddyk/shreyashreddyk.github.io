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
    href: '/about',
    label: 'About',
    description: 'Background, education, experience, and public-safe resume highlights.',
  },
  {
    href: '/contact',
    label: 'Contact',
    description: 'Public ways to connect and collaborate.',
  },
];
