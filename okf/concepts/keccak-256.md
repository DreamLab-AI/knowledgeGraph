---
okf_version: "0.2"
type: Class
title: Keccak-256
resource: urn:ngm:class:keccak-256
domain: blockchain
description: A 256-bit cryptographic hash function based on the Keccak sponge construction, selected as the SHA-3 standard and used natively in Ethereum for address derivation, transaction hashing, and smart contract storage. It differs from NIST SHA-3 in padding and offers strong collision resistance and preimage resistance properties.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:cryptographic-primitive
enables:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:merkle-tree
partOf:
  - urn:ngm:class:cryptographic-primitive
relatedTo:
  - urn:ngm:class:hash-function
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:sha-256
  - urn:ngm:class:collision-resistance
  - urn:ngm:class:preimage-resistance
---

# Keccak-256

A 256-bit cryptographic hash function based on the Keccak sponge construction, selected as the SHA-3 standard and used natively in Ethereum for address derivation, transaction hashing, and smart contract storage. It differs from NIST SHA-3 in padding and offers strong collision resistance and preimage resistance properties.
