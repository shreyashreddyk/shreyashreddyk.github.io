export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  stack: string[];
  repoUrl: string;
  featured: boolean;
  highlights: string[];
  evidenceNote?: string;
};

const projects: Project[] = [
  {
    slug: 'sec-filing-intelligence-copilot',
    name: 'SEC Filing Intelligence Copilot',
    category: 'AI Systems',
    summary:
      'Production-oriented RAG system for SEC filings with hybrid retrieval, reranking, citation-enforced answers, typed FastAPI surfaces, evaluation artifacts, and a validated GKE deployment path.',
    stack: ['Python', 'FastAPI', 'Chroma', 'Docker', 'GKE', 'Prometheus', 'Grafana'],
    repoUrl: 'https://github.com/shreyashreddyk/sec-filing-intelligence-copilot',
    featured: true,
    highlights: [
      'Built live SEC ingestion, hybrid retrieval, and evidence-grounded answer generation for analyst-style financial questions.',
      'Validated deterministic smoke metrics including hit_rate@4 = 1.0, recall@4 = 1.0, and citation validity = 1.0 in saved artifacts.',
      'Documented a real GKE and Grafana monitoring path instead of presenting a deployment story as hypothetical.',
    ],
    evidenceNote: 'README cites tracked evaluation artifacts, CI checks, and a validated hosted deployment path.',
  },
  {
    slug: 'prosody',
    name: 'Prosody',
    category: 'Fullstack AI',
    summary:
      'Production-minded AI coaching workspace with a React product shell, FastAPI agent service, Supabase-backed persistence, Cloud Run deployment, and explicit realtime-surface boundaries.',
    stack: ['React', 'TypeScript', 'Vite', 'FastAPI', 'Supabase', 'Cloud Run'],
    repoUrl: 'https://github.com/shreyashreddyk/prosody',
    featured: true,
    highlights: [
      'Built an authenticated workspace for uploads, transcripts, summaries, flashcards, and session metrics.',
      'Deployed split web and agent services with JWT validation, persistence boundaries, CI, and Cloud Run runbooks.',
      'Kept the public production story honest by feature-gating the local WebRTC voice path instead of overselling it.',
    ],
    evidenceNote: 'README documents current production scope, known limitations, and deployment evidence screenshots.',
  },
  {
    slug: 'json-extraction-qlora-dpo',
    name: 'JSON Extraction with QLoRA + DPO',
    category: 'LLM Post-Training',
    summary:
      'Schema-constrained extraction project spanning baseline evaluation, SFT with QLoRA, DPO, validation contracts, and resumable vLLM benchmarking with artifact-first reporting.',
    stack: ['Python', 'Transformers', 'TRL', 'PEFT', 'Pydantic', 'vLLM'],
    repoUrl: 'https://github.com/shreyashreddyk/json-extraction-qlora-dpo',
    featured: true,
    highlights: [
      'Improved Micro F1 from 0.3030 to 0.7730 while reporting schema-pass and latency tradeoffs explicitly.',
      'Separated syntax quality from semantic correctness to keep model claims honest.',
      'Built script-first benchmarking and reporting instead of notebook-only evaluation logic.',
    ],
    evidenceNote: 'Saved metrics in the repo show baseline, SFT, and DPO stage comparisons plus latency costs.',
  },
  {
    slug: 'vllm-serving-performance-lab',
    name: 'vLLM Serving Performance Lab',
    category: 'Serving Systems',
    summary:
      'Performance study of vLLM serving under mixed prompt-length workloads, with fairness-oriented batching experiments and explicit short/long tail-latency analysis.',
    stack: ['Python', 'vLLM', 'Colab', 'Benchmarking', 'Latency Analysis'],
    repoUrl: 'https://github.com/shreyashreddyk/vllm-serving-performance-lab',
    featured: true,
    highlights: [
      'Tracked short, long, and overall p99 behavior to show mixed-workload interference instead of only reporting average latency.',
      'Identified a throughput knee around concurrency 16–32 in the deliberately bad baseline.',
      'Added dynamic token budgeting to eliminate context-limit failures under variable prompt lengths.',
    ],
    evidenceNote: 'README includes saved benchmark tables and plots for multiple experiment grids.',
  },
  {
    slug: 'noise-adaptive-spectral-embedding',
    name: 'Noise-Adaptive Spectral Embedding',
    category: 'ML Research',
    summary:
      'From-scratch manifold-learning toolkit focused on spectral truncation under noise, with seeded sweeps, oracle comparisons, stability-based cutoffs, and reproducible experiment artifacts.',
    stack: ['Python', 'NumPy', 'SciPy', 'scikit-learn', 'Typer', 'pytest'],
    repoUrl: 'https://github.com/shreyashreddyk/noise-adaptive-spectral-embedding',
    featured: true,
    highlights: [
      'Ran 120 seeded experiments across five synthetic manifolds with config-driven pipelines and report-ready artifacts.',
      'Improved S-curve trustworthiness from 0.879 to 0.914 versus the eigengap baseline using bandwidth stability.',
      'Documented failure modes honestly, including swiss-roll instability and biased noise estimation under curvature.',
    ],
    evidenceNote: 'README ties quantitative claims to committed results directories and analysis outputs.',
  },
  {
    slug: 'api-data-streaming',
    name: 'API Data Streaming Pipeline',
    category: 'Data Engineering',
    summary:
      'End-to-end streaming pipeline that ingests external API data through Kafka, processes it with Spark, stores results in Cassandra, and orchestrates workflows with Airflow.',
    stack: ['Python', 'Kafka', 'Spark', 'Cassandra', 'Airflow', 'Docker'],
    repoUrl: 'https://github.com/shreyashreddyk/api-data-streaming',
    featured: true,
    highlights: [
      'Connected ingestion, streaming, storage, and orchestration layers into a single data-engineering workflow.',
      'Used Docker Compose to coordinate the multi-service environment across Kafka, Spark, Cassandra, and Airflow.',
      'Framed the project as an operational pipeline rather than a single-script demo.',
    ],
    evidenceNote: 'README documents the full architecture and service topology for the streaming stack.',
  },
  {
    slug: 'credit-card-transaction-fraud-analytics',
    name: 'Credit Card Transaction Fraud Analytics',
    category: 'Fraud Analytics',
    summary:
      'Supervised fraud-detection pipeline with large-scale feature engineering, rigorous model selection, out-of-time validation, and financial-impact analysis.',
    stack: ['Python', 'CatBoost', 'XGBoost', 'LightGBM', 'pandas', 'scikit-learn'],
    repoUrl: 'https://github.com/shreyashreddyk/Credit-Card-Transaction-Fraud-Analytics',
    featured: false,
    highlights: [
      'Engineered 2,000+ candidate features including velocity, aggregation, target-encoding, and anomaly signals.',
      'Selected CatBoost as the final model after comparing multiple baselines and ensemble methods.',
      'README reports an estimated $53M annual savings recommendation at the chosen review threshold.',
    ],
  },
  {
    slug: 'london-crime-analytics-neo4j-postgresql',
    name: 'London Crime Analytics: Neo4j + PostgreSQL',
    category: 'Graph Analytics',
    summary:
      'Hybrid graph-and-relational analytics project using PostgreSQL for dimensional modeling and Neo4j for relationship-driven crime-intelligence analysis.',
    stack: ['PostgreSQL', 'Neo4j', 'Python', 'Cypher', 'ETL'],
    repoUrl: 'https://github.com/shreyashreddyk/London-Crime-Analytics-Neo4J-PostgreSQL',
    featured: false,
    highlights: [
      'Modeled a star schema in PostgreSQL for structured aggregation and OLAP-style reporting.',
      'Built a graph synthesis pipeline to map criminals, crime groups, boroughs, and events in Neo4j.',
      'Used polyglot persistence to match relational and network workloads to the right storage model.',
    ],
  },
  {
    slug: 'application-fraud-detection-model',
    name: 'Application Fraud Detection Model',
    category: 'Fraud Analytics',
    summary:
      'Application-fraud modeling workflow with extensive velocity and linkage features, wrapper-based feature selection, XGBoost evaluation, and business-impact framing.',
    stack: ['Python', 'XGBoost', 'LightGBM', 'pandas', 'scikit-learn'],
    repoUrl: 'https://github.com/shreyashreddyk/Application-Fraud-Detection-Model',
    featured: false,
    highlights: [
      'README reports 60% fraud capture on the out-of-time set by reviewing the top 3% of applications.',
      'Built feature engineering around recency, entity velocity, and cross-entity link diversity.',
      'Included a financial analysis to translate model quality into operational recommendations.',
    ],
  },
  {
    slug: 'nyc-property-fraud-detection',
    name: 'NYC Property Fraud Detection',
    category: 'Fraud Analytics',
    summary:
      'Unsupervised anomaly-detection pipeline for NYC property assessments using engineered valuation ratios, PCA-space distance scoring, and an autoencoder ensemble.',
    stack: ['Python', 'PCA', 'Autoencoders', 'pandas', 'scikit-learn'],
    repoUrl: 'https://github.com/shreyashreddyk/NYC-Property-Fraud-Detection',
    featured: false,
    highlights: [
      'Scored more than one million property records to surface high-priority anomalies for review.',
      'Designed 29 engineered features to capture inconsistent valuation and peer-relative patterns.',
      'Combined distance-based and neural reconstruction signals through rank-scaled ensembling.',
    ],
  },
  {
    slug: 'texas-weather-data-analysis',
    name: 'Texas Weather Data Analysis',
    category: 'Distributed Analytics',
    summary:
      'Hybrid Spark and Python pipeline for large-scale climate analysis, feature engineering over packed weather records, and supervised Koppen-zone classification.',
    stack: ['PySpark', 'Spark RDD', 'XGBoost', 'Parquet', 'Matplotlib'],
    repoUrl: 'https://github.com/shreyashreddyk/Texas-Weather-Data-Analysis',
    featured: false,
    highlights: [
      'Used Spark UDFs and posexplode-based reshaping to normalize large packed weather datasets.',
      'Applied PCA to climate time-series features before training a multi-class XGBoost classifier.',
      'Combined distributed ETL with local statistical analysis and visualization where it made sense.',
    ],
  },
  {
    slug: 'energy-efficiency-regression-and-statistical-analysis',
    name: 'Energy Efficiency Regression and Statistical Analysis',
    category: 'Statistical Modeling',
    summary:
      'Regression-focused project on building energy loads, emphasizing diagnostics, interpretability, nonlinear refinement, and transparent statistical reporting.',
    stack: ['Python', 'statsmodels', 'scikit-learn', 'pandas', 'Jupyter'],
    repoUrl: 'https://github.com/shreyashreddyk/Energy-Efficiency-Regression-and-Statistical-Analysis',
    featured: false,
    highlights: [
      'Compared linear and nonlinear models for heating and cooling load prediction.',
      'Documented multicollinearity, residual, normality, and influence diagnostics instead of stopping at fit metrics.',
      'Reported adjusted R-squared values around 0.92 for heating load and 0.88 for cooling load.',
    ],
  },
  {
    slug: 'oulad-causal-inference',
    name: 'OULAD Causal Inference',
    category: 'Causal Inference',
    summary:
      'Graduate causal-inference project studying early online engagement and course success with DAG-based adjustment, doubly robust estimation, diagnostics, and robustness checks.',
    stack: ['Python', 'Causal inference', 'AIPW', 'IPTW', 'Diagnostics'],
    repoUrl: 'https://github.com/shreyashreddyk/oulad-causal-inference',
    featured: false,
    highlights: [
      'Estimated an AIPW risk difference of about 0.235 for high versus lower early engagement under documented observational assumptions.',
      'Paired hand-built identification logic with bounded causal-discovery experiments and overlap diagnostics.',
      'Saved thresholds, balance tables, robustness summaries, and report figures as auditable artifacts.',
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const archiveProjects = projects.filter((project) => !project.featured);
export const allProjects = projects;
