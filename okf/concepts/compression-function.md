---
okf_version: "0.2"
type: Class
title: Compression Function
resource: urn:ngm:class:compression-function
domain: security
description: A compression function is a fixed-input-length cryptographic primitive that maps two inputs (a chaining value and a message block) to a single shorter output. It is the core building block of iterated hash functions, where it is applied repeatedly under constructions such as Merkle-Damgard to process arbitrary-length messages. Its collision and preimage resistance directly determine the security o
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-primitive
partOf:
  - urn:ngm:class:hash-function
relatedTo:
  - urn:ngm:class:hash-function
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Compression Function

A compression function is a fixed-input-length cryptographic primitive that maps two inputs (a chaining value and a message block) to a single shorter output. It is the core building block of iterated hash functions, where it is applied repeatedly under constructions such as Merkle-Damgard to process arbitrary-length messages. Its collision and preimage resistance directly determine the security of the hash function built on top of it.
