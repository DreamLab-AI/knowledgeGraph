---
okf_version: "0.2"
type: Class
title: Control Layer
resource: urn:ngm:class:control-layer
domain: robotics
description: The Control Layer is the stratum that issues commands to actuators or subsystems to drive a system toward desired states. It sits above the Perception Layer, on whose estimates it acts, and below planning and agent strata that set goals. It contains controllers, feedback loops, set-point logic, and the actuation interfaces that effect change.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:perception-layer
enables:
  - urn:ngm:class:agent-layer
  - urn:ngm:class:coordination-layer
bridgesTo:
  - urn:ngm:class:control-theory
  - urn:ngm:class:feedback-loop
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Control Layer

The Control Layer is the stratum that issues commands to actuators or subsystems to drive a system toward desired states. It sits above the Perception Layer, on whose estimates it acts, and below planning and agent strata that set goals. It contains controllers, feedback loops, set-point logic, and the actuation interfaces that effect change.
