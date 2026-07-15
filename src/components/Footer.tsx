import { siteMetadata } from '../data/profile';
import { BackToTop } from './BackToTop';
import { cn } from '../lib/utils';

export type Theme = 'light' | 'dark' | 'system';

type FooterProps = {
  currentTheme: Theme;
  onChangeTheme: (theme: Theme) => void;
};

export function Footer({ currentTheme, onChangeTheme }: FooterProps) {
  return (
    <footer className="mt-auto py-8 text-sm border-t border-black/5 dark:border-white/5 bg-stone-100 dark:bg-stone-900 text-black/50 dark:text-white/60 transition-colors duration-300">
      <div className="mx-auto max-w-5xl px-5">
        <div className="relative">
          <div className="absolute right-0 -top-20">
            <BackToTop />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            &copy; {new Date().getFullYear()} | {siteMetadata.name}
          </div>
          <div className="flex flex-wrap gap-1 items-center">
            {/* Light Theme Button */}
            <button
              onClick={() => onChangeTheme('light')}
              aria-label="Light theme"
              className={cn(
                'group size-8 flex items-center justify-center rounded-full transition-colors duration-300',
                currentTheme === 'light'
                  ? 'bg-black/5 dark:bg-white/5 text-black dark:text-white'
                  : 'hover:bg-black/5 dark:hover:bg-white/5'
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-black group-hover:dark:stroke-white transition-colors duration-300 ease-in-out"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </button>

            {/* Dark Theme Button */}
            <button
              onClick={() => onChangeTheme('dark')}
              aria-label="Dark theme"
              className={cn(
                'group size-8 flex items-center justify-center rounded-full transition-colors duration-300',
                currentTheme === 'dark'
                  ? 'bg-black/5 dark:bg-white/5 text-black dark:text-white'
                  : 'hover:bg-black/5 dark:hover:bg-white/5'
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-black group-hover:dark:stroke-white transition-colors duration-300 ease-in-out"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </button>

            {/* System Theme Button */}
            <button
              onClick={() => onChangeTheme('system')}
              aria-label="System theme"
              className={cn(
                'group size-8 flex items-center justify-center rounded-full transition-colors duration-300',
                currentTheme === 'system'
                  ? 'bg-black/5 dark:bg-white/5 text-black dark:text-white'
                  : 'hover:bg-black/5 dark:hover:bg-white/5'
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-black group-hover:dark:stroke-white transition-colors duration-300 ease-in-out"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
