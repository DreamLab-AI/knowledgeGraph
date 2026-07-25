public:: true

# Relational Database

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:relational-database",
  "@type": "Page",
  "title": "Relational Database",
  "vc:slug": "relational-database",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:relational-database",
  "@type": "Class",
  "label": "Relational Database",
  "definition": "A relational database organises data into tables of rows and columns, where relationships between tables are expressed through shared key values rather than physical pointers, following the relational model. Data is queried and manipulated declaratively, conventionally through SQL, and integrity is enforced via constraints, keys and typed schemas. Relational systems typically provide ACID transactions, making them the default choice for consistent, structured operational data.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:database-management-system",
      "label": "Database Management System"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:data-storage",
        "label": "Data Storage"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:transaction",
        "label": "Transaction"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-model",
        "label": "Data Model"
      },
      {
        "@id": "urn:ngm:class:sql",
        "label": "SQL"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sql",
        "label": "SQL"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      },
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-model",
        "label": "Data Model"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:centralised-database",
        "label": "Centralised Database"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:database-management-system",
        "label": "Database Management System"
      },
      {
        "@id": "urn:ngm:class:metadata",
        "label": "Metadata"
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
  - A [[Database Management System]] that stores data as tables linked by shared key values.
  - Queried declaratively through [[SQL]] over a typed [[Data Model]].
  - Enforces integrity and supports [[Transaction]] semantics.
- ### Overview
  - The relational model represents data as relations (tables) and uses set-based operations.
  - Schemas, primary and foreign keys, and constraints guarantee structural consistency.
  - ACID transactions provide reliable, all-or-nothing updates under concurrency.
  - Relational databases remain the backbone of operational and transactional systems.
- ### Key aspects
  - Tables, rows, columns and typed attributes.
  - Primary and foreign keys expressing relationships.
  - Declarative SQL for query and manipulation.
  - Transaction isolation and durability guarantees.
- ### Applications
  - Operational systems of record and ERP back ends.
  - Financial ledgers requiring strong consistency.
  - Reporting and analytical workloads over structured data.
- ### Relationships
  - partOf:: [[Data Storage]]
  - hasPart:: [[Transaction]]
  - requires:: [[Data Model]]
  - requires:: [[SQL]]
  - uses:: [[SQL]]
  - supports:: [[Data Quality]]
  - supports:: [[Data Management]]
  - enables:: [[Data Integration]]
  - dependsOn:: [[Data Model]]
  - contrastsWith:: [[Centralised Database]]
  - relatedTo:: [[Database Management System]]
  - relatedTo:: [[Metadata]]
- ### Provenance
  - updated:: 2026-06-15
