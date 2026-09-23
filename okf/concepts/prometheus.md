---
okf_version: "0.2"
type: Class
title: Prometheus
resource: urn:ngm:class:prometheus
domain: infrastructure
description: "Prometheus is an open-source monitoring and alerting system that collects time-series metrics by periodically scraping HTTP endpoints exposed by instrumented targets. It stores samples in a local time-series database, queries them with the PromQL language, and evaluates alerting rules whose firing alerts are dispatched through a separate Alertmanager. A graduated Cloud Native Computing Foundation "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:monitoring
hasPart:
  - urn:ngm:class:telemetry
enables:
  - urn:ngm:class:incident-response
dependsOn:
  - urn:ngm:class:telemetry
  - urn:ngm:class:service-discovery
implements:
  - urn:ngm:class:monitoring
  - urn:ngm:class:observability
uses:
  - urn:ngm:class:telemetry
  - urn:ngm:class:service-discovery
supports:
  - urn:ngm:class:observability
  - urn:ngm:class:incident-response
standardizedBy:
  - urn:ngm:class:cncf
  - urn:ngm:class:cncf
partOf:
  - urn:ngm:class:monitoring
  - urn:ngm:class:observability
relatedTo:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:cloud-computing
---

# Prometheus

Prometheus is an open-source monitoring and alerting system that collects time-series metrics by periodically scraping HTTP endpoints exposed by instrumented targets. It stores samples in a local time-series database, queries them with the PromQL language, and evaluates alerting rules whose firing alerts are dispatched through a separate Alertmanager. A graduated Cloud Native Computing Foundation project, it is a de-facto standard for monitoring containerised and cloud-native systems.
