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
---

# Query Processing

Query processing is the set of activities a database system performs to translate a declarative query into an efficient execution that returns the requested data. It spans parsing and semantic analysis, logical and physical query optimisation, plan selection, and execution against stored data and indexes. Effective query processing is central to database performance, determining how quickly results are produced and how system resources are used.
