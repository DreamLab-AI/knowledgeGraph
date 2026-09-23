---
okf_version: "0.2"
type: Class
title: Collision Resistance
resource: urn:ngm:class:collision-resistance
domain: blockchain
description: A security property of a cryptographic hash function asserting that it is computationally infeasible to find two distinct inputs that produce the same output digest. Collision resistance underpins the integrity guarantees of Merkle trees, digital signatures, and proof-of-work puzzles, and its absence would allow adversaries to forge blocks or certificates.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:cryptographic-primitive
enables:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:digital-signature
  - urn:ngm:class:proof-of-work
partOf:
  - urn:ngm:class:cryptographic-primitive
relatedTo:
  - urn:ngm:class:hash-function
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:preimage-resistance
  - urn:ngm:class:keccak-256
  - urn:ngm:class:sha-256
---

# Collision Resistance

A security property of a cryptographic hash function asserting that it is computationally infeasible to find two distinct inputs that produce the same output digest. Collision resistance underpins the integrity guarantees of Merkle trees, digital signatures, and proof-of-work puzzles, and its absence would allow adversaries to forge blocks or certificates.
