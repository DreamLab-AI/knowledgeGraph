---
okf_version: "0.2"
type: Class
title: Decentralised Storage
resource: urn:ngm:class:decentralised-storage
domain: distributed-systems
description: Storage systems that distribute data across many independent nodes rather than a single central provider, using content addressing and cryptographic verification to ensure data integrity, availability, and censorship resistance without a trusted intermediary.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:distributed-systems
hasPart:
  - urn:ngm:class:content-addressing
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:data-replication
requires:
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:distributed-hash-table
enables:
  - urn:ngm:class:provenance
  - urn:ngm:class:data-sovereignty
  - urn:ngm:class:censorship-resistance
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:consensus-mechanism
implements:
  - urn:ngm:class:ipfs
  - urn:ngm:class:filecoin
  - urn:ngm:class:arweave
contrastsWith:
  - urn:ngm:class:cloud-storage
bridgesTo:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:ipfs
  - urn:ngm:class:filecoin
uses:
  - urn:ngm:class:merkle-dag
  - urn:ngm:class:erasure-coding
supports:
  - urn:ngm:class:decentralised-application
  - urn:ngm:class:non-fungible-token
partOf:
  - urn:ngm:class:web-3-infrastructure
relatedTo:
  - urn:ngm:class:data-availability
  - urn:ngm:class:encryption
---

# Decentralised Storage

Storage systems that distribute data across many independent nodes rather than a single central provider, using content addressing and cryptographic verification to ensure data integrity, availability, and censorship resistance without a trusted intermediary.
