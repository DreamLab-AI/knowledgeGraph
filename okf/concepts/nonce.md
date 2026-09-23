---
okf_version: "0.2"
type: Class
title: Nonce
resource: urn:ngm:class:nonce
domain: security
description: A Nonce (Number used ONCE) is an arbitrary value included in a cryptographic computation to prevent replay attacks or to satisfy a target condition. In proof-of-work blockchains, miners increment a 32-bit nonce in the block header repeatedly until the SHA-256 hash of the header falls below the current difficulty target, thereby expending computational work proportional to the difficulty. In commun
maturity: established
quality: 0
is-a:
  - urn:ngm:class:cryptographic-primitive
hasPart:
  - urn:ngm:class:block-header
requires:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:random-number-generator
  - urn:ngm:class:entropy-source
enables:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-mining
  - urn:ngm:class:cryptographic-verification
  - urn:ngm:class:replay-attack-prevention
  - urn:ngm:class:challenge-response-protocol
  - urn:ngm:class:authenticated-encryption
dependsOn:
  - urn:ngm:class:difficulty-target
  - urn:ngm:class:merkle-root
contrastsWith:
  - urn:ngm:class:salt
  - urn:ngm:class:initialization-vector
  - urn:ngm:class:timestamp
bridgesTo:
  - urn:ngm:class:tls-handshake
uses:
  - urn:ngm:class:sha-256
  - urn:ngm:class:aes-gcm
partOf:
  - urn:ngm:class:cryptography
  - urn:ngm:class:block-header
relatedTo:
  - urn:ngm:class:salt
  - urn:ngm:class:mining
  - urn:ngm:class:block
  - urn:ngm:class:block-header
  - urn:ngm:class:cryptographic-security
  - urn:ngm:class:message-authentication-code
---

# Nonce

A Nonce (Number used ONCE) is an arbitrary value included in a cryptographic computation to prevent replay attacks or to satisfy a target condition. In proof-of-work blockchains, miners increment a 32-bit nonce in the block header repeatedly until the SHA-256 hash of the header falls below the current difficulty target, thereby expending computational work proportional to the difficulty. In communications protocols, nonces ensure that each session or message produces a unique ciphertext, preventing an attacker from replaying a previously captured message.
