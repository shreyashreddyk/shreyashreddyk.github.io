export type ContactLink = {
  label: string;
  href: string;
  value: string;
};

export type ResumeHighlight = {
  title: string;
  statement: string;
};

export type SkillGroup = {
  heading: string;
  items: string[];
};

export const siteMetadata = {
  name: 'Shreyash Kondakindi',
  role: 'AI Engineer · Data Systems',
  location: 'San Diego, California',
  email: 'kshreyashreddy@gmail.com',
  githubUrl: 'https://github.com/shreyashreddyk',
  linkedinUrl: 'https://linkedin.com/in/shreyashreddyk',
  resumeUrl: undefined,
};

export const hero = {
  eyebrow: 'Shreyash Kondakindi',
  title: 'AI Engineer building LLM and data systems for analytics-heavy products.',
  summary:
    'I build retrieval pipelines, evaluation workflows, scalable data infrastructure, and analytics applications across finance, fraud, and healthcare. My work blends AI engineering, data engineering, and applied modeling with a strong bias toward production-ready systems.',
  primaryCta: {
    label: 'View Projects',
    href: '/projects',
  },
  secondaryCta: {
    label: 'View Resume',
    href: '/work',
  },
  tertiaryCta: {
    label: 'GitHub',
    href: siteMetadata.githubUrl,
  },
};

export const strengths = [
  'AI systems work spanning retrieval, evaluation, serving, and deployment workflows.',
  'Data engineering experience across analytics pipelines, cloud warehouses, streaming systems, and BI delivery.',
  'Applied modeling experience in fraud, risk, experimentation, and statistical analysis.',
];

export const aboutSummary = [
  'I am an M.S. Data Science candidate at UC San Diego with experience across healthcare analytics, financial research workflows, and graduate project work in AI systems, fraud modeling, and large-scale data processing.',
  'My strongest work sits at the intersection of AI engineering, data infrastructure, and analytics, especially when a system needs reliable retrieval, scalable pipelines, or measurable model behavior.',
  'I like building products that are technically rigorous, easy to explain, and useful to both operators and end users.',
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

export const currentFocusAreas = [
  'LLM systems',
  'Data engineering',
  'ML',
  'Fraud / risk analytics',
  'Scalable analytics',
];

export const homeCapabilityCards = [
  {
    title: 'LLM and AI applications',
    description:
      'RAG systems, evaluation harnesses, post-training workflows, and inference performance work built for more than a single demo.',
  },
  {
    title: 'Data platforms and pipelines',
    description:
      'Snowflake marts, Spark workflows, Kafka pipelines, and API-driven data systems designed to support downstream analytics and modeling.',
  },
  {
    title: 'Analytics in finance and risk',
    description:
      'Hands-on work across fraud detection, financial data extraction, and business-facing analytics where technical choices need clear operational value.',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    heading: 'AI / ML',
    items: ['RAG', 'LLM evals', 'QLoRA / DPO', 'vLLM', 'Structured outputs', 'Fraud modeling'],
  },
  {
    heading: 'Data Engineering',
    items: ['Spark', 'Kafka', 'Airflow', 'Snowflake', 'Cassandra', 'PostgreSQL'],
  },
  {
    heading: 'Backend / Fullstack',
    items: ['Python', 'FastAPI', 'React', 'TypeScript', 'Supabase', 'Docker'],
  },
  {
    heading: 'Analytics',
    items: ['SQL', 'Power BI', 'Tableau', 'Causal inference', 'Risk analytics', 'Feature engineering'],
  },
  {
    heading: 'Tools',
    items: ['GitHub Actions', 'Prometheus / Grafana', 'Matillion', 'CatBoost', 'XGBoost', 'Chroma'],
  },
];

export const timelineTeasers = [
  {
    title: 'Work experience',
    description:
      'Healthcare analytics, financial data workflows, and delivery-focused experience across AI, BI, and data systems.',
    href: '/work',
    ctaLabel: 'View Work',
  },
  {
    title: 'Education and foundations',
    description:
      'UC San Diego data science coursework and project work in machine learning, scalable systems, statistics, and optimization.',
    href: '/education',
    ctaLabel: 'View Education',
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
  {
    label: 'LinkedIn',
    href: siteMetadata.linkedinUrl,
    value: 'linkedin.com/in/shreyashreddyk',
  },
];

export const availabilityNote =
  'Open to AI engineering, data engineering, analytics engineering, and applied data science roles where strong systems execution matters.';
