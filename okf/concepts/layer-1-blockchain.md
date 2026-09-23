---
okf_version: "0.2"
type: Class
title: Layer 1 Blockchain
resource: urn:ngm:class:layer-1-blockchain
domain: blockchain
description: A Layer 1 Blockchain is a base-layer distributed ledger that provides its own consensus, settlement and security without relying on another chain. It defines the native protocol, block production rules and economic security that applications and higher layers build upon, and is where transactions achieve final settlement. Examples include Bitcoin, Ethereum, Avalanche and Cardano. Layer 1 design ch
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain-network
hasPart:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:distributed-ledger
requires:
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:layer-2-scaling
dependsOn:
  - urn:ngm:class:scalability
implements:
  - urn:ngm:class:distributed-ledger
contrastsWith:
  - urn:ngm:class:layer-2-solutions
  - urn:ngm:class:layer-2-scaling
bridgesTo:
  - urn:ngm:class:avalanche
  - urn:ngm:class:cardano
uses:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:proof-of-work
supports:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:layer-2-solutions
relatedTo:
  - urn:ngm:class:sharding
  - urn:ngm:class:ethereum
  - urn:ngm:class:bitcoin
---

# Layer 1 Blockchain

A Layer 1 Blockchain is a base-layer distributed ledger that provides its own consensus, settlement and security without relying on another chain. It defines the native protocol, block production rules and economic security that applications and higher layers build upon, and is where transactions achieve final settlement. Examples include Bitcoin, Ethereum, Avalanche and Cardano. Layer 1 design choices around consensus and data structures determine the throughput, decentralisation and security trade-offs that Layer 2 solutions later seek to extend.
