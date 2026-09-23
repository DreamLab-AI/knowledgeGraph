---
okf_version: "0.2"
type: Class
title: Performance Monitoring
resource: urn:ngm:class:performance-monitoring
domain: artificial-intelligence
description: "Performance Monitoring is the continuous collection, analysis, and visualisation of metrics describing how a system, application, or model behaves under real workloads. It tracks indicators such as latency, throughput, error rates, resource utilisation, and, for machine-learning systems, predictive quality and drift, surfacing degradation through dashboards and alerts. Performance monitoring is a "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:observability
hasPart:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:telemetry
requires:
  - urn:ngm:class:telemetry
  - urn:ngm:class:monitoring
enables:
  - urn:ngm:class:site-reliability-engineering
  - urn:ngm:class:feedback-loop
dependsOn:
  - urn:ngm:class:monitoring
uses:
  - urn:ngm:class:anomaly-detection
supports:
  - urn:ngm:class:mlops
  - urn:ngm:class:ai-monitoring
partOf:
  - urn:ngm:class:observability
relatedTo:
  - urn:ngm:class:observability
  - urn:ngm:class:machine-learning-discipline
---

# Performance Monitoring

Performance Monitoring is the continuous collection, analysis, and visualisation of metrics describing how a system, application, or model behaves under real workloads. It tracks indicators such as latency, throughput, error rates, resource utilisation, and, for machine-learning systems, predictive quality and drift, surfacing degradation through dashboards and alerts. Performance monitoring is a core observability discipline that enables teams to detect regressions, diagnose bottlenecks, and uphold service-level objectives.
