---
okf_version: "0.2"
type: Class
title: Coordination Layer
resource: urn:ngm:class:coordination-layer
domain: distributed-systems
description: The Coordination Layer is the cross-cutting stratum that orchestrates the work of multiple agents or services toward a shared objective. It sits above control and integration concerns and below the application goals it serves. It contains schedulers, workflow engines, consensus on task assignment, and the protocols that keep distributed actors aligned.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:dc-protocol-and-infra
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:control-layer
  - urn:ngm:class:integration-layer
enables:
  - urn:ngm:class:agent-layer
  - urn:ngm:class:application-layer
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:task-allocation
---

# Coordination Layer

The Coordination Layer is the cross-cutting stratum that orchestrates the work of multiple agents or services toward a shared objective. It sits above control and integration concerns and below the application goals it serves. It contains schedulers, workflow engines, consensus on task assignment, and the protocols that keep distributed actors aligned.
