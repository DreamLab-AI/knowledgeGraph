- ### Definition
  - [[Continuous Monitoring]] is a persistent automated oversight practice that streams [[Telemetry]] and [[Metrics Collection]] data from live systems into detection and [[Alerting]] pipelines, enabling organisations to maintain real-time awareness of system health and control effectiveness.
  - It underpins modern [[Risk Management]] and [[Security Operations]] by replacing the latency of periodic audits with always-on evidence accumulation.

- ### Overview
  - Traditional compliance and security programmes relied on point-in-time assessments — quarterly penetration tests, annual audits — that left organisations blind between cycles. Continuous monitoring closes these gaps by instrumenting systems to emit structured signals continuously.
  - The practice encompasses infrastructure metrics (CPU, memory, network), application performance indicators, security events (login attempts, privilege escalations), and regulatory controls (data access logs, encryption status).
  - Correlation engines, such as those in [[Security Information and Event Management]] platforms, join signals from disparate sources to surface multi-stage attack patterns or compliance drift.
  - In [[DevSecOps]] pipelines, continuous monitoring feeds directly into CI/CD gates, failing builds when security or quality thresholds are breached.

- ### Key Aspects
  - **Signal fidelity** — high-cardinality metrics and structured logs enable precise anomaly attribution versus noisy aggregates.
  - **Retention vs cost** — raw telemetry retention is expensive; tiered storage and downsampling balance compliance requirements with operational cost.
  - **Threshold management** — static and dynamic alert thresholds must be tuned to minimise false positives without missing true anomalies.
  - **Closed-loop remediation** — integrating monitoring with automated runbooks enables self-healing systems.

- ### Applications
  - Cloud infrastructure health monitoring with automated scaling and recovery triggers.
  - Continuous compliance evidence gathering for SOC 2, ISO 27001, and FedRAMP programmes.
  - Model performance monitoring detecting drift in [[Anomaly Detection]] and prediction quality over time.
  - Supply chain integrity monitoring tracking software component provenance continuously.

- ### Relationships
  - hasPart:: [[Telemetry]]
  - hasPart:: [[Alerting]]
  - hasPart:: [[Log Management]]
  - hasPart:: [[Metrics Collection]]
  - enables:: [[Incident Response]]
  - enables:: [[Compliance Monitoring]]
  - enables:: [[Anomaly Detection]]
  - requires:: [[Observability]]
  - requires:: [[Data Pipeline]]
  - implements:: [[Risk Management]]
  - implements:: [[Security Operations]]
  - relatedTo:: [[Security Information and Event Management]]
  - relatedTo:: [[DevSecOps]]
  - relatedTo:: [[Audit Trail]]
  - dependsOn:: [[Infrastructure]]
  - supports:: [[Accountability]]
  - supports:: [[Transparency]]
  - contrastsWith:: [[Periodic Audit]]

- ### Provenance
  - updated:: 2026-06-15