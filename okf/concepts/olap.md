---
okf_version: "0.2"
type: Class
title: Olap
resource: urn:ngm:class:olap
domain: data
description: Online Analytical Processing (OLAP) is a category of data processing optimised for fast, multidimensional analysis of large volumes of historical and aggregated data. It organises measures along dimensions such as time, geography, and product, allowing analysts to slice, dice, roll up, and drill down through data cubes interactively. OLAP underpins business intelligence and decision support by ena
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-analytics
hasPart:
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:data-analytics
requires:
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:data-architecture
enables:
  - urn:ngm:class:business-intelligence
  - urn:ngm:class:decision-support
  - urn:ngm:class:data-visualisation
contrastsWith:
  - urn:ngm:class:data-pipeline
bridgesTo:
  - urn:ngm:class:business-intelligence
uses:
  - urn:ngm:class:sql
  - urn:ngm:class:data-pipeline
supports:
  - urn:ngm:class:self-service-analytics
  - urn:ngm:class:data-engineering
relatedTo:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:metadata
  - urn:ngm:class:data-architecture
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Olap

Online Analytical Processing (OLAP) is a category of data processing optimised for fast, multidimensional analysis of large volumes of historical and aggregated data. It organises measures along dimensions such as time, geography, and product, allowing analysts to slice, dice, roll up, and drill down through data cubes interactively. OLAP underpins business intelligence and decision support by enabling complex aggregate queries that contrast with the row-oriented, transactional focus of operational systems.
