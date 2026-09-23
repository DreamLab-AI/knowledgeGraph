---
okf_version: "0.2"
type: Class
title: Agreement Protocol
resource: urn:ngm:class:agreement-protocol
domain: blockchain
description: An Agreement Protocol is a distributed protocol specifically designed to enable multiple independent nodes to reach consensus on a single value, decision, or sequence of events despite the presence of failures, network asynchrony, and potentially malicious participants. Agreement protocols must satisfy safety (all honest nodes agree on the same value), liveness (the protocol eventually terminates)
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:distributed-protocol
hasPart:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:consensus-algorithm
requires:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:byzantine-fault-tolerance
enables:
  - urn:ngm:class:finality
  - urn:ngm:class:blockchain-protocol
  - urn:ngm:class:blockchain-governance
implements:
  - urn:ngm:class:nakamoto-consensus
relatedTo:
  - urn:ngm:class:node
  - urn:ngm:class:validator-node
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:blockchain-scalability
---

# Agreement Protocol

An Agreement Protocol is a distributed protocol specifically designed to enable multiple independent nodes to reach consensus on a single value, decision, or sequence of events despite the presence of failures, network asynchrony, and potentially malicious participants. Agreement protocols must satisfy safety (all honest nodes agree on the same value), liveness (the protocol eventually terminates), and validity (the agreed value was proposed by some participant), and their design space is constrained by impossibility results such as the FLP theorem and Byzantine Agreement bounds.
