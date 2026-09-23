---
okf_version: "0.2"
type: Class
title: Trusted Execution Environment
resource: urn:ngm:class:trusted-execution-environment
domain: security
description: A Trusted Execution Environment (TEE) is a hardware-enforced, isolated processing domain within a processor that guarantees confidentiality and integrity of code and data even when the host operating system, hypervisor, or privileged firmware is compromised or untrusted. TEEs are instantiated via technologies such as Intel SGX, AMD SEV-SNP, and Arm TrustZone, each providing hardware-rooted attesta
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:infra-security-and-identity
hasPart:
  - urn:ngm:class:secure-enclave
  - urn:ngm:class:remote-attestation
  - urn:ngm:class:memory-encryption
requires:
  - urn:ngm:class:hardware-root-of-trust
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:secure-boot
enables:
  - urn:ngm:class:confidential-computing
  - urn:ngm:class:privacy-enhancing-computation-pec
  - urn:ngm:class:secure-multi-party-computation
  - urn:ngm:class:private-inference
implements:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:confidential-virtual-machine
contrastsWith:
  - urn:ngm:class:software-sandboxing
  - urn:ngm:class:hypervisor-isolation
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:blockchain-oracle
uses:
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:symmetric-encryption
supports:
  - urn:ngm:class:digital-rights-management
  - urn:ngm:class:biometric-authentication
standardizedBy:
  - urn:ngm:class:confidential-computing-consortium
  - urn:ngm:class:globalplatform-specification
relatedTo:
  - urn:ngm:class:secure-element
  - urn:ngm:class:trusted-platform-module
---

# Trusted Execution Environment

A Trusted Execution Environment (TEE) is a hardware-enforced, isolated processing domain within a processor that guarantees confidentiality and integrity of code and data even when the host operating system, hypervisor, or privileged firmware is compromised or untrusted. TEEs are instantiated via technologies such as Intel SGX, AMD SEV-SNP, and Arm TrustZone, each providing hardware-rooted attestation mechanisms that allow a relying party to cryptographically verify the identity, configuration, and integrity of an enclave before exchanging sensitive material. By encrypting enclave memory pages in DRAM and enforcing access control at the silicon level, TEEs form the hardware foundation for confidential computing — enabling private AI inference, secure key management, privacy-preserving multi-party collaboration, and verifiable off-chain computation in blockchain systems.
