---
okf_version: "0.2"
type: Class
title: Real-Time Monitoring
resource: urn:ngm:class:real-time-monitoring
domain: infrastructure
description: Real-time monitoring is the continuous collection, processing, and presentation of operational telemetry — encompassing metrics, logs, and traces — with sufficiently low latency that resulting insights can drive immediate human decisions or automated responses without batch delay. It integrates instrumentation agents, stream-processing pipelines, and visualisation dashboards to maintain a live, ac
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:real-time-processing
hasPart:
  - urn:ngm:class:telemetry
  - urn:ngm:class:monitoring-dashboard
  - urn:ngm:class:alerting
  - urn:ngm:class:time-series-database
requires:
  - urn:ngm:class:observability
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:network-infrastructure
enables:
  - urn:ngm:class:compliance-monitoring
  - urn:ngm:class:operational-resilience
  - urn:ngm:class:ai-monitoring
  - urn:ngm:class:incident-response
  - urn:ngm:class:predictive-maintenance
dependsOn:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:message-broker
contrastsWith:
  - urn:ngm:class:batch-processing
  - urn:ngm:class:data-analytics
  - urn:ngm:class:data-analytics
bridgesTo:
  - urn:ngm:class:cyber-physical-systems
  - urn:ngm:class:digital-twin
  - urn:ngm:class:model-drift-detection
uses:
  - urn:ngm:class:stream-processing
  - urn:ngm:class:io-t-sensor-network
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:event-driven-architecture
supports:
  - urn:ngm:class:site-reliability-engineering
  - urn:ngm:class:scada
  - urn:ngm:class:model-ops
  - urn:ngm:class:mlops
relatedTo:
  - urn:ngm:class:performance-metrics
  - urn:ngm:class:distributed-tracing
  - urn:ngm:class:log-management
  - urn:ngm:class:service-level-objective
---

# Real-Time Monitoring

Real-time monitoring is the continuous collection, processing, and presentation of operational telemetry — encompassing metrics, logs, and traces — with sufficiently low latency that resulting insights can drive immediate human decisions or automated responses without batch delay. It integrates instrumentation agents, stream-processing pipelines, and visualisation dashboards to maintain a live, actionable picture of system health across software, hardware, network, and physical domains. The discipline spans IT operations, industrial control, MLOps observability, and smart infrastructure, where the defining criterion is actionability: data must arrive within a window that permits meaningful intervention before a fault, breach, or degradation cascades. Real-time monitoring is architecturally distinct from batch analytics in its emphasis on bounded latency, stateful windowing, and continuous alerting over persistent connections.
