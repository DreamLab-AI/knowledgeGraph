---
okf_version: "0.2"
type: Class
title: Microcontroller
resource: urn:ngm:class:microcontroller
domain: robotics
description: A microcontroller is a compact integrated circuit that combines a processor core, memory and programmable input and output peripherals on a single chip, designed to run a dedicated control program. Unlike a general-purpose processor, it embeds the resources needed for embedded control directly, enabling low-cost, low-power operation in devices that sense and actuate their environment. Microcontrol
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:hardware-component
hasPart:
  - urn:ngm:class:memory
  - urn:ngm:class:non-volatile-memory
  - urn:ngm:class:processor
requires:
  - urn:ngm:class:firmware
enables:
  - urn:ngm:class:embedded-system
  - urn:ngm:class:iot-device
dependsOn:
  - urn:ngm:class:hardware
contrastsWith:
  - urn:ngm:class:system-on-chip
uses:
  - urn:ngm:class:real-time-operating-system
supports:
  - urn:ngm:class:sensor
  - urn:ngm:class:actuator
partOf:
  - urn:ngm:class:embedded-system
relatedTo:
  - urn:ngm:class:motor-driver
  - urn:ngm:class:edge-computing
  - urn:ngm:class:hardware-component
---

# Microcontroller

A microcontroller is a compact integrated circuit that combines a processor core, memory and programmable input and output peripherals on a single chip, designed to run a dedicated control program. Unlike a general-purpose processor, it embeds the resources needed for embedded control directly, enabling low-cost, low-power operation in devices that sense and actuate their environment. Microcontrollers execute firmware in real time and are the computational heart of countless embedded and robotic systems.
