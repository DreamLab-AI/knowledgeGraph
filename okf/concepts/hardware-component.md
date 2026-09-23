---
okf_version: "0.2"
type: Class
title: Hardware Component
resource: urn:ngm:class:hardware-component
domain: infrastructure
description: A Hardware Component is a discrete physical element — such as a processor, memory module, sensor, display panel, network interface, or power management unit — that constitutes a functional building block within a computing or electronic system. Hardware components are characterised by their electrical specifications, mechanical form factor, thermal envelope, and interface standards, and their sele
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:infra-computing-and-cloud
hasPart:
  - urn:ngm:class:memory-module
  - urn:ngm:class:sensor
  - urn:ngm:class:display-hardware
  - urn:ngm:class:network-interface
  - urn:ngm:class:power-management
  - urn:ngm:class:processor
  - urn:ngm:class:power-management
requires:
  - urn:ngm:class:firmware
  - urn:ngm:class:hardware-abstraction-layer
  - urn:ngm:class:power-supply
enables:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:haptic-feedback
  - urn:ngm:class:real-time-processing
  - urn:ngm:class:edge-inference
dependsOn:
  - urn:ngm:class:semiconductor-fabrication
  - urn:ngm:class:supply-chain-management
contrastsWith:
  - urn:ngm:class:component
  - urn:ngm:class:virtual-machine
  - urn:ngm:class:component
bridgesTo:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:neuromorphic-chip
  - urn:ngm:class:ai-accelerator
uses:
  - urn:ngm:class:communication-protocol
  - urn:ngm:class:bus-interface
supports:
  - urn:ngm:class:device-drivers
  - urn:ngm:class:operating-system
  - urn:ngm:class:device-drivers
standardizedBy:
  - urn:ngm:class:ieee-standards
  - urn:ngm:class:jedec
partOf:
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:edge-computing-node
  - urn:ngm:class:embedded-system
relatedTo:
  - urn:ngm:class:system-on-chip
  - urn:ngm:class:field-programmable-gate-array
  - urn:ngm:class:printed-circuit-board
---

# Hardware Component

A Hardware Component is a discrete physical element — such as a processor, memory module, sensor, display panel, network interface, or power management unit — that constitutes a functional building block within a computing or electronic system. Hardware components are characterised by their electrical specifications, mechanical form factor, thermal envelope, and interface standards, and their selection and integration collectively determine the throughput, latency, energy efficiency, and reliability of the host system. They are manufactured to industry or bespoke specifications and may be field-replaceable or permanently integrated at the board or package level. In the context of embedded, edge, and spatial-computing systems, the choice of hardware components directly constrains the achievable computational workloads, sensor modalities, and communication bandwidths.
