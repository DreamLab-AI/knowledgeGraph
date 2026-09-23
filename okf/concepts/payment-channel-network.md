---
okf_version: "0.2"
type: Class
title: Payment Channel Network
resource: urn:ngm:class:payment-channel-network
domain: blockchain
description: A Payment Channel Network is a layer-2 scaling architecture in which participants open bilateral payment channels and route payments across a graph of connected channels without settling each transaction on the underlying blockchain. Funds are locked in multisignature channels, and balances update off-chain through signed state, with only channel opening and closing recorded on-chain. This enables
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:network-component
hasPart:
  - urn:ngm:class:payment-channel
  - urn:ngm:class:hash-time-locked-contract
  - urn:ngm:class:onion-routing
requires:
  - urn:ngm:class:multisignature-wallets
  - urn:ngm:class:smart-contract
  - urn:ngm:class:timelock
enables:
  - urn:ngm:class:micropayment
  - urn:ngm:class:streaming-payments
  - urn:ngm:class:atomic-swap
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:digital-signature
implements:
  - urn:ngm:class:layer-2-protocol
  - urn:ngm:class:state-channel
contrastsWith:
  - urn:ngm:class:rollup
  - urn:ngm:class:sidechain
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:finance
uses:
  - urn:ngm:class:source-routing
  - urn:ngm:class:gossip-protocol
relatedTo:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:raiden-network
  - urn:ngm:class:liquidity-management
---

# Payment Channel Network

A Payment Channel Network is a layer-2 scaling architecture in which participants open bilateral payment channels and route payments across a graph of connected channels without settling each transaction on the underlying blockchain. Funds are locked in multisignature channels, and balances update off-chain through signed state, with only channel opening and closing recorded on-chain. This enables high-throughput, low-fee, near-instant payments while inheriting base-layer security.
