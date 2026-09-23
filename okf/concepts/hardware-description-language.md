---
okf_version: "0.2"
type: Class
title: Hardware Description Language
resource: urn:ngm:class:hardware-description-language
domain: infrastructure
description: A hardware description language (HDL) is a specialised programming language used to describe the structure, behaviour and timing of digital electronic circuits at varying levels of abstraction. HDLs allow engineers to specify logic at the register-transfer level, which synthesis tools then translate into gate-level netlists for fabrication or for configuring reconfigurable devices such as FPGAs. T
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:infra-computing-and-cloud
requires:
  - urn:ngm:class:embedded-systems
enables:
  - urn:ngm:class:fpga
  - urn:ngm:class:asic
  - urn:ngm:class:system-on-chip
contrastsWith:
  - urn:ngm:class:gpu
bridgesTo:
  - urn:ngm:class:embedded-systems
uses:
  - urn:ngm:class:digital-logic
supports:
  - urn:ngm:class:hardware-accelerator
  - urn:ngm:class:embedded-systems
partOf:
  - urn:ngm:class:infrastructure
relatedTo:
  - urn:ngm:class:gpu
  - urn:ngm:class:inference-hardware
  - urn:ngm:class:hardware-accelerator
---

# Hardware Description Language

A hardware description language (HDL) is a specialised programming language used to describe the structure, behaviour and timing of digital electronic circuits at varying levels of abstraction. HDLs allow engineers to specify logic at the register-transfer level, which synthesis tools then translate into gate-level netlists for fabrication or for configuring reconfigurable devices such as FPGAs. The two dominant HDLs are Verilog and VHDL, complemented by higher-level and verification-oriented variants. By capturing concurrency and precise timing semantics, HDLs make digital designs simulatable, verifiable and reproducible before any silicon is committed.
