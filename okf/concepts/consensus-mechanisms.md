---
okf_version: "0.2"
type: Class
title: Consensus Mechanisms
resource: urn:ngm:class:consensus-mechanisms
domain: distributed-systems
description: The family of protocols by which distributed participants agree on a single shared state or ordering of events without relying on a central authority, spanning classical fault-tolerant algorithms, probabilistic approaches, and cryptoeconomic incentive designs.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:distributed-systems
hasPart:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:practical-byzantine-fault-tolerance
  - urn:ngm:class:tendermint
  - urn:ngm:class:delegated-proof-of-stake
requires:
  - urn:ngm:class:consensus
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:peer-to-peer-network
enables:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:smart-contracts
  - urn:ngm:class:de-fi
dependsOn:
  - urn:ngm:class:cryptography
  - urn:ngm:class:digital-signatures
  - urn:ngm:class:hash-functions
contrastsWith:
  - urn:ngm:class:leader-election
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:governance
  - urn:ngm:class:security
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:tendermint
supports:
  - urn:ngm:class:decentralization
  - urn:ngm:class:immutability
  - urn:ngm:class:sybil-resistance
relatedTo:
  - urn:ngm:class:finality
  - urn:ngm:class:validator-node
---

# Consensus Mechanisms

The family of protocols by which distributed participants agree on a single shared state or ordering of events without relying on a central authority, spanning classical fault-tolerant algorithms, probabilistic approaches, and cryptoeconomic incentive designs.
