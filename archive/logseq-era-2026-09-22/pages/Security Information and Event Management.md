public:: true

# Security Information and Event Management

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:security-information-and-event-management", "@type":"Page", "title":"Security Information and Event Management", "vc:slug":"security-information-and-event-management", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:security-information-and-event-management",
  "@type":"Class",
  "label":"Security Information and Event Management",
  "definition":"Security Information and Event Management (SIEM) is a security discipline and platform category that aggregates, normalises and correlates log and event data from across an estate to detect, investigate and respond to threats. It combines real-time monitoring and alerting with longer-term storage for forensics and compliance reporting. SIEM is the analytical core of most security operations, turning raw telemetry into actionable detections.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:network-security","label":"Network Security"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:threat-detection","label":"Threat Detection"},{"@id":"urn:ngm:class:audit-logging","label":"Audit Logging"}],
    "partOf":[{"@id":"urn:ngm:class:cybersecurity","label":"Cybersecurity"}],
    "requires":[{"@id":"urn:ngm:class:observability","label":"Observability"}],
    "enables":[{"@id":"urn:ngm:class:incident-response","label":"Incident Response"},{"@id":"urn:ngm:class:threat-detection","label":"Threat Detection"}],
    "dependsOn":[{"@id":"urn:ngm:class:audit-logging","label":"Audit Logging"}],
    "uses":[{"@id":"urn:ngm:class:anomaly-detection","label":"Anomaly Detection"},{"@id":"urn:ngm:class:threat-intelligence","label":"Threat Intelligence"}],
    "supports":[{"@id":"urn:ngm:class:compliance-monitoring","label":"Compliance Monitoring"},{"@id":"urn:ngm:class:incident-response","label":"Incident Response"}],
    "implements":[{"@id":"urn:ngm:class:threat-detection","label":"Threat Detection"}],
    "relatedTo":[{"@id":"urn:ngm:class:vulnerability-management","label":"Vulnerability Management"},{"@id":"urn:ngm:class:data-loss-prevention","label":"Data Loss Prevention"}],
    "bridgesTo":[{"@id":"urn:ngm:class:observability","label":"Observability"}],
    "standardizedBy":[{"@id":"urn:ngm:class:cybersecurity","label":"Cybersecurity"}]
  },
  "sameAs":[{"@id":"urn:ngm:class:siem","label":"SIEM"}],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Security Information and Event Management ingests, normalises and correlates security telemetry from across an estate to drive [[Threat Detection]] and [[Incident Response]].
- It depends on comprehensive [[Audit Logging]] and broad [[Observability]], and serves as the analytical hub of [[Cybersecurity]] operations.
- ### Overview
- A SIEM collects logs and events from endpoints, networks, identity systems and applications, then parses them into a common schema so disparate sources can be correlated.
- Correlation rules and analytics flag patterns that indicate compromise — failed logins followed by privilege escalation, beaconing, or data exfiltration.
- Detections raise alerts that feed [[Incident Response]] workflows, while retained event history supports forensic investigation and [[Compliance Monitoring]].
- Modern SIEMs increasingly fold in [[Anomaly Detection]] and enriched [[Threat Intelligence]] to reduce false positives and surface novel attacks.
- ### Key aspects
- Ingestion and normalisation: collecting heterogeneous telemetry and mapping it to a unified event model.
- Correlation: combining events across sources and time to detect multi-stage attacks.
- Alerting and triage: prioritising detections for analysts and driving [[Incident Response]].
- Retention and search: storing events for forensics and [[Compliance Monitoring]] reporting.
- Enrichment: layering [[Threat Intelligence]] and asset context onto raw events.
- ### Mechanisms
- Log shippers and agents stream [[Audit Logging]] data into the platform.
- Rule engines and statistical [[Anomaly Detection]] implement [[Threat Detection]].
- Dashboards and queries surface findings, bridging to wider [[Observability]].
- Case management ties alerts to investigations and [[Incident Response]] actions.
- ### Applications
- Security operations centres monitoring enterprise estates around the clock.
- Regulatory reporting that needs auditable, retained security event history.
- Threat hunting that pivots across correlated telemetry and [[Threat Intelligence]].
- Coordinating with [[Vulnerability Management]] and [[Data Loss Prevention]] to close exposure.
- ### Relationships
- hasPart:: [[Threat Detection]]
- hasPart:: [[Audit Logging]]
- partOf:: [[Cybersecurity]]
- requires:: [[Observability]]
- enables:: [[Incident Response]]
- enables:: [[Threat Detection]]
- dependsOn:: [[Audit Logging]]
- uses:: [[Anomaly Detection]]
- uses:: [[Threat Intelligence]]
- supports:: [[Compliance Monitoring]]
- supports:: [[Incident Response]]
- implements:: [[Threat Detection]]
- relatedTo:: [[Vulnerability Management]]
- relatedTo:: [[Data Loss Prevention]]
- bridgesTo:: [[Observability]]
- standardizedBy:: [[Cybersecurity]]
- ### Provenance
- updated:: 2026-06-15
- inferenceRule:: GapMaterialisation
- attributedTo:: did:nostr:ontology-mesh
