---
okf_version: "0.2"
type: Class
title: Query Processing
resource: urn:ngm:class:query-processing
domain: infrastructure
description: Query processing is the set of activities a database system performs to translate a declarative query into an efficient execution that returns the requested data. It spans parsing and semantic analysis, logical and physical query optimisation, plan selection, and execution against stored data and indexes. Effective query processing is central to database performance, determining how quickly result
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:database-system
hasPart:
  - urn:ngm:class:relational-database
  - urn:ngm:class:indexing
requires:
  - urn:ngm:class:indexing
  - urn:ngm:class:sql
enables:
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:transaction-processing
dependsOn:
  - urn:ngm:class:indexing
bridgesTo:
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:sql
supports:
  - urn:ngm:class:transaction-processing
relatedTo:
  - urn:ngm:class:database-system
  - urn:ngm:class:relational-database
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Query Processing

Query processing is the set of activities a database system performs to translate a declarative query into an efficient execution that returns the requested data. It spans parsing and semantic analysis, logical and physical query optimisation, plan selection, and execution against stored data and indexes. Effective query processing is central to database performance, determining how quickly results are produced and how system resources are used.
