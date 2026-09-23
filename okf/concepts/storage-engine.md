---
okf_version: "0.2"
type: Class
title: Storage Engine
resource: urn:ngm:class:storage-engine
domain: infrastructure
description: A storage engine is the component of a database system responsible for how data is physically laid out, written, indexed and retrieved on durable media. It implements the on-disk data structures, transaction and concurrency control, write-ahead logging and recovery that guarantee durability and consistency. Different engines, such as B-tree and log-structured merge-tree designs, optimise for diffe
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:data-persistence
hasPart:
  - urn:ngm:class:write-ahead-logging
  - urn:ngm:class:acid-properties
requires:
  - urn:ngm:class:data-persistence
  - urn:ngm:class:write-ahead-logging
enables:
  - urn:ngm:class:relational-database
  - urn:ngm:class:nosql-database
dependsOn:
  - urn:ngm:class:data-persistence
implements:
  - urn:ngm:class:acid-properties
bridgesTo:
  - urn:ngm:class:data-storage-layer
uses:
  - urn:ngm:class:database-query
supports:
  - urn:ngm:class:database-management-system
partOf:
  - urn:ngm:class:database-system
relatedTo:
  - urn:ngm:class:graph-database
  - urn:ngm:class:postgre-sql
---

# Storage Engine

A storage engine is the component of a database system responsible for how data is physically laid out, written, indexed and retrieved on durable media. It implements the on-disk data structures, transaction and concurrency control, write-ahead logging and recovery that guarantee durability and consistency. Different engines, such as B-tree and log-structured merge-tree designs, optimise for different read, write and space trade-offs.
