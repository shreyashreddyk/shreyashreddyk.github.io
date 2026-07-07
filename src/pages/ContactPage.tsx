import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { SectionHeading } from '../components/SectionHeading';
import { availabilityNote, contactLinks } from '../data/profile';
import { createRevealProps, useMotionPreference } from '../lib/motion';

export function ContactPage() {
  const reducedMotion = useMotionPreference();

  return (
    <PageShell ariaLabel="Contact page">
      <motion.section {...createRevealProps(reducedMotion)}>
        <SectionHeading
          eyebrow="Contact"
          title="Best reached through simple, public channels."
          description="This site stays intentionally static, so there is no form backend here. Email or GitHub is the cleanest way to start a conversation."
        />
      </motion.section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[34px] border border-white/80 bg-white/80 p-8 shadow-panel">
          <div className="inline-flex rounded-2xl bg-ember/10 p-3 text-ember">
            <Mail size={24} />
          </div>
          <p className="mt-5 max-w-prose text-lg leading-8 text-steel">{availabilityNote}</p>
          <div className="mt-8 grid gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center justify-between rounded-[24px] border border-clay/70 bg-mist/80 px-5 py-4 transition hover:border-ember focus:outline-none focus:ring-4 focus:ring-ember/30"
                aria-label={`${link.label}: ${link.value}`}
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-spruce">{link.label}</p>
                  <p className="mt-2 text-base text-ink">{link.value}</p>
                </div>
                <ArrowUpRight size={18} className="text-steel" />
              </a>
            ))}
          </div>
        </div>
        <div className="rounded-[34px] border border-clay/70 bg-ink p-8 text-mist">
          <h2 className="font-display text-3xl font-semibold tracking-tight">What I like working on</h2>
          <ul className="mt-6 grid gap-4 text-base leading-7 text-clay">
            <li>AI engineering work where evaluation and deployment matter as much as the model choice.</li>
            <li>Data science roles that need strong feature thinking, business framing, and technical execution.</li>
            <li>Product-minded projects where the interface should feel intentional, accessible, and clear.</li>
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
