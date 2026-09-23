---
okf_version: "0.2"
type: Class
title: Persistent Storage
resource: urn:ngm:class:persistent-storage
domain: infrastructure
description: Persistent storage refers to any data storage mechanism that retains data independently of the lifecycle of the process or system that created it, surviving power-off events, container restarts, and application failures. It contrasts with ephemeral or in-memory storage whose contents are lost when the host process terminates. Persistent storage encompasses file systems, relational and NoSQL databa
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:data-storage
hasPart:
  - urn:ngm:class:file-system
  - urn:ngm:class:database-system
  - urn:ngm:class:cloud-storage
  - urn:ngm:class:block-storage
  - urn:ngm:class:object-storage
requires:
  - urn:ngm:class:replication
  - urn:ngm:class:write-ahead-logging
  - urn:ngm:class:erasure-coding
enables:
  - urn:ngm:class:data-management
  - urn:ngm:class:training-data
  - urn:ngm:class:data-persistence
dependsOn:
  - urn:ngm:class:storage-hardware
  - urn:ngm:class:operating-system
contrastsWith:
  - urn:ngm:class:ephemeral-storage
  - urn:ngm:class:in-memory-computing
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:distributed-collaboration
supports:
  - urn:ngm:class:cloud-native-architecture
  - urn:ngm:class:microservices
  - urn:ngm:class:disaster-recovery
relatedTo:
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:vector-database
  - urn:ngm:class:data-storage-layer
  - urn:ngm:class:storage-tiering
---

# Persistent Storage

Persistent storage refers to any data storage mechanism that retains data independently of the lifecycle of the process or system that created it, surviving power-off events, container restarts, and application failures. It contrasts with ephemeral or in-memory storage whose contents are lost when the host process terminates. Persistent storage encompasses file systems, relational and NoSQL databases, object stores, block volumes, and distributed storage systems, all of which provide durability guarantees through techniques such as write-ahead logging, replication, and erasure coding. It is a foundational concern in cloud-native architectures, stateful microservices, and any system that must maintain reliable long-term data.
