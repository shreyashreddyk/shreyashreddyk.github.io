import { SEO } from '../components/SEO';
import { BackToPrev } from '../components/BackToPrev';

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-screen-sm px-5 py-32 animate show">
      <SEO
        title="Page Not Found"
        description="The requested page could not be found."
        path="/404"
      />

      <div className="space-y-10">
        <div className="font-semibold text-black dark:text-white">
          404
        </div>
        <article className="prose dark:prose-invert prose-p:font-serif prose-headings:font-semibold prose-headings:text-black prose-headings:dark:text-white text-black/70 dark:text-white/80">
          <p>This page could not be found. The link may be outdated or the page may have been moved.</p>
        </article>
        <div>
          <BackToPrev href="/">Back to home</BackToPrev>
        </div>
      </div>
    </div>
  );
}
