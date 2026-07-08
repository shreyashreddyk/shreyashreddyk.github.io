import { Badge } from './Badge';
import { getTechLogo } from '../lib/techLogos';

type TechBadgeProps = {
  label: string;
};

export function TechBadge({ label }: TechBadgeProps) {
  const Icon = getTechLogo(label);

  if (!Icon) {
    return <Badge variant="neutral">{label}</Badge>;
  }

  return (
    <Badge variant="neutral" className="relative justify-center overflow-hidden">
      <Icon aria-hidden="true" focusable="false" className="absolute h-[1.05rem] w-[1.05rem] text-text" />
      <span className="sr-only">{label}</span>
      <span aria-hidden="true" className="opacity-0">
        {label}
      </span>
    </Badge>
  );
}
