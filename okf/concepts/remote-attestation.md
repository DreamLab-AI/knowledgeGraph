---
okf_version: "0.2"
type: Class
title: Remote Attestation
resource: urn:ngm:class:remote-attestation
domain: security
description: Remote attestation is a security mechanism by which one system proves the integrity and identity of its software and hardware state to a remote verifier. The attesting platform produces cryptographically signed evidence, rooted in a hardware root of trust, that captures measurements of its boot sequence and running code. A verifier checks this evidence against expected values and a trusted signing
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:confidential-computing
hasPart:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-key
requires:
  - urn:ngm:class:root-of-trust
  - urn:ngm:class:trusted-platform-module
enables:
  - urn:ngm:class:confidential-computing
  - urn:ngm:class:authentication
dependsOn:
  - urn:ngm:class:hardware-security-module
uses:
  - urn:ngm:class:public-key-cryptography
supports:
  - urn:ngm:class:tee
  - urn:ngm:class:secure-boot
relatedTo:
  - urn:ngm:class:intel-sgx
  - urn:ngm:class:secure-enclave
  - urn:ngm:class:key-management
---

# Remote Attestation

Remote attestation is a security mechanism by which one system proves the integrity and identity of its software and hardware state to a remote verifier. The attesting platform produces cryptographically signed evidence, rooted in a hardware root of trust, that captures measurements of its boot sequence and running code. A verifier checks this evidence against expected values and a trusted signing key before granting access or releasing secrets, allowing trust decisions to be made about a machine that is not physically controlled.
