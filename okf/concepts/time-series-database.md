---
okf_version: "0.2"
type: Class
title: Time-Series Database
resource: urn:ngm:class:time-series-database
domain: infrastructure
description: A time-series database (TSDB) is a database system optimised for storing, querying, and analysing data points indexed by time. It is designed for workloads dominated by high-volume, append-only writes of timestamped measurements and by queries that aggregate over time ranges. TSDBs employ time-aware partitioning, columnar layouts, and specialised compression to handle the scale and access patterns
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:database-management-system
hasPart:
  - urn:ngm:class:retention-policy
  - urn:ngm:class:data-ingestion
requires:
  - urn:ngm:class:time-series-data
  - urn:ngm:class:indexing
enables:
  - urn:ngm:class:monitoring
  - urn:ngm:class:observability
  - urn:ngm:class:real-time-analytics
dependsOn:
  - urn:ngm:class:database
contrastsWith:
  - urn:ngm:class:relational-database
  - urn:ngm:class:nosql-database
uses:
  - urn:ngm:class:data-compression
  - urn:ngm:class:data-storage
supports:
  - urn:ngm:class:metrics
relatedTo:
  - urn:ngm:class:database-management-system
---

# Time-Series Database

A time-series database (TSDB) is a database system optimised for storing, querying, and analysing data points indexed by time. It is designed for workloads dominated by high-volume, append-only writes of timestamped measurements and by queries that aggregate over time ranges. TSDBs employ time-aware partitioning, columnar layouts, and specialised compression to handle the scale and access patterns of metrics, events, and sensor readings efficiently.
