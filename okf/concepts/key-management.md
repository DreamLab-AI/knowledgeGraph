---
okf_version: "0.2"
type: Class
title: Key Management
resource: urn:ngm:class:key-management
domain: security
description: Key management is the discipline governing the complete lifecycle of cryptographic keys, encompassing their generation using cryptographically secure random number generators and key derivation functions, secure distribution, protected storage in hardware security modules or key management services, scheduled rotation to limit exposure windows, and timely revocation upon compromise or expiry. It i
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:infra-security-and-identity
hasPart:
  - urn:ngm:class:key-generation
  - urn:ngm:class:key-rotation
  - urn:ngm:class:key-revocation
  - urn:ngm:class:certificate-lifecycle-management
requires:
  - urn:ngm:class:random-number-generation
  - urn:ngm:class:access-control
  - urn:ngm:class:identity-management
enables:
  - urn:ngm:class:encryption
  - urn:ngm:class:digital-signature
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:secure-communication
implements:
  - urn:ngm:class:envelope-encryption
  - urn:ngm:class:key-hierarchy
contrastsWith:
  - urn:ngm:class:password-management
  - urn:ngm:class:secrets-management
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:decentralised-identity
uses:
  - urn:ngm:class:cryptography
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:key-derivation-function
  - urn:ngm:class:cryptographic-infrastructure
standardizedBy:
  - urn:ngm:class:nist-sp-800-57
  - urn:ngm:class:iso-iec-27001
relatedTo:
  - urn:ngm:class:tls
  - urn:ngm:class:multi-party-computation
  - urn:ngm:class:threshold-cryptography
---

# Key Management

Key management is the discipline governing the complete lifecycle of cryptographic keys, encompassing their generation using cryptographically secure random number generators and key derivation functions, secure distribution, protected storage in hardware security modules or key management services, scheduled rotation to limit exposure windows, and timely revocation upon compromise or expiry. It is a foundational control domain for all systems relying on confidentiality, integrity, and authentication guarantees, since even mathematically strong algorithms are rendered ineffective by weak key custody practices. Key management is mandated by security standards including NIST SP 800-57 and ISO/IEC 27001 Annex A.10, and underpins PKI, envelope encryption architectures, blockchain self-custody, and zero-trust identity frameworks.
