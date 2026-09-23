---
okf_version: "0.2"
type: Class
title: Salt
resource: urn:ngm:class:salt
domain: blockchain
description: A Salt is a randomly generated value appended or prepended to input data before it is processed by a cryptographic hash function, ensuring that two identical inputs produce distinct hash outputs. Salts defeat precomputed dictionary and rainbow-table attacks on hashed credentials and commitments by making each hash unique even when the underlying plaintext is shared. In blockchain contexts, salts a
maturity: established
quality: 0
is-a:
  - urn:ngm:class:cryptographic-primitive
requires:
  - urn:ngm:class:cryptographic-hash-function
enables:
  - urn:ngm:class:cryptographic-verification
  - urn:ngm:class:differential-privacy
uses:
  - urn:ngm:class:cryptographic-protocol
partOf:
  - urn:ngm:class:cryptography
relatedTo:
  - urn:ngm:class:nonce
  - urn:ngm:class:cryptographic-commitment
  - urn:ngm:class:cryptographic-keys
  - urn:ngm:class:cryptographic-security
---

# Salt

A Salt is a randomly generated value appended or prepended to input data before it is processed by a cryptographic hash function, ensuring that two identical inputs produce distinct hash outputs. Salts defeat precomputed dictionary and rainbow-table attacks on hashed credentials and commitments by making each hash unique even when the underlying plaintext is shared. In blockchain contexts, salts appear in commitment schemes, zero-knowledge proofs, and password-based key derivation functions, where they guarantee that a hash reveals no information about the original value to an observer who does not know the salt.
