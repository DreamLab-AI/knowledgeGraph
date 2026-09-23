---
okf_version: "0.2"
type: Class
title: Emission Schedule
resource: urn:ngm:class:emission-schedule
domain: blockchain
description: An Emission Schedule is the predetermined, protocol-encoded timeline that specifies the rate at which new tokens are minted and distributed to participants over the lifetime of a blockchain network. It governs how the total supply of a token expands from genesis toward any eventual supply cap or steady-state inflation rate, directly shaping the economic incentives for validators, miners, and stake
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-defi-and-economics
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:economic-mechanism
hasPart:
  - urn:ngm:class:block-reward
  - urn:ngm:class:halving
requires:
  - urn:ngm:class:total-supply
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:incentive-alignment
  - urn:ngm:class:validator-node
relatedTo:
  - urn:ngm:class:inflation
  - urn:ngm:class:deflationary-token
  - urn:ngm:class:monetary-policy-implementation
  - urn:ngm:class:tokenomics
  - urn:ngm:class:circulating-supply
---

# Emission Schedule

An Emission Schedule is the predetermined, protocol-encoded timeline that specifies the rate at which new tokens are minted and distributed to participants over the lifetime of a blockchain network. It governs how the total supply of a token expands from genesis toward any eventual supply cap or steady-state inflation rate, directly shaping the economic incentives for validators, miners, and stakers. Well-designed emission schedules balance early bootstrapping of network security with long-term sustainability once adoption is established.
