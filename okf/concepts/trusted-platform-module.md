---
okf_version: "0.2"
type: Class
title: Trusted Platform Module
resource: urn:ngm:class:trusted-platform-module
domain: security
description: A Trusted Platform Module (TPM) is a dedicated, tamper-resistant hardware component that provides cryptographic functions and secure storage of keys and platform measurements. It generates and protects keys that never leave the chip in plaintext, records integrity measurements in platform configuration registers, and supports operations such as secure boot and remote attestation. Defined by an ope
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:hardware-security-module
hasPart:
  - urn:ngm:class:cryptographic-key
  - urn:ngm:class:non-volatile-memory
requires:
  - urn:ngm:class:tamper-resistance
enables:
  - urn:ngm:class:secure-boot
  - urn:ngm:class:remote-attestation
contrastsWith:
  - urn:ngm:class:tee
bridgesTo:
  - urn:ngm:class:key-management
  - urn:ngm:class:confidential-computing
uses:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:digital-signature
supports:
  - urn:ngm:class:root-of-trust
  - urn:ngm:class:authentication
relatedTo:
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:fido-alliance
  - urn:ngm:class:secure-enclave
---

# Trusted Platform Module

A Trusted Platform Module (TPM) is a dedicated, tamper-resistant hardware component that provides cryptographic functions and secure storage of keys and platform measurements. It generates and protects keys that never leave the chip in plaintext, records integrity measurements in platform configuration registers, and supports operations such as secure boot and remote attestation. Defined by an open Trusted Computing Group specification, the TPM acts as a hardware root of trust on personal computers, servers and embedded devices.
