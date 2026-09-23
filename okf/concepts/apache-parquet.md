---
okf_version: "0.2"
type: Class
title: Apache Parquet
resource: urn:ngm:class:apache-parquet
domain: blockchain
description: "Apache Parquet is an open-source columnar storage file format designed for efficient analytical processing of large datasets. By storing values of the same column contiguously, it enables aggressive compression and encoding, predicate pushdown, and reading only the columns a query needs, dramatically reducing I/O for analytical workloads. It carries a self-describing schema and rich metadata, and "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:data-format
requires:
  - urn:ngm:class:data-format
enables:
  - urn:ngm:class:olap
  - urn:ngm:class:big-data
dependsOn:
  - urn:ngm:class:data-serialization
  - urn:ngm:class:data-serialization
implements:
  - urn:ngm:class:columnar-storage
bridgesTo:
  - urn:ngm:class:data-warehouse
uses:
  - urn:ngm:class:columnar-storage
  - urn:ngm:class:data-serialization
  - urn:ngm:class:data-serialization
supports:
  - urn:ngm:class:apache-spark
  - urn:ngm:class:schema-evolution
partOf:
  - urn:ngm:class:data-lake
relatedTo:
  - urn:ngm:class:apache-spark
  - urn:ngm:class:data-lake
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:big-data
---

# Apache Parquet

Apache Parquet is an open-source columnar storage file format designed for efficient analytical processing of large datasets. By storing values of the same column contiguously, it enables aggressive compression and encoding, predicate pushdown, and reading only the columns a query needs, dramatically reducing I/O for analytical workloads. It carries a self-describing schema and rich metadata, and is widely used as the on-disk format for data lakes and big-data engines.
