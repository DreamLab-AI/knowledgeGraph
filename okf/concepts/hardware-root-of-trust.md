---
okf_version: "0.2"
type: Class
title: Hardware Root of Trust
resource: urn:ngm:class:hardware-root-of-trust
domain: security
description: A Hardware Root of Trust (HRoT) is an immutable, hardware-anchored set of functions and keys that a system inherently trusts and from which all higher-level security properties are derived. Implemented in silicon or a dedicated security chip, it provides the foundation for secure boot, measured boot, attestation and key protection by establishing a starting point that cannot be modified by softwar
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:security
hasPart:
  - urn:ngm:class:cryptography
  - urn:ngm:class:firmware
requires:
  - urn:ngm:class:key-management
  - urn:ngm:class:hardware-security-module
enables:
  - urn:ngm:class:authentication
  - urn:ngm:class:digital-signature
uses:
  - urn:ngm:class:encryption
  - urn:ngm:class:certificate-authority
supports:
  - urn:ngm:class:zero-trust-architecture
partOf:
  - urn:ngm:class:tee
  - urn:ngm:class:trusted-platform-module
relatedTo:
  - urn:ngm:class:secure-enclave
  - urn:ngm:class:secure-element
  - urn:ngm:class:side-channel-attack
---

# Hardware Root of Trust

A Hardware Root of Trust (HRoT) is an immutable, hardware-anchored set of functions and keys that a system inherently trusts and from which all higher-level security properties are derived. Implemented in silicon or a dedicated security chip, it provides the foundation for secure boot, measured boot, attestation and key protection by establishing a starting point that cannot be modified by software. Because every subsequent trust decision chains back to it, the integrity of the HRoT determines the trustworthiness of the entire platform.
