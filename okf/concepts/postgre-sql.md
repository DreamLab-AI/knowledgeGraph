---
okf_version: "0.2"
type: Class
title: PostgreSQL
resource: urn:ngm:class:postgre-sql
domain: infrastructure
description: PostgreSQL is an open-source, ACID-compliant object-relational database management system (ORDBMS) that extends the SQL standard with features such as table inheritance, function overloading, and a rich type system including arrays, JSON, and user-defined types. It supports both relational and document storage paradigms, advanced indexing strategies including GIN, GiST, BRIN, and B-tree, and full-
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:database-system
requires:
  - urn:ngm:class:storage-engine
enables:
  - urn:ngm:class:machine-learning-discipline-infrastructure
  - urn:ngm:class:data-governance
  - urn:ngm:class:retrieval-augmented-generation
contrastsWith:
  - urn:ngm:class:nosql-database
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:b-tree-index
  - urn:ngm:class:write-ahead-logging
supports:
  - urn:ngm:class:database-query
  - urn:ngm:class:vector-database
  - urn:ngm:class:spatial-database
  - urn:ngm:class:full-text-search
  - urn:ngm:class:version-control
relatedTo:
  - urn:ngm:class:data-storage
  - urn:ngm:class:graph-database
  - urn:ngm:class:query-processor
  - urn:ngm:class:sql
  - urn:ngm:class:open-source-software
---

# PostgreSQL

PostgreSQL is an open-source, ACID-compliant object-relational database management system (ORDBMS) that extends the SQL standard with features such as table inheritance, function overloading, and a rich type system including arrays, JSON, and user-defined types. It supports both relational and document storage paradigms, advanced indexing strategies including GIN, GiST, BRIN, and B-tree, and full-text search, making it a versatile choice for analytical and transactional workloads. Developed from the POSTGRES project at UC Berkeley (1986), it has been maintained as free software since 1996 and is widely regarded as the most standards-compliant open-source relational database.
