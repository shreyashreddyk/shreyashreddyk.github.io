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
  mode: 'download',
  label: 'Open resume PDF',
  href: '/resume.pdf',
  helperText: 'Public resume PDF with current experience, projects, and contact details.',
};

export const workEntries: WorkEntry[] = [
  {
    company: 'University of California, San Diego',
    role: 'Graduate Student Researcher',
    dates: 'Sept 2025 – Jan 2026',
    location: 'San Diego, CA',
    summary:
      'Research-focused work on LLM serving behavior, scheduling, and SLO-aware inference tradeoffs, alongside reproducible post-training and evaluation workflows.',
    bullets: [
      'Researched SLO-aware LLM serving and scheduling with Prof. Umesh Bellur, including batching, routing, and latency-throughput tradeoffs.',
      'Complemented the research focus with structured extraction post-training using SFT, QLoRA, DPO, Pydantic validation, and evaluation harnesses.',
      'Benchmarked vLLM serving on NVIDIA L4 across mixed prompt workloads and eliminated token-limit failures with dynamic context budgeting.',
    ],
    skills: ['LLM Serving', 'vLLM', 'Scheduling', 'SLOs', 'Post-training', 'Evaluation'],
    sourceTags: ['ai-engineering', 'data-science', 'research'],
  },
  {
    company: 'University of California, San Diego',
    role: 'GenAI Analyst – BFS BI & Financial Reporting',
    dates: 'Jun 2025 – Sept 2025',
    location: 'San Diego, CA',
    summary:
      'Built automation and analytics workflows for BI operations, service-ticket triage, and faster issue resolution across university financial reporting systems.',
    bullets: [
      'Automated AI-assisted remediation of 500+ broken links and self-serve analytics workflows across BFS BI and Financial Reporting, reducing manual maintenance by 30%.',
      'Analyzed 40K+ service tickets with Python, SQL, and Oracle AI to prioritize issue patterns, improve triage quality, and reduce MTTR by 20%.',
      'Built OTBI and Cognos dashboards that surfaced queue health and operational bottlenecks for proactive issue resolution.',
    ],
    skills: ['Python', 'SQL', 'OTBI', 'Cognos', 'Oracle AI', 'Dashboards', 'Analytics Automation'],
    sourceTags: ['ai-engineering', 'data-science', 'analytics-engineering'],
  },
  {
    company: 'University of California, San Diego',
    role: 'Big Data Analytics Engineer',
    dates: 'Mar 2025 – Jun 2025',
    location: 'San Diego, CA',
    summary:
      'Built distributed data pipelines and climate-analysis workflows on GCP Dataproc for large-scale weather data processing and downstream modeling.',
    bullets: [
      'Ran Spark and Spark SQL pipelines on GCP Dataproc over 12M+ Parquet weather records, using custom UDFs and RDD transforms to convert packed annual measurements into station-day climate series.',
      'Scheduled Dataproc jobs with Cloud Composer and Airflow, persisted Parquet checkpoints for fault-tolerant ETL, and engineered a 9-feature PCA representation from 366 daily signals.',
      'Trained XGBoost to 72.8% test accuracy on Koppen climate classification using the distributed feature pipeline.',
    ],
    skills: ['PySpark', 'Spark SQL', 'GCP Dataproc', 'Cloud Composer', 'Airflow', 'XGBoost', 'Parquet'],
    sourceTags: ['data-engineering', 'data-science', 'distributed-systems'],
  },
  {
    company: 'University of California, San Diego',
    role: 'Graduate Teaching Assistant, Data Analytics for Social Sciences',
    dates: 'Jun 2025 – Aug 2025',
    location: 'San Diego, CA',
    summary:
      'Supported instruction for POLI 5, Data Analytics for Social Sciences, with an emphasis on clear communication and practical analytics foundations.',
    bullets: [
      'Served as a teaching assistant for POLI 5 during the Summer 2025 term.',
      'Supported students in applying foundational data-analysis concepts in a classroom setting.',
    ],
    skills: ['Teaching', 'Data Analytics', 'Communication'],
    sourceTags: ['teaching', 'analytics'],
  },
  {
    company: 'Accordion',
    role: 'Data Scientist – Healthcare Analytics',
    dates: 'July 2023 – June 2024',
    location: 'Virginia Beach, VA | Hyderabad, India',
    summary:
      'Delivered healthcare analytics, cloud migration, and AI-assisted workflow improvements across HIPAA-governed reporting and operations systems.',
    bullets: [
      'Orchestrated a 2-month cloud migration of 200GB+ HIPAA-compliant data, supporting a 4-person analyst and engineering transition and scheduling Snowflake Medallion pipelines across three source systems.',
      'Automated Alteryx, Python, API, and Tableau workflows that saved 8+ client hours daily, cut manual processing by 90 minutes per day, and improved query performance by 30%+.',
      'Built CV-assisted healthcare review workflows with YOLOv8 localization, SAM 2.1 segmentation, and Grounding DINO plus SAM annotation support, reducing manual review by 80% and labeling time from 5 minutes to under 1 minute.',
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
      'SAM 2.1',
      'Grounding DINO',
    ],
    awards: ['Team Super Squad', 'Above & Beyond'],
    sourceTags: ['data-science', 'analytics-engineering', 'computer-vision'],
  },
  {
    company: 'J.P. Morgan & Co.',
    role: 'Data Science Intern – Corporate & Investment Bank Analytics',
    dates: 'Jan 2023 – June 2023',
    location: 'Mumbai, India',
    summary:
      'Built finance research pipelines and analyst-facing decision support over structured and unstructured market data.',
    bullets: [
      'Engineered Python pipelines over AlphaSense, Eikon, Bloomberg, SEC XMLs, and broker PDFs into Azure SQL for banker-facing M&A and risk research across 15+ sectors.',
      'Created analytics-ready research datasets from structured and unstructured market data for comparable-company screening, valuation refreshes, and downstream analysis.',
      'Refactored DCF, comps, cash-flow, and ownership workflows with pandas, NumPy, Excel, and VBA, reducing manual reconciliation by 40% and supporting a 30-page Power BI-backed sell-side pitch.',
    ],
    skills: ['Python', 'Azure SQL', 'Power BI', 'AlphaSense', 'Eikon', 'Bloomberg', 'SEC XML', 'Excel/VBA'],
    sourceTags: ['data-science', 'finance', 'analytics'],
  },
];

export const experienceThemes: ExperienceTheme[] = [
  {
    title: 'AI and ML systems',
    description:
      'The throughline is production-minded AI work: LLM serving research, evaluation-aware system design, and computer-vision-assisted review workflows that reduce manual effort.',
    supportingPoints: ['LLM serving research', 'CV-assisted review', 'Evaluation-aware engineering'],
  },
  {
    title: 'Data platforms and pipelines',
    description:
      'The work repeatedly centers on reliable data movement, warehousing, and distributed processing, from Snowflake healthcare marts to Dataproc ETL and Azure SQL finance pipelines.',
    supportingPoints: ['Snowflake marts', 'Dataproc pipelines', '200GB+ migration'],
  },
  {
    title: 'Analytics and modeling',
    description:
      'Across healthcare, finance, BI operations, and climate data, the emphasis is measurable delivery through dashboards, workflow automation, and model-ready datasets.',
    supportingPoints: ['40K+ tickets analyzed', '15+ sectors covered', '72.8% climate classification accuracy'],
  },
  {
    title: 'Cross-functional delivery',
    description:
      'The experience is shaped by shipping work other teams can use, including stakeholder-facing reporting, banker-facing analytics, research collaboration, and documented operational transitions.',
    supportingPoints: ['Banker-facing analysis', 'Healthcare stakeholder reporting', '4-person transition support'],
  },
];
