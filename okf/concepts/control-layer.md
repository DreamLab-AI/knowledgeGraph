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
---

# Control Layer

The Control Layer is the stratum that issues commands to actuators or subsystems to drive a system toward desired states. It sits above the Perception Layer, on whose estimates it acts, and below planning and agent strata that set goals. It contains controllers, feedback loops, set-point logic, and the actuation interfaces that effect change.
