---
okf_version: "0.2"
type: Class
title: Practical Byzantine Fault Tolerance
resource: urn:ngm:class:practical-byzantine-fault-tolerance
domain: blockchain
description: A consensus algorithm providing high-performance Byzantine state machine replication for asynchronous distributed systems, tolerating up to f faulty nodes in a system of 3f+1 total nodes. PBFT achieves deterministic finality through a three-phase protocol (pre-prepare, prepare, commit) and processes thousands of requests per second with sub-millisecond latency overhead, making it suitable for perm
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:byzantine-fault-tolerance
hasPart:
  - urn:ngm:class:pre-prepare-phase
  - urn:ngm:class:commit-phase
requires:
  - urn:ngm:class:quorum-certificate
  - urn:ngm:class:message-authentication-code
  - urn:ngm:class:state-machine-replication
enables:
  - urn:ngm:class:finality
  - urn:ngm:class:deterministic-finality
  - urn:ngm:class:blockchain-governance
  - urn:ngm:class:permissioned-blockchain
implements:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:consensus-algorithm
contrastsWith:
  - urn:ngm:class:nakamoto-consensus
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:proof-of-work
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:fault-tolerant-computing
uses:
  - urn:ngm:class:validator-node
  - urn:ngm:class:digital-signature
  - urn:ngm:class:public-key-cryptography
supports:
  - urn:ngm:class:hyperledger-fabric
relatedTo:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:federated-byzantine-fault-tolerance
  - urn:ngm:class:hot-stuff-consensus
  - urn:ngm:class:leader-based-protocol
  - urn:ngm:class:total-order-broadcast
---

# Practical Byzantine Fault Tolerance

A consensus algorithm providing high-performance Byzantine state machine replication for asynchronous distributed systems, tolerating up to f faulty nodes in a system of 3f+1 total nodes. PBFT achieves deterministic finality through a three-phase protocol (pre-prepare, prepare, commit) and processes thousands of requests per second with sub-millisecond latency overhead, making it suitable for permissioned blockchain networks requiring strong consistency guarantees.
