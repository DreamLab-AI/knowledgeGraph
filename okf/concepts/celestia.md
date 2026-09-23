---
okf_version: "0.2"
type: Class
title: Celestia
resource: urn:ngm:class:celestia
domain: blockchain
description: Celestia is a modular blockchain network that decouples data availability from execution and consensus, functioning as a dedicated data availability layer that rollups and sovereign chains can use to publish and order transaction data without requiring a monolithic execution environment. It employs data availability sampling (DAS) via erasure coding so that light nodes can probabilistically verify
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:data-availability
requires:
  - urn:ngm:class:light-node
  - urn:ngm:class:byzantine-fault-tolerance
enables:
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:modular-blockchain
implements:
  - urn:ngm:class:data-availability-sampling
  - urn:ngm:class:blob-transaction
contrastsWith:
  - urn:ngm:class:monolithic-blockchain
  - urn:ngm:class:ethereum
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:peer-to-peer-network
uses:
  - urn:ngm:class:erasure-coding
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:tendermint-consensus
  - urn:ngm:class:reed-solomon-erasure-coding
  - urn:ngm:class:inter-blockchain-communication
partOf:
  - urn:ngm:class:cosmos
relatedTo:
  - urn:ngm:class:cosmos
  - urn:ngm:class:avail
  - urn:ngm:class:danksharding
  - urn:ngm:class:proto-danksharding
---

# Celestia

Celestia is a modular blockchain network that decouples data availability from execution and consensus, functioning as a dedicated data availability layer that rollups and sovereign chains can use to publish and order transaction data without requiring a monolithic execution environment. It employs data availability sampling (DAS) via erasure coding so that light nodes can probabilistically verify that block data has been published without downloading it in full, enabling Celestia nodes to scale with the number of light clients rather than validators. Celestia introduced the concept of sovereign rollups, in which chains publish data to Celestia for ordering and availability whilst handling their own execution and settlement independently.
