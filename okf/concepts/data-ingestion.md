---
okf_version: "0.2"
type: Class
title: Data Ingestion
resource: urn:ngm:class:data-ingestion
domain: spatial-computing
description: Data ingestion is the process of acquiring data from heterogeneous sources and moving it into a target store or processing system for downstream use. It covers batch and streaming acquisition, format normalisation, validation and routing, and forms the entry stage of data pipelines. In spatial-computing contexts ingestion handles sensor streams and captured geometry before reconstruction and analy
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-pipeline
hasPart:
  - urn:ngm:class:data-collection
  - urn:ngm:class:sensor-fusion
requires:
  - urn:ngm:class:data-quality
  - urn:ngm:class:schema
enables:
  - urn:ngm:class:training-data
  - urn:ngm:class:feature-engineering
dependsOn:
  - urn:ngm:class:data-integrity
uses:
  - urn:ngm:class:point-cloud
supports:
  - urn:ngm:class:data-pipeline
partOf:
  - urn:ngm:class:data-engineering
relatedTo:
  - urn:ngm:class:caching
  - urn:ngm:class:observability
  - urn:ngm:class:scalability
---

# Data Ingestion

Data ingestion is the process of acquiring data from heterogeneous sources and moving it into a target store or processing system for downstream use. It covers batch and streaming acquisition, format normalisation, validation and routing, and forms the entry stage of data pipelines. In spatial-computing contexts ingestion handles sensor streams and captured geometry before reconstruction and analysis.
