---
okf_version: "0.2"
type: Class
title: Longest Chain Rule
resource: urn:ngm:class:longest-chain-rule
domain: blockchain
description: The fork-choice rule used in proof-of-work blockchains that designates the chain with the most cumulative work (or greatest total difficulty) as the canonical chain. It resolves temporary forks by directing nodes to extend the heaviest chain, thereby converging the distributed network on a single transaction history.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:consensus-protocol
requires:
  - urn:ngm:class:block
  - urn:ngm:class:blockchain
enables:
  - urn:ngm:class:decentralization
  - urn:ngm:class:blockchain-protocol
contrastsWith:
  - urn:ngm:class:51-attack
relatedTo:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:difficulty-adjustment
  - urn:ngm:class:chain-reorganization
  - urn:ngm:class:selfish-mining
---

# Longest Chain Rule

The fork-choice rule used in proof-of-work blockchains that designates the chain with the most cumulative work (or greatest total difficulty) as the canonical chain. It resolves temporary forks by directing nodes to extend the heaviest chain, thereby converging the distributed network on a single transaction history.
