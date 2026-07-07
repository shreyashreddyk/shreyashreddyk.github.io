import { motion } from 'framer-motion';
import { ArrowRight, Bot, ChartColumn, ServerCog } from 'lucide-react';
import { Badge } from '../components/Badge';
import { ButtonLink } from '../components/ButtonLink';
import { ProjectCard } from '../components/ProjectCard';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { hero, currentFocusAreas, homeCapabilityCards, skillGroups, siteMetadata, timelineTeasers } from '../data/profile';
import { homeFeaturedProjects } from '../data/projects';
import {
  createHeroGlowProps,
  createRevealProps,
  createStaggerChildVariants,
  createStaggerVariants,
  useMotionPreference,
} from '../lib/motion';

const capabilityIcons = [Bot, ServerCog, ChartColumn];

export function HomePage() {
  const reducedMotion = useMotionPreference();

  return (
    <PageTransition ariaLabel="Homepage">
      <SEO
        title="Home"
        description="Shreyash Kondakindi is an AI engineer building LLM systems, data platforms, and analytics products across finance, fraud, and healthcare."
      />

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
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
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-accent/90">
            {siteMetadata.role}
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold sm:text-6xl">{hero.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{hero.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={hero.primaryCta.href} className="px-5 py-3">
              {hero.primaryCta.label}
              <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="secondary" className="px-5 py-3">
              {hero.secondaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.tertiaryCta.href} variant="secondary" className="px-5 py-3">
              {hero.tertiaryCta.label}
            </ButtonLink>
          </div>

          <motion.div
            className="mt-8 rounded-card border border-white/10 bg-white/[0.04] p-4"
            {...createRevealProps(reducedMotion, 0.08)}
          >
            <div className="flex items-center gap-3">
              <motion.span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full bg-emerald-300"
                animate={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: [0.65, 1, 0.65], scale: [1, 1.25, 1] }}
                transition={reducedMotion ? { duration: 0 } : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Current focus
              </p>
            </div>
            <motion.ul
              className="mt-4 flex flex-wrap gap-2"
              variants={createStaggerVariants(reducedMotion)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              aria-label="Current focus areas"
            >
              {currentFocusAreas.map((item) => (
                <motion.li key={item} variants={createStaggerChildVariants(reducedMotion)}>
                  <Badge variant="soft" className="border-accent/20 bg-accent/[0.08] text-text">
                    {item}
                  </Badge>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div className="grid gap-5" {...createRevealProps(reducedMotion, 0.08)}>
          {homeCapabilityCards.map(({ title, description }, index) => {
            const Icon = capabilityIcons[index] ?? Bot;

            return (
              <article key={title} className="surface-panel p-6">
                <div className="inline-flex rounded-2xl border border-accent/20 bg-accent/10 p-3 text-accent">
                  <Icon size={22} />
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{title}</h2>
                <p className="mt-3 text-base leading-7 text-muted">{description}</p>
              </article>
            );
          })}
        </motion.div>
      </section>

      <section className="section-spacing" aria-labelledby="featured-heading">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="featured-heading"
            eyebrow="Featured Projects"
            title="Selected work in AI systems, data engineering, and analytics."
            description="A focused slice of the portfolio that leads with LLM applications and data infrastructure, then moves into fraud and risk analytics."
          />
          <ButtonLink href="/projects" variant="secondary" className="self-start">
            See all projects
            <ArrowRight size={16} />
          </ButtonLink>
        </div>
        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          {homeFeaturedProjects.slice(0, 6).map((project) => (
            <ProjectCard key={project.slug} project={project} variant="featured" />
          ))}
        </div>
      </section>

      <section className="section-spacing" aria-labelledby="skills-heading">
        <SectionHeading
          id="skills-heading"
          eyebrow="Skills Snapshot"
          title="A stack shaped around AI delivery, data movement, and analytics."
          description="The emphasis stays on tools and workflows that show up repeatedly across projects and experience."
        />
        <motion.div
          className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-5"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.heading}
              variants={createStaggerChildVariants(reducedMotion)}
              className="surface-panel p-5"
            >
              <h2 className="text-lg font-semibold">{group.heading}</h2>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${group.heading} skills`}>
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge variant="neutral">{item}</Badge>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="section-spacing" aria-labelledby="timeline-heading">
        <SectionHeading
          id="timeline-heading"
          eyebrow="Timeline"
          title="More context on experience and training."
          description="The work and education pages add the timeline behind the projects without slowing down the homepage story."
        />
        <motion.div
          className="mt-8 grid gap-5 lg:grid-cols-2"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {timelineTeasers.map((item) => (
            <motion.article
              key={item.title}
              variants={createStaggerChildVariants(reducedMotion)}
              className="surface-panel-strong p-7"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{item.title}</p>
              <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
              <div className="mt-6">
                <ButtonLink href={item.href} variant="secondary">
                  {item.ctaLabel}
                  <ArrowRight size={16} />
                </ButtonLink>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="section-spacing" aria-labelledby="contact-cta-heading">
        <motion.div
          className="surface-panel-strong relative overflow-hidden p-8 sm:p-10"
          {...createRevealProps(reducedMotion)}
        >
          <motion.div
            aria-hidden="true"
            className="absolute right-0 top-0 h-28 w-28 rounded-full bg-accent/[0.14] blur-3xl"
            {...createHeroGlowProps(reducedMotion)}
          />
          <SectionHeading
            id="contact-cta-heading"
            eyebrow="Contact"
            title="Hiring for AI, data, or analytics roles that need strong systems execution?"
            description="I am open to conversations about AI engineering, data engineering, analytics engineering, and applied data science roles, especially where LLM systems, scalable pipelines, and business-facing analytics all matter."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${siteMetadata.email}`} className="px-5 py-3">
              Email Me
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" className="px-5 py-3">
              Contact Details
            </ButtonLink>
            <ButtonLink href={siteMetadata.githubUrl} variant="secondary" className="px-5 py-3">
              GitHub
            </ButtonLink>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
