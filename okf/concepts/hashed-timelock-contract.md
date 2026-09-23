---
okf_version: "0.2"
type: Class
title: Hashed Timelock Contract
resource: urn:ngm:class:hashed-timelock-contract
domain: blockchain
description: A Hashed Timelock Contract (HTLC) is a conditional payment construct that locks funds until either a recipient reveals a preimage matching a published hash, or a timeout elapses and the funds revert to the sender. By combining a hashlock with a timelock, it enables trustless, atomic transfers without a central intermediary. HTLCs are the foundational primitive behind Lightning Network payment rout
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:lightning-network
requires:
  - urn:ngm:class:hash-function
  - urn:ngm:class:smart-contract
enables:
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:payment-channel
dependsOn:
  - urn:ngm:class:hash-function
implements:
  - urn:ngm:class:smart-contract
contrastsWith:
  - urn:ngm:class:bitcoin
bridgesTo:
  - urn:ngm:class:cross-chain-interoperability
uses:
  - urn:ngm:class:hash-function
supports:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:core-lightning
partOf:
  - urn:ngm:class:lightning-network
relatedTo:
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:payment-channel
  - urn:ngm:class:cross-chain-interoperability
---

# Hashed Timelock Contract

A Hashed Timelock Contract (HTLC) is a conditional payment construct that locks funds until either a recipient reveals a preimage matching a published hash, or a timeout elapses and the funds revert to the sender. By combining a hashlock with a timelock, it enables trustless, atomic transfers without a central intermediary. HTLCs are the foundational primitive behind Lightning Network payment routing and cross-chain atomic swaps.
