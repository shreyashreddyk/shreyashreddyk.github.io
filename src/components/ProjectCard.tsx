import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import type { Project } from '../data/projects';
import { createHoverLiftProps, useMotionPreference } from '../lib/motion';
import { Badge } from './Badge';
import { ButtonLink } from './ButtonLink';

type ProjectCardProps = {
  project: Project;
  variant?: 'featured' | 'archive';
};

export function ProjectCard({ project, variant = 'archive' }: ProjectCardProps) {
  const reducedMotion = useMotionPreference();
  const isFeatured = variant === 'featured';
  const bullets = isFeatured ? project.bullets.slice(0, 3) : project.bullets.slice(0, 2);
  const highlights = isFeatured ? project.highlights.slice(0, 3) : project.highlights.slice(0, 2);

  return (
    <motion.article
      className={
        isFeatured ? 'surface-panel-strong overflow-hidden p-6 sm:p-7' : 'surface-panel overflow-hidden p-5 sm:p-6'
      }
      {...createHoverLiftProps(reducedMotion)}
    >
      <div className="overflow-hidden rounded-card border border-white/10 bg-bg/60">
        <img
          src={project.coverImage}
          alt={`${project.title} project cover`}
          className="aspect-[16/9] w-full object-cover"
        />
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">{project.category}</p>
          <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
        </div>
        {project.featured ? (
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.12] px-3 py-1 text-xs font-semibold text-accent">
            <Sparkles size={14} />
            Featured
          </span>
        ) : null}
      </div>

      <p className="mt-4 text-base leading-7 text-muted">{project.shortDescription}</p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} project highlights`}>
        {highlights.map((highlight) => (
          <li key={highlight}>
            <Badge variant="accent">{highlight}</Badge>
          </li>
        ))}
      </ul>

      <p className="mt-5 rounded-card border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-muted">
        {project.recruiterPitch}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technology stack`}>
        {project.tech.map((item) => (
          <li key={item}>
            <Badge variant="neutral">{item}</Badge>
          </li>
        ))}
      </ul>

      <ul className="mt-6 grid gap-3 text-sm leading-6 text-muted">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span aria-hidden="true" className="mt-2 h-2 w-2 rounded-full bg-accent" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {project.links.length ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.links.map((link) => (
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

      <div className="mt-6">
        <ButtonLink href={project.repoUrl} aria-label={`Open ${project.title} on GitHub`}>
          View Repository
          <ArrowUpRight size={16} />
        </ButtonLink>
      </div>
    </motion.article>
  );
}
