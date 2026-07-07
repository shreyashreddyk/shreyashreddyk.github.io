import apiDataStreamingCover from '../assets/project-covers/api-data-streaming.svg';
import applicationFraudDetectionModelCover from '../assets/project-covers/application-fraud-detection-model.svg';
import creditCardTransactionFraudAnalyticsCover from '../assets/project-covers/credit-card-transaction-fraud-analytics.svg';
import energyEfficiencyRegressionCover from '../assets/project-covers/energy-efficiency-regression-and-statistical-analysis.svg';
import jsonExtractionQloraDpoCover from '../assets/project-covers/json-extraction-qlora-dpo.svg';
import londonCrimeAnalyticsCover from '../assets/project-covers/london-crime-analytics-neo4j-postgresql.svg';
import mlProjectsCover from '../assets/project-covers/ml-projects.svg';
import noiseAdaptiveSpectralEmbeddingCover from '../assets/project-covers/noise-adaptive-spectral-embedding.svg';
import nycPropertyFraudDetectionCover from '../assets/project-covers/nyc-property-fraud-detection.svg';
import ouladCausalInferenceCover from '../assets/project-covers/oulad-causal-inference.svg';
import shreyashPortfolioCover from '../assets/project-covers/shreyashreddyk-portfolio-site.svg';
import prosodyCover from '../assets/project-covers/prosody.svg';
import secFilingIntelligenceCopilotCover from '../assets/project-covers/sec-filing-intelligence-copilot.svg';
import texasWeatherDataAnalysisCover from '../assets/project-covers/texas-weather-data-analysis.svg';
import vllmServingPerformanceLabCover from '../assets/project-covers/vllm-serving-performance-lab.svg';

export type ProjectCategory =
  | 'AI / LLM Systems'
  | 'Machine Learning'
  | 'Data Engineering'
  | 'Fraud / Risk Analytics'
  | 'Data Visualization / Analytics'
  | 'Research / Statistical Modeling';

export type ProjectLink = {
  label: string;
  url: string;
  kind: 'demo' | 'report' | 'docs' | 'notebook' | 'artifact';
};

export type Project = {
  slug: string;
  title: string;
  repoName: string;
  repoUrl: string;
  shortDescription: string;
  recruiterPitch: string;
  problem: string;
  approach: string;
  impact: string;
  bullets: string[];
  tech: string[];
  category: ProjectCategory;
  featured: boolean;
  coverImage: string;
  highlights: string[];
  links: ProjectLink[];
  relatedSlugs: string[];
  sourceEvidenceNotes: string[];
};

const githubRepo = (repoName: string) => `https://github.com/shreyashreddyk/${repoName}`;
const githubBlob = (repoName: string, path: string) => `${githubRepo(repoName)}/blob/main/${path}`;
const githubTree = (repoName: string, path: string) => `${githubRepo(repoName)}/tree/main/${path}`;
const inferredTechNote =
  'Tech was inferred from README badges, linked artifacts, and repo layout because plugin repo metadata did not expose topics or language breakdowns directly.';

export const projectCategoryPriority: Record<ProjectCategory, number> = {
  'AI / LLM Systems': 0,
  'Data Engineering': 1,
  'Machine Learning': 2,
  'Research / Statistical Modeling': 3,
  'Fraud / Risk Analytics': 4,
  'Data Visualization / Analytics': 5,
};

const projects: Project[] = [
  {
    slug: 'sec-filing-intelligence-copilot',
    title: 'SEC Filing Intelligence Copilot',
    repoName: 'sec-filing-intelligence-copilot',
    repoUrl: githubRepo('sec-filing-intelligence-copilot'),
    shortDescription:
      'Production-oriented RAG system for SEC filings with live EDGAR ingestion, hybrid retrieval, explicit citations, evaluation artifacts, and a validated GKE plus Grafana deployment path.',
    recruiterPitch:
      'Strong AI engineer signal: built a source-grounded financial copilot with typed APIs, evaluation gates, deployment manifests, and observable runtime behavior instead of a notebook-only demo.',
    problem:
      'SEC filings are dense, time-sensitive documents that are difficult to search quickly without losing source fidelity or auditability.',
    approach:
      'Built a typed ingestion and retrieval stack around EDGAR documents, hybrid retrieval, reranking, citation-grounded generation, and a split API plus UI deployment path with monitoring.',
    impact:
      'Turned filing review into a source-grounded workflow backed by saved evaluation artifacts, operator runbooks, and deployment evidence rather than a one-off demo.',
    bullets: [
      'Built a live ingestion and retrieval pipeline for 10-K and 10-Q filings across five semiconductor companies, measured by committed coverage and evaluation artifacts.',
      'Implemented citation-grounded answer generation with hybrid retrieval, reranking, abstention behavior, and deterministic smoke checks reporting hit_rate@4 and citation validity of 1.0 in saved artifacts.',
      'Documented and deployed a real GKE plus Grafana path with split API and UI containers, Prometheus metrics, and operator runbooks.',
    ],
    tech: ['Python', 'FastAPI', 'Streamlit', 'Chroma', 'Sentence Transformers', 'Docker', 'GKE', 'Grafana'],
    category: 'AI / LLM Systems',
    featured: true,
    coverImage: secFilingIntelligenceCopilotCover,
    highlights: ['Hybrid retrieval', 'Eval-gated RAG', 'GKE plus Grafana evidence'],
    links: [
      {
        label: 'Deployment Guide',
        url: githubBlob('sec-filing-intelligence-copilot', 'DEPLOYMENT.md'),
        kind: 'docs',
      },
      {
        label: 'Eval Report',
        url: githubBlob('sec-filing-intelligence-copilot', 'artifacts/evals/ci_smoke_latest/report.md'),
        kind: 'report',
      },
      {
        label: 'Demo Video',
        url: 'https://youtu.be/OcPIU9NniNw',
        kind: 'demo',
      },
    ],
    relatedSlugs: ['json-extraction-qlora-dpo', 'vllm-serving-performance-lab', 'prosody'],
    sourceEvidenceNotes: [
      'README overview, architecture, evaluation, deployment, scaling, and monitoring sections.',
      'Linked repo artifacts include eval reports, CI workflow, coverage snapshot, and GKE/Grafana screenshots.',
      inferredTechNote,
    ],
  },
  {
    slug: 'prosody',
    title: 'Prosody',
    repoName: 'prosody',
    repoUrl: githubRepo('prosody'),
    shortDescription:
      'AI coaching workspace with an authenticated React frontend, FastAPI agent service, Supabase persistence, source uploads, study artifacts, and Cloud Run deployment.',
    recruiterPitch:
      'Useful fullstack AI signal: combines product UX, agent and backend boundaries, auth, storage, deployment, and honest scoping around realtime voice.',
    problem:
      'Study and coaching workflows need more than prompt calls; they need persistence, uploads, auth, and clear separation between the product surface and generation services.',
    approach:
      'Built an authenticated React and FastAPI workspace with Supabase-backed persistence, upload flows, generated study artifacts, and a split Cloud Run deployment model.',
    impact:
      'Packaged AI functionality into a product-shaped system with durable storage boundaries and honest production scoping instead of overstating unfinished realtime features.',
    bullets: [
      'Built a persistent coaching workspace for uploads, transcripts, summaries, flashcards, and session telemetry using React, FastAPI, and Supabase.',
      'Designed a split Cloud Run architecture with separate web and agent services, JWT validation, storage boundaries, and CI/CD workflows.',
      'Scoped production claims carefully by feature-gating the local Pipecat WebRTC loop while keeping the deployable workspace and generation surfaces public-safe.',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'FastAPI', 'Supabase', 'OpenAI', 'Cloud Run'],
    category: 'AI / LLM Systems',
    featured: true,
    coverImage: prosodyCover,
    highlights: ['Authenticated AI product', 'Cloud Run split services', 'Supabase persistence'],
    links: [
      {
        label: 'Deployment Guide',
        url: githubBlob('prosody', 'infra/cloudrun/README.md'),
        kind: 'docs',
      },
      {
        label: 'Architecture',
        url: githubBlob('prosody', 'README.md'),
        kind: 'docs',
      },
    ],
    relatedSlugs: ['sec-filing-intelligence-copilot', 'shreyashreddyk-portfolio-site', 'json-extraction-qlora-dpo'],
    sourceEvidenceNotes: [
      'README sections on product preview, current production surface, architecture, persistence model, and realtime transport status.',
      'README references committed screenshots under artifacts/readme and deployment notes under infra/cloudrun.',
      inferredTechNote,
    ],
  },
  {
    slug: 'json-extraction-qlora-dpo',
    title: 'JSON Extraction with QLoRA + DPO',
    repoName: 'json-extraction-qlora-dpo',
    repoUrl: githubRepo('json-extraction-qlora-dpo'),
    shortDescription:
      'Schema-constrained support-ticket extraction system spanning baseline evaluation, QLoRA SFT, DPO post-training, validation contracts, and resumable vLLM benchmarking.',
    recruiterPitch:
      'Strong LLMOps and post-training portfolio piece with explicit stage metrics, artifact-first reproducibility, and latency-quality tradeoff reporting.',
    problem:
      'Structured extraction projects often hide behind single metrics, making it hard to tell whether a model improved validity, schema adherence, or actual semantic quality.',
    approach:
      'Designed a schema-first training and evaluation pipeline covering baseline measurement, QLoRA supervised finetuning, DPO preference optimization, contract validation, and serving benchmarks.',
    impact:
      'Produced a portfolio piece with measurable post-training gains, saved artifacts for each stage, and clear latency-quality tradeoff evidence for recruiter review.',
    bullets: [
      'Designed a schema-first extraction pipeline and improved Micro F1 from 0.3030 at baseline to 0.7730 after SFT plus DPO, with saved stage metrics in-repo.',
      'Separated JSON validity, schema pass rate, and semantic quality so model gains are measurable instead of collapsed into a single vanity score.',
      'Implemented script-first vLLM benchmarking and report generation to evaluate latency costs and serving behavior alongside quality gains.',
    ],
    tech: ['Python', 'Transformers', 'TRL', 'PEFT', 'bitsandbytes', 'Pydantic', 'vLLM'],
    category: 'AI / LLM Systems',
    featured: true,
    coverImage: jsonExtractionQloraDpoCover,
    highlights: ['QLoRA plus DPO', 'Schema-first evaluation', 'Benchmark artifacts'],
    links: [
      {
        label: 'Final Report',
        url: githubBlob('json-extraction-qlora-dpo', 'artifacts/reports/final_project_report.md'),
        kind: 'report',
      },
      {
        label: 'System Design',
        url: githubBlob('json-extraction-qlora-dpo', 'docs/01_system_design.md'),
        kind: 'docs',
      },
      {
        label: 'Benchmark Notebook',
        url: githubBlob('json-extraction-qlora-dpo', 'notebooks/07_vllm_benchmark_lab.ipynb'),
        kind: 'notebook',
      },
    ],
    relatedSlugs: ['sec-filing-intelligence-copilot', 'vllm-serving-performance-lab', 'noise-adaptive-spectral-embedding'],
    sourceEvidenceNotes: [
      'README TL;DR, key outcomes table, AI Engineer alignment section, and reproducibility workflow.',
      'Metrics are backed by files under artifacts/metrics and reports under artifacts/reports plus docs/.',
      inferredTechNote,
    ],
  },
  {
    slug: 'vllm-serving-performance-lab',
    title: 'vLLM Serving Performance Lab',
    repoName: 'vllm-serving-performance-lab',
    repoUrl: githubRepo('vllm-serving-performance-lab'),
    shortDescription:
      'vLLM serving lab that benchmarks latency-throughput tradeoffs under mixed prompt lengths, with fairness-oriented scheduling experiments and artifact-backed p50, p90, and p99 analysis.',
    recruiterPitch:
      'Good AI systems evidence for inference engineering: benchmarks a real serving stack, isolates head-of-line blocking, and tunes scheduler knobs against tail-latency SLOs.',
    problem:
      'Serving benchmarks often focus on average throughput and hide the prompt-mix interference that matters in real user-facing workloads.',
    approach:
      'Ran controlled sweeps over concurrency, batching, and scheduling knobs in vLLM while tracking short- and long-prompt behavior separately and persisting CSV plus plot artifacts.',
    impact:
      'Converted inference tuning into a measurable systems story with visible latency distributions, failure-mode fixes, and scheduler tradeoff evidence.',
    bullets: [
      'Benchmarked mixed-workload serving on an L4-backed Colab setup and tracked overall, short, and long-tail latency separately to expose prompt-length interference.',
      'Implemented dynamic context budgeting to eliminate token-limit HTTP 400 failures under variable prompt lengths.',
      'Mapped throughput knees and fair-scheduling tradeoffs across concurrency, batched-token budgets, and max-num-seqs using saved CSVs and plots.',
    ],
    tech: ['Python', 'vLLM', 'Google Colab', 'Benchmarking', 'Latency Analysis', 'Matplotlib'],
    category: 'AI / LLM Systems',
    featured: true,
    coverImage: vllmServingPerformanceLabCover,
    highlights: ['Tail-latency focus', 'Fair scheduling sweeps', 'Artifact-backed results'],
    links: [
      {
        label: 'Colab Notebook',
        url: 'https://colab.research.google.com/drive/16_GJlYLGUKrZwf0lfQfSVbHuzFugCpjn?usp=sharing',
        kind: 'notebook',
      },
      {
        label: 'Notebook PDF',
        url: githubBlob('vllm-serving-performance-lab', 'notebook/vllm_serving_project.pdf'),
        kind: 'report',
      },
      {
        label: 'Artifacts',
        url: githubTree('vllm-serving-performance-lab', 'artifacts'),
        kind: 'artifact',
      },
    ],
    relatedSlugs: ['json-extraction-qlora-dpo', 'sec-filing-intelligence-copilot', 'noise-adaptive-spectral-embedding'],
    sourceEvidenceNotes: [
      'README summary and experiment sections for Exp 1 through Exp 5, including saved CSV and plot paths.',
      'README includes explicit RPS and tail-latency numbers plus linked artifacts for each experiment.',
      inferredTechNote,
    ],
  },
  {
    slug: 'api-data-streaming',
    title: 'API Data Streaming Pipeline',
    repoName: 'api-data-streaming',
    repoUrl: githubRepo('api-data-streaming'),
    shortDescription:
      'End-to-end streaming pipeline that ingests API data through Kafka, processes streams with Spark, stores results in Cassandra and PostgreSQL, and orchestrates workflows with Airflow.',
    recruiterPitch:
      'Clear data engineering signal with multi-service orchestration, streaming topology, and hands-on infrastructure across ingestion, processing, storage, and scheduling.',
    problem:
      'Operational data systems need more than a batch script; they need an ingestion topology, stream processing, storage choices, and orchestration that can be explained end to end.',
    approach:
      'Built a containerized Kafka, Spark, Cassandra, Airflow, and Postgres stack with documented workflows for ingestion, monitoring, downstream persistence, and service coordination.',
    impact:
      'Shows practical data engineering range across messaging, stream processing, storage, and orchestration in one portfolio artifact.',
    bullets: [
      'Designed a real-time pipeline that moves external API data through Kafka, Spark Streaming, Cassandra, and Airflow instead of a single-script batch flow.',
      'Containerized the stack with Docker Compose to coordinate Zookeeper, Kafka, Schema Registry, Spark, Cassandra, Airflow, and Postgres in one environment.',
      'Documented operator workflows for ingestion, monitoring, Spark submission, and downstream storage verification.',
    ],
    tech: ['Python', 'Kafka', 'Spark Streaming', 'Cassandra', 'Airflow', 'Docker Compose', 'PostgreSQL'],
    category: 'Data Engineering',
    featured: true,
    coverImage: apiDataStreamingCover,
    highlights: ['Kafka to Spark pipeline', 'Containerized stack', 'Operational runbook'],
    links: [
      {
        label: 'Architecture Diagram',
        url: githubBlob('api-data-streaming', 'Data%20engineering%20architecture.png'),
        kind: 'artifact',
      },
    ],
    relatedSlugs: ['london-crime-analytics-neo4j-postgresql', 'texas-weather-data-analysis', 'shreyashreddyk-portfolio-site'],
    sourceEvidenceNotes: [
      'README overview, technology stack, architecture diagram, project structure, and operating instructions.',
      'README explicitly names the Docker Compose stack and service topology used in the pipeline.',
      inferredTechNote,
    ],
  },
  {
    slug: 'noise-adaptive-spectral-embedding',
    title: 'Noise-Adaptive Spectral Embedding',
    repoName: 'noise-adaptive-spectral-embedding',
    repoUrl: githubRepo('noise-adaptive-spectral-embedding'),
    shortDescription:
      'From-scratch manifold-learning toolkit for choosing diffusion-map dimensionality under noise, with config-driven sweeps, seeded experiments, and reproducible metrics.',
    recruiterPitch:
      'Strong ML and research engineering signal: implements original methods from theory, packages them cleanly, and reports both wins and failure modes with reproducible artifacts.',
    problem:
      'Dimensionality reduction methods often look impressive on clean visuals but fail under noise, making method selection and truncation choices hard to trust.',
    approach:
      'Implemented a diffusion-maps toolkit from scratch with typed configs, CLI workflows, seeded sweeps, baseline comparisons, and saved plots for both wins and limitations.',
    impact:
      'Turns research-heavy ML work into a reproducible engineering artifact with explicit experiment coverage and candid reporting of failure modes.',
    bullets: [
      'Built a modular diffusion-maps toolkit with CLI workflows, typed configs, and 49 tests to study spectral truncation under noisy manifold data.',
      'Ran 120 seeded experiments across five synthetic manifolds and improved S-curve trustworthiness from 0.879 to 0.914 versus the eigengap baseline using bandwidth stability.',
      'Documented failure cases, including swiss-roll instability and biased kNN noise estimation, instead of overstating the method robustness.',
    ],
    tech: ['Python', 'NumPy', 'SciPy', 'scikit-learn', 'Typer', 'pytest', 'Matplotlib'],
    category: 'Machine Learning',
    featured: true,
    coverImage: noiseAdaptiveSpectralEmbeddingCover,
    highlights: ['120 seeded runs', 'Diffusion maps from scratch', 'Honest failure analysis'],
    links: [
      {
        label: 'Final Report',
        url: githubBlob('noise-adaptive-spectral-embedding', 'reports/final_report.md'),
        kind: 'report',
      },
      {
        label: 'Method Comparison Figure',
        url: githubBlob('noise-adaptive-spectral-embedding', 'results/analysis/method_comparison_circle.png'),
        kind: 'artifact',
      },
    ],
    relatedSlugs: ['ml-projects', 'json-extraction-qlora-dpo', 'energy-efficiency-regression-and-statistical-analysis'],
    sourceEvidenceNotes: [
      'README problem statement, key results tables, architecture section, experiment inventory, and limitations.',
      'Linked figures under results/analysis plus the final report in reports/final_report.md back the quantitative claims.',
      inferredTechNote,
    ],
  },
  {
    slug: 'credit-card-transaction-fraud-analytics',
    title: 'Credit Card Transaction Fraud Analytics',
    repoName: 'Credit-Card-Transaction-Fraud-Analytics',
    repoUrl: githubRepo('Credit-Card-Transaction-Fraud-Analytics'),
    shortDescription:
      'Supervised fraud-detection pipeline for payment transactions with large-scale feature engineering, out-of-time validation, gradient-boosting model selection, and business-impact analysis.',
    recruiterPitch:
      'Strong data science and fraud-analytics project that ties model choice to operational review capacity and estimated savings rather than stopping at AUC.',
    problem:
      'Transaction fraud modeling needs temporal validation and review-capacity framing, not just a high offline score on a static split.',
    approach:
      'Built a large feature-engineering workflow, compared multiple ensemble families against out-of-time behavior, and tied model thresholds to business review volume.',
    impact:
      'Presents a recruiter-friendly fraud modeling story that combines feature depth, model selection discipline, and business-impact interpretation.',
    bullets: [
      'Engineered more than 2,000 candidate features spanning velocity windows, target encoding, anomaly indicators, and interaction histories across cards, merchants, and geography.',
      'Selected CatBoost after comparing baselines, neural models, and gradient-boosting ensembles against out-of-time validation behavior.',
      'Quantified deployment tradeoffs by recommending a review threshold that the README estimates at roughly $53M in annual net savings.',
    ],
    tech: ['Python', 'CatBoost', 'XGBoost', 'LightGBM', 'pandas', 'scikit-learn', 'Matplotlib'],
    category: 'Fraud / Risk Analytics',
    featured: true,
    coverImage: creditCardTransactionFraudAnalyticsCover,
    highlights: ['2,000 plus features', 'OOT validation', '$53M savings estimate'],
    links: [],
    relatedSlugs: ['application-fraud-detection-model', 'nyc-property-fraud-detection', 'oulad-causal-inference'],
    sourceEvidenceNotes: [
      'README sections on data cleaning, feature engineering, feature selection, model exploration, and financial analysis.',
      'The README is the primary public evidence source; no report or screenshot path is surfaced there.',
      inferredTechNote,
    ],
  },
  {
    slug: 'oulad-causal-inference',
    title: 'OULAD Causal Inference',
    repoName: 'oulad-causal-inference',
    repoUrl: githubRepo('oulad-causal-inference'),
    shortDescription:
      'Reproducible causal-inference pipeline studying whether early online engagement is associated with course success in OULAD, with DAG-based adjustment, doubly robust estimation, and diagnostics.',
    recruiterPitch:
      'Strong research plus data-science signal with explicit identification logic, reproducible estimation stages, and honest handling of overlap, robustness, and observational limits.',
    problem:
      'Observational education data can suggest strong patterns, but without identification logic and diagnostics it is easy to overstate what engagement signals really imply.',
    approach:
      'Built a DAG-driven workflow from cohort construction through discovery artifacts, AIPW estimation, overlap checks, robustness grids, and report-ready diagnostics.',
    impact:
      'Turns causal inference into a clear applied-data-science story with transparent assumptions and saved evidence for the main estimate.',
    bullets: [
      'Built a deterministic causal workflow from cohort construction through DAG artifacts, exploratory causal discovery, AIPW estimation, and report-ready diagnostics.',
      'Estimated an AIPW risk difference of about 0.235 for high versus lower early engagement under the documented observational assumptions.',
      'Tracked overlap, balance, robustness grids, subgroup checks, and placebo-style analyses so the causal claim stays transparent and assumption-aware.',
    ],
    tech: ['Python', 'AIPW', 'IPTW', 'Causal Discovery', 'pandas', 'pytest'],
    category: 'Research / Statistical Modeling',
    featured: true,
    coverImage: ouladCausalInferenceCover,
    highlights: ['DAG-based adjustment', 'AIPW estimate', 'Robustness grid'],
    links: [
      {
        label: 'Identification Plan',
        url: githubBlob('oulad-causal-inference', 'docs/identification_plan.md'),
        kind: 'docs',
      },
      {
        label: 'Discovery Summary',
        url: githubBlob('oulad-causal-inference', 'docs/discovery_summary.md'),
        kind: 'docs',
      },
      {
        label: 'Primary DAG Figure',
        url: githubBlob('oulad-causal-inference', 'reports/figures/primary_dag.png'),
        kind: 'artifact',
      },
    ],
    relatedSlugs: ['energy-efficiency-regression-and-statistical-analysis', 'credit-card-transaction-fraud-analytics', 'noise-adaptive-spectral-embedding'],
    sourceEvidenceNotes: [
      'README project snapshot, identification strategy, main results, diagnostics, robustness checks, and reproducible pipeline sections.',
      'README references saved CSV outputs and figures under data/processed and reports/figures.',
      inferredTechNote,
    ],
  },
  {
    slug: 'energy-efficiency-regression-and-statistical-analysis',
    title: 'Energy Efficiency Regression and Statistical Analysis',
    repoName: 'Energy-Efficiency-Regression-and-Statistical-Analysis',
    repoUrl: githubRepo('Energy-Efficiency-Regression-and-Statistical-Analysis'),
    shortDescription:
      'Regression-focused energy-efficiency study that compares linear and nonlinear models, emphasizes diagnostics, and interprets building-design effects on heating and cooling load.',
    recruiterPitch:
      'Good statistical-modeling signal: goes beyond fit metrics into coefficient interpretation, multicollinearity checks, influence diagnostics, and model refinement.',
    problem:
      'Regression projects are easy to present as a leaderboard, but useful data-science signal comes from diagnostics, interpretability, and honest model refinement.',
    approach:
      'Compared linear and nonlinear formulations for heating and cooling load while walking through VIF checks, residual review, normality assumptions, and influence diagnostics.',
    impact:
      'Adds visible statistics depth to the portfolio by showing how model interpretation and diagnostics guide decisions beyond a single fit score.',
    bullets: [
      'Modeled heating and cooling load as functions of eight architectural variables using OLS and nonlinear refinements.',
      'Validated model quality with VIF, residual plots, normality checks, homoscedasticity review, and influence diagnostics rather than stopping at R-squared.',
      'Reported adjusted R-squared values around 0.92 for heating load and 0.88 for cooling load while highlighting practical effects from compactness and glazing design.',
    ],
    tech: ['Python', 'statsmodels', 'scikit-learn', 'pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
    category: 'Research / Statistical Modeling',
    featured: false,
    coverImage: energyEfficiencyRegressionCover,
    highlights: ['OLS plus nonlinear refinements', 'Diagnostics-first workflow', 'Interpretability emphasis'],
    links: [
      {
        label: 'Project Report',
        url: githubBlob('Energy-Efficiency-Regression-and-Statistical-Analysis', 'Project_Report.pdf'),
        kind: 'report',
      },
      {
        label: 'Modeling Schema',
        url: githubBlob('Energy-Efficiency-Regression-and-Statistical-Analysis', 'Modeling%20schema.pdf'),
        kind: 'artifact',
      },
    ],
    relatedSlugs: ['oulad-causal-inference', 'noise-adaptive-spectral-embedding', 'texas-weather-data-analysis'],
    sourceEvidenceNotes: [
      'README objectives, statistical techniques, repository structure, key results, and insights sections.',
      'README references multiple notebooks plus the modeling schema PDF and final report PDF.',
      inferredTechNote,
    ],
  },
  {
    slug: 'application-fraud-detection-model',
    title: 'Application Fraud Detection Model',
    repoName: 'Application-Fraud-Detection-Model',
    repoUrl: githubRepo('Application-Fraud-Detection-Model'),
    shortDescription:
      'Supervised application-fraud model with velocity, recency, and cross-entity linkage features, wrapper-based feature selection, XGBoost evaluation, and ROI analysis.',
    recruiterPitch:
      'Strong risk-modeling project with business-aware metrics, temporal validation, and fraud-ring style feature engineering across identity entities.',
    problem:
      'Application fraud is driven by entity reuse, timing, and network-like patterns that are easy to miss without purpose-built feature engineering and temporal validation.',
    approach:
      'Engineered fraud features around recency, linkage, and relative activity, then narrowed the set through KS screening and sequential selection before XGBoost-based evaluation.',
    impact:
      'Makes the fraud-analytics signal concrete by tying capture rates to a recommended review band and a documented savings estimate in the repo.',
    bullets: [
      'Engineered more than 170 fraud features spanning entity reuse velocity, recency, relative activity spikes, and cross-entity diversity signals.',
      'Used KS-based filtering plus sequential feature selection to shrink the feature set to a compact XGBoost-driven model.',
      'Achieved about 60% fraud capture at the top 3% review band on the out-of-time set, with the README estimating up to $3B in annual savings at the recommended operating point.',
    ],
    tech: ['Python', 'XGBoost', 'LightGBM', 'CatBoost', 'pandas', 'scikit-learn', 'Jupyter'],
    category: 'Fraud / Risk Analytics',
    featured: false,
    coverImage: applicationFraudDetectionModelCover,
    highlights: ['Velocity plus linkage features', 'OOT fraud capture', '$3B savings estimate'],
    links: [
      {
        label: 'Final Report',
        url: githubBlob('Application-Fraud-Detection-Model', 'Final_Report.pdf'),
        kind: 'report',
      },
      {
        label: 'Data Quality Report',
        url: githubBlob('Application-Fraud-Detection-Model', 'DQR.pdf'),
        kind: 'report',
      },
      {
        label: 'Feature Engineering Report',
        url: githubBlob('Application-Fraud-Detection-Model', 'Data_Cleaning_Variable_Creation.pdf'),
        kind: 'report',
      },
    ],
    relatedSlugs: ['credit-card-transaction-fraud-analytics', 'nyc-property-fraud-detection', 'london-crime-analytics-neo4j-postgresql'],
    sourceEvidenceNotes: [
      'README key results, methodology, final model performance table, and financial impact analysis.',
      'README explicitly references notebooks/, reports/, and the PDF report set committed to the repo.',
      inferredTechNote,
    ],
  },
  {
    slug: 'nyc-property-fraud-detection',
    title: 'NYC Property Fraud Detection',
    repoName: 'NYC-Property-Fraud-Detection',
    repoUrl: githubRepo('NYC-Property-Fraud-Detection'),
    shortDescription:
      'Unsupervised property-fraud analytics pipeline for NYC assessment data using engineered valuation ratios, PCA-space distance scoring, autoencoders, and ensemble ranking.',
    recruiterPitch:
      'Shows anomaly-detection depth on messy public data, with domain-led feature design and multiple evidence layers instead of a single black-box score.',
    problem:
      'Property fraud review often lacks labeled examples, which makes anomaly prioritization more dependent on domain-informed features and multiple scoring views.',
    approach:
      'Built an unsupervised workflow around engineered valuation and consistency features, PCA-space distance scoring, autoencoder reconstruction error, and rank-based ensembling.',
    impact:
      'Shows how to build a review-oriented anomaly pipeline on a large public dataset without pretending unsupervised scores are definitive labels.',
    bullets: [
      'Scored roughly 1.07 million property records using an unsupervised workflow built for fraud triage when labeled examples are unavailable.',
      'Designed 29 engineered features combining value-to-size ratios, peer normalization by ZIP and tax class, and internal consistency checks.',
      'Combined PCA-space distance scoring and autoencoder reconstruction error through rank-scaled ensembling to surface reviewable anomalies.',
    ],
    tech: ['Python', 'PCA', 'Autoencoders', 'pandas', 'scikit-learn', 'Matplotlib', 'Jupyter'],
    category: 'Fraud / Risk Analytics',
    featured: false,
    coverImage: nycPropertyFraudDetectionCover,
    highlights: ['1.07M property records', '29 engineered features', 'PCA plus autoencoder ensemble'],
    links: [
      {
        label: 'Final Report',
        url: githubBlob('NYC-Property-Fraud-Detection', 'Final_Report.pdf'),
        kind: 'report',
      },
      {
        label: 'Modeling Report',
        url: githubBlob('NYC-Property-Fraud-Detection', 'Feature_Engineering_Unsupervised_Modeling.pdf'),
        kind: 'report',
      },
      {
        label: 'Notebook',
        url: githubBlob('NYC-Property-Fraud-Detection', 'NY_unsupervised_fraud.ipynb'),
        kind: 'notebook',
      },
    ],
    relatedSlugs: ['credit-card-transaction-fraud-analytics', 'application-fraud-detection-model', 'texas-weather-data-analysis'],
    sourceEvidenceNotes: [
      'README project reports section, feature engineering narrative, anomaly-detection modeling section, and results analysis.',
      'README references multiple committed PDF reports and the main notebook path.',
      inferredTechNote,
    ],
  },
  {
    slug: 'ml-projects',
    title: 'ML Projects Collection',
    repoName: 'ML-Projects',
    repoUrl: githubRepo('ML-Projects'),
    shortDescription:
      'Collection-style machine-learning repository kept in the portfolio for breadth, positioned as earlier exploratory work rather than a single flagship system.',
    recruiterPitch:
      'Useful coverage signal for completeness: keeps earlier ML work visible without overstating the depth or maturity of the public evidence.',
    problem:
      'Older or smaller ML experiments still matter for portfolio completeness, but they should be framed carefully when the public evidence trail is thin.',
    approach:
      'Included the repository as a conservative portfolio entry, using only the repo name and visible GitHub metadata because the connector did not surface a readable README or stronger artifact trail during this pass.',
    impact:
      'Keeps every public repository represented on the Projects page while clearly distinguishing exploratory breadth from stronger flagship work.',
    bullets: [
      'Maintained a public home for earlier machine-learning work instead of leaving older experimentation invisible in the portfolio.',
      'Positioned the repo as exploratory breadth rather than a flagship production or research system.',
      'Kept every claim conservative because the available public evidence in this pass was limited to the repository name and metadata.',
    ],
    tech: ['Machine learning', 'Exploratory modeling', 'Portfolio breadth'],
    category: 'Machine Learning',
    featured: false,
    coverImage: mlProjectsCover,
    highlights: ['Earlier ML breadth', 'Conservative evidence', 'Public repo coverage'],
    links: [],
    relatedSlugs: ['noise-adaptive-spectral-embedding', 'energy-efficiency-regression-and-statistical-analysis', 'texas-weather-data-analysis'],
    sourceEvidenceNotes: [
      'GitHub repository metadata was available through the plugin, but README content did not resolve during this audit pass.',
      'Descriptions were intentionally limited to repo naming and visible metadata to avoid inventing project specifics.',
    ],
  },
  {
    slug: 'london-crime-analytics-neo4j-postgresql',
    title: 'London Crime Analytics: Neo4j + PostgreSQL',
    repoName: 'London-Crime-Analytics-Neo4J-PostgreSQL',
    repoUrl: githubRepo('London-Crime-Analytics-Neo4J-PostgreSQL'),
    shortDescription:
      'Hybrid graph-and-relational crime analytics project that pairs PostgreSQL star-schema reporting with Neo4j relationship analysis for criminal-network discovery.',
    recruiterPitch:
      'Good analytics and data-architecture story: shows dimensional modeling, ETL orchestration, and graph reasoning in one portfolio piece.',
    problem:
      'Crime analytics needs both aggregate reporting and relationship-level analysis, which makes a single storage model feel limiting for the full workflow.',
    approach:
      'Modeled a relational warehouse for reporting, then built a Python ETL bridge into Neo4j so graph analysis could complement event and borough-level aggregation.',
    impact:
      'Demonstrates polyglot persistence in a way that is easy for recruiters to understand: the storage model changes with the question being asked.',
    bullets: [
      'Modeled a PostgreSQL warehouse with staging, fact, and dimension tables to support fast borough-level and event-level reporting.',
      'Built a Python ETL bridge that transforms warehouse records into a Neo4j graph of criminals, crime groups, events, and boroughs.',
      'Used polyglot persistence to analyze both aggregate crime trends and relationship-driven network patterns with the storage model best suited to each task.',
    ],
    tech: ['PostgreSQL', 'Neo4j', 'Python', 'Cypher', 'psycopg2', 'ETL'],
    category: 'Data Visualization / Analytics',
    featured: false,
    coverImage: londonCrimeAnalyticsCover,
    highlights: ['Star schema', 'Graph ETL bridge', 'Polyglot persistence'],
    links: [
      {
        label: 'Project Video',
        url: 'https://drive.google.com/file/d/1ZF9QO7tnyXrrVU-HLYtKCpzHmV4nDAQE/view?usp=sharing',
        kind: 'demo',
      },
    ],
    relatedSlugs: ['api-data-streaming', 'application-fraud-detection-model', 'texas-weather-data-analysis'],
    sourceEvidenceNotes: [
      'README sections on the PostgreSQL warehouse, Neo4j graph model, and core competencies.',
      'README references ddl.sql and dml.sql but does not surface screenshots or report assets directly.',
      inferredTechNote,
    ],
  },
  {
    slug: 'texas-weather-data-analysis',
    title: 'Texas Weather Data Analysis',
    repoName: 'Texas-Weather-Data-Analysis',
    repoUrl: githubRepo('Texas-Weather-Data-Analysis'),
    shortDescription:
      'Distributed climate-analysis pipeline that uses Spark for large-scale ETL, statistical testing, seasonal analysis, and Koppen-zone classification across Texas weather data.',
    recruiterPitch:
      'Shows strong data-processing range: handles wide packed records at scale, blends Spark with classical analysis, and closes the loop with supervised climate classification.',
    problem:
      'Large climate records need both distributed ETL and downstream statistical interpretation before they become useful for regional comparisons or predictive modeling.',
    approach:
      'Built a Spark-heavy pipeline to unpack and normalize raw weather records, then layered seasonal analysis, statistical testing, PCA-based compression, and XGBoost classification.',
    impact:
      'Shows data-science range across large-scale processing, classical analysis, and supervised modeling within one public project.',
    bullets: [
      'Built a hybrid Spark and Python workflow to decode packed annual weather records, normalize them into station-day observations, and persist checkpoints in Parquet.',
      'Used Spark aggregations and statistical analysis to compare regional climate patterns, seasonal signatures, and extreme-weather frequencies across Texas.',
      'Applied PCA-based feature compression and XGBoost classification to predict Koppen climate zones from yearly weather behavior.',
    ],
    tech: ['PySpark', 'Spark DataFrames', 'Spark RDD', 'XGBoost', 'Parquet', 'Matplotlib', 'Seaborn'],
    category: 'Data Visualization / Analytics',
    featured: false,
    coverImage: texasWeatherDataAnalysisCover,
    highlights: ['Distributed ETL', 'Seasonal climate analysis', 'Koppen classification'],
    links: [],
    relatedSlugs: ['api-data-streaming', 'energy-efficiency-regression-and-statistical-analysis', 'nyc-property-fraud-detection'],
    sourceEvidenceNotes: [
      'README project overview, machine-learning section, technical architecture, and key skills sections.',
      'The README is the primary public evidence source and does not surface report or image files directly.',
      inferredTechNote,
    ],
  },
  {
    slug: 'shreyashreddyk-portfolio-site',
    title: 'ShreyashK Portfolio Site',
    repoName: 'shreyashreddyk.github.io',
    repoUrl: githubRepo('shreyashreddyk.github.io'),
    shortDescription:
      'Static React portfolio site that packages AI, data, and analytics projects into a recruiter-ready narrative with typed content, accessible UI, and GitHub Pages deployment.',
    recruiterPitch:
      'Useful frontend and product-packaging signal: turns technical work into a polished, accessible, data-driven portfolio instead of a plain repository list.',
    problem:
      'Strong technical work still needs a clear public presentation layer so recruiters can understand scope, impact, and credibility quickly.',
    approach:
      'Built a static React, Vite, TypeScript, and Tailwind site with typed project data, HashRouter-safe routing, and public-safe content that can deploy directly to GitHub Pages.',
    impact:
      'Improves how the broader portfolio reads by turning scattered repos into a structured, searchable, recruiter-facing project experience.',
    bullets: [
      'Built a static portfolio experience around React, Vite, TypeScript, Tailwind CSS, Framer Motion, and HashRouter for GitHub Pages compatibility.',
      'Structured public content in typed data files so project narratives, highlights, and links stay consistent across the site.',
      'Focused the frontend on accessible navigation, polished motion, and public-safe portfolio storytelling instead of exposing raw source documents.',
    ],
    tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Router'],
    category: 'Data Visualization / Analytics',
    featured: false,
    coverImage: shreyashPortfolioCover,
    highlights: ['Static GitHub Pages site', 'Typed project data', 'Accessible frontend'],
    links: [
      {
        label: 'Live Site',
        url: 'https://shreyashreddyk.github.io',
        kind: 'demo',
      },
    ],
    relatedSlugs: ['prosody', 'api-data-streaming', 'sec-filing-intelligence-copilot'],
    sourceEvidenceNotes: [
      'README documents the stack, content model, quality checks, and GitHub Pages deployment workflow.',
      'Project descriptions are based on the repository README and local site structure in this workspace.',
    ],
  },
];

export const projectCategories = Object.keys(projectCategoryPriority) as ProjectCategory[];

export const allProjects = [...projects].sort((left, right) => {
  const categoryDelta = projectCategoryPriority[left.category] - projectCategoryPriority[right.category];

  if (categoryDelta !== 0) {
    return categoryDelta;
  }

  if (left.featured !== right.featured) {
    return Number(right.featured) - Number(left.featured);
  }

  return left.title.localeCompare(right.title);
});

export const featuredProjects = allProjects.filter((project) => project.featured);

export const projectsBySlug = Object.fromEntries(
  allProjects.map((project) => [project.slug, project]),
) as Record<string, Project>;

export const homeFeaturedProjects = [...featuredProjects];
