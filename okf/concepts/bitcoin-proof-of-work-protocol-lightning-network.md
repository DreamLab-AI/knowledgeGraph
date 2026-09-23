---
okf_version: "0.2"
type: Class
title: Bitcoin Lightning Network
resource: urn:ngm:class:bitcoin-proof-of-work-protocol-lightning-network
domain: blockchain
description: The Bitcoin Lightning Network is a layer-two payment protocol built on top of Bitcoin that enables fast, low-cost transactions through bidirectional payment channels. Two parties lock funds in a multisignature channel and exchange signed balance updates off-chain, settling the final state on the Bitcoin blockchain only when the channel closes. Payments can be routed across a network of connected c
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-domain
hasPart:
  - urn:ngm:class:payment-channel
  - urn:ngm:class:htlc
  - urn:ngm:class:onion-routing
  - urn:ngm:class:channel-factory
requires:
  - urn:ngm:class:bitcoin-proof-of-work-protocol
  - urn:ngm:class:multisignature
  - urn:ngm:class:segregated-witness
enables:
  - urn:ngm:class:micropayments
  - urn:ngm:class:instant-settlement
  - urn:ngm:class:streaming-payments
  - urn:ngm:class:atomic-swap
dependsOn:
  - urn:ngm:class:utxo-model
  - urn:ngm:class:channel-liquidity
implements:
  - urn:ngm:class:bolt-specifications
  - urn:ngm:class:source-routing
contrastsWith:
  - urn:ngm:class:bitcoin-proof-of-work-protocol
  - urn:ngm:class:state-channel
bridgesTo:
  - urn:ngm:class:bc-defi-and-economics
  - urn:ngm:class:liquid-network
  - urn:ngm:class:de-fi
  - urn:ngm:class:payment-systems-domain
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:elliptic-curve-cryptography
partOf:
  - urn:ngm:class:bitcoin
relatedTo:
  - urn:ngm:class:routing-algorithm
  - urn:ngm:class:watchtower-service
---

# Bitcoin Lightning Network

The Bitcoin Lightning Network is a layer-two payment protocol built on top of Bitcoin that enables fast, low-cost transactions through bidirectional payment channels. Two parties lock funds in a multisignature channel and exchange signed balance updates off-chain, settling the final state on the Bitcoin blockchain only when the channel closes. Payments can be routed across a network of connected channels, allowing transfers between parties that do not share a direct channel.
