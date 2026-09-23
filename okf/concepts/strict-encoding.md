---
okf_version: "0.2"
type: Class
title: Strict Encoding
resource: urn:ngm:class:strict-encoding
domain: blockchain
description: Strict encoding is a deterministic binary serialisation scheme used in the RGB protocol that guarantees a single canonical byte representation for any given data structure. By forbidding ambiguous orderings and optional layout choices, it ensures that independently computed commitments and hashes match exactly, which is essential for client-side validation. It pairs with strict types to give RGB i
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-primitive
relatedTo:
  - urn:ngm:class:rgb-and-client-side-validation
  - urn:ngm:class:strict-types
---

# Strict Encoding

Strict encoding is a deterministic binary serialisation scheme used in the RGB protocol that guarantees a single canonical byte representation for any given data structure. By forbidding ambiguous orderings and optional layout choices, it ensures that independently computed commitments and hashes match exactly, which is essential for client-side validation. It pairs with strict types to give RGB its reproducible, consensus-free verification.
