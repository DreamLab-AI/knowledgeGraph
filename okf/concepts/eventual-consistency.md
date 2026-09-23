---
okf_version: "0.2"
type: Class
title: Eventual Consistency
resource: urn:ngm:class:eventual-consistency
domain: distributed-systems
description: Eventual consistency is a consistency model for distributed data stores that guarantees that, in the absence of new updates, all replicas of a given data item will eventually converge to the same value. The model deliberately relaxes the requirement for immediate, global agreement in favour of higher availability and tolerance of network partitions, as described by the CAP theorem. Reads may trans
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:infra-computing-and-cloud
requires:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:data-replication
enables:
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:high-availability
  - urn:ngm:class:horizontal-scalability
contrastsWith:
  - urn:ngm:class:strong-consistency
  - urn:ngm:class:linearizability
  - urn:ngm:class:acid-properties
  - urn:ngm:class:serializability
bridgesTo:
  - urn:ngm:class:blockchain-consensus
  - urn:ngm:class:federated-learning
uses:
  - urn:ngm:class:vector-clocks
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:conflict-resolution
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:version-control
  - urn:ngm:class:version-control
partOf:
  - urn:ngm:class:cap-theorem
  - urn:ngm:class:base-properties
relatedTo:
  - urn:ngm:class:consistency-model
  - urn:ngm:class:nosql-database
  - urn:ngm:class:crdt
  - urn:ngm:class:quorum-consensus
  - urn:ngm:class:partition-tolerance
---

# Eventual Consistency

Eventual consistency is a consistency model for distributed data stores that guarantees that, in the absence of new updates, all replicas of a given data item will eventually converge to the same value. The model deliberately relaxes the requirement for immediate, global agreement in favour of higher availability and tolerance of network partitions, as described by the CAP theorem. Reads may transiently return stale data, and divergent replicas are reconciled through background propagation, gossip protocols, or explicit conflict resolution strategies such as last-write-wins or multi-version concurrency control. It is foundational to the design of large-scale internet-facing systems including DNS, distributed caches, and wide-area NoSQL databases.
