---
okf_version: "0.2"
type: Class
title: Distributed File System
resource: urn:ngm:class:distributed-file-system
domain: data
description: A distributed file system presents a unified file or namespace interface over storage that is physically spread across many networked machines. It transparently handles data placement, replication, fault tolerance, and concurrent access so that clients interact with remote, partitioned storage much as they would with a local file system. Such systems scale capacity and throughput beyond a single n
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:distributed-systems
hasPart:
  - urn:ngm:class:file-system
  - urn:ngm:class:data-replication
requires:
  - urn:ngm:class:data-replication
  - urn:ngm:class:fault-tolerance
enables:
  - urn:ngm:class:object-storage
dependsOn:
  - urn:ngm:class:distributed-systems
contrastsWith:
  - urn:ngm:class:file-system
bridgesTo:
  - urn:ngm:class:object-storage
  - urn:ngm:class:ipfs
uses:
  - urn:ngm:class:data-replication
  - urn:ngm:class:fault-tolerance
supports:
  - urn:ngm:class:fault-tolerance
partOf:
  - urn:ngm:class:distributed-systems
relatedTo:
  - urn:ngm:class:ipfs
  - urn:ngm:class:object-storage
  - urn:ngm:class:ceph
---

# Distributed File System

A distributed file system presents a unified file or namespace interface over storage that is physically spread across many networked machines. It transparently handles data placement, replication, fault tolerance, and concurrent access so that clients interact with remote, partitioned storage much as they would with a local file system. Such systems scale capacity and throughput beyond a single node while tolerating individual machine failures.
