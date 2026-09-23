---
okf_version: "0.2"
type: Class
title: Canonical JSON
resource: urn:ngm:class:canonical-json
domain: infrastructure
description: Canonical JSON is a normalised serialisation form of JSON that specifies a unique, deterministic byte-level representation for any given JSON value, enabling reliable hashing, digital signatures, and binary equality comparisons over JSON documents. Because RFC 8259 JSON permits equivalent representations that differ in whitespace, key ordering, and number formatting, canonical forms such as JCS (J
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:data-format
enables:
  - urn:ngm:class:interoperability
uses:
  - urn:ngm:class:hash-function
  - urn:ngm:class:cryptography
standardizedBy:
  - urn:ngm:class:standards-body
relatedTo:
  - urn:ngm:class:data-format-standard
  - urn:ngm:class:interoperability-standard
---

# Canonical JSON

Canonical JSON is a normalised serialisation form of JSON that specifies a unique, deterministic byte-level representation for any given JSON value, enabling reliable hashing, digital signatures, and binary equality comparisons over JSON documents. Because RFC 8259 JSON permits equivalent representations that differ in whitespace, key ordering, and number formatting, canonical forms such as JCS (JSON Canonicalization Scheme, RFC 8785) and earlier proposals impose rules including lexicographic key sorting, no insignificant whitespace, and IEEE 754 double-precision serialisation for numbers. This determinism is essential in cryptographic contexts where the same logical object must produce the same digest regardless of which implementation serialised it.
