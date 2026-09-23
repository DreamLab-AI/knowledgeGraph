---
okf_version: "0.2"
type: Class
title: Ordinals
resource: urn:ngm:class:ordinals
domain: blockchain
description: A scheme for numbering individual satoshis by order of issuance and transfer, allowing arbitrary data to be inscribed onto specific satoshis on the Bitcoin blockchain via the witness field of Taproot transactions.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:bitcoin-proof-of-work-protocol
hasPart:
  - urn:ngm:class:inscription
requires:
  - urn:ngm:class:taproot
  - urn:ngm:class:utxo
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:proof-of-work
enables:
  - urn:ngm:class:brc-20
dependsOn:
  - urn:ngm:class:seg-wit
  - urn:ngm:class:bitcoin
contrastsWith:
  - urn:ngm:class:fungible-token
bridgesTo:
  - urn:ngm:class:decentralised-storage
  - urn:ngm:class:digital-ownership
  - urn:ngm:class:bitcoin-script
uses:
  - urn:ngm:class:witness-data
  - urn:ngm:class:content-addressing
partOf:
  - urn:ngm:class:bitcoin
relatedTo:
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:on-chain-storage
  - urn:ngm:class:digital-collectible
---

# Ordinals

A scheme for numbering individual satoshis by order of issuance and transfer, allowing arbitrary data to be inscribed onto specific satoshis on the Bitcoin blockchain via the witness field of Taproot transactions.
