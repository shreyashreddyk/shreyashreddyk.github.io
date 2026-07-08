import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import { Badge } from '../components/Badge';
import { ButtonLink } from '../components/ButtonLink';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { WorkTimelineEntry } from '../components/WorkTimelineEntry';
import { siteMetadata } from '../data/profile';
import { experienceThemes, resumeCta, workEntries } from '../data/work';
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

          <SectionHeading
            level={1}
            eyebrow="Work"
            title="Experience across AI products, data science, and production systems."
            description="The common thread is systems execution: AI workflows, research-backed inference work, cloud and warehouse delivery, and analytics products built for real operators and stakeholders."
          />

          <div className="mt-8 flex flex-wrap gap-2" aria-label="Work positioning">
            {['AI engineering', 'Data science', 'Analytics engineering', 'Applied ML'].map((item) => (
              <Badge key={item} variant="soft" className="border-accent/20 bg-accent/[0.08] text-text">
                {item}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.aside
          className="surface-panel relative overflow-hidden p-7"
          {...createRevealProps(reducedMotion, 0.08)}
          aria-labelledby="resume-cta-heading"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0"
          />
          <div className="inline-flex rounded-2xl border border-accent/20 bg-accent/10 p-3 text-accent">
            <FileText size={22} />
          </div>
          <h2 id="resume-cta-heading" className="mt-5 text-2xl font-semibold">
            Resume
          </h2>
          <p className="mt-3 text-base leading-7 text-muted">
            The public resume PDF mirrors the experience highlights on this page and links directly from the site footer.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {resumeCta.mode === 'download' && resumeCta.href ? (
              <ButtonLink href={resumeCta.href}>
                {resumeCta.label}
                <ArrowRight size={16} />
              </ButtonLink>
            ) : (
              <span className="inline-flex items-center rounded-full border border-border/80 bg-white/5 px-4 py-2.5 text-sm font-medium text-text">
                {resumeCta.label}
              </span>
            )}
          </div>
          <p className="mt-4 text-sm leading-6 text-muted">{resumeCta.helperText}</p>
        </motion.aside>
      </section>

      <section className="section-spacing" aria-labelledby="experience-heading">
        <SectionHeading
          id="experience-heading"
          eyebrow="Timeline"
          title="Work experience aligned to AI systems, data platforms, and measurable analytics delivery."
          description="Each role highlights production ownership, grounded metrics, and systems that supported downstream decisions."
        />
        <motion.div
          className="mt-8 grid gap-5"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
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
          title="The work clusters around four recurring strengths."
          description="This is the higher-level view across the timeline: AI systems thinking, reliable data movement, measurable analytics, and cross-functional delivery."
        />
        <motion.div
          className="mt-8 grid gap-5 lg:grid-cols-2"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
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
            title="Interested in AI, data science, or analytics work with strong systems execution."
            description="The best fit is work where model behavior, data reliability, and stakeholder-facing delivery all matter. That includes LLM systems, ML-ready platforms, experimentation-heavy analytics, and production data products."
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
