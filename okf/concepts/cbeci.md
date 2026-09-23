---
okf_version: "0.2"
type: Class
title: CBECI
resource: urn:ngm:class:cbeci
domain: blockchain
description: The Cambridge Bitcoin Electricity Consumption Index (CBECI) is a real-time model produced by the Cambridge Centre for Alternative Finance that estimates the annualised electricity consumption and carbon footprint of the Bitcoin proof-of-work mining network. It aggregates hardware efficiency data from known ASIC models, network hash rate, and electricity price assumptions to produce lower-, central
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:benchmark-evaluation
  - urn:ngm:class:electricity-consumption
enables:
  - urn:ngm:class:carbon-accounting
  - urn:ngm:class:renewable-energy-certificates
dependsOn:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:blockchain
contrastsWith:
  - urn:ngm:class:proof-of-stake
bridgesTo:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:governance
uses:
  - urn:ngm:class:hash-rate
  - urn:ngm:class:electricity-consumption
  - urn:ngm:class:cbeci-methodology
  - urn:ngm:class:asic-hardware
  - urn:ngm:class:difficulty
  - urn:ngm:class:mining-pool
supports:
  - urn:ngm:class:bc-0482-eu-mica-regulation
  - urn:ngm:class:cryptocurrency-regulation
relatedTo:
  - urn:ngm:class:proof-of-work-energy-consumption
  - urn:ngm:class:bitcoin-proof-of-work-protocol-environmental-issues
  - urn:ngm:class:cambridge-centre-for-alternative-finance
  - urn:ngm:class:bitcoin-proof-of-work-protocol-mining
  - urn:ngm:class:carbon-footprint
  - urn:ngm:class:sustainable-bitcoin-protocol
---

# CBECI

The Cambridge Bitcoin Electricity Consumption Index (CBECI) is a real-time model produced by the Cambridge Centre for Alternative Finance that estimates the annualised electricity consumption and carbon footprint of the Bitcoin proof-of-work mining network. It aggregates hardware efficiency data from known ASIC models, network hash rate, and electricity price assumptions to produce lower-, central-, and upper-bound estimates.
