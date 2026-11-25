---
okf_version: "0.2"
type: Class
title: Bloom Filter
resource: urn:ngm:class:bloom-filter
domain: infrastructure
description: "A Bloom Filter is a space-efficient probabilistic data structure that tests whether an element is a member of a set, accepting a controllable false-positive rate while guaranteeing zero false negatives. Invented by Burton Howard Bloom in 1970, the structure uses multiple hash functions to map elements to bit positions within a fixed-size bit array. Membership queries are answered in constant time "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:data-structure
enables:
  - urn:ngm:class:latency
  - urn:ngm:class:membership-inference
  - urn:ngm:class:privacy-filter
contrastsWith:
  - urn:ngm:class:spatial-data-structure
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:hash-collision
relatedTo:
  - urn:ngm:class:hash-function
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:distributed-data-structure
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Bloom Filter

A Bloom Filter is a space-efficient probabilistic data structure that tests whether an element is a member of a set, accepting a controllable false-positive rate while guaranteeing zero false negatives. Invented by Burton Howard Bloom in 1970, the structure uses multiple hash functions to map elements to bit positions within a fixed-size bit array. Membership queries are answered in constant time regardless of set size, making Bloom Filters indispensable in high-throughput systems where exact lookup is prohibitively expensive. They are widely deployed in databases, networking, distributed caches, and blockchain nodes.
