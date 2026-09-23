---
okf_version: "0.2"
type: Class
title: Cryptographic Key
resource: urn:ngm:class:cryptographic-key
domain: security
description: A piece of secret or public information that parameterises a cryptographic algorithm, determining how data is encrypted, decrypted or signed. Keys are the inputs that make cryptographic operations specific and reversible only to authorised parties.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptography
hasPart:
  - urn:ngm:class:private-key
  - urn:ngm:class:public-key
  - urn:ngm:class:symmetric-key
requires:
  - urn:ngm:class:encryption
  - urn:ngm:class:random-number-generation
  - urn:ngm:class:key-derivation-function
enables:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:authentication
  - urn:ngm:class:data-integrity
  - urn:ngm:class:secure-communication
  - urn:ngm:class:cryptographic-infrastructure
dependsOn:
  - urn:ngm:class:cryptographic-algorithm
  - urn:ngm:class:entropy-source
implements:
  - urn:ngm:class:asymmetric-cryptography
  - urn:ngm:class:symmetric-cryptography
contrastsWith:
  - urn:ngm:class:password
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:digital-identity
  - urn:ngm:class:post-quantum-cryptography
  - urn:ngm:class:private-key
  - urn:ngm:class:key-management
uses:
  - urn:ngm:class:elliptic-curve-cryptography
supports:
  - urn:ngm:class:tls
  - urn:ngm:class:zero-knowledge-proof
standardizedBy:
  - urn:ngm:class:nist
  - urn:ngm:class:ietf
partOf:
  - urn:ngm:class:key-management
  - urn:ngm:class:cryptographic-infrastructure
relatedTo:
  - urn:ngm:class:key-exchange
---

# Cryptographic Key

A piece of secret or public information that parameterises a cryptographic algorithm, determining how data is encrypted, decrypted or signed. Keys are the inputs that make cryptographic operations specific and reversible only to authorised parties.
