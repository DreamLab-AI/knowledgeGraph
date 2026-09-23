---
okf_version: "0.2"
type: Class
title: rb 0036 resolution
resource: urn:ngm:class:rb-0036-resolution
domain: robotics
description: Resolution, as defined by ISO 8373, is the smallest increment of motion or measurement that a robot system can distinguish or command. For manipulators it typically refers to the minimum step size achievable in Cartesian or joint space; for sensors it denotes the smallest detectable change in the measured quantity. Resolution is distinct from accuracy and repeatability, and it places a fundamental
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
dependsOn:
  - urn:ngm:class:rb-0040-backlash
  - urn:ngm:class:rb-0026-robot-joint
supports:
  - urn:ngm:class:rb-0054-position-control
  - urn:ngm:class:rb-0032-manipulability
relatedTo:
  - urn:ngm:class:rb-0035-accuracy
  - urn:ngm:class:rb-0034-repeatability
  - urn:ngm:class:rb-0023-degrees-of-freedom
  - urn:ngm:class:rb-0072-encoder
---

# rb 0036 resolution

Resolution, as defined by ISO 8373, is the smallest increment of motion or measurement that a robot system can distinguish or command. For manipulators it typically refers to the minimum step size achievable in Cartesian or joint space; for sensors it denotes the smallest detectable change in the measured quantity. Resolution is distinct from accuracy and repeatability, and it places a fundamental lower bound on the precision of both positioning and perception tasks.
