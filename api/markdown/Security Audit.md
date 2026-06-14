public:: true

# Security Audit
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:security-audit",
  "@type": "Page",
  "vc:slug": "security-audit",
  "title": "Security Audit",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:security-audit",
  "@type": "Class",
  "label": "Security Audit",
  "definition": "A security audit is a systematic evaluation of a system's controls, configurations, and code against security requirements and threats. It combines techniques such as code review, configuration assessment, penetration testing, and control verification to identify vulnerabilities and compliance gaps. Audits produce evidence and remediation guidance used to reduce risk and demonstrate assurance.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:threat-surface-map", "label": "Threat Surface Map"},
      {"@id": "urn:ngm:class:etsi-domain-data-management-security", "label": "ETSI Domain: Data Management + Security"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A security audit systematically evaluates controls and code against threats; it is enabled by a [[Threat Surface Map]] and is a constituent activity of the [[ETSI Domain Data Management Security]].
- ### Content
  - Engagements scope assets and threat models, then apply static and dynamic analysis, configuration review, and testing to surface weaknesses. Findings are rated by severity and exploitability, prioritised for remediation, and re-tested, with audit reports often supporting regulatory or contractual assurance.
