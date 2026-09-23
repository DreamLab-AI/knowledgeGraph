---
okf_version: "0.2"
type: Class
title: Block Structure
resource: urn:ngm:class:block-structure
domain: blockchain
description: Block structure is the internal data layout of a block in a blockchain or distributed ledger, specifying the fields, encoding formats, and cryptographic commitments that constitute a valid unit of the chain. A block consists of a header containing metadata — including the parent block hash, timestamp, nonce, and Merkle root of the transaction set — and a body containing the ordered list of transac
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:block
hasPart:
  - urn:ngm:class:block-header
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:merkle-root
  - urn:ngm:class:nonce
  - urn:ngm:class:transaction
uses:
  - urn:ngm:class:cryptographic-hash
relatedTo:
  - urn:ngm:class:block-size
  - urn:ngm:class:block-time
  - urn:ngm:class:blockchain
---

# Block Structure

Block structure is the internal data layout of a block in a blockchain or distributed ledger, specifying the fields, encoding formats, and cryptographic commitments that constitute a valid unit of the chain. A block consists of a header containing metadata — including the parent block hash, timestamp, nonce, and Merkle root of the transaction set — and a body containing the ordered list of transactions or state transitions. The specific fields, size limits, and serialisation rules of the block structure are defined by the network's consensus protocol and directly govern the chain's security properties, throughput, and upgrade path.
