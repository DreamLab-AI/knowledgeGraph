---
okf_version: "0.2"
type: Class
title: Blockchain Technology
resource: urn:ngm:class:blockchain-technology
domain: blockchain
description: Blockchain Technology is a class of distributed ledger systems in which validated transactions are grouped into blocks that are cryptographically linked in an append-only sequence, maintained by a peer-to-peer network through a consensus mechanism. Each block header includes the cryptographic hash of its predecessor, a timestamp, and a Merkle root of its transaction set, ensuring that altering any
maturity: established
quality: 0.76
is-a:
  - urn:ngm:class:distributed-ledger-technology
hasPart:
  - urn:ngm:class:genesis-block
  - urn:ngm:class:mempool
  - urn:ngm:class:block-header
  - urn:ngm:class:mempool
requires:
  - urn:ngm:class:immutability
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:node
  - urn:ngm:class:network-node
enables:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:de-fi
  - urn:ngm:class:blockchain-provenance
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:tokenization
  - urn:ngm:class:neural-network-text-tokenisation
contrastsWith:
  - urn:ngm:class:centralised-database
  - urn:ngm:class:traditional-financial-system
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:supply-chain-management
  - urn:ngm:class:digital-identity
uses:
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:digital-signature
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:peer-to-peer-network
relatedTo:
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:cross-chain-interoperability
  - urn:ngm:class:sidechain
  - urn:ngm:class:layer-2-scaling
---

# Blockchain Technology

Blockchain Technology is a class of distributed ledger systems in which validated transactions are grouped into blocks that are cryptographically linked in an append-only sequence, maintained by a peer-to-peer network through a consensus mechanism. Each block header includes the cryptographic hash of its predecessor, a timestamp, and a Merkle root of its transaction set, ensuring that altering any historical record requires re-computing all subsequent proofs, which is computationally or economically prohibitive. The design eliminates the need for a trusted central authority by replacing it with algorithmic agreement, enabling trustless settlement, programmable value transfer via smart contracts, and tamper-evident audit trails across diverse application domains.
