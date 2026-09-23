---
okf_version: "0.2"
type: Class
title: Cryptographic Protocols
resource: urn:ngm:class:cryptographic-protocols
domain: security
description: Cryptographic protocols are sequences of operations using cryptographic primitives to achieve security goals such as confidentiality, integrity and authentication.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptography
hasPart:
  - urn:ngm:class:tls
  - urn:ngm:class:ipsec
  - urn:ngm:class:diffie-hellman-key-exchange
requires:
  - urn:ngm:class:encryption
  - urn:ngm:class:digital-signatures
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:cryptographic-hash-function
enables:
  - urn:ngm:class:kerberos
  - urn:ngm:class:secure-communication
  - urn:ngm:class:authentication
  - urn:ngm:class:key-exchange
  - urn:ngm:class:non-repudiation
implements:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:message-authentication-code
contrastsWith:
  - urn:ngm:class:obfuscation
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:network-security
uses:
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:asymmetric-cryptography
supports:
  - urn:ngm:class:network-security
  - urn:ngm:class:data-integrity
standardizedBy:
  - urn:ngm:class:nist
  - urn:ngm:class:ietf
relatedTo:
  - urn:ngm:class:formal-verification
  - urn:ngm:class:post-quantum-cryptography
---

# Cryptographic Protocols

Cryptographic protocols are sequences of operations using cryptographic primitives to achieve security goals such as confidentiality, integrity and authentication.
