---
okf_version: "0.2"
type: Class
title: Metrics
resource: urn:ngm:class:metrics
domain: infrastructure
description: Metrics are numeric, time-series measurements that quantify the state and behaviour of systems, services and infrastructure over time. As one of the three pillars of observability alongside logs and traces, they are typically aggregated counters, gauges and histograms scraped or pushed at regular intervals. Metrics enable efficient trend analysis, alerting and capacity planning at scale because th
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:observability
hasPart:
  - urn:ngm:class:performance-monitoring
requires:
  - urn:ngm:class:telemetry
enables:
  - urn:ngm:class:alerting
  - urn:ngm:class:performance-monitoring
dependsOn:
  - urn:ngm:class:telemetry
contrastsWith:
  - urn:ngm:class:telemetry
bridgesTo:
  - urn:ngm:class:observability
uses:
  - urn:ngm:class:telemetry
  - urn:ngm:class:monitoring
supports:
  - urn:ngm:class:observability
  - urn:ngm:class:alerting
  - urn:ngm:class:monitoring
partOf:
  - urn:ngm:class:observability
relatedTo:
  - urn:ngm:class:monitoring
  - urn:ngm:class:performance-monitoring
  - urn:ngm:class:kubernetes
---

# Metrics

Metrics are numeric, time-series measurements that quantify the state and behaviour of systems, services and infrastructure over time. As one of the three pillars of observability alongside logs and traces, they are typically aggregated counters, gauges and histograms scraped or pushed at regular intervals. Metrics enable efficient trend analysis, alerting and capacity planning at scale because they compress system behaviour into compact, queryable numeric series.
