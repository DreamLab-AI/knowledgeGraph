---
okf_version: "0.2"
type: Class
title: Polygon Zkevm
resource: urn:ngm:class:polygon-zkevm
domain: blockchain
description: Polygon zkEVM is an Ethereum Layer 2 scaling solution built as a zero-knowledge rollup that is bytecode-equivalent with the Ethereum Virtual Machine. It batches transactions off-chain and posts validity proofs to Ethereum, inheriting Layer 1 security while reducing gas fees and increasing throughput. Developers can deploy existing EVM smart contracts with minimal changes.
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:zk-rollup
enables:
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:transaction-throughput
dependsOn:
  - urn:ngm:class:ethereum
implements:
  - urn:ngm:class:zk-rollup
  - urn:ngm:class:evm
contrastsWith:
  - urn:ngm:class:optimistic-rollup
uses:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:cryptography
supports:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:de-fi
partOf:
  - urn:ngm:class:layer-2-scaling
relatedTo:
  - urn:ngm:class:polygon
  - urn:ngm:class:scalability
---

# Polygon Zkevm

Polygon zkEVM is an Ethereum Layer 2 scaling solution built as a zero-knowledge rollup that is bytecode-equivalent with the Ethereum Virtual Machine. It batches transactions off-chain and posts validity proofs to Ethereum, inheriting Layer 1 security while reducing gas fees and increasing throughput. Developers can deploy existing EVM smart contracts with minimal changes.
