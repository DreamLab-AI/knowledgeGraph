---
okf_version: "0.2"
type: Class
title: Layer2
resource: urn:ngm:class:layer2
domain: blockchain
description: Secondary protocols built atop Layer 1 blockchains that process transactions off-chain or in parallel batches, then periodically commit aggregated state changes to the main chain. Layer 2 solutions achieve dramatically higher throughput, lower fees, and improved user experience while inheriting the security guarantees of the underlying base layer. Principal approaches include rollups (optimistic a
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:smart-contract-platform
hasPart:
  - urn:ngm:class:state-channel
  - urn:ngm:class:sidechain
  - urn:ngm:class:lightning-network
  - urn:ngm:class:lightning-and-similar-l2
  - urn:ngm:class:layer2-scaling
enables:
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:blockchain-interoperability
uses:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:smart-contract
  - urn:ngm:class:cross-chain-bridge
relatedTo:
  - urn:ngm:class:cross-chain-messaging
  - urn:ngm:class:transaction-confirmation
---

# Layer2

Secondary protocols built atop Layer 1 blockchains that process transactions off-chain or in parallel batches, then periodically commit aggregated state changes to the main chain. Layer 2 solutions achieve dramatically higher throughput, lower fees, and improved user experience while inheriting the security guarantees of the underlying base layer. Principal approaches include rollups (optimistic and ZK), state channels, and sidechains.
