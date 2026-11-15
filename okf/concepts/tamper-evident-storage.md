---
okf_version: "0.2"
type: Class
title: Tamper-Evident Storage
resource: urn:ngm:class:tamper-evident-storage
domain: security
description: Tamper-evident storage is a data storage architecture designed so that any unauthorised modification of stored records leaves a detectable trace, typically achieved through cryptographic hash chaining, content addressing, or append-only write structures such as a Merkle DAG. It provides the storage-layer implementation of tamper evidence, ensuring that audit logs and other sensitive records can be
maturity: established
quality: 0
is-a:
  - urn:ngm:class:tamper-evidence
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Tamper-Evident Storage

Tamper-evident storage is a data storage architecture designed so that any unauthorised modification of stored records leaves a detectable trace, typically achieved through cryptographic hash chaining, content addressing, or append-only write structures such as a Merkle DAG. It provides the storage-layer implementation of tamper evidence, ensuring that audit logs and other sensitive records can be verified for integrity after the fact rather than merely trusted. Tamper-evident storage is a foundational requirement for audit logs used in regulated or security-critical systems.
