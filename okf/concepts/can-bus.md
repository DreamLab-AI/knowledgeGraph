---
okf_version: "0.2"
type: Class
title: CAN Bus
resource: urn:ngm:class:can-bus
domain: robotics
description: CAN Bus (Controller Area Network) is a reliable serial communication standard that lets microcontrollers and devices exchange messages over a shared two-wire bus without a host computer, widely used in vehicles and robotics.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:communication-protocol
requires:
  - urn:ngm:class:embedded-systems
enables:
  - urn:ngm:class:real-time-control
  - urn:ngm:class:motor-driver
bridgesTo:
  - urn:ngm:class:micro-ros
  - urn:ngm:class:power-electronics
---

# CAN Bus

CAN Bus (Controller Area Network) is a reliable serial communication standard that lets microcontrollers and devices exchange messages over a shared two-wire bus without a host computer, widely used in vehicles and robotics.
