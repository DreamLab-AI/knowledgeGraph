---
okf_version: "0.2"
type: Class
title: Trusted Execution Environments
resource: urn:ngm:class:trusted-execution-environments
domain: security
description: Trusted Execution Environments (TEEs) are hardware-enforced isolated regions of memory and compute within a processor where code and data are protected against inspection or tampering by any software outside the enclave, including privileged system software such as the operating system, hypervisor, or firmware. They use processor-level memory encryption, access-control registers, and cryptographic
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:confidential-computing
hasPart:
  - urn:ngm:class:secure-enclave
  - urn:ngm:class:remote-attestation
  - urn:ngm:class:memory-encryption
  - urn:ngm:class:trusted-measurement
requires:
  - urn:ngm:class:hardware-root-of-trust
  - urn:ngm:class:secure-boot
  - urn:ngm:class:cryptographic-attestation
enables:
  - urn:ngm:class:verifiable-computation
  - urn:ngm:class:privacy-preserving-computation
  - urn:ngm:class:secure-multi-party-computation
  - urn:ngm:class:decentralised-identity
contrastsWith:
  - urn:ngm:class:homomorphic-encryption
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:zero-knowledge-proof
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:blockchain
  - urn:ngm:class:decentralised-oracle
uses:
  - urn:ngm:class:arm-trust-zone
  - urn:ngm:class:intel-sgx
  - urn:ngm:class:amd-sev
  - urn:ngm:class:trusted-platform-module
supports:
  - urn:ngm:class:cloud-security
  - urn:ngm:class:edge-computing
  - urn:ngm:class:supply-chain-security
standardizedBy:
  - urn:ngm:class:confidential-computing-consortium
  - urn:ngm:class:globalplatform-standard
relatedTo:
  - urn:ngm:class:side-channel-attack
  - urn:ngm:class:key-management
  - urn:ngm:class:side-channel-attack
---

# Trusted Execution Environments

Trusted Execution Environments (TEEs) are hardware-enforced isolated regions of memory and compute within a processor where code and data are protected against inspection or tampering by any software outside the enclave, including privileged system software such as the operating system, hypervisor, or firmware. They use processor-level memory encryption, access-control registers, and cryptographic attestation to establish a root of trust anchored in silicon, allowing remote parties to verify the identity and integrity of the code running inside before sharing sensitive data with it. TEEs are the foundational enabling technology for confidential computing, enabling privacy-preserving computation on sensitive workloads in untrusted cloud or edge environments. Prominent implementations include Intel SGX, Intel TDX, AMD SEV-SNP, and ARM TrustZone.
