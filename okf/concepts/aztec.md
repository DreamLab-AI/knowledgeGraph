---
okf_version: "0.2"
type: Class
title: Aztec
resource: urn:ngm:class:aztec
domain: blockchain
description: A privacy-focused Layer 2 network for Ethereum that uses zero-knowledge proofs to enable confidential transactions and private smart contract execution, supporting encrypted notes, private state transitions, and programmable privacy at the application layer.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:layer-2-networks
hasPart:
  - urn:ngm:class:aztec-protocol
requires:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:zk-snark
  - urn:ngm:class:rollup
enables:
  - urn:ngm:class:privacy
  - urn:ngm:class:confidential-transactions
  - urn:ngm:class:private-smart-contract
  - urn:ngm:class:programmable-privacy
dependsOn:
  - urn:ngm:class:ethereum
  - urn:ngm:class:cryptographic-proof
implements:
  - urn:ngm:class:optimistic-rollup
  - urn:ngm:class:privacy-preserving-computation
contrastsWith:
  - urn:ngm:class:blockchain
  - urn:ngm:class:optimism
  - urn:ngm:class:arbitrum
bridgesTo:
  - urn:ngm:class:security
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:aztec-protocol
uses:
  - urn:ngm:class:noir
  - urn:ngm:class:homomorphic-encryption
  - urn:ngm:class:utxo-model
supports:
  - urn:ngm:class:de-fi
  - urn:ngm:class:digital-asset
partOf:
  - urn:ngm:class:ethereum
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:starknet
  - urn:ngm:class:polygon-zkevm
  - urn:ngm:class:tornado-cash
---

# Aztec

A privacy-focused Layer 2 network for Ethereum that uses zero-knowledge proofs to enable confidential transactions and private smart contract execution, supporting encrypted notes, private state transitions, and programmable privacy at the application layer.
