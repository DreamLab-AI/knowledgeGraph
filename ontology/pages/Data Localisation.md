public:: true

# Data Localisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:data-localisation",
  "@type": "Page",
  "title": "Data Localisation",
  "vc:slug": "data-localisation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-localisation",
  "@type": "Class",
  "label": "Data Localisation",
  "definition": "Data localisation is the legal or regulatory requirement that certain categories of data be stored, processed, or retained within the geographic borders of a particular country or jurisdiction. Governments impose such rules to assert data sovereignty, protect citizens' personal information, support law-enforcement access, or shield strategic sectors, and the requirements range from mandating in-country copies to outright bans on cross-border transfer. Compliance forces organisations to architect regional data residency, partition storage, and reconcile conflicting national regimes, materially shaping cloud architecture and international data flows.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-governance",
      "label": "Data Governance"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:data-residency",
        "label": "Data Residency"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-sovereignty",
        "label": "Data Sovereignty"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:privacy-regulation",
        "label": "Privacy Regulation"
      }
    ],
    "constrains": [
      {
        "@id": "urn:ngm:class:cross-border-data-transfer",
        "label": "Cross-Border Data Transfer"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
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
  - Data Localisation is a key concept in the governance domain. Related concepts include [[Data Governance]] [[Data Residency]] [[Data Sovereignty]] [[Cross-Border Data Transfer]].
  - Data localisation is the legal or regulatory requirement that certain categories of data be stored, processed, or retained within the geographic borders of a particular country or jurisdiction. Governments impose such rules to assert data sovereignty, protect citizens' personal information, support law-enforcement access, or shield strategic sectors, and the requirements range from mandating in-country copies to outright bans on cross-border transfer. Compliance forces organisations to architect regional data residency, partition storage, and reconcile conflicting national regimes, materially shaping cloud architecture and international data flows.
- ### Overview
  - Data Localisation sits within the broader category of [[Data Governance]], which it specialises.
  - It connects to a network of 10 related classes across the knowledge graph, anchoring edges that previously pointed to an undefined node.
- ### Key aspects
  - requires: [[Data Residency]]
  - requires: [[Regulatory Compliance]]
- ### Mechanisms
  - Data Localisation operates through its constituent parts and dependencies, integrating with adjacent systems to deliver its function within governance.
  - Depends on [[Privacy Regulation]] for correct operation.
- ### Applications
  - Applied to advance [[Data Sovereignty]].
- ### Relationships
  - subClassOf:: [[Data Governance]]
  - requires:: [[Data Residency]]
  - requires:: [[Regulatory Compliance]]
  - partOf:: [[Data Governance]]
  - partOf:: [[Data Protection]]
  - enables:: [[Data Sovereignty]]
  - dependsOn:: [[Privacy Regulation]]
  - constrains:: [[Cross-Border Data Transfer]]
  - standardizedBy:: [[GDPR]]
  - relatedTo:: [[Data Protection]]
  - relatedTo:: [[Interoperability]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
