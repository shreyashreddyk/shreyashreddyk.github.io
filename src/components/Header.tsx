import { Link, useLocation } from 'react-router-dom';
import { siteMetadata } from '../data/profile';
import { cn } from '../lib/utils';

export function Header() {
  const location = useLocation();

  const isLinkActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navLinkClass = (path: string) =>
    cn(
      'inline-block decoration-black/15 dark:decoration-white/30 hover:decoration-black/25 hover:dark:decoration-white/50 text-current hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out underline underline-offset-2',
      isLinkActive(path) && 'text-black dark:text-white decoration-black/50 dark:decoration-white/50'
    );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5 bg-stone-100/75 dark:bg-stone-900/25 backdrop-blur-sm saturate-200 border-b border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-5xl px-5">
        <div className="flex flex-wrap gap-y-2 justify-between items-center">
          <Link
            to="/"
            className="inline-block decoration-black/15 dark:decoration-white/30 hover:decoration-black/25 hover:dark:decoration-white/50 text-current hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out"
          >
            <div className="font-semibold">{siteMetadata.name}</div>
          </Link>
          <nav className="flex gap-1.5 text-sm font-medium">
            <Link to="/work" className={navLinkClass('/work')}>
              work
            </Link>
            <span className="opacity-30">/</span>
            <Link to="/projects" className={navLinkClass('/projects')}>
              projects
            </Link>
            <span className="opacity-30">/</span>
            <Link to="/education" className={navLinkClass('/education')}>
              education
            </Link>
            <span className="opacity-30">/</span>
            <Link to="/contact" className={navLinkClass('/contact')}>
              contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
