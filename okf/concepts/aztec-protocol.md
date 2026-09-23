---
okf_version: "0.2"
type: Class
title: Aztec Protocol
resource: urn:ngm:class:aztec-protocol
domain: blockchain
description: The protocol underlying the Aztec network that combines zero-knowledge proofs with an encrypted note model to provide confidential transactions and private smart contracts on Ethereum, enabling programmable privacy through a UTXO-style note commitment scheme verified by recursive ZK rollup proofs.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:aztec
hasPart:
  - urn:ngm:class:aztec-network
  - urn:ngm:class:aztec
requires:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:zk-snark
  - urn:ngm:class:commitment-scheme
enables:
  - urn:ngm:class:privacy
  - urn:ngm:class:confidential-transactions
  - urn:ngm:class:private-smart-contract
  - urn:ngm:class:programmable-privacy
implements:
  - urn:ngm:class:zk-rollup
  - urn:ngm:class:utxo-model
  - urn:ngm:class:plonk
contrastsWith:
  - urn:ngm:class:tornado-cash
  - urn:ngm:class:zcash
  - urn:ngm:class:optimistic-rollup
bridgesTo:
  - urn:ngm:class:security
  - urn:ngm:class:de-fi
  - urn:ngm:class:aztec-network
uses:
  - urn:ngm:class:homomorphic-encryption
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:noir
relatedTo:
  - urn:ngm:class:ethereum
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:cryptographic-commitment
---

# Aztec Protocol

The protocol underlying the Aztec network that combines zero-knowledge proofs with an encrypted note model to provide confidential transactions and private smart contracts on Ethereum, enabling programmable privacy through a UTXO-style note commitment scheme verified by recursive ZK rollup proofs.
