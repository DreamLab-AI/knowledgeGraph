---
okf_version: "0.2"
type: Class
title: Actuators
resource: urn:ngm:class:actuators
domain: robotics
description: Actuators are physical devices that convert an electrical, hydraulic, or pneumatic control signal into mechanical motion or force, enabling a control system to produce a desired physical effect in the world. They are the output components of robotic and cyber-physical systems, spanning technologies including servo motors, pneumatic cylinders, hydraulic actuators, and piezoelectric elements, each o
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:robot-component
hasPart:
  - urn:ngm:class:servo-motor
  - urn:ngm:class:pneumatic-actuator
  - urn:ngm:class:series-elastic-actuator
requires:
  - urn:ngm:class:feedback-control
  - urn:ngm:class:motion-control
  - urn:ngm:class:power-electronics
enables:
  - urn:ngm:class:robot-manipulation
  - urn:ngm:class:haptic-feedback
  - urn:ngm:class:locomotion
  - urn:ngm:class:force-torque-control
dependsOn:
  - urn:ngm:class:sensors
  - urn:ngm:class:control-system
implements:
  - urn:ngm:class:robot-actuator
bridgesTo:
  - urn:ngm:class:extended-reality
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:ether-cat
  - urn:ngm:class:robot-operating-system
partOf:
  - urn:ngm:class:robot
  - urn:ngm:class:cyber-physical-systems
  - urn:ngm:class:humanoid-robot
relatedTo:
  - urn:ngm:class:soft-robotics
  - urn:ngm:class:prosthetics
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Actuators

Actuators are physical devices that convert an electrical, hydraulic, or pneumatic control signal into mechanical motion or force, enabling a control system to produce a desired physical effect in the world. They are the output components of robotic and cyber-physical systems, spanning technologies including servo motors, pneumatic cylinders, hydraulic actuators, and piezoelectric elements, each offering different trade-offs in force output, speed, precision, and energy efficiency.
