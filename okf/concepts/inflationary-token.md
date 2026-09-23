---
okf_version: "0.2"
type: Class
title: Inflationary Token
resource: urn:ngm:class:inflationary-token
domain: blockchain
description: An Inflationary Token is a blockchain token whose total circulating supply increases over time through a programmatic emission schedule, typically as a mechanism to reward network participants—validators, miners, stakers, or liquidity providers—and incentivise ongoing network participation. Unlike fixed-supply or deflationary tokens, inflationary tokens accept dilution of existing holders as the c
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-token-and-asset
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:economic-mechanism
  - urn:ngm:class:economic-mechanism
requires:
  - urn:ngm:class:blockchain
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:mining
  - urn:ngm:class:governance-token
contrastsWith:
  - urn:ngm:class:deflationary-token
  - urn:ngm:class:stablecoin-token
uses:
  - urn:ngm:class:tokenomics
  - urn:ngm:class:token-economics
relatedTo:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:miner
  - urn:ngm:class:token
  - urn:ngm:class:yield-farming
---

# Inflationary Token

An Inflationary Token is a blockchain token whose total circulating supply increases over time through a programmatic emission schedule, typically as a mechanism to reward network participants—validators, miners, stakers, or liquidity providers—and incentivise ongoing network participation. Unlike fixed-supply or deflationary tokens, inflationary tokens accept dilution of existing holders as the cost of sustaining economic participation incentives. Inflation rates can be fixed (constant annual issuance), variable (decreasing block rewards as in Bitcoin's halving), or algorithmically adjusted in response to network conditions such as staking participation rates. Design of the emission schedule is a critical tokenomics decision balancing security, participation, and value preservation.
