---
okf_version: "0.2"
type: Class
title: H-Bridge
resource: urn:ngm:class:h-bridge
domain: robotics
description: "An H-bridge is a power-electronics circuit of four switching elements arranged in an 'H' around a load, enabling voltage of either polarity to be applied from a single supply. It is the core stage of DC motor drivers: diagonal switch pairs drive the motor forward or reverse, pulse-width modulation of the switches regulates speed and torque, and shorting or opening both legs provides braking or coa"
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:power-electronics
enables:
  - urn:ngm:class:motor-control
uses:
  - urn:ngm:class:pulse-width-modulation
partOf:
  - urn:ngm:class:motor-driver
relatedTo:
  - urn:ngm:class:dc-servo-motor
  - urn:ngm:class:microcontroller
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# H-Bridge

An H-bridge is a power-electronics circuit of four switching elements arranged in an 'H' around a load, enabling voltage of either polarity to be applied from a single supply. It is the core stage of DC motor drivers: diagonal switch pairs drive the motor forward or reverse, pulse-width modulation of the switches regulates speed and torque, and shorting or opening both legs provides braking or coasting. Implemented with MOSFETs or IGBTs plus gate drivers and protection, H-bridges power robotics actuators, servo drives, inverters, and battery-powered traction.
