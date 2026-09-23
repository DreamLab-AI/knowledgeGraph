---
okf_version: "0.2"
type: Class
title: Lightning Network Layer
resource: urn:ngm:class:lightning-network-layer
domain: blockchain
description: The Lightning Network Layer is a second-layer stratum that enables fast, low-cost payments off the base settlement ledger through bidirectional payment channels. It sits above the Settlement Layer, on which it anchors and finally settles, and below the application and content strata that use instant payments. It contains payment channels, routing, and channel-state management.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:settlement-layer
enables:
  - urn:ngm:class:application-layer
  - urn:ngm:class:content-layer
bridgesTo:
  - urn:ngm:class:payment-channel
  - urn:ngm:class:hash-time-locked-contract
---

# Lightning Network Layer

The Lightning Network Layer is a second-layer stratum that enables fast, low-cost payments off the base settlement ledger through bidirectional payment channels. It sits above the Settlement Layer, on which it anchors and finally settles, and below the application and content strata that use instant payments. It contains payment channels, routing, and channel-state management.
