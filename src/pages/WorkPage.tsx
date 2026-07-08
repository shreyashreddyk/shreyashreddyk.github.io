import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Badge } from '../components/Badge';
import { ButtonLink } from '../components/ButtonLink';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { WorkTimelineEntry } from '../components/WorkTimelineEntry';
import { siteMetadata } from '../data/profile';
import { experienceThemes, workEntries } from '../data/work';
import {
  createHeroGlowProps,
  createRevealProps,
  createStaggerChildVariants,
  createStaggerVariants,
  useMotionPreference,
} from '../lib/motion';

export function WorkPage() {
  const reducedMotion = useMotionPreference();

  return (
    <PageTransition ariaLabel="Work page">
      <SEO
        title="Work"
        description="Work experience across AI systems, data science, healthcare analytics, and finance workflows."
        path="/work"
      />

      <section>
        <motion.div className="surface-panel-strong relative overflow-hidden p-8 sm:p-10" {...createRevealProps(reducedMotion)}>
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

          <SectionHeading
            level={1}
            eyebrow="Work"
            title="I build across AI products, data science, and production systems."
            description="Across these roles, I kept coming back to the same kind of work: shipping AI workflows, improving inference and evaluation systems, building reliable data platforms, and delivering analytics that people could actually use."
          />

          <div className="mt-8 flex flex-wrap gap-2" aria-label="Work positioning">
            {['AI engineering', 'Data science', 'Analytics engineering', 'Applied ML'].map((item) => (
              <Badge key={item} variant="soft" className="border-accent/20 bg-accent/[0.08] text-text">
                {item}
              </Badge>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section-spacing" aria-labelledby="experience-heading">
        <SectionHeading
          id="experience-heading"
          eyebrow="Timeline"
          title="I’ve focused my work on AI systems, data platforms, and analytics with clear downstream impact."
          description="This timeline highlights the production work I owned, the outcomes I can support with evidence, and the systems I built to help teams make decisions faster and with more confidence."
        />
        <motion.div
          className="mt-8 grid gap-5"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          animate="visible"
        >
          {workEntries.map((entry) => (
            <motion.div key={`${entry.company}-${entry.role}`} variants={createStaggerChildVariants(reducedMotion)}>
              <WorkTimelineEntry entry={entry} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section-spacing" aria-labelledby="themes-heading">
        <SectionHeading
          id="themes-heading"
          eyebrow="Experience Themes"
          title="Four patterns show up again and again in my work."
          description="At a high level, I keep leaning into AI systems thinking, reliable data movement, measurable analytics delivery, and cross-functional execution."
        />
        <motion.div
          className="mt-8 grid gap-5 lg:grid-cols-2"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          animate="visible"
        >
          {experienceThemes.map((theme) => (
            <motion.article
              key={theme.title}
              variants={createStaggerChildVariants(reducedMotion)}
              className="surface-panel p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{theme.title}</p>
              <p className="mt-4 text-base leading-7 text-muted">{theme.description}</p>
              <div className="mt-5 flex flex-wrap gap-2" aria-label={`${theme.title} supporting points`}>
                {theme.supportingPoints.map((point) => (
                  <Badge key={point} variant="neutral">
                    {point}
                  </Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="section-spacing" aria-labelledby="next-step-heading">
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
            id="next-step-heading"
            eyebrow="Next Step"
            title="I’m looking for AI, data science, or analytics work where strong systems execution matters."
            description="The best fit for me is work where model behavior, data reliability, and stakeholder-facing delivery all matter at the same time. That includes LLM systems, ML-ready platforms, experimentation-heavy analytics, and production data products."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/projects">
              View projects
              <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink href={`mailto:${siteMetadata.email}`} variant="secondary" aria-label="Email Shreyash">
              <Mail size={16} />
              Contact
            </ButtonLink>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
