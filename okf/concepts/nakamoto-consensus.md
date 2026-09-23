---
okf_version: "0.2"
type: Class
title: Nakamoto Consensus
resource: urn:ngm:class:nakamoto-consensus
domain: blockchain
description: The proof-of-work based consensus mechanism introduced in the Bitcoin whitepaper, where nodes expend computational effort to extend the longest valid chain. It achieves probabilistic Byzantine fault tolerance in open, permissionless networks through the longest-chain rule and difficulty-adjusted mining, enabling trustless agreement without a central coordinator.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:consensus-protocol
hasPart:
  - urn:ngm:class:longest-chain-rule
  - urn:ngm:class:difficulty-adjustment
  - urn:ngm:class:block-header
  - urn:ngm:class:nonce
requires:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:merkle-tree
enables:
  - urn:ngm:class:mining
  - urn:ngm:class:block-reward
  - urn:ngm:class:ledger
  - urn:ngm:class:permissionless-participation
contrastsWith:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:practical-byzantine-fault-tolerance
  - urn:ngm:class:delegated-proof-of-stake
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:game-theory
  - urn:ngm:class:mechanism-design
partOf:
  - urn:ngm:class:bitcoin-protocol
  - urn:ngm:class:blockchain-network
relatedTo:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:double-spending
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:sybil-resistance
  - urn:ngm:class:51-attack
---

# Nakamoto Consensus

The proof-of-work based consensus mechanism introduced in the Bitcoin whitepaper, where nodes expend computational effort to extend the longest valid chain. It achieves probabilistic Byzantine fault tolerance in open, permissionless networks through the longest-chain rule and difficulty-adjusted mining, enabling trustless agreement without a central coordinator.
