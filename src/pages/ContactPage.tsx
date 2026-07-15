import { SEO } from '../components/SEO';
import { contactLinks, availabilityNote } from '../data/profile';

export function ContactPage() {
  return (
    <div className="mx-auto max-w-screen-sm px-5 py-32 animate show">
      <SEO
        title="Contact"
        description="Contact Shreyash Kondakindi for opportunities in AI engineering, data science, and analytics systems."
      />

      <div className="space-y-10">
        <div className="font-semibold text-black dark:text-white">
          Contact
        </div>
        <article className="prose dark:prose-invert prose-p:font-serif prose-headings:font-semibold prose-headings:text-black prose-headings:dark:text-white text-black/70 dark:text-white/80">
          <p>{availabilityNote}</p>
        </article>
        <ul className="space-y-6">
          {contactLinks.map((link) => (
            <li key={link.label} className="flex flex-col gap-1">
              <span className="font-mono text-xs uppercase tracking-wider opacity-40">
                {link.label}
              </span>
              <a
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="w-fit text-black dark:text-white underline underline-offset-4 decoration-black/15 dark:decoration-white/30 hover:decoration-black/35 hover:dark:decoration-white/50 transition-colors duration-300"
              >
                {link.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
