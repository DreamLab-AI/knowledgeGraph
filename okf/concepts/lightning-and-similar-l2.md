---
okf_version: "0.2"
type: Class
title: Lightning and Similar L2
resource: urn:ngm:class:lightning-and-similar-l2
domain: blockchain
description: Off-chain payment channel networks and related Layer-2 scaling protocols built atop base-layer blockchains, enabling high-throughput, low-latency micropayments without recording every transaction on-chain. The Lightning Network, state channels, and analogous protocols (Ark, Liquid, Fedimint, Cashu) route value through cryptographically secured payment channels, dramatically improving transaction t
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:layer2
hasPart:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:payment-channels
  - urn:ngm:class:hash-time-locked-contract
  - urn:ngm:class:watchtower
requires:
  - urn:ngm:class:blockchain-protocol
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:multi-signature
  - urn:ngm:class:onion-routing
enables:
  - urn:ngm:class:micropayments
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:streaming-payments
dependsOn:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:utxo
implements:
  - urn:ngm:class:bolt
  - urn:ngm:class:state-channel
contrastsWith:
  - urn:ngm:class:rollup
  - urn:ngm:class:sidechain
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:smart-contract
supports:
  - urn:ngm:class:x402-and-l402-payment-protocols
relatedTo:
  - urn:ngm:class:privacy
  - urn:ngm:class:liquidity-pool
---

# Lightning and Similar L2

Off-chain payment channel networks and related Layer-2 scaling protocols built atop base-layer blockchains, enabling high-throughput, low-latency micropayments without recording every transaction on-chain. The Lightning Network, state channels, and analogous protocols (Ark, Liquid, Fedimint, Cashu) route value through cryptographically secured payment channels, dramatically improving transaction throughput and cost-efficiency for Bitcoin and similar networks.
