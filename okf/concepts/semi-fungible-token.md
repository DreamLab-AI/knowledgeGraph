---
okf_version: "0.2"
type: Class
title: Semi-Fungible Token
resource: urn:ngm:class:semi-fungible-token
domain: blockchain
description: "A blockchain token standard that combines fungible and non-fungible properties, typically implemented under ERC-1155. Semi-fungible tokens represent classes of interchangeable assets (e.g. event tickets of the same tier) that may transition to uniquely non-fungible assets upon redemption or use, enabling a single contract to manage both fungible currencies and unique collectibles with reduced gas "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:bc-token-and-asset
  - urn:ngm:class:token
enables:
  - urn:ngm:class:digital-asset-trading
  - urn:ngm:class:asset-tokenisation
uses:
  - urn:ngm:class:erc-1155
  - urn:ngm:class:smart-contract
  - urn:ngm:class:erc1155-standard
relatedTo:
  - urn:ngm:class:fungible-token
  - urn:ngm:class:non-fungible-token-nft
  - urn:ngm:class:security-token
  - urn:ngm:class:nft-marketplace
  - urn:ngm:class:digital-asset
---

# Semi-Fungible Token

A blockchain token standard that combines fungible and non-fungible properties, typically implemented under ERC-1155. Semi-fungible tokens represent classes of interchangeable assets (e.g. event tickets of the same tier) that may transition to uniquely non-fungible assets upon redemption or use, enabling a single contract to manage both fungible currencies and unique collectibles with reduced gas costs.
