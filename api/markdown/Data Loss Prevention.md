public:: true

# Data Loss Prevention
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-loss-prevention",
  "@type": "Page",
  "vc:slug": "data-loss-prevention",
  "title": "Data Loss Prevention",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-loss-prevention",
  "@type": "Class",
  "label": "Data Loss Prevention",
  "definition": "Data loss prevention (DLP) is a set of security controls and technologies that detect and block the unauthorised exfiltration, leakage or misuse of sensitive data. DLP systems classify content, monitor data in use, in motion and at rest, and enforce policies at endpoints, networks and cloud services. It is a core data-protection capability supporting compliance with privacy and confidentiality requirements.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-security-and-identity", "label": "Infrastructure Security and Identity"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:data-protection", "label": "Data Protection"},
      {"@id": "urn:ngm:class:compliance-control", "label": "Compliance Control"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Data loss prevention detects and blocks unauthorised movement of sensitive data, forming part of [[Data Protection]] and serving as a [[Compliance Control]] for confidentiality and privacy.
- ### Content
  - DLP engines classify content via pattern matching, fingerprinting and machine learning, then apply policies across endpoints, email, networks and SaaS. Actions range from logging and alerting to encryption, quarantine or outright blocking of risky transfers.
