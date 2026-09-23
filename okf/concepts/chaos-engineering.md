---
okf_version: "0.2"
type: Class
title: Chaos Engineering
resource: urn:ngm:class:chaos-engineering
domain: infrastructure
description: Chaos engineering is the discipline of experimenting on a software system by deliberately injecting controlled faults — such as instance termination, network latency, or resource exhaustion — in order to build confidence in the system's ability to withstand turbulent, real-world conditions. Practitioners form a hypothesis about steady-state behaviour, introduce a failure in production or productio
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:site-reliability-engineering
hasPart:
  - urn:ngm:class:fault-injection
  - urn:ngm:class:steady-state-hypothesis
  - urn:ngm:class:blast-radius-control
requires:
  - urn:ngm:class:incident-response
enables:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:high-availability
dependsOn:
  - urn:ngm:class:observability
  - urn:ngm:class:monitoring
contrastsWith:
  - urn:ngm:class:traditional-qa-testing
bridgesTo:
  - urn:ngm:class:disaster-recovery
  - urn:ngm:class:game-day
uses:
  - urn:ngm:class:chaos-monkey
  - urn:ngm:class:fault-injection
supports:
  - urn:ngm:class:resilient-architecture
  - urn:ngm:class:distributed-systems
partOf:
  - urn:ngm:class:resilience-engineering
relatedTo:
  - urn:ngm:class:reliability
  - urn:ngm:class:service-level-objective
---

# Chaos Engineering

Chaos engineering is the discipline of experimenting on a software system by deliberately injecting controlled faults — such as instance termination, network latency, or resource exhaustion — in order to build confidence in the system's ability to withstand turbulent, real-world conditions. Practitioners form a hypothesis about steady-state behaviour, introduce a failure in production or production-like environments, and observe whether the system maintains its service level. Originating with Netflix's Chaos Monkey, the practice surfaces hidden dependencies and weaknesses before they cause outages, complementing observability and resilient design.
