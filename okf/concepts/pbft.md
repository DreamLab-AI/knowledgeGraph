---
okf_version: "0.2"
type: Class
title: PBFT
resource: urn:ngm:class:pbft
domain: distributed-systems
description: Practical Byzantine Fault Tolerance (PBFT) is a state-machine replication protocol designed by Castro and Liskov (1999) that achieves consensus in asynchronous distributed systems despite up to f arbitrarily faulty (Byzantine) nodes, requiring a total of at least 3f+1 replicas. It proceeds through pre-prepare, prepare, and commit phases to ensure all correct replicas execute the same sequence of o
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:byzantine-fault-tolerance
requires:
  - urn:ngm:class:partial-synchrony
  - urn:ngm:class:cryptographic-infrastructure
enables:
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:blockchain-infrastructure
  - urn:ngm:class:deterministic-finality
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:permissioned-blockchain
implements:
  - urn:ngm:class:byzantine-agreement
  - urn:ngm:class:total-order-broadcast
contrastsWith:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:crash-fault-tolerance
bridgesTo:
  - urn:ngm:class:hyperledger-fabric
  - urn:ngm:class:enterprise-blockchain
uses:
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:distributed-system
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:message-authentication-code
  - urn:ngm:class:quorum-system
  - urn:ngm:class:view-change-protocol
relatedTo:
  - urn:ngm:class:dynamic-scalable-bft
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:hot-stuff
  - urn:ngm:class:tendermint
---

# PBFT

Practical Byzantine Fault Tolerance (PBFT) is a state-machine replication protocol designed by Castro and Liskov (1999) that achieves consensus in asynchronous distributed systems despite up to f arbitrarily faulty (Byzantine) nodes, requiring a total of at least 3f+1 replicas. It proceeds through pre-prepare, prepare, and commit phases to ensure all correct replicas execute the same sequence of operations, providing both safety and liveness under partial synchrony assumptions. PBFT was the first Byzantine fault-tolerant protocol deemed practical for deployed systems, with latency polynomial rather than exponential in the number of nodes. Its communication complexity of O(n²) limits scalability but makes it highly suitable for small-to-medium permissioned blockchain networks.
