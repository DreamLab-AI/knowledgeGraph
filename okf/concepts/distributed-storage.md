---
okf_version: "0.2"
type: Class
title: Distributed Storage
resource: urn:ngm:class:distributed-storage
domain: infrastructure
description: Distributed storage is a class of storage system architecture in which data is partitioned, replicated, and managed across multiple physically separate nodes or clusters to achieve scalability, fault tolerance, and high availability beyond the capacity of any single machine. Such systems employ replication protocols, erasure coding, consistent hashing, and distributed consensus algorithms to maint
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:distributed-system
hasPart:
  - urn:ngm:class:data-replication
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:storage-layer
enables:
  - urn:ngm:class:high-availability
  - urn:ngm:class:scalable-architecture
  - urn:ngm:class:data-management
  - urn:ngm:class:machine-learning-discipline-infrastructure
uses:
  - urn:ngm:class:data-compression
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:data-integrity
supports:
  - urn:ngm:class:training-data
  - urn:ngm:class:data-lake
  - urn:ngm:class:data-pipeline
relatedTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:cloud-infrastructure
  - urn:ngm:class:data-storage
---

# Distributed Storage

Distributed storage is a class of storage system architecture in which data is partitioned, replicated, and managed across multiple physically separate nodes or clusters to achieve scalability, fault tolerance, and high availability beyond the capacity of any single machine. Such systems employ replication protocols, erasure coding, consistent hashing, and distributed consensus algorithms to maintain data integrity and consistency under node failure, network partition, and concurrent access. Examples include object stores such as Amazon S3, distributed file systems such as HDFS and Ceph, and NewSQL databases with sharded storage layers.
