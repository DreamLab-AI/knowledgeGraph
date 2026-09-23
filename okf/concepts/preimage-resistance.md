---
okf_version: "0.2"
type: Class
title: Preimage Resistance
resource: urn:ngm:class:preimage-resistance
domain: blockchain
description: Preimage Resistance is a security property of a cryptographic hash function requiring that, given a hash output h, it is computationally infeasible to find any input m such that H(m) = h. This one-way property is foundational for password hashing, proof-of-work puzzles, and blockchain address derivation, ensuring that knowledge of a public address does not reveal the corresponding private key.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:cryptographic-primitive
enables:
  - urn:ngm:class:cryptographic-security
  - urn:ngm:class:merkle-proof
partOf:
  - urn:ngm:class:hash-function
  - urn:ngm:class:cryptographic-hash-function
relatedTo:
  - urn:ngm:class:collision-resistance
  - urn:ngm:class:sha-256
  - urn:ngm:class:keccak-256
  - urn:ngm:class:blake2
  - urn:ngm:class:private-key
  - urn:ngm:class:proof-of-work
---

# Preimage Resistance

Preimage Resistance is a security property of a cryptographic hash function requiring that, given a hash output h, it is computationally infeasible to find any input m such that H(m) = h. This one-way property is foundational for password hashing, proof-of-work puzzles, and blockchain address derivation, ensuring that knowledge of a public address does not reveal the corresponding private key.
