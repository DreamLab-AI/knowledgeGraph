---
okf_version: "0.2"
type: Class
title: Asset Database
resource: urn:ngm:class:asset-database
domain: infrastructure
description: An Asset Database is a structured, queryable repository that stores descriptive records, binary references, version histories, and relational metadata for digital assets within a production or distribution system. It provides the persistent backbone enabling discovery, retrieval, provenance tracking, and lifecycle management of assets across teams and pipelines.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:database-system
hasPart:
  - urn:ngm:class:metadata
uses:
  - urn:ngm:class:metadata-schema
  - urn:ngm:class:search-engine
supports:
  - urn:ngm:class:asset-management-system
  - urn:ngm:class:digital-asset-management
relatedTo:
  - urn:ngm:class:knowledge-graph
---

# Asset Database

An Asset Database is a structured, queryable repository that stores descriptive records, binary references, version histories, and relational metadata for digital assets within a production or distribution system. It provides the persistent backbone enabling discovery, retrieval, provenance tracking, and lifecycle management of assets across teams and pipelines.
