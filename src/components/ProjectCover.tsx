import { useState } from 'react';
import type { ProjectCategory } from '../data/projects';
import { createProjectCoverFallback, cn } from '../lib/utils';

type ProjectCoverProps = {
  src?: string;
  title: string;
  category: ProjectCategory;
  alt?: string;
  className?: string;
  imageClassName?: string;
};

export function ProjectCover({
  src,
  title,
  category,
  alt,
  className,
  imageClassName,
}: ProjectCoverProps) {
  const fallbackSrc = createProjectCoverFallback(title, category);
  const [imageSrc, setImageSrc] = useState(src || fallbackSrc);

  return (
    <div className={cn('overflow-hidden rounded-card border border-white/10 bg-bg/60', className)}>
      <img
        src={imageSrc}
        alt={alt ?? `${title} project cover`}
        className={cn('aspect-[16/9] w-full object-cover', imageClassName)}
        onError={() => {
          if (imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc);
          }
        }}
      />
    </div>
  );
}
