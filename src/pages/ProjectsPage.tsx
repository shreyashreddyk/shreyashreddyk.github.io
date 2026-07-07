import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { allProjects, featuredProjects, projectCategories, type ProjectCategory } from '../data/projects';
import {
  createRevealProps,
  createStaggerChildVariants,
  createStaggerVariants,
  useMotionPreference,
} from '../lib/motion';
import { cn, filterProjects } from '../lib/utils';
import { Badge } from '../components/Badge';

const filterChips: Array<ProjectCategory | 'All'> = ['All', ...projectCategories];

export function ProjectsPage() {
  const reducedMotion = useMotionPreference();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const filteredProjects = filterProjects(allProjects, activeCategory, searchQuery);

  return (
    <PageTransition ariaLabel="Projects page">
      <SEO
        title="Projects"
        description="Projects spanning AI systems, data engineering, machine learning, fraud analytics, and statistical modeling."
        path="/projects"
      />

      <motion.section className="surface-panel-strong p-8 sm:p-10" {...createRevealProps(reducedMotion)}>
        <Badge variant="accent">Projects</Badge>
        <SectionHeading
          id="projects-heading"
          level={1}
          eyebrow="Recruiter-ready project portfolio"
          title="Projects spanning AI systems, data engineering, ML, fraud and risk analytics, and statistical modeling."
          description="This page leads with the strongest public evidence, but every GitHub repository stays visible. The result is a portfolio that shows both flagship depth and honest breadth."
          className="mt-5 max-w-4xl"
        />

        <div className="mt-8 flex flex-wrap gap-3">
          <Badge variant="soft" className="border-accent/20 bg-accent/[0.08] text-text">
            {featuredProjects.length} featured projects
          </Badge>
          <Badge variant="soft" className="border-white/10 bg-white/[0.04] text-text">
            {allProjects.length} public repositories
          </Badge>
        </div>
      </motion.section>

      <motion.section
        className="section-spacing surface-panel p-5 sm:p-6"
        aria-labelledby="project-controls-heading"
        {...createRevealProps(reducedMotion, 0.06)}
      >
        <SectionHeading
          id="project-controls-heading"
          title="Browse by category or search across the full project set."
          description="Search matches titles, descriptions, highlights, and tech tags so recruiters can jump quickly to the work most relevant to a role."
        />

        <div className="mt-6 flex flex-wrap gap-3">
          {filterChips.map((category) => {
            const isActive = activeCategory === category;
            const count =
              category === 'All'
                ? allProjects.length
                : allProjects.filter((project) => project.category === category).length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'focus-ring inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition',
                  isActive
                    ? 'border-accent/40 bg-accent/[0.14] text-accent'
                    : 'border-border/70 bg-white/5 text-muted hover:border-accent/40 hover:text-text',
                )}
                aria-pressed={isActive}
              >
                <span>{category}</span>
                <span className="rounded-full bg-black/20 px-2 py-0.5 text-[11px]">{count}</span>
              </button>
            );
          })}
        </div>

        <label className="mt-5 block">
          <span className="sr-only">Search projects</span>
          <span className="relative block">
            <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search projects, tools, methods, or problem areas"
              className="focus-ring w-full rounded-card border border-border/70 bg-white/5 py-3 pl-11 pr-4 text-sm text-text placeholder:text-muted"
            />
          </span>
        </label>
      </motion.section>

      <section className="section-spacing" aria-labelledby="featured-projects-heading">
        <SectionHeading
          id="featured-projects-heading"
          eyebrow="Featured Projects"
          title="A focused shortlist for AI, data, and analytics hiring conversations."
          description="These projects do the clearest job of showing end-to-end ownership, measurable behavior, and strong public evidence."
        />
        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="featured" />
          ))}
        </div>
      </section>

      <section className="section-spacing" aria-labelledby="all-projects-heading">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="all-projects-heading"
            eyebrow="All Projects"
            title="The full project catalog."
            description="Every public GitHub repository appears here, including earlier or lighter-weight work that still contributes to the overall portfolio story."
          />
          <p className="text-sm text-muted">
            Showing {filteredProjects.length} of {allProjects.length} projects
          </p>
        </div>

        {filteredProjects.length ? (
          <motion.div
            className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            variants={createStaggerVariants(reducedMotion)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.slug} variants={createStaggerChildVariants(reducedMotion)}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="surface-panel mt-8 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">No matches</p>
            <h3 className="mt-4 text-xl font-semibold text-text">No projects match this search yet.</h3>
            <p className="mt-3 max-w-prose text-base leading-7 text-muted">
              Try a broader category, remove a filter, or search for a tool name like `FastAPI`, `Spark`, `XGBoost`, or `causal` to surface related work.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Badge variant="neutral">Broaden category</Badge>
              <Badge variant="neutral">Search by tool</Badge>
              <Badge variant="neutral">Search by problem area</Badge>
            </div>
          </div>
        )}
      </section>
    </PageTransition>
  );
}
