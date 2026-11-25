---
okf_version: "0.2"
type: Class
title: Caching
resource: urn:ngm:class:caching
domain: infrastructure
description: Caching is the technique of storing copies of frequently accessed data or computed results in a faster, closer storage tier so that subsequent requests can be served without repeating the expensive original operation. It trades additional memory or storage for reduced latency and lower load on backend systems, governed by policies for placement, expiry and invalidation. Caches appear at every laye
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:performance-optimization
hasPart:
  - urn:ngm:class:content-delivery-network
enables:
  - urn:ngm:class:latency
dependsOn:
  - urn:ngm:class:memory-management
contrastsWith:
  - urn:ngm:class:in-memory-computing
bridgesTo:
  - urn:ngm:class:content-delivery-network
uses:
  - urn:ngm:class:memory-management
  - urn:ngm:class:state-management
supports:
  - urn:ngm:class:scalability
  - urn:ngm:class:throughput
partOf:
  - urn:ngm:class:performance-optimization
relatedTo:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:load-balancing
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:data-pipeline
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Caching

Caching is the technique of storing copies of frequently accessed data or computed results in a faster, closer storage tier so that subsequent requests can be served without repeating the expensive original operation. It trades additional memory or storage for reduced latency and lower load on backend systems, governed by policies for placement, expiry and invalidation. Caches appear at every layer of a system, from CPU registers and operating systems to content delivery networks and application-level stores.
