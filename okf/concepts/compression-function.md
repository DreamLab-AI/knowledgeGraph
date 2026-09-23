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
---

# Compression Function

A compression function is a fixed-input-length cryptographic primitive that maps two inputs (a chaining value and a message block) to a single shorter output. It is the core building block of iterated hash functions, where it is applied repeatedly under constructions such as Merkle-Damgard to process arbitrary-length messages. Its collision and preimage resistance directly determine the security of the hash function built on top of it.
