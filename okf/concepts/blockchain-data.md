---
okf_version: "0.2"
type: Class
title: Blockchain Data
resource: urn:ngm:class:blockchain-data
domain: blockchain
description: Blockchain Data refers to the structured information stored on a distributed ledger, comprising transaction records, state data, smart contract bytecode, event logs, and cryptographic proofs organised into immutable, hash-linked blocks. It is characterised by append-only semantics, cryptographic integrity, and public verifiability. The data model differs fundamentally from traditional databases in
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:network-component
hasPart:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:transaction
requires:
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:distributed-ledger
enables:
  - urn:ngm:class:audit-trail
  - urn:ngm:class:asset-tokenisation
  - urn:ngm:class:neural-network-text-tokenisation
dependsOn:
  - urn:ngm:class:peer-to-peer-network
contrastsWith:
  - urn:ngm:class:centralised-database
bridgesTo:
  - urn:ngm:class:data-analytics
supports:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:decentralised-application
  - urn:ngm:class:data-provenance
relatedTo:
  - urn:ngm:class:data
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:immutability
---

# Blockchain Data

Blockchain Data refers to the structured information stored on a distributed ledger, comprising transaction records, state data, smart contract bytecode, event logs, and cryptographic proofs organised into immutable, hash-linked blocks. It is characterised by append-only semantics, cryptographic integrity, and public verifiability. The data model differs fundamentally from traditional databases in that history cannot be altered without recomputing the entire subsequent chain.
