---
okf_version: "0.2"
type: Class
title: State Synchronisation
resource: urn:ngm:class:state-synchronisation
domain: distributed-systems
description: State synchronisation is the process of ensuring that multiple distributed nodes or replicas of a system maintain consistent views of shared mutable state despite network partitions, concurrent updates, and node failures. It encompasses techniques including leader-based replication, consensus protocols, conflict-free replicated data types (CRDTs), and operational transformation to reconcile diverg
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:distributed-system-protocol
hasPart:
  - urn:ngm:class:conflict-resolution
  - urn:ngm:class:delta-compression
  - urn:ngm:class:replication
  - urn:ngm:class:timestamp
requires:
  - urn:ngm:class:network-communication
  - urn:ngm:class:distributed-system
  - urn:ngm:class:clock-synchronization
  - urn:ngm:class:network-transport
  - urn:ngm:class:state-representation
  - urn:ngm:class:synchronization-protocol
enables:
  - urn:ngm:class:replication-system
  - urn:ngm:class:realtime-collaboration
  - urn:ngm:class:distributed-databases
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:user-experience
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:shared-virtual-world
implements:
  - urn:ngm:class:raft
  - urn:ngm:class:paxos
contrastsWith:
  - urn:ngm:class:strong-consistency
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:crdt
  - urn:ngm:class:data-replication
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:vector-clock
  - urn:ngm:class:operational-transformation
supports:
  - urn:ngm:class:high-availability
partOf:
  - urn:ngm:class:digital-twin-interop-protocol
  - urn:ngm:class:distributed-architecture
  - urn:ngm:class:distributed-system-architecture
relatedTo:
  - urn:ngm:class:state-synchronisation
  - urn:ngm:class:real-time-synchronisation
  - urn:ngm:class:distributed-consensus
  - urn:ngm:class:conflict-resolution
  - urn:ngm:class:cap-theorem
  - urn:ngm:class:eventual-consistency
---

# State Synchronisation

State synchronisation is the process of ensuring that multiple distributed nodes or replicas of a system maintain consistent views of shared mutable state despite network partitions, concurrent updates, and node failures. It encompasses techniques including leader-based replication, consensus protocols, conflict-free replicated data types (CRDTs), and operational transformation to reconcile divergent states. State synchronisation defines the trade-off between consistency, availability, and partition tolerance as described by the CAP theorem, choosing different points on that spectrum depending on application requirements. It is fundamental to distributed databases, real-time collaboration tools, multiplayer games, and blockchain networks.
