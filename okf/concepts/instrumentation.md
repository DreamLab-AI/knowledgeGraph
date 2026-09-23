---
okf_version: "0.2"
type: Class
title: Instrumentation
resource: urn:ngm:class:instrumentation
domain: infrastructure
description: Instrumentation is the practice of adding code, agents, or probes to software and systems so that they emit measurable signals — metrics, logs, traces, and events — about their internal behaviour and performance. It is the foundational producer of telemetry that downstream observability and monitoring tooling consumes. Without instrumentation a system is opaque; with it, operators gain insight int
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:observability
hasPart:
  - urn:ngm:class:metrics
  - urn:ngm:class:audit-logging
  - urn:ngm:class:distributed-tracing
requires:
  - urn:ngm:class:code-profiling
enables:
  - urn:ngm:class:telemetry
  - urn:ngm:class:real-time-monitoring
  - urn:ngm:class:anomaly-detection
uses:
  - urn:ngm:class:standards
supports:
  - urn:ngm:class:alerting
  - urn:ngm:class:root-cause-analysis
  - urn:ngm:class:site-reliability-engineering
partOf:
  - urn:ngm:class:observability
relatedTo:
  - urn:ngm:class:monitoring
  - urn:ngm:class:devops
---

# Instrumentation

Instrumentation is the practice of adding code, agents, or probes to software and systems so that they emit measurable signals — metrics, logs, traces, and events — about their internal behaviour and performance. It is the foundational producer of telemetry that downstream observability and monitoring tooling consumes. Without instrumentation a system is opaque; with it, operators gain insight into how the system actually runs in production.
