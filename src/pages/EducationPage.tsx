import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../components/Badge';
import { ButtonLink } from '../components/ButtonLink';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { TimelineItem } from '../components/TimelineItem';
import { courseworkThemeDescriptions, educationEntries } from '../data/education';
import {
  createHeroGlowProps,
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
        description="Education, coursework, and technical foundations aligned to AI engineering, data science, and applied analytics."
        path="/education"
      />

      <section className="surface-panel-strong relative overflow-hidden p-8 sm:p-10">
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
        <motion.div {...createRevealProps(reducedMotion)}>
          <SectionHeading
            level={1}
            eyebrow="Education"
            title="Graduate data science training backed by strong engineering fundamentals."
            description="UC San Diego sharpened my work in machine learning, scalable systems, optimization, and modern AI workflows, while BITS Pilani built the mathematical and engineering base behind it."
          />
          <div className="mt-8 flex flex-wrap gap-2" aria-label="Education focus areas">
            {['Machine learning', 'Data science', 'Scalable systems', 'Optimization'].map((item) => (
              <Badge key={item} variant="soft" className="border-accent/20 bg-accent/[0.08] text-text">
                {item}
              </Badge>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section-spacing" aria-labelledby="education-timeline-heading">
        <SectionHeading
          id="education-timeline-heading"
          eyebrow="Degrees"
          title="Academic background"
          description="Coursework and training that support my work across AI systems, data science, analytics, and production-minded engineering."
        />
        <motion.div
          className="mt-8 grid gap-5"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          animate="visible"
        >
          {educationEntries.map((entry) => (
            <motion.div key={entry.institution} variants={createStaggerChildVariants(reducedMotion)}>
              <TimelineItem
                title={entry.institution}
                subtitle={`${entry.credential} · ${entry.program} · ${entry.location}`}
                dateLabel={entry.dates}
                body={entry.summary}
                bullets={entry.highlights}
              >
                <div className="flex flex-wrap gap-2" aria-label={`${entry.institution} academic details`}>
                  {entry.gpa ? <Badge variant="neutral">{entry.gpa}</Badge> : null}
                  {entry.honors?.map((honor) => (
                    <Badge key={honor} variant="neutral">
                      {honor}
                    </Badge>
                  ))}
                </div>
              </TimelineItem>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section-spacing" aria-labelledby="coursework-heading">
        <SectionHeading
          id="coursework-heading"
          eyebrow="Coursework"
          title="Advanced coursework by theme"
          description="Selected classes that best reflect my strengths in ML, systems, statistics, optimization, and engineering foundations."
        />
        <motion.div
          className="mt-8 grid gap-5 lg:grid-cols-2"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          animate="visible"
        >
          {Object.entries(courseworkThemeDescriptions).map(([title, description]) => (
            <motion.article
              key={title}
              variants={createStaggerChildVariants(reducedMotion)}
              className="surface-panel p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{title}</p>
              <p className="mt-4 text-base leading-7 text-muted">{description}</p>
              <div className="mt-5 grid gap-5">
                {educationEntries.map((entry) => {
                  const theme = entry.courseworkByTheme.find((item) => item.title === title);

                  if (!theme?.courses.length) {
                    return null;
                  }

                  return (
                    <div key={`${title}-${entry.institution}`}>
                      <p className="text-sm font-semibold text-text">{entry.institutionLabel}</p>
                      <div className="mt-3 flex flex-wrap gap-2" aria-label={`${entry.institutionLabel} ${title} coursework`}>
                        {theme.courses.map((course) => (
                          <Badge key={course} variant="neutral">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="section-spacing">
        <motion.div className="surface-panel relative overflow-hidden p-7" {...createRevealProps(reducedMotion)}>
          <SectionHeading
            title="See how the coursework connects to the project work."
            description="The projects page shows how these foundations translate into LLM systems, streaming data platforms, fraud analytics, and statistical modeling."
          />
          <div className="mt-6">
            <ButtonLink href="/projects">
              View projects
              <ArrowRight size={16} />
            </ButtonLink>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
