---
okf_version: "0.2"
type: Class
title: Velocity
resource: urn:ngm:class:velocity
domain: robotics
description: Velocity is the vector quantity expressing rate of change of position with respect to time, formally defined as v = dx/dt. In robotics and autonomous systems, it is a fundamental parameter governing motion planning, collision avoidance, and control, with algorithms such as Velocity Obstacle (VO) and Reciprocal Velocity Obstacle (RVO) built directly upon it.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robotics
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:control-system
enables:
  - urn:ngm:class:collision-avoidance
  - urn:ngm:class:motion-planning
uses:
  - urn:ngm:class:physics-simulation
relatedTo:
  - urn:ngm:class:robotics-control
---

# Velocity

Velocity is the vector quantity expressing rate of change of position with respect to time, formally defined as v = dx/dt. In robotics and autonomous systems, it is a fundamental parameter governing motion planning, collision avoidance, and control, with algorithms such as Velocity Obstacle (VO) and Reciprocal Velocity Obstacle (RVO) built directly upon it.
