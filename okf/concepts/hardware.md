---
okf_version: "0.2"
type: Class
title: Hardware
resource: urn:ngm:class:hardware
domain: spatial-computing
description: Hardware denotes the physical, tangible components of a computing system — processors, memory modules, storage devices, input/output peripherals, power subsystems, and interconnects — that collectively provide the substrate on which software executes. In the spatial-computing and infrastructure context it encompasses both general-purpose devices (CPUs, GPUs, FPGAs, ASICs) and specialised sensors a
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:sc-platform-and-environment
hasPart:
  - urn:ngm:class:hardware-component
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:central-processing-unit
  - urn:ngm:class:memory-subsystem
  - urn:ngm:class:sensor
  - urn:ngm:class:storage-device
requires:
  - urn:ngm:class:operating-system
  - urn:ngm:class:device-drivers
  - urn:ngm:class:power-management
  - urn:ngm:class:device-drivers
enables:
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:edge-computing
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:on-device-inference
dependsOn:
  - urn:ngm:class:semiconductor-fabrication
  - urn:ngm:class:supply-chain
contrastsWith:
  - urn:ngm:class:virtual-machine
  - urn:ngm:class:software
bridgesTo:
  - urn:ngm:class:neural-processing-unit
  - urn:ngm:class:tee
supports:
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:robotics
standardizedBy:
  - urn:ngm:class:ieee
  - urn:ngm:class:jedec
relatedTo:
  - urn:ngm:class:hardware-abstraction
  - urn:ngm:class:hardware-and-edge
  - urn:ngm:class:firmware
  - urn:ngm:class:hardware-security-module
---

# Hardware

Hardware denotes the physical, tangible components of a computing system — processors, memory modules, storage devices, input/output peripherals, power subsystems, and interconnects — that collectively provide the substrate on which software executes. In the spatial-computing and infrastructure context it encompasses both general-purpose devices (CPUs, GPUs, FPGAs, ASICs) and specialised sensors and actuators (depth cameras, inertial measurement units, haptic controllers, head-mounted displays) that enable immersive and intelligent workloads. Hardware capability sets the fundamental performance, latency, power, and thermal envelope that software stacks must respect, making hardware design decisions inseparable from system architecture, operating-system abstractions, and application-level trade-offs. The discipline spans semiconductor fabrication, PCB design, embedded firmware, hardware security primitives, and the standards that allow heterogeneous devices to interoperate.
