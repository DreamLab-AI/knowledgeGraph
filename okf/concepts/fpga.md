---
okf_version: "0.2"
type: Class
title: FPGA
resource: urn:ngm:class:fpga
domain: infrastructure
description: A Field-Programmable Gate Array (FPGA) is a reconfigurable integrated circuit that can be configured after manufacturing to implement custom digital logic, offering a middle ground between flexible general-purpose processors and fixed-function ASICs. FPGAs are widely used for low-latency AI inference acceleration, edge computing, real-time signal processing, and hardware prototyping due to their r
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:inference-hardware
requires:
  - urn:ngm:class:hardware-description-language
enables:
  - urn:ngm:class:real-time-inference
  - urn:ngm:class:neural-network-quantisation
  - urn:ngm:class:real-time-signal-processing
  - urn:ngm:class:custom-neural-architectures
implements:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:hardware-accelerator
contrastsWith:
  - urn:ngm:class:asic
  - urn:ngm:class:graphics-processing-unit
  - urn:ngm:class:central-processing-unit
bridgesTo:
  - urn:ngm:class:5-g-network
  - urn:ngm:class:high-frequency-trading
  - urn:ngm:class:autonomous-robot
  - urn:ngm:class:digital-twin
supports:
  - urn:ngm:class:edge-ai
  - urn:ngm:class:autonomous-robot
  - urn:ngm:class:digital-twin
partOf:
  - urn:ngm:class:ai-accelerator
  - urn:ngm:class:edge-computing
relatedTo:
  - urn:ngm:class:system-on-chip
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# FPGA

A Field-Programmable Gate Array (FPGA) is a reconfigurable integrated circuit that can be configured after manufacturing to implement custom digital logic, offering a middle ground between flexible general-purpose processors and fixed-function ASICs. FPGAs are widely used for low-latency AI inference acceleration, edge computing, real-time signal processing, and hardware prototyping due to their reconfigurable architecture, energy efficiency, and deterministic execution.
