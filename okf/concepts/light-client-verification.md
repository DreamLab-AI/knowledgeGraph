---
okf_version: "0.2"
type: Class
title: Light Client Verification
resource: urn:ngm:class:light-client-verification
domain: blockchain
description: Light client verification is the technique by which a resource-constrained client confirms facts about a blockchain without downloading or executing its full history. By tracking block headers and validating compact cryptographic proofs against committed state roots, a light client can verify transaction inclusion and consensus with minimal data and computation. It is foundational to mobile wallet
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:light-client
hasPart:
  - urn:ngm:class:block-header
  - urn:ngm:class:merkle-proof
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:finality
enables:
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:decentralisation
dependsOn:
  - urn:ngm:class:full-node
  - urn:ngm:class:data-availability
implements:
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:state-proof
bridgesTo:
  - urn:ngm:class:zero-knowledge-proof
uses:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:merkle-root
supports:
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:blockchain-interoperability
relatedTo:
  - urn:ngm:class:rollup
  - urn:ngm:class:ibc
---

# Light Client Verification

Light client verification is the technique by which a resource-constrained client confirms facts about a blockchain without downloading or executing its full history. By tracking block headers and validating compact cryptographic proofs against committed state roots, a light client can verify transaction inclusion and consensus with minimal data and computation. It is foundational to mobile wallets, embedded clients, and trust-minimised cross-chain bridges.
