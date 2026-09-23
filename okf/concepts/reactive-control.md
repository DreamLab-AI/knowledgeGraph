---
okf_version: "0.2"
type: Class
title: Reactive Control
resource: urn:ngm:class:reactive-control
domain: robotics
description: Reactive Control is a paradigm of robot control architecture in which sensor inputs are mapped directly to actuator outputs through fast, pre-compiled stimulus-response rules, without constructing an explicit world model. Associated with Brooks's subsumption architecture and behaviour-based robotics, it enables low-latency responses to environmental perturbations and is typically combined with del
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:robo-actuation-and-control
enables:
  - urn:ngm:class:autonomous-robot
  - urn:ngm:class:obstacle-avoidance
contrastsWith:
  - urn:ngm:class:closed-loop-control
uses:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:feedback-control
relatedTo:
  - urn:ngm:class:motion-control
  - urn:ngm:class:force-control
  - urn:ngm:class:manipulation
---

# Reactive Control

Reactive Control is a paradigm of robot control architecture in which sensor inputs are mapped directly to actuator outputs through fast, pre-compiled stimulus-response rules, without constructing an explicit world model. Associated with Brooks's subsumption architecture and behaviour-based robotics, it enables low-latency responses to environmental perturbations and is typically combined with deliberative or hybrid planners in practical autonomous systems.
