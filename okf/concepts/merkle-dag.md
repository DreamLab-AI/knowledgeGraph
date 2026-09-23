---
okf_version: "0.2"
type: Class
title: Merkle DAG
resource: urn:ngm:class:merkle-dag
domain: infrastructure
description: A Merkle Directed Acyclic Graph (DAG) is a data structure combining Merkle tree hash-linking with a generalised directed acyclic graph topology, allowing nodes to have multiple parents and enabling content-addressed, tamper-evident storage of arbitrary graph-shaped data. Unlike a binary Merkle tree, each node's cryptographic hash is derived from all its children, forming a unique, immutable identi
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:content-addressing
requires:
  - urn:ngm:class:collision-resistance
  - urn:ngm:class:content-addressing
enables:
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:ipfs
  - urn:ngm:class:deduplication
  - urn:ngm:class:tamper-evident-storage
  - urn:ngm:class:verifiable-computation
dependsOn:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:immutable-record
implements:
  - urn:ngm:class:data-structure
contrastsWith:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:merkle-patricia-trie
bridgesTo:
  - urn:ngm:class:data-structure
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:cross-chain-interoperability
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:content-identifier
  - urn:ngm:class:directed-acyclic-graph
supports:
  - urn:ngm:class:version-control
  - urn:ngm:class:reproducible-builds
partOf:
  - urn:ngm:class:ipld
relatedTo:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:git
  - urn:ngm:class:filecoin
---

# Merkle DAG

A Merkle Directed Acyclic Graph (DAG) is a data structure combining Merkle tree hash-linking with a generalised directed acyclic graph topology, allowing nodes to have multiple parents and enabling content-addressed, tamper-evident storage of arbitrary graph-shaped data. Unlike a binary Merkle tree, each node's cryptographic hash is derived from all its children, forming a unique, immutable identifier for any subgraph.
