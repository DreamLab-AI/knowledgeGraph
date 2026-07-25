public:: true

# Schema Mapping
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:schema-mapping",
  "@type": "Page",
  "title": "Schema Mapping",
  "vc:slug": "schema-mapping",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:schema-mapping",
  "@type": "Class",
  "label": "Schema Mapping",
  "definition": "Schema mapping is the specification of correspondences between the elements of two or more data schemas so that data structured under one can be translated to another. It captures how fields, types and relationships relate, including transformations, defaults and conflict resolution. Schema mapping is a core enabler of data integration, migration and semantic interoperability across heterogeneous systems.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-integration",
      "label": "Data Integration"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:schema",
        "label": "Schema"
      },
      {
        "@id": "urn:ngm:class:data-model",
        "label": "Data Model"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ontology-alignment",
        "label": "Ontology Alignment"
      },
      {
        "@id": "urn:ngm:class:data-model",
        "label": "Data Model"
      },
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      },
      {
        "@id": "urn:ngm:class:semantic-interoperability",
        "label": "Semantic Interoperability"
      },
      {
        "@id": "urn:ngm:class:entity-resolution",
        "label": "Entity Resolution"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-pipeline",
        "label": "Data Pipeline"
      },
      {
        "@id": "urn:ngm:class:data-warehouse",
        "label": "Data Warehouse"
      },
      {
        "@id": "urn:ngm:class:master-data-management",
        "label": "Master Data Management"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:schema",
        "label": "Schema"
      },
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:semantic-interoperability",
        "label": "Semantic Interoperability"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:entity-resolution",
        "label": "Entity Resolution"
      },
      {
        "@id": "urn:ngm:class:ontology-alignment",
        "label": "Ontology Alignment"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
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
  - [[Schema Mapping]] relates one [[Schema]] to another using [[Ontology Alignment]] and a [[Data Model]] to enable [[Data Integration]] and [[Semantic Interoperability]].
- ### Overview
  - Schema mapping declares how source structures correspond to target structures, forming the contract for data translation.
  - Mappings may be simple field renames or complex transformations involving joins, splits and value conversions.
  - High-quality mappings depend on understanding the semantics, not just the syntax, of both schemas.
- ### Key aspects
  - Element correspondences: which source fields map to which target fields.
  - Transformation logic for type conversion, normalisation and enrichment.
  - Handling of missing, duplicate or conflicting values.
  - Maintenance under schema evolution on either side.
- ### Applications
  - Data integration across enterprise systems and warehouses.
  - Migration during system replacement or consolidation.
  - Semantic interoperability between organisations exchanging data.
  - Feeding entity-resolution and master-data-management pipelines.
- ### Relationships
  - partOf:: [[Data Integration]]
  - requires:: [[Schema]]
  - requires:: [[Data Model]]
  - uses:: [[Ontology Alignment]]
  - uses:: [[Data Model]]
  - uses:: [[Ontology]]
  - enables:: [[Data Integration]]
  - enables:: [[Semantic Interoperability]]
  - enables:: [[Entity Resolution]]
  - supports:: [[Data Pipeline]]
  - supports:: [[Data Warehouse]]
  - supports:: [[Master Data Management]]
  - dependsOn:: [[Schema]]
  - dependsOn:: [[Data Quality]]
  - bridgesTo:: [[Semantic Interoperability]]
  - bridgesTo:: [[Interoperability]]
  - relatedTo:: [[Entity Resolution]]
  - relatedTo:: [[Ontology Alignment]]
  - relatedTo:: [[Data Governance]]
- ### Provenance
  - This class was materialised to resolve existing inbound references in the knowledge graph.
  - updated:: 2026-06-15
