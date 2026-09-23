---
okf_version: "0.2"
type: Class
title: Firmware
resource: urn:ngm:class:firmware
domain: infrastructure
description: Firmware is the low-level software stored in non-volatile memory that provides the control, monitoring and data-handling logic for a hardware device. It sits between the physical hardware and higher-level software, initialising components, exposing device functions and often forming the only software a simple device runs. Firmware is typically tightly coupled to specific hardware and is updated th
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:embedded-systems
hasPart:
  - urn:ngm:class:bootloader
  - urn:ngm:class:device-drivers
  - urn:ngm:class:device-drivers
requires:
  - urn:ngm:class:microcontroller
  - urn:ngm:class:non-volatile-memory
enables:
  - urn:ngm:class:hardware-abstraction
  - urn:ngm:class:device-functionality
dependsOn:
  - urn:ngm:class:hardware
contrastsWith:
  - urn:ngm:class:application-software
uses:
  - urn:ngm:class:over-the-air-update
supports:
  - urn:ngm:class:iot-device
  - urn:ngm:class:internet-of-things
partOf:
  - urn:ngm:class:computer-hardware
relatedTo:
  - urn:ngm:class:operating-system
  - urn:ngm:class:real-time-operating-system
---

# Firmware

Firmware is the low-level software stored in non-volatile memory that provides the control, monitoring and data-handling logic for a hardware device. It sits between the physical hardware and higher-level software, initialising components, exposing device functions and often forming the only software a simple device runs. Firmware is typically tightly coupled to specific hardware and is updated through controlled mechanisms such as over-the-air updates. It is foundational to embedded systems, peripherals and connected devices.
