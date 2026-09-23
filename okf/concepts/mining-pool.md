---
okf_version: "0.2"
type: Class
title: Mining Pool
resource: urn:ngm:class:mining-pool
domain: blockchain
description: A cooperative arrangement in which multiple miners aggregate their computational resources to increase the probability of successfully mining a block, sharing the resulting block reward proportionally to contributed hash rate. Mining pools reduce variance in miner income but introduce centralisation risks and hash-rate concentration that can threaten network security.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:consensus-protocol
hasPart:
  - urn:ngm:class:mining
  - urn:ngm:class:reward-distribution
requires:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:network-connectivity
  - urn:ngm:class:stratum-protocol
enables:
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:block-validation
dependsOn:
  - urn:ngm:class:hash-rate
  - urn:ngm:class:block-reward
  - urn:ngm:class:transaction-fee
contrastsWith:
  - urn:ngm:class:solo-mining
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:mining
bridgesTo:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:incentive-mechanism
uses:
  - urn:ngm:class:hash-function
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:stratum-protocol
  - urn:ngm:class:peer-to-peer-network
partOf:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:blockchain-network
relatedTo:
  - urn:ngm:class:block-reward
  - urn:ngm:class:transaction-fee
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:mempool
  - urn:ngm:class:51-attack
  - urn:ngm:class:difficulty-adjustment
---

# Mining Pool

A cooperative arrangement in which multiple miners aggregate their computational resources to increase the probability of successfully mining a block, sharing the resulting block reward proportionally to contributed hash rate. Mining pools reduce variance in miner income but introduce centralisation risks and hash-rate concentration that can threaten network security.
