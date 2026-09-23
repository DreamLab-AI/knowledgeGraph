---
okf_version: "0.2"
type: Class
title: Query Engine
resource: urn:ngm:class:query-engine
domain: infrastructure
description: A query engine is the software component that parses, plans, optimises, and executes declarative queries against one or more data stores, returning result sets to callers. It transforms a high-level query into an efficient physical execution plan using statistics, indexes, and cost models, and may operate over a single database, a data warehouse, or federated sources, forming the computational cor
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:database-system
hasPart:
  - urn:ngm:class:indexing
requires:
  - urn:ngm:class:indexing
enables:
  - urn:ngm:class:full-text-search
  - urn:ngm:class:olap
dependsOn:
  - urn:ngm:class:data-management
implements:
  - urn:ngm:class:sql
uses:
  - urn:ngm:class:sql
  - urn:ngm:class:columnar-storage
supports:
  - urn:ngm:class:data-warehouse
partOf:
  - urn:ngm:class:database-system
relatedTo:
  - urn:ngm:class:olap
  - urn:ngm:class:columnar-storage
---

# Query Engine

A query engine is the software component that parses, plans, optimises, and executes declarative queries against one or more data stores, returning result sets to callers. It transforms a high-level query into an efficient physical execution plan using statistics, indexes, and cost models, and may operate over a single database, a data warehouse, or federated sources, forming the computational core of database and analytics systems.
