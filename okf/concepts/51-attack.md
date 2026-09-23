---
okf_version: "0.2"
type: Class
title: 51% Attack
resource: urn:ngm:class:51-attack
domain: blockchain
description: "A 51% Attack is a consensus-layer attack on a Proof-of-Work blockchain in which a single entity or coalition controls more than half of the network's hash rate, enabling double-spending, transaction censorship, and chain reorganisation. The attack exploits the longest-chain rule: the attacker mines a private fork containing fraudulent transactions and, once it exceeds the honest chain in cumulativ"
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain
requires:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:mining-pool
  - urn:ngm:class:hash-rate
  - urn:ngm:class:mining
enables:
  - urn:ngm:class:double-spending
  - urn:ngm:class:transaction-censorship
  - urn:ngm:class:chain-reorganization
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:mining-hardware
contrastsWith:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:byzantine-fault-tolerance
bridgesTo:
  - urn:ngm:class:network-security
  - urn:ngm:class:game-theory
  - urn:ngm:class:ai-energy-optimisation
partOf:
  - urn:ngm:class:blockchain-security
relatedTo:
  - urn:ngm:class:selfish-mining
  - urn:ngm:class:finality
  - urn:ngm:class:transaction
  - urn:ngm:class:ethereum-smart-contract-platform-classic
---

# 51% Attack

A 51% Attack is a consensus-layer attack on a Proof-of-Work blockchain in which a single entity or coalition controls more than half of the network's hash rate, enabling double-spending, transaction censorship, and chain reorganisation. The attack exploits the longest-chain rule: the attacker mines a private fork containing fraudulent transactions and, once it exceeds the honest chain in cumulative work, broadcasts it to override confirmed history.
