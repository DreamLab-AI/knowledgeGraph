---
okf_version: "0.2"
type: Class
title: Simplified Payment Verification
resource: urn:ngm:class:simplified-payment-verification
domain: blockchain
description: Simplified Payment Verification (SPV) is a technique that lets a lightweight client confirm that a transaction is included in a blockchain without downloading the entire chain, by holding only block headers and requesting a Merkle proof linking the transaction to a header's Merkle root. Described in the original Bitcoin design, it trades the full validation guarantees of a complete node for drasti
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:bc-protocol-and-consensus
enables:
  - urn:ngm:class:light-node
  - urn:ngm:class:scalability
dependsOn:
  - urn:ngm:class:block-header
  - urn:ngm:class:merkle-proof
implements:
  - urn:ngm:class:light-client
contrastsWith:
  - urn:ngm:class:full-node
uses:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:merkle-root
supports:
  - urn:ngm:class:bitcoin
partOf:
  - urn:ngm:class:blockchain-node
relatedTo:
  - urn:ngm:class:utxo-model
  - urn:ngm:class:bloom-filter
---

# Simplified Payment Verification

Simplified Payment Verification (SPV) is a technique that lets a lightweight client confirm that a transaction is included in a blockchain without downloading the entire chain, by holding only block headers and requesting a Merkle proof linking the transaction to a header's Merkle root. Described in the original Bitcoin design, it trades the full validation guarantees of a complete node for drastically reduced storage and bandwidth, relying on the proof-of-work in headers and the honest-majority assumption. It is what makes mobile and embedded cryptocurrency wallets practical.
