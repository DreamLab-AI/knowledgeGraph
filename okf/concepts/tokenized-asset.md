---
okf_version: "0.2"
type: Class
title: Tokenized Asset
resource: urn:ngm:class:tokenized-asset
domain: blockchain
description: A tokenized asset is a representation of ownership or economic rights in a real-world or digital asset recorded as a blockchain token. The token acts as a programmable, transferable claim whose issuance, transfer, and settlement are governed by smart contracts, enabling fractional ownership, faster settlement, and broader access. Underlying assets range from securities, real estate, and commoditie
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:asset-tokenisation
requires:
  - urn:ngm:class:blockchain
enables:
  - urn:ngm:class:fractional-ownership
dependsOn:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:blockchain
implements:
  - urn:ngm:class:erc-721-standard
contrastsWith:
  - urn:ngm:class:fungible-token
bridgesTo:
  - urn:ngm:class:real-world-asset
  - urn:ngm:class:non-fungible-token
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:erc-20-token-standard
supports:
  - urn:ngm:class:fractional-ownership
  - urn:ngm:class:digital-asset
partOf:
  - urn:ngm:class:asset-tokenisation
relatedTo:
  - urn:ngm:class:tokenization
  - urn:ngm:class:digital-asset
  - urn:ngm:class:security-token
  - urn:ngm:class:stablecoin
---

# Tokenized Asset

A tokenized asset is a representation of ownership or economic rights in a real-world or digital asset recorded as a blockchain token. The token acts as a programmable, transferable claim whose issuance, transfer, and settlement are governed by smart contracts, enabling fractional ownership, faster settlement, and broader access. Underlying assets range from securities, real estate, and commodities to art and intellectual property.
