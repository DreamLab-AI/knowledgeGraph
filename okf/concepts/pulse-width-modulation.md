---
okf_version: "0.2"
type: Class
title: Pulse Width Modulation
resource: urn:ngm:class:pulse-width-modulation
domain: robotics
description: Pulse-width modulation (PWM) is a technique that controls the average power delivered to a load by rapidly switching a signal between on and off and varying the proportion of on-time, the duty cycle. Because the switching frequency is high relative to the load's response, the load reacts to the average value, yielding efficient, near-lossless control of voltage, current, or position. It is ubiquit
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:robotics
  - urn:ngm:class:robo-actuation-and-control
hasPart:
  - urn:ngm:class:duty-cycle
requires:
  - urn:ngm:class:microcontroller
  - urn:ngm:class:power-electronics
enables:
  - urn:ngm:class:motor-control
  - urn:ngm:class:servo-motor
dependsOn:
  - urn:ngm:class:power-electronics
  - urn:ngm:class:control-system
implements:
  - urn:ngm:class:signal-processing
bridgesTo:
  - urn:ngm:class:embedded-systems
uses:
  - urn:ngm:class:duty-cycle
  - urn:ngm:class:microcontroller
supports:
  - urn:ngm:class:actuator
  - urn:ngm:class:dc-motor
partOf:
  - urn:ngm:class:motor-control
relatedTo:
  - urn:ngm:class:actuator
  - urn:ngm:class:servo-motor
  - urn:ngm:class:control-system
  - urn:ngm:class:embedded-systems
---

# Pulse Width Modulation

Pulse-width modulation (PWM) is a technique that controls the average power delivered to a load by rapidly switching a signal between on and off and varying the proportion of on-time, the duty cycle. Because the switching frequency is high relative to the load's response, the load reacts to the average value, yielding efficient, near-lossless control of voltage, current, or position. It is ubiquitous in motor drives, power conversion, and digital generation of analogue-like outputs.
