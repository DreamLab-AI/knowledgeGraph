---
okf_version: "0.2"
type: Class
title: Log Aggregation
resource: urn:ngm:class:log-aggregation
domain: infrastructure
description: Log aggregation is the practice of collecting log events from many distributed sources into a centralised, searchable store so they can be parsed, indexed, correlated, and analysed as a unified stream. It is a foundational component of observability and monitoring pipelines, enabling operators to debug incidents, detect anomalies, and satisfy audit requirements across services that would otherwise
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:observability
hasPart:
  - urn:ngm:class:audit-logging
  - urn:ngm:class:indexing
requires:
  - urn:ngm:class:indexing
enables:
  - urn:ngm:class:monitoring
dependsOn:
  - urn:ngm:class:audit-logging
uses:
  - urn:ngm:class:full-text-search
supports:
  - urn:ngm:class:audit-logging
  - urn:ngm:class:siem
partOf:
  - urn:ngm:class:observability
  - urn:ngm:class:monitoring
relatedTo:
  - urn:ngm:class:metrics-collection
  - urn:ngm:class:microservices
---

# Log Aggregation

Log aggregation is the practice of collecting log events from many distributed sources into a centralised, searchable store so they can be parsed, indexed, correlated, and analysed as a unified stream. It is a foundational component of observability and monitoring pipelines, enabling operators to debug incidents, detect anomalies, and satisfy audit requirements across services that would otherwise emit logs in isolation.
