---
okf_version: "0.2"
type: Class
title: BLAKE2
resource: urn:ngm:class:blake2
domain: blockchain
description: BLAKE2 is a high-performance cryptographic hash function designed as a faster, simpler alternative to SHA-2 and SHA-3 while preserving equivalent security guarantees. Introduced in 2012 by Jean-Philippe Aumasson, Samuel Neves, Zooko Wilcox-O'Hearn, and Christian Winnerlein, it produces digests of up to 512 bits (BLAKE2b) or 256 bits (BLAKE2s) and is widely adopted in blockchain systems, password-h
maturity: established
quality: 0
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:cryptographic-primitive
enables:
  - urn:ngm:class:data-integrity
  - urn:ngm:class:blockchain-infrastructure
contrastsWith:
  - urn:ngm:class:sha-256
uses:
  - urn:ngm:class:hash-function
partOf:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:cryptographic-primitive
relatedTo:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:sha-256
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:digital-signatures
---

# BLAKE2

BLAKE2 is a high-performance cryptographic hash function designed as a faster, simpler alternative to SHA-2 and SHA-3 while preserving equivalent security guarantees. Introduced in 2012 by Jean-Philippe Aumasson, Samuel Neves, Zooko Wilcox-O'Hearn, and Christian Winnerlein, it produces digests of up to 512 bits (BLAKE2b) or 256 bits (BLAKE2s) and is widely adopted in blockchain systems, password-hashing schemes, and data integrity verification due to its speed advantage over SHA-256 on modern 64-bit processors. Its resistance to length-extension attacks and configurability—including personalisation, salting, and variable digest length—make it a versatile drop-in for many cryptographic protocol requirements.
