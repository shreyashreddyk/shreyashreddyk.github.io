import { useEffect, useState, type PropsWithChildren } from 'react';
import { Header } from './Header';
import { Footer, type Theme } from './Footer';

export function Layout({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'system';
  });

  // Handle Theme switching and system preference listening
  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = (isDark: boolean) => {
      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      applyTheme(mediaQuery.matches);

      const listener = (e: MediaQueryListEvent) => {
        applyTheme(e.matches);
      };
      mediaQuery.addEventListener('change', listener);
      root.setAttribute('data-theme', 'system');
      return () => mediaQuery.removeEventListener('change', listener);
    } else {
      applyTheme(theme === 'dark');
      root.setAttribute('data-theme', theme);
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle Scroll detection for floating elements
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        window.document.documentElement.classList.add('scrolled');
      } else {
        window.document.documentElement.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial trigger
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="content" className="flex-grow">
        {children}
      </main>
      <Footer currentTheme={theme} onChangeTheme={setTheme} />
    </div>
  );
}
