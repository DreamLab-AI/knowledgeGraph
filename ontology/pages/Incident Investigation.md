public:: true

# Incident Investigation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:incident-investigation",
  "@type": "Page",
  "vc:slug": "incident-investigation",
  "title": "Incident Investigation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:incident-investigation",
  "@type": "Class",
  "label": "Incident Investigation",
  "definition": "Incident investigation is the structured process of determining the root cause, scope, and impact of a security or operational incident by collecting and analysing evidence. In a cybersecurity context it follows the breach lifecycle—identification, containment, evidence preservation, forensic analysis, and lessons learned—to understand how an incident occurred and to prevent recurrence. It relies heavily on audit trails and digital-forensics methods to reconstruct events.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"}],
  "relations": {
    "uses": [{"@id": "urn:ngm:class:audit-trail", "label": "Audit Trail"}],
    "relatedTo": [{"@id": "urn:ngm:class:digital-forensics-framework", "label": "Digital Forensics Framework"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Incident investigation reconstructs the cause and impact of security incidents from evidence, drawing on the [[Audit Trail]] and methods defined by a [[Digital Forensics Framework]].
- ### Content
  - Investigators preserve the chain of custody, correlate logs and telemetry across systems, and apply root-cause techniques to distinguish initial vectors from downstream effects. Findings feed remediation, legal and regulatory reporting, and improvements to detection and response controls, closing the loop on the incident lifecycle.
