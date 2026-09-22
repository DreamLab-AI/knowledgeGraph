public:: true

# Threat Hunting

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:threat-hunting",
  "@type": "Page",
  "title": "Threat Hunting",
  "vc:slug": "threat-hunting",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:threat-hunting",
  "@type": "Class",
  "label": "Threat Hunting",
  "definition": "Threat hunting is a proactive cybersecurity practice in which analysts iteratively search through networks, endpoints, and data repositories for hidden adversarial activity that has evaded automated detection. Unlike reactive incident response, threat hunting is hypothesis-driven, combining threat intelligence, behavioural analytics, and expert intuition to identify indicators of compromise or attack techniques before they manifest as confirmed incidents. The discipline reduces dwell time and surfaces novel attacker tradecraft for which signatures do not yet exist.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:security", "label": "Security"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:incident-response", "label": "Incident Response"},
      {"@id": "urn:ngm:class:threat-intelligence", "label": "Threat Intelligence"},
      {"@id": "urn:ngm:class:cyber-resilience", "label": "Cyber Resilience"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:security-information-and-event-management", "label": "Security Information and Event Management"},
      {"@id": "urn:ngm:class:intrusion-detection-system", "label": "Intrusion Detection System"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:red-team", "label": "Red Team"},
      {"@id": "urn:ngm:class:penetration-testing", "label": "Penetration Testing"},
      {"@id": "urn:ngm:class:mitre-attack", "label": "MITRE ATT&CK"},
      {"@id": "urn:ngm:class:anomaly-detection", "label": "Anomaly Detection"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:behavioural-analytics", "label": "Behavioural Analytics"},
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:endpoint-detection-and-response", "label": "Endpoint Detection and Response"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:security-operations-centre", "label": "Security Operations Centre"},
      {"@id": "urn:ngm:class:log-management", "label": "Log Management"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:hypothesis-generation", "label": "Hypothesis Generation"},
      {"@id": "urn:ngm:class:indicator-of-compromise", "label": "Indicator of Compromise"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:threat-intelligence-platform", "label": "Threat Intelligence Platform"},
      {"@id": "urn:ngm:class:network-traffic-analysis", "label": "Network Traffic Analysis"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:zero-trust-architecture", "label": "Zero Trust Architecture"}
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

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
