---
okf_version: "0.2"
type: Class
title: Central Processing Unit
resource: urn:ngm:class:central-processing-unit
domain: infrastructure
description: The central processing unit (CPU) is the primary computational component of a computer, executing the instructions of programs through arithmetic, logic, control, and input/output operations. It fetches instructions from memory, decodes them, and executes them in a repeating cycle, coordinated by a control unit and carried out by arithmetic-logic units across one or more cores. As a general-purpos
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:computer-hardware
hasPart:
  - urn:ngm:class:computer-hardware
requires:
  - urn:ngm:class:computer-hardware
enables:
  - urn:ngm:class:data-processing
  - urn:ngm:class:parallel-computing
contrastsWith:
  - urn:ngm:class:graphics-processing-unit
  - urn:ngm:class:gpu
supports:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:data-processing
partOf:
  - urn:ngm:class:computer-hardware
relatedTo:
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:edge-computing
  - urn:ngm:class:infrastructure
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Central Processing Unit

The central processing unit (CPU) is the primary computational component of a computer, executing the instructions of programs through arithmetic, logic, control, and input/output operations. It fetches instructions from memory, decodes them, and executes them in a repeating cycle, coordinated by a control unit and carried out by arithmetic-logic units across one or more cores. As a general-purpose processor it contrasts with specialised accelerators that optimise for narrower, highly parallel workloads.
