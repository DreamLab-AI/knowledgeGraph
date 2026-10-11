---
okf_version: "0.2"
type: Class
title: Embedded System
resource: urn:ngm:class:embedded-system
domain: robotics
description: Embedded Systems are specialised computing systems designed and deployed to perform dedicated functions within larger mechanical, electronic, or cyber-physical host devices, operating under strict resource constraints, real-time deadlines, and tight hardware-software coupling. They comprise microcontrollers, microprocessors, FPGAs, ASICs, sensors, actuators, and the firmware or RTOS environments t
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:robotics
  - urn:ngm:class:real-time-control
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
  - urn:ngm:class:automation
  - urn:ngm:class:robot-control
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:robotics
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:edge-ai
  - urn:ngm:class:industrial-automation
dependsOn:
  - urn:ngm:class:firmware
  - urn:ngm:class:hardware-abstraction-layer
  - urn:ngm:class:rtos
implements:
  - urn:ngm:class:control-loop
  - urn:ngm:class:communication-protocol
contrastsWith:
  - urn:ngm:class:general-purpose-computing
  - urn:ngm:class:cloud-computing
bridgesTo:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:cyber-physical-systems
  - urn:ngm:class:machine-learning
  - urn:ngm:class:onboard-computer
uses:
  - urn:ngm:class:sensor
  - urn:ngm:class:actuator
  - urn:ngm:class:microcontroller
  - urn:ngm:class:digital-signal-processor
  - urn:ngm:class:interrupt-controller
supports:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:power-management
partOf:
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:control-system
relatedTo:
  - urn:ngm:class:microcontroller
  - urn:ngm:class:firmware
  - urn:ngm:class:real-time
  - urn:ngm:class:system-on-chip
  - urn:ngm:class:fpga
  - urn:ngm:class:real-time
  - urn:ngm:class:control-system
  - urn:ngm:class:hardware-security
  - urn:ngm:class:command-and-data-handling
---

# Embedded System

Embedded Systems are specialised computing systems designed and deployed to perform dedicated functions within larger mechanical, electronic, or cyber-physical host devices, operating under strict resource constraints, real-time deadlines, and tight hardware-software coupling. They comprise microcontrollers, microprocessors, FPGAs, ASICs, sensors, actuators, and the firmware or RTOS environments that orchestrate them. Unlike general-purpose computers, embedded systems are optimised for a specific task domain — motor control, signal processing, network communication, or safety-critical actuation — and must satisfy reliability, power-budget, thermal, and often functional-safety requirements simultaneously. They form the foundational computational layer beneath robotics, industrial automation, consumer electronics, automotive ECUs, medical devices, and the Internet of Things.
