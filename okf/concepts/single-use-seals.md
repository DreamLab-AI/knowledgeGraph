---
okf_version: "0.2"
type: Class
title: Single Use Seals
resource: urn:ngm:class:single-use-seals
domain: blockchain
description: "A single-use seal is a cryptographic primitive, proposed by Peter Todd in 2016, that is a uniquely identifiable object which can be closed over ('sealed to') a message exactly once, producing a publicly verifiable proof that the seal was closed over that specific message and no other. The canonical implementation uses a Bitcoin UTXO as the seal: because the consensus rules permit each UTXO to be s"
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:cryptographic-commitment
enables:
  - urn:ngm:class:client-side-validation
  - urn:ngm:class:rgb-protocol
  - urn:ngm:class:block-trails
dependsOn:
  - urn:ngm:class:proof-of-publication
  - urn:ngm:class:double-spending
bridgesTo:
  - urn:ngm:class:taproot
  - urn:ngm:class:schnorr-signature
uses:
  - urn:ngm:class:utxo-model
  - urn:ngm:class:bitcoin-proof-of-work-protocol-network
  - urn:ngm:class:cryptographic-commitment
relatedTo:
  - urn:ngm:class:provenance-tracking
  - urn:ngm:class:taproot-assets
  - urn:ngm:class:rgb-and-client-side-validation
  - urn:ngm:class:lightning-network
---

# Single Use Seals

A single-use seal is a cryptographic primitive, proposed by Peter Todd in 2016, that is a uniquely identifiable object which can be closed over ('sealed to') a message exactly once, producing a publicly verifiable proof that the seal was closed over that specific message and no other. The canonical implementation uses a Bitcoin UTXO as the seal: because the consensus rules permit each UTXO to be spent only once, the transaction that spends it can commit to exactly one message, giving a tamper-evident, non-equivocable 'open once' guarantee. Single-use seals, combined with proof of publication, form the foundation of client-side validation and underpin Bitcoin smart-contract systems such as RGB and primitives such as Block Trails.
