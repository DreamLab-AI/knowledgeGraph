---
okf_version: "0.2"
type: Class
title: HNSW Index
resource: urn:ngm:class:hnsw-index
domain: data
description: An HNSW (Hierarchical Navigable Small World) index is a graph-based data structure for approximate nearest-neighbour search over high-dimensional vectors. It builds a multi-layer proximity graph where greedy traversal from a sparse top layer down to a dense base layer locates close vectors in logarithmic time. HNSW is the standard index backing vector databases and semantic search at scale.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:data-management
relatedTo:
  - urn:ngm:class:semantic-search
  - urn:ngm:class:storage-infrastructure
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# HNSW Index

An HNSW (Hierarchical Navigable Small World) index is a graph-based data structure for approximate nearest-neighbour search over high-dimensional vectors. It builds a multi-layer proximity graph where greedy traversal from a sparse top layer down to a dense base layer locates close vectors in logarithmic time. HNSW is the standard index backing vector databases and semantic search at scale.
