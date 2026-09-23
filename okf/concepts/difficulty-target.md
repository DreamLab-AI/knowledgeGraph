---
okf_version: "0.2"
type: Class
title: Difficulty Target
resource: urn:ngm:class:difficulty-target
domain: blockchain
description: "A 256-bit threshold value in proof-of-work blockchains that a block's hash must be numerically less than or equal to for the block to be considered valid. The difficulty target is periodically recalculated by the Difficulty Adjustment algorithm to maintain a consistent average inter-block time regardless of changes in aggregate hash power. It is the primary mechanism by which mining difficulty is "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:consensus-protocol
hasPart:
  - urn:ngm:class:difficulty-adjustment
requires:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:nonce
enables:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:blockchain-network
dependsOn:
  - urn:ngm:class:network-hash-rate
  - urn:ngm:class:consensus-rule
relatedTo:
  - urn:ngm:class:halving
  - urn:ngm:class:block-reward
  - urn:ngm:class:mining-pool
  - urn:ngm:class:bitcoin-proof-of-work-protocol-mining
  - urn:ngm:class:hash-function
  - urn:ngm:class:merkle-root
  - urn:ngm:class:blockchain-energy-consumption
---

# Difficulty Target

A 256-bit threshold value in proof-of-work blockchains that a block's hash must be numerically less than or equal to for the block to be considered valid. The difficulty target is periodically recalculated by the Difficulty Adjustment algorithm to maintain a consistent average inter-block time regardless of changes in aggregate hash power. It is the primary mechanism by which mining difficulty is quantified and enforced across all network participants.
