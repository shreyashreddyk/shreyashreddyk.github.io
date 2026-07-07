export type WorkEntry = {
  company: string;
  role: string;
  dates: string;
  location: string;
  summary: string;
  bullets: string[];
  skills: string[];
  note?: string;
  awards?: string[];
  sourceTags?: string[];
};

export type ExperienceTheme = {
  title: string;
  description: string;
  supportingPoints: string[];
};

export type ResumeCta = {
  mode: 'download' | 'request' | 'hidden';
  label: string;
  href?: string;
  helperText: string;
};

export const resumeCta: ResumeCta = {
  mode: 'request',
  label: 'Resume available on request',
  helperText: 'A public-safe PDF will be added here once the final shareable version is ready.',
};

export const workEntries: WorkEntry[] = [
  {
    company: 'University of California, San Diego',
    role: 'Graduate Student Researcher, Systems for LLM Serving',
    dates: 'Sept 2025 – Jan 2026',
    location: 'San Diego, CA',
    summary:
      'Research-focused AI systems work on LLM serving behavior, scheduling, and SLO-aware inference tradeoffs.',
    bullets: [
      'Researched engine-layer and cluster-layer inference scheduling for LLM serving workflows with Prof. Umesh Bellur.',
      'Studied latency-throughput tradeoffs and SLO-aware serving behavior across inference-system design choices.',
      'Contributed to an ACM Computing Surveys manuscript under review on LLM serving under SLOs and engine- versus cluster-layer scheduling.',
    ],
    skills: ['LLM Serving', 'Inference Systems', 'SLOs', 'Scheduling', 'Research'],
    sourceTags: ['ai-engineering', 'data-engineering', 'finance-data-scientist'],
  },
  {
    company: 'BFS BI & Financial Reporting',
    role: 'Business Intelligence & GenAI Analyst',
    dates: 'Jun 2025 – Sept 2025',
    location: 'San Diego, CA',
    summary:
      'Built automation and analytics workflows for BI operations, service-ticket triage, and faster issue resolution.',
    bullets: [
      'Automated AI-assisted detection and resolution of 500+ broken links across internal pages to reduce manual maintenance effort.',
      'Analyzed 40K+ service tickets with Python, SQL, and Oracle BI tooling to surface repeat issues and resolution patterns.',
      'Reduced manual maintenance by 30% through BI remediation workflows and self-serve analytics context.',
      'Cut MTTR by 20% with dashboards and reporting views built for proactive issue resolution.',
    ],
    skills: ['Python', 'SQL', 'OTBI', 'Cognos', 'Tableau', 'Dashboards', 'Analytics Automation'],
    sourceTags: ['ai-engineering', 'data-scientist-ai-engineer', 'data-engineering', 'finance-data-scientist'],
  },
  {
    company: 'University of California, San Diego',
    role: 'Graduate Teaching Assistant, Data Analytics for Social Sciences',
    dates: 'Jun 2025 – Aug 2025',
    location: 'San Diego, CA',
    summary:
      'Supported data analytics instruction in a social-sciences course with a focus on clear communication and practical analysis.',
    bullets: [
      'Served as a teaching assistant for POLI 5, Data Analytics for Social Sciences, during the Summer 2025 term.',
      'Supported students in applying foundational data-analytics concepts in a classroom setting.',
    ],
    skills: ['Teaching', 'Data Analytics', 'Communication'],
    sourceTags: ['ai-engineering', 'data-engineering'],
  },
  {
    company: 'Accordion',
    role: 'Data Scientist, Healthcare Analytics',
    dates: 'July 2023 – June 2024',
    location: 'Hyderabad, India',
    summary:
      'Delivered healthcare analytics, data-platform migration, and AI-assisted workflow improvements across HIPAA-governed operations.',
    bullets: [
      'Developed healthcare analytics and model-ready data marts across RCM, finance, and operations using Snowflake, Matillion, SQL, Medallion design, SCD Type-2, and HIPAA controls.',
      'Supported a 200GB+ migration completed in 2 months through a 4-person analyst and engineering transition.',
      'Automated Tableau, Alteryx, Python, and Excel reporting and validation workflows that saved 8+ client hours daily.',
      'Reduced manual processing by 90 minutes daily and improved query performance by 30%+ through pipeline and warehouse optimization.',
      'Built CV-assisted healthcare review workflows with YOLOv8, Segment Anything, and Grounding DINO, reducing manual review by 80% and labeling time from 5 minutes to under 1 minute.',
    ],
    skills: [
      'Snowflake',
      'Matillion',
      'SQL',
      'Tableau',
      'Alteryx',
      'Python',
      'HIPAA',
      'YOLOv8',
      'Segment Anything',
      'Grounding DINO',
    ],
    awards: ['Team Super Squad', 'Above & Beyond'],
    sourceTags: ['data-scientist-ai-engineer', 'data-engineering', 'finance-data-scientist'],
  },
  {
    company: 'J.P. Morgan & Co.',
    role: 'Data Intern, Corporate & Investment Bank Analytics',
    dates: 'Jan 2023 – June 2023',
    location: 'Mumbai, India',
    summary:
      'Built finance research pipelines and analyst-facing decision support over structured and unstructured market data.',
    bullets: [
      'Engineered Python pipelines over AlphaSense and Eikon feeds, SEC XMLs, and broker PDFs into Azure SQL for repeatable research workflows.',
      'Created analytics-ready research datasets for M&A analysis across 15+ sectors from structured and unstructured market data.',
      'Automated parsing, feature extraction, comparable-company screening, valuation refreshes, and banker-facing analysis workflows.',
      'Built Power BI-backed sell-side pitch analytics to turn raw research inputs into decision-support materials.',
    ],
    skills: ['Python', 'Azure SQL', 'Power BI', 'AlphaSense', 'Eikon', 'SEC XML', 'Pandas', 'Excel/VBA'],
    sourceTags: ['ai-engineering', 'data-scientist-ai-engineer', 'data-engineering', 'finance-data-scientist'],
  },
];

export const experienceThemes: ExperienceTheme[] = [
  {
    title: 'AI/ML systems',
    description:
      'The strongest throughline is production-minded AI work: LLM serving research, evaluation-aware system thinking, and computer-vision-assisted review workflows that reduce manual effort.',
    supportingPoints: ['LLM serving research', 'CV-assisted review', 'Evaluation-aware engineering'],
  },
  {
    title: 'Data pipelines',
    description:
      'The work repeatedly centers on reliable data movement, warehousing, and migration, from Snowflake healthcare marts to Azure SQL research pipelines and BI automation.',
    supportingPoints: ['Snowflake marts', 'Azure SQL pipelines', '200GB+ migration'],
  },
  {
    title: 'Analytics and experimentation',
    description:
      'Across healthcare, finance, and BI operations, the pattern is measurable delivery: dashboards, workflow automation, service-ticket analysis, and research datasets built for downstream decisions.',
    supportingPoints: ['40K+ tickets analyzed', '15+ sectors covered', 'Decision-support dashboards'],
  },
  {
    title: 'Cross-functional delivery',
    description:
      'The experience is shaped by shipping work other teams can use: stakeholder-facing reporting, banker-facing analytics, research collaboration, and well-documented operational transitions.',
    supportingPoints: ['Banker-facing analysis', 'Healthcare stakeholder reporting', '4-person transition support'],
  },
];
