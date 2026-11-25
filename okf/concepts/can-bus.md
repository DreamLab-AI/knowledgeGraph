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
  - urn:ngm:class:embedded-system
enables:
  - urn:ngm:class:real-time-control
  - urn:ngm:class:motor-driver
bridgesTo:
  - urn:ngm:class:micro-ros
  - urn:ngm:class:power-electronics
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# CAN Bus

CAN Bus (Controller Area Network) is a reliable serial communication standard that lets microcontrollers and devices exchange messages over a shared two-wire bus without a host computer, widely used in vehicles and robotics.
