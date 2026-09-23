---
okf_version: "0.2"
type: Class
title: Modular Blockchain
resource: urn:ngm:class:modular-blockchain
domain: blockchain
description: "A modular blockchain is a blockchain architecture that separates the core functions of execution, settlement, consensus, and data availability into distinct, specialised layers rather than handling them all in a single monolithic chain. Each layer can be optimised and scaled independently, and components can be mixed and matched across networks. This decomposition aims to overcome the scalability "
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:bc-protocol-and-consensus
hasPart:
  - urn:ngm:class:data-availability
  - urn:ngm:class:consensus-layer
  - urn:ngm:class:settlement-layer
requires:
  - urn:ngm:class:data-availability
enables:
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:scalability
  - urn:ngm:class:rollup
contrastsWith:
  - urn:ngm:class:blockchain
bridgesTo:
  - urn:ngm:class:celestia
  - urn:ngm:class:cosmos
uses:
  - urn:ngm:class:data-availability-sampling
  - urn:ngm:class:optimistic-rollup
  - urn:ngm:class:zk-rollup
supports:
  - urn:ngm:class:layer2
  - urn:ngm:class:layer-2-scaling
relatedTo:
  - urn:ngm:class:fraud-proof
---

# Modular Blockchain

A modular blockchain is a blockchain architecture that separates the core functions of execution, settlement, consensus, and data availability into distinct, specialised layers rather than handling them all in a single monolithic chain. Each layer can be optimised and scaled independently, and components can be mixed and matched across networks. This decomposition aims to overcome the scalability constraints of monolithic designs while preserving security and decentralisation.
