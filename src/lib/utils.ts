import { archiveProjects, featuredProjects, type Project } from '../data/projects';

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function groupProjectsByCategory(projects: Project[]) {
  return projects.reduce<Record<string, Project[]>>((accumulator, project) => {
    accumulator[project.category] = [...(accumulator[project.category] ?? []), project];
    return accumulator;
  }, {});
}

export function getProjectCounts() {
  return {
    featured: featuredProjects.length,
    archive: archiveProjects.length,
    total: featuredProjects.length + archiveProjects.length,
  };
}
