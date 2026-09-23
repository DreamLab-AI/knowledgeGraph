---
okf_version: "0.2"
type: Class
title: Storage Systems
resource: urn:ngm:class:storage-systems
domain: infrastructure
description: Storage Systems are the hardware and software architectures responsible for persisting, organising, retrieving, and protecting digital data across the full hierarchy from on-chip registers and DRAM through local SSDs and HDDs to distributed cloud object stores and decentralised peer-to-peer networks. The discipline encompasses storage media technology, file systems, block and object storage interf
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:storage-infrastructure
hasPart:
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:cloud-storage
  - urn:ngm:class:persistent-storage
  - urn:ngm:class:content-addressed-storage
  - urn:ngm:class:object-storage
  - urn:ngm:class:block-storage
  - urn:ngm:class:file-system
requires:
  - urn:ngm:class:networking
  - urn:ngm:class:data-consistency
enables:
  - urn:ngm:class:data-replication
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:data-integrity
  - urn:ngm:class:data-persistence
  - urn:ngm:class:backup-and-recovery
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:decentralised-storage
  - urn:ngm:class:vector-database
supports:
  - urn:ngm:class:database-management-system
  - urn:ngm:class:machine-learning-discipline
relatedTo:
  - urn:ngm:class:data-storage-layer
  - urn:ngm:class:storage-hardware
  - urn:ngm:class:erasure-coding
  - urn:ngm:class:raid
  - urn:ngm:class:cap-theorem
---

# Storage Systems

Storage Systems are the hardware and software architectures responsible for persisting, organising, retrieving, and protecting digital data across the full hierarchy from on-chip registers and DRAM through local SSDs and HDDs to distributed cloud object stores and decentralised peer-to-peer networks. The discipline encompasses storage media technology, file systems, block and object storage interfaces, data durability through redundancy (RAID, erasure coding), consistency and replication protocols for distributed deployments, and the performance-cost-durability tradeoffs that govern system design. Storage Systems are foundational infrastructure for every computing application, with particular complexity arising in distributed and decentralised configurations where network partitions, node failures, and latency variability must be handled.
