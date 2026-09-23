---
okf_version: "0.2"
type: Class
title: Inflation
resource: urn:ngm:class:inflation
domain: blockchain
description: The scheduled or dynamic increase in token supply within a blockchain network, used to fund validator rewards, incentivise participation, and manage monetary policy. Inflation rate parameters are typically encoded in the protocol and may be adjusted via governance, directly affecting token holder purchasing power and long-term economic security.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:economic-mechanism
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:economic-mechanism
hasPart:
  - urn:ngm:class:emission-schedule
  - urn:ngm:class:block-reward
  - urn:ngm:class:inflation-rate-parameter
requires:
  - urn:ngm:class:minting
  - urn:ngm:class:circulating-supply
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:validator-reward
  - urn:ngm:class:staking-incentive
  - urn:ngm:class:network-security
dependsOn:
  - urn:ngm:class:supply-cap
  - urn:ngm:class:governance
contrastsWith:
  - urn:ngm:class:fixed-supply-token
  - urn:ngm:class:deflationary-token
bridgesTo:
  - urn:ngm:class:central-bank-monetary-policy
  - urn:ngm:class:consumer-price-index
uses:
  - urn:ngm:class:burning-mechanism
  - urn:ngm:class:tokenomics
partOf:
  - urn:ngm:class:token-economics
  - urn:ngm:class:monetary-policy
relatedTo:
  - urn:ngm:class:inflation-control
  - urn:ngm:class:purchasing-power
  - urn:ngm:class:token-dilution
---

# Inflation

The scheduled or dynamic increase in token supply within a blockchain network, used to fund validator rewards, incentivise participation, and manage monetary policy. Inflation rate parameters are typically encoded in the protocol and may be adjusted via governance, directly affecting token holder purchasing power and long-term economic security.
