---
okf_version: "0.2"
type: Class
title: Incentive Alignment
resource: urn:ngm:class:incentive-alignment
domain: blockchain
description: Incentive Alignment is the design principle by which blockchain protocols structure economic rewards and penalties such that individual rational behaviour converges with the collective goals of the network. When correctly engineered, participants who act in their own self-interest—validators confirming blocks, miners extending chains, token holders participating in governance—simultaneously reinfo
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-defi-and-economics
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:economic-mechanism
hasPart:
  - urn:ngm:class:block-reward
  - urn:ngm:class:reward-distribution
requires:
  - urn:ngm:class:mechanism-design
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:validator-node
  - urn:ngm:class:tokenomics
contrastsWith:
  - urn:ngm:class:selfish-mining
  - urn:ngm:class:51-attack
relatedTo:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:dao-governance
  - urn:ngm:class:governance-token
  - urn:ngm:class:emission-schedule
---

# Incentive Alignment

Incentive Alignment is the design principle by which blockchain protocols structure economic rewards and penalties such that individual rational behaviour converges with the collective goals of the network. When correctly engineered, participants who act in their own self-interest—validators confirming blocks, miners extending chains, token holders participating in governance—simultaneously reinforce system security, liveness, and integrity. Misaligned incentives produce attack vectors such as selfish mining, validator collusion, or governance capture.
