---
okf_version: "0.2"
type: Class
title: Layer 2 Scaling
resource: urn:ngm:class:layer-2-scaling
domain: blockchain
description: "Layer 2 scaling refers to a category of protocols and systems built atop an existing blockchain (Layer 1) that increase transaction throughput and reduce fees by processing computation and data storage off the main chain while inheriting the security guarantees of the underlying Layer 1 through cryptographic proofs, fraud-proof mechanisms, or periodic state commitments. The Layer 2 anchors itself "
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:blockchain-scalability
hasPart:
  - urn:ngm:class:zk-rollup
  - urn:ngm:class:optimistic-rollup
  - urn:ngm:class:state-channel
  - urn:ngm:class:sidechain
  - urn:ngm:class:lightning-network
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:data-availability
  - urn:ngm:class:merkle-tree
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:cross-chain-asset-transfer
  - urn:ngm:class:micropayment
  - urn:ngm:class:gas-optimization
  - urn:ngm:class:gas-optimization
dependsOn:
  - urn:ngm:class:ethereum
  - urn:ngm:class:consensus-mechanism
contrastsWith:
  - urn:ngm:class:layer-1-blockchain
  - urn:ngm:class:sharding
bridgesTo:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:cryptographic-commitment
uses:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:fraud-proof
  - urn:ngm:class:sequencer
  - urn:ngm:class:hash-time-locked-contract
relatedTo:
  - urn:ngm:class:data-availability-sampling
  - urn:ngm:class:eip-4844
  - urn:ngm:class:bridge-protocol
---

# Layer 2 Scaling

Layer 2 scaling refers to a category of protocols and systems built atop an existing blockchain (Layer 1) that increase transaction throughput and reduce fees by processing computation and data storage off the main chain while inheriting the security guarantees of the underlying Layer 1 through cryptographic proofs, fraud-proof mechanisms, or periodic state commitments. The Layer 2 anchors itself to the Layer 1 by periodically publishing compressed state roots or validity proofs, enabling the Layer 1 to serve as the ultimate settlement and security layer while the Layer 2 handles high-volume transaction processing. Major architectural families include ZK-rollups, optimistic rollups, state channels, and sidechains, each offering distinct trade-offs between latency, security assumptions, and EVM compatibility.
