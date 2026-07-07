import { cn } from '../lib/utils';

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  level?: 1 | 2 | 3;
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  level = 2,
  className,
}: SectionHeadingProps) {
  const HeadingTag = `h${level}` as const;

  return (
    <div
      className={cn(
        'max-w-prose',
        align === 'center' ? 'mx-auto text-center' : '',
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
      ) : null}
      <HeadingTag id={id} className="text-3xl font-semibold sm:text-4xl">
        {title}
      </HeadingTag>
      {description ? <p className="mt-4 text-base leading-7 text-muted">{description}</p> : null}
    </div>
  );
}
