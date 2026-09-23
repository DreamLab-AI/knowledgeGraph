---
okf_version: "0.2"
type: Class
title: Centralised Database
resource: urn:ngm:class:centralised-database
domain: data
description: A centralised database is a data management system in which all data is stored, administered, and accessed through a single physical or logical location under a single controlling authority. It provides a unified, authoritative view of data with strong consistency guarantees, simplified access control, and a single point of administration. All read and write operations are routed to this central n
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:database-management-system
hasPart:
  - urn:ngm:class:relational-database
  - urn:ngm:class:query-engine
  - urn:ngm:class:access-control
  - urn:ngm:class:transaction-manager
  - urn:ngm:class:transaction-manager
requires:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:data-storage
  - urn:ngm:class:backup-and-recovery
enables:
  - urn:ngm:class:acid-properties
  - urn:ngm:class:data-consistency
  - urn:ngm:class:access-control
  - urn:ngm:class:access-control
dependsOn:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:operating-system
  - urn:ngm:class:infrastructure
implements:
  - urn:ngm:class:sql
  - urn:ngm:class:acid-transactions
contrastsWith:
  - urn:ngm:class:distributed-databases
  - urn:ngm:class:decentralised-storage
  - urn:ngm:class:blockchain
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:distributed-databases
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:data-lake
  - urn:ngm:class:cloud-storage
uses:
  - urn:ngm:class:indexing
  - urn:ngm:class:optimisation
  - urn:ngm:class:replication
  - urn:ngm:class:optimisation
supports:
  - urn:ngm:class:data-governance
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:audit-logging
standardizedBy:
  - urn:ngm:class:iso-iec-9075
  - urn:ngm:class:ansi-sql
partOf:
  - urn:ngm:class:data-management
  - urn:ngm:class:information-system
relatedTo:
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:nosql-database
  - urn:ngm:class:single-point-of-failure
  - urn:ngm:class:cap-theorem
---

# Centralised Database

A centralised database is a data management system in which all data is stored, administered, and accessed through a single physical or logical location under a single controlling authority. It provides a unified, authoritative view of data with strong consistency guarantees, simplified access control, and a single point of administration. All read and write operations are routed to this central node or cluster, making it the canonical source of truth for the entire system. The centralised model contrasts with distributed and decentralised architectures by sacrificing geographic fault-tolerance and autonomy in exchange for consistency, reduced coordination overhead, and operational simplicity.
