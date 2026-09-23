---
okf_version: "0.2"
type: Class
title: Lambda Architecture
resource: urn:ngm:class:lambda-architecture
domain: infrastructure
description: Lambda Architecture is a data-processing design pattern that handles massive quantities of data by combining a batch layer for comprehensive, accurate computation over the full dataset with a speed (or streaming) layer that processes recent data with low latency. A serving layer merges results from both layers so queries return a unified view that is eventually consistent yet responsive in near re
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-architecture
hasPart:
  - urn:ngm:class:batch-processing
  - urn:ngm:class:stream-processing
  - urn:ngm:class:data-pipeline
requires:
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:scalability
enables:
  - urn:ngm:class:real-time-analytics
  - urn:ngm:class:fault-tolerance
contrastsWith:
  - urn:ngm:class:event-sourcing
uses:
  - urn:ngm:class:apache-spark
  - urn:ngm:class:apache-kafka
  - urn:ngm:class:data-lake
partOf:
  - urn:ngm:class:big-data
relatedTo:
  - urn:ngm:class:etl-pipeline
  - urn:ngm:class:distributed-systems
---

# Lambda Architecture

Lambda Architecture is a data-processing design pattern that handles massive quantities of data by combining a batch layer for comprehensive, accurate computation over the full dataset with a speed (or streaming) layer that processes recent data with low latency. A serving layer merges results from both layers so queries return a unified view that is eventually consistent yet responsive in near real time. The pattern accepts the operational cost of maintaining two parallel code paths in exchange for fault tolerance, reprocessing capability, and the reconciliation of historical accuracy with live freshness.
