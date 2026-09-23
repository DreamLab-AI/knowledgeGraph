---
okf_version: "0.2"
type: Class
title: Replication Protocol
resource: urn:ngm:class:replication-protocol
domain: distributed-systems
description: A replication protocol is the set of rules and message exchanges by which a distributed system maintains multiple copies of data across nodes so that they remain consistent according to a chosen consistency model despite failures and concurrency. It governs how updates are propagated, ordered, and acknowledged, balancing availability, latency, and durability. Replication protocols range from synch
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:distributed-data-structure
hasPart:
  - urn:ngm:class:log-replication
  - urn:ngm:class:leader-election
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:consistency-model
enables:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:data-replication
dependsOn:
  - urn:ngm:class:consistency-model
implements:
  - urn:ngm:class:state-machine-replication
contrastsWith:
  - urn:ngm:class:partition-tolerance
bridgesTo:
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:quorum
  - urn:ngm:class:gossip-protocol
supports:
  - urn:ngm:class:strong-consistency
  - urn:ngm:class:eventual-consistency
partOf:
  - urn:ngm:class:distributed-data-structure
relatedTo:
  - urn:ngm:class:raft
  - urn:ngm:class:paxos
  - urn:ngm:class:crdt
---

# Replication Protocol

A replication protocol is the set of rules and message exchanges by which a distributed system maintains multiple copies of data across nodes so that they remain consistent according to a chosen consistency model despite failures and concurrency. It governs how updates are propagated, ordered, and acknowledged, balancing availability, latency, and durability. Replication protocols range from synchronous primary-backup and quorum schemes to asynchronous gossip and conflict-free replicated approaches.
