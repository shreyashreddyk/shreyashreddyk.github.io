import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { Badge } from '../components/Badge';
import { ButtonLink } from '../components/ButtonLink';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { StatCard } from '../components/StatCard';
import { TimelineItem } from '../components/TimelineItem';
import {
  academicHighlights,
  courseworkThemeDescriptions,
  educationEntries,
  whyEducationMatters,
} from '../data/education';
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
        description="Transcript-backed education, coursework, and academic highlights aligned to AI engineering, data science, and applied analytics."
        path="/education"
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
            eyebrow="Education"
            title="Academic training across AI, data science, systems, and applied analytics."
            description="This page uses transcript-backed, public-safe content only. The throughline is modern data science at UC San Diego plus engineering rigor from BITS Pilani Hyderabad."
          />
          <div className="mt-8 flex flex-wrap gap-2" aria-label="Education alignment">
            {['AI engineering', 'Data science', 'Systems', 'Applied analytics'].map((item) => (
              <Badge key={item} variant="soft" className="border-accent/20 bg-accent/[0.08] text-text">
                {item}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.aside
          className="surface-panel p-7"
          {...createRevealProps(reducedMotion, 0.08)}
          aria-labelledby="education-scope-heading"
        >
          <div className="inline-flex rounded-2xl border border-accent/20 bg-accent/10 p-3 text-accent">
            <GraduationCap size={22} />
          </div>
          <h2 id="education-scope-heading" className="mt-5 text-2xl font-semibold">
            Public-safe scope
          </h2>
          <p className="mt-3 text-base leading-7 text-muted">
            The page includes only institution, degree, program, dates, GPA or CGPA, honors, and selected coursework that can be safely published from the transcript record.
          </p>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted">
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-2 w-2 rounded-full bg-accent" />
              <span>No transcript PDFs, scanned pages, student IDs, PID values, or transcript metadata are published.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-2 w-2 rounded-full bg-accent" />
              <span>Coursework is grouped to show technical depth without publishing raw academic records.</span>
            </li>
          </ul>
        </motion.aside>
      </section>

      <section className="section-spacing" aria-labelledby="academic-highlights-heading">
        <SectionHeading
          id="academic-highlights-heading"
          eyebrow="Academic Highlights"
          title="Transcript-backed academic highlights."
          description="Strong grades, formal milestones, and applied program structure provide quick evidence of rigor without exposing sensitive academic records."
        />
        <motion.div
          className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-5"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {academicHighlights.map((item) => (
            <motion.div key={`${item.label}-${item.value}`} variants={createStaggerChildVariants(reducedMotion)}>
              <StatCard label={item.label} value={item.value} description={item.description} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section-spacing" aria-labelledby="education-timeline-heading">
        <SectionHeading
          id="education-timeline-heading"
          eyebrow="Timeline"
          title="Education timeline"
          description="Degrees, milestones, and selected academic context behind the current portfolio."
        />
        <motion.div
          className="mt-8 grid gap-5"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
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
                {entry.notes?.length ? (
                  <div className="mt-4 grid gap-2">
                    {entry.notes.map((note) => (
                      <p key={note} className="text-sm leading-6 text-muted">
                        {note}
                      </p>
                    ))}
                  </div>
                ) : null}
              </TimelineItem>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section-spacing" aria-labelledby="coursework-heading">
        <SectionHeading
          id="coursework-heading"
          eyebrow="Coursework"
          title="Coursework grouped by the themes most relevant to AI and data work."
          description="The focus stays on the classes that best explain current strengths in ML, systems, statistics, optimization, and engineering foundations."
        />
        <motion.div
          className="mt-8 grid gap-5 lg:grid-cols-2"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
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

      <section className="section-spacing" aria-labelledby="why-it-matters-heading">
        <SectionHeading
          id="why-it-matters-heading"
          eyebrow="Why It Matters"
          title="The academic story translates directly into current technical work."
          description="The value is not just coursework breadth. It is how the graduate and undergraduate foundations combine into systems judgment, modeling rigor, and practical engineering execution."
        />
        <motion.div
          className="mt-8 grid gap-5 lg:grid-cols-2"
          variants={createStaggerVariants(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {whyEducationMatters.map((item) => (
            <motion.article
              key={item.title}
              variants={createStaggerChildVariants(reducedMotion)}
              className="surface-panel-strong p-7"
            >
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2" aria-label={`${item.title} supporting points`}>
                {item.supportingPoints.map((point) => (
                  <Badge key={point} variant="soft" className="border-accent/20 bg-accent/[0.08] text-text">
                    {point}
                  </Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div className="mt-8" {...createRevealProps(reducedMotion)}>
          <div className="surface-panel relative overflow-hidden p-7">
            <SectionHeading
              title="See how the coursework shows up in the project work."
              description="The projects page carries the implementation side of these foundations, from LLM systems and fraud analytics to distributed data processing."
            />
            <div className="mt-6">
              <ButtonLink href="/projects">
                View projects
                <ArrowRight size={16} />
              </ButtonLink>
            </div>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
