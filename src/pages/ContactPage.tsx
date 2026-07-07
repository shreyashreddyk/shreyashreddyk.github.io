import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Badge } from '../components/Badge';
import { ButtonLink } from '../components/ButtonLink';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { availabilityNote, contactLinks } from '../data/profile';
import { createRevealProps, useMotionPreference } from '../lib/motion';

export function ContactPage() {
  const reducedMotion = useMotionPreference();

  return (
    <PageTransition ariaLabel="Contact page">
      <SEO
        title="Contact"
        description="Contact information for Shreyash Kondakindi, including email and GitHub, plus current role interests."
      />
      <motion.section {...createRevealProps(reducedMotion)}>
        <SectionHeading
          level={1}
          eyebrow="Contact"
          title="Open to AI, data, and analytics opportunities."
          description="Email is the best way to reach me for hiring conversations, project discussions, or portfolio follow-ups."
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
          <Badge variant="accent">Current focus</Badge>
          <h2 className="mt-5 text-3xl font-semibold">What I like working on</h2>
          <ul className="mt-6 grid gap-4 text-base leading-7 text-muted">
            <li>AI engineering work where evaluation and deployment matter as much as the model choice.</li>
            <li>Data and analytics engineering work that turns messy source systems into reliable decision-making inputs.</li>
            <li>Applied modeling problems in fraud, risk, and finance where the system around the model matters too.</li>
          </ul>
        </div>
      </section>
    </PageTransition>
  );
}
