---
okf_version: "0.2"
type: Class
title: Paxos
resource: urn:ngm:class:paxos
domain: distributed-systems
description: Paxos is a family of fault-tolerant distributed consensus algorithms first formally described by Leslie Lamport in 1989 and published in 1998, designed to allow a cluster of processes to agree on a single value or sequence of values despite the failure of a minority of participants. The algorithm proceeds through prepare and accept phases orchestrated by a proposer, with acceptors voting to commit
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:consensus-algorithm
requires:
  - urn:ngm:class:quorum
  - urn:ngm:class:majority-voting
  - urn:ngm:class:message-passing
enables:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:fault-tolerance-system
  - urn:ngm:class:state-machine-replication
dependsOn:
  - urn:ngm:class:crash-fault-tolerance
  - urn:ngm:class:network-partition
implements:
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:leader-election
  - urn:ngm:class:two-phase-commit
contrastsWith:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:nakamoto-consensus
  - urn:ngm:class:raft-consensus
  - urn:ngm:class:hot-stuff-consensus
bridgesTo:
  - urn:ngm:class:blockchain-consensus
relatedTo:
  - urn:ngm:class:distributed-protocol
  - urn:ngm:class:zookeeper
  - urn:ngm:class:cap-theorem
  - urn:ngm:class:total-order-broadcast
---

# Paxos

Paxos is a family of fault-tolerant distributed consensus algorithms first formally described by Leslie Lamport in 1989 and published in 1998, designed to allow a cluster of processes to agree on a single value or sequence of values despite the failure of a minority of participants. The algorithm proceeds through prepare and accept phases orchestrated by a proposer, with acceptors voting to commit proposed values and learners observing the final agreement. Multi-Paxos extends the basic protocol to achieve consensus on a log of commands efficiently, forming the algorithmic foundation of replicated state machines. Paxos and its derivatives, including Raft and HotStuff, underpin virtually every strongly consistent distributed database and coordination service in production use today.
