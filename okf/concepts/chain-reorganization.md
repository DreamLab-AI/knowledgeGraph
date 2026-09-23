---
okf_version: "0.2"
type: Class
title: Chain Reorganization
resource: urn:ngm:class:chain-reorganization
domain: blockchain
description: A Chain Reorganization (reorg) is the replacement of one or more blocks in the canonical blockchain by an alternative chain of equal or greater cumulative proof-of-work, occurring when competing miners produce valid chains of differing lengths and the network converges on the longest-chain rule to select the canonical history. Reorgs invalidate transactions confirmed only in the abandoned chain se
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:distributed-data-structure
requires:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:nakamoto-consensus
  - urn:ngm:class:longest-chain-rule
enables:
  - urn:ngm:class:double-spending
  - urn:ngm:class:51-attack
contrastsWith:
  - urn:ngm:class:byzantine-fault-tolerance
partOf:
  - urn:ngm:class:consensus-mechanism
relatedTo:
  - urn:ngm:class:finality
  - urn:ngm:class:transaction-finality
  - urn:ngm:class:selfish-mining
  - urn:ngm:class:fork-choice-rule
  - urn:ngm:class:blockchain-scalability
---

# Chain Reorganization

A Chain Reorganization (reorg) is the replacement of one or more blocks in the canonical blockchain by an alternative chain of equal or greater cumulative proof-of-work, occurring when competing miners produce valid chains of differing lengths and the network converges on the longest-chain rule to select the canonical history. Reorgs invalidate transactions confirmed only in the abandoned chain segment, enabling double-spend attacks when deliberately induced and posing settlement finality risks for exchanges and payment processors.
