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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Block Structure

Block structure is the internal data layout of a block in a blockchain or distributed ledger, specifying the fields, encoding formats, and cryptographic commitments that constitute a valid unit of the chain. A block consists of a header containing metadata — including the parent block hash, timestamp, nonce, and Merkle root of the transaction set — and a body containing the ordered list of transactions or state transitions. The specific fields, size limits, and serialisation rules of the block structure are defined by the network's consensus protocol and directly govern the chain's security properties, throughput, and upgrade path.
