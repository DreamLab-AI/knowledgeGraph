public:: true

# Data Subject Rights

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:data-subject-rights",
  "@type": "Page",
  "title": "Data Subject Rights",
  "vc:slug": "data-subject-rights",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-subject-rights",
  "@type": "Class",
  "label": "Data Subject Rights",
  "definition": "Data subject rights are the legal entitlements granted to individuals over personal data that organisations hold about them, including rights of access, rectification, erasure, restriction, portability and objection. Codified in regimes such as the GDPR, these rights give people control over how their data is collected, used and shared, and impose corresponding obligations on data controllers and processors. Exercising and honouring them is a core requirement of modern data protection and privacy compliance.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-protection",
      "label": "Data Protection"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:data-portability",
        "label": "Data Portability"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-privacy",
        "label": "Data Privacy"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:privacy-by-design",
        "label": "Privacy By Design"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:data-minimisation",
        "label": "Data Minimisation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Individual entitlements over personal data, a pillar of [[Data Protection]].
  - Codified by regimes such as [[GDPR]] and underpinning [[Privacy]].
  - Includes access, rectification, erasure and [[Data Portability]].
- ### Overview
  - Data subject rights shift control toward the individuals whose data is processed.
  - They impose duties on controllers to respond within statutory time limits.
  - Honouring them requires robust identity verification and request handling.
  - The rights are central to demonstrating accountability under privacy law.
- ### Key aspects
  - Right of access to a copy of one's personal data.
  - Right to rectification of inaccurate data.
  - Right to erasure (the right to be forgotten).
  - Rights to restriction, portability and objection.
- ### Applications
  - Subject access request (SAR) handling workflows.
  - Consent and preference management platforms.
  - Privacy compliance programmes and audits.
- ### Relationships
  - partOf:: [[Data Protection]]
  - hasPart:: [[Data Portability]]
  - standardizedBy:: [[GDPR]]
  - enables:: [[Privacy]]
  - supports:: [[Data Privacy]]
  - supports:: [[Accountability]]
  - requires:: [[Identity Verification]]
  - implements:: [[Privacy By Design]]
  - relatedTo:: [[Regulatory Compliance]]
  - relatedTo:: [[Data Governance]]
  - relatedTo:: [[Data Minimisation]]
  - bridgesTo:: [[Governance]]
- ### Provenance
  - updated:: 2026-06-15
