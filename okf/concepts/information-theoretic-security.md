---
okf_version: "0.2"
type: Class
title: Information Theoretic Security
resource: urn:ngm:class:information-theoretic-security
domain: security
description: Information theoretic security is a class of cryptographic guarantee in which a scheme is secure against an adversary with unlimited computational power, because the ciphertext or protocol transcript carries no statistical information about the secret. Unlike computational security, which rests on the assumed hardness of mathematical problems, these guarantees follow from the structure of informat
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cryptography
requires:
  - urn:ngm:class:information-theory
enables:
  - urn:ngm:class:secret-sharing
  - urn:ngm:class:commitment-scheme
implements:
  - urn:ngm:class:secret-sharing
contrastsWith:
  - urn:ngm:class:encryption
bridgesTo:
  - urn:ngm:class:quantum-key-distribution
uses:
  - urn:ngm:class:information-theory
supports:
  - urn:ngm:class:quantum-key-distribution
partOf:
  - urn:ngm:class:cryptography
relatedTo:
  - urn:ngm:class:information-theory
  - urn:ngm:class:cryptography
---

# Information Theoretic Security

Information theoretic security is a class of cryptographic guarantee in which a scheme is secure against an adversary with unlimited computational power, because the ciphertext or protocol transcript carries no statistical information about the secret. Unlike computational security, which rests on the assumed hardness of mathematical problems, these guarantees follow from the structure of information itself and remain valid even against future advances such as quantum computers. Canonical examples include the one-time pad and threshold secret sharing.
