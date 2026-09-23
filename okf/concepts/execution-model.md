---
okf_version: "0.2"
type: Class
title: Execution Model
resource: urn:ngm:class:execution-model
domain: infrastructure
description: An execution model is the abstract specification of how a computing system interprets, schedules, and carries out instructions or computations, defining the rules governing ordering, concurrency, memory access, and resource allocation. It forms the semantic foundation atop which programming languages, runtimes, and hardware platforms are designed, ensuring consistent and predictable behaviour acro
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:programming-paradigm
enables:
  - urn:ngm:class:runtime-environment
uses:
  - urn:ngm:class:virtual-machine
  - urn:ngm:class:compiler
supports:
  - urn:ngm:class:software-architecture
relatedTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:fault-tolerance
---

# Execution Model

An execution model is the abstract specification of how a computing system interprets, schedules, and carries out instructions or computations, defining the rules governing ordering, concurrency, memory access, and resource allocation. It forms the semantic foundation atop which programming languages, runtimes, and hardware platforms are designed, ensuring consistent and predictable behaviour across implementations.
