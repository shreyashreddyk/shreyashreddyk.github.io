import { motion } from 'framer-motion';
import { PageShell } from '../components/PageShell';
import { SectionHeading } from '../components/SectionHeading';
import {
  aboutSummary,
  education,
  experienceHighlights,
  selectedResumeBullets,
  skillGroups,
} from '../data/profile';
import {
  createRevealProps,
  createStaggerChildVariants,
  createStaggerVariants,
  useMotionPreference,
} from '../lib/motion';

export function AboutPage() {
  const reducedMotion = useMotionPreference();

  return (
    <PageShell ariaLabel="About page">
      <motion.section {...createRevealProps(reducedMotion)}>
        <SectionHeading
          eyebrow="About"
          title="Public-safe background, grounded in the work."
          description="This page intentionally stays compact and factual: enough context to understand how I work, without turning private source material into a public document dump."
        />
      </motion.section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[32px] border border-white/80 bg-white/80 p-7 shadow-panel">
          <div className="grid gap-5 text-base leading-8 text-steel">
            {aboutSummary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="rounded-[32px] border border-clay/70 bg-mist/80 p-7">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">Skill areas</h2>
          <div className="mt-5 grid gap-5">
            {skillGroups.map((group) => (
              <div key={group.heading}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-spruce">{group.heading}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full border border-clay bg-white/70 px-3 py-1 text-sm text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading title="Education" />
        <motion.div
          className="mt-6 grid gap-5"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {education.map((item) => (
            <motion.article
              key={item.school}
              variants={createStaggerChildVariants(reducedMotion)}
              className="rounded-[28px] border border-clay/70 bg-white/70 p-6"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">{item.school}</h3>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-spruce">{item.years}</p>
              </div>
              <p className="mt-3 text-base font-medium text-ink">{item.credential}</p>
              <p className="mt-3 text-base leading-7 text-steel">{item.detail}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="mt-16">
        <SectionHeading title="Experience highlights" />
        <motion.div
          className="mt-6 grid gap-5 lg:grid-cols-2"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {experienceHighlights.map((item) => (
            <motion.article
              key={item.title}
              variants={createStaggerChildVariants(reducedMotion)}
              className="rounded-[28px] border border-clay/70 bg-mist/80 p-6"
            >
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-steel">{item.statement}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="mt-16">
        <SectionHeading
          title="Selected public-safe resume bullets"
          description="These are summarized for the site and intentionally avoid linking out to raw private PDFs."
        />
        <motion.div
          className="mt-6 grid gap-5"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {selectedResumeBullets.map((item) => (
            <motion.article
              key={item.title}
              variants={createStaggerChildVariants(reducedMotion)}
              className="rounded-[28px] border border-white/80 bg-white/80 p-6 shadow-panel"
            >
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-steel">{item.statement}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </PageShell>
  );
}
