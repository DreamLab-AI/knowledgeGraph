---
okf_version: "0.2"
type: Class
title: Memory Encryption
resource: urn:ngm:class:memory-encryption
domain: security
description: Memory encryption is the protection of data held in a system's volatile memory (RAM) by encrypting it transparently between the processor and the memory controller. It defends against physical attacks such as cold-boot extraction and bus snooping, and underpins confidential computing by keeping a workload's working set unreadable to other tenants, the hypervisor, or anyone with physical access. Mo
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:encryption
requires:
  - urn:ngm:class:key-management
  - urn:ngm:class:cryptography
enables:
  - urn:ngm:class:data-protection
dependsOn:
  - urn:ngm:class:trusted-execution-environment
implements:
  - urn:ngm:class:encryption
contrastsWith:
  - urn:ngm:class:homomorphic-encryption
bridgesTo:
  - urn:ngm:class:trusted-execution-environment
uses:
  - urn:ngm:class:hardware-security-module
supports:
  - urn:ngm:class:secure-enclave
partOf:
  - urn:ngm:class:confidential-computing
relatedTo:
  - urn:ngm:class:side-channel-attack
  - urn:ngm:class:cryptography
  - urn:ngm:class:security
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Memory Encryption

Memory encryption is the protection of data held in a system's volatile memory (RAM) by encrypting it transparently between the processor and the memory controller. It defends against physical attacks such as cold-boot extraction and bus snooping, and underpins confidential computing by keeping a workload's working set unreadable to other tenants, the hypervisor, or anyone with physical access. Modern implementations apply per-page or per-VM keys managed within the CPU package so that plaintext never leaves the trust boundary of the silicon.
