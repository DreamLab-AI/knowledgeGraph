---
okf_version: "0.2"
type: Class
title: Network Partition Tolerance
resource: urn:ngm:class:network-partition-tolerance
domain: blockchain
description: Network partition tolerance is the property of a distributed system that allows it to continue operating despite the network splitting into groups of nodes that cannot communicate with one another. It is one of the three properties in the CAP theorem, which states that during a partition a system must sacrifice either strong consistency or availability. In blockchain and distributed databases, par
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:distributed-systems
requires:
  - urn:ngm:class:quorum
  - urn:ngm:class:consensus-protocol
enables:
  - urn:ngm:class:high-availability
dependsOn:
  - urn:ngm:class:cap-theorem
  - urn:ngm:class:data-replication
implements:
  - urn:ngm:class:fault-tolerance
contrastsWith:
  - urn:ngm:class:eventual-consistency
uses:
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:replication
supports:
  - urn:ngm:class:eventual-consistency
  - urn:ngm:class:blockchain-consensus
relatedTo:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:sharding
  - urn:ngm:class:distributed-ledger
---

# Network Partition Tolerance

Network partition tolerance is the property of a distributed system that allows it to continue operating despite the network splitting into groups of nodes that cannot communicate with one another. It is one of the three properties in the CAP theorem, which states that during a partition a system must sacrifice either strong consistency or availability. In blockchain and distributed databases, partition tolerance is generally treated as non-negotiable because partitions are inevitable in real networks, forcing explicit design choices about how the system behaves when nodes are split.
