---
okf_version: "0.2"
type: Class
title: Electric Motor
resource: urn:ngm:class:electric-motor
domain: robotics
description: Electric motor converts electrical energy into rotational mechanical power through electromagnetic forces, forming the most widespread actuation technology in modern robotics.
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:electric-actuator
  - urn:ngm:class:rotating-machinery
hasPart:
  - urn:ngm:class:stator
  - urn:ngm:class:rotor
  - urn:ngm:class:bearings
  - urn:ngm:class:shaft
  - urn:ngm:class:power-terminals
requires:
  - urn:ngm:class:power-supply
  - urn:ngm:class:mechanical-load
  - urn:ngm:class:motor-driver
  - urn:ngm:class:power-supply
  - urn:ngm:class:motor-driver
  - urn:ngm:class:heat-dissipation
enables:
  - urn:ngm:class:joint-actuation
  - urn:ngm:class:torque-generation
  - urn:ngm:class:rotational-motion
  - urn:ngm:class:speed-control
dependsOn:
  - urn:ngm:class:electromagnetic-theory
  - urn:ngm:class:power-electronics
bridgesTo:
  - urn:ngm:class:ai-agent-system
---

# Electric Motor

Electric motor converts electrical energy into rotational mechanical power through electromagnetic forces, forming the most widespread actuation technology in modern robotics.
