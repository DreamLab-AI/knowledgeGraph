---
okf_version: "0.2"
type: Class
title: Log Management
resource: urn:ngm:class:log-management
domain: infrastructure
description: Log management is the discipline of collecting, aggregating, storing, indexing and analysing the event records emitted by applications, services and infrastructure. It provides a centralised, searchable record of system behaviour that underpins debugging, performance analysis, security investigation and compliance auditing. Pipelines typically ingest structured and unstructured logs, normalise the
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:observability
hasPart:
  - urn:ngm:class:audit-log
  - urn:ngm:class:alerting
requires:
  - urn:ngm:class:data
enables:
  - urn:ngm:class:observability
  - urn:ngm:class:root-cause-analysis
  - urn:ngm:class:incident-response
dependsOn:
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:distributed-tracing
supports:
  - urn:ngm:class:real-time-monitoring
  - urn:ngm:class:monitoring
relatedTo:
  - urn:ngm:class:telemetry
  - urn:ngm:class:security-information-and-event-management
  - urn:ngm:class:siem
---

# Log Management

Log management is the discipline of collecting, aggregating, storing, indexing and analysing the event records emitted by applications, services and infrastructure. It provides a centralised, searchable record of system behaviour that underpins debugging, performance analysis, security investigation and compliance auditing. Pipelines typically ingest structured and unstructured logs, normalise them, enforce retention policies and expose them through query and alerting interfaces.
