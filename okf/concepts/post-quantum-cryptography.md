---
okf_version: "0.2"
type: Class
title: Post-Quantum Cryptography
resource: urn:ngm:class:post-quantum-cryptography
domain: infrastructure
description: Cryptographic algorithms and protocols designed to be resistant to attacks from both classical and quantum computers, protecting secure communications in the post-quantum era.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:infra-security-and-identity
hasPart:
  - urn:ngm:class:lattice-cryptography
  - urn:ngm:class:lattice-cryptography
  - urn:ngm:class:code-based-cryptography
  - urn:ngm:class:multivariate-cryptography
  - urn:ngm:class:hash-based-signatures
  - urn:ngm:class:isogeny-based-cryptography
requires:
  - urn:ngm:class:algorithm
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:random-number-generation
  - urn:ngm:class:algorithm
enables:
  - urn:ngm:class:key-exchange
  - urn:ngm:class:digital-signatures
  - urn:ngm:class:quantum-resistant-encryption
  - urn:ngm:class:key-exchange
  - urn:ngm:class:long-term-data-protection
dependsOn:
  - urn:ngm:class:mathematical-hard-problems
  - urn:ngm:class:computational-complexity-theory
partOf:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:security-protocol
---

# Post-Quantum Cryptography

Cryptographic algorithms and protocols designed to be resistant to attacks from both classical and quantum computers, protecting secure communications in the post-quantum era.
