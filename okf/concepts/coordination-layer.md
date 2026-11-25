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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Coordination Layer

The Coordination Layer is the cross-cutting stratum that orchestrates the work of multiple agents or services toward a shared objective. It sits above control and integration concerns and below the application goals it serves. It contains schedulers, workflow engines, consensus on task assignment, and the protocols that keep distributed actors aligned.
