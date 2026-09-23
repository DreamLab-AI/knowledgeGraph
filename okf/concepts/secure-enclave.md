---
okf_version: "0.2"
type: Class
title: Secure Enclave
resource: urn:ngm:class:secure-enclave
domain: security
description: A secure enclave is a hardware-isolated execution environment embedded within a processor that maintains confidentiality and integrity guarantees for code and data even when the host operating system, hypervisor, or other privileged software is compromised. Implemented through technologies such as Intel SGX, ARM TrustZone, Apple Secure Enclave Processor, and AMD SEV-SNP, these environments use har
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:tee
hasPart:
  - urn:ngm:class:remote-attestation
  - urn:ngm:class:memory-encryption
  - urn:ngm:class:sealed-storage
requires:
  - urn:ngm:class:hardware-root-of-trust
  - urn:ngm:class:cryptographic-key-management
enables:
  - urn:ngm:class:privacy-preserving-machine-learning
  - urn:ngm:class:secure-multi-party-computation
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:confidential-smart-contract
  - urn:ngm:class:digital-rights-management
contrastsWith:
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:virtual-machine
  - urn:ngm:class:hypervisor
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:blockchain
  - urn:ngm:class:de-fi
uses:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:side-channel-attack
partOf:
  - urn:ngm:class:confidential-computing
  - urn:ngm:class:hardware-root-of-trust
relatedTo:
  - urn:ngm:class:intel-sgx
  - urn:ngm:class:arm-trust-zone
  - urn:ngm:class:amd-sev
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:supply-chain-security
---

# Secure Enclave

A secure enclave is a hardware-isolated execution environment embedded within a processor that maintains confidentiality and integrity guarantees for code and data even when the host operating system, hypervisor, or other privileged software is compromised. Implemented through technologies such as Intel SGX, ARM TrustZone, Apple Secure Enclave Processor, and AMD SEV-SNP, these environments use hardware memory encryption and access-control mechanisms enforced within the CPU package itself. Remote attestation allows a verifier to cryptographically confirm that specific code runs inside a genuine, unmodified enclave before transmitting sensitive data to it, without trusting the surrounding software stack. Secure enclaves are foundational to confidential computing, privacy-preserving machine learning, decentralised identity, and secure multi-party computation.
