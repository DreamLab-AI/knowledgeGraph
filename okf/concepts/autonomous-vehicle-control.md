---
okf_version: "0.2"
type: Class
title: Autonomous Vehicle Control
resource: urn:ngm:class:autonomous-vehicle-control
domain: robotics
description: Autonomous vehicle control is the set of algorithms and systems that compute steering, acceleration and braking commands for a self-driving vehicle in order to safely follow a planned trajectory. It draws on model-based control, which uses an explicit dynamics model to compute corrective actions, and on optimal control, which formulates control as minimising a cost function subject to the vehicle'
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:autonomous-vehicle
requires:
  - urn:ngm:class:optimal-control
---

# Autonomous Vehicle Control

Autonomous vehicle control is the set of algorithms and systems that compute steering, acceleration and braking commands for a self-driving vehicle in order to safely follow a planned trajectory. It draws on model-based control, which uses an explicit dynamics model to compute corrective actions, and on optimal control, which formulates control as minimising a cost function subject to the vehicle's dynamics and constraints. It must operate reliably under uncertainty from sensing, actuation and the surrounding environment.
