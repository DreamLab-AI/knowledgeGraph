public:: true

# Storage Engine
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:storage-engine",
  "@type": "Page",
  "title": "Storage Engine",
  "vc:slug": "storage-engine",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:storage-engine",
  "@type": "Class",
  "label": "Storage Engine",
  "definition": "A storage engine is the component of a database system responsible for how data is physically laid out, written, indexed and retrieved on durable media. It implements the on-disk data structures, transaction and concurrency control, write-ahead logging and recovery that guarantee durability and consistency. Different engines, such as B-tree and log-structured merge-tree designs, optimise for different read, write and space trade-offs.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-persistence",
      "label": "Data Persistence"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:data-persistence",
        "label": "Data Persistence"
      },
      {
        "@id": "urn:ngm:class:write-ahead-logging",
        "label": "Write-Ahead Logging"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:write-ahead-logging",
        "label": "Write-Ahead Logging"
      },
      {
        "@id": "urn:ngm:class:acid-properties",
        "label": "ACID Properties"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:database-system",
        "label": "Database System"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:acid-properties",
        "label": "ACID Properties"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:database-query",
        "label": "Database Query"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:relational-database",
        "label": "Relational Database"
      },
      {
        "@id": "urn:ngm:class:nosql-database",
        "label": "NoSQL Database"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:database-management-system",
        "label": "Database Management System"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-persistence",
        "label": "Data Persistence"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:graph-database",
        "label": "Graph Database"
      },
      {
        "@id": "urn:ngm:class:postgre-sql",
        "label": "PostgreSQL"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-storage-layer",
        "label": "Data Storage Layer"
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
  - A storage engine is the component of a database system responsible for how data is physically laid out, written, indexed and retrieved on durable media. It implements the on-disk data structures, transaction and concurrency control, write-ahead logging and recovery that guarantee durability and consistency. Different engines, such as B-tree and log-structured merge-tree designs, optimise for different read, write and space trade-offs.
  - Related concepts: [[Data Persistence]] [[Database System]] [[Write-Ahead Logging]] [[ACID Properties]] [[Relational Database]]
- ### Overview
  - The storage engine sits beneath the query processor and dictates the system's durability and performance characteristics. B-tree engines keep data sorted for efficient range scans and point lookups, favouring read-heavy workloads; log-structured merge-tree engines buffer writes in memory and flush sorted runs, favouring write-heavy ingest. Write-ahead logging records mutations before they are applied so the system can recover a consistent state after a crash.
- ### Mechanisms
  - On-disk data structures: B-trees and LSM-trees
  - Write-ahead logging and crash recovery
  - Transaction isolation and concurrency control
  - Indexing and buffer-pool management
  - Read, write and space-amplification trade-offs
- ### Applications
  - Relational database backends such as PostgreSQL
  - Embedded key-value stores in applications
  - High-ingest time-series and log databases
  - Graph and document database persistence layers
- ### Relationships
  - subClassOf:: [[Data Persistence]]
  - requires:: [[Data Persistence]]
  - requires:: [[Write-Ahead Logging]]
  - hasPart:: [[Write-Ahead Logging]]
  - hasPart:: [[ACID Properties]]
  - partOf:: [[Database System]]
  - implements:: [[ACID Properties]]
  - uses:: [[Database Query]]
  - enables:: [[Relational Database]]
  - enables:: [[NoSQL Database]]
  - supports:: [[Database Management System]]
  - dependsOn:: [[Data Persistence]]
  - relatedTo:: [[Graph Database]]
  - relatedTo:: [[PostgreSQL]]
  - bridgesTo:: [[Data Storage Layer]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
