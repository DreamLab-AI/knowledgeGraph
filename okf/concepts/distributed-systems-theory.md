---
okf_version: "0.2"
type: Class
title: Distributed Systems Theory
resource: urn:ngm:class:distributed-systems-theory
domain: distributed-systems
description: The theoretical study of computational systems whose components run on separate networked machines and coordinate by passing messages, encompassing fundamental impossibility results, consistency models, and formal proofs of consensus and replication protocols.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:distributed-systems
hasPart:
  - urn:ngm:class:cap-theorem
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:consistency-model
requires:
  - urn:ngm:class:algorithm
  - urn:ngm:class:formal-proof
  - urn:ngm:class:message-passing
enables:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:replication-protocol
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:consensus-algorithm
dependsOn:
  - urn:ngm:class:network-partition
  - urn:ngm:class:asynchronous-communication
implements:
  - urn:ngm:class:paxos
  - urn:ngm:class:raft-consensus
contrastsWith:
  - urn:ngm:class:centralised-computing
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:vector-clock
  - urn:ngm:class:logical-clock
partOf:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:computer-science
relatedTo:
  - urn:ngm:class:eventual-consistency
  - urn:ngm:class:leader-election
  - urn:ngm:class:two-phase-commit
---

# Distributed Systems Theory

The theoretical study of computational systems whose components run on separate networked machines and coordinate by passing messages, encompassing fundamental impossibility results, consistency models, and formal proofs of consensus and replication protocols.
