---
okf_version: "0.2"
type: Class
title: Selfish Mining
resource: urn:ngm:class:selfish-mining
domain: blockchain
description: A strategic block-withholding attack in proof-of-work blockchains where a mining pool privately mines a secret chain and selectively publishes blocks to waste the computational work of honest miners, thereby earning a disproportionate share of block rewards relative to its hash-rate contribution. Selfish mining is profitable when the attacker controls more than ~33% of network hash-rate.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:network-component
  - urn:ngm:class:networkcomponent
requires:
  - urn:ngm:class:block
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:private-blockchain
dependsOn:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:fork-choice-rule
contrastsWith:
  - urn:ngm:class:decentralization
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:proof-of-stake
bridgesTo:
  - urn:ngm:class:game-theory
  - urn:ngm:class:mechanism-design
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:ai-agent-system
partOf:
  - urn:ngm:class:security
relatedTo:
  - urn:ngm:class:51-attack
  - urn:ngm:class:mining-pool
  - urn:ngm:class:bitcoin-proof-of-work-protocol-mining
  - urn:ngm:class:double-spending
  - urn:ngm:class:longest-chain-rule
  - urn:ngm:class:hash-rate
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:nakamoto-consensus
---

# Selfish Mining

A strategic block-withholding attack in proof-of-work blockchains where a mining pool privately mines a secret chain and selectively publishes blocks to waste the computational work of honest miners, thereby earning a disproportionate share of block rewards relative to its hash-rate contribution. Selfish mining is profitable when the attacker controls more than ~33% of network hash-rate.
