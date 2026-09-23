---
okf_version: "0.2"
type: Class
title: Replication
resource: urn:ngm:class:replication
domain: infrastructure
description: Replication is the practice of maintaining multiple copies of data or services across different machines or locations to improve availability, durability, fault tolerance, and read performance. Strategies range from synchronous replication, which guarantees copies are identical before acknowledging a write, to asynchronous replication, which favours latency at the risk of temporary divergence. Rep
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:fault-tolerance
hasPart:
  - urn:ngm:class:replication-log
requires:
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:network-partition-tolerance
enables:
  - urn:ngm:class:data-availability
  - urn:ngm:class:disaster-recovery
  - urn:ngm:class:scalability
dependsOn:
  - urn:ngm:class:write-ahead-logging
  - urn:ngm:class:leader-election
contrastsWith:
  - urn:ngm:class:sharding
  - urn:ngm:class:eventual-consistency
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:blockchain-consensus
uses:
  - urn:ngm:class:crdt
  - urn:ngm:class:version-vector
  - urn:ngm:class:quorum
partOf:
  - urn:ngm:class:high-availability
  - urn:ngm:class:distributed-systems
relatedTo:
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:cap-theorem
  - urn:ngm:class:raft-consensus
  - urn:ngm:class:paxos
---

# Replication

Replication is the practice of maintaining multiple copies of data or services across different machines or locations to improve availability, durability, fault tolerance, and read performance. Strategies range from synchronous replication, which guarantees copies are identical before acknowledging a write, to asynchronous replication, which favours latency at the risk of temporary divergence. Replication is foundational to distributed databases, content-delivery networks, and high-availability systems, and its design forces explicit choices among consistency, availability, and partition tolerance.
