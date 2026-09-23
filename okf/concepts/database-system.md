---
okf_version: "0.2"
type: Class
title: Database System
resource: urn:ngm:class:database-system
domain: infrastructure
description: A database system (DBMS - Database Management System) is software that enables users to define, create, maintain, and control access to structured collections of data. It encompasses relational databases using SQL for structured table-based data and NoSQL databases supporting flexible schemas for document, key-value, graph, and wide-column data models, providing mechanisms for concurrent access, d
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:data-management
hasPart:
  - urn:ngm:class:query-engine
  - urn:ngm:class:storage-engine
  - urn:ngm:class:transaction-manager
  - urn:ngm:class:index-structure
requires:
  - urn:ngm:class:file-system
  - urn:ngm:class:operating-system
  - urn:ngm:class:network-infrastructure
enables:
  - urn:ngm:class:data-persistence
  - urn:ngm:class:query-processing
  - urn:ngm:class:transaction-manager
  - urn:ngm:class:access-control
  - urn:ngm:class:data-analytics
  - urn:ngm:class:transaction-manager
  - urn:ngm:class:access-control
implements:
  - urn:ngm:class:acid-properties
  - urn:ngm:class:cap-theorem
  - urn:ngm:class:relational-model
contrastsWith:
  - urn:ngm:class:file-system
  - urn:ngm:class:in-memory-data-store
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:distributed-ledger
uses:
  - urn:ngm:class:structured-query-language
  - urn:ngm:class:write-ahead-logging
  - urn:ngm:class:b-tree-index
supports:
  - urn:ngm:class:data-replication
  - urn:ngm:class:role-based-access-control
  - urn:ngm:class:backup-and-recovery
standardizedBy:
  - urn:ngm:class:iso-iec-9075
  - urn:ngm:class:ansi-sql
relatedTo:
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:distributed-databases
  - urn:ngm:class:data-lake
  - urn:ngm:class:distributed-databases
  - urn:ngm:class:cloud-database
---

# Database System

A database system (DBMS - Database Management System) is software that enables users to define, create, maintain, and control access to structured collections of data. It encompasses relational databases using SQL for structured table-based data and NoSQL databases supporting flexible schemas for document, key-value, graph, and wide-column data models, providing mechanisms for concurrent access, data integrity, and persistent storage.
