---
okf_version: "0.2"
type: Class
title: Data Replication
resource: urn:ngm:class:data-replication
domain: infrastructure
description: The process of copying and maintaining data across multiple nodes, servers, or locations in distributed systems to ensure consistency, availability, and fault tolerance, using consensus algorithms like Paxos, Raft, and Byzantine Fault Tolerant protocols to coordinate state across decentralised networks.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:data-management
  - urn:ngm:class:distributed-systems
hasPart:
  - urn:ngm:class:leader-election
  - urn:ngm:class:log-replication
  - urn:ngm:class:change-data-capture
requires:
  - urn:ngm:class:storage-systems
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:network-bandwidth
enables:
  - urn:ngm:class:data-availability
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:disaster-recovery
  - urn:ngm:class:high-availability
  - urn:ngm:class:consistency-guarantees
dependsOn:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:cap-theorem
contrastsWith:
  - urn:ngm:class:sharding
  - urn:ngm:class:data-partitioning
bridgesTo:
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:raft
  - urn:ngm:class:paxos
  - urn:ngm:class:write-ahead-logging
supports:
  - urn:ngm:class:distributed-databases
  - urn:ngm:class:cloud-storage
  - urn:ngm:class:edge-computing
---

# Data Replication

The process of copying and maintaining data across multiple nodes, servers, or locations in distributed systems to ensure consistency, availability, and fault tolerance, using consensus algorithms like Paxos, Raft, and Byzantine Fault Tolerant protocols to coordinate state across decentralised networks.
