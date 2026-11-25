---
okf_version: "0.2"
type: Class
title: Consistent Hashing
resource: urn:ngm:class:consistent-hashing
domain: infrastructure
description: "Consistent hashing is a distribution technique that maps both data keys and storage nodes onto the same circular hash space, so that each key is assigned to the next node encountered clockwise on the ring. When a node joins or leaves, only the keys in its immediate neighbourhood are remapped rather than the entire key space, minimising data movement. Virtual nodes are commonly used to smooth load "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:distributed-hash-table
requires:
  - urn:ngm:class:hash-function
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:sharding
implements:
  - urn:ngm:class:data-partitioning
  - urn:ngm:class:load-balancing
uses:
  - urn:ngm:class:hash-function
  - urn:ngm:class:data-partitioning
supports:
  - urn:ngm:class:caching
  - urn:ngm:class:load-balancing
partOf:
  - urn:ngm:class:distributed-hash-table
relatedTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:node
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Consistent Hashing

Consistent hashing is a distribution technique that maps both data keys and storage nodes onto the same circular hash space, so that each key is assigned to the next node encountered clockwise on the ring. When a node joins or leaves, only the keys in its immediate neighbourhood are remapped rather than the entire key space, minimising data movement. Virtual nodes are commonly used to smooth load distribution across heterogeneous servers.
