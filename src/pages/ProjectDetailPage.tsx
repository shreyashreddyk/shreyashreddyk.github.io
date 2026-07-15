import { useParams } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { BackToPrev } from '../components/BackToPrev';
import { ArrowCard } from '../components/ArrowCard';
import { projectsBySlug } from '../data/projects';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = slug ? projectsBySlug[slug] : undefined;

  if (!project) {
    return (
      <div className="mx-auto max-w-screen-sm px-5 py-32">
        <SEO title="Project Not Found" description="Requested project detail page could not be found." />
        <div className="space-y-4">
          <BackToPrev href="/projects">Back to projects</BackToPrev>
          <div className="font-semibold text-black dark:text-white mt-10">Project not found</div>
          <p className="text-sm opacity-60">The project you are looking for does not exist or may have been moved.</p>
        </div>
      </div>
    );
  }

  // Calculate dynamic reading time based on total word count
  const calculateReadingTime = () => {
    const text = [
      project.projectSummary,
      project.problem,
      project.approach,
      project.impact,
      ...project.bullets,
    ].join(' ');
    const wordCount = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(wordCount / 200);
    return `${minutes} min read`;
  };

  const readingTimeText = calculateReadingTime();

  const relatedProjects = project.relatedSlugs
    .map((relatedSlug) => projectsBySlug[relatedSlug])
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-screen-sm px-5 animate show">
      <SEO
        title={project.title}
        description={project.shortDescription}
        type="article"
      />

      <div>
        <BackToPrev href="/projects">Back to projects</BackToPrev>
      </div>

      <div className="space-y-1 my-10">
        <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider opacity-50">
          <span>{project.category}</span>
          <span>&bull;</span>
          <span>{readingTimeText}</span>
        </div>
        <h1 className="text-2xl font-semibold text-black dark:text-white mt-2">
          {project.title}
        </h1>
        
        <nav className="flex flex-wrap gap-1.5 text-sm font-medium mt-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block decoration-black/15 dark:decoration-white/30 hover:decoration-black/25 hover:dark:decoration-white/50 text-current hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out underline underline-offset-2"
            >
              repo
            </a>
          )}
          {project.links.map((link) => (
            <span key={`${link.kind}-${link.label}`} className="flex gap-1.5">
              <span className="opacity-30">/</span>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block decoration-black/15 dark:decoration-white/30 hover:decoration-black/25 hover:dark:decoration-white/50 text-current hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out underline underline-offset-2"
              >
                {link.label.toLowerCase()}
              </a>
            </span>
          ))}
        </nav>
      </div>

      <article className="prose dark:prose-invert prose-headings:font-semibold prose-p:font-serif prose-headings:text-black prose-headings:dark:text-white text-black/70 dark:text-white/80">
        <h2>Overview</h2>
        <p>{project.projectSummary}</p>

        <h2>Key Achievements</h2>
        <ul>
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <h2>The Problem</h2>
        <p>{project.problem}</p>

        <h2>Approach & Implementation</h2>
        <p>{project.approach}</p>

        <h2>Impact & Outcomes</h2>
        <p>{project.impact}</p>

        <h2>Technologies</h2>
        <p className="font-mono text-sm opacity-70 leading-relaxed">
          {project.tech.join(' · ')}
        </p>
      </article>

      {relatedProjects.length > 0 && (
        <div className="mt-20 space-y-6">
          <p className="section-label">Related Projects</p>
          <ul className="flex flex-col gap-4">
            {relatedProjects.map((relatedProject) => (
              <li key={relatedProject.slug}>
                <ArrowCard
                  title={relatedProject.title}
                  description={relatedProject.shortDescription}
                  href={`/projects/${relatedProject.slug}`}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
