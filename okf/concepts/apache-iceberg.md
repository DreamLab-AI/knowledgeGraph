---
okf_version: "0.2"
type: Class
title: Apache Iceberg
resource: urn:ngm:class:apache-iceberg
domain: data
description: "Apache Iceberg is an open table format for large analytic datasets stored in data lakes, adding database-like guarantees on top of object storage. It provides ACID transactions, schema and partition evolution, snapshot isolation, and time-travel queries by maintaining immutable metadata layers that track data files. Iceberg decouples the table format from the compute engine, letting Spark, Trino, "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:data-management
relatedTo:
  - urn:ngm:class:storage-infrastructure
---

# Apache Iceberg

Apache Iceberg is an open table format for large analytic datasets stored in data lakes, adding database-like guarantees on top of object storage. It provides ACID transactions, schema and partition evolution, snapshot isolation, and time-travel queries by maintaining immutable metadata layers that track data files. Iceberg decouples the table format from the compute engine, letting Spark, Trino, Flink, and others operate consistently on the same tables.
