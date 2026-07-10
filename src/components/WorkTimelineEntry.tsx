import { Badge } from './Badge';
import { ButtonLink } from './ButtonLink';
import { TechBadge } from './TechBadge';
import { cn } from '../lib/utils';
import type { WorkEntry } from '../data/work';
import { FileText } from 'lucide-react';

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
      <div className="grid gap-5 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8">
        <div className="flex flex-wrap items-start gap-3 md:block md:space-y-4 md:pr-2">
          <Badge variant="accent" className="shrink-0 justify-center md:justify-start">
            {entry.dates}
          </Badge>
          <div className="min-w-0 space-y-1.5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{entry.company}</p>
            <p className="text-sm leading-6 text-muted">{entry.location}</p>
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="text-2xl font-semibold">{entry.role}</h3>
          <p className="mt-3 text-base leading-7 text-muted">{entry.summary}</p>

          {entry.links?.length ? (
            <div className="mt-5 flex flex-wrap gap-3" aria-label={`${entry.company} related documents`}>
              {entry.links.map((link) => (
                <ButtonLink key={link.url} href={link.url} variant="secondary" className="px-3 py-2 text-sm">
                  <FileText size={16} />
                  {link.label}
                </ButtonLink>
              ))}
            </div>
          ) : null}

          <ul className="mt-5 grid gap-3" aria-label={`${entry.company} highlights`}>
            {entry.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-muted">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
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
              <TechBadge key={skill} label={skill} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
