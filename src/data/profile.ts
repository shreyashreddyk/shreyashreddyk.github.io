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
  role: 'AI Engineer · Data Science',
  location: 'San Diego, California',
  email: 'kshreyashreddy@gmail.com',
  githubUrl: 'https://github.com/shreyashreddyk',
  linkedinUrl: 'https://www.linkedin.com/in/shreyashreddyk',
  resumeUrl: '/resume.pdf',
};

export const hero = {
  title: 'AI Engineer building LLM, data science, and production systems for analytics-heavy products.',
  summary:
    'I build retrieval pipelines, evaluation workflows, distributed data platforms, and analytics applications across finance, fraud, healthcare, and university operations. My work blends AI engineering, data science, and systems execution with a strong focus on production-ready delivery.',
  primaryCta: {
    label: 'View Projects',
    href: '/projects',
  },
  secondaryCta: {
    label: 'View Resume',
    href: siteMetadata.resumeUrl,
  },
  tertiaryCta: {
    label: 'GitHub',
    href: siteMetadata.githubUrl,
  },
};

export const strengths = [
  'AI systems work spanning retrieval, evaluation, serving, and deployment workflows.',
  'Data science and data engineering experience across analytics pipelines, cloud warehouses, streaming systems, and BI delivery.',
  'Applied modeling experience in fraud, risk, experimentation, and statistical analysis.',
];

export const aboutSummary = [
  'I am an M.S. Data Science candidate at UC San Diego with experience across healthcare analytics, financial research workflows, and graduate project work in AI systems, fraud modeling, and large-scale data processing.',
  'My strongest work sits at the intersection of AI engineering, data science, and systems design, especially when a product needs reliable retrieval, scalable pipelines, or measurable model behavior.',
  'I like building products that are technically rigorous, easy to explain, and useful to both operators and end users.',
];

export const education = [
  {
    school: 'University of California, San Diego',
    credential: 'M.S. in Data Science',
    years: '2024–2026',
    detail:
      'Coursework includes machine learning, scalable systems, statistical models, probabilistic reasoning, optimization, geometry of data, and efficient AI for data science.',
  },
  {
    school: 'BITS Pilani',
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
    title: 'J.P. Morgan & Co. · Data Science Intern, CIB Analytics',
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
  'Data science',
  'Data engineering',
  'Fraud / risk analytics',
  'Scalable analytics',
];

export const homeCapabilityCards = [
  {
    title: 'LLM and AI applications',
    description:
      'I build RAG systems, evaluation harnesses, post-training workflows, and inference tooling that can stand up beyond a one-off demo.',
  },
  {
    title: 'Data science systems and pipelines',
    description:
      'My work includes Snowflake marts, Spark workflows, Kafka pipelines, and API-driven data platforms that support downstream modeling and decision-making.',
  },
  {
    title: 'Analytics in finance and risk',
    description:
      'I work on fraud detection, financial data extraction, and business-facing analytics where model choices and data reliability need to translate into operational value.',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    heading: 'AI / ML',
    items: ['RAG', 'QLORA / DPO', 'LLM evals', 'vLLM', 'Structured outputs', 'Fraud modeling'],
  },
  {
    heading: 'Data Platforms',
    items: ['Spark', 'Kafka', 'Airflow', 'Snowflake', 'Cassandra', 'PostgreSQL'],
  },
  {
    heading: 'Backend / Fullstack',
    items: ['Python', 'FastAPI', 'React', 'TypeScript', 'Supabase', 'Docker'],
  },
  {
    heading: 'Analytics / Data Science',
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
      'Healthcare analytics, financial data workflows, university research, and delivery-focused work across AI products, BI, and production data platforms.',
    href: '/work',
    ctaLabel: 'View Work',
  },
  {
    title: 'Education and foundations',
    description:
      'UC San Diego data science coursework and BITS Pilani training across machine learning, scalable systems, statistics, and optimization.',
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
  'Open to AI engineering, data science, analytics engineering, and applied ML roles where strong systems execution and production-minded delivery matter.';
