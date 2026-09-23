---
okf_version: "0.2"
type: Class
title: Mining
resource: urn:ngm:class:mining
domain: blockchain
description: Mining is the proof-of-work block-creation process in which participating nodes compete to solve a cryptographic hash puzzle, with the winner appending the next block to the chain and receiving a block reward. Mining provides Sybil resistance, ensures probabilistic finality, and anchors chain security to real-world energy expenditure.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:consensus-protocol
hasPart:
  - urn:ngm:class:mining-pool
  - urn:ngm:class:mining-reward
  - urn:ngm:class:nonce
  - urn:ngm:class:block-reward
  - urn:ngm:class:network-hash-rate
  - urn:ngm:class:mining-difficulty
  - urn:ngm:class:coinbase-transaction
requires:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:blockchain-energy-consumption
  - urn:ngm:class:block-header
enables:
  - urn:ngm:class:nakamoto-consensus
  - urn:ngm:class:double-spend-prevention
  - urn:ngm:class:sybil-resistance
  - urn:ngm:class:immutability
dependsOn:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:distributed-ledger
contrastsWith:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:proof-of-authority
bridgesTo:
  - urn:ngm:class:renewable-energy
  - urn:ngm:class:carbon-footprint
uses:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:sha-256
  - urn:ngm:class:application-specific-integrated-circuit
  - urn:ngm:class:merkle-tree
relatedTo:
  - urn:ngm:class:probabilistic-finality
  - urn:ngm:class:transaction-fee
---

# Mining

Mining is the proof-of-work block-creation process in which participating nodes compete to solve a cryptographic hash puzzle, with the winner appending the next block to the chain and receiving a block reward. Mining provides Sybil resistance, ensures probabilistic finality, and anchors chain security to real-world energy expenditure.
