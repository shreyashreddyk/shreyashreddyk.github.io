import { SEO } from '../components/SEO';
import { workEntries } from '../data/work';

export function WorkPage() {
  return (
    <div className="mx-auto max-w-screen-sm px-5 animate show">
      <SEO
        title="Work"
        description="Detailed timeline of my professional work experience across AI products, data science, and production systems."
      />

      <div className="space-y-10">
        <div className="font-semibold text-black dark:text-white">
          Work
        </div>
        <ul className="flex flex-col space-y-8">
          {workEntries.map((entry, index) => (
            <li key={`${entry.company}-${entry.role}-${index}`} className="space-y-2">
              <div className="text-sm opacity-60 font-mono">
                {entry.dates}
              </div>
              <div className="font-semibold text-black dark:text-white text-lg">
                {entry.company}
              </div>
              <div className="text-sm opacity-70 italic">
                {entry.role}
              </div>
              <article className="prose dark:prose-invert prose-p:font-serif prose-headings:font-semibold prose-headings:text-black prose-headings:dark:text-white text-black/70 dark:text-white/80">
                <p className="not-prose text-sm leading-relaxed mb-3 opacity-80">{entry.summary}</p>
                <ul>
                  {entry.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
                {entry.links && entry.links.length > 0 && (
                  <div className="mt-4 flex gap-3 text-xs font-mono">
                    {entry.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-black/15 dark:decoration-white/30 hover:text-black dark:hover:text-white transition-colors duration-300"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
