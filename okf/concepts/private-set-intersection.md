---
okf_version: "0.2"
type: Class
title: Private Set Intersection
resource: urn:ngm:class:private-set-intersection
domain: security
description: Private set intersection (PSI) is a cryptographic protocol that allows two or more parties to compute the intersection of their private sets without revealing any element outside that intersection to one another. It is built from techniques such as oblivious transfer, homomorphic encryption, or Bloom filter-based hashing, and is a specialised instance of secure multi-party computation restricted t
maturity: established
quality: 0
is-a:
  - urn:ngm:class:multi-party-computation
---

# Private Set Intersection

Private set intersection (PSI) is a cryptographic protocol that allows two or more parties to compute the intersection of their private sets without revealing any element outside that intersection to one another. It is built from techniques such as oblivious transfer, homomorphic encryption, or Bloom filter-based hashing, and is a specialised instance of secure multi-party computation restricted to the set-intersection function. PSI is used in applications such as contact discovery, privacy-preserving advertising measurement, and cross-organisation fraud detection, where parties need to find common records without pooling raw data. Its efficiency has improved substantially with modern oblivious transfer extension protocols, making PSI practical at scale for sets with millions of elements.
