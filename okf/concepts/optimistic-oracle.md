---
okf_version: "0.2"
type: Class
title: Optimistic Oracle
resource: urn:ngm:class:optimistic-oracle
domain: blockchain
description: An oracle design in which proposed off-chain data is accepted by default and only verified on-chain if a participant disputes it within a challenge window. It reduces routine reporting costs by reserving full verification for contested values.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:price-oracle
requires:
  - urn:ngm:class:dispute-resolution
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:de-fi
bridgesTo:
  - urn:ngm:class:price-oracle
  - urn:ngm:class:chainlink
---

# Optimistic Oracle

An oracle design in which proposed off-chain data is accepted by default and only verified on-chain if a participant disputes it within a challenge window. It reduces routine reporting costs by reserving full verification for contested values.
