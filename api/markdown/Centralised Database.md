public:: true

# Centralised Database
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7988b71a4f42f670cd1f37ba742c2d044f9ebed1709595c39d8b9b47272528dc",
  "@type": "Page",
  "vc:slug": "centralised-database",
  "title": "Centralised Database",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:decentralised-storage",
      "vc:label": "Decentralised Storage"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems",
      "vc:label": "Distributed Systems"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Centralised Database"
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
  "@id": "urn:ngm:class:centralised-database",
  "@type": "Class",
  "label": "Centralised Database",
  "definition": "A centralised database is a data management system in which all data is stored, administered, and accessed through a single physical or logical location under a single controlling authority. It provides a unified, authoritative view of data with strong consistency guarantees, simplified access control, and a single point of administration. All read and write operations are routed to this central node or cluster, making it the canonical source of truth for the entire system. The centralised model contrasts with distributed and decentralised architectures by sacrificing geographic fault-tolerance and autonomy in exchange for consistency, reduced coordination overhead, and operational simplicity.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:database-management-system",
      "label": "Database Management System"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:central-database",
      "label": "Central Database"
    },
    {
      "@id": "urn:ngm:class:monolithic-database",
      "label": "Monolithic Database"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:relational-database",
        "label": "Relational Database"
      },
      {
        "@id": "urn:ngm:class:query-engine",
        "label": "Query Engine"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:transaction-manager",
        "label": "Transaction Management"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      },
      {
        "@id": "urn:ngm:class:data-storage",
        "label": "Data Storage"
      },
      {
        "@id": "urn:ngm:class:backup-and-recovery",
        "label": "Backup and Recovery"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:acid-properties",
        "label": "ACID Properties"
      },
      {
        "@id": "urn:ngm:class:data-consistency",
        "label": "Data Consistency"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Centralised Access Control"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Server Infrastructure"
      },
      {
        "@id": "urn:ngm:class:operating-system",
        "label": "Operating System"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:sql",
        "label": "SQL"
      },
      {
        "@id": "urn:ngm:class:acid-transactions",
        "label": "ACID Transactions"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:indexing",
        "label": "Indexing"
      },
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Query Optimisation"
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
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:audit-logging",
        "label": "Audit Logging"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-iec-9075",
        "label": "ISO/IEC 9075 (SQL Standard)"
      },
      {
        "@id": "urn:ngm:class:ansi-sql",
        "label": "ANSI SQL"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:distributed-databases",
        "label": "Distributed Database"
      },
      {
        "@id": "urn:ngm:class:decentralised-storage",
        "label": "Decentralised Storage"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:data-lake",
        "label": "Data Lake"
      },
      {
        "@id": "urn:ngm:class:cloud-storage",
        "label": "Cloud Storage"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-warehouse",
        "label": "Data Warehouse"
      },
      {
        "@id": "urn:ngm:class:nosql-database",
        "label": "NoSQL Database"
      },
      {
        "@id": "urn:ngm:class:single-point-of-failure",
        "label": "Single Point of Failure"
      },
      {
        "@id": "urn:ngm:class:cap-theorem",
        "label": "CAP Theorem"
      }
    ]
  },
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:centralised-database:bfe6dd8e6fa1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7988b71a4f42f670cd1f37ba742c2d044f9ebed1709595c39d8b9b47272528dc"
  },
  "vc:resolutions": [
    {
      "raw": "[[Decentralised Storage]]",
      "resolved": "urn:visionflow:linked:decentralised-storage",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Systems]]",
      "resolved": "urn:visionflow:linked:distributed-systems",
      "kind": "ResolvedLink"
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
  - A centralised database is a [[Database Management System]] in which all data resides at — and all operations are routed through — a single authoritative location or logical node. It provides strong [[Data Consistency]] guarantees and a unified administrative domain, simplifying [[Access Control]], [[Audit Logging]], and enforcement of [[Regulatory Compliance]]. This architecture stands in direct contrast to [[Distributed Database]] and [[Decentralised Storage]] models, which partition both data and control across multiple independent nodes. The centralised approach has been the dominant paradigm for enterprise data management since the emergence of [[Relational Database]] systems in the 1970s and remains mature and widely deployed today.

- ### Overview
  - A centralised database concentrates data storage, retrieval, and administration within a single server or tightly-coupled cluster operated by a single controlling authority.
  - All client applications connect to this central point; there is one canonical representation of every record, eliminating the synchronisation complexity inherent to [[Distributed Systems]].
  - **Why it matters**
    - Provides the simplest operational model for achieving [[ACID Properties]]: Atomicity, Consistency, Isolation, and Durability are enforced locally without the need for distributed coordination protocols.
    - Enables deterministic [[Query Optimisation]] because the query planner has full visibility of all data in one place.
    - Supports mature tooling for [[Data Governance]], schema management, and reporting that has been refined over decades.
    - Regulatory regimes (GDPR, HIPAA, SOX) often assume a single data custodian, making centralised control easier to audit and certify.
  - **How it works**
    - Clients issue queries — typically in [[SQL]] — to a single endpoint.
    - The [[Query Engine]] parses, optimises, and executes the query against a unified storage layer.
    - [[Transaction Management]] ensures that concurrent operations respect isolation levels and atomicity boundaries.
    - [[Indexing]] structures (B-trees, hash indexes, covering indexes) accelerate read performance.
    - [[Replication]] to standby replicas may be used for read-scalability and warm failover, but the primary node remains the single write authority.
    - [[Backup and Recovery]] processes snapshot the central store on a schedule and ship write-ahead logs to secondary locations.

- ### Key Components
  - **Storage Engine** — manages the physical layout of data on disk or SSD; examples include InnoDB (MySQL), nbtree (PostgreSQL), and WiredTiger (MongoDB). Related to [[Data Storage]].
  - **Query Engine** — parses [[SQL]] or equivalent query language, constructs execution plans, and returns result sets. See [[Query Optimisation]].
  - **Transaction Manager** — enforces [[ACID Transactions]] using locking, multi-version concurrency control (MVCC), or optimistic concurrency strategies. See [[Transaction Management]].
  - **Buffer Pool / Cache** — holds frequently accessed pages in memory to reduce disk I/O latency. Central to [[Query Optimisation]].
  - **Access Control Module** — enforces [[Centralised Access Control]] via role-based or attribute-based permissions. Feeds into [[Data Governance]].
  - **Replication Subsystem** — streams write-ahead log (WAL) or binlog events to standby replicas; supports [[Replication]] for high availability and read scaling.
  - **Backup and Recovery Engine** — produces full and incremental backups; enables point-in-time recovery. Related to [[Backup and Recovery]].
  - **Audit Logger** — records all data access and modification events for compliance. Underpins [[Audit Logging]] and [[Regulatory Compliance]].
  - **Schema Catalogue / Data Dictionary** — stores metadata about tables, columns, constraints, indexes, and relationships. Part of [[Data Management]].
  - **Network Interface / Connection Pool** — manages client connections over TCP/IP, reducing connection overhead for high-concurrency workloads. Requires [[Network Infrastructure]].

- ### Mechanisms
  - **ACID Properties** — all transactions satisfy Atomicity (all-or-nothing), Consistency (valid state transitions), Isolation (concurrent transactions do not corrupt each other), and Durability (committed data survives crashes). See [[ACID Properties]] and [[ACID Transactions]].
  - **MVCC (Multi-Version Concurrency Control)** — maintains multiple row versions so readers do not block writers; used in PostgreSQL, Oracle, and MySQL InnoDB. Supports high read concurrency without locking.
  - **Write-Ahead Logging (WAL)** — changes are first written to a sequential log before being applied to data pages, enabling crash recovery and streaming [[Replication]].
  - **Index Structures** — B-tree, hash, GIN, and GiST indexes stored centrally allow the [[Query Engine]] to satisfy predicates without full-table scans. See [[Indexing]].
  - **Lock Management** — row-level, page-level, or table-level locks coordinate concurrent writes; deadlock detection resolves cycles automatically.
  - **Query Planning** — the optimiser uses centralised statistics (row counts, selectivity estimates) to choose join orders and access paths. See [[Query Optimisation]].
  - **Partitioning** — large tables may be horizontally or vertically partitioned within the central server to improve manageability without distributing authority.

- ### Applications and Use Cases
  - **Enterprise Resource Planning (ERP)** — systems such as SAP and Oracle EBS rely on a centralised database as the single source of truth for financial, HR, and supply-chain records.
  - **Banking and Financial Services** — core banking platforms require strict [[ACID Properties]] and a single authoritative ledger; centralised RDBMS (Oracle DB, IBM Db2) dominate. See [[Finance]].
  - **Healthcare Record Systems** — electronic health record (EHR) platforms centralise patient data to enforce [[Regulatory Compliance]] with HIPAA and equivalent standards.
  - **Government and Public Sector** — tax authorities, land registries, and identity systems store records in tightly controlled centralised stores. Connects to [[Data Governance]].
  - **E-commerce Platforms** — product catalogues, inventory, and order management typically run on centralised RDBMS before sharding becomes necessary at extreme scale.
  - **Content Management Systems (CMS)** — WordPress, Drupal, and similar platforms persist all content in a single [[Relational Database]] (commonly MySQL or PostgreSQL).
  - **Operational Data Stores (ODS)** — real-time integration layers that aggregate transactional data from multiple source systems into one queryable store. Related to [[Data Warehouse]].
  - **Machine Learning Feature Stores** — centralised databases (often [[NoSQL Database]] or in-memory RDBMS) serve pre-computed features to ML inference pipelines. Bridges to [[Federated Learning]] when privacy requirements demand data partitioning.
  - **IoT Data Ingestion (edge-to-cloud)** — sensor streams are consolidated into a central time-series database for analytics and dashboarding. Related to [[Cloud Storage]] and [[Data Lake]].

- ### Relationships
  - hasPart:: [[Relational Database]], [[Query Engine]], [[Access Control]], [[Transaction Management]]
  - partOf:: [[Information System]], [[Data Management]]
  - requires:: [[Network Infrastructure]], [[Data Storage]], [[Backup and Recovery]]
  - enables:: [[ACID Properties]], [[Data Consistency]], [[Centralised Access Control]]
  - dependsOn:: [[Server Infrastructure]], [[Operating System]]
  - implements:: [[SQL]], [[ACID Transactions]]
  - uses:: [[Indexing]], [[Query Optimisation]], [[Replication]]
  - supports:: [[Data Governance]], [[Regulatory Compliance]], [[Audit Logging]]
  - standardizedBy:: [[ISO/IEC 9075 (SQL Standard)]], [[ANSI SQL]]
  - contrastsWith:: [[Distributed Database]], [[Decentralised Storage]], [[Blockchain]], [[Peer-to-Peer Network]]
  - bridges-to:: [[Federated Learning]], [[Data Lake]], [[Cloud Storage]]
  - relatedTo:: [[Data Warehouse]], [[NoSQL Database]], [[Single Point of Failure]], [[CAP Theorem]]

- ### Contrasts and Trade-offs
  - **vs [[Distributed Database]]** — a distributed database partitions data and query processing across multiple nodes, sacrificing some consistency (or requiring expensive coordination) to achieve horizontal scalability and geographic redundancy. The centralised model foregoes this at the cost of a [[Single Point of Failure]].
  - **vs [[Decentralised Storage]]** — decentralised storage (e.g. IPFS, Filecoin) distributes both data and administrative control, removing the need for a trusted central authority. This aligns with [[Blockchain]] philosophy where no single party controls the canonical state.
  - **[[CAP Theorem]] framing** — under network partition, a centralised database typically prioritises Consistency and Availability (CP or CA) because the partition is usually within a data-centre boundary rather than across independent operators.
  - **vs [[Federated Learning]]** — when data cannot be centralised for privacy or regulatory reasons, [[Federated Learning]] trains models locally and shares only gradients, bridging the gap without centralising raw data.

- ### Standards and Governance Context
  - **[[ISO/IEC 9075]] (SQL Standard)** — defines the SQL query language implemented by virtually all centralised relational database engines; current edition is SQL:2023.
  - **[[ANSI SQL]]** — the American National Standards Institute version of the SQL standard, historically the baseline for portability.
  - **GDPR (General Data Protection Regulation)** — mandates that personal data controllers identify a single point of accountability, a requirement that centralised databases satisfy naturally. Relates to [[Regulatory Compliance]] and [[Data Governance]].
  - **SOC 2 / ISO 27001** — information security standards that require demonstrable access control and audit trails; centralised databases simplify [[Audit Logging]] evidence collection.
  - **HIPAA (Health Insurance Portability and Accountability Act)** — US healthcare data regulation requiring strict data custodianship; centralised databases are the conventional compliance vehicle.
  - **Common implementations** — PostgreSQL, MySQL, Oracle Database, Microsoft SQL Server, IBM Db2, SQLite; these are the dominant centralised RDBMS products in use worldwide.
  - **[[NoSQL Database]] variants** — MongoDB, Redis, Cassandra can also operate in a centralised single-primary mode, extending the centralised model beyond relational schemas.

- ### Current Landscape (2026)
  - The classic single-node centralised store is being pushed toward "regionless" and geo-fenced designs: Gartner estimates that by 2025 around 75% of enterprise-generated data is created and processed outside traditional centralised data centres, and Mordor Intelligence attributes roughly +1.7% of forecast CAGR to regionless architectures answering sovereignty laws.
  - Data-sovereignty regulation is the dominant 2025–2026 force reshaping where centralised data may sit: the EU Data Act became fully applicable on 12 September 2025 (mandating portability and banning lock-in), the EU published its Cloud Sovereignty Framework in October 2025 with an eight-requirement sovereignty score, and the EU AI Act reaches full enforcement in August 2026.
  - PostgreSQL has consolidated as the default relational engine underpinning modern centralised and DBaaS deployments, hitting ~55.6% adoption in the 2025 Stack Overflow survey; PostgreSQL 18 shipped in late 2025 with a new asynchronous I/O subsystem, skip scans and UUIDv7.
  - A $1.25bn acquisition wave concentrated Postgres DBaaS into hyperscalers: Databricks bought Neon for ~$1bn (rebranded Lakebase), Snowflake bought Crunchy Data for ~$250m (Snowflake Postgres, public preview December 2025), and Microsoft launched HorizonDB (previewed at Ignite, November 2025).
  - Horizontal scale-out to escape single-node limits intensified in 2025 with three competing distributed-Postgres sharding projects — Supabase's Multigres, PlanetScale's Neki and the PgDog pooler — alongside AWS Aurora DSQL and Google AlloyDB.
  - AI-native integration became baseline: vector search is now standard in mainstream databases, and 2025 saw near-universal adoption of Anthropic's Model Context Protocol (MCP) for agent access, with over 13,000 MCP servers launched on GitHub.
  - Market sizing shows continued strong growth despite the decentralisation pressure — analysts placed the cloud database / DBaaS market at roughly $22–28bn in 2025–2026 (Mordor: $28.51bn in 2026) with forecast CAGRs of ~15–20% to the early 2030s.
  - Open challenges as of 2026 centre on the residency-versus-sovereignty gap: storing data in an EU region owned by a US provider does not escape the US CLOUD Act, driving customer-managed encryption keys, EU-native open-source stacks (Trino, Iceberg, DuckDB) and a measurable move from SaaS back to self-hosted, jurisdiction-bound deployments.

- ### References
  - 1. Andy Pavlo, CMU (2026). Databases in 2025: A Year in Review. https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
  - 2. Cloud Data Insights (2025). 2025 Cloud Database Market: The Year in Review. https://www.clouddatainsights.com/2025-cloud-database-market-the-year-in-review/
  - 3. Mordor Intelligence (2026). Cloud Database And DBaaS Market Size & Share Analysis. https://www.mordorintelligence.com/industry-reports/cloud-database-and-dbaas-market
  - 4. Coderio (2026). Data Sovereignty in 2026: Breaking Cloud Vendor Lock-In. https://www.coderio.com/blog/software-development/data-sovereignty-and-regional-clouds-strategy-2026/
  - 5. The Dev Newsletter (2026). State of Databases 2026. https://devnewsletter.com/p/state-of-databases-2026/
  - 6. IOMETE (2026). Why 2026 Is the Year Enterprises Move From SaaS to Self-Hosted Lakehouses. https://iomete.com/resources/blog/why-2026-enterprises-move-saas-to-selfhosted-lakehouses

- ### Provenance
  - sources:: ISO/IEC 9075 SQL Standard; Date, C.J. (2003) _An Introduction to Database Systems_; Codd, E.F. (1970) foundational relational model paper; PostgreSQL and MySQL documentation
  - updated:: 2026-06-13
  - migration-date:: 2026-05-29T00:00:00Z
