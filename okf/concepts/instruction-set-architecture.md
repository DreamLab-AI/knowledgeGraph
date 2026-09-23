---
okf_version: "0.2"
type: Class
title: Instruction Set Architecture
resource: urn:ngm:class:instruction-set-architecture
domain: infrastructure
description: An Instruction Set Architecture (ISA) is the abstract contract between hardware and software that defines the instructions a processor can execute, its registers, data types, addressing modes and memory model. It is the stable interface that allows compilers and operating systems to target a processor family without knowing its microarchitectural implementation. Examples include x86, ARM and the o
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:cpu
hasPart:
  - urn:ngm:class:compiler
requires:
  - urn:ngm:class:compiler
enables:
  - urn:ngm:class:operating-system
  - urn:ngm:class:virtual-machine
  - urn:ngm:class:compiler
dependsOn:
  - urn:ngm:class:cpu
implements:
  - urn:ngm:class:cpu
contrastsWith:
  - urn:ngm:class:virtual-machine
bridgesTo:
  - urn:ngm:class:compiler
uses:
  - urn:ngm:class:cpu
supports:
  - urn:ngm:class:operating-system
  - urn:ngm:class:parallel-computing
standardizedBy:
  - urn:ngm:class:open-source
partOf:
  - urn:ngm:class:cpu
relatedTo:
  - urn:ngm:class:compiler
  - urn:ngm:class:virtual-machine
  - urn:ngm:class:operating-system
---

# Instruction Set Architecture

An Instruction Set Architecture (ISA) is the abstract contract between hardware and software that defines the instructions a processor can execute, its registers, data types, addressing modes and memory model. It is the stable interface that allows compilers and operating systems to target a processor family without knowing its microarchitectural implementation. Examples include x86, ARM and the open RISC-V ISA, each balancing complexity, power efficiency and ecosystem support.
