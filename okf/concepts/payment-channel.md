---
okf_version: "0.2"
type: Class
title: Payment Channel
resource: urn:ngm:class:payment-channel
domain: blockchain
description: A payment channel is a cryptographic construct that allows two or more parties to conduct multiple off-chain transactions by exchanging signed commitment messages, with only the channel-opening and channel-closing states recorded on a base-layer blockchain. Channels are secured by multisignature scripts, time-locked contracts, and mutual revocation mechanisms that ensure neither party can unilater
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:off-chain-scaling
hasPart:
  - urn:ngm:class:revocation-mechanism
  - urn:ngm:class:commitment-transaction
  - urn:ngm:class:funding-transaction
requires:
  - urn:ngm:class:multisignature
  - urn:ngm:class:blockchain
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:micropayment
  - urn:ngm:class:streaming-payments
  - urn:ngm:class:payment-routing
  - urn:ngm:class:streaming-payment
dependsOn:
  - urn:ngm:class:on-chain-settlement
  - urn:ngm:class:cryptographic-hash-function
implements:
  - urn:ngm:class:off-chain-scaling
contrastsWith:
  - urn:ngm:class:on-chain-transaction
  - urn:ngm:class:rollup
bridgesTo:
  - urn:ngm:class:machine-economy
  - urn:ngm:class:iot-payments
uses:
  - urn:ngm:class:hash-time-locked-contract
  - urn:ngm:class:smart-contract
  - urn:ngm:class:timelock
supports:
  - urn:ngm:class:de-fi
  - urn:ngm:class:peer-to-peer-network
partOf:
  - urn:ngm:class:layer-2-solutions
  - urn:ngm:class:lightning-network
relatedTo:
  - urn:ngm:class:settlement
  - urn:ngm:class:state-channel
  - urn:ngm:class:channel-factory
  - urn:ngm:class:atomic-swap
---

# Payment Channel

A payment channel is a cryptographic construct that allows two or more parties to conduct multiple off-chain transactions by exchanging signed commitment messages, with only the channel-opening and channel-closing states recorded on a base-layer blockchain. Channels are secured by multisignature scripts, time-locked contracts, and mutual revocation mechanisms that ensure neither party can unilaterally broadcast a superseded state without penalty. By batching an unbounded number of value transfers into two on-chain transactions, payment channels achieve high throughput and negligible per-payment fees while inheriting the settlement finality and trustlessness of the underlying blockchain. They form the foundational primitive of routed payment networks such as the Lightning Network and of generalised state-channel protocols.
