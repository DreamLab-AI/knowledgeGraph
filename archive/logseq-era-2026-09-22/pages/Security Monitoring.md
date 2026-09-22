public:: true

# Security Monitoring
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:security-monitoring", "@type":"Page", "title":"Security Monitoring", "vc:slug":"security-monitoring", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:security-monitoring",
  "@type":"Class",
  "label":"Security Monitoring",
  "definition":"Security monitoring is the continuous collection, correlation and analysis of telemetry from systems, networks and applications to detect indicators of compromise and policy violations. It feeds detection rules, baselines and analytics that surface suspicious behaviour for investigation and response. As a discipline it spans log aggregation, intrusion detection, threat intelligence enrichment and alerting, and is a core function of a security operations centre.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:threat-detection","label":"Threat Detection"}],
  "relations":{
    "uses":[
      {"@id":"urn:ngm:class:siem","label":"SIEM"},
      {"@id":"urn:ngm:class:logging","label":"Logging"},
      {"@id":"urn:ngm:class:anomaly-detection","label":"Anomaly Detection"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:observability","label":"Observability"},
      {"@id":"urn:ngm:class:metrics-collection","label":"Metrics Collection"},
      {"@id":"urn:ngm:class:audit-logging","label":"Audit Logging"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:incident-response","label":"Incident Response"},
      {"@id":"urn:ngm:class:threat-detection","label":"Threat Detection"},
      {"@id":"urn:ngm:class:vulnerability-management","label":"Vulnerability Management"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:security-operations-centre","label":"Security Operations Centre"},
      {"@id":"urn:ngm:class:threat-intelligence","label":"Threat Intelligence"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:intrusion-detection","label":"Intrusion Detection"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:alerting","label":"Alerting"},
      {"@id":"urn:ngm:class:defense-in-depth","label":"Defense In Depth"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Security monitoring continuously collects and correlates telemetry to detect compromise and policy violations.
	- It is a form of [[Threat Detection]] that turns raw [[Logging]] into actionable signals.
	- It relies on [[Observability]] across systems, networks and applications.
- ### Overview
	- Telemetry from hosts, networks and applications is normalised and centralised for analysis.
	- Detection logic combines signatures, behavioural baselines and threat intelligence to flag anomalies.
	- Alerts are triaged and escalated, feeding investigation and containment workflows.
	- Coverage and tuning balance sensitivity against alert fatigue from false positives.
- ### Mechanisms
	- A [[SIEM]] aggregates and correlates events across many sources in near real time.
	- [[Anomaly Detection]] models learn normal behaviour and surface statistically unusual activity.
	- Enrichment with [[Threat Intelligence]] adds context such as known-bad indicators.
	- [[Alerting]] and dashboards route findings to analysts with severity and context.
- ### Applications
	- Driving the detection function of a [[Security Operations Centre]].
	- Triggering [[Incident Response]] when high-confidence indicators appear.
	- Feeding [[Vulnerability Management]] with evidence of exploited weaknesses.
	- Demonstrating control effectiveness through [[Audit Logging]] and reporting.
- ### Relationships
	- subClassOf:: [[Threat Detection]]
	- uses:: [[SIEM]]
	- uses:: [[Logging]]
	- uses:: [[Anomaly Detection]]
	- requires:: [[Observability]]
	- requires:: [[Metrics Collection]]
	- requires:: [[Audit Logging]]
	- enables:: [[Incident Response]]
	- enables:: [[Threat Detection]]
	- enables:: [[Vulnerability Management]]
	- supports:: [[Security Operations Centre]]
	- supports:: [[Threat Intelligence]]
	- contrastsWith:: [[Intrusion Detection]]
	- relatedTo:: [[Alerting]]
	- relatedTo:: [[Defense In Depth]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
