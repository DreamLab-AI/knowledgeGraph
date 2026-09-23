---
okf_version: "0.2"
type: Class
title: ARM TrustZone
resource: urn:ngm:class:arm-trust-zone
domain: security
description: ARM TrustZone is a hardware security technology built into ARM processors that partitions the system into two isolated execution worlds — a Secure World and a Normal World — enforced at the level of the CPU, memory, and peripherals. Sensitive code and data, such as cryptographic keys and biometric matching, run in the Secure World inaccessible to the rich operating system in the Normal World, prov
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:tee
enables:
  - urn:ngm:class:secure-enclave
supports:
  - urn:ngm:class:hardware-security
relatedTo:
  - urn:ngm:class:tee
---

# ARM TrustZone

ARM TrustZone is a hardware security technology built into ARM processors that partitions the system into two isolated execution worlds — a Secure World and a Normal World — enforced at the level of the CPU, memory, and peripherals. Sensitive code and data, such as cryptographic keys and biometric matching, run in the Secure World inaccessible to the rich operating system in the Normal World, providing a trusted execution environment without a separate security chip. It is ubiquitous in mobile devices, embedded systems, and IoT hardware.
