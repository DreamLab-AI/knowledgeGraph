---
okf_version: "0.2"
type: Class
title: Sharding
resource: urn:ngm:class:sharding
domain: infrastructure
description: Sharding is a horizontal partitioning technique for distributed databases and blockchain networks in which a dataset or workload is divided into disjoint subsets called shards, each maintained by a distinct subset of nodes, so that the total system throughput scales with the number of shards rather than being bounded by the capacity of a single node. In databases, sharding routes queries to the ap
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:blockchain-scalability
hasPart:
  - urn:ngm:class:beacon-chain
requires:
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:validator-set
enables:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:horizontal-scalability
dependsOn:
  - urn:ngm:class:distributed-hash-table
  - urn:ngm:class:peer-to-peer-network
implements:
  - urn:ngm:class:data-partitioning
contrastsWith:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:replication
uses:
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:distributed-hash-table
  - urn:ngm:class:merkle-tree
partOf:
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:distributed-system
relatedTo:
  - urn:ngm:class:distributed-data-structure
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:danksharding
  - urn:ngm:class:rollup
---

# Sharding

Sharding is a horizontal partitioning technique for distributed databases and blockchain networks in which a dataset or workload is divided into disjoint subsets called shards, each maintained by a distinct subset of nodes, so that the total system throughput scales with the number of shards rather than being bounded by the capacity of a single node. In databases, sharding routes queries to the appropriate shard by a sharding key. In blockchain, each shard processes its own subset of transactions and stores its own portion of the state, with cross-shard communication handled by a coordination layer. Sharding dramatically increases transaction throughput and reduces storage requirements per node at the cost of increased architectural complexity and cross-shard coordination overhead.
