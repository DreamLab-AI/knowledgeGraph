public:: true

# Privacy Requirements
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:privacy-requirements",
  "@type": "Page",
  "vc:slug": "privacy-requirements",
  "title": "Privacy Requirements",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:privacy-requirements",
  "@type": "Class",
  "label": "Privacy Requirements",
  "definition": "Privacy requirements are the documented obligations and constraints a system must satisfy to protect personal data, derived from law, regulation, contracts, and organisational policy. They specify what data may be collected, how it is processed and retained, and the rights afforded to data subjects. They drive system design, data-flow controls, and privacy impact assessments.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:legal-framework", "label": "Legal Framework"},
      {"@id": "urn:ngm:class:privacy-impact-assessment-pia", "label": "Privacy Impact Assessment (PIA)"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Privacy requirements are the obligations a system must meet to protect personal data, derived from law and policy. They implement a [[Legal Framework]] in concrete system constraints and are a required input to a [[Privacy Impact Assessment (PIA)]].
- ### Content
  - Requirements typically cover lawful basis for processing, purpose limitation, data minimisation, retention limits, security controls, and data-subject rights such as access, rectification, and erasure. They translate regulations like GDPR into testable design constraints, and they feed assessments that identify residual risks and mitigations before a system is deployed.
