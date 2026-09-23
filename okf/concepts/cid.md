---
okf_version: "0.2"
type: Class
title: CID
resource: urn:ngm:class:cid
domain: infrastructure
description: A Content Identifier (CID) is a self-describing, cryptographic label used in the InterPlanetary File System (IPFS) and related protocols to uniquely and permanently address a piece of content based on its cryptographic hash rather than its location. CIDs encode the hash function used, the hash digest, and the codec describing the data format, enabling content-addressed storage where identical cont
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:content-identifier
enables:
  - urn:ngm:class:ipfs
  - urn:ngm:class:decentralized-storage
  - urn:ngm:class:content-addressing
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:multihash
  - urn:ngm:class:ipld
relatedTo:
  - urn:ngm:class:distributed-hash-table
  - urn:ngm:class:merkle-dag
---

# CID

A Content Identifier (CID) is a self-describing, cryptographic label used in the InterPlanetary File System (IPFS) and related protocols to uniquely and permanently address a piece of content based on its cryptographic hash rather than its location. CIDs encode the hash function used, the hash digest, and the codec describing the data format, enabling content-addressed storage where identical content always produces the same identifier regardless of where it is stored. CIDs are the primary addressing primitive of the IPLD (InterPlanetary Linked Data) ecosystem.
