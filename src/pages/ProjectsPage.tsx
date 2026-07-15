import { SEO } from '../components/SEO';
import { ArrowCard } from '../components/ArrowCard';
import { allProjects } from '../data/projects';

export function ProjectsPage() {
  return (
    <div className="mx-auto max-w-screen-sm px-5 py-32">
      <SEO
        title="Projects"
        description="A collection of my projects spanning AI systems, data engineering, fraud modeling, and analytics products, with links to repositories."
      />

      <div className="space-y-10">
        <div className="animate show font-semibold text-black dark:text-white">
          Projects
        </div>
        <ul className="animate show flex flex-col gap-4">
          {allProjects.map((project) => (
            <li key={project.slug}>
              <ArrowCard
                title={project.title}
                description={project.shortDescription}
                href={`/projects/${project.slug}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
