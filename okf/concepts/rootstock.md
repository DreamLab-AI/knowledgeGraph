---
okf_version: "0.2"
type: Class
title: Rootstock
resource: urn:ngm:class:rootstock
domain: blockchain
description: A Bitcoin sidechain that supports Ethereum-compatible smart contracts, secured by merged mining with Bitcoin and connected through a two-way peg.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:sidechain
requires:
  - urn:ngm:class:sidechain
  - urn:ngm:class:bitcoin-proof-of-work-protocol
enables:
  - urn:ngm:class:smart-contract
bridgesTo:
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
---

# Rootstock

A Bitcoin sidechain that supports Ethereum-compatible smart contracts, secured by merged mining with Bitcoin and connected through a two-way peg.
