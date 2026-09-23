---
okf_version: "0.2"
type: Class
title: DC Servo Motor
resource: urn:ngm:class:dc-servo-motor
domain: robotics
description: DC servo motor combines a direct-current electric motor with integrated or external feedback control electronics to enable precise position, velocity, or torque regulation.
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:electric-motor
  - urn:ngm:class:servo-motor
hasPart:
  - urn:ngm:class:position-encoder
  - urn:ngm:class:dc-motor
  - urn:ngm:class:control-electronics
  - urn:ngm:class:current-driver
requires:
  - urn:ngm:class:power-supply
  - urn:ngm:class:feedback-sensor
  - urn:ngm:class:mechanical-load
  - urn:ngm:class:servo-amplifier
  - urn:ngm:class:power-supply
enables:
  - urn:ngm:class:trajectory-tracking
  - urn:ngm:class:precise-positioning
  - urn:ngm:class:load-adaptation
  - urn:ngm:class:dynamic-control
dependsOn:
  - urn:ngm:class:motor-shaft
  - urn:ngm:class:bearings
  - urn:ngm:class:cooling-system
bridgesTo:
  - urn:ngm:class:ai-agent-system
---

# DC Servo Motor

DC servo motor combines a direct-current electric motor with integrated or external feedback control electronics to enable precise position, velocity, or torque regulation.
