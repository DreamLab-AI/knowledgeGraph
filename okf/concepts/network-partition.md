---
okf_version: "0.2"
type: Class
title: Network Partition
resource: urn:ngm:class:network-partition
domain: distributed-systems
description: A network partition is a failure condition in a distributed system where communication is severed between subsets of nodes, splitting the cluster into groups that cannot exchange messages. Partitions force a trade-off, formalised by the CAP theorem, between maintaining consistency and remaining available while the split persists. Detecting, tolerating, and recovering from partitions is a central c
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:fault-tolerance
requires:
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:quorum
enables:
  - urn:ngm:class:fault-tolerance
dependsOn:
  - urn:ngm:class:distributed-computing
contrastsWith:
  - urn:ngm:class:replication
bridgesTo:
  - urn:ngm:class:cap-theorem
uses:
  - urn:ngm:class:replication
supports:
  - urn:ngm:class:eventual-consistency
partOf:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:distributed-systems
relatedTo:
  - urn:ngm:class:cap-theorem
  - urn:ngm:class:eventual-consistency
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:latency
---

# Network Partition

A network partition is a failure condition in a distributed system where communication is severed between subsets of nodes, splitting the cluster into groups that cannot exchange messages. Partitions force a trade-off, formalised by the CAP theorem, between maintaining consistency and remaining available while the split persists. Detecting, tolerating, and recovering from partitions is a central concern of distributed-systems design.
