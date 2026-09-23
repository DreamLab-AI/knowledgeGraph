---
okf_version: "0.2"
type: Class
title: System-on-Chip
resource: urn:ngm:class:system-on-chip
domain: infrastructure
description: A system-on-chip (SoC) is an integrated circuit that combines most or all of the components of a computer system onto a single die, typically including one or more processor cores, memory, input and output interfaces and specialised accelerators. By co-locating these subsystems, an SoC reduces physical size, power consumption and inter-component latency compared with multi-chip designs. SoCs are f
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:hardware-component
hasPart:
  - urn:ngm:class:cpu
  - urn:ngm:class:gpu
  - urn:ngm:class:memory
enables:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:iot-device
dependsOn:
  - urn:ngm:class:hardware
  - urn:ngm:class:processor
contrastsWith:
  - urn:ngm:class:microcontroller
uses:
  - urn:ngm:class:non-volatile-memory
supports:
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:real-time-operating-system
partOf:
  - urn:ngm:class:embedded-system
relatedTo:
  - urn:ngm:class:field-programmable-gate-array
  - urn:ngm:class:system-architecture
  - urn:ngm:class:hardware-component
---

# System-on-Chip

A system-on-chip (SoC) is an integrated circuit that combines most or all of the components of a computer system onto a single die, typically including one or more processor cores, memory, input and output interfaces and specialised accelerators. By co-locating these subsystems, an SoC reduces physical size, power consumption and inter-component latency compared with multi-chip designs. SoCs are foundational to mobile devices, embedded systems and edge computing, where space and energy efficiency are critical.
