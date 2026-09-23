---
okf_version: "0.2"
type: Class
title: Difficulty Adjustment
resource: urn:ngm:class:difficulty-adjustment
domain: blockchain
description: Difficulty Adjustment is a Proof-of-Work consensus mechanism that periodically recalibrates the cryptographic puzzle difficulty so that blocks are produced at a statistically stable rate (e.g., approximately every 10 minutes in Bitcoin). It ensures network stability and security as total hash rate fluctuates.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:consensus-protocol
requires:
  - urn:ngm:class:hash-rate
  - urn:ngm:class:block-timestamp
enables:
  - urn:ngm:class:validator-node
  - urn:ngm:class:network-security
  - urn:ngm:class:block-production
  - urn:ngm:class:mining-incentive
dependsOn:
  - urn:ngm:class:mining
  - urn:ngm:class:blockchain-node
  - urn:ngm:class:block-header
implements:
  - urn:ngm:class:nakamoto-consensus
  - urn:ngm:class:feedback-control
contrastsWith:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:delegated-proof-of-stake
bridgesTo:
  - urn:ngm:class:game-theory
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:ai-agent-system
uses:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:sha-256
supports:
  - urn:ngm:class:decentralization
  - urn:ngm:class:51-attack
partOf:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:consensus-mechanism
relatedTo:
  - urn:ngm:class:block-reward
  - urn:ngm:class:miner
  - urn:ngm:class:transaction-fee
  - urn:ngm:class:halving
---

# Difficulty Adjustment

Difficulty Adjustment is a Proof-of-Work consensus mechanism that periodically recalibrates the cryptographic puzzle difficulty so that blocks are produced at a statistically stable rate (e.g., approximately every 10 minutes in Bitcoin). It ensures network stability and security as total hash rate fluctuates.
