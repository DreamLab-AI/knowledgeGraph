---
okf_version: "0.2"
type: Class
title: Encrypted Storage
resource: urn:ngm:class:encrypted-storage
domain: security
description: Encrypted Storage is the protection of data at rest by transforming it with cryptographic algorithms so that it is unreadable without the corresponding decryption keys. It can operate at the disk, filesystem, database, or object level, and is essential for confidentiality of sensitive data such as biometric templates. Proper key management, including secure key generation, rotation, and access con
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:infra-security-and-identity
relatedTo:
  - urn:ngm:class:biometric-binding-mechanism
  - urn:ngm:class:etsi-domain-data-management-security
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Encrypted Storage

Encrypted Storage is the protection of data at rest by transforming it with cryptographic algorithms so that it is unreadable without the corresponding decryption keys. It can operate at the disk, filesystem, database, or object level, and is essential for confidentiality of sensitive data such as biometric templates. Proper key management, including secure key generation, rotation, and access control, is critical to its effectiveness.
