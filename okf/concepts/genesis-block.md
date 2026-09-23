---
okf_version: "0.2"
type: Class
title: Genesis Block
resource: urn:ngm:class:genesis-block
domain: blockchain
description: The genesis block is the first block in a blockchain, hardcoded into the client software and serving as the immutable anchor from which the entire chain of subsequent blocks descends. It establishes the initial chain state, encodes the founding parameters of the network, and contains no reference to a previous block hash. Because it cannot be altered without invalidating all subsequent blocks, the
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:distributed-data-structure
hasPart:
  - urn:ngm:class:block-header
  - urn:ngm:class:merkle-root
  - urn:ngm:class:timestamp
  - urn:ngm:class:nonce
  - urn:ngm:class:coinbase-transaction
requires:
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:immutability
enables:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:block-height
partOf:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-ledger
relatedTo:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:blockchain-protocol
  - urn:ngm:class:merkle-tree
---

# Genesis Block

The genesis block is the first block in a blockchain, hardcoded into the client software and serving as the immutable anchor from which the entire chain of subsequent blocks descends. It establishes the initial chain state, encodes the founding parameters of the network, and contains no reference to a previous block hash. Because it cannot be altered without invalidating all subsequent blocks, the genesis block is the ultimate root of trust for the distributed ledger.
