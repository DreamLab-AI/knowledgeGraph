---
okf_version: "0.2"
type: Class
title: Key Derivation Function
resource: urn:ngm:class:key-derivation-function
domain: security
description: A cryptographic algorithm that derives one or more secret keys from a master secret using a pseudo-random function, transforming human-readable passwords or seed phrases into cryptographically secure key material while enabling hierarchical key generation, deterministic wallet recovery, and password-based encryption in security and blockchain systems.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:blockchain
requires:
  - urn:ngm:class:entropy-source
enables:
  - urn:ngm:class:asymmetric-encryption
  - urn:ngm:class:hierarchical-deterministic-wallet
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:deterministic-key-generation
dependsOn:
  - urn:ngm:class:cryptography
implements:
  - urn:ngm:class:password-hashing
  - urn:ngm:class:bip39
contrastsWith:
  - urn:ngm:class:random-key-generation
  - urn:ngm:class:symmetric-key-exchange
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:mnemonic-phrase
uses:
  - urn:ngm:class:hash-function
  - urn:ngm:class:pseudorandom-function
  - urn:ngm:class:hmac
  - urn:ngm:class:salt
supports:
  - urn:ngm:class:private-key
  - urn:ngm:class:key-management
  - urn:ngm:class:wallet-security
partOf:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:hierarchical-deterministic-wallet
relatedTo:
  - urn:ngm:class:pbkdf2
  - urn:ngm:class:scrypt
  - urn:ngm:class:argon2
  - urn:ngm:class:hkdf
---

# Key Derivation Function

A cryptographic algorithm that derives one or more secret keys from a master secret using a pseudo-random function, transforming human-readable passwords or seed phrases into cryptographically secure key material while enabling hierarchical key generation, deterministic wallet recovery, and password-based encryption in security and blockchain systems.
