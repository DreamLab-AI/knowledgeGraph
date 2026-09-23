---
okf_version: "0.2"
type: Class
title: Indexing
resource: urn:ngm:class:indexing
domain: data
description: Indexing is the technique of building auxiliary data structures that allow a system to locate records satisfying a query without scanning the entire dataset. By maintaining ordered or hashed mappings from key values to record locations, indexes turn linear searches into logarithmic or constant-time lookups, dramatically improving query performance at the cost of additional storage and update overh
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:data-structure
hasPart:
  - urn:ngm:class:search-index
  - urn:ngm:class:inverted-index
requires:
  - urn:ngm:class:data
  - urn:ngm:class:database
enables:
  - urn:ngm:class:information-retrieval
implements:
  - urn:ngm:class:data-structure
uses:
  - urn:ngm:class:data-structure
  - urn:ngm:class:inverted-index
supports:
  - urn:ngm:class:relational-database
  - urn:ngm:class:sql
relatedTo:
  - urn:ngm:class:sharding
  - urn:ngm:class:database-management-system
---

# Indexing

Indexing is the technique of building auxiliary data structures that allow a system to locate records satisfying a query without scanning the entire dataset. By maintaining ordered or hashed mappings from key values to record locations, indexes turn linear searches into logarithmic or constant-time lookups, dramatically improving query performance at the cost of additional storage and update overhead. It is fundamental to databases, search engines and information retrieval.
