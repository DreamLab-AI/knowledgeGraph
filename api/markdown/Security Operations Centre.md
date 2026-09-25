A Security Operations Centre (SOC) is a centralised function, combining people, processes and technology, that continuously monitors, detects, analyses and responds to cybersecurity threats across an organisation. Analysts triage alerts from telemetry sources, investigate incidents, and coordinate containment and remediation, typically aided by SIEM and SOAR platforms. The SOC is the operational hub of an enterprise security programme, providing the situational awareness and response capability needed to limit the impact of attacks.

### Overview

- A SOC operates around the clock, ingesting logs and signals from endpoints, networks, identity systems and cloud platforms.
- It is typically organised in tiers: alert triage, deeper investigation, and threat hunting and engineering.
- Detection content (rules, analytics, correlation) is continuously tuned to reduce false positives and surface real attacks.
- Maturity is measured by detection coverage, mean time to detect and mean time to respond.

### Key aspects

- **Continuous monitoring**: aggregation of [[Telemetry]] into a unified view via [[SIEM]] and [[Observability]] tooling.
- **Triage and investigation**: prioritising alerts, enriching with [[Threat Intelligence]], and confirming true incidents.
- **Response orchestration**: automating containment and remediation workflows with [[SOAR]].
- **Threat hunting**: proactive search for adversary activity using hypotheses and [[Anomaly Detection]].

### Applications

- Enterprise defence against intrusions, malware and account compromise.
- Managed detection and response services offered to multiple client organisations.
- Compliance and audit reporting for regulated industries.
- Coordination of breach response and forensic investigation after a [[Data Breach]].

### Provenance

