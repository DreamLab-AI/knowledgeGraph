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
  - urn:ngm:class:ethereum
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
  - urn:ngm:class:decentralised-finance
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Starknet

A Layer 2 validity rollup for Ethereum that uses STARK proofs to verify off-chain execution of transactions written in the Cairo programming language, enabling high-throughput, low-cost transactions while inheriting Ethereum's settlement security.
