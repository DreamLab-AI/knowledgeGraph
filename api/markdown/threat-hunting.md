- ### Definition
  - [[Threat Hunting]] is the proactive, analyst-led search for adversarial activity lurking undetected in enterprise environments.
  - It differs from reactive [[Incident Response]] and automated detection: hunters form hypotheses based on [[Threat Intelligence]] and [[MITRE ATT&CK]] TTPs, then iteratively investigate logs, network flows, and endpoint telemetry.
  - Success is measured by reduced dwell time and the creation of new detections that close gaps in automated coverage.

- ### Overview
  - Threat hunting emerged as adversaries demonstrated the ability to maintain persistence within networks for extended periods despite defensive tooling. The SANS Hunting Maturity Model (HM0–HM4) characterises organisational capability from ad-hoc searches to fully automated hunting programmes. Structured hunting sessions begin with a hypothesis (e.g., "a supply-chain implant may be beaconing via DNS"), proceed through data collection, analysis with [[Behavioural Analytics]], and result in either a confirmed finding escalated to incident response or a refined detection rule.

- ### Key aspects
  - **Hypothesis-driven** — starts from threat intelligence, attacker TTPs, or environmental anomalies, not alert queues.
  - **Proactive cadence** — regular scheduled hunts, not triggered by alerts.
  - **Dwell-time reduction** — primary KPI is shortening attacker residence before detection.
  - **Detection engineering output** — hunts produce SIEM rules, EDR detections, and playbooks.
  - **Tooling** — EDR platforms (CrowdStrike Falcon, Microsoft Defender), SIEM/SOAR, UEBA.

- ### Mechanisms
  - Analysts query telemetry across endpoints, network, and identity layers using tools such as KQL, Splunk SPL, or Elastic EQL. Anomalous patterns are correlated against threat models. Confirmed hypotheses are escalated; false paths improve data quality and detection baselines.

- ### Applications
  - Nation-state and APT intrusion discovery in critical infrastructure.
  - Insider threat detection in financial services.
  - Cloud workload compromise hunting (CloudTrail, GCP audit logs).
  - Ransomware precursor activity identification before encryption stage.

- ### Relationships
  - enables:: [[Incident Response]]
  - enables:: [[Threat Intelligence]]
  - enables:: [[Cyber Resilience]]
  - contrastsWith:: [[Security Information and Event Management]]
  - contrastsWith:: [[Intrusion Detection System]]
  - relatedTo:: [[Red Team]]
  - relatedTo:: [[Penetration Testing]]
  - relatedTo:: [[MITRE ATT&CK]]
  - relatedTo:: [[Anomaly Detection]]
  - uses:: [[Behavioural Analytics]]
  - uses:: [[Machine Learning]]
  - uses:: [[Endpoint Detection and Response]]
  - requires:: [[Security Operations Centre]]
  - hasPart:: [[Indicator of Compromise]]
  - supports:: [[Zero Trust Architecture]]

- ### Provenance
  - updated:: 2026-06-15