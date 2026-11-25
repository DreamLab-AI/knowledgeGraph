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
  - urn:ngm:class:multisignature
  - urn:ngm:class:hash-time-locked-contract
enables:
  - urn:ngm:class:bolt
  - urn:ngm:class:micropayment
  - urn:ngm:class:instant-payment
  - urn:ngm:class:streaming-payment
implements:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:payment-routing
contrastsWith:
  - urn:ngm:class:on-chain-transaction
bridgesTo:
  - urn:ngm:class:decentralised-finance
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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Lightning

Lightning is a layer-two payment protocol built on Bitcoin that uses payment channels to enable fast, low-cost transactions off the main chain. It settles to the Bitcoin blockchain.
