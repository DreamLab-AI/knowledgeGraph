---
okf_version: "0.2"
type: Class
title: Hash Collision
resource: urn:ngm:class:hash-collision
domain: blockchain
description: A hash collision occurs when two distinct inputs produce the same output from a cryptographic hash function, violating the collision-resistance property that is essential to blockchain data integrity. In blockchain systems, collision resistance ensures that no adversary can craft two different transactions or blocks yielding the same hash digest, making Merkle tree roots and block headers tamper-e
maturity: established
quality: 0
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:cryptographic-primitive
requires:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:cryptography
  - urn:ngm:class:cryptographic-primitive
enables:
  - urn:ngm:class:adversarial-attack
  - urn:ngm:class:attack-vector
contrastsWith:
  - urn:ngm:class:collision-resistance
  - urn:ngm:class:cryptographic-commitment
partOf:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:cryptography-security-and-privacy
  - urn:ngm:class:cryptographic-domain
relatedTo:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:cryptographic-security
---

# Hash Collision

A hash collision occurs when two distinct inputs produce the same output from a cryptographic hash function, violating the collision-resistance property that is essential to blockchain data integrity. In blockchain systems, collision resistance ensures that no adversary can craft two different transactions or blocks yielding the same hash digest, making Merkle tree roots and block headers tamper-evident. While collisions are computationally infeasible for production-grade functions such as SHA-256, their theoretical possibility drives ongoing cryptographic research and post-quantum security planning.
