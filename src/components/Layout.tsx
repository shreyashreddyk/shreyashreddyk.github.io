import { Menu, X } from 'lucide-react';
import { useEffect, useState, type PropsWithChildren } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import markUrl from '../assets/site-mark.svg';
import { routes } from '../lib/routes';
import { cn } from '../lib/utils';
import { siteMetadata } from '../data/profile';

export function Layout({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-page-glow text-ink">
      <a
        href="#content"
        className="absolute left-4 top-4 z-50 -translate-y-20 rounded-full bg-ink px-4 py-2 text-sm font-medium text-mist transition focus:translate-y-0 focus:outline-none focus:ring-4 focus:ring-ember/40"
      >
        Skip to content
      </a>
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-5 pb-10 pt-5 sm:px-8 lg:px-10">
        <header className="sticky top-4 z-40 rounded-[28px] border border-white/70 bg-white/80 px-4 py-4 shadow-panel backdrop-blur md:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/"
              className="flex items-center gap-3 rounded-full pr-3 transition hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-ember/30"
              aria-label="Go to homepage"
            >
              <img src={markUrl} alt="" className="h-11 w-11 rounded-2xl" />
              <div>
                <p className="font-display text-base font-semibold">{siteMetadata.name}</p>
                <p className="text-sm text-steel">{siteMetadata.role}</p>
              </div>
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-clay/80 text-ink transition hover:border-ember hover:text-ember focus:outline-none focus:ring-4 focus:ring-ember/30 md:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setIsOpen((value) => !value)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex items-center gap-2">
                {routes.map((route) => (
                  <li key={route.href}>
                    <NavLink
                      to={route.href}
                      className={({ isActive }) =>
                        cn(
                          'rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-4 focus:ring-ember/30',
                          isActive ? 'bg-ink text-mist' : 'text-steel hover:bg-clay/40 hover:text-ink',
                        )
                      }
                    >
                      {route.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <nav
            id="mobile-navigation"
            aria-label="Mobile"
            className={cn('md:hidden', isOpen ? 'mt-4 block' : 'hidden')}
          >
            <ul className="grid gap-2 border-t border-clay/70 pt-4">
              {routes.map((route) => (
                <li key={route.href}>
                  <NavLink
                    to={route.href}
                    className={({ isActive }) =>
                      cn(
                        'block rounded-2xl px-4 py-3 text-sm transition focus:outline-none focus:ring-4 focus:ring-ember/30',
                        isActive ? 'bg-ink text-mist' : 'bg-mist/70 text-steel hover:bg-clay/50 hover:text-ink',
                      )
                    }
                  >
                    <span className="block font-medium">{route.label}</span>
                    <span className="mt-1 block text-xs opacity-80">{route.description}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main id="content" className="flex-1 pt-8">
          {children}
        </main>
        <footer className="mt-14 border-t border-clay/70 px-1 pt-6 text-sm text-steel">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>{siteMetadata.name} · AI systems, data science, and analytics portfolio.</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${siteMetadata.email}`}
                className="transition hover:text-ink focus:outline-none focus:ring-4 focus:ring-ember/30"
              >
                {siteMetadata.email}
              </a>
              <a
                href={siteMetadata.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-ink focus:outline-none focus:ring-4 focus:ring-ember/30"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
