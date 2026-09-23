---
okf_version: "0.2"
type: Class
title: CAP Theorem
resource: urn:ngm:class:cap-theorem
domain: distributed-systems
description: The CAP Theorem states that a distributed data store cannot simultaneously guarantee all three of consistency, availability and partition tolerance. When a network partition occurs and messages between nodes are lost or delayed, a system must choose between remaining available, by serving possibly stale data, and remaining consistent, by refusing requests it cannot safely satisfy. Formulated by Er
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:infra-computing-and-cloud
  - urn:ngm:class:owl-thing
hasPart:
  - urn:ngm:class:partition-tolerance
requires:
  - urn:ngm:class:network-partition
enables:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:distributed-database-design
dependsOn:
  - urn:ngm:class:replication
  - urn:ngm:class:consensus
contrastsWith:
  - urn:ngm:class:acid-properties
  - urn:ngm:class:base-properties
bridgesTo:
  - urn:ngm:class:blockchain-consensus
  - urn:ngm:class:federated-learning
  - urn:ngm:class:distributed-systems-domain
  - urn:ngm:class:consensus
  - urn:ngm:class:eventual-consistency
relatedTo:
  - urn:ngm:class:eventual-consistency
  - urn:ngm:class:strong-consistency
  - urn:ngm:class:linearizability
  - urn:ngm:class:two-phase-commit
  - urn:ngm:class:raft-consensus
  - urn:ngm:class:paxos
  - urn:ngm:class:nosql-database
---

# CAP Theorem

The CAP Theorem states that a distributed data store cannot simultaneously guarantee all three of consistency, availability and partition tolerance. When a network partition occurs and messages between nodes are lost or delayed, a system must choose between remaining available, by serving possibly stale data, and remaining consistent, by refusing requests it cannot safely satisfy. Formulated by Eric Brewer and later proved formally by Gilbert and Lynch, it frames a fundamental trade-off in distributed systems design.
