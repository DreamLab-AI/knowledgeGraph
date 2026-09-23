---
okf_version: "0.2"
type: Class
title: Deterministic Serialisation
resource: urn:ngm:class:deterministic-serialisation
domain: data
description: Deterministic serialisation is the encoding of structured data into bytes such that semantically identical inputs always yield exactly the same byte sequence. It fixes ambiguities like map-key ordering, number formatting, and whitespace so that the output is canonical and reproducible. This property is essential for hashing, digital signatures, and content addressing, where any byte difference cha
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:data-management
relatedTo:
  - urn:ngm:class:uri-canonicaliser
  - urn:ngm:class:content-addressing
---

# Deterministic Serialisation

Deterministic serialisation is the encoding of structured data into bytes such that semantically identical inputs always yield exactly the same byte sequence. It fixes ambiguities like map-key ordering, number formatting, and whitespace so that the output is canonical and reproducible. This property is essential for hashing, digital signatures, and content addressing, where any byte difference changes the resulting digest.
