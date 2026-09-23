---
okf_version: "0.2"
type: Class
title: Segregated Witness
resource: urn:ngm:class:segregated-witness
domain: blockchain
description: Segregated Witness (SegWit) is a protocol upgrade, activated on Bitcoin as a backwards-compatible soft fork, that moves the witness data — the digital signatures authorising spends — out of the main transaction body into a separate structure. By segregating signatures, it fixes transaction malleability, since the transaction identifier no longer depends on mutable signature data, and effectively i
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain-scalability
requires:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:blockchain-scalability
dependsOn:
  - urn:ngm:class:consensus-mechanism
implements:
  - urn:ngm:class:scalability
contrastsWith:
  - urn:ngm:class:block-size
bridgesTo:
  - urn:ngm:class:lightning-network
uses:
  - urn:ngm:class:merkle-tree
supports:
  - urn:ngm:class:lightning-network
relatedTo:
  - urn:ngm:class:transaction
  - urn:ngm:class:immutability
  - urn:ngm:class:bitcoin
---

# Segregated Witness

Segregated Witness (SegWit) is a protocol upgrade, activated on Bitcoin as a backwards-compatible soft fork, that moves the witness data — the digital signatures authorising spends — out of the main transaction body into a separate structure. By segregating signatures, it fixes transaction malleability, since the transaction identifier no longer depends on mutable signature data, and effectively increases block capacity through a block-weight accounting scheme. SegWit also created the foundation for second-layer protocols such as the Lightning Network and enabled later script upgrades.
