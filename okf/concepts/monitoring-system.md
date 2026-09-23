---
okf_version: "0.2"
type: Class
title: Monitoring System
resource: urn:ngm:class:monitoring-system
domain: infrastructure
description: A monitoring system is an integrated observability platform that continuously collects, aggregates, and evaluates telemetry signals — metrics, logs, traces, and events — from target environments spanning software services, physical infrastructure, AI models, and distributed systems, in order to detect anomalies, assess operational health, and trigger alerts or automated remediation responses. It e
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:infra-computing-and-cloud
hasPart:
  - urn:ngm:class:monitoring-dashboard
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:alerting-system
  - urn:ngm:class:time-series-database
  - urn:ngm:class:log-aggregation
requires:
  - urn:ngm:class:instrumentation
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:network-infrastructure
enables:
  - urn:ngm:class:compliance-monitoring
  - urn:ngm:class:ai-monitoring
  - urn:ngm:class:real-time-monitoring
  - urn:ngm:class:incident-management
  - urn:ngm:class:capacity-planning
  - urn:ngm:class:site-reliability-engineering
dependsOn:
  - urn:ngm:class:cloud-infrastructure
  - urn:ngm:class:message-broker
contrastsWith:
  - urn:ngm:class:audit-logging
  - urn:ngm:class:audit-logging
  - urn:ngm:class:tracing-system
bridgesTo:
  - urn:ngm:class:aiops
  - urn:ngm:class:machine-learning-operations
  - urn:ngm:class:model-drift-detection
  - urn:ngm:class:mlops
uses:
  - urn:ngm:class:open-telemetry
  - urn:ngm:class:data-analytics
  - urn:ngm:class:predictive-analytics
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:stream-processing
standardizedBy:
  - urn:ngm:class:open-telemetry
  - urn:ngm:class:prometheus
relatedTo:
  - urn:ngm:class:service-level-objective
  - urn:ngm:class:chaos-engineering
  - urn:ngm:class:devops
---

# Monitoring System

A monitoring system is an integrated observability platform that continuously collects, aggregates, and evaluates telemetry signals — metrics, logs, traces, and events — from target environments spanning software services, physical infrastructure, AI models, and distributed systems, in order to detect anomalies, assess operational health, and trigger alerts or automated remediation responses. It encompasses data-collection agents, instrumentation SDKs, time-series storage engines, query and alerting pipelines, and visualisation dashboards that together form a closed-loop feedback mechanism for operational reliability. Monitoring systems implement the three pillars of observability (metrics, logs, traces) and serve as the foundational layer for site reliability engineering, incident management, and compliance auditing in modern distributed architectures.
