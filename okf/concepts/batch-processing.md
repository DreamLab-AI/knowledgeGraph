---
okf_version: "0.2"
type: Class
title: Batch Processing
resource: urn:ngm:class:batch-processing
domain: infrastructure
description: A computational paradigm in which jobs are accumulated and executed as a group rather than individually in real-time. Batch processing optimises throughput by amortising fixed overhead across many records, enabling efficient ETL pipelines, model training over large datasets, report generation, and vulnerability scanning. Scheduling may be time-based, event-triggered, or dependency-driven.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:data-pipeline
hasPart:
  - urn:ngm:class:batch-normalisation
  - urn:ngm:class:batch-size
  - urn:ngm:class:message-queue
requires:
  - urn:ngm:class:compute-cluster
  - urn:ngm:class:distributed-storage
enables:
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:etl-pipeline
  - urn:ngm:class:model-training
  - urn:ngm:class:vulnerability-scanning
dependsOn:
  - urn:ngm:class:workflow-orchestration
contrastsWith:
  - urn:ngm:class:inference
  - urn:ngm:class:stream-processing
  - urn:ngm:class:real-time-processing
bridgesTo:
  - urn:ngm:class:data-management
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:apache-spark
partOf:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:lambda-architecture
relatedTo:
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:data-warehousing
---

# Batch Processing

A computational paradigm in which jobs are accumulated and executed as a group rather than individually in real-time. Batch processing optimises throughput by amortising fixed overhead across many records, enabling efficient ETL pipelines, model training over large datasets, report generation, and vulnerability scanning. Scheduling may be time-based, event-triggered, or dependency-driven.
