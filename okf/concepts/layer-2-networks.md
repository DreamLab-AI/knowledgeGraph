---
okf_version: "0.2"
type: Class
title: Layer 2 Networks
resource: urn:ngm:class:layer-2-networks
domain: blockchain
description: Layer 2 Networks are secondary protocols constructed atop a base blockchain (Layer 1) that execute transactions off the main chain, batching or compressing them before posting commitments back to Layer 1 for final settlement and security. They address the fundamental scalability trilemma by separating execution from consensus, enabling higher throughput and lower fees without compromising the dece
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
hasPart:
  - urn:ngm:class:rollup
  - urn:ngm:class:state-channel
  - urn:ngm:class:sidechain
  - urn:ngm:class:state-channel
  - urn:ngm:class:sidechain
  - urn:ngm:class:validium
requires:
  - urn:ngm:class:layer-1
  - urn:ngm:class:data-availability
  - urn:ngm:class:smart-contracts
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:micropayments
  - urn:ngm:class:de-fi
implements:
  - urn:ngm:class:optimistic-rollup
  - urn:ngm:class:zk-rollup
contrastsWith:
  - urn:ngm:class:layer-1
  - urn:ngm:class:sharding
  - urn:ngm:class:plasma
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:payment-infrastructure
uses:
  - urn:ngm:class:cryptographic-proofs
  - urn:ngm:class:fraud-proof
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:fraud-proof
  - urn:ngm:class:merkle-tree
partOf:
  - urn:ngm:class:layer-1
relatedTo:
  - urn:ngm:class:ethereum
  - urn:ngm:class:bitcoin-proof-of-work-protocol-lightning-network
  - urn:ngm:class:sequencer
  - urn:ngm:class:blockchain-interoperability
---

# Layer 2 Networks

Layer 2 Networks are secondary protocols constructed atop a base blockchain (Layer 1) that execute transactions off the main chain, batching or compressing them before posting commitments back to Layer 1 for final settlement and security. They address the fundamental scalability trilemma by separating execution from consensus, enabling higher throughput and lower fees without compromising the decentralisation or security guarantees of the underlying chain. Primary architectural families include optimistic rollups, zero-knowledge rollups, state channels, and sidechains, each making different trade-offs between latency, data availability, and trust assumptions. Settlement finality and fraud or validity proof mechanisms determine the trust model and the withdrawal period users must endure before funds are considered unconditionally settled.
