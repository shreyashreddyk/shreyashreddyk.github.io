import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { Badge } from '../components/Badge';
import { ButtonLink } from '../components/ButtonLink';
import { ProjectCover } from '../components/ProjectCover';
import { SectionHeading } from '../components/SectionHeading';
import { projectsBySlug } from '../data/projects';
import { createRevealProps, createStaggerChildVariants, createStaggerVariants, useMotionPreference } from '../lib/motion';
import { getProjectHref } from '../lib/utils';
import { useParams } from 'react-router-dom';

const detailSections = [
  { key: 'problem', title: 'Problem' },
  { key: 'approach', title: 'Approach' },
  { key: 'impact', title: 'Impact' },
] as const;

export function ProjectDetailPage() {
  const reducedMotion = useMotionPreference();
  const { slug } = useParams();
  const project = slug ? projectsBySlug[slug] : undefined;

  if (!project) {
    return (
      <PageTransition ariaLabel="Project not found page">
      <SEO
          title="Project Not Found"
          description="Requested project detail page could not be found in the portfolio."
          path="/projects"
        />
        <section className="surface-panel-strong p-8 sm:p-10">
          <SectionHeading
            level={1}
            eyebrow="Projects"
            title="Project not found."
            description="The link may be outdated, the slug may be invalid, or the project may no longer be included in this public portfolio."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/projects">
              Back to Projects
              <ArrowLeft size={16} />
            </ButtonLink>
            <ButtonLink href="/" variant="secondary">
              Portfolio Home
              <ArrowRight size={16} />
            </ButtonLink>
          </div>
        </section>
      </PageTransition>
    );
  }

  const relatedProjects = project.relatedSlugs
    .map((relatedSlug) => projectsBySlug[relatedSlug])
    .filter(Boolean);

  return (
    <PageTransition ariaLabel={`${project.title} project detail page`}>
      <SEO
        title={project.title}
        description={project.shortDescription}
        path={`/projects/${project.slug}`}
        image={project.coverImage}
        type="article"
      />

      <section>
        <ButtonLink href="/projects" variant="ghost" className="px-0 pb-2 pt-0 text-sm">
          <ArrowLeft size={16} />
          Back to Projects
        </ButtonLink>

        <motion.div className="mt-4" {...createRevealProps(reducedMotion)}>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">{project.category}</p>
          <h1 className="mt-4 text-4xl font-semibold text-text sm:text-5xl">{project.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{project.shortDescription}</p>
        </motion.div>
      </section>

      <motion.section className="section-spacing" {...createRevealProps(reducedMotion, 0.05)}>
        <ProjectCover
          src={project.coverImage}
          title={project.title}
          category={project.category}
          className="surface-panel-strong"
          imageClassName="aspect-[16/8] w-full object-cover"
        />
      </motion.section>

      <motion.section className="section-spacing surface-panel-strong p-7 sm:p-8" {...createRevealProps(reducedMotion, 0.08)}>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Project Summary</p>
        <p className="mt-4 text-lg leading-8 text-text">{project.projectSummary}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={project.repoUrl} aria-label={`Open ${project.title} on GitHub`}>
            GitHub Repo
            <ArrowUpRight size={16} />
          </ButtonLink>
          {project.links.map((link) => (
            <ButtonLink
              key={`${link.kind}-${link.label}`}
              href={link.url}
              variant="secondary"
              aria-label={`Open ${link.label} for ${project.title}`}
            >
              {link.label}
              <ArrowUpRight size={16} />
            </ButtonLink>
          ))}
        </div>
      </motion.section>

      <section className="section-spacing" aria-labelledby="project-story-heading">
        <SectionHeading
          id="project-story-heading"
          title="What the project solves and how it was built."
          description="Each section stays grounded in the public evidence surfaced in the repository."
        />

        <motion.div
          className="mt-8 grid gap-5 lg:grid-cols-3"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {detailSections.map((section) => (
            <motion.article
              key={section.key}
              variants={createStaggerChildVariants(reducedMotion)}
              className="surface-panel p-6"
            >
              <h2 className="text-2xl font-semibold text-text">{section.title}</h2>
              <p className="mt-4 text-base leading-7 text-muted">{project[section.key]}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="section-spacing" aria-labelledby="resume-bullets-heading">
        <SectionHeading
          id="resume-bullets-heading"
          title="Project highlights"
          description="Outcome-oriented bullets pulled from the strongest public evidence available for this repository."
        />
        <motion.ul
          className="mt-8 grid gap-4"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {project.bullets.map((bullet) => (
            <motion.li
              key={bullet}
              variants={createStaggerChildVariants(reducedMotion)}
              className="surface-panel flex gap-4 px-5 py-5 text-base leading-7 text-muted"
            >
              <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
              <span>{bullet}</span>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <section className="section-spacing" aria-labelledby="tech-stack-heading">
        <SectionHeading
          id="tech-stack-heading"
          title="Tech stack"
          description="Primary tools, platforms, and methods surfaced in the public repo evidence."
        />
        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} technology stack`}>
          {project.tech.map((item) => (
            <li key={item}>
              <Badge variant="neutral">{item}</Badge>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-spacing" aria-labelledby="related-projects-heading">
        <SectionHeading
          id="related-projects-heading"
          title="Related projects"
          description="Neighboring work that reinforces similar skills, systems patterns, or problem areas."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {relatedProjects.map((relatedProject) => (
            <article key={relatedProject.slug} className="surface-panel p-5">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">{relatedProject.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-text">{relatedProject.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{relatedProject.shortDescription}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink href={getProjectHref(relatedProject.slug)} variant="secondary">
                  View Project
                  <ArrowRight size={16} />
                </ButtonLink>
                <ButtonLink href={relatedProject.repoUrl} variant="ghost">
                  GitHub
                  <ArrowUpRight size={16} />
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
