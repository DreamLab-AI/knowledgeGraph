---
okf_version: "0.2"
type: Class
title: Crash Fault Tolerance
resource: urn:ngm:class:crash-fault-tolerance
domain: distributed-systems
description: Crash fault tolerance is the property of a distributed system that continues to operate correctly despite nodes failing by stopping, that is, by halting and ceasing to send messages. It assumes the crash-stop or crash-recovery failure model, in which faulty processes do not behave maliciously or send incorrect information. Protocols such as Paxos and Raft achieve it through replication and consens
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:fault-tolerance
requires:
  - urn:ngm:class:quorum
  - urn:ngm:class:replication
enables:
  - urn:ngm:class:high-availability
  - urn:ngm:class:state-machine-replication
dependsOn:
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:leader-election
implements:
  - urn:ngm:class:paxos
  - urn:ngm:class:raft
contrastsWith:
  - urn:ngm:class:byzantine-fault-tolerance
bridgesTo:
  - urn:ngm:class:distributed-consensus
uses:
  - urn:ngm:class:replication
  - urn:ngm:class:leader-election
supports:
  - urn:ngm:class:state-machine-replication
partOf:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:distributed-consensus
relatedTo:
  - urn:ngm:class:quorum
  - urn:ngm:class:consensus-protocol
---

# Crash Fault Tolerance

Crash fault tolerance is the property of a distributed system that continues to operate correctly despite nodes failing by stopping, that is, by halting and ceasing to send messages. It assumes the crash-stop or crash-recovery failure model, in which faulty processes do not behave maliciously or send incorrect information. Protocols such as Paxos and Raft achieve it through replication and consensus over a quorum of non-faulty nodes.
