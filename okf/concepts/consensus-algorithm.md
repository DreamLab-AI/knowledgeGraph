---
okf_version: "0.2"
type: Class
title: Consensus Algorithm
resource: urn:ngm:class:consensus-algorithm
domain: blockchain
description: Distributed computational protocol ensuring all participants in a Blockchain Network agree on the canonical transaction history and current state without centralised authority, tolerating a bounded fraction of faulty or malicious nodes.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
hasPart:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:practical-byzantine-fault-tolerance
  - urn:ngm:class:delegated-proof-of-stake
requires:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:validator-node
  - urn:ngm:class:peer-to-peer-network
enables:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:transaction-finality
  - urn:ngm:class:trustless-coordination
dependsOn:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:digital-signature
  - urn:ngm:class:fault-tolerance
implements:
  - urn:ngm:class:distributed-consensus
contrastsWith:
  - urn:ngm:class:centralised-database
  - urn:ngm:class:two-phase-commit
bridgesTo:
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:digital-twin
supports:
  - urn:ngm:class:decentralised-governance
  - urn:ngm:class:smart-contract
  - urn:ngm:class:dao
relatedTo:
  - urn:ngm:class:network-security
  - urn:ngm:class:data-integrity
  - urn:ngm:class:sharding
---

# Consensus Algorithm

Distributed computational protocol ensuring all participants in a Blockchain Network agree on the canonical transaction history and current state without centralised authority, tolerating a bounded fraction of faulty or malicious nodes.
