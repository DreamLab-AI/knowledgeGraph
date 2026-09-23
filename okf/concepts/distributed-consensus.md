---
okf_version: "0.2"
type: Class
title: Distributed Consensus
resource: urn:ngm:class:distributed-consensus
domain: distributed-systems
description: "Distributed consensus is the fundamental computer science problem of achieving reliable agreement on a shared value or sequence of values across a set of independent processes in a distributed system, despite the possibility of node crashes, network partitions, message delays, and Byzantine (arbitrarily malicious) behaviour. The problem is formalised through three core properties: agreement (all n"
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:distributed-computing
requires:
  - urn:ngm:class:network-communication
  - urn:ngm:class:message-passing
  - urn:ngm:class:cryptographic-signature
enables:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:decentralised-trust
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:distributed-databases
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:distributed-databases
implements:
  - urn:ngm:class:paxos
  - urn:ngm:class:raft
  - urn:ngm:class:pbft
  - urn:ngm:class:hot-stuff
  - urn:ngm:class:tendermint
contrastsWith:
  - urn:ngm:class:eventual-consistency
  - urn:ngm:class:centralised-coordination
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:multi-agent-coordination
uses:
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:leader-election
  - urn:ngm:class:quorum-system
standardizedBy:
  - urn:ngm:class:ieee
  - urn:ngm:class:ietf
relatedTo:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:distributed-system
  - urn:ngm:class:cap-theorem
  - urn:ngm:class:atomic-broadcast
---

# Distributed Consensus

Distributed consensus is the fundamental computer science problem of achieving reliable agreement on a shared value or sequence of values across a set of independent processes in a distributed system, despite the possibility of node crashes, network partitions, message delays, and Byzantine (arbitrarily malicious) behaviour. The problem is formalised through three core properties: agreement (all non-faulty nodes decide the same value), validity (the decided value was proposed by some participant), and termination (every non-faulty node eventually decides). The Fischer-Lynch-Paterson (FLP) impossibility theorem establishes that deterministic consensus in a fully asynchronous system is impossible even with one crash-faulty process, forcing all practical protocols to make synchrony assumptions or adopt probabilistic termination.
