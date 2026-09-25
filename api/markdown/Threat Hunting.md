Threat hunting is a proactive cybersecurity practice in which analysts iteratively search through networks, endpoints, and data repositories for hidden adversarial activity that has evaded automated detection. Unlike reactive incident response, threat hunting is hypothesis-driven, combining threat intelligence, behavioural analytics, and expert intuition to identify indicators of compromise or attack techniques before they manifest as confirmed incidents. The discipline reduces dwell time and surfaces novel attacker tradecraft for which signatures do not yet exist.

### Overview

- Threat hunting emerged as adversaries demonstrated the ability to maintain persistence within networks for extended periods despite defensive tooling. The SANS Hunting Maturity Model (HM0–HM4) characterises organisational capability from ad-hoc searches to fully automated hunting programmes. Structured hunting sessions begin with a hypothesis (e.g., "a supply-chain implant may be beaconing via DNS"), proceed through data collection, analysis with [[Behavioural Analytics]], and result in either a confirmed finding escalated to incident response or a refined detection rule.

### Key aspects

- **Hypothesis-driven** — starts from threat intelligence, attacker TTPs, or environmental anomalies, not alert queues.
- **Proactive cadence** — regular scheduled hunts, not triggered by alerts.
- **Dwell-time reduction** — primary KPI is shortening attacker residence before detection.
- **Detection engineering output** — hunts produce SIEM rules, EDR detections, and playbooks.
- **Tooling** — EDR platforms (CrowdStrike Falcon, Microsoft Defender), SIEM/SOAR, UEBA.

### Mechanisms

- Analysts query telemetry across endpoints, network, and identity layers using tools such as KQL, Splunk SPL, or Elastic EQL. Anomalous patterns are correlated against threat models. Confirmed hypotheses are escalated; false paths improve data quality and detection baselines.

### Applications

- Nation-state and APT intrusion discovery in critical infrastructure.
- Insider threat detection in financial services.
- Cloud workload compromise hunting (CloudTrail, GCP audit logs).
- Ransomware precursor activity identification before encryption stage.

### Provenance

