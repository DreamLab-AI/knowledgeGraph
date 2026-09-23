---
okf_version: "0.2"
type: Class
title: ASIC
resource: urn:ngm:class:asic
domain: infrastructure
description: An Application-Specific Integrated Circuit (ASIC) is a custom integrated circuit designed and fabricated at the transistor and mask level to perform a specific function or narrow set of functions with maximum efficiency, in contrast to general-purpose processors such as CPUs and GPUs that are optimised for programmable flexibility. ASICs achieve superior performance-per-watt and cost efficiency at
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:hardware
hasPart:
  - urn:ngm:class:register-transfer-level
  - urn:ngm:class:standard-cell-library
  - urn:ngm:class:physical-layout
requires:
  - urn:ngm:class:electronic-design-automation
  - urn:ngm:class:foundry
  - urn:ngm:class:hardware-description-language
  - urn:ngm:class:foundry
enables:
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:neural-processing-unit
  - urn:ngm:class:inference-hardware
  - urn:ngm:class:bitcoin-proof-of-work-protocol-mining
  - urn:ngm:class:high-speed-networking
dependsOn:
  - urn:ngm:class:supply-chain-management
  - urn:ngm:class:cmos-process
implements:
  - urn:ngm:class:matrix-multiplication
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:cryptographic-hash-function
contrastsWith:
  - urn:ngm:class:fpga
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:central-processing-unit
bridgesTo:
  - urn:ngm:class:ai-accelerator
  - urn:ngm:class:proof-of-work
uses:
  - urn:ngm:class:chiplet-architecture
  - urn:ngm:class:advanced-packaging
partOf:
  - urn:ngm:class:semiconductor-industry
  - urn:ngm:class:system-on-chip
relatedTo:
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:hardware-component
  - urn:ngm:class:tape-out
  - urn:ngm:class:node-shrink
---

# ASIC

An Application-Specific Integrated Circuit (ASIC) is a custom integrated circuit designed and fabricated at the transistor and mask level to perform a specific function or narrow set of functions with maximum efficiency, in contrast to general-purpose processors such as CPUs and GPUs that are optimised for programmable flexibility. ASICs achieve superior performance-per-watt and cost efficiency at production volume by eliminating logic not required for the target workload, at the expense of reconfigurability. Design is conducted using hardware description languages (VHDL, SystemVerilog), electronic design automation suites, and a foundry-specific tape-out flow; non-recurring engineering costs at advanced nodes (5nm, 3nm) can exceed tens of millions of pounds, making economic viability contingent on volume or uniquely demanding performance requirements. ASICs are central to cryptocurrency mining, AI inference and training acceleration, high-speed networking switch fabric, signal processing, and consumer electronics where power, cost, and performance constraints demand purpose-built silicon.
