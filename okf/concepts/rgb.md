---
okf_version: "0.2"
type: Class
title: RGB
resource: urn:ngm:class:rgb
domain: blockchain
description: A protocol for issuing and transferring assets and running smart contracts on Bitcoin using client-side validation and single-use seals anchored to the chain.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:bitcoin-proof-of-work-protocol
requires:
  - urn:ngm:class:client-side-validation
  - urn:ngm:class:utxo
enables:
  - urn:ngm:class:lightning-network
bridgesTo:
  - urn:ngm:class:smart-contract
---

# RGB

A protocol for issuing and transferring assets and running smart contracts on Bitcoin using client-side validation and single-use seals anchored to the chain.
