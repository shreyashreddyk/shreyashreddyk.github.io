import type { Project, ProjectCategory } from '../data/projects';

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function getProjectHref(slug: string) {
  return `/projects/${slug}`;
}

export function matchesProjectQuery(project: Project, query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return true;
  }

  const haystack = [
    project.title,
    project.category,
    project.shortDescription,
    project.projectSummary,
    project.problem,
    project.approach,
    project.impact,
    ...project.tech,
    ...project.highlights,
  ]
    .join(' ')
    .toLowerCase();

  return haystack.includes(normalizedQuery);
}

export function filterProjects(projects: Project[], category: ProjectCategory | 'All', query: string) {
  return projects.filter((project) => {
    const matchesCategory = category === 'All' || project.category === category;
    return matchesCategory && matchesProjectQuery(project, query);
  });
}

function escapeSvgText(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function splitTitle(title: string) {
  const words = title.split(/\s+/);
  const lines: string[] = [];
  let currentLine = '';

  words.forEach((word) => {
    const nextLine = currentLine ? `${currentLine} ${word}` : word;

    if (nextLine.length <= 20 || !currentLine) {
      currentLine = nextLine;
      return;
    }

    lines.push(currentLine);
    currentLine = word;
  });

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines.slice(0, 3);
}

export function createProjectCoverFallback(title: string, category: string) {
  const safeCategory = escapeSvgText(category.toUpperCase());
  const safeLines = splitTitle(title).map(escapeSvgText);
  const titleTspans = safeLines
    .map((line, index) => `<tspan x="112" y="${230 + index * 84}">${line}</tspan>`)
    .join('');

  const svg = `
    <svg width="1600" height="900" viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1600" height="900" fill="#07111F"/>
      <rect x="56" y="56" width="1488" height="788" rx="40" fill="url(#panel)" stroke="rgba(255,255,255,0.12)"/>
      <circle cx="1260" cy="198" r="156" fill="url(#glowA)" fill-opacity="0.52"/>
      <circle cx="290" cy="716" r="188" fill="url(#glowB)" fill-opacity="0.42"/>
      <rect x="112" y="120" width="520" height="42" rx="21" fill="#0EA5E9" fill-opacity="0.16" stroke="#38BDF8" stroke-opacity="0.4"/>
      <text x="142" y="148" fill="#7DD3FC" font-family="IBM Plex Sans, sans-serif" font-size="24" font-weight="700" letter-spacing="0.18em">${safeCategory}</text>
      <text x="112" y="230" fill="#F8FAFC" font-family="Space Grotesk, sans-serif" font-size="88" font-weight="700">${titleTspans}</text>
      <text x="116" y="520" fill="#CBD5E1" font-family="IBM Plex Sans, sans-serif" font-size="32" font-weight="500">GitHub portfolio project with generated fallback cover</text>
      <path d="M116 640C244 544 344 500 442 500C542 500 654 556 790 650C920 740 1030 784 1120 784C1216 784 1312 742 1420 650" stroke="#67E8F9" stroke-width="10" stroke-linecap="round"/>
      <path d="M116 572C230 492 338 452 446 452C554 452 666 492 802 572C934 650 1036 690 1120 690C1210 690 1312 650 1420 564" stroke="#F8FAFC" stroke-opacity="0.2" stroke-width="8" stroke-linecap="round"/>
      <defs>
        <linearGradient id="panel" x1="80" y1="80" x2="1470" y2="820" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0B1728"/>
          <stop offset="1" stop-color="#091320"/>
        </linearGradient>
        <radialGradient id="glowA" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1260 198) rotate(90) scale(156)">
          <stop stop-color="#38BDF8"/>
          <stop offset="1" stop-color="#38BDF8" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="glowB" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(290 716) rotate(90) scale(188)">
          <stop stop-color="#14B8A6"/>
          <stop offset="1" stop-color="#14B8A6" stop-opacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  `.trim();

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
