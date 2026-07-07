import { motion } from 'framer-motion';
import { ArrowRight, Bot, ChartColumn, ServerCog } from 'lucide-react';
import { Badge } from '../components/Badge';
import { ButtonLink } from '../components/ButtonLink';
import { ProjectCard } from '../components/ProjectCard';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { StatCard } from '../components/StatCard';
import { featuredProjects } from '../data/projects';
import { hero, siteMetadata, strengths } from '../data/profile';
import {
  createHeroGlowProps,
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
  const statCards = [
    {
      label: 'Based in',
      value: siteMetadata.location,
      description: 'Graduate work and portfolio projects grounded in production-minded AI and analytics delivery.',
    },
    {
      label: 'Public repos',
      value: `${counts.total}`,
      description: 'Curated repositories surfaced with evidence-backed summaries and recruiter-friendly framing.',
    },
    {
      label: 'Featured depth',
      value: `${counts.featured}`,
      description: 'The strongest AI systems, fraud analytics, and data engineering work surfaced first.',
    },
  ];

  return (
    <PageTransition ariaLabel="Homepage">
      <SEO
        title="Home"
        description="Portfolio homepage for Shreyash Kondakindi featuring frontend care, AI systems, analytics work, and public-safe recruiter-facing highlights."
      />

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
        <motion.div
          className="surface-panel-strong relative overflow-hidden p-8 sm:p-10"
          {...createRevealProps(reducedMotion)}
        >
          <motion.div
            aria-hidden="true"
            className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/[0.16] blur-3xl"
            {...createHeroGlowProps(reducedMotion)}
          />
          <motion.div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl"
            {...createHeroGlowProps(reducedMotion)}
          />
          <Badge variant="accent">{hero.eyebrow}</Badge>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold sm:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-8 text-muted">{hero.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={hero.primaryCta.href} className="px-5 py-3">
              {hero.primaryCta.label}
              <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="secondary" className="px-5 py-3">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </motion.div>
        <motion.div
          className="grid gap-5"
          {...createRevealProps(reducedMotion, 0.08)}
        >
          {statCards.map((card) => (
            <StatCard key={card.label} {...card} />
          ))}
        </motion.div>
      </section>

      <section className="section-spacing" aria-labelledby="optimize-heading">
        <SectionHeading
          id="optimize-heading"
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
              className="surface-panel p-6"
            >
              <div className="inline-flex rounded-2xl border border-accent/20 bg-accent/10 p-3 text-accent">
                <Icon size={22} />
              </div>
              <h2 className="mt-5 text-2xl font-semibold">{title}</h2>
              <p className="mt-3 text-base leading-7 text-muted">{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="section-spacing" aria-labelledby="strengths-heading">
        <SectionHeading
          id="strengths-heading"
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
              className="surface-panel px-5 py-5 text-base leading-7 text-muted"
            >
              {strength}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <section className="section-spacing" aria-labelledby="featured-heading">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="featured-heading"
            eyebrow="Featured Work"
            title="Recent projects with the strongest AI and data signal."
            description="These are the projects I would point a recruiter or collaborator to first."
          />
          <ButtonLink href="/projects" variant="secondary" className="self-start">
            See the full archive
            <ArrowRight size={16} />
          </ButtonLink>
        </div>
        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          {featuredProjects.slice(0, 4).map((project) => (
            <ProjectCard key={project.slug} project={project} variant="featured" />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
