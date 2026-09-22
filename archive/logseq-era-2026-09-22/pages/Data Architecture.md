public:: true

# Data Architecture
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:data-architecture",
  "@type": "Page",
  "title": "Data Architecture",
  "vc:slug": "data-architecture",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-architecture",
  "@type": "Class",
  "label": "Data Architecture",
  "definition": "Data architecture is the discipline of designing the structures, standards, models and integration patterns that govern how an organisation collects, stores, transforms, moves and consumes data. It defines logical and physical data models, storage technologies, data flows, master data strategies and the policies that ensure consistency, quality and security across systems. As a component of enterprise architecture, it provides the blueprint that aligns data assets with business and analytical requirements.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:enterprise-architecture",
      "label": "Enterprise Architecture"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:data-lake",
        "label": "Data Lake"
      },
      {
        "@id": "urn:ngm:class:data-warehouse",
        "label": "Data Warehouse"
      },
      {
        "@id": "urn:ngm:class:data-pipeline",
        "label": "Data Pipeline"
      },
      {
        "@id": "urn:ngm:class:master-data-management",
        "label": "Master Data Management"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:enterprise-architecture",
        "label": "Enterprise Architecture"
      },
      {
        "@id": "urn:ngm:class:information-architecture",
        "label": "Information Architecture"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-standards",
        "label": "Data Standards"
      },
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:information-architecture",
        "label": "Information Architecture"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:enterprise-architecture",
        "label": "Enterprise Architecture"
      },
      {
        "@id": "urn:ngm:class:data-lake",
        "label": "Data Lake"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Data architecture is the discipline of designing the structures, standards, models and integration patterns that govern how an organisation collects, stores, transforms, moves and consumes data. It defines logical and physical data models, storage technologies, data flows, master data strategies and the policies that ensure consistency, quality and security across systems. As a component of enterprise architecture, it provides the blueprint that aligns data assets with business and analytical requirements.
  - Related: [[Enterprise Architecture]] [[Data Lake]] [[Data Warehouse]] [[Master Data Management]]
- ### Overview
  - Data architecture translates business and analytical needs into a coherent set of data models, storage choices and movement patterns. It distinguishes operational stores optimised for transactions from analytical stores optimised for queries, and it specifies how data flows between them through pipelines and integration layers. A well-formed data architecture establishes conformed dimensions, authoritative master data and clear ownership, reducing duplication and inconsistency across the estate.
- ### Key aspects
  - Conceptual, logical and physical data models
  - Operational versus analytical storage patterns
  - Batch and streaming integration pipelines
  - Master and reference data strategy
  - Data lineage, cataloguing and metadata
  - Polyglot persistence and storage technology selection
- ### Applications
  - Designing enterprise data warehouses and lakes
  - Defining canonical data models for integration
  - Establishing master data management programmes
  - Planning streaming and event-driven data flows
  - Underpinning analytics, reporting and AI platforms
- ### Relationships
  - subClassOf:: [[Enterprise Architecture]]
  - hasPart:: [[Data Lake]]
  - hasPart:: [[Data Warehouse]]
  - hasPart:: [[Data Pipeline]]
  - hasPart:: [[Master Data Management]]
  - partOf:: [[Enterprise Architecture]]
  - partOf:: [[Information Architecture]]
  - requires:: [[Data Standards]]
  - requires:: [[Data Quality]]
  - dependsOn:: [[Data Governance]]
  - dependsOn:: [[Data Management]]
  - supports:: [[Data Management]]
  - uses:: [[Microservices]]
  - contrastsWith:: [[Information Architecture]]
  - relatedTo:: [[Enterprise Architecture]]
  - relatedTo:: [[Data Lake]]
  - bridgesTo:: [[Data Management]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
