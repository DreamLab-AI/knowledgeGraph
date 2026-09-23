---
okf_version: "0.2"
type: Class
title: Query Optimiser
resource: urn:ngm:class:query-optimiser
domain: data
description: A query optimiser is the component of a database management system that transforms a declarative query into an efficient physical execution plan. It enumerates candidate plans, estimates their cost using statistics about data distribution and access paths, and selects the plan expected to minimise resource usage. Cost-based optimisers rely on cardinality estimation and index awareness, while rule-
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:query-engine
hasPart:
  - urn:ngm:class:indexing
  - urn:ngm:class:statistics
requires:
  - urn:ngm:class:statistics
  - urn:ngm:class:indexing
enables:
  - urn:ngm:class:performance-optimization
uses:
  - urn:ngm:class:sql
  - urn:ngm:class:relational-database
supports:
  - urn:ngm:class:performance-optimization
  - urn:ngm:class:database-query
partOf:
  - urn:ngm:class:database-management-system
relatedTo:
  - urn:ngm:class:query-engine
  - urn:ngm:class:database
  - urn:ngm:class:caching
  - urn:ngm:class:postgre-sql
---

# Query Optimiser

A query optimiser is the component of a database management system that transforms a declarative query into an efficient physical execution plan. It enumerates candidate plans, estimates their cost using statistics about data distribution and access paths, and selects the plan expected to minimise resource usage. Cost-based optimisers rely on cardinality estimation and index awareness, while rule-based optimisers apply heuristic transformations.
