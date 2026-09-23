---
okf_version: "0.2"
type: Class
title: Real-Time Data Processing
resource: urn:ngm:class:real-time-data-processing
domain: infrastructure
description: Real-time data processing is the continuous ingestion, transformation, and analysis of data immediately as it is produced, delivering results within strict latency bounds rather than in scheduled batches. It underpins applications that must react to events as they happen, such as fraud detection, monitoring, and live analytics, and depends on low-latency pipelines, stream-processing engines, and e
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:stream-processing
requires:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:message-queue
  - urn:ngm:class:throughput
enables:
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:observability
  - urn:ngm:class:monitoring
dependsOn:
  - urn:ngm:class:stream-processing
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:low-latency
contrastsWith:
  - urn:ngm:class:batch-processing
uses:
  - urn:ngm:class:apache-kafka
  - urn:ngm:class:stream-processing
supports:
  - urn:ngm:class:data-management
  - urn:ngm:class:infrastructure
relatedTo:
  - urn:ngm:class:batch-processing
  - urn:ngm:class:data-processing
  - urn:ngm:class:edge-computing
---

# Real-Time Data Processing

Real-time data processing is the continuous ingestion, transformation, and analysis of data immediately as it is produced, delivering results within strict latency bounds rather than in scheduled batches. It underpins applications that must react to events as they happen, such as fraud detection, monitoring, and live analytics, and depends on low-latency pipelines, stream-processing engines, and event-driven architectures. Its defining constraint is bounded end-to-end latency between data arrival and actionable output.
