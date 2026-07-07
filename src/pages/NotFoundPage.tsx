import { ArrowLeft, Home } from 'lucide-react';
import { ButtonLink } from '../components/ButtonLink';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';

export function NotFoundPage() {
  return (
    <PageTransition ariaLabel="Not found page">
      <SEO
        title="Page Not Found"
        description="The requested page could not be found in this portfolio."
        path="/404"
      />
      <section className="surface-panel-strong relative overflow-hidden p-8 sm:p-10">
        <SectionHeading
          level={1}
          eyebrow="404"
          title="This page could not be found."
          description="The link may be outdated, the route may be invalid, or the page may have moved inside the portfolio."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">
            <Home size={16} />
            Back to Home
          </ButtonLink>
          <ButtonLink href="/projects" variant="secondary">
            <ArrowLeft size={16} />
            Browse Projects
          </ButtonLink>
        </div>
      </section>
    </PageTransition>
  );
}
