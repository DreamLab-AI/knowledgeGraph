---
okf_version: "0.2"
type: Class
title: Trapdoor Function
resource: urn:ngm:class:trapdoor-function
domain: security
description: A trapdoor function is a one-way function that is easy to compute in the forward direction but computationally infeasible to invert, except for a party holding a secret piece of information called the trapdoor. This asymmetry between forward computation and inversion underpins public-key cryptography, where the public key enables encryption or verification and the private trapdoor enables decrypti
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cryptographic-primitive
requires:
  - urn:ngm:class:cryptography
  - urn:ngm:class:key-generation
enables:
  - urn:ngm:class:rsa
  - urn:ngm:class:digital-signature
  - urn:ngm:class:encryption
implements:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:asymmetric-encryption
contrastsWith:
  - urn:ngm:class:hash-function
uses:
  - urn:ngm:class:cryptographic-primitive
supports:
  - urn:ngm:class:key-exchange
partOf:
  - urn:ngm:class:cryptography
relatedTo:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:hash-function
  - urn:ngm:class:zero-knowledge-proof
---

# Trapdoor Function

A trapdoor function is a one-way function that is easy to compute in the forward direction but computationally infeasible to invert, except for a party holding a secret piece of information called the trapdoor. This asymmetry between forward computation and inversion underpins public-key cryptography, where the public key enables encryption or verification and the private trapdoor enables decryption or signing. Candidate trapdoor functions rest on conjectured hard problems such as integer factorisation and the discrete logarithm.
