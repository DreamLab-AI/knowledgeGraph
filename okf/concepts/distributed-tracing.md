---
okf_version: "0.2"
type: Class
title: Distributed Tracing
resource: urn:ngm:class:distributed-tracing
domain: infrastructure
description: Distributed tracing is an observability technique that follows a single request as it propagates across the many services of a distributed system, recording the timing and causal relationships of each operation. Each unit of work is captured as a span, and spans linked by a shared trace identifier form a trace that reconstructs the request's end-to-end path. It is essential for diagnosing latency,
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:observability
hasPart:
  - urn:ngm:class:latency
requires:
  - urn:ngm:class:microservices
enables:
  - urn:ngm:class:fault-tolerance
dependsOn:
  - urn:ngm:class:monitoring
implements:
  - urn:ngm:class:observability
bridgesTo:
  - urn:ngm:class:service-mesh
uses:
  - urn:ngm:class:monitoring
supports:
  - urn:ngm:class:reliability-engineering
  - urn:ngm:class:performance-optimization
partOf:
  - urn:ngm:class:observability
relatedTo:
  - urn:ngm:class:service-mesh
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:distributed-systems
---

# Distributed Tracing

Distributed tracing is an observability technique that follows a single request as it propagates across the many services of a distributed system, recording the timing and causal relationships of each operation. Each unit of work is captured as a span, and spans linked by a shared trace identifier form a trace that reconstructs the request's end-to-end path. It is essential for diagnosing latency, dependencies and failures in microservice architectures where no single component holds the full picture.
