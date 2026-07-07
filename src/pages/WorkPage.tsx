import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { TimelineItem } from '../components/TimelineItem';
import { aboutSummary, experienceHighlights, selectedResumeBullets } from '../data/profile';
import {
  createRevealProps,
  createStaggerChildVariants,
  createStaggerVariants,
  useMotionPreference,
} from '../lib/motion';

export function WorkPage() {
  const reducedMotion = useMotionPreference();
  const intro = aboutSummary.slice(0, 2);

  return (
    <PageTransition ariaLabel="Work page">
      <SEO
        title="Work"
        description="Experience highlights and public-safe resume bullets that foreground execution quality across AI systems, healthcare analytics, and research workflows."
      />
      <motion.section {...createRevealProps(reducedMotion)}>
        <SectionHeading
          level={1}
          eyebrow="Work"
          title="Execution signal across analytics, AI systems, and delivery."
          description="A compact work page built for recruiters: factual, public-safe, and focused on the kinds of outcomes, systems, and responsibilities that show how I work."
        />
      </motion.section>

      <section className="section-spacing grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface-panel p-7">
          <h2 className="text-2xl font-semibold">How I approach the work</h2>
          <div className="mt-5 grid gap-4">
            {intro.map((paragraph) => (
              <p key={paragraph} className="text-base leading-7 text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="surface-panel-strong p-7">
          <h2 className="text-2xl font-semibold">What recruiters should expect to see here</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted">
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-2 w-2 rounded-full bg-accent" />
              <span>Evidence-backed claims tied to public artifacts, documented workflows, or saved reports.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-2 w-2 rounded-full bg-accent" />
              <span>Experience surfaced through responsibilities, systems thinking, and measurable execution signal.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-2 w-2 rounded-full bg-accent" />
              <span>Clear separation between public-safe summaries and any private source material that stays out of the repo.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-spacing" aria-labelledby="experience-heading">
        <SectionHeading
          id="experience-heading"
          title="Experience highlights"
          description="Selected roles and workstreams that show product-minded data and AI execution."
        />
        <motion.div
          className="mt-8 grid gap-5"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
        >
          {experienceHighlights.map((item, index) => (
            <motion.div key={item.title} variants={createStaggerChildVariants(reducedMotion)}>
              <TimelineItem
                title={item.title}
                dateLabel={index < 2 ? 'Professional work' : 'Applied analytics'}
                body={item.statement}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section-spacing" aria-labelledby="resume-heading">
        <SectionHeading
          id="resume-heading"
          title="Selected public-safe resume bullets"
          description="Summarized to stay web-appropriate while still showing technical range, ownership, and implementation depth."
        />
        <motion.div
          className="mt-8 grid gap-5 lg:grid-cols-2"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
        >
          {selectedResumeBullets.map((item) => (
            <motion.div key={item.title} variants={createStaggerChildVariants(reducedMotion)}>
              <TimelineItem
                title={item.title}
                dateLabel="Selected work"
                body={item.statement}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </PageTransition>
  );
}
