---
okf_version: "0.2"
type: Class
title: Field-Programmable Gate Array
resource: urn:ngm:class:field-programmable-gate-array
domain: artificial-intelligence
description: A field-programmable gate array (FPGA) is an integrated circuit whose internal logic and interconnect can be reconfigured by the user after manufacture to implement arbitrary digital circuits. It comprises a fabric of programmable logic blocks, embedded memories, and routing that is configured from a hardware description language. FPGAs deliver hardware-level parallelism and low latency while rema
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:hardware-accelerator
hasPart:
  - urn:ngm:class:integrated-circuit
enables:
  - urn:ngm:class:parallel-computing
implements:
  - urn:ngm:class:hardware-accelerator
contrastsWith:
  - urn:ngm:class:asic
  - urn:ngm:class:gpu
bridgesTo:
  - urn:ngm:class:asic
uses:
  - urn:ngm:class:hardware-description-language
  - urn:ngm:class:reconfigurable-computing
supports:
  - urn:ngm:class:digital-signal-processing
partOf:
  - urn:ngm:class:reconfigurable-computing
relatedTo:
  - urn:ngm:class:system-on-chip
  - urn:ngm:class:integrated-circuit
---

# Field-Programmable Gate Array

A field-programmable gate array (FPGA) is an integrated circuit whose internal logic and interconnect can be reconfigured by the user after manufacture to implement arbitrary digital circuits. It comprises a fabric of programmable logic blocks, embedded memories, and routing that is configured from a hardware description language. FPGAs deliver hardware-level parallelism and low latency while remaining reprogrammable, sitting between fixed ASICs and general-purpose processors.
