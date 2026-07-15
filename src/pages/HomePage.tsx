import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { siteMetadata, skillGroups, contactLinks } from '../data/profile';
import { homeFeaturedProjects } from '../data/projects';
import { workEntries } from '../data/work';
import { cn } from '../lib/utils';

export function HomePage() {
  const [hoveredTags, setHoveredTags] = useState<string[]>([]);
  const [hoveredEntryId, setHoveredEntryId] = useState<string | null>(null);
  const [avatarFailed, setAvatarFailed] = useState(false);

  // Flatten skills from profile groups to render in the sidebar
  const allSkills = skillGroups.flatMap((group) => group.items);

  // Normalize comparison to match tags robustly
  const cleanString = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  const isSkillMatch = (skill: string, tags: string[]) => {
    const cleanSkill = cleanString(skill);
    return tags.some((tag) => {
      const cleanTag = cleanString(tag);
      return cleanTag.includes(cleanSkill) || cleanSkill.includes(cleanTag);
    });
  };

  const handleMouseEnter = (id: string, tags: string[]) => {
    setHoveredEntryId(id);
    setHoveredTags(tags);
  };

  const handleMouseLeave = () => {
    setHoveredEntryId(null);
    setHoveredTags([]);
  };

  return (
    <div className="mx-auto max-w-5xl px-5">
      <SEO
        title="Home"
        description="Portfolio of Shreyash Kondakindi, AI Engineer and Data Scientist specializing in LLM systems, scalable data pipelines, fraud modeling, and analytics products."
      />

      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-14">
        {/* LEFT COLUMN — sticky sidebar */}
        <aside className="md:sticky md:top-24 md:self-start space-y-8 animate show">
          {/* Identity */}
          <div className="flex flex-col gap-3">
            {!avatarFailed ? (
              <img
                src="/avatar.jpg"
                alt={siteMetadata.name}
                onError={() => setAvatarFailed(true)}
                className="w-24 h-24 rounded-full object-cover ring-2 ring-black/10 dark:ring-white/10"
              />
            ) : (
              <div className="w-24 h-24 rounded-full flex items-center justify-center bg-stone-200 dark:bg-stone-850 text-stone-600 dark:text-stone-300 font-bold text-xl tracking-wide border border-black/10 dark:border-white/10">
                SK
              </div>
            )}
            <div>
              <h1 className="text-base font-bold tracking-tight text-black dark:text-white">
                {siteMetadata.name}
              </h1>
              <p className="text-xs opacity-50 mt-0.5 leading-relaxed">
                AI Engineering<br />Data Science · Distributed Systems
              </p>
            </div>
            <a
              href={siteMetadata.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit px-3 py-1 rounded border border-black/20 dark:border-white/20 text-xs font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200"
            >
              Resume ↗
            </a>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <p className="section-label">Skills</p>
            <ul className="flex flex-wrap gap-1.5">
              {allSkills.map((skill) => {
                const isActive = hoveredTags.length > 0 && isSkillMatch(skill, hoveredTags);
                const isDimmed = hoveredTags.length > 0 && !isActive;

                return (
                  <li
                    key={skill}
                    className={cn(
                      'skill-chip px-2.5 py-0.5 rounded border border-black/15 dark:border-white/20 text-xs transition-all duration-200 cursor-default',
                      isActive && 'skill-active',
                      isDimmed && 'skill-dim'
                    )}
                  >
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-2">
            <p className="section-label">Connect</p>
            <ul className="flex flex-col gap-1.5">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.label !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="inline-block text-xs decoration-black/15 dark:decoration-white/30 hover:decoration-black/25 hover:dark:decoration-white/50 text-current hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out underline underline-offset-2"
                  >
                    {link.label.toLowerCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* RIGHT COLUMN — scrollable content */}
        <main className="min-w-0 space-y-20 py-2">
          {/* About */}
          <section className="space-y-4">
            <article className="space-y-4">
              <p className="animate show">
                I build retrieval pipelines, evaluation workflows, distributed data platforms, and analytics applications across finance, fraud, healthcare, and university operations. My work blends AI engineering, data science, and systems execution with a strong focus on production-ready delivery.
              </p>
              <p className="animate show">
                I focus on building products that are technically rigorous, easy to explain, and highly performant. That means developing evaluation-gated retrieval pipelines, benchmarking throughput and tail-latency for serving architectures like vLLM, and designing persistent database storage systems.
              </p>
            </article>
          </section>

          {/* Work Experience */}
          <section className="animate show space-y-6">
            <div className="flex items-center justify-between">
              <h5 className="section-label">Work Experience</h5>
              <Link
                to="/work"
                className="text-xs decoration-black/15 dark:decoration-white/30 hover:decoration-black/25 hover:dark:decoration-white/50 text-current hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out underline underline-offset-2"
              >
                See all
              </Link>
            </div>
            <ul className="flex flex-col divide-y divide-black/8 dark:divide-white/8">
              {workEntries.map((entry, i) => {
                const entryId = `work-${i}`;
                const isDimmed = hoveredEntryId !== null && hoveredEntryId !== entryId;
                const entryTags = entry.skills;

                return (
                  <li
                    key={entryId}
                    onMouseEnter={() => handleMouseEnter(entryId, entryTags)}
                    onMouseLeave={handleMouseLeave}
                    className={cn(
                      'work-entry group py-5 cursor-default transition-all duration-200',
                      isDimmed && 'entry-dim'
                    )}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                      <div className="flex items-baseline gap-3 min-w-0">
                        <span className="entry-number font-mono text-sm opacity-20 shrink-0 transition-all duration-200 group-hover:opacity-60 group-hover:scale-110">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="entry-title font-bold text-black/80 dark:text-white/80 transition-all duration-200 group-hover:text-black group-hover:dark:text-white group-hover:scale-[1.01]">
                          {entry.company}
                        </span>
                        <span className="text-sm opacity-40 truncate italic hidden sm:inline">{entry.role}</span>
                      </div>
                      <span className="text-xs font-mono opacity-30 whitespace-nowrap shrink-0 self-start sm:self-auto">
                        {entry.dates}
                      </span>
                    </div>
                    {/* Mobile role label */}
                    <div className="text-xs opacity-40 italic sm:hidden ml-8 mt-0.5">
                      {entry.role}
                    </div>
                    <p className="mt-2 text-sm ml-8 leading-relaxed opacity-60">
                      {entry.summary}
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Recent Projects */}
          <section className="animate show space-y-6">
            <div className="flex items-center justify-between">
              <h5 className="section-label">Recent Projects</h5>
              <Link
                to="/projects"
                className="text-xs decoration-black/15 dark:decoration-white/30 hover:decoration-black/25 hover:dark:decoration-white/50 text-current hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out underline underline-offset-2"
              >
                See all
              </Link>
            </div>
            <ul className="flex flex-col divide-y divide-black/8 dark:divide-white/8">
              {homeFeaturedProjects.slice(0, 3).map((project, i) => {
                const entryId = `project-${project.slug}`;
                const isDimmed = hoveredEntryId !== null && hoveredEntryId !== entryId;
                const entryTags = project.tech;

                return (
                  <li
                    key={entryId}
                    onMouseEnter={() => handleMouseEnter(entryId, entryTags)}
                    onMouseLeave={handleMouseLeave}
                    className={cn(
                      'project-entry group py-5 transition-all duration-200',
                      isDimmed && 'entry-dim'
                    )}
                  >
                    <Link
                      to={`/projects/${project.slug}`}
                      className="block -mx-3 px-3 py-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-150"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <div className="flex items-baseline gap-3 min-w-0">
                          <span className="entry-number font-mono text-sm opacity-20 shrink-0 transition-all duration-200 group-hover:opacity-60 group-hover:scale-110">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="entry-title font-bold text-black/80 dark:text-white/80 truncate transition-all duration-200 group-hover:text-black group-hover:dark:text-white group-hover:scale-[1.01]">
                            {project.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          {project.repoUrl && (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-mono opacity-30 hover:opacity-75 whitespace-nowrap transition-opacity"
                              onClick={(e) => e.stopPropagation()}
                            >
                              GitHub ↗
                            </a>
                          )}
                          <span className="text-xs font-mono opacity-20 group-hover:opacity-60 transition-opacity">→</span>
                        </div>
                      </div>
                      <p className="mt-1.5 text-sm opacity-50 ml-8 leading-relaxed italic">
                        {project.shortDescription}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
