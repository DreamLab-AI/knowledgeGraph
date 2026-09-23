---
okf_version: "0.2"
type: Class
title: ZK Rollup
resource: urn:ngm:class:zk-rollup
domain: blockchain
description: A ZK rollup is a Layer 2 scaling construction that executes transactions off-chain and posts a succinct validity proof, typically a zk-SNARK or zk-STARK, to a Layer 1 chain so the base layer can verify correctness without re-executing the batch. Compressed transaction data and the proof are published on-chain, inheriting the security of the underlying settlement layer while drastically reducing pe
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:rollup
hasPart:
  - urn:ngm:class:data-availability
requires:
  - urn:ngm:class:zero-knowledge-proof
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:trustless-settlement
dependsOn:
  - urn:ngm:class:ethereum
implements:
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:zk-snark
contrastsWith:
  - urn:ngm:class:optimistic-rollup
  - urn:ngm:class:sidechain
  - urn:ngm:class:state-channel
bridgesTo:
  - urn:ngm:class:layer-2-networks
uses:
  - urn:ngm:class:smart-contract
partOf:
  - urn:ngm:class:layer-2-scaling
relatedTo:
  - urn:ngm:class:blockchain
---

# ZK Rollup

A ZK rollup is a Layer 2 scaling construction that executes transactions off-chain and posts a succinct validity proof, typically a zk-SNARK or zk-STARK, to a Layer 1 chain so the base layer can verify correctness without re-executing the batch. Compressed transaction data and the proof are published on-chain, inheriting the security of the underlying settlement layer while drastically reducing per-transaction cost. Unlike optimistic rollups, finality does not require a fraud-proof challenge window because validity is proven cryptographically.
