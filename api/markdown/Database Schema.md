public:: true

# Database Schema

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:database-schema",
  "@type": "Page",
  "title": "Database Schema",
  "vc:slug": "database-schema",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:database-schema",
  "@type": "Class",
  "label": "Database Schema",
  "definition": "A database schema is the formal description of the structure of a database, specifying its tables, fields, data types, relationships and integrity constraints. It separates the logical organisation of data from physical storage and from consuming applications, and is enforced by the database management system. Schemas evolve through controlled migrations and contrast with ontologies in being prescriptive structures for storage rather than shared conceptual models for reasoning.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-model",
      "label": "Data Model"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:relational-database",
        "label": "Relational Database"
      },
      {
        "@id": "urn:ngm:class:database",
        "label": "Database"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sql",
        "label": "SQL"
      },
      {
        "@id": "urn:ngm:class:data-model",
        "label": "Data Model"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:database-management-system",
        "label": "Database Management System"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:owl-class-hierarchy",
        "label": "OWL Class Hierarchy"
      },
      {
        "@id": "urn:ngm:class:database-query",
        "label": "Database Query"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:metadata",
        "label": "Metadata"
      },
      {
        "@id": "urn:ngm:class:data-warehouse",
        "label": "Data Warehouse"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-interoperability",
        "label": "Data Interoperability"
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
  - A [[Database Schema]] is the formal [[Data Model]] of a [[Relational Database]], defining tables, columns, types and constraints that a [[Database Management System]] enforces and that [[SQL]] and [[Database Query]] operate over.
- ### Overview
  - A database schema is the formal description of the structure of a database, specifying tables, fields, data types, relationships and integrity constraints.
  - It separates the logical organisation of data from its physical storage and from the applications that consume it.
  - Schemas evolve over time through controlled migrations as application requirements change.
- ### Key aspects
  - Table and column definitions with typed attributes.
  - Primary and foreign key constraints enforcing referential integrity.
  - Indexes and views supporting query performance and abstraction.
  - Versioned migrations governing schema evolution.
- ### Applications
  - Transactional application back ends with normalised relational schemas.
  - Analytical [[Data Warehouse]] schemas optimised for reporting.
  - Schema mapping for [[Data Integration]] across heterogeneous systems.
- ### Relationships
  - partOf:: [[Relational Database]]
  - partOf:: [[Database]]
  - uses:: [[SQL]]
  - uses:: [[Data Model]]
  - requires:: [[Database Management System]]
  - contrastsWith:: [[Ontology]]
  - contrastsWith:: [[Knowledge Representation]]
  - bridgesTo:: [[OWL Class Hierarchy]]
  - bridgesTo:: [[Database Query]]
  - supports:: [[Data Integration]]
  - supports:: [[Data Governance]]
  - relatedTo:: [[Metadata]]
  - relatedTo:: [[Data Warehouse]]
  - enables:: [[Data Interoperability]]
- ### Provenance
  - updated:: 2026-06-15
