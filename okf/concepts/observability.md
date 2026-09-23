---
okf_version: "0.2"
type: Class
title: Observability
resource: urn:ngm:class:observability
domain: infrastructure
description: Observability is the capability of a system that allows engineers to infer its internal state and behaviour solely from externally observable outputs — primarily logs, metrics, and distributed traces. Derived from control-systems theory, it answers whether the complete internal state can be reconstructed from a sequence of outputs. In modern software engineering, observability enables debugging, p
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:reliability-engineering
hasPart:
  - urn:ngm:class:audit-logging
  - urn:ngm:class:distributed-tracing
  - urn:ngm:class:alerting
  - urn:ngm:class:audit-logging
  - urn:ngm:class:metrics
requires:
  - urn:ngm:class:telemetry
  - urn:ngm:class:instrumentation
  - urn:ngm:class:data-collection
enables:
  - urn:ngm:class:site-reliability-engineering
  - urn:ngm:class:incident-response
  - urn:ngm:class:capacity-planning
  - urn:ngm:class:chaos-engineering
dependsOn:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:microservices
implements:
  - urn:ngm:class:open-telemetry
contrastsWith:
  - urn:ngm:class:monitoring
  - urn:ngm:class:debugging
bridgesTo:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:machine-learning-operations
uses:
  - urn:ngm:class:time-series-database
  - urn:ngm:class:log-aggregation
  - urn:ngm:class:service-mesh
supports:
  - urn:ngm:class:devops
  - urn:ngm:class:continuous-delivery
standardizedBy:
  - urn:ngm:class:open-telemetry
  - urn:ngm:class:cncf
partOf:
  - urn:ngm:class:reliability-engineering
relatedTo:
  - urn:ngm:class:performance
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:service-level-objective
---

# Observability

Observability is the capability of a system that allows engineers to infer its internal state and behaviour solely from externally observable outputs — primarily logs, metrics, and distributed traces. Derived from control-systems theory, it answers whether the complete internal state can be reconstructed from a sequence of outputs. In modern software engineering, observability enables debugging, performance tuning, incident response, and proactive reliability assurance across complex distributed architectures where direct inspection is impractical.
