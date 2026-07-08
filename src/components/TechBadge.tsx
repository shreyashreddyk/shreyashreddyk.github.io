import { Badge } from './Badge';
import { getTechLogoEntry } from '../lib/techLogos';

type TechBadgeProps = {
  label: string;
};

export function TechBadge({ label }: TechBadgeProps) {
  const logoEntry = getTechLogoEntry(label);

  if (!logoEntry) {
    return <Badge variant="neutral">{label}</Badge>;
  }

  return (
    <Badge variant="neutral" className="gap-2 pr-3">
      <span aria-hidden="true" className="inline-flex shrink-0 items-center gap-1.5">
        {logoEntry.icons.map((Icon, index) => (
          <Icon key={`${label}-${index}`} focusable="false" className="h-[0.95rem] w-[0.95rem] shrink-0 text-text" />
        ))}
      </span>
      <span>{label}</span>
    </Badge>
  );
}
