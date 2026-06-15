public:: true

# Database Systems
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1d215c8cfe9e7281e74f10091e642b7d9ca34508282e8a036b25757bac439cec",
  "@type": "Page",
  "vc:slug": "database-systems",
  "title": "Database Systems",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:graph-databases",
      "vc:label": "Graph Databases"
    },
    {
      "@id": "urn:visionflow:linked:microservices",
      "vc:label": "Microservices"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems",
      "vc:label": "Distributed Systems"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-database",
      "vc:label": "https://en.wikipedia.org/wiki/Database"
    },
    {
      "@id": "urn:visionflow:linked:https-www-postgresql-org-docs",
      "vc:label": "https://www.postgresql.org/docs/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Database Systems"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:database-systems",
  "@type": "Class",
  "label": "Database Systems",
  "definition": "Database systems are organised software stacks — comprising a storage engine, query processor, transaction manager, and access-control layer — that persistently store, retrieve, and manipulate structured or semi-structured data. They enforce ACID or BASE consistency guarantees, coordinate concurrent access via locking or multi-version concurrency control (MVCC), and expose declarative query languages such as SQL or graph-query dialects. Modern database systems span relational, document, key-value, columnar, time-series, and graph data models, each optimised for distinct access patterns and workload characteristics.",
  "domain": "data",
  "maturity": "mature",
  "qualityScore": 0.74,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:relational-databases",
        "label": "Relational Databases"
      },
      {
        "@id": "urn:ngm:class:graph-databases",
        "label": "Graph Databases"
      },
      {
        "@id": "urn:ngm:class:nosql-databases",
        "label": "NoSQL Databases"
      },
      {
        "@id": "urn:ngm:class:time-series-databases",
        "label": "Time-Series Databases"
      },
      {
        "@id": "urn:ngm:class:columnar-storage",
        "label": "Columnar Storage"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:storage-systems",
        "label": "Storage Systems"
      },
      {
        "@id": "urn:ngm:class:concurrency-control",
        "label": "Concurrency Control"
      },
      {
        "@id": "urn:ngm:class:query-processing",
        "label": "Query Processing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-analytics",
        "label": "Data Analytics"
      },
      {
        "@id": "urn:ngm:class:data-warehousing",
        "label": "Data Warehousing"
      },
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      },
      {
        "@id": "urn:ngm:class:real-time-processing",
        "label": "Real-time Processing"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:operating-system",
        "label": "Operating Systems"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:acid-transactions",
        "label": "ACID Transactions"
      },
      {
        "@id": "urn:ngm:class:structured-query-language",
        "label": "Structured Query Language"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:indexing",
        "label": "Indexing"
      },
      {
        "@id": "urn:ngm:class:caching",
        "label": "Caching"
      },
      {
        "@id": "urn:ngm:class:replication",
        "label": "Replication"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-iec-9075",
        "label": "ISO/IEC 9075 SQL Standard"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:file-system",
        "label": "File Systems"
      },
      {
        "@id": "urn:ngm:class:memory-store",
        "label": "In-Memory Data Stores"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:knowledge-graphs",
        "label": "Knowledge Graphs"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-lakes",
        "label": "Data Lakes"
      },
      {
        "@id": "urn:ngm:class:event-streaming",
        "label": "Event Streaming"
      },
      {
        "@id": "urn:ngm:class:data-modelling",
        "label": "Data Modelling"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:dbms",
      "label": "DBMS"
    },
    {
      "@id": "urn:ngm:class:database-management-systems",
      "label": "Database Management Systems"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:database-systems:065ba54f9b0a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1d215c8cfe9e7281e74f10091e642b7d9ca34508282e8a036b25757bac439cec"
  },
  "vc:resolutions": [
    {
      "raw": "[[Graph Databases]]",
      "resolved": "urn:visionflow:linked:graph-databases",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Microservices]]",
      "resolved": "urn:visionflow:linked:microservices",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Systems]]",
      "resolved": "urn:visionflow:linked:distributed-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Database]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-database",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.postgresql.org/docs/]]",
      "resolved": "urn:visionflow:linked:https-www-postgresql-org-docs",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - A **database system** (also called a [[Database Management Systems|DBMS]]) is an organised software stack that persistently stores, retrieves, and manipulates [[Data Management|managed data]] on behalf of one or more applications. It combines a storage engine, query processor, transaction manager, and access-control layer to deliver reliable, concurrent, multi-user access to shared information. ACID-compliant systems — such as [[Relational Databases|relational databases]] — guarantee Atomicity, Consistency, Isolation, and Durability; loosely consistent [[NoSQL Databases]] trade some guarantees for horizontal scale and schema flexibility. Database systems underpin virtually every layer of modern digital infrastructure, from mobile apps to [[Data Warehousing|enterprise data warehouses]].

- ### Overview
  - Database systems solve the problem of persistent, concurrent, structured data access that plain [[File Systems]] cannot handle safely at scale. Three foundational challenges drive their design:
    - **Persistence** — data must survive process and hardware failures via write-ahead logging, journalling, or copy-on-write storage structures.
    - **Concurrency** — multiple simultaneous readers and writers must not corrupt data or observe partial updates; this is managed through [[Concurrency Control]] mechanisms such as two-phase locking (2PL) or multi-version concurrency control ([[MVCC]]).
    - **Consistency** — integrity constraints (primary keys, foreign keys, check constraints, triggers) must hold across all operations, even under concurrent load.
  - The field emerged from E.F. Codd's 1970 relational model, which separated logical data representation from physical storage, enabling [[Structured Query Language|SQL]] as a declarative query interface still dominant today.
  - Modern database systems also address distribution — partitioning data across nodes ([[Sharding]]), replicating for fault tolerance ([[Replication]]), and coordinating via consensus protocols such as Raft or Paxos.

- ### Key Components
  - **Storage Engine** — manages on-disk layout of pages, rows, and indexes; examples include InnoDB (MySQL), WiredTiger (MongoDB), and RocksDB (many key-value stores). Uses [[Indexing]] structures such as B-trees and LSM-trees.
  - **Query Processor** — parses, plans, and optimises declarative queries ([[Structured Query Language|SQL]], Cypher, MQL). The query optimiser selects join order, index usage, and execution strategy via cost-based or rule-based planning.
  - **Transaction Manager** — enforces [[ACID Transactions]] via logging (write-ahead log, WAL), locking, and isolation levels (Read Committed, Repeatable Read, Serialisable).
  - **Buffer Manager** — coordinates [[Caching]] of hot data pages in memory to reduce I/O latency; interacts with the OS page cache.
  - **Replication and High Availability** — synchronous or asynchronous [[Replication]] to standby nodes; failover managed by tools such as Patroni (PostgreSQL) or replica sets (MongoDB).
  - **Access Control Layer** — role-based [[Access Control]] (RBAC), row-level security, and audit logging to support [[Data Governance]] and regulatory compliance.
  - **Concurrency Control Subsystem** — multi-version snapshot isolation (MVSI) or pessimistic locking; determines serialisability guarantees exposed to applications.

- ### Data Models
  - **Relational** — tables with rows and columns, queried via SQL; enforces schema at write time. Exemplars: PostgreSQL, MySQL, Oracle, SQL Server.
  - **Document** — semi-structured JSON/BSON documents with flexible schemas; suited to content and catalogue workloads. Exemplars: MongoDB, CouchDB, Firestore.
  - **Key-Value** — simple hash-map semantics optimised for ultra-low latency reads/writes; suited to session stores, caches. Exemplars: Redis, DynamoDB, etcd.
  - **Columnar / Wide-Column** — data stored column-by-column enabling high compression and fast analytical scans ([[Columnar Storage]]). Exemplars: Apache Cassandra, HBase, Google Bigtable, ClickHouse.
  - **[[Graph Databases|Graph]]** — nodes and edges with properties; traversal-optimised for relationship-heavy queries ([[Knowledge Graphs]], social networks). Exemplars: Neo4j, Amazon Neptune, TigerGraph.
  - **[[Time-Series Databases|Time-Series]]** — append-optimised storage with automatic downsampling and retention policies; suited to metrics, IoT sensor data, financial ticks. Exemplars: InfluxDB, TimescaleDB, Prometheus.
  - **Vector** — stores high-dimensional embedding vectors and supports approximate nearest-neighbour (ANN) search; increasingly critical for [[Machine Learning]] inference pipelines. Exemplars: pgvector, Milvus, Weaviate, Qdrant.
  - **NewSQL** — relational semantics with distributed horizontal scale; combines SQL familiarity with the scalability of [[NoSQL Databases]]. Exemplars: CockroachDB, Google Spanner, TiDB.

- ### Consistency Models and Trade-offs
  - The CAP theorem (Brewer, 2000) states that a [[Distributed Systems|distributed system]] can guarantee at most two of Consistency, Availability, and Partition Tolerance simultaneously — driving design decisions in distributed database systems.
  - **ACID** — strong consistency preferred by relational and NewSQL systems; mandatory for financial, healthcare, and legal workloads.
  - **BASE** (Basically Available, Soft-state, Eventually consistent) — adopted by many [[NoSQL Databases]] to achieve geographic distribution and high write throughput.
  - **PACELC model** — extends CAP to account for latency trade-offs even when no partition exists, better capturing practical production decisions.
  - Isolation levels (SQL standard): Read Uncommitted, Read Committed, Repeatable Read, Serialisable — each trading consistency for concurrency.

- ### Applications and Use Cases
  - **Transactional (OLTP)** — online banking, e-commerce order processing, ERP systems; require high concurrency, low latency, ACID guarantees.
  - **Analytical (OLAP)** — business intelligence, reporting, [[Data Warehousing]]; optimised for large scans and aggregations over historical data.
  - **[[Real-Time Processing]]** — streaming analytics platforms (Apache Flink, Kafka Streams) that join [[Event Streaming]] data with database state for live dashboards and alerts.
  - **[[Machine Learning]] pipelines** — feature stores, training dataset materialisation, model metadata registries; increasingly using vector databases for embedding retrieval ([[Retrieval-Augmented Generation]]).
  - **[[Knowledge Graphs]]** — graph databases and triple stores (RDF/SPARQL) for semantic reasoning, enterprise knowledge management, and ontology-driven search.
  - **IoT and Telemetry** — [[Time-Series Databases]] ingest high-frequency sensor streams, downsample for long-term storage, and support anomaly detection.
  - **Content Management** — document databases store variable-schema content records for CMSs, catalogues, and personalisation engines.
  - **[[Microservices]] architectures** — each service typically owns its own bounded data store (database-per-service pattern), requiring careful [[Data Governance]] of cross-service consistency.
  - **Blockchain and Audit Ledgers** — append-only, cryptographically verifiable data structures share architectural principles with [[Event Streaming]] and immutable log databases.

- ### Relationships
  - hasPart:: [[Relational Databases]]
  - hasPart:: [[Graph Databases]]
  - hasPart:: [[NoSQL Databases]]
  - hasPart:: [[Time-Series Databases]]
  - hasPart:: [[Columnar Storage]]
  - requires:: [[Storage Systems]]
  - requires:: [[Concurrency Control]]
  - requires:: [[Query Processing]]
  - enables:: [[Data Analytics]]
  - enables:: [[Data Warehousing]]
  - enables:: [[Microservices]]
  - enables:: [[Real-Time Processing]]
  - dependsOn:: [[Distributed Systems]]
  - dependsOn:: [[Operating Systems]]
  - implements:: [[ACID Transactions]]
  - implements:: [[Structured Query Language]]
  - uses:: [[Indexing]]
  - uses:: [[Caching]]
  - uses:: [[Replication]]
  - supports:: [[Data Governance]]
  - supports:: [[Access Control]]
  - standardizedBy:: [[ISO/IEC 9075 SQL Standard]]
  - contrastsWith:: [[File Systems]]
  - contrastsWith:: [[In-Memory Data Stores]]
  - bridges-to:: [[Machine Learning]]
  - bridges-to:: [[Knowledge Graphs]]
  - relatedTo:: [[Data Lakes]]
  - relatedTo:: [[Event Streaming]]
  - relatedTo:: [[Data Modelling]]

- ### Standards and Context
  - **ISO/IEC 9075** — the SQL standard, maintained jointly by ISO and IEC; defines syntax, semantics, and conformance levels for relational query languages. Current revision: SQL:2023.
  - **ODBC / JDBC** — driver-level abstraction APIs enabling language-agnostic database connectivity; foundational for ORM frameworks (Hibernate, SQLAlchemy, ActiveRecord).
  - **OASIS OData** — REST-based protocol for querying and updating data, used widely in enterprise integration.
  - **W3C RDF / SPARQL** — standards for triple-store databases used in [[Knowledge Graphs]] and semantic web applications.
  - **OpenTelemetry** — emerging standard for instrumenting database query tracing and latency metrics across [[Microservices]] deployments.
  - Key organisations: ISO/IEC JTC 1/SC 32 (Data Management), ACM SIGMOD, VLDB Endowment, Apache Software Foundation (Cassandra, Hive, HBase, Flink).

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Database]], [[https://www.postgresql.org/docs/]]
  - updated:: 2026-06-13
