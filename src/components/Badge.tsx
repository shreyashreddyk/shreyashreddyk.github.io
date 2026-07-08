import type { PropsWithChildren } from 'react';
import { cn } from '../lib/utils';

type BadgeProps = PropsWithChildren<{
  variant?: 'accent' | 'neutral' | 'soft';
  className?: string;
}>;

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  accent: 'border-accent/25 bg-accent/[0.12] text-accent',
  neutral: 'border-border/70 bg-white/5 text-text',
  soft: 'border-white/10 bg-white/[0.06] text-muted',
};

export function Badge({ variant = 'neutral', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex min-w-0 max-w-full flex-wrap items-center rounded-full border px-3 py-1.5 text-center text-xs font-semibold uppercase leading-5 tracking-[0.16em] whitespace-normal break-words',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
