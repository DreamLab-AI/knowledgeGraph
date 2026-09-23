---
okf_version: "0.2"
type: Class
title: Telemetry
resource: urn:ngm:class:telemetry
domain: infrastructure
description: Telemetry is the automated collection, transmission and aggregation of measurements and signals from remote or distributed systems to a central point for monitoring and analysis. In software and infrastructure it commonly refers to the emission of metrics, logs, traces and events that describe a system's behaviour and health. Telemetry data is the raw substrate on which observability, alerting and
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:observability
hasPart:
  - urn:ngm:class:instrumentation
  - urn:ngm:class:time-series-data
requires:
  - urn:ngm:class:instrumentation
  - urn:ngm:class:sensor
enables:
  - urn:ngm:class:monitoring
  - urn:ngm:class:anomaly-detection
uses:
  - urn:ngm:class:distributed-tracing
supports:
  - urn:ngm:class:performance-monitoring
  - urn:ngm:class:alerting
partOf:
  - urn:ngm:class:observability
relatedTo:
  - urn:ngm:class:prometheus
  - urn:ngm:class:monitoring-dashboard
  - urn:ngm:class:monitoring
  - urn:ngm:class:monitoring-dashboard
---

# Telemetry

Telemetry is the automated collection, transmission and aggregation of measurements and signals from remote or distributed systems to a central point for monitoring and analysis. In software and infrastructure it commonly refers to the emission of metrics, logs, traces and events that describe a system's behaviour and health. Telemetry data is the raw substrate on which observability, alerting and performance analysis are built.
