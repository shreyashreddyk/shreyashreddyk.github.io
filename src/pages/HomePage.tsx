import { motion } from 'framer-motion';
import { ArrowRight, Bot, ChartColumn, ServerCog } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectCard } from '../components/ProjectCard';
import { PageShell } from '../components/PageShell';
import { SectionHeading } from '../components/SectionHeading';
import { featuredProjects } from '../data/projects';
import { hero, siteMetadata, strengths } from '../data/profile';
import {
  createRevealProps,
  createStaggerChildVariants,
  createStaggerVariants,
  useMotionPreference,
} from '../lib/motion';
import { getProjectCounts } from '../lib/utils';

const capabilityCards = [
  {
    title: 'AI systems with measurable behavior',
    description:
      'RAG, eval harnesses, serving experiments, and deployment stories that stay grounded in artifacts instead of vague claims.',
    icon: Bot,
  },
  {
    title: 'Analytics pipelines that scale',
    description:
      'From Snowflake marts and Spark workflows to BI automation and fraud-feature generation, I like data work that becomes operationally useful.',
    icon: ChartColumn,
  },
  {
    title: 'Production-minded implementation',
    description:
      'Typed interfaces, CI checks, observability hooks, and accessible frontend polish are part of the deliverable, not cleanup work.',
    icon: ServerCog,
  },
];

export function HomePage() {
  const reducedMotion = useMotionPreference();
  const counts = getProjectCounts();

  return (
    <PageShell ariaLabel="Homepage">
      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
        <motion.div
          className="rounded-[36px] border border-white/80 bg-white/85 p-8 shadow-panel backdrop-blur sm:p-10"
          {...createRevealProps(reducedMotion)}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-spruce">{hero.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-8 text-steel">{hero.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={hero.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-mist transition hover:bg-ink/90 focus:outline-none focus:ring-4 focus:ring-ember/30"
            >
              {hero.primaryCta.label}
              <ArrowRight size={16} />
            </Link>
            <Link
              to={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-clay bg-mist/70 px-5 py-3 text-sm font-medium text-ink transition hover:border-ember hover:text-ember focus:outline-none focus:ring-4 focus:ring-ember/30"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </motion.div>
        <motion.aside
          className="rounded-[36px] border border-clay/70 bg-ink p-8 text-mist shadow-panel sm:p-10"
          {...createRevealProps(reducedMotion, 0.08)}
        >
          <p className="text-sm uppercase tracking-[0.24em] text-clay">Current focus</p>
          <dl className="mt-6 grid gap-5">
            <div>
              <dt className="text-sm text-clay">Based in</dt>
              <dd className="mt-1 font-display text-2xl">{siteMetadata.location}</dd>
            </div>
            <div>
              <dt className="text-sm text-clay">Portfolio scope</dt>
              <dd className="mt-1 font-display text-2xl">{counts.total} public repositories curated</dd>
            </div>
            <div>
              <dt className="text-sm text-clay">Featured depth</dt>
              <dd className="mt-1 font-display text-2xl">{counts.featured} strongest AI and data projects surfaced first</dd>
            </div>
          </dl>
        </motion.aside>
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="What I Optimize For"
          title="Systems that can explain themselves."
          description="The through-line in my work is turning technical complexity into something measurable, reviewable, and useful to other people."
        />
        <motion.div
          className="mt-8 grid gap-5 lg:grid-cols-3"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {capabilityCards.map(({ title, description, icon: Icon }) => (
            <motion.article
              key={title}
              variants={createStaggerChildVariants(reducedMotion)}
              className="rounded-[30px] border border-clay/70 bg-white/75 p-6 shadow-panel"
            >
              <div className="inline-flex rounded-2xl bg-ember/10 p-3 text-ember">
                <Icon size={22} />
              </div>
              <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight">{title}</h2>
              <p className="mt-3 text-base leading-7 text-steel">{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Selected Strengths"
          title="A blend of research rigor, deployment discipline, and frontend care."
        />
        <motion.ul
          className="mt-8 grid gap-4"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {strengths.map((strength) => (
            <motion.li
              key={strength}
              variants={createStaggerChildVariants(reducedMotion)}
              className="rounded-[26px] border border-clay/70 bg-mist/80 px-5 py-5 text-base leading-7 text-steel"
            >
              {strength}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <section className="mt-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Featured Work"
            title="Recent projects with the strongest AI and data signal."
            description="These are the projects I would point a recruiter or collaborator to first."
          />
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 self-start rounded-full border border-clay bg-white/70 px-4 py-2 text-sm font-medium text-ink transition hover:border-ember hover:text-ember focus:outline-none focus:ring-4 focus:ring-ember/30"
          >
            See the full archive
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          {featuredProjects.slice(0, 4).map((project) => (
            <ProjectCard key={project.slug} project={project} variant="featured" />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
