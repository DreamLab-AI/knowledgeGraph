public:: true

# Time-Series Database
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:time-series-database",
  "@type": "Page",
  "title": "Time-Series Database",
  "vc:slug": "time-series-database",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:time-series-database",
  "@type": "Class",
  "label": "Time-Series Database",
  "definition": "A time-series database (TSDB) is a database system optimised for storing, querying, and analysing data points indexed by time. It is designed for workloads dominated by high-volume, append-only writes of timestamped measurements and by queries that aggregate over time ranges. TSDBs employ time-aware partitioning, columnar layouts, and specialised compression to handle the scale and access patterns of metrics, events, and sensor readings efficiently.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:database-management-system",
      "label": "Database Management System"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:retention-policy",
        "label": "Retention Policy"
      },
      {
        "@id": "urn:ngm:class:data-ingestion",
        "label": "Data Ingestion"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:time-series-data",
        "label": "Time-Series Data"
      },
      {
        "@id": "urn:ngm:class:indexing",
        "label": "Indexing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:data-compression",
        "label": "Data Compression"
      },
      {
        "@id": "urn:ngm:class:data-storage",
        "label": "Data Storage"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:monitoring",
        "label": "Monitoring"
      },
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      },
      {
        "@id": "urn:ngm:class:real-time-analytics",
        "label": "Real-Time Analytics"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:metrics",
        "label": "Metrics"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:relational-database",
        "label": "Relational Database"
      },
      {
        "@id": "urn:ngm:class:nosql-database",
        "label": "NoSQL Database"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:database",
        "label": "Database"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:database-management-system",
        "label": "Database Management System"
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
  - A time-series database (TSDB) is a database system optimised for storing, querying, and analysing data points indexed by time. It is designed for workloads dominated by high-volume, append-only writes of timestamped measurements and by queries that aggregate over time ranges. TSDBs employ time-aware partitioning, columnar layouts, and specialised compression to handle the scale and access patterns of metrics, events, and sensor readings efficiently.
  - Related concepts: [[Time-Series Data]] [[Monitoring]] [[Observability]] [[Data Compression]] [[Metrics]]

- ### Overview
  - Time-series databases exist because general-purpose databases struggle with the relentless append-heavy write rate and time-bounded query patterns of telemetry. By making time a first-class dimension, a TSDB can partition by time, compress adjacent values aggressively, and discard or downsample old data automatically.

- ### Key aspects
  - Time-based partitioning, or chunking, stores contiguous time windows together for fast range scans and cheap eviction.
  - Columnar storage and delta-of-delta or other specialised compression exploit the regularity of timestamped values.
  - Retention and downsampling policies automatically expire raw data and roll it up into coarser summaries.
  - Tag and label indexing supports filtering high-cardinality series by metadata dimensions.

- ### Applications
  - Infrastructure and application monitoring and alerting.
  - Internet-of-things and industrial sensor data collection.
  - Financial tick data and real-time analytics dashboards.

- ### Relationships
  - has-part:: [[Retention Policy]]
  - has-part:: [[Data Ingestion]]
  - requires:: [[Time-Series Data]]
  - requires:: [[Indexing]]
  - uses:: [[Data Compression]]
  - uses:: [[Data Storage]]
  - enables:: [[Monitoring]]
  - enables:: [[Observability]]
  - enables:: [[Real-Time Analytics]]
  - supports:: [[Metrics]]
  - contrasts-with:: [[Relational Database]]
  - contrasts-with:: [[NoSQL Database]]
  - depends-on:: [[Database]]
  - related-to:: [[Database Management System]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
