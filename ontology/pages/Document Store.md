public:: true

# Document Store

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:document-store",
  "@type": "Page",
  "title": "Document Store",
  "vc:slug": "document-store",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:document-store",
  "@type": "Class",
  "label": "Document Store",
  "definition": "A document store is a category of NoSQL database that persists, retrieves, and manages data as self-describing documents, typically encoded as JSON, BSON, or XML. Each document is a flexible, schema-optional aggregate that groups related data together, allowing nested structures and varying fields across records. Document stores favour horizontal scalability and developer-friendly data modelling over the rigid tabular schema of relational databases.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:database",
      "label": "Database"
    },
    {
      "@id": "urn:ngm:class:nosql-database",
      "label": "NoSQL Database"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:database",
        "label": "Database"
      },
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:data-model",
        "label": "Data Model"
      },
      {
        "@id": "urn:ngm:class:query-engine",
        "label": "Query Engine"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:relational-database",
        "label": "Relational Database"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:data-format",
        "label": "Data Format"
      },
      {
        "@id": "urn:ngm:class:persistence",
        "label": "Persistence"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:persistence",
        "label": "Persistence"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:query-engine",
        "label": "Query Engine"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-schema",
        "label": "Data Schema"
      },
      {
        "@id": "urn:ngm:class:schema-registry",
        "label": "Schema Registry"
      },
      {
        "@id": "urn:ngm:class:xml",
        "label": "XML"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-format",
        "label": "Data Format"
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
  - A document store persists data as self-describing documents inside a [[Database]].
  - It contrasts with the [[Relational Database]] tabular model by allowing flexible schemas.
  - Documents are encoded in a [[Data Format]] such as JSON or [[XML]].
- ### Overview
  - Documents are aggregates: related data is co-located rather than normalised across tables.
  - Schema-optional design lets fields vary between documents in the same collection.
  - Indexes, secondary queries, and aggregation pipelines enable rich retrieval.
- ### Key aspects
  - Aggregate-oriented data model with nested structures.
  - Flexible or schemaless storage with optional schema validation.
  - Horizontal scaling via sharding and replication.
  - Query engines supporting filtering, projection, and aggregation over documents.
- ### Applications
  - Content management and catalogue systems.
  - User profiles, sessions, and event logging.
  - Rapidly evolving application schemas.
  - Microservice data stores and event-sourced systems.
- ### Relationships
  - partOf:: [[Database]]
  - partOf:: [[Infrastructure]]
  - hasPart:: [[Data Model]]
  - hasPart:: [[Query Engine]]
  - contrastsWith:: [[Relational Database]]
  - uses:: [[Data Format]]
  - uses:: [[Persistence]]
  - requires:: [[Persistence]]
  - supports:: [[Data Integration]]
  - enables:: [[Query Engine]]
  - relatedTo:: [[Data Schema]]
  - relatedTo:: [[Schema Registry]]
  - relatedTo:: [[XML]]
  - dependsOn:: [[Data Format]]
- ### Provenance
  - updated:: 2026-06-15
