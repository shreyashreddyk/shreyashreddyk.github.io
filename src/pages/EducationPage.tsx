import { SEO } from '../components/SEO';
import { educationEntries } from '../data/education';

export function EducationPage() {
  return (
    <div className="mx-auto max-w-screen-sm px-5 py-32 animate show">
      <SEO
        title="Education"
        description="Detailed background of my academic training, technical coursework, and degrees from UC San Diego and BITS Pilani."
      />

      <div className="space-y-10">
        <div className="font-semibold text-black dark:text-white">
          Education
        </div>
        <ul className="flex flex-col space-y-12">
          {educationEntries.map((entry, index) => (
            <li key={`${entry.institution}-${index}`} className="space-y-3">
              <div className="text-sm opacity-60 font-mono">
                {entry.dates}
              </div>
              <div className="font-semibold text-black dark:text-white text-lg">
                {entry.institution}
              </div>
              <div className="text-sm opacity-70 italic">
                {entry.credential} in {entry.program}
              </div>
              
              <article className="prose dark:prose-invert prose-p:font-serif prose-headings:font-semibold prose-headings:text-black prose-headings:dark:text-white text-black/70 dark:text-white/80">
                <p className="not-prose text-sm leading-relaxed mb-3 opacity-80">
                  {entry.summary} {entry.gpa && <span className="font-mono text-xs opacity-75">({entry.gpa} GPA)</span>}
                </p>
                <ul>
                  {entry.highlights.map((highlight, hIdx) => (
                    <li key={hIdx}>{highlight}</li>
                  ))}
                </ul>

                {entry.courseworkByTheme.some(t => t.courses.length > 0) && (
                  <div className="mt-4 not-prose">
                    <p className="font-mono text-xs uppercase tracking-wider opacity-50 mb-2">Relevant Coursework</p>
                    <ul className="space-y-2 text-sm leading-relaxed opacity-85">
                      {entry.courseworkByTheme
                        .filter(theme => theme.courses.length > 0)
                        .map((theme) => (
                          <li key={theme.title}>
                            <span className="font-medium text-black dark:text-white">{theme.title}: </span>
                            <span className="font-serif italic text-black/60 dark:text-white/60">
                              {theme.courses.join(', ')}
                            </span>
                          </li>
                        ))}
                    </ul>
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
