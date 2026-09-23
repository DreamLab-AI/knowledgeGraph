---
okf_version: "0.2"
type: Class
title: Layer 2 Solutions
resource: urn:ngm:class:layer-2-solutions
domain: blockchain
description: Layer 2 solutions are protocols and systems built atop a base blockchain (layer 1) that handle transactions off the main chain to increase throughput, reduce latency, and lower transaction costs, while periodically settling finality back to the underlying layer 1 for security. The principal layer 2 paradigms include optimistic rollups, zero-knowledge rollups, state channels, and sidechains, each o
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:blockchain-scalability
hasPart:
  - urn:ngm:class:optimistic-rollup
  - urn:ngm:class:zk-rollup
  - urn:ngm:class:state-channel
  - urn:ngm:class:sidechain
  - urn:ngm:class:payment-channel
requires:
  - urn:ngm:class:layer-1-blockchain
  - urn:ngm:class:data-availability
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:micropayment
  - urn:ngm:class:de-fi
dependsOn:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:cryptographic-commitment
contrastsWith:
  - urn:ngm:class:sharding
bridgesTo:
  - urn:ngm:class:cross-chain-interoperability
uses:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:fraud-proof
  - urn:ngm:class:sequencer
  - urn:ngm:class:smart-contract
partOf:
  - urn:ngm:class:blockchain-scalability
relatedTo:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:gas-fee-market
  - urn:ngm:class:lightning-network
  - urn:ngm:class:proto-danksharding
---

# Layer 2 Solutions

Layer 2 solutions are protocols and systems built atop a base blockchain (layer 1) that handle transactions off the main chain to increase throughput, reduce latency, and lower transaction costs, while periodically settling finality back to the underlying layer 1 for security. The principal layer 2 paradigms include optimistic rollups, zero-knowledge rollups, state channels, and sidechains, each offering distinct trust and performance tradeoffs.
