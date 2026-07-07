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
        description="Experience highlights across AI systems, healthcare analytics, financial data workflows, and applied modeling."
      />
      <motion.section {...createRevealProps(reducedMotion)}>
        <SectionHeading
          level={1}
          eyebrow="Work"
          title="Experience across analytics, AI systems, and data delivery."
          description="Roles and project-adjacent work that show how I build, ship, and support data-intensive products."
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
          <h2 className="text-2xl font-semibold">What I bring to a team</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted">
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-2 w-2 rounded-full bg-accent" />
              <span>AI and data systems work that connects modeling, infrastructure, and product delivery.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-2 w-2 rounded-full bg-accent" />
              <span>Experience across healthcare analytics, financial data workflows, BI automation, and fraud analytics.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-2 w-2 rounded-full bg-accent" />
              <span>A practical style that values readable code, measurable behavior, and systems that other people can operate.</span>
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
          title="Selected highlights"
          description="A concise set of project and experience highlights across AI engineering, analytics, and research."
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
