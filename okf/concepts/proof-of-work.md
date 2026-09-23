---
okf_version: "0.2"
type: Class
title: Proof Of Work
resource: urn:ngm:class:proof-of-work
domain: blockchain
description: A consensus mechanism requiring network participants to expend significant computational effort solving a cryptographic puzzle before appending a new block to the blockchain. The difficulty of the puzzle self-adjusts to maintain a target block interval, making chain rewriting computationally prohibitive and providing Sybil resistance through physical resource expenditure.
maturity: established
quality: 0.7
is-a:
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:consensus-protocol
hasPart:
  - urn:ngm:class:mining-pool
  - urn:ngm:class:block-reward
  - urn:ngm:class:difficulty-adjustment
  - urn:ngm:class:network-hash-rate
requires:
  - urn:ngm:class:energy-consumption
  - urn:ngm:class:mining-hardware
enables:
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:transaction-finality
  - urn:ngm:class:immutability
  - urn:ngm:class:decentralization
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:peer-to-peer-network
implements:
  - urn:ngm:class:sybil-resistance
  - urn:ngm:class:byzantine-fault-tolerance
contrastsWith:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:proof-of-spacetime
bridgesTo:
  - urn:ngm:class:semiconductor-manufacturing
uses:
  - urn:ngm:class:hash-function
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:nonce
  - urn:ngm:class:asic
  - urn:ngm:class:sha-256
supports:
  - urn:ngm:class:double-spend-prevention
  - urn:ngm:class:network-security
relatedTo:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:mempool
  - urn:ngm:class:selfish-mining
  - urn:ngm:class:51-attack
  - urn:ngm:class:halving
---

# Proof Of Work

A consensus mechanism requiring network participants to expend significant computational effort solving a cryptographic puzzle before appending a new block to the blockchain. The difficulty of the puzzle self-adjusts to maintain a target block interval, making chain rewriting computationally prohibitive and providing Sybil resistance through physical resource expenditure.
