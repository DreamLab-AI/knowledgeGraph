---
okf_version: "0.2"
type: Class
title: Pool Share
resource: urn:ngm:class:pool-share
domain: blockchain
description: "A proof-of-work unit submitted by an individual miner to a mining pool server demonstrating that the miner performed a bounded amount of computational work toward finding a valid block hash. Pool shares have a lower difficulty target than the network block target, allowing the pool to credit each contributor proportional work units and distribute block rewards fairly, regardless of which specific "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:consensus-protocol
requires:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:mining-reward
  - urn:ngm:class:block-reward
contrastsWith:
  - urn:ngm:class:proof-of-stake
partOf:
  - urn:ngm:class:mining-pool
  - urn:ngm:class:mining
relatedTo:
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:blockchain-protocol
---

# Pool Share

A proof-of-work unit submitted by an individual miner to a mining pool server demonstrating that the miner performed a bounded amount of computational work toward finding a valid block hash. Pool shares have a lower difficulty target than the network block target, allowing the pool to credit each contributor proportional work units and distribute block rewards fairly, regardless of which specific miner finds the winning nonce.
