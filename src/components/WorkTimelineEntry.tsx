import { Badge } from './Badge';
import { cn } from '../lib/utils';
import type { WorkEntry } from '../data/work';

type WorkTimelineEntryProps = {
  entry: WorkEntry;
  className?: string;
};

export function WorkTimelineEntry({ entry, className }: WorkTimelineEntryProps) {
  return (
    <article className={cn('surface-panel relative overflow-hidden p-6 sm:p-7', className)}>
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0"
      />
      <div className="grid gap-6 md:grid-cols-[12.5rem_minmax(0,1fr)] md:gap-8">
        <div className="space-y-4 md:pr-2">
          <Badge variant="accent" className="justify-center md:justify-start">
            {entry.dates}
          </Badge>
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{entry.company}</p>
            <p className="text-sm leading-6 text-muted">{entry.location}</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">{entry.role}</h3>
          <p className="mt-3 text-base leading-7 text-muted">{entry.summary}</p>

          <ul className="mt-5 grid gap-3" aria-label={`${entry.company} highlights`}>
            {entry.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted">
                <span aria-hidden="true" className="mt-2 h-2 w-2 rounded-full bg-accent" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {entry.awards?.length ? (
            <p className="mt-5 text-sm text-muted">
              <span className="font-semibold text-text">Recognition:</span> {entry.awards.join(' · ')}
            </p>
          ) : null}

          {entry.note ? <p className="mt-4 text-sm text-muted">{entry.note}</p> : null}

          <div className="mt-5 flex flex-wrap gap-2" aria-label={`${entry.company} skills`}>
            {entry.skills.map((skill) => (
              <Badge key={skill} variant="neutral">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
