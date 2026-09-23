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
---

# One Way Function

A one-way function is a function that is easy to compute on any input but computationally infeasible to invert, meaning that recovering the input from a typical output is practically impossible with available resources. One-way functions are a foundational primitive of modern cryptography, underpinning hashing, password storage, and the trapdoor constructions used in public-key schemes. Their existence is conjectured rather than proven, and it is closely tied to open questions in computational complexity.
