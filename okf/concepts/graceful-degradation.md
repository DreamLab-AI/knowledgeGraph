---
okf_version: "0.2"
type: Class
title: Graceful Degradation
resource: urn:ngm:class:graceful-degradation
domain: infrastructure
description: Graceful degradation is a design property whereby a system continues to provide reduced but acceptable functionality when some of its components fail or operate under stress, rather than failing completely. It prioritises essential services, sheds non-critical load, and offers fallback behaviours so that partial failure does not cascade into total outage. It is a cornerstone of resilient, fault-to
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:reliability-engineering
requires:
  - urn:ngm:class:monitoring
  - urn:ngm:class:observability
enables:
  - urn:ngm:class:resilience
  - urn:ngm:class:fault-tolerance
dependsOn:
  - urn:ngm:class:reliability
bridgesTo:
  - urn:ngm:class:bandwidth-adaptation
uses:
  - urn:ngm:class:circuit-breaker
  - urn:ngm:class:failover
  - urn:ngm:class:redundancy
supports:
  - urn:ngm:class:quality-of-service
  - urn:ngm:class:user-experience
partOf:
  - urn:ngm:class:reliability-engineering
relatedTo:
  - urn:ngm:class:chaos-engineering
  - urn:ngm:class:distributed-systems
---

# Graceful Degradation

Graceful degradation is a design property whereby a system continues to provide reduced but acceptable functionality when some of its components fail or operate under stress, rather than failing completely. It prioritises essential services, sheds non-critical load, and offers fallback behaviours so that partial failure does not cascade into total outage. It is a cornerstone of resilient, fault-tolerant infrastructure.
