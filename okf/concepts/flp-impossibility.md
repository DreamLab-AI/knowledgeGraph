---
okf_version: "0.2"
type: Class
title: FLP Impossibility
resource: urn:ngm:class:flp-impossibility
domain: distributed-systems
description: The FLP Impossibility (Fischer, Lynch, Paterson 1985) is a foundational theorem in distributed computing proving that no deterministic protocol can solve the [[Consensus]] problem in a fully asynchronous message-passing system if even one process may crash. The result arises because message delays are unbounded, making it impossible to distinguish a crashed process from a slow one, so any protocol
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:distributed-consensus
requires:
  - urn:ngm:class:asynchronous-network
  - urn:ngm:class:crash-fault-model
enables:
  - urn:ngm:class:partial-synchrony
  - urn:ngm:class:randomised-consensus
  - urn:ngm:class:failure-detector
contrastsWith:
  - urn:ngm:class:cap-theorem
bridgesTo:
  - urn:ngm:class:blockchain-consensus
  - urn:ngm:class:smart-contract-execution
uses:
  - urn:ngm:class:formal-proof
  - urn:ngm:class:valence-argument
partOf:
  - urn:ngm:class:computability-theory
  - urn:ngm:class:distributed-systems-theory
relatedTo:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:paxos
  - urn:ngm:class:raft-consensus
  - urn:ngm:class:two-phase-commit
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:safety-liveness-tradeoff
  - urn:ngm:class:leader-election
---

# FLP Impossibility

The FLP Impossibility (Fischer, Lynch, Paterson 1985) is a foundational theorem in distributed computing proving that no deterministic protocol can solve the [[Consensus]] problem in a fully asynchronous message-passing system if even one process may crash. The result arises because message delays are unbounded, making it impossible to distinguish a crashed process from a slow one, so any protocol that always terminates can be manipulated into a state of permanent indecision. Consequently, every practical [[Consensus Algorithm]] must relax at least one of the FLP assumptions — typically by introducing partial synchrony, randomisation, or probabilistic termination.
