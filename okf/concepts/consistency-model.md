---
okf_version: "0.2"
type: Class
title: Consistency Model
resource: urn:ngm:class:consistency-model
domain: distributed-systems
description: A consistency model is a contract between a distributed data store and its clients that specifies the guarantees about the visibility and ordering of reads and writes across replicas. It defines which outcomes of concurrent operations are permissible, ranging from strong models like linearizability that behave as a single up-to-date copy, to weak models like eventual consistency that allow tempora
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:distributed-data-structure
hasPart:
  - urn:ngm:class:strong-consistency
  - urn:ngm:class:eventual-consistency
  - urn:ngm:class:linearizability
requires:
  - urn:ngm:class:replication-protocol
enables:
  - urn:ngm:class:fault-tolerance
dependsOn:
  - urn:ngm:class:replication-protocol
  - urn:ngm:class:consensus-mechanism
contrastsWith:
  - urn:ngm:class:partition-tolerance
bridgesTo:
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:vector-clock
  - urn:ngm:class:quorum
supports:
  - urn:ngm:class:state-machine-replication
partOf:
  - urn:ngm:class:distributed-data-structure
relatedTo:
  - urn:ngm:class:cap-theorem
  - urn:ngm:class:partition-tolerance
  - urn:ngm:class:vector-clock
---

# Consistency Model

A consistency model is a contract between a distributed data store and its clients that specifies the guarantees about the visibility and ordering of reads and writes across replicas. It defines which outcomes of concurrent operations are permissible, ranging from strong models like linearizability that behave as a single up-to-date copy, to weak models like eventual consistency that allow temporary divergence. The chosen model shapes application correctness, performance, and the achievable balance among consistency, availability, and partition tolerance.
