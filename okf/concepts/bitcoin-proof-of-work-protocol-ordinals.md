---
okf_version: "0.2"
type: Class
title: Bitcoin Ordinals
resource: urn:ngm:class:bitcoin-proof-of-work-protocol-ordinals
domain: blockchain
description: Bitcoin Ordinals is a numbering scheme and inscription protocol that assigns a unique serial number to every individual satoshi on the Bitcoin network based on the order of its mining, enabling arbitrary content — text, images, code — to be embedded directly into Bitcoin transactions via the witness data introduced by SegWit and Taproot. Each inscription is permanently stored on-chain without requ
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-network
hasPart:
  - urn:ngm:class:inscription
  - urn:ngm:class:brc-20
  - urn:ngm:class:satoshi
requires:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-core
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:witness-data
enables:
  - urn:ngm:class:digital-ownership
  - urn:ngm:class:on-chain-storage
  - urn:ngm:class:tokenization
contrastsWith:
  - urn:ngm:class:nft
  - urn:ngm:class:erc-721-standard
  - urn:ngm:class:smart-contract
bridgesTo:
  - urn:ngm:class:metaverse
  - urn:ngm:class:digital-collectible
uses:
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:taproot
  - urn:ngm:class:seg-wit
  - urn:ngm:class:utxo
partOf:
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:digital-art
  - urn:ngm:class:digital-asset
  - urn:ngm:class:transaction-fee
  - urn:ngm:class:mining
---

# Bitcoin Ordinals

Bitcoin Ordinals is a numbering scheme and inscription protocol that assigns a unique serial number to every individual satoshi on the Bitcoin network based on the order of its mining, enabling arbitrary content — text, images, code — to be embedded directly into Bitcoin transactions via the witness data introduced by SegWit and Taproot. Each inscription is permanently stored on-chain without requiring a separate token contract, making it a native non-fungible artefact within the Bitcoin base layer. The protocol was introduced by Casey Rodarmor in January 2023.
