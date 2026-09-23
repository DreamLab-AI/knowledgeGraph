---
okf_version: "0.2"
type: Class
title: Non Genesis Block
resource: urn:ngm:class:non-genesis-block
domain: blockchain
description: A Non Genesis Block is any block in a blockchain with a block height greater than zero—that is, every block produced after the genesis (first) block. Non-genesis blocks are structurally identical to the genesis block in terms of their header and transaction payload format, but they include a previous block hash field that cryptographically links them to their parent, forming the immutable chain st
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:block
hasPart:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:merkle-root
requires:
  - urn:ngm:class:block-header
  - urn:ngm:class:cryptographic-hash
enables:
  - urn:ngm:class:transaction-confirmation
  - urn:ngm:class:transaction-finality
contrastsWith:
  - urn:ngm:class:genesis-block
relatedTo:
  - urn:ngm:class:genesis-block
  - urn:ngm:class:block-height
  - urn:ngm:class:block-reward
  - urn:ngm:class:block-time
  - urn:ngm:class:blockchain
---

# Non Genesis Block

A Non Genesis Block is any block in a blockchain with a block height greater than zero—that is, every block produced after the genesis (first) block. Non-genesis blocks are structurally identical to the genesis block in terms of their header and transaction payload format, but they include a previous block hash field that cryptographically links them to their parent, forming the immutable chain structure. The vast majority of blocks in any mature blockchain are non-genesis blocks; they carry the transaction history and consensus record that gives the chain its economic value.
