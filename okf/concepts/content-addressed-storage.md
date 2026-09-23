---
okf_version: "0.2"
type: Class
title: Content-Addressed Storage
resource: urn:ngm:class:content-addressed-storage
domain: infrastructure
description: Content-addressed storage (CAS) is a data storage paradigm in which each piece of data is identified and retrieved by a cryptographic hash of its content rather than by its location or a human-assigned name. Because the identifier is derived deterministically from the data itself, identical content always maps to the same address, enabling automatic deduplication and verifiable integrity without r
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:data-storage
requires:
  - urn:ngm:class:hash-function
  - urn:ngm:class:content-identifier
enables:
  - urn:ngm:class:data-availability
  - urn:ngm:class:cryptographic-verification
  - urn:ngm:class:data-deduplication
  - urn:ngm:class:tamper-evidence
  - urn:ngm:class:reproducible-builds
  - urn:ngm:class:provenance
  - urn:ngm:class:provenance
implements:
  - urn:ngm:class:ipfs
  - urn:ngm:class:git
  - urn:ngm:class:arweave
  - urn:ngm:class:filecoin
contrastsWith:
  - urn:ngm:class:object-storage
  - urn:ngm:class:location-addressed-storage
bridgesTo:
  - urn:ngm:class:data-layer
  - urn:ngm:class:data-versioning
  - urn:ngm:class:model-registry
  - urn:ngm:class:data-layer
  - urn:ngm:class:data-versioning
uses:
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:content-addressing
  - urn:ngm:class:distributed-hash-table
  - urn:ngm:class:kzg-commitment
supports:
  - urn:ngm:class:decentralized-storage
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:version-control
relatedTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:data-integrity
---

# Content-Addressed Storage

Content-addressed storage (CAS) is a data storage paradigm in which each piece of data is identified and retrieved by a cryptographic hash of its content rather than by its location or a human-assigned name. Because the identifier is derived deterministically from the data itself, identical content always maps to the same address, enabling automatic deduplication and verifiable integrity without requiring trust in the storage provider. Content-addressed storage forms the basis of distributed systems such as IPFS, Git, and Arweave, and underlies the content-integrity mechanisms of blockchain data layers. It is fundamentally different from location-addressed storage, where the same content can exist at multiple addresses or the same address can point to different content over time.
