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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Lakehouse Architecture

Lakehouse architecture is a data management pattern that combines the low-cost, open storage of a data lake with the transactional reliability and performance of a data warehouse. It layers ACID transactions, schema enforcement and indexing over inexpensive object storage using open table formats such as Delta Lake, Apache Iceberg or Hudi. This unifies analytics, business intelligence and machine learning on a single copy of data.
