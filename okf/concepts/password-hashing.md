---
okf_version: "0.2"
type: Class
title: Password Hashing
resource: urn:ngm:class:password-hashing
domain: security
description: Password hashing is the practice of transforming user passwords into fixed-length irreversible digests before storage, so that a breach of the credential store does not directly reveal the underlying secrets. Secure schemes deliberately use slow, memory-hard functions combined with a unique per-user salt to defeat precomputation and brute-force attacks. Established algorithms such as Argon2, scryp
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:key-derivation-function
requires:
  - urn:ngm:class:entropy
  - urn:ngm:class:random-number-generation
enables:
  - urn:ngm:class:authentication
dependsOn:
  - urn:ngm:class:cryptographic-hash-function
implements:
  - urn:ngm:class:key-derivation-function
contrastsWith:
  - urn:ngm:class:symmetric-encryption
bridgesTo:
  - urn:ngm:class:authentication
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:pseudorandom-function
supports:
  - urn:ngm:class:authentication
  - urn:ngm:class:authentication-protocol
partOf:
  - urn:ngm:class:security
relatedTo:
  - urn:ngm:class:key-derivation-function
  - urn:ngm:class:symmetric-encryption
---

# Password Hashing

Password hashing is the practice of transforming user passwords into fixed-length irreversible digests before storage, so that a breach of the credential store does not directly reveal the underlying secrets. Secure schemes deliberately use slow, memory-hard functions combined with a unique per-user salt to defeat precomputation and brute-force attacks. Established algorithms such as Argon2, scrypt, bcrypt and PBKDF2 expose tunable cost parameters that can be raised as hardware improves. Password hashing is a specialised application of key derivation functions oriented towards verifying human-chosen secrets.
