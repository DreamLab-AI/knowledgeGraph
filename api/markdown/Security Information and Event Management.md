Security Information and Event Management (SIEM) is a security discipline and platform category that aggregates, normalises and correlates log and event data from across an estate to detect, investigate and respond to threats. It combines real-time monitoring and alerting with longer-term storage for forensics and compliance reporting. SIEM is the analytical core of most security operations, turning raw telemetry into actionable detections.

- Security Information and Event Management ingests, normalises and correlates security telemetry from across an estate to drive [[Threat Detection]] and [[Incident Response]].
- It depends on comprehensive [[Audit Logging]] and broad [[Observability]], and serves as the analytical hub of [[Cybersecurity]] operations.

### Overview

- A SIEM collects logs and events from endpoints, networks, identity systems and applications, then parses them into a common schema so disparate sources can be correlated.
- Correlation rules and analytics flag patterns that indicate compromise — failed logins followed by privilege escalation, beaconing, or data exfiltration.
- Detections raise alerts that feed [[Incident Response]] workflows, while retained event history supports forensic investigation and [[Compliance Monitoring]].
- Modern SIEMs increasingly fold in [[Anomaly Detection]] and enriched [[Threat Intelligence]] to reduce false positives and surface novel attacks.

### Key aspects

- Ingestion and normalisation: collecting heterogeneous telemetry and mapping it to a unified event model.
- Correlation: combining events across sources and time to detect multi-stage attacks.
- Alerting and triage: prioritising detections for analysts and driving [[Incident Response]].
- Retention and search: storing events for forensics and [[Compliance Monitoring]] reporting.
- Enrichment: layering [[Threat Intelligence]] and asset context onto raw events.

### Mechanisms

- Log shippers and agents stream [[Audit Logging]] data into the platform.
- Rule engines and statistical [[Anomaly Detection]] implement [[Threat Detection]].
- Dashboards and queries surface findings, bridging to wider [[Observability]].
- Case management ties alerts to investigations and [[Incident Response]] actions.

### Applications

- Security operations centres monitoring enterprise estates around the clock.
- Regulatory reporting that needs auditable, retained security event history.
- Threat hunting that pivots across correlated telemetry and [[Threat Intelligence]].
- Coordinating with [[Vulnerability Management]] and [[Data Loss Prevention]] to close exposure.

### Provenance

