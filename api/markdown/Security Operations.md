public:: true

# Security Operations
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:security-operations",
  "@type": "Page",
  "vc:slug": "security-operations",
  "title": "Security Operations",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:security-operations",
  "@type": "Class",
  "label": "Security Operations",
  "definition": "Security operations is the ongoing practice of monitoring, detecting, investigating, and responding to security threats across an organisation's systems. Centred on a security operations centre, it integrates log collection, SIEM correlation, alert triage, threat intelligence, and incident response. Its goal is to reduce dwell time and limit the impact of attacks through continuous vigilance.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:compliance-monitoring", "label": "Compliance Monitoring"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Security operations is the continuous monitoring and response discipline that is related to and supports [[Compliance Monitoring]] by providing detection and incident telemetry.
- ### Content
  - A SOC ingests logs and telemetry into a SIEM or detection platform, correlates events into prioritised alerts, and runs investigation and response playbooks. Increasing automation through SOAR and analytics reduces manual triage, while metrics such as mean time to detect and respond gauge effectiveness.
