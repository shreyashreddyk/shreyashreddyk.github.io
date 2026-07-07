# Project Audit

This audit covers the 13 requested public repositories under `shreyashreddyk`. The GitHub plugin was used as the primary evidence source for README content, linked reports/docs, and visible artifact paths. Where GitHub topic and language metadata were not exposed cleanly through the plugin, technologies were inferred from README badges, repo structure, and linked files.

## Repo Notes
- `api-data-streaming`: README present. Visible architecture image in `Data engineering architecture.png`. Strong evidence for Kafka, Spark, Cassandra, Airflow, Docker Compose, and service topology; local cover was generated for consistency.
- `London-Crime-Analytics-Neo4J-PostgreSQL`: README present. No committed screenshot surfaced through README, but the repo clearly documents PostgreSQL star-schema work, Neo4j graph modeling, and a Python ETL bridge. Includes an external video demo link. Generated cover used.
- `Credit-Card-Transaction-Fraud-Analytics`: README present. No visible notebook/report/image path surfaced in README. Strong public evidence for 2,000+ engineered features, CatBoost selection, OOT validation, and a savings estimate. Generated cover used.
- `Texas-Weather-Data-Analysis`: README present. No screenshot/report path surfaced directly in README. Strong evidence for Spark ETL, UDF-based decoding, `posexplode`, PCA, and XGBoost climate-zone classification. Generated cover used.
- `NYC-Property-Fraud-Detection`: README present. Public report set surfaced: `Final_Report.pdf`, `Feature_Engineering_Unsupervised_Modeling.pdf`, `Data_Cleaning.pdf`, and `DQR.pdf`. No README image path surfaced; generated cover used.
- `Application-Fraud-Detection-Model`: README present. Public reports surfaced: `Final_Report.pdf`, `DQR.pdf`, and `Data_Cleaning_Variable_Creation.pdf`. No README image path surfaced; generated cover used.
- `Energy-Efficiency-Regression-and-Statistical-Analysis`: README present. Public notebooks, `Project_Report.pdf`, and `Modeling schema.pdf` surfaced. No README image path surfaced; generated cover used.
- `noise-adaptive-spectral-embedding`: README present. Strong artifact evidence via results figures and `reports/final_report.md`; several README images point to committed plots. Local cover was generated, but this repo is a strong candidate for a future direct figure-based cover swap.
- `sec-filing-intelligence-copilot`: README present. Strong visual evidence via GKE/Grafana screenshots under `assets/gke-grafana-demo/`, plus linked eval artifacts and deployment docs. Local cover was generated; a future pass could swap in a native screenshot-based cover.
- `vllm-serving-performance-lab`: README present. Strong visual evidence via committed experiment plots and a notebook PDF. Local cover was generated; a future pass could swap in one of the saved latency or heatmap figures.
- `json-extraction-qlora-dpo`: README present. Strong artifact evidence via `artifacts/reports/`, `artifacts/metrics/`, docs, and the benchmark notebook. No direct README screenshot path surfaced; generated cover used.
- `prosody`: README present. Strong visual evidence via committed screenshots in `artifacts/readme/` plus architecture and deployment documentation. Local cover was generated; a future pass could swap in the product landing screenshot.
- `oulad-causal-inference`: README present. Strong report-ready evidence via `docs/`, `data/processed/`, and `reports/figures/`. No direct README image embed was reused; generated cover used.

## Missing or Soft Evidence
- `Credit-Card-Transaction-Fraud-Analytics`: strong README narrative, but the public repo would benefit from explicit linked report or notebook paths.
- `Texas-Weather-Data-Analysis`: README is detailed, but there is no directly linked figure or report asset to use as a cover.
- `London-Crime-Analytics-Neo4J-PostgreSQL`: public README communicates the system well, but a committed schema or graph screenshot would make the portfolio signal stronger.

## Manual Follow-Up
- Consider swapping generated covers with native repo visuals for `sec-filing-intelligence-copilot`, `prosody`, `vllm-serving-performance-lab`, and `noise-adaptive-spectral-embedding`.
- Add direct report or notebook links to `Credit-Card-Transaction-Fraud-Analytics` and `Texas-Weather-Data-Analysis` if those assets are public and worth surfacing.
- Add one static graph or schema image to `London-Crime-Analytics-Neo4J-PostgreSQL` to make the hybrid architecture more tangible at a glance.
