---
okf_version: "0.2"
type: Class
title: Intel SGX
resource: urn:ngm:class:intel-sgx
domain: security
description: Intel SGX (Software Guard Extensions) is a set of Intel processor instructions that create hardware-isolated memory regions called enclaves, protecting sensitive code and data from the operating system, hypervisor, and other privileged software on the same system, with remote attestation enabling third-party verification of enclave integrity.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:tee
hasPart:
  - urn:ngm:class:secure-enclave
  - urn:ngm:class:remote-attestation
requires:
  - urn:ngm:class:intel
  - urn:ngm:class:hardware
  - urn:ngm:class:encryption
enables:
  - urn:ngm:class:information-security
  - urn:ngm:class:confidential-computing
  - urn:ngm:class:secure-multi-party-computation
dependsOn:
  - urn:ngm:class:hardware
  - urn:ngm:class:encryption
  - urn:ngm:class:key-management
implements:
  - urn:ngm:class:tee
  - urn:ngm:class:hardware-security-module
contrastsWith:
  - urn:ngm:class:arm-trust-zone
  - urn:ngm:class:amd-sev
bridgesTo:
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:blockchain
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:encryption
  - urn:ngm:class:hardware
uses:
  - urn:ngm:class:aes-encryption
  - urn:ngm:class:cryptographic-infrastructure
supports:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:secure-multi-party-computation
partOf:
  - urn:ngm:class:intel
  - urn:ngm:class:confidential-computing
relatedTo:
  - urn:ngm:class:side-channel-attack
  - urn:ngm:class:hypervisor
---

# Intel SGX

Intel SGX (Software Guard Extensions) is a set of Intel processor instructions that create hardware-isolated memory regions called enclaves, protecting sensitive code and data from the operating system, hypervisor, and other privileged software on the same system, with remote attestation enabling third-party verification of enclave integrity.
