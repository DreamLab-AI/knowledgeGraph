---
okf_version: "0.2"
type: Class
title: Starknet
resource: urn:ngm:class:starknet
domain: blockchain
description: A Layer 2 validity rollup for Ethereum that uses STARK proofs to verify off-chain execution of transactions written in the Cairo programming language, enabling high-throughput, low-cost transactions while inheriting Ethereum's settlement security.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:layer-2-networks
hasPart:
  - urn:ngm:class:stark
  - urn:ngm:class:sequencer
requires:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:programming-language
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:decentralised-application
  - urn:ngm:class:verifiable-computation
implements:
  - urn:ngm:class:rollup
  - urn:ngm:class:validity-proof
contrastsWith:
  - urn:ngm:class:optimistic-rollup
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:security
  - urn:ngm:class:rollup
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:smart-contract
partOf:
  - urn:ngm:class:blockchain
  - urn:ngm:class:ethereum
relatedTo:
  - urn:ngm:class:polygon-zkevm
  - urn:ngm:class:de-fi
---

# Starknet

A Layer 2 validity rollup for Ethereum that uses STARK proofs to verify off-chain execution of transactions written in the Cairo programming language, enabling high-throughput, low-cost transactions while inheriting Ethereum's settlement security.
