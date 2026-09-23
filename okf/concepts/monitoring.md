---
okf_version: "0.2"
type: Class
title: Monitoring
resource: urn:ngm:class:monitoring
domain: infrastructure
description: Monitoring is the systematic, continuous observation of computing systems, services, and infrastructure through the collection, aggregation, and analysis of metrics, logs, traces, and events to assess health, detect anomalies, and trigger remediation. It forms the primary feedback loop for operational awareness, enabling engineering teams to distinguish between normal variance and actionable degra
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:reliability-engineering
hasPart:
  - urn:ngm:class:metrics-collection
  - urn:ngm:class:log-management
  - urn:ngm:class:distributed-tracing
  - urn:ngm:class:alerting
  - urn:ngm:class:dashboarding
requires:
  - urn:ngm:class:time-series-database
  - urn:ngm:class:instrumentation
enables:
  - urn:ngm:class:reliability-engineering
  - urn:ngm:class:incident-management
  - urn:ngm:class:capacity-planning
  - urn:ngm:class:auto-scaling
dependsOn:
  - urn:ngm:class:service-level-objective
  - urn:ngm:class:real-time-computing
contrastsWith:
  - urn:ngm:class:observability
bridgesTo:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:aiops
uses:
  - urn:ngm:class:open-telemetry
  - urn:ngm:class:prometheus
supports:
  - urn:ngm:class:devops
  - urn:ngm:class:site-reliability-engineering
standardizedBy:
  - urn:ngm:class:open-telemetry
  - urn:ngm:class:cncf
partOf:
  - urn:ngm:class:observability
relatedTo:
  - urn:ngm:class:service-mesh
  - urn:ngm:class:kubernetes
  - urn:ngm:class:chaos-engineering
---

# Monitoring

Monitoring is the systematic, continuous observation of computing systems, services, and infrastructure through the collection, aggregation, and analysis of metrics, logs, traces, and events to assess health, detect anomalies, and trigger remediation. It forms the primary feedback loop for operational awareness, enabling engineering teams to distinguish between normal variance and actionable degradation in real time. Monitoring encompasses both active probing (synthetic checks, health endpoints) and passive signal collection (agent-based telemetry, sidecar proxies), unified through time-series storage and alerting pipelines. As systems grow in complexity — particularly across distributed, containerised, and cloud-native environments — monitoring has evolved into a multi-signal discipline often grouped under the broader term Observability.
