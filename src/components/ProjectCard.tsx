import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import type { Project } from '../data/projects';
import { createHoverLiftProps, useMotionPreference } from '../lib/motion';
import { cn, getProjectHref } from '../lib/utils';
import { Badge } from './Badge';
import { ButtonLink } from './ButtonLink';
import { ProjectCover } from './ProjectCover';
import { TechBadge } from './TechBadge';

type ProjectCardProps = {
  project: Project;
  variant?: 'featured' | 'default';
};

export function ProjectCard({ project, variant = 'default' }: ProjectCardProps) {
  const reducedMotion = useMotionPreference();
  const isFeatured = variant === 'featured';
  const bullets = isFeatured ? project.bullets.slice(0, 3) : project.bullets.slice(0, 2);
  const highlights = isFeatured ? project.highlights.slice(0, 3) : project.highlights.slice(0, 2);

  return (
    <motion.article
      className={cn(
        'overflow-hidden',
        isFeatured ? 'surface-panel-strong p-6 sm:p-7' : 'surface-panel p-5 sm:p-6',
      )}
      {...createHoverLiftProps(reducedMotion)}
    >
      <ProjectCover src={project.coverImage} title={project.title} category={project.category} />

      <div className="mt-5 flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">{project.category}</p>
          <h3 className="mt-3 text-2xl font-semibold text-text">{project.title}</h3>
        </div>
        {project.featured ? (
          <span className="inline-flex max-w-full shrink-0 items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.12] px-3 py-1 text-xs font-semibold text-accent">
            <Sparkles size={14} />
            Featured
          </span>
        ) : null}
      </div>

      <p className="mt-4 text-base leading-7 text-muted">{project.shortDescription}</p>

      {highlights.length ? (
        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} project highlights`}>
          {highlights.map((highlight) => (
            <li key={highlight}>
              <Badge variant="accent">{highlight}</Badge>
            </li>
          ))}
        </ul>
      ) : null}

      {isFeatured ? (
        <p className="mt-5 rounded-card border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-muted">
          {project.projectSummary}
        </p>
      ) : null}

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technology stack`}>
        {project.tech.map((item) => (
          <li key={item}>
            <TechBadge label={item} />
          </li>
        ))}
      </ul>

      {bullets.length ? (
        <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {project.links.length ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.links.slice(0, isFeatured ? project.links.length : 2).map((link) => (
            <ButtonLink
              key={`${link.kind}-${link.label}`}
              href={link.url}
              variant="secondary"
              className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent"
              aria-label={`Open ${link.label} for ${project.title}`}
            >
              {link.label}
              <ArrowUpRight size={14} />
            </ButtonLink>
          ))}
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-3">
        <ButtonLink href={getProjectHref(project.slug)} variant="secondary" aria-label={`View details for ${project.title}`}>
          Project Details
          <ArrowRight size={16} />
        </ButtonLink>
        <ButtonLink href={project.repoUrl} aria-label={`Open ${project.title} on GitHub`}>
          GitHub Repo
          <ArrowUpRight size={16} />
        </ButtonLink>
      </div>
    </motion.article>
  );
}
