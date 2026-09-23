---
okf_version: "0.2"
type: Class
title: Streaming Payment
resource: urn:ngm:class:streaming-payment
domain: blockchain
description: A Streaming Payment is a continuous, real-time value transfer mechanism enabled by programmable money protocols — particularly Layer 2 payment channel networks such as the Bitcoin Lightning Network — whereby funds flow incrementally over time in proportion to ongoing service consumption rather than in discrete lump-sum transactions. Streaming payments enable pay-per-second, pay-per-byte, or pay-pe
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:bc-defi-and-economics
enables:
  - urn:ngm:class:pay-per-use
  - urn:ngm:class:web-monetization
  - urn:ngm:class:machine-to-machine-payments
  - urn:ngm:class:real-time-economy
  - urn:ngm:class:machine-to-machine-payments
dependsOn:
  - urn:ngm:class:payment-channel
  - urn:ngm:class:lightning-network
  - urn:ngm:class:smart-contract
contrastsWith:
  - urn:ngm:class:batch-payment
  - urn:ngm:class:subscription-model
bridgesTo:
  - urn:ngm:class:de-fi
uses:
  - urn:ngm:class:hash-time-locked-contract
  - urn:ngm:class:programmable-money
supports:
  - urn:ngm:class:content-monetisation
  - urn:ngm:class:api-monetisation
partOf:
  - urn:ngm:class:programmable-money
  - urn:ngm:class:micropayment
relatedTo:
  - urn:ngm:class:streaming-payments
  - urn:ngm:class:iot-payments
  - urn:ngm:class:de-fi
---

# Streaming Payment

A Streaming Payment is a continuous, real-time value transfer mechanism enabled by programmable money protocols — particularly Layer 2 payment channel networks such as the Bitcoin Lightning Network — whereby funds flow incrementally over time in proportion to ongoing service consumption rather than in discrete lump-sum transactions. Streaming payments enable pay-per-second, pay-per-byte, or pay-per-computation billing models that align payment precisely with value delivered, eliminating invoicing cycles and reducing counterparty risk. They are foundational to micropayment-based business models for media, APIs, AI inference, bandwidth, and real-time data feeds.
