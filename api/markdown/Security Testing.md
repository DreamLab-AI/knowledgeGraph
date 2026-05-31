public:: true

# Security Testing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:security-testing",
  "@type": "Page",
  "vc:slug": "security-testing",
  "title": "Security Testing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:security-testing",
  "@type": "Class",
  "label": "Security Testing",
  "definition": "Security testing is the evaluation of software to discover vulnerabilities and verify that security controls behave as intended. It includes static application security testing, dynamic testing, dependency and secret scanning, fuzzing, and penetration testing. Integrated into development pipelines, it shifts vulnerability discovery earlier and continuously throughout the software lifecycle.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:dev-sec-ops", "label": "DevSecOps"},
      {"@id": "urn:ngm:class:testing-process", "label": "Testing Process"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Security testing discovers vulnerabilities and validates controls; it is used by [[DevSecOps]] and forms a part of the broader [[Testing Process]].
- ### Content
  - SAST analyses source for insecure patterns, DAST probes running applications, and software composition analysis flags vulnerable dependencies. Embedding these scans into CI/CD with policy gates enables continuous assurance, while periodic penetration tests provide adversarial validation of the deployed system.
