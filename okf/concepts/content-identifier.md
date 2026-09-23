---
okf_version: "0.2"
type: Class
title: Content Identifier
resource: urn:ngm:class:content-identifier
domain: infrastructure
description: A Content Identifier (CID) is a self-describing, cryptographically derived label used in the InterPlanetary File System and IPLD ecosystem to uniquely identify and verify content through its hash, encoding the hash function used, the hash digest, and a multicodec descriptor for the serialised data format into a compact, version-aware multihash structure.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:content-addressing
requires:
  - urn:ngm:class:cryptographic-hash-function
enables:
  - urn:ngm:class:deduplication
  - urn:ngm:class:tamper-detection
  - urn:ngm:class:verifiable-data-registry
implements:
  - urn:ngm:class:content-addressing
bridgesTo:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-collaboration
uses:
  - urn:ngm:class:multihash
  - urn:ngm:class:ipld
  - urn:ngm:class:merkle-dag
  - urn:ngm:class:multicodec
  - urn:ngm:class:multibase
supports:
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:data-integrity
partOf:
  - urn:ngm:class:ipfs
  - urn:ngm:class:ipld
relatedTo:
  - urn:ngm:class:ipfs-content-addressing
  - urn:ngm:class:filecoin
  - urn:ngm:class:nft-metadata
---

# Content Identifier

A Content Identifier (CID) is a self-describing, cryptographically derived label used in the InterPlanetary File System and IPLD ecosystem to uniquely identify and verify content through its hash, encoding the hash function used, the hash digest, and a multicodec descriptor for the serialised data format into a compact, version-aware multihash structure.
