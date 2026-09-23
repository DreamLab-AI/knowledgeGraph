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
---

# H-Bridge

An H-bridge is a power-electronics circuit of four switching elements arranged in an 'H' around a load, enabling voltage of either polarity to be applied from a single supply. It is the core stage of DC motor drivers: diagonal switch pairs drive the motor forward or reverse, pulse-width modulation of the switches regulates speed and torque, and shorting or opening both legs provides braking or coasting. Implemented with MOSFETs or IGBTs plus gate drivers and protection, H-bridges power robotics actuators, servo drives, inverters, and battery-powered traction.
