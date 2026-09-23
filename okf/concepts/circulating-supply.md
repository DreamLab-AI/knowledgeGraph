---
okf_version: "0.2"
type: Class
title: Circulating Supply
resource: urn:ngm:class:circulating-supply
domain: blockchain
description: Circulating Supply is the quantity of a blockchain token that is publicly available and actively tradeable in the market at a given point in time—excluding tokens locked in smart contracts, held in treasury reserves, vested to team members, or burned. It serves as the operative supply figure for computing market capitalisation and price-to-earnings metrics, and changes continuously as new tokens a
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-defi-and-economics
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:economic-mechanism
requires:
  - urn:ngm:class:emission-schedule
  - urn:ngm:class:blockchain-protocol
enables:
  - urn:ngm:class:burning-mechanism
  - urn:ngm:class:blockchain-economics
contrastsWith:
  - urn:ngm:class:inflationary-token
  - urn:ngm:class:deflationary-token
relatedTo:
  - urn:ngm:class:total-supply
  - urn:ngm:class:fixed-supply-token
  - urn:ngm:class:halving
  - urn:ngm:class:tokenomics
  - urn:ngm:class:token-economics
  - urn:ngm:class:market-capitalization
---

# Circulating Supply

Circulating Supply is the quantity of a blockchain token that is publicly available and actively tradeable in the market at a given point in time—excluding tokens locked in smart contracts, held in treasury reserves, vested to team members, or burned. It serves as the operative supply figure for computing market capitalisation and price-to-earnings metrics, and changes continuously as new tokens are emitted via block rewards and locked tokens are released according to vesting schedules.
