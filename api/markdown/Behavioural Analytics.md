public:: true

# Behavioural Analytics
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:behavioural-analytics", "@type":"Page", "title":"Behavioural Analytics", "vc:slug":"behavioural-analytics", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:behavioural-analytics",
  "@type":"Class",
  "label":"Behavioural Analytics",
  "definition":"Behavioural analytics is the security and analytics discipline that establishes baseline patterns of user, device and entity activity and detects meaningful deviations that may indicate threats, fraud or compromise. It applies statistical modelling and machine learning to telemetry such as login times, access sequences and transaction behaviour to surface anomalies that signature-based controls miss. The approach underpins user and entity behaviour analytics (UEBA) within modern security operations.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:security","label":"Security"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:cybersecurity","label":"Cybersecurity"}],
    "hasPart":[{"@id":"urn:ngm:class:anomaly-detection","label":"Anomaly Detection"},{"@id":"urn:ngm:class:threat-detection","label":"Threat Detection"}],
    "uses":[{"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"},{"@id":"urn:ngm:class:data-analytics","label":"Data Analytics"}],
    "requires":[{"@id":"urn:ngm:class:monitoring","label":"Monitoring"},{"@id":"urn:ngm:class:data-collection","label":"Data Collection"}],
    "enables":[{"@id":"urn:ngm:class:fraud-detection","label":"Fraud Detection"},{"@id":"urn:ngm:class:incident-response","label":"Incident Response"}],
    "supports":[{"@id":"urn:ngm:class:risk-assessment","label":"Risk Assessment"}],
    "dependsOn":[{"@id":"urn:ngm:class:siem","label":"SIEM"}],
    "relatedTo":[{"@id":"urn:ngm:class:intrusion-detection-system","label":"Intrusion Detection System"},{"@id":"urn:ngm:class:access-control","label":"Access Control"}],
    "contrastsWith":[{"@id":"urn:ngm:class:threat-detection","label":"Threat Detection"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Behavioural analytics models normal activity for users, devices and entities, then flags deviations indicating risk. It is a cornerstone of [[Cybersecurity]] and feeds [[Anomaly Detection]], [[Threat Detection]] and [[Fraud Detection]] pipelines using [[Machine Learning]].
- ### Overview
- Traditional security controls rely on known signatures and static rules, leaving them blind to novel or insider threats. Behavioural analytics instead learns dynamic baselines from telemetry and reasons about how far current activity departs from expected behaviour.
- The technique is most visible in user and entity behaviour analytics (UEBA), where peer-group comparison and time-series modelling distinguish benign change from malicious activity.
- Outputs are typically risk scores rather than binary verdicts, allowing analysts to triage by severity and reduce alert fatigue.
- ### Mechanisms
- Baseline establishment: profiling of normal access times, locations, data volumes and command sequences.
- Statistical and ML detection: clustering, regression and sequence models that quantify deviation.
- Risk scoring: aggregation of weak signals into a prioritised score.
- Feedback loop: analyst verdicts refine models and suppress false positives.
- ### Applications
- Insider threat detection and privileged-account monitoring.
- Account-takeover and credential-abuse detection.
- Fraud detection in financial and transactional systems.
- Enrichment of SIEM and incident-response workflows.
- ### Relationships
- partOf:: [[Cybersecurity]]
- hasPart:: [[Anomaly Detection]]
- hasPart:: [[Threat Detection]]
- uses:: [[Machine Learning]]
- uses:: [[Data Analytics]]
- requires:: [[Monitoring]]
- requires:: [[Data Collection]]
- enables:: [[Fraud Detection]]
- enables:: [[Incident Response]]
- supports:: [[Risk Assessment]]
- dependsOn:: [[SIEM]]
- relatedTo:: [[Intrusion Detection System]]
- relatedTo:: [[Access Control]]
- contrastsWith:: [[Threat Detection]]
- ### Provenance
- updated:: 2026-06-15
