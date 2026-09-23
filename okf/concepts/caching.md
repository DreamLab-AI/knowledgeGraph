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
  - urn:ngm:class:cdn
enables:
  - urn:ngm:class:latency
dependsOn:
  - urn:ngm:class:memory-management
contrastsWith:
  - urn:ngm:class:in-memory-computing
bridgesTo:
  - urn:ngm:class:cdn
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
---

# Caching

Caching is the technique of storing copies of frequently accessed data or computed results in a faster, closer storage tier so that subsequent requests can be served without repeating the expensive original operation. It trades additional memory or storage for reduced latency and lower load on backend systems, governed by policies for placement, expiry and invalidation. Caches appear at every layer of a system, from CPU registers and operating systems to content delivery networks and application-level stores.
