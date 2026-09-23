---
okf_version: "0.2"
type: Class
title: Layer-2 Protocol
resource: urn:ngm:class:layer-2-protocol
domain: blockchain
description: A layer-2 protocol is a scaling construction built on top of an underlying layer-1 blockchain that executes transactions off the base chain while inheriting its security guarantees through periodic settlement. By batching, compressing, or channelling activity off-chain and committing only succinct proofs or state commitments to layer 1, these protocols dramatically increase throughput and reduce f
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain-scalability
hasPart:
  - urn:ngm:class:rollup
  - urn:ngm:class:state-channel
enables:
  - urn:ngm:class:transaction-throughput
  - urn:ngm:class:smart-contract
dependsOn:
  - urn:ngm:class:layer-1-blockchain
  - urn:ngm:class:data-availability
implements:
  - urn:ngm:class:optimistic-rollup
  - urn:ngm:class:zk-rollup
contrastsWith:
  - urn:ngm:class:layer-1-blockchain
  - urn:ngm:class:sidechain
bridgesTo:
  - urn:ngm:class:sidechain
  - urn:ngm:class:ethereum
uses:
  - urn:ngm:class:ethereum
partOf:
  - urn:ngm:class:blockchain-scalability
relatedTo:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:arbitrum
  - urn:ngm:class:optimism
---

# Layer-2 Protocol

A layer-2 protocol is a scaling construction built on top of an underlying layer-1 blockchain that executes transactions off the base chain while inheriting its security guarantees through periodic settlement. By batching, compressing, or channelling activity off-chain and committing only succinct proofs or state commitments to layer 1, these protocols dramatically increase throughput and reduce fees without changing the base consensus. Major families include rollups (optimistic and zero-knowledge), state channels, and sidechains, each trading off security, latency, and capital efficiency differently while bridging assets and messages back to the secured base layer.
