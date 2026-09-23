---
okf_version: "0.2"
type: Class
title: State Machine Replication
resource: urn:ngm:class:state-machine-replication
domain: distributed-systems
description: State Machine Replication (SMR) is a fault-tolerance and consistency technique in which multiple server replicas each maintain an identical deterministic state machine by processing the same totally-ordered sequence of client commands, ensuring that all correct replicas converge to the same state after executing every command. The approach was formalised by Leslie Lamport and later by Fred Schneid
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:distributed-computing
hasPart:
  - urn:ngm:class:leader-election
  - urn:ngm:class:log-replication
  - urn:ngm:class:state-transfer
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:total-order-broadcast
  - urn:ngm:class:deterministic-execution
enables:
  - urn:ngm:class:high-availability
  - urn:ngm:class:strong-consistency
  - urn:ngm:class:linearizability
  - urn:ngm:class:distributed-ledger
implements:
  - urn:ngm:class:paxos
  - urn:ngm:class:raft-consensus
  - urn:ngm:class:pbft
  - urn:ngm:class:viewstamped-replication
  - urn:ngm:class:practical-byzantine-fault-tolerance
contrastsWith:
  - urn:ngm:class:replication
  - urn:ngm:class:eventual-consistency
  - urn:ngm:class:replication
bridgesTo:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:distributed-ai-training
uses:
  - urn:ngm:class:state-machine
  - urn:ngm:class:quorum
supports:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-databases
  - urn:ngm:class:coordination-layer
  - urn:ngm:class:distributed-databases
  - urn:ngm:class:coordination-layer
relatedTo:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:cap-theorem
  - urn:ngm:class:replication-protocol
---

# State Machine Replication

State Machine Replication (SMR) is a fault-tolerance and consistency technique in which multiple server replicas each maintain an identical deterministic state machine by processing the same totally-ordered sequence of client commands, ensuring that all correct replicas converge to the same state after executing every command. The approach was formalised by Leslie Lamport and later by Fred Schneider, and it provides the theoretical foundation for consensus protocols such as Paxos, Raft, and Viewstamped Replication. SMR simultaneously achieves high availability and strong consistency in the presence of crash or Byzantine failures by decoupling the agreement problem (ordering) from the execution problem (state transition). It is the core architectural abstraction underlying permissioned blockchains, cloud database replication, and coordination services such as Apache ZooKeeper.
