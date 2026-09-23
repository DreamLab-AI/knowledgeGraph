---
okf_version: "0.2"
type: Class
title: Block Time
resource: urn:ngm:class:block-time
domain: blockchain
description: Block Time is the average elapsed time between the creation of consecutive blocks on a blockchain, governed by the network's consensus mechanism and difficulty adjustment algorithm. Shorter block times increase transaction throughput and reduce confirmation latency but raise the risk of forks due to block propagation delays, creating a fundamental tradeoff between speed and chain security.
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:distributed-data-structure
  - urn:ngm:class:distributed-data-structure
hasPart:
  - urn:ngm:class:difficulty-adjustment
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:block-propagation
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:hash-rate
enables:
  - urn:ngm:class:transaction-confirmation
  - urn:ngm:class:transaction-finality
  - urn:ngm:class:uncle-block
dependsOn:
  - urn:ngm:class:network-latency
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:mining-pool
implements:
  - urn:ngm:class:nakamoto-consensus
contrastsWith:
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:block-size
bridgesTo:
  - urn:ngm:class:ai-energy-optimisation
  - urn:ngm:class:distributed-collaboration
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:merkle-tree
supports:
  - urn:ngm:class:blockchain-security
  - urn:ngm:class:double-spend-prevention
standardizedBy:
  - urn:ngm:class:iso-iec-23257-2021
  - urn:ngm:class:ieee-2418-1
partOf:
  - urn:ngm:class:blockchain-protocol
relatedTo:
  - urn:ngm:class:block-size
  - urn:ngm:class:block-height
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:mining
  - urn:ngm:class:finality
  - urn:ngm:class:mempool
  - urn:ngm:class:orphan-block
---

# Block Time

Block Time is the average elapsed time between the creation of consecutive blocks on a blockchain, governed by the network's consensus mechanism and difficulty adjustment algorithm. Shorter block times increase transaction throughput and reduce confirmation latency but raise the risk of forks due to block propagation delays, creating a fundamental tradeoff between speed and chain security.
