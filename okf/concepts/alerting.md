---
okf_version: "0.2"
type: Class
title: Alerting
resource: urn:ngm:class:alerting
domain: infrastructure
description: Alerting is the observability capability that evaluates monitored signals against defined conditions and notifies responsible humans or automated systems when those conditions indicate a problem or an impending one. It converts continuous telemetry into discrete, actionable notifications routed to the appropriate on-call recipient. Effective alerting balances sensitivity against noise so that ever
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:observability
hasPart:
  - urn:ngm:class:notification
  - urn:ngm:class:alert-fatigue
requires:
  - urn:ngm:class:monitoring
enables:
  - urn:ngm:class:incident-reporting
uses:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:telemetry
  - urn:ngm:class:service-level-objective
supports:
  - urn:ngm:class:incident-management
  - urn:ngm:class:site-reliability-engineering
  - urn:ngm:class:root-cause-analysis
partOf:
  - urn:ngm:class:observability
  - urn:ngm:class:real-time-monitoring
relatedTo:
  - urn:ngm:class:distributed-tracing
  - urn:ngm:class:service-level-agreement
---

# Alerting

Alerting is the observability capability that evaluates monitored signals against defined conditions and notifies responsible humans or automated systems when those conditions indicate a problem or an impending one. It converts continuous telemetry into discrete, actionable notifications routed to the appropriate on-call recipient. Effective alerting balances sensitivity against noise so that every alert is meaningful and timely.
