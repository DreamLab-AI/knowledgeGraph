---
okf_version: "0.2"
type: Class
title: Hardware Security Module
resource: urn:ngm:class:hardware-security-module
domain: security
description: A Hardware Security Module (HSM) is a dedicated, tamper-evident and tamper-resistant hardware appliance that generates, stores, and manages cryptographic keys in a physically protected environment, performing sensitive cryptographic operations—such as digital signing, bulk encryption, key derivation, and random-number generation—entirely within its secure boundary so that plaintext key material is
maturity: mature
quality: 0.76
is-a:
  - urn:ngm:class:infra-security-and-identity
requires:
  - urn:ngm:class:hardware-root-of-trust
  - urn:ngm:class:tamper-resistance
enables:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:key-management
  - urn:ngm:class:code-signing
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:secure-boot
  - urn:ngm:class:payment-security
contrastsWith:
  - urn:ngm:class:tee
  - urn:ngm:class:secure-enclave
  - urn:ngm:class:trusted-platform-module
  - urn:ngm:class:software-keystore
bridgesTo:
  - urn:ngm:class:confidential-computing
  - urn:ngm:class:blockchain-key-custody
uses:
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:encryption
  - urn:ngm:class:digital-signature
  - urn:ngm:class:random-number-generation
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:asymmetric-cryptography
  - urn:ngm:class:pkcs
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:asymmetric-cryptography
standardizedBy:
  - urn:ngm:class:fips-140-3
  - urn:ngm:class:pci-dss
  - urn:ngm:class:fips-140-3
  - urn:ngm:class:common-criteria
relatedTo:
  - urn:ngm:class:cryptography
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:secure-element
  - urn:ngm:class:key-management
  - urn:ngm:class:key-management
---

# Hardware Security Module

A Hardware Security Module (HSM) is a dedicated, tamper-evident and tamper-resistant hardware appliance that generates, stores, and manages cryptographic keys in a physically protected environment, performing sensitive cryptographic operations—such as digital signing, bulk encryption, key derivation, and random-number generation—entirely within its secure boundary so that plaintext key material is never exposed to the host system. HSMs are validated against formal security standards including FIPS 140-2/140-3 (Levels 1–4) and Common Criteria EAL4+, and are mandated by payment card schemes (PCI-DSS, PCI-P2PE), certificate authority trust frameworks, and government PKI and national-security infrastructures. They are available as PCIe cards, rack-mounted network appliances, USB tokens, and cloud-hosted dedicated services, all exposing a standardised PKCS#11 (Cryptoki) API. Unlike software keystores or Trusted Execution Environments, HSMs respond to physical tamper events by irreversibly zeroing all stored key material, making them the highest-assurance key-custody mechanism in mainstream deployment.
