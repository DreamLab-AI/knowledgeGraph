public:: true

# SIEM
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:siem",
  "@type": "Page",
  "vc:slug": "siem",
  "title": "SIEM",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:siem",
  "@type": "Class",
  "label": "SIEM",
  "definition": "SIEM (Security Information and Event Management) is a platform that aggregates, normalises, and correlates log and event data from across an organisation's IT estate to detect threats and support compliance. It combines real-time alerting, anomaly detection, and historical search with dashboards and audit reporting. It is a foundational tool of security operations centres and regulatory compliance programmes.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:compliance-control", "label": "Compliance Control"}, {"@id": "urn:ngm:class:cyber-security-and-cryptography", "label": "Cyber Security and Cryptography"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - SIEM (Security Information and Event Management) aggregates and correlates logs across an estate to detect threats and evidence compliance. It is used to implement a [[Compliance Control]] and is a core capability within [[Cyber Security and Cryptography]].
- ### Content
  - Ingest pipelines normalise heterogeneous logs into a common schema, then correlation rules and increasingly machine-learning models surface incidents for analyst triage. Long-term retention serves forensic investigation and audit, while integrations with SOAR enable automated containment and response.
