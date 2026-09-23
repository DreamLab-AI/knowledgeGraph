---
okf_version: "0.2"
type: Class
title: Monitoring Dashboard
resource: urn:ngm:class:monitoring-dashboard
domain: infrastructure
description: Visual interfaces that aggregate and display real-time metrics, logs, and traces from systems and applications, enabling observability, performance tracking, incident detection, and data-driven decision making through unified visualisation platforms.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:data-visualisation
requires:
  - urn:ngm:class:metrics-collection
  - urn:ngm:class:time-series-database
  - urn:ngm:class:data-ingestion
enables:
  - urn:ngm:class:operational-intelligence
  - urn:ngm:class:incident-detection
  - urn:ngm:class:root-cause-analysis
  - urn:ngm:class:capacity-planning
dependsOn:
  - urn:ngm:class:prometheus
  - urn:ngm:class:distributed-tracing
  - urn:ngm:class:log-aggregation
implements:
  - urn:ngm:class:observability
  - urn:ngm:class:site-reliability-engineering
bridgesTo:
  - urn:ngm:class:business-intelligence-dashboard
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:data-visualisation
  - urn:ngm:class:alerting-system
  - urn:ngm:class:anomaly-detection
supports:
  - urn:ngm:class:devops
  - urn:ngm:class:incident-management
  - urn:ngm:class:service-level-objective
partOf:
  - urn:ngm:class:observability
relatedTo:
  - urn:ngm:class:kubernetes-cluster
  - urn:ngm:class:cloud-infrastructure
---

# Monitoring Dashboard

Visual interfaces that aggregate and display real-time metrics, logs, and traces from systems and applications, enabling observability, performance tracking, incident detection, and data-driven decision making through unified visualisation platforms.
