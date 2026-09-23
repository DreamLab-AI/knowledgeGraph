---
okf_version: "0.2"
type: Class
title: Inscription
resource: urn:ngm:class:inscription
domain: blockchain
description: An inscription is arbitrary data, such as an image, text or document, written directly onto an individual satoshi on the Bitcoin blockchain so that the content is stored entirely on-chain. Enabled by the Taproot upgrade and the Ordinals numbering scheme, inscriptions embed their payload in the witness portion of a transaction, making each inscribed satoshi a verifiable, transferable digital artefa
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:ordinals
hasPart:
  - urn:ngm:class:metadata
  - urn:ngm:class:digital-asset
requires:
  - urn:ngm:class:satoshi
  - urn:ngm:class:blockchain
enables:
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:digital-art
dependsOn:
  - urn:ngm:class:bitcoin
uses:
  - urn:ngm:class:taproot
  - urn:ngm:class:data-storage
  - urn:ngm:class:bitcoin
supports:
  - urn:ngm:class:provenance
  - urn:ngm:class:nft-marketplace
partOf:
  - urn:ngm:class:ordinals
relatedTo:
  - urn:ngm:class:utility-token
  - urn:ngm:class:nft
  - urn:ngm:class:digital-art
---

# Inscription

An inscription is arbitrary data, such as an image, text or document, written directly onto an individual satoshi on the Bitcoin blockchain so that the content is stored entirely on-chain. Enabled by the Taproot upgrade and the Ordinals numbering scheme, inscriptions embed their payload in the witness portion of a transaction, making each inscribed satoshi a verifiable, transferable digital artefact. They underpin Bitcoin-native non-fungible assets and digital collectibles without relying on external metadata storage.
