---
okf_version: "0.2"
type: Class
title: Pseudorandom Function
resource: urn:ngm:class:pseudorandom-function
domain: security
description: A pseudorandom function (PRF) is a keyed family of functions whose outputs are computationally indistinguishable from those of a truly random function to any adversary lacking the key. PRFs are a foundational primitive in modern cryptography, providing the security guarantee that underlies message authentication codes, key derivation, and many symmetric protocols. Given the same key and input a PR
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:security
requires:
  - urn:ngm:class:entropy
enables:
  - urn:ngm:class:message-authentication-code
  - urn:ngm:class:key-derivation-function
implements:
  - urn:ngm:class:hmac
contrastsWith:
  - urn:ngm:class:cryptographic-hash-function
bridgesTo:
  - urn:ngm:class:key-derivation-function
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:random-number-generation
supports:
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:authentication
partOf:
  - urn:ngm:class:security
relatedTo:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:zero-knowledge-proof
---

# Pseudorandom Function

A pseudorandom function (PRF) is a keyed family of functions whose outputs are computationally indistinguishable from those of a truly random function to any adversary lacking the key. PRFs are a foundational primitive in modern cryptography, providing the security guarantee that underlies message authentication codes, key derivation, and many symmetric protocols. Given the same key and input a PRF is deterministic, yet without the key its outputs reveal no exploitable structure. Closely related is the pseudorandom permutation, which adds invertibility and models block ciphers.
