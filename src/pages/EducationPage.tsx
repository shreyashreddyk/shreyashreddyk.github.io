import { motion } from 'framer-motion';
import { Badge } from '../components/Badge';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { TimelineItem } from '../components/TimelineItem';
import { aboutSummary, education, skillGroups } from '../data/profile';
import {
  createRevealProps,
  createStaggerChildVariants,
  createStaggerVariants,
  useMotionPreference,
} from '../lib/motion';

export function EducationPage() {
  const reducedMotion = useMotionPreference();

  return (
    <PageTransition ariaLabel="Education page">
      <SEO
        title="Education"
        description="Academic background, coursework framing, and technical skill areas for Shreyash Kondakindi."
      />
      <motion.section {...createRevealProps(reducedMotion)}>
        <SectionHeading
          level={1}
          eyebrow="Education"
          title="Academic foundation with applied systems and analytics depth."
          description="Coursework and graduate project work that support hands-on AI systems, scalable data work, and thoughtful experimentation."
        />
      </motion.section>

      <section className="section-spacing grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="surface-panel-strong p-7">
          <h2 className="text-2xl font-semibold">Education context</h2>
          <div className="mt-5 grid gap-4">
            {aboutSummary.slice(1, 3).map((paragraph) => (
              <p key={paragraph} className="text-base leading-7 text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="surface-panel p-7">
          <h2 className="text-2xl font-semibold">Technical skill areas</h2>
          <div className="mt-5 grid gap-5">
            {skillGroups.map((group) => (
              <div key={group.heading}>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{group.heading}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="neutral">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing" aria-labelledby="education-timeline-heading">
        <SectionHeading
          id="education-timeline-heading"
          title="Education timeline"
          description="Degrees and coursework context that shape the current portfolio."
        />
        <motion.div
          className="mt-8 grid gap-5"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
        >
          {education.map((item) => (
            <motion.div key={item.school} variants={createStaggerChildVariants(reducedMotion)}>
              <TimelineItem
                title={item.school}
                subtitle={item.credential}
                dateLabel={item.years}
                body={item.detail}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </PageTransition>
  );
}
