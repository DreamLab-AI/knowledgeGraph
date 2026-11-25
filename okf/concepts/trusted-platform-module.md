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
  - urn:ngm:class:trusted-execution-environment
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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Trusted Platform Module

A Trusted Platform Module (TPM) is a dedicated, tamper-resistant hardware component that provides cryptographic functions and secure storage of keys and platform measurements. It generates and protects keys that never leave the chip in plaintext, records integrity measurements in platform configuration registers, and supports operations such as secure boot and remote attestation. Defined by an open Trusted Computing Group specification, the TPM acts as a hardware root of trust on personal computers, servers and embedded devices.
