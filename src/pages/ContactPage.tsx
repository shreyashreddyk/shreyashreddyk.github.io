import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Mail } from 'lucide-react';
import { Badge } from '../components/Badge';
import { ButtonLink } from '../components/ButtonLink';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { availabilityNote, contactLinks, siteMetadata } from '../data/profile';
import { createRevealProps, useMotionPreference } from '../lib/motion';

export function ContactPage() {
  const reducedMotion = useMotionPreference();

  return (
    <PageTransition ariaLabel="Contact page">
      <SEO
        title="Contact"
        description="Contact Shreyash Kondakindi for AI engineering, data engineering, analytics engineering, and applied data science opportunities."
        path="/contact"
      />
      <motion.section {...createRevealProps(reducedMotion)}>
        <SectionHeading
          level={1}
          eyebrow="Contact"
          title="Open to AI, data, and analytics opportunities."
          description="Email is the fastest path for hiring conversations, project follow-ups, and role discussions. GitHub and LinkedIn stay available here, and the public resume file will be added soon."
        />
      </motion.section>

      <section className="section-spacing grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="surface-panel-strong p-8">
          <div className="inline-flex rounded-2xl border border-accent/20 bg-accent/10 p-3 text-accent">
            <Mail size={24} />
          </div>
          <p className="mt-5 max-w-prose text-lg leading-8 text-muted">{availabilityNote}</p>
          <div className="mt-8 grid gap-4">
            {contactLinks.map((link) => (
              <ButtonLink
                key={link.label}
                href={link.href}
                variant="secondary"
                className="justify-between rounded-card px-5 py-4 text-left"
                aria-label={`${link.label}: ${link.value}`}
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{link.label}</p>
                  <p className="mt-2 text-base text-text">{link.value}</p>
                </div>
                <ArrowUpRight size={18} className="text-muted" />
              </ButtonLink>
            ))}
          </div>
        </div>
        <div className="surface-panel p-8">
          <Badge variant="accent">Resume status</Badge>
          <div className="mt-5 inline-flex rounded-2xl border border-accent/20 bg-accent/10 p-3 text-accent">
            <FileText size={22} />
          </div>
          <h2 className="mt-5 text-3xl font-semibold">Resume available on request</h2>
          <p className="mt-4 text-base leading-7 text-muted">
            A sanitized public PDF will be added as soon as the final shareable version is ready. Until then, the Work page and project detail pages carry the public-safe recruiting story.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="neutral">Email for resume</Badge>
            <Badge variant="neutral">LinkedIn available</Badge>
            <Badge variant="neutral">Public-safe content only</Badge>
          </div>
          <div className="mt-8 rounded-card border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Current focus</p>
            <ul className="mt-4 grid gap-4 text-base leading-7 text-muted">
              <li>AI engineering work where evaluation and deployment matter as much as the model choice.</li>
              <li>Data and analytics engineering work that turns messy source systems into reliable decision-making inputs.</li>
              <li>Applied modeling problems in fraud, risk, and finance where the system around the model matters too.</li>
            </ul>
          </div>
          {!siteMetadata.resumeUrl ? (
            <p className="mt-5 text-sm leading-6 text-muted">
              The footer and contact surfaces intentionally stay in placeholder mode until `public/resume.pdf` exists.
            </p>
          ) : null}
        </div>
      </section>
    </PageTransition>
  );
}
