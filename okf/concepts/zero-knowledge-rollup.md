---
okf_version: "0.2"
type: Class
title: Zero-Knowledge Rollup
resource: urn:ngm:class:zero-knowledge-rollup
domain: blockchain
description: A zero-knowledge rollup (ZK-rollup) is a layer-2 scaling construction that executes transactions off-chain in batches and posts a succinct validity proof to a base chain attesting that the new state was computed correctly. Because the proof cryptographically guarantees correctness, the base chain need not re-execute the transactions, achieving high throughput while inheriting the security of the u
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:rollup
hasPart:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:data-availability
enables:
  - urn:ngm:class:blockchain-scalability
dependsOn:
  - urn:ngm:class:data-availability
  - urn:ngm:class:ethereum
implements:
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:transaction-finality
contrastsWith:
  - urn:ngm:class:optimistic-rollup
uses:
  - urn:ngm:class:zk-snark
  - urn:ngm:class:plonk
  - urn:ngm:class:zero-knowledge-proof
supports:
  - urn:ngm:class:smart-contract
partOf:
  - urn:ngm:class:rollup
relatedTo:
  - urn:ngm:class:polygon
  - urn:ngm:class:starknet
  - urn:ngm:class:gas-fee
---

# Zero-Knowledge Rollup

A zero-knowledge rollup (ZK-rollup) is a layer-2 scaling construction that executes transactions off-chain in batches and posts a succinct validity proof to a base chain attesting that the new state was computed correctly. Because the proof cryptographically guarantees correctness, the base chain need not re-execute the transactions, achieving high throughput while inheriting the security of the underlying ledger. ZK-rollups offer near-instant finality once a proof is verified, distinguishing them from optimistic designs that rely on challenge periods.
