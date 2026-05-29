public:: true

# Threat Detection
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:threat-detection",
  "@type": "Page",
  "vc:slug": "threat-detection",
  "title": "Threat Detection",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:threat-detection",
  "@type": "Class",
  "label": "Threat Detection",
  "definition": "Threat detection is the cybersecurity discipline concerned with identifying malicious or anomalous activity within a system or network in time to enable an effective defensive response, distinguishing genuine threats from benign anomalies across high-volume, noisy telemetry. It encompasses signature-based detection of known attack patterns, behavioural analytics for novel threats, and machine learning models that model normal system baselines and flag statistical deviations. Effective threat detection must balance sensitivity (catching real attacks) against specificity (avoiding alert fatigue from false positives).",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:anomaly-detection", "label": "Anomaly Detection"},
      {"@id": "urn:ngm:class:threat-model", "label": "Threat Model"},
      {"@id": "urn:ngm:class:threat-actor", "label": "Threat Actor"},
      {"@id": "urn:ngm:class:attack-vector", "label": "Attack Vector"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:incident-response", "label": "Incident Response"},
      {"@id": "urn:ngm:class:threat-surface-map", "label": "Threat Surface Map"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:network-security", "label": "Network Security"},
      {"@id": "urn:ngm:class:information-security", "label": "Information Security"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:ai-security", "label": "AI Security"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Threat Detection]] is the active [[Cybersecurity]] practice of identifying malicious or anomalous activity across systems and networks using [[Anomaly Detection]], signature matching, and behavioural analytics, enabling timely [[Incident Response]] before threat actors can achieve their objectives.

- ### Relationships
  - Threat Detection operates against a landscape of known [[Attack Vector]] patterns and novel behaviours attributed to specific [[Threat Actor]] profiles encoded in [[Threat Model]] frameworks. Positive detections feed directly into [[Incident Response]] workflows and populate [[Threat Surface Map]] assessments. It [[supports]] both [[Network Security]] monitoring and broader [[Information Security]] operations, increasingly using [[AI Security]] techniques such as machine learning anomaly models to scale detection across petabyte-scale telemetry streams.

- ### Content
  - The origins of automated threat detection lie in intrusion detection systems (IDS) developed in the 1980s, notably Dorothy Denning's landmark 1987 paper proposing statistical models of normal user behaviour. Early commercial IDS products (ISS RealSecure, Snort) used rule-based signature matching against network packet signatures, which worked well for known exploits but failed against novel attacks. The transition to Security Information and Event Management (SIEM) platforms in the 2000s aggregated multi-source logs for correlation analysis, enabling cross-system attack chain detection.

  - Modern threat detection architectures layer multiple detection techniques. Signature-based detection matches traffic or file artefacts against curated databases (YARA rules, SNORT rules, MITRE ATT&CK technique indicators). User and Entity Behaviour Analytics (UEBA) establish statistical baselines for individual users, systems, and network segments, flagging deviations using dimensionality reduction, clustering, and isolation forests. Endpoint Detection and Response (EDR) agents instrument process creation, file I/O, and registry changes on individual hosts, enabling detection of living-off-the-land attacks that use legitimate system tools. Threat intelligence feeds provide external context about active campaign indicators.

  - Machine learning has transformed threat detection throughput: deep learning models process millions of network flow records per second to score lateral movement, data exfiltration, and command-and-control patterns that signature rules miss. Graph neural networks model entity relationships in Active Directory and cloud IAM configurations, detecting privilege escalation paths. Natural language processing applied to log data extracts attack narratives from unstructured text. However, adversarial attackers specifically craft attacks to evade ML models, driving a cat-and-mouse dynamic between detection model training and evasion research.

  - By 2024-2025, AI-native detection platforms (Crowdstrike Falcon, Microsoft Defender, SentinelOne) have displaced legacy SIEM-only approaches in most enterprise environments. Large language model integration enables natural-language threat hunting queries and automated triage narrative generation, reducing analyst cognitive load. The supply-chain attack surface (XZ Utils backdoor, SolarWinds-style campaigns) and AI system-specific threats (model poisoning, prompt injection attacks on LLM-integrated pipelines) have expanded the threat detection surface well beyond traditional network and endpoint domains.

