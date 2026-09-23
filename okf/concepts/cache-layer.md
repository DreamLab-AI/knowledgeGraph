---
okf_version: "0.2"
type: Class
title: Cache Layer
resource: urn:ngm:class:cache-layer
domain: infrastructure
description: A cache layer is an intermediate storage tier interposed between a data consumer and an authoritative data source, holding frequently or recently accessed data in faster storage to reduce latency, decrease load on origin systems, and improve overall system throughput. Cache layers operate at multiple levels of a computing stack—CPU caches, in-process memory caches, distributed shared caches, and e
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:storage-layer
enables:
  - urn:ngm:class:performance-optimization
  - urn:ngm:class:scalability
uses:
  - urn:ngm:class:kv-cache
  - urn:ngm:class:data-storage
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:content-delivery-network-cdn
  - urn:ngm:class:database-system
---

# Cache Layer

A cache layer is an intermediate storage tier interposed between a data consumer and an authoritative data source, holding frequently or recently accessed data in faster storage to reduce latency, decrease load on origin systems, and improve overall system throughput. Cache layers operate at multiple levels of a computing stack—CPU caches, in-process memory caches, distributed shared caches, and edge CDN caches—each exploiting temporal or spatial locality of access patterns. Correctness requires coherence protocols or explicit invalidation strategies to prevent stale data from being served.
