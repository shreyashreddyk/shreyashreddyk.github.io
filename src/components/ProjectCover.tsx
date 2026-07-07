import { useEffect, useState } from 'react';
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
  const resolvedSrc = src || fallbackSrc;
  const [imageSrc, setImageSrc] = useState(resolvedSrc);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setImageSrc(resolvedSrc);
    setIsLoaded(false);
  }, [resolvedSrc]);

  return (
    <div className={cn('relative overflow-hidden rounded-card border border-white/10 bg-bg/60', className)}>
      {!isLoaded ? <div aria-hidden="true" className="absolute inset-0 animate-pulse bg-white/[0.05]" /> : null}
      <img
        src={imageSrc}
        alt={alt ?? `${title} project cover`}
        className={cn(
          'aspect-[16/9] w-full object-cover transition duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0',
          imageClassName,
        )}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          if (imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc);
            return;
          }

          setIsLoaded(true);
        }}
      />
    </div>
  );
}
