---
okf_version: "0.2"
type: Class
title: BOLT11
resource: urn:ngm:class:bolt-11
domain: blockchain
description: BOLT11 is the Lightning Network specification for the invoice format used to request a single payment. It encodes payment amount, payment hash, description, expiry, and optional routing hints into a bech32-encoded string that the payer scans or pastes to initiate an off-chain payment.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bolt
requires:
  - urn:ngm:class:bolt
  - urn:ngm:class:lightning-network
  - urn:ngm:class:payment-preimage
enables:
  - urn:ngm:class:lightning
  - urn:ngm:class:micropayment
dependsOn:
  - urn:ngm:class:payment-channel
  - urn:ngm:class:hash-time-locked-contract
  - urn:ngm:class:bitcoin
implements:
  - urn:ngm:class:payment-request
contrastsWith:
  - urn:ngm:class:bolt12-offers
  - urn:ngm:class:on-chain-transaction
bridgesTo:
  - urn:ngm:class:finance
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:bolt12-offers
uses:
  - urn:ngm:class:secp256k1
  - urn:ngm:class:sha-256
supports:
  - urn:ngm:class:point-of-sale
  - urn:ngm:class:qr-code
standardizedBy:
  - urn:ngm:class:lightning-network-specification
partOf:
  - urn:ngm:class:lightning-network
---

# BOLT11

BOLT11 is the Lightning Network specification for the invoice format used to request a single payment. It encodes payment amount, payment hash, description, expiry, and optional routing hints into a bech32-encoded string that the payer scans or pastes to initiate an off-chain payment.
