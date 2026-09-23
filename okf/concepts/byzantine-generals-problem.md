---
okf_version: "0.2"
type: Class
title: Byzantine Generals Problem
resource: urn:ngm:class:byzantine-generals-problem
domain: distributed-systems
description: The Byzantine Generals Problem is a foundational thought experiment in distributed computing describing how loyal participants can reach agreement when some participants are traitorous and may send arbitrary or conflicting messages. It formalises the difficulty of achieving consensus in the presence of arbitrary (Byzantine) faults, where faulty nodes behave maliciously rather than merely crashing.
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:fault-tolerance
requires:
  - urn:ngm:class:message-passing
enables:
  - urn:ngm:class:byzantine-fault-tolerance
dependsOn:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:distributed-system
contrastsWith:
  - urn:ngm:class:crash-fault-tolerance
  - urn:ngm:class:atomic-broadcast
bridgesTo:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:tendermint
supports:
  - urn:ngm:class:practical-byzantine-fault-tolerance
  - urn:ngm:class:blockchain-consensus
relatedTo:
  - urn:ngm:class:consensus
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:distributed-systems
---

# Byzantine Generals Problem

The Byzantine Generals Problem is a foundational thought experiment in distributed computing describing how loyal participants can reach agreement when some participants are traitorous and may send arbitrary or conflicting messages. It formalises the difficulty of achieving consensus in the presence of arbitrary (Byzantine) faults, where faulty nodes behave maliciously rather than merely crashing. The problem establishes that agreement is solvable only when fewer than one-third of participants are faulty.
