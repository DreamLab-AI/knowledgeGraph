---
okf_version: "0.2"
type: Class
title: Data Partitioning
resource: urn:ngm:class:data-partitioning
domain: infrastructure
description: Data partitioning is the practice of dividing a dataset into smaller, independently manageable subsets distributed across storage nodes or processing units to improve scalability, performance, and availability. Partitioning strategies include horizontal splitting by key range or hash, vertical splitting by column, and functional splitting by domain, each balancing query locality against load distr
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:sharding
hasPart:
  - urn:ngm:class:sharding
  - urn:ngm:class:replication
requires:
  - urn:ngm:class:replication
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:load-balancing
implements:
  - urn:ngm:class:scalability
contrastsWith:
  - urn:ngm:class:replication
uses:
  - urn:ngm:class:sharding
supports:
  - urn:ngm:class:load-balancing
partOf:
  - urn:ngm:class:distributed-ledger
relatedTo:
  - urn:ngm:class:sharding
  - urn:ngm:class:replication
  - urn:ngm:class:scalability
---

# Data Partitioning

Data partitioning is the practice of dividing a dataset into smaller, independently manageable subsets distributed across storage nodes or processing units to improve scalability, performance, and availability. Partitioning strategies include horizontal splitting by key range or hash, vertical splitting by column, and functional splitting by domain, each balancing query locality against load distribution. Effective partitioning underpins distributed databases and large-scale data systems by enabling parallel processing while minimising cross-partition coordination.
