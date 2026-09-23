---
okf_version: "0.2"
type: Class
title: Circuit Breaker
resource: urn:ngm:class:circuit-breaker
domain: infrastructure
description: The circuit breaker is a fault-tolerance design pattern that monitors calls to a remote service or resource and, once failures exceed a threshold, trips open to fail fast and stop sending requests for a cooling-off period. After a timeout it allows a limited number of trial calls in a half-open state to test recovery before closing again. The pattern prevents cascading failures, protects strugglin
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:fault-tolerance
hasPart:
  - urn:ngm:class:observability
requires:
  - urn:ngm:class:observability
enables:
  - urn:ngm:class:resilience
dependsOn:
  - urn:ngm:class:reliability-engineering
implements:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:resilience
bridgesTo:
  - urn:ngm:class:service-mesh
uses:
  - urn:ngm:class:observability
supports:
  - urn:ngm:class:reliability-engineering
  - urn:ngm:class:microservices
partOf:
  - urn:ngm:class:fault-tolerance
relatedTo:
  - urn:ngm:class:rate-limiting
  - urn:ngm:class:api-gateway
  - urn:ngm:class:service-mesh
---

# Circuit Breaker

The circuit breaker is a fault-tolerance design pattern that monitors calls to a remote service or resource and, once failures exceed a threshold, trips open to fail fast and stop sending requests for a cooling-off period. After a timeout it allows a limited number of trial calls in a half-open state to test recovery before closing again. The pattern prevents cascading failures, protects struggling dependencies, and enables graceful degradation in distributed systems.
