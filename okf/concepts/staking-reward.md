---
okf_version: "0.2"
type: Class
title: Staking Reward
resource: urn:ngm:class:staking-reward
domain: blockchain
description: A staking reward is the compensation paid to participants who lock cryptocurrency to help secure a proof-of-stake network. Rewards are typically funded by protocol issuance and transaction fees and are distributed in proportion to the amount staked and the validator's correct, online participation in consensus. They create the economic incentive that aligns validator behaviour with network securit
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:economic-mechanism
hasPart:
  - urn:ngm:class:block-reward
  - urn:ngm:class:transaction-fee
requires:
  - urn:ngm:class:slashing
enables:
  - urn:ngm:class:yield-generation
  - urn:ngm:class:liquid-staking
dependsOn:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:validator-node
uses:
  - urn:ngm:class:staking
  - urn:ngm:class:token-economics
supports:
  - urn:ngm:class:economic-mechanism
partOf:
  - urn:ngm:class:proof-of-stake
relatedTo:
  - urn:ngm:class:delegated-proof-of-stake
  - urn:ngm:class:inflation
  - urn:ngm:class:cryptocurrency
---

# Staking Reward

A staking reward is the compensation paid to participants who lock cryptocurrency to help secure a proof-of-stake network. Rewards are typically funded by protocol issuance and transaction fees and are distributed in proportion to the amount staked and the validator's correct, online participation in consensus. They create the economic incentive that aligns validator behaviour with network security and liveness.
