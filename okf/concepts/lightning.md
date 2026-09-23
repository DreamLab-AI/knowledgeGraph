---
okf_version: "0.2"
type: Class
title: Lightning
resource: urn:ngm:class:lightning
domain: blockchain
description: Lightning is a layer-two payment protocol built on Bitcoin that uses payment channels to enable fast, low-cost transactions off the main chain. It settles to the Bitcoin blockchain.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:lightning-network
hasPart:
  - urn:ngm:class:payment-channel
  - urn:ngm:class:channel-factory
requires:
  - urn:ngm:class:payment-channel
  - urn:ngm:class:bitcoin-proof-of-work-protocol-network
  - urn:ngm:class:multi-signature
  - urn:ngm:class:hash-time-locked-contract
enables:
  - urn:ngm:class:bolt
  - urn:ngm:class:micropayment
  - urn:ngm:class:instant-payment
  - urn:ngm:class:streaming-payments
implements:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:payment-routing
contrastsWith:
  - urn:ngm:class:on-chain-transaction
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:layer-2-scaling
uses:
  - urn:ngm:class:onion-routing
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:gossip-protocol
standardizedBy:
  - urn:ngm:class:bolt
partOf:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:state-channel
  - urn:ngm:class:watchtower
  - urn:ngm:class:splicing
---

# Lightning

Lightning is a layer-two payment protocol built on Bitcoin that uses payment channels to enable fast, low-cost transactions off the main chain. It settles to the Bitcoin blockchain.
