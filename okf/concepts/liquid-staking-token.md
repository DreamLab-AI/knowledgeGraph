---
okf_version: "0.2"
type: Class
title: Liquid Staking Token
resource: urn:ngm:class:liquid-staking-token
domain: blockchain
description: A liquid staking token (LST) is a transferable token issued to a user in exchange for assets staked through a liquid-staking protocol, representing a claim on the underlying stake plus accrued rewards. It frees staked capital from the usual lock-up by remaining tradable and composable across decentralised-finance applications while the principal continues to secure the network. The token's value t
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:liquid-staking
hasPart:
  - urn:ngm:class:reward-distribution
requires:
  - urn:ngm:class:staking
  - urn:ngm:class:validator-node
enables:
  - urn:ngm:class:liquidity
  - urn:ngm:class:de-fi
dependsOn:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:validator-node
implements:
  - urn:ngm:class:liquid-staking
  - urn:ngm:class:tokenomics
contrastsWith:
  - urn:ngm:class:wrapped-token
bridgesTo:
  - urn:ngm:class:tokenomics
uses:
  - urn:ngm:class:minting
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:minting
supports:
  - urn:ngm:class:lido
  - urn:ngm:class:ethereum
partOf:
  - urn:ngm:class:liquid-staking
  - urn:ngm:class:staking
relatedTo:
  - urn:ngm:class:reward-distribution
  - urn:ngm:class:slashing
  - urn:ngm:class:blockchain-validator
---

# Liquid Staking Token

A liquid staking token (LST) is a transferable token issued to a user in exchange for assets staked through a liquid-staking protocol, representing a claim on the underlying stake plus accrued rewards. It frees staked capital from the usual lock-up by remaining tradable and composable across decentralised-finance applications while the principal continues to secure the network. The token's value tracks the staked position, accruing yield either through a rising exchange rate or a growing balance.
