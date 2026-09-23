---
okf_version: "0.2"
type: Class
title: HotStuff Consensus
resource: urn:ngm:class:hot-stuff-consensus
domain: blockchain
description: A Byzantine fault-tolerant state machine replication protocol that achieves the first simultaneous combination of linear message complexity, optimistic responsiveness, and a simple three-phase voting pipeline. HotStuff replaces PBFT's quadratic message complexity with a leader-based threshold signature aggregation scheme, enabling safe view changes with O(n) messages and forming the foundation for
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:byzantine-fault-tolerance
requires:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:distributed-system
enables:
  - urn:ngm:class:finality
  - urn:ngm:class:blockchain-scalability
implements:
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:consensus-algorithm
contrastsWith:
  - urn:ngm:class:raft-consensus
  - urn:ngm:class:tendermint-consensus
relatedTo:
  - urn:ngm:class:sybil-resistance
  - urn:ngm:class:distributed-ledger
---

# HotStuff Consensus

A Byzantine fault-tolerant state machine replication protocol that achieves the first simultaneous combination of linear message complexity, optimistic responsiveness, and a simple three-phase voting pipeline. HotStuff replaces PBFT's quadratic message complexity with a leader-based threshold signature aggregation scheme, enabling safe view changes with O(n) messages and forming the foundation for the DiemBFT/LibraBFT and Aptos consensus protocols.
