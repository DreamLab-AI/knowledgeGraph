---
okf_version: "0.2"
type: Class
title: Data Layer
resource: urn:ngm:class:data-layer
domain: infrastructure
description: Data Layer is the architectural tier within a layered, n-tier, hexagonal, or modular system responsible for the durable persistence, transactional integrity, indexed retrieval, replication, and abstraction of stateful data — encompassing both the enterprise-architecture sense (the data access lay...
maturity: established
quality: 0.53
is-a:
  - urn:ngm:class:data-management
  - urn:ngm:class:infra-network-and-comms
  - urn:ngm:class:architectural-layer
  - urn:ngm:class:system-tier
  - urn:ngm:class:software-layer
hasPart:
  - urn:ngm:class:cache-layer
  - urn:ngm:class:data-availability-sampling
  - urn:ngm:class:on-chain-data-indexing
  - urn:ngm:class:erasure-coding
  - urn:ngm:class:kzg-commitment
  - urn:ngm:class:replication
  - urn:ngm:class:transaction-manager
  - urn:ngm:class:query-processor
  - urn:ngm:class:schema-registry
  - urn:ngm:class:database-engine
  - urn:ngm:class:on-chain-data-indexing
  - urn:ngm:class:replication
  - urn:ngm:class:object-relational-mapper
  - urn:ngm:class:connection-pool
requires:
  - urn:ngm:class:backup-and-recovery
  - urn:ngm:class:file-system
  - urn:ngm:class:schema-definition
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:network-layer
  - urn:ngm:class:storage-medium
  - urn:ngm:class:backup-and-recovery
enables:
  - urn:ngm:class:acid-properties
  - urn:ngm:class:data-availability
  - urn:ngm:class:data-consistency
  - urn:ngm:class:data-persistence
  - urn:ngm:class:horizontal-scalability
  - urn:ngm:class:persistence
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:rollup
  - urn:ngm:class:semantic-query
  - urn:ngm:class:horizontal-scalability
  - urn:ngm:class:persistence
  - urn:ngm:class:rollup
dependsOn:
  - urn:ngm:class:physical-layer
  - urn:ngm:class:network-layer
  - urn:ngm:class:operating-system
  - urn:ngm:class:file-system
  - urn:ngm:class:memory-hierarchy
implements:
  - urn:ngm:class:cqrs
  - urn:ngm:class:event-sourcing
  - urn:ngm:class:repository-pattern
  - urn:ngm:class:data-mapper-pattern
  - urn:ngm:class:unit-of-work
  - urn:ngm:class:active-record
  - urn:ngm:class:hexagonal-architecture
  - urn:ngm:class:ports-and-adapters
contrastsWith:
  - urn:ngm:class:application-layer
  - urn:ngm:class:presentation-layer
  - urn:ngm:class:business-logic-layer
  - urn:ngm:class:execution-layer
  - urn:ngm:class:settlement-layer
  - urn:ngm:class:consensus-layer
bridgesTo:
  - urn:ngm:class:architectural-layer
uses:
  - urn:ngm:class:bloom-filter
  - urn:ngm:class:graph-ql
  - urn:ngm:class:reed-solomon-codes
  - urn:ngm:class:sparql
  - urn:ngm:class:sql
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:cypher
  - urn:ngm:class:jdbc
  - urn:ngm:class:odbc
  - urn:ngm:class:orm-frameworks
supports:
  - urn:ngm:class:business-logic-layer
  - urn:ngm:class:domain-model
  - urn:ngm:class:settlement-layer
  - urn:ngm:class:application-layer
  - urn:ngm:class:reporting-layer
  - urn:ngm:class:execution-layer
standardizedBy:
  - urn:ngm:class:ansi-sql
  - urn:ngm:class:celestia
  - urn:ngm:class:eip-4844
  - urn:ngm:class:iso-iec-9075
  - urn:ngm:class:iso-iec-9075
  - urn:ngm:class:jdbc-specification
  - urn:ngm:class:odbc-specification
  - urn:ngm:class:jpa-specification
  - urn:ngm:class:celestia
  - urn:ngm:class:cidr-architecture
relatedTo:
  - urn:ngm:class:avail
  - urn:ngm:class:celestia
  - urn:ngm:class:domain-driven-design
  - urn:ngm:class:microservices
  - urn:ngm:class:modular-blockchain
  - urn:ngm:class:polygon-agg-layer
  - urn:ngm:class:vector-database
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:clean-architecture
  - urn:ngm:class:eigenda
---

# Data Layer

Data Layer is the architectural tier within a layered, n-tier, hexagonal, or modular system responsible for the durable persistence, transactional integrity, indexed retrieval, replication, and abstraction of stateful data — encompassing both the enterprise-architecture sense (the data access lay...
