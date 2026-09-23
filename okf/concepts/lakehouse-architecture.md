---
okf_version: "0.2"
type: Class
title: Lakehouse Architecture
resource: urn:ngm:class:lakehouse-architecture
domain: data
description: "Lakehouse architecture is a data management pattern that combines the low-cost, open storage of a data lake with the transactional reliability and performance of a data warehouse. It layers ACID transactions, schema enforcement and indexing over inexpensive object storage using open table formats such as Delta Lake, Apache Iceberg or Hudi. This unifies analytics, business intelligence and machine "
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:data-management
relatedTo:
  - urn:ngm:class:storage-infrastructure
---

# Lakehouse Architecture

Lakehouse architecture is a data management pattern that combines the low-cost, open storage of a data lake with the transactional reliability and performance of a data warehouse. It layers ACID transactions, schema enforcement and indexing over inexpensive object storage using open table formats such as Delta Lake, Apache Iceberg or Hudi. This unifies analytics, business intelligence and machine learning on a single copy of data.
