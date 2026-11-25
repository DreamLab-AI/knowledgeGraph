---
okf_version: "0.2"
type: Class
title: Block Header
resource: urn:ngm:class:block-header
domain: blockchain
description: The fixed-size metadata section of a blockchain block that encodes the previous block hash, Merkle root of transactions, timestamp, difficulty target, and nonce. The block header is the unit that miners and validators hash during proof-of-work or verify during proof-of-stake, and it commits to the complete block body via the Merkle root without including raw transactions.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:distributed-data-structure
  - urn:ngm:class:distributed-data-structure
hasPart:
  - urn:ngm:class:merkle-root
  - urn:ngm:class:nonce
  - urn:ngm:class:timestamp
  - urn:ngm:class:difficulty
requires:
  - urn:ngm:class:cryptographic-hash-function
enables:
  - urn:ngm:class:light-client
dependsOn:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:peer-to-peer-network
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:security
  - urn:ngm:class:ai-energy-optimisation
uses:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:sha-256
supports:
  - urn:ngm:class:merkle-proof
  - urn:ngm:class:simplified-payment-verification
standardizedBy:
  - urn:ngm:class:iso-iec-23257-2021
  - urn:ngm:class:ieee-2418-1
partOf:
  - urn:ngm:class:block
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:block
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:genesis-block
  - urn:ngm:class:block-height
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Block Header

The fixed-size metadata section of a blockchain block that encodes the previous block hash, Merkle root of transactions, timestamp, difficulty target, and nonce. The block header is the unit that miners and validators hash during proof-of-work or verify during proof-of-stake, and it commits to the complete block body via the Merkle root without including raw transactions.
