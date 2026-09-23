---
okf_version: "0.2"
type: Class
title: Discovery Layer
resource: urn:ngm:class:discovery-layer
domain: spatial-computing
description: Functional layer responsible for search, navigation, and exposure of metaverse experiences and assets through indexing, search engines, and recommendation systems.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-platform-and-environment
hasPart:
  - urn:ngm:class:recommendation-system
  - urn:ngm:class:metadata-registry
  - urn:ngm:class:search-engine
  - urn:ngm:class:content-indexer
requires:
  - urn:ngm:class:query-interface
  - urn:ngm:class:data-storage
  - urn:ngm:class:metadata-schema
  - urn:ngm:class:content-catalog
enables:
  - urn:ngm:class:content-discovery
  - urn:ngm:class:navigation
  - urn:ngm:class:personalized-recommendations
  - urn:ngm:class:navigation
  - urn:ngm:class:asset-browsing
bridgesTo:
  - urn:ngm:class:telecollaboration
partOf:
  - urn:ngm:class:data-layer
---

# Discovery Layer

Functional layer responsible for search, navigation, and exposure of metaverse experiences and assets through indexing, search engines, and recommendation systems.
