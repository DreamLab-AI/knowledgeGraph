---
okf_version: "0.2"
type: Class
title: BOLT
resource: urn:ngm:class:bolt
domain: blockchain
description: BOLT, the Basis of Lightning Technology, is the set of specifications that define how Lightning Network implementations interoperate. The documents cover channels, routing, and messaging.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:lightning-network
hasPart:
  - urn:ngm:class:bolt-11
  - urn:ngm:class:bolt12-offers
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:onion-routing
requires:
  - urn:ngm:class:lightning
  - urn:ngm:class:payment-channel
  - urn:ngm:class:bitcoin
  - urn:ngm:class:hashed-timelock-contract
enables:
  - urn:ngm:class:bolt-11
  - urn:ngm:class:bolt12-offers
  - urn:ngm:class:micropayment
  - urn:ngm:class:peer-to-peer-payment
implements:
  - urn:ngm:class:payment-channel-network
  - urn:ngm:class:layer-2-protocol
contrastsWith:
  - urn:ngm:class:on-chain-transaction
  - urn:ngm:class:state-channel
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:payment-channel
standardizedBy:
  - urn:ngm:class:lightning-network-specification
partOf:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:invoice
---

# BOLT

BOLT, the Basis of Lightning Technology, is the set of specifications that define how Lightning Network implementations interoperate. The documents cover channels, routing, and messaging.
