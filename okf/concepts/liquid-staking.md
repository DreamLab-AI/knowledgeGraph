---
okf_version: "0.2"
type: Class
title: Liquid Staking
resource: urn:ngm:class:liquid-staking
domain: blockchain
description: Liquid staking is a mechanism that allows holders of proof-of-stake assets to stake their tokens while receiving a transferable derivative token representing the staked position and its accruing rewards. This derivative can be traded, lent or used as collateral in decentralised finance, unlocking liquidity that traditional staking locks up. It thereby lets participants earn staking rewards without
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:staking
requires:
  - urn:ngm:class:validator-node
  - urn:ngm:class:proof-of-stake
enables:
  - urn:ngm:class:yield-generation
  - urn:ngm:class:liquidity-pool
dependsOn:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:de-fi-protocol
implements:
  - urn:ngm:class:governance-token
contrastsWith:
  - urn:ngm:class:slashing
uses:
  - urn:ngm:class:staking
  - urn:ngm:class:smart-contract
supports:
  - urn:ngm:class:de-fi
  - urn:ngm:class:tokenization
relatedTo:
  - urn:ngm:class:lido
  - urn:ngm:class:ethereum
---

# Liquid Staking

Liquid staking is a mechanism that allows holders of proof-of-stake assets to stake their tokens while receiving a transferable derivative token representing the staked position and its accruing rewards. This derivative can be traded, lent or used as collateral in decentralised finance, unlocking liquidity that traditional staking locks up. It thereby lets participants earn staking rewards without sacrificing the capital efficiency of liquid assets.
