import { ArrowUpRight, Sparkles } from 'lucide-react';
import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
  variant?: 'featured' | 'archive';
};

export function ProjectCard({ project, variant = 'archive' }: ProjectCardProps) {
  const isFeatured = variant === 'featured';
  const bullets = isFeatured ? project.bullets.slice(0, 3) : project.bullets.slice(0, 2);
  const highlights = isFeatured ? project.highlights.slice(0, 3) : project.highlights.slice(0, 2);

  return (
    <article
      className={
        isFeatured
          ? 'rounded-[32px] border border-white/80 bg-white/85 p-6 shadow-panel backdrop-blur'
          : 'rounded-[28px] border border-clay/70 bg-white/70 p-5 transition hover:-translate-y-1 hover:shadow-panel'
      }
    >
      <div className="overflow-hidden rounded-[24px] border border-white/70 bg-ink/5">
        <img
          src={project.coverImage}
          alt={`${project.title} project cover`}
          className={isFeatured ? 'aspect-[16/9] w-full object-cover' : 'aspect-[16/9] w-full object-cover'}
        />
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-spruce">{project.category}</p>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{project.title}</h3>
        </div>
        {project.featured ? (
          <span className="inline-flex items-center gap-2 rounded-full bg-ember/10 px-3 py-1 text-xs font-semibold text-ember">
            <Sparkles size={14} />
            Featured
          </span>
        ) : null}
      </div>

      <p className="mt-4 text-base leading-7 text-steel">{project.shortDescription}</p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} project highlights`}>
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="rounded-full border border-spruce/20 bg-spruce/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-spruce"
          >
            {highlight}
          </li>
        ))}
      </ul>

      <p className="mt-5 rounded-[22px] border border-spruce/20 bg-spruce/5 px-4 py-4 text-sm leading-6 text-steel">
        {project.recruiterPitch}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technology stack`}>
        {project.tech.map((item) => (
          <li
            key={item}
            className="rounded-full border border-clay/80 bg-mist/80 px-3 py-1 text-xs font-medium text-ink"
          >
            {item}
          </li>
        ))}
      </ul>

      <ul className="mt-6 grid gap-3 text-sm leading-6 text-steel">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span aria-hidden="true" className="mt-2 h-2 w-2 rounded-full bg-ember" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {project.links.length ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a
              key={`${link.kind}-${link.label}`}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-spruce/20 bg-white/75 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-spruce transition hover:border-ember hover:text-ember focus:outline-none focus:ring-4 focus:ring-ember/20"
              aria-label={`Open ${link.label} for ${project.title}`}
            >
              {link.label}
              <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      ) : null}

      <div className="mt-6">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-mist transition hover:bg-ink/90 focus:outline-none focus:ring-4 focus:ring-ember/30"
          aria-label={`Open ${project.title} on GitHub`}
        >
          View Repository
          <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}
