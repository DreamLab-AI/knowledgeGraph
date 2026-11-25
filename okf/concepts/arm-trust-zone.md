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
  - urn:ngm:class:trusted-execution-environment
enables:
  - urn:ngm:class:secure-enclave
supports:
  - urn:ngm:class:hardware-security
relatedTo:
  - urn:ngm:class:trusted-execution-environment
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# ARM TrustZone

ARM TrustZone is a hardware security technology built into ARM processors that partitions the system into two isolated execution worlds — a Secure World and a Normal World — enforced at the level of the CPU, memory, and peripherals. Sensitive code and data, such as cryptographic keys and biometric matching, run in the Secure World inaccessible to the rich operating system in the Normal World, providing a trusted execution environment without a separate security chip. It is ubiquitous in mobile devices, embedded systems, and IoT hardware.
