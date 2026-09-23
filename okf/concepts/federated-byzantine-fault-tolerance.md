---
okf_version: "0.2"
type: Class
title: Federated Byzantine Fault Tolerance
resource: urn:ngm:class:federated-byzantine-fault-tolerance
domain: blockchain
description: "Federated Byzantine Fault Tolerance (FBFT) is a consensus mechanism in which each node independently selects a trusted subset of peers—its quorum slice—forming overlapping quorums that propagate agreement without requiring global participation or expensive proof-of-work computation. Unlike classic BFT protocols that demand a fixed, known validator set, FBFT allows open membership: any node may joi"
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:byzantine-fault-tolerance
requires:
  - urn:ngm:class:node
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:gossip-protocol
enables:
  - urn:ngm:class:finality
  - urn:ngm:class:transaction
  - urn:ngm:class:interoperability
contrastsWith:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
uses:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:network-protocol
relatedTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:block
  - urn:ngm:class:security
  - urn:ngm:class:distributed-system
---

# Federated Byzantine Fault Tolerance

Federated Byzantine Fault Tolerance (FBFT) is a consensus mechanism in which each node independently selects a trusted subset of peers—its quorum slice—forming overlapping quorums that propagate agreement without requiring global participation or expensive proof-of-work computation. Unlike classic BFT protocols that demand a fixed, known validator set, FBFT allows open membership: any node may join by declaring its quorum slices, and safety is guaranteed as long as quorum intersections contain at least one correct node. FBFT underpins the Stellar Consensus Protocol (SCP), enabling low-latency, high-throughput cross-border payment settlement with safety and liveness properties derived from quorum-intersection analysis.
