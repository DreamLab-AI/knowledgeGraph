public:: true

# Regulatory Authorisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:regulatory-authorisation",
  "@type": "Page",
  "vc:slug": "regulatory-authorisation",
  "title": "Regulatory Authorisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:regulatory-authorisation",
  "@type": "Class",
  "label": "Regulatory Authorisation",
  "definition": "Regulatory authorisation is the formal permission granted by a competent authority allowing an entity to conduct a regulated activity such as issuing tokens, operating a payment system, or holding client assets. It is obtained through an application demonstrating compliance with capital, governance, and conduct requirements. Without authorisation, issuance and operation of regulated financial instruments are unlawful in most jurisdictions.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-governance-and-regulation", "label": "Governance and Regulation"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:enterprise-token-standards", "label": "Enterprise Token Standards"},
      {"@id": "urn:ngm:class:cbdc-frameworks", "label": "CBDC Frameworks"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Regulatory authorisation is the licence-like approval an entity must secure before conducting regulated financial activity, a prerequisite for compliant [[Enterprise Token Standards]] deployments and [[CBDC Frameworks]].
- ### Content
  - Applicants typically prove adequate capital, fit-and-proper management, AML controls, and operational resilience to a supervisor before being granted authorisation. The scope of authorisation defines exactly which activities are permitted, and breaching its conditions can trigger suspension or revocation.
