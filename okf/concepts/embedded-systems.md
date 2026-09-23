---
okf_version: "0.2"
type: Class
title: Embedded Systems
resource: urn:ngm:class:embedded-systems
domain: infrastructure
description: Embedded Systems are specialised computing systems designed and deployed to perform dedicated functions within larger mechanical, electronic, or cyber-physical host devices, operating under strict resource constraints, real-time deadlines, and tight hardware-software coupling. They comprise microcontrollers, microprocessors, FPGAs, ASICs, sensors, actuators, and the firmware or RTOS environments t
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:infra-computing-and-cloud
hasPart:
  - urn:ngm:class:microcontroller
  - urn:ngm:class:fpga
  - urn:ngm:class:real-time-operating-system
  - urn:ngm:class:firmware
requires:
  - urn:ngm:class:hardware-abstraction-layer
  - urn:ngm:class:real-time-scheduling
enables:
  - urn:ngm:class:robotics
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:edge-ai
  - urn:ngm:class:industrial-automation
dependsOn:
  - urn:ngm:class:power-management
  - urn:ngm:class:memory-management
implements:
  - urn:ngm:class:control-loop
  - urn:ngm:class:communication-protocol
contrastsWith:
  - urn:ngm:class:general-purpose-computing
  - urn:ngm:class:cloud-computing
bridgesTo:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:cyber-physical-systems
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:sensor
  - urn:ngm:class:actuator
  - urn:ngm:class:digital-signal-processor
  - urn:ngm:class:interrupt-controller
supports:
  - urn:ngm:class:functional-safety
  - urn:ngm:class:over-the-air-update
standardizedBy:
  - urn:ngm:class:iec-61508
  - urn:ngm:class:iso-26262
  - urn:ngm:class:misra-c
relatedTo:
  - urn:ngm:class:control-system
  - urn:ngm:class:hardware-security
---

# Embedded Systems

Embedded Systems are specialised computing systems designed and deployed to perform dedicated functions within larger mechanical, electronic, or cyber-physical host devices, operating under strict resource constraints, real-time deadlines, and tight hardware-software coupling. They comprise microcontrollers, microprocessors, FPGAs, ASICs, sensors, actuators, and the firmware or RTOS environments that orchestrate them. Unlike general-purpose computers, embedded systems are optimised for a specific task domain — motor control, signal processing, network communication, or safety-critical actuation — and must satisfy reliability, power-budget, thermal, and often functional-safety requirements simultaneously. They form the foundational computational layer beneath robotics, industrial automation, consumer electronics, automotive ECUs, medical devices, and the Internet of Things.
