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
    "hasPart": [
      {"@id": "urn:ngm:class:penetration-testing", "label": "Penetration Testing"},
      {"@id": "urn:ngm:class:vulnerability-assessment", "label": "Vulnerability Assessment"},
      {"@id": "urn:ngm:class:code-review", "label": "Code Review"},
      {"@id": "urn:ngm:class:configuration-management", "label": "Configuration Management"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:threat-model", "label": "Threat Model"},
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"},
      {"@id": "urn:ngm:class:audit-log", "label": "Audit Log"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"},
      {"@id": "urn:ngm:class:incident-response", "label": "Incident Response"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:threat-surface-map", "label": "Threat Surface Map"},
      {"@id": "urn:ngm:class:static-analysis", "label": "Static Analysis"},
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-27001", "label": "ISO 27001"},
      {"@id": "urn:ngm:class:nist-cybersecurity-framework", "label": "NIST Cybersecurity Framework"},
      {"@id": "urn:ngm:class:soc-2", "label": "SOC 2"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:security-monitoring", "label": "Security Monitoring"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:governance", "label": "Governance"},
      {"@id": "urn:ngm:class:infrastructure", "label": "Infrastructure"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:threat-surface-map", "label": "Threat Surface Map"},
      {"@id": "urn:ngm:class:zero-trust-architecture", "label": "Zero Trust Architecture"},
      {"@id": "urn:ngm:class:supply-chain-security", "label": "Supply Chain Security"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:security-assessment", "label": "Security Assessment"},
    {"@id": "urn:ngm:class:information-security-audit", "label": "Information Security Audit"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.72
}
```

- ### Definition
  - A security audit systematically evaluates controls and code against threats; it is enabled by a [[Threat Surface Map]] and is a constituent activity of the [[ETSI Domain Data Management Security]].
- ### Content
  - Engagements scope assets and threat models, then apply static and dynamic analysis, configuration review, and testing to surface weaknesses. Findings are rated by severity and exploitability, prioritised for remediation, and re-tested, with audit reports often supporting regulatory or contractual assurance.
