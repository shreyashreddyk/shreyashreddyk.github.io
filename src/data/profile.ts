export type ContactLink = {
  label: string;
  href: string;
  value: string;
};

export type ResumeHighlight = {
  title: string;
  statement: string;
};

export const siteMetadata = {
  name: 'Shreyash Kondakindi',
  role: 'AI/ML Engineer and Data Scientist',
  location: 'San Diego, California',
  email: 'kshreyashreddy@gmail.com',
  githubUrl: 'https://github.com/shreyashreddyk',
};

export const hero = {
  eyebrow: 'AI systems, analytics, and production-minded data work',
  title: 'Building evidence-backed AI and data products that hold up outside the notebook.',
  summary:
    'I work across retrieval systems, LLM evaluation, model-serving performance, fraud analytics, and scalable data pipelines, with a focus on honest measurement, reproducible workflows, and polished user-facing delivery.',
  primaryCta: {
    label: 'View Projects',
    href: '/projects',
  },
  secondaryCta: {
    label: 'Get in Touch',
    href: '/contact',
  },
};

export const strengths = [
  'Production-oriented GenAI systems with retrieval, evaluation, observability, and deployment discipline.',
  'Data products and analytics pipelines spanning healthcare, finance, fraud modeling, and large-scale distributed processing.',
  'A bias toward truthful reporting: metrics stay tied to saved artifacts, documented workflows, or clearly stated assumptions.',
];

export const aboutSummary = [
  'I am an M.S. Data Science candidate at UC San Diego with professional experience in healthcare analytics and investment-bank research workflows, plus graduate project work across RAG, serving systems, fraud analytics, causal inference, and statistical modeling.',
  'My recent work has centered on AI systems that need more than a demo: typed APIs, evaluation harnesses, CI-visible checks, deployment runbooks, and clear operational boundaries.',
  'I enjoy projects where product polish and technical rigor have to coexist, especially when the outcome needs to be legible to both technical reviewers and hiring managers.',
];

export const education = [
  {
    school: 'University of California, San Diego',
    credential: 'M.S. in Data Science',
    years: '2024–2026',
    detail:
      'Coursework includes machine learning, scalable data systems, statistical models, probabilistic reasoning, optimization, geometry of data, and efficient AI for data science.',
  },
  {
    school: 'Birla Institute of Technology and Science, Pilani',
    credential: 'B.E. in Mechanical Engineering, Minor in Finance',
    years: '2019–2023',
    detail:
      'Coursework included machine learning, data science foundations, probability and statistics, optimization, and finance-oriented quantitative analysis.',
  },
];

export const experienceHighlights: ResumeHighlight[] = [
  {
    title: 'Accordion · Data Scientist, Healthcare Analytics',
    statement:
      'Built healthcare analytics and ML-ready data marts across Snowflake, SQL, Matillion, and HIPAA-governed workflows, while automating reporting and validation pipelines that saved 8+ client hours daily.',
  },
  {
    title: 'Accordion · Computer Vision Review Workflow',
    statement:
      'Built CV-assisted healthcare review tooling using YOLOv8, Segment Anything, and Grounding DINO to reduce manual review by 80% and shrink labeling time from 5 minutes to under 1 minute.',
  },
  {
    title: 'J.P. Morgan & Co. · Data Intern, CIB Analytics',
    statement:
      'Engineered Python pipelines over AlphaSense, Eikon, Bloomberg, SEC XML, and broker PDFs to create analytics-ready research datasets across 15+ sectors.',
  },
  {
    title: 'BFS BI & Financial Reporting',
    statement:
      'Built AI-assisted BI remediation and service-ticket analytics that resolved 500+ broken links across internal pages and improved MTTR by 20% using Python, SQL, and Oracle BI tooling.',
  },
];

export const selectedResumeBullets: ResumeHighlight[] = [
  {
    title: 'Evidence-backed AI systems',
    statement:
      'Built SEC Filing Intelligence Copilot to ingest live 10-K and 10-Q filings, retrieve grounded evidence, and return citation-enforced answers through FastAPI, hybrid retrieval, reranking, Docker, GKE, and Prometheus/Grafana instrumentation.',
  },
  {
    title: 'Serving and performance analysis',
    statement:
      'Benchmarked vLLM serving on mixed prompt-length workloads, identified throughput and p99 latency tradeoffs, and added dynamic context budgeting to eliminate token-limit failures in evaluation runs.',
  },
  {
    title: 'Modeling and fraud analytics',
    statement:
      'Built supervised and unsupervised fraud workflows across credit-card, application, and property datasets using velocity features, linkage signals, PCA, autoencoders, and gradient boosting models.',
  },
  {
    title: 'Research-oriented rigor',
    statement:
      'Developed reproducible experimentation and evaluation workflows across causal inference, manifold learning, and statistical modeling projects with saved artifacts, diagnostics, and report-ready outputs.',
  },
];

export const skillGroups = [
  {
    heading: 'AI Systems',
    items: ['RAG', 'LLM evals', 'QLoRA / DPO', 'vLLM', 'FastAPI', 'Structured outputs'],
  },
  {
    heading: 'Data & Infra',
    items: ['Python', 'SQL', 'React', 'TypeScript', 'Spark', 'Snowflake', 'Docker', 'GitHub Actions'],
  },
  {
    heading: 'Operations & Analytics',
    items: ['Observability', 'Prometheus / Grafana', 'Power BI', 'Tableau', 'Causal inference', 'Fraud analytics'],
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    href: `mailto:${siteMetadata.email}`,
    value: siteMetadata.email,
  },
  {
    label: 'GitHub',
    href: siteMetadata.githubUrl,
    value: 'github.com/shreyashreddyk',
  },
];

export const availabilityNote =
  'Open to AI engineering, data science, ML systems, and analytics conversations where careful execution matters as much as the headline idea.';
