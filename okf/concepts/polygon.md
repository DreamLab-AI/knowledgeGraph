---
okf_version: "0.2"
type: Class
title: Polygon
resource: urn:ngm:class:polygon
domain: blockchain
description: Polygon is a set of Ethereum scaling protocols and a development platform, originally launched as Matic Network in 2017 and rebranded to Polygon in 2021. It began as a proof-of-stake sidechain that runs in parallel to Ethereum and has expanded into zero-knowledge rollup technology, notably Polygon zkEVM, which executes Ethereum-compatible transactions with validity proofs. The architecture aims to
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:layer2
  - urn:ngm:class:blockchain-domain
requires:
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:validator-node
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:blockchain-interoperability
  - urn:ngm:class:smart-contract
  - urn:ngm:class:decentralised-finance-domain
implements:
  - urn:ngm:class:rollup
  - urn:ngm:class:zk-rollup
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
contrastsWith:
  - urn:ngm:class:arbitrum
  - urn:ngm:class:zk-sync
  - urn:ngm:class:optimism
bridgesTo:
  - urn:ngm:class:decentralised-application
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:rollup
  - urn:ngm:class:zk-sync
  - urn:ngm:class:arbitrum
uses:
  - urn:ngm:class:staking
  - urn:ngm:class:validity-proof
relatedTo:
  - urn:ngm:class:sidechain
  - urn:ngm:class:gas-fee
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:token-standard
---

# Polygon

Polygon is a set of Ethereum scaling protocols and a development platform, originally launched as Matic Network in 2017 and rebranded to Polygon in 2021. It began as a proof-of-stake sidechain that runs in parallel to Ethereum and has expanded into zero-knowledge rollup technology, notably Polygon zkEVM, which executes Ethereum-compatible transactions with validity proofs. The architecture aims to offer lower fees and higher throughput while keeping compatibility with Ethereum tooling. The network's token, originally MATIC and migrating to POL, is used for staking and fees across Polygon chains.
