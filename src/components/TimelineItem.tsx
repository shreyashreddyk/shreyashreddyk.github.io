import type { PropsWithChildren } from 'react';
import { Badge } from './Badge';
import { cn } from '../lib/utils';

type TimelineItemProps = PropsWithChildren<{
  title: string;
  subtitle?: string;
  dateLabel: string;
  body: string;
  bullets?: string[];
  className?: string;
}>;

export function TimelineItem({
  title,
  subtitle,
  dateLabel,
  body,
  bullets,
  className,
  children,
}: TimelineItemProps) {
  return (
    <article className={cn('surface-panel relative overflow-hidden p-6 sm:p-7', className)}>
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent/0 via-accent/40 to-accent/0" aria-hidden="true" />
      <div className="grid gap-5 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8">
        <div className="flex flex-wrap items-start gap-3 md:block md:space-y-3">
          <Badge variant="accent" className="shrink-0 justify-center md:justify-start">
            {dateLabel}
          </Badge>
          {subtitle ? <p className="min-w-0 text-sm text-muted">{subtitle}</p> : null}
        </div>
        <div className="min-w-0">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-3 text-base leading-7 text-muted">{body}</p>
          {bullets?.length ? (
            <ul className="mt-5 grid gap-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-muted">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {children ? <div className="mt-5">{children}</div> : null}
        </div>
      </div>
    </article>
  );
}
