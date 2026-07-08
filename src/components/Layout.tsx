import { FileText, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useEffect, useState, type PropsWithChildren } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { siteMetadata } from '../data/profile';
import { routes } from '../lib/routes';
import { cn } from '../lib/utils';
import { ButtonLink } from './ButtonLink';
import { Container } from './Container';

function IconLink({
  href,
  label,
  children,
}: PropsWithChildren<{ href: string; label: string }>) {
  return (
    <ButtonLink
      href={href}
      variant="secondary"
      className="gap-2.5 px-4 py-2.5 text-sm text-text hover:text-text"
      aria-label={label}
    >
      {children}
      <span>{label}</span>
    </ButtonLink>
  );
}

export function Layout({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="mesh-shell min-h-screen text-text">
      <a
        href="#content"
        className="focus-ring absolute left-4 top-4 z-50 -translate-y-20 rounded-full border border-accent/40 bg-surface-strong px-4 py-2 text-sm font-medium text-text transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <Container className="flex min-h-screen flex-col pb-10 pt-5">
        <header className="sticky top-4 z-40">
          <div className="surface-panel-strong px-4 py-4 md:px-6">
            <div className="flex items-center justify-between gap-4">
              <Link to="/" className="focus-ring rounded-full px-1 py-0.5 pr-3" aria-label="Go to homepage">
                <p className="text-base font-semibold text-text">{siteMetadata.name}</p>
                <p className="text-sm text-muted">{siteMetadata.role}</p>
              </Link>
              <button
                type="button"
                className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-white/5 text-text transition hover:border-accent/60 hover:text-accent md:hidden"
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
                        end={route.href === '/'}
                        className={({ isActive }) =>
                          cn(
                            'focus-ring rounded-full border px-4 py-2 text-sm font-medium transition',
                            isActive
                              ? 'border-accent/40 bg-accent text-slate-950 shadow-lift'
                              : 'border-transparent text-muted hover:border-white/10 hover:bg-white/5 hover:text-text',
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
              <ul className="grid gap-2 border-t border-border/70 pt-4">
                {routes.map((route) => (
                  <li key={route.href}>
                    <NavLink
                      to={route.href}
                      end={route.href === '/'}
                      className={({ isActive }) =>
                        cn(
                          'focus-ring block rounded-card border px-4 py-3 text-sm transition',
                          isActive
                            ? 'border-accent/40 bg-accent text-slate-950 shadow-lift'
                            : 'border-transparent bg-white/5 text-muted hover:border-accent/20 hover:bg-accent-soft/70 hover:text-text',
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
          </div>
        </header>
        <main id="content" className="flex-1 pt-8">
          {children}
        </main>
        <footer className="mt-14 border-t border-border/70 pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-text">{siteMetadata.name} · AI engineering, data science, and analytics.</p>
              <p className="mt-2 text-sm text-muted">
                LLM systems, scalable pipelines, and analytics products across finance, fraud, healthcare, and education.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <IconLink href={siteMetadata.githubUrl} label="GitHub profile">
                <Github size={20} className="text-accent" />
              </IconLink>
              <IconLink href={siteMetadata.linkedinUrl} label="LinkedIn profile">
                <Linkedin size={20} className="text-accent" />
              </IconLink>
              <IconLink href={`mailto:${siteMetadata.email}`} label="Email Shreyash">
                <Mail size={20} className="text-accent" />
              </IconLink>
              <ButtonLink href={siteMetadata.resumeUrl} variant="secondary" className="px-4 py-2.5 text-sm">
                <FileText size={16} />
                Resume
              </ButtonLink>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
}
