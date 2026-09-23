---
okf_version: "0.2"
type: Class
title: Cryptographic Key Management
resource: urn:ngm:class:cryptographic-key-management
domain: security
description: The administration of cryptographic keys throughout their lifecycle, including generation, storage, distribution, rotation, backup, recovery, and destruction, ensuring the security and availability of keying material while preventing unauthorized access or compromise.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:cryptography
hasPart:
  - urn:ngm:class:key-generation
  - urn:ngm:class:key-rotation
  - urn:ngm:class:key-revocation
requires:
  - urn:ngm:class:random-number-generation
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:cryptographic-infrastructure
enables:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:encryption
  - urn:ngm:class:authentication
dependsOn:
  - urn:ngm:class:cryptographic-keys
  - urn:ngm:class:private-key
implements:
  - urn:ngm:class:nist-sp-800-57
  - urn:ngm:class:fips-140-3
contrastsWith:
  - urn:ngm:class:password-management
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:ai-agent-system
uses:
  - urn:ngm:class:key-derivation-function
  - urn:ngm:class:secure-enclave
supports:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:data-protection
  - urn:ngm:class:private-key
standardizedBy:
  - urn:ngm:class:nist
partOf:
  - urn:ngm:class:security-architecture
relatedTo:
  - urn:ngm:class:post-quantum-cryptography
---

# Cryptographic Key Management

The administration of cryptographic keys throughout their lifecycle, including generation, storage, distribution, rotation, backup, recovery, and destruction, ensuring the security and availability of keying material while preventing unauthorized access or compromise.
