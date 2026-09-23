---
okf_version: "0.2"
type: Class
title: Metrics Collection
resource: urn:ngm:class:metrics-collection
domain: infrastructure
description: Metrics collection is the practice of instrumenting software and infrastructure to gather quantitative measurements of system behaviour, such as request rates, latencies, error counts and resource utilisation, and forwarding them to a store for analysis. Collected metrics are typically aggregated as time series and queried to drive dashboards, alerting and capacity planning. It is a foundational p
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:observability
hasPart:
  - urn:ngm:class:instrumentation
  - urn:ngm:class:time-series-database
requires:
  - urn:ngm:class:time-series-database
  - urn:ngm:class:data-pipeline
enables:
  - urn:ngm:class:alerting
  - urn:ngm:class:performance-monitoring
dependsOn:
  - urn:ngm:class:instrumentation
  - urn:ngm:class:telemetry
uses:
  - urn:ngm:class:prometheus
  - urn:ngm:class:telemetry
supports:
  - urn:ngm:class:monitoring
  - urn:ngm:class:service-level-objective
partOf:
  - urn:ngm:class:observability
relatedTo:
  - urn:ngm:class:audit-logging
  - urn:ngm:class:distributed-tracing
  - urn:ngm:class:infrastructure
---

# Metrics Collection

Metrics collection is the practice of instrumenting software and infrastructure to gather quantitative measurements of system behaviour, such as request rates, latencies, error counts and resource utilisation, and forwarding them to a store for analysis. Collected metrics are typically aggregated as time series and queried to drive dashboards, alerting and capacity planning. It is a foundational pillar of observability alongside logging and tracing, enabling teams to detect, diagnose and prevent operational problems.
