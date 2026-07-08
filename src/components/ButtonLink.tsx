import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

type ButtonLinkProps = PropsWithChildren<{
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}> &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'aria-label' | 'target' | 'rel'>;

const variantClasses: Record<NonNullable<ButtonLinkProps['variant']>, string> = {
  primary:
    'bg-accent text-slate-950 hover:bg-sky-200 shadow-lift border border-accent/60',
  secondary:
    'border border-border/80 bg-white/5 text-text hover:border-accent/60 hover:bg-accent-soft/60',
  ghost: 'border border-transparent bg-transparent text-muted hover:text-text hover:bg-white/5',
};

function isExternalHref(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href) || /\/[^?#]+\.[a-z0-9]+(?:[?#].*)?$/i.test(href);
}

export function ButtonLink({
  href,
  variant = 'primary',
  className,
  children,
  target,
  rel,
  ...rest
}: ButtonLinkProps) {
  const classes = cn(
    'focus-ring inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition duration-200',
    variantClasses[variant],
    className,
  );

  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        className={classes}
        target={target ?? (href.startsWith('http') ? '_blank' : undefined)}
        rel={rel ?? (href.startsWith('http') ? 'noreferrer' : undefined)}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
