---
okf_version: "0.2"
type: Class
title: One Way Function
resource: urn:ngm:class:one-way-function
domain: security
description: A one-way function is a function that is easy to compute on any input but computationally infeasible to invert, meaning that recovering the input from a typical output is practically impossible with available resources. One-way functions are a foundational primitive of modern cryptography, underpinning hashing, password storage, and the trapdoor constructions used in public-key schemes. Their exis
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cryptography
requires:
  - urn:ngm:class:preimage-resistance
enables:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:digital-signature
dependsOn:
  - urn:ngm:class:modular-arithmetic
implements:
  - urn:ngm:class:cryptographic-hash-function
contrastsWith:
  - urn:ngm:class:trapdoor-function
bridgesTo:
  - urn:ngm:class:cryptographic-algorithm
uses:
  - urn:ngm:class:hash-function
supports:
  - urn:ngm:class:password-hashing
  - urn:ngm:class:proof-of-work
partOf:
  - urn:ngm:class:cryptography
relatedTo:
  - urn:ngm:class:trapdoor-function
  - urn:ngm:class:pseudorandom-function
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# One Way Function

A one-way function is a function that is easy to compute on any input but computationally infeasible to invert, meaning that recovering the input from a typical output is practically impossible with available resources. One-way functions are a foundational primitive of modern cryptography, underpinning hashing, password storage, and the trapdoor constructions used in public-key schemes. Their existence is conjectured rather than proven, and it is closely tied to open questions in computational complexity.
