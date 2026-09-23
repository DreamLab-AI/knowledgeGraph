---
okf_version: "0.2"
type: Class
title: Database Systems
resource: urn:ngm:class:database-systems
domain: data
description: Database systems are organised software stacks — comprising a storage engine, query processor, transaction manager, and access-control layer — that persistently store, retrieve, and manipulate structured or semi-structured data. They enforce ACID or BASE consistency guarantees, coordinate concurrent access via locking or multi-version concurrency control (MVCC), and expose declarative query langua
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:data-management
hasPart:
  - urn:ngm:class:relational-database
  - urn:ngm:class:graph-databases
  - urn:ngm:class:nosql-database
  - urn:ngm:class:time-series-database
  - urn:ngm:class:columnar-storage
  - urn:ngm:class:relational-database
  - urn:ngm:class:nosql-database
  - urn:ngm:class:time-series-database
requires:
  - urn:ngm:class:storage-systems
  - urn:ngm:class:concurrency-control
  - urn:ngm:class:query-processing
enables:
  - urn:ngm:class:data-analytics
  - urn:ngm:class:data-warehousing
  - urn:ngm:class:microservices
  - urn:ngm:class:real-time-processing
dependsOn:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:operating-system
  - urn:ngm:class:operating-system
implements:
  - urn:ngm:class:acid-transactions
  - urn:ngm:class:structured-query-language
contrastsWith:
  - urn:ngm:class:file-system
  - urn:ngm:class:memory-store
  - urn:ngm:class:file-system
  - urn:ngm:class:memory-store
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:knowledge-graphs
uses:
  - urn:ngm:class:indexing
  - urn:ngm:class:caching
  - urn:ngm:class:replication
supports:
  - urn:ngm:class:data-governance
  - urn:ngm:class:access-control
standardizedBy:
  - urn:ngm:class:iso-iec-9075
relatedTo:
  - urn:ngm:class:data-lake
  - urn:ngm:class:event-streaming
  - urn:ngm:class:data-modelling
  - urn:ngm:class:data-lake
---

# Database Systems

Database systems are organised software stacks — comprising a storage engine, query processor, transaction manager, and access-control layer — that persistently store, retrieve, and manipulate structured or semi-structured data. They enforce ACID or BASE consistency guarantees, coordinate concurrent access via locking or multi-version concurrency control (MVCC), and expose declarative query languages such as SQL or graph-query dialects. Modern database systems span relational, document, key-value, columnar, time-series, and graph data models, each optimised for distinct access patterns and workload characteristics.
