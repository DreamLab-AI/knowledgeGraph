public:: true

# Data Silo

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:data-silo",
  "@type": "Page",
  "title": "Data Silo",
  "vc:slug": "data-silo",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-silo",
  "@type": "Class",
  "label": "Data Silo",
  "definition": "A data silo is an isolated repository of data controlled by one team, system, or department and not readily accessible to the rest of an organisation. Silos arise from fragmented tooling, organisational boundaries, and incompatible formats, producing duplicated, inconsistent, and underused data. They are the principal obstacle that data integration, governance, and interoperability efforts seek to dismantle.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      },
      {
        "@id": "urn:ngm:class:data-fabric",
        "label": "Data Fabric"
      },
      {
        "@id": "urn:ngm:class:data-mesh",
        "label": "Data Mesh"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:enterprise-data",
        "label": "Enterprise Data"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:metadata-management",
        "label": "Metadata Management"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-warehouse",
        "label": "Data Warehouse"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
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
  - A [[Data Silo]] is an isolated data store controlled by one team or system and largely inaccessible elsewhere.
  - It contrasts with [[Data Integration]], which seeks to unify data across the organisation.
  - Silos undermine [[Data Quality]] through duplication and inconsistency.
- ### Overview
  - Silos form when departments adopt their own tools and schemas, or when systems lack shared interfaces and ownership.
  - The result is fragmented, redundant, and stale data that resists organisation-wide analytics and reporting.
  - Breaking silos is the central motivation behind [[Data Integration]], [[Data Governance]], and [[Interoperability]] programmes.
- ### Key aspects
  - Isolation by organisational, technical, or format boundaries.
  - Duplicated and inconsistent copies of related data.
  - Limited discoverability and reuse across teams.
  - A barrier to a unified [[Data Warehouse]] or analytics layer.
- ### Mechanisms
  - Departmental tool proliferation without shared standards.
  - Incompatible schemas and proprietary formats.
  - Access controls that restrict data to its originating team.
  - Absence of a shared [[Data Catalog]] or [[Metadata Management]].
- ### Applications
  - Diagnosing fragmentation that [[Data Stewardship]] must remediate.
  - Motivating integration pipelines into a [[Data Warehouse]].
  - Framing the case for [[Interoperability]] standards.
  - Prioritising governance to consolidate redundant stores.
- ### Relationships
  - contrastsWith:: [[Data Integration]]
  - contrastsWith:: [[Data Fabric]]
  - contrastsWith:: [[Data Mesh]]
  - relatedTo:: [[Data Governance]]
  - relatedTo:: [[Enterprise Data]]
  - requires:: [[Data Quality]]
  - partOf:: [[Data Management]]
  - uses:: [[Metadata Management]]
  - supports:: [[Data Warehouse]]
  - bridgesTo:: [[Interoperability]]
  - dependsOn:: [[Data Management]]
  - implements:: [[Data Management]]
- ### Provenance
  - inferenceRule:: GapMaterialisation
  - attributedTo:: did:nostr:ontology-mesh
  - updated:: 2026-06-15
