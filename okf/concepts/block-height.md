---
okf_version: "0.2"
type: Class
title: Block Height
resource: urn:ngm:class:block-height
domain: blockchain
description: "Block Height is a monotonically increasing integer representing the position of a specific block in a blockchain, defined as the count of confirmed blocks preceding it in the canonical chain (the genesis block has height 0). Block height serves as the primary temporal reference for blockchain state: smart contracts use it for time-locked operations, miners use it to calculate block rewards and hal"
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:distributed-data-structure
  - urn:ngm:class:distributed-data-structure
hasPart:
  - urn:ngm:class:block
  - urn:ngm:class:genesis-block
requires:
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:blockchain-governance
  - urn:ngm:class:fork-choice-rule
dependsOn:
  - urn:ngm:class:proof-of-work
partOf:
  - urn:ngm:class:blockchain
  - urn:ngm:class:blockchain-protocol
relatedTo:
  - urn:ngm:class:block-time
  - urn:ngm:class:block-reward
  - urn:ngm:class:mining-reward
  - urn:ngm:class:chain-reorganization
---

# Block Height

Block Height is a monotonically increasing integer representing the position of a specific block in a blockchain, defined as the count of confirmed blocks preceding it in the canonical chain (the genesis block has height 0). Block height serves as the primary temporal reference for blockchain state: smart contracts use it for time-locked operations, miners use it to calculate block rewards and halving events, and consensus rules use it to enforce protocol upgrade activation thresholds. In the presence of forks, two competing chains may share block height values; the canonical chain is determined by the fork choice rule applied at the point of divergence.
