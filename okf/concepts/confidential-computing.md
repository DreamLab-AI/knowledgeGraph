---
okf_version: "0.2"
type: Class
title: Confidential Computing
resource: urn:ngm:class:confidential-computing
domain: security
description: A hardware-based security paradigm that protects data in use by isolating computation within trusted execution environments (TEEs) backed by processor security extensions (Intel SGX, AMD SEV, ARM TrustZone). It extends encryption from data at rest and in transit to data actively being processed, preventing access even by privileged software, hypervisors, or cloud providers. Key AI applications inc
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:hardware-security
hasPart:
  - urn:ngm:class:tee
  - urn:ngm:class:secure-enclave
  - urn:ngm:class:remote-attestation
requires:
  - urn:ngm:class:memory-encryption
enables:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:private-inference
  - urn:ngm:class:privacy-preserving-machine-learning
dependsOn:
  - urn:ngm:class:intel-sgx
  - urn:ngm:class:amd-sev
  - urn:ngm:class:arm-trust-zone
implements:
  - urn:ngm:class:zero-trust-architecture
contrastsWith:
  - urn:ngm:class:tls
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:homomorphic-encryption
  - urn:ngm:class:secure-multi-party-computation
  - urn:ngm:class:differential-privacy
supports:
  - urn:ngm:class:gdpr-compliance
  - urn:ngm:class:hardware-security-module
standardizedBy:
  - urn:ngm:class:confidential-computing-consortium
partOf:
  - urn:ngm:class:cloud-security
relatedTo:
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:data-security
  - urn:ngm:class:ai-security
---

# Confidential Computing

A hardware-based security paradigm that protects data in use by isolating computation within trusted execution environments (TEEs) backed by processor security extensions (Intel SGX, AMD SEV, ARM TrustZone). It extends encryption from data at rest and in transit to data actively being processed, preventing access even by privileged software, hypervisors, or cloud providers. Key AI applications include secure model training, private inference, and TEE-protected federated learning aggregation.
