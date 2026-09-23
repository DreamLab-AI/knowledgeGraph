---
okf_version: "0.2"
type: Class
title: Performance Metrics
resource: urn:ngm:class:performance-metrics
domain: machine-learning
description: Performance Metrics are quantitative and qualitative measurements used to assess the efficiency, correctness, and resource utilisation of AI models, software systems, distributed platforms, and hardware pipelines. They encompass latency, throughput, accuracy, recall, precision, error rate, memory footprint, and energy consumption, forming the empirical basis for benchmarking, capacity planning, an
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:latency
  - urn:ngm:class:throughput
  - urn:ngm:class:accuracy
  - urn:ngm:class:precision-recall-curve
  - urn:ngm:class:f1-score
  - urn:ngm:class:mean-average-precision
  - urn:ngm:class:precision-recall-curve
requires:
  - urn:ngm:class:benchmarking
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:data-collection
enables:
  - urn:ngm:class:model-optimisation-and-performance
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:capacity-planning
  - urn:ngm:class:model-optimisation-and-performance
dependsOn:
  - urn:ngm:class:observability
  - urn:ngm:class:audit-logging
  - urn:ngm:class:audit-logging
contrastsWith:
  - urn:ngm:class:model-evaluation-results
  - urn:ngm:class:qualitative-assessment
bridgesTo:
  - urn:ngm:class:service-level-agreement
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:energy-efficiency
uses:
  - urn:ngm:class:performance-benchmarks
  - urn:ngm:class:statistical-testing
supports:
  - urn:ngm:class:monitoring-dashboard
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:mlops
relatedTo:
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:roc-curve
  - urn:ngm:class:auc
  - urn:ngm:class:area-under-the-curve
---

# Performance Metrics

Performance Metrics are quantitative and qualitative measurements used to assess the efficiency, correctness, and resource utilisation of AI models, software systems, distributed platforms, and hardware pipelines. They encompass latency, throughput, accuracy, recall, precision, error rate, memory footprint, and energy consumption, forming the empirical basis for benchmarking, capacity planning, and continuous improvement. In machine learning contexts, performance metrics bridge offline evaluation (held-out test sets) and online monitoring (production dashboards), enabling data-driven decisions about model retraining, architecture changes, and deployment rollback. Standardised metric suites underpin regulatory compliance, SLA enforcement, and comparative research across the field.
