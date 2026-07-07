import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { archiveProjects, featuredProjects } from '../data/projects';
import {
  createRevealProps,
  createStaggerChildVariants,
  createStaggerVariants,
  useMotionPreference,
} from '../lib/motion';
import { groupProjectsByCategory } from '../lib/utils';

export function ProjectsPage() {
  const reducedMotion = useMotionPreference();
  const groupedProjects = groupProjectsByCategory(archiveProjects);

  return (
    <PageTransition ariaLabel="Projects page">
      <SEO
        title="Projects"
        description="Featured and archive portfolio projects spanning AI systems, machine learning, fraud analytics, data engineering, and research."
      />
      <motion.section {...createRevealProps(reducedMotion)}>
        <SectionHeading
          id="projects-heading"
          level={1}
          eyebrow="Projects"
          title="A portfolio organized around strong public evidence."
          description="Featured projects lead with the clearest AI and data depth. Everything else remains visible in the archive grid so the portfolio reflects breadth without hiding the strongest signal."
        />
      </motion.section>

      <section className="section-spacing" aria-labelledby="featured-projects-heading">
        <SectionHeading id="featured-projects-heading" title="Featured projects" />
        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="featured" />
          ))}
        </div>
      </section>

      <section className="section-spacing" aria-labelledby="archive-heading">
        <SectionHeading
          id="archive-heading"
          title="Archive grid"
          description="Every listed public repository is included here with short, public-safe summaries and only evidence-backed highlights."
        />
        <div className="mt-8 grid gap-8">
          {Object.entries(groupedProjects).map(([category, projects]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-text">{category}</h3>
              <motion.div
                className="mt-4 grid gap-5 lg:grid-cols-2"
                variants={createStaggerVariants(reducedMotion)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
              >
                {projects.map((project) => (
                  <motion.div key={project.slug} variants={createStaggerChildVariants(reducedMotion)}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
