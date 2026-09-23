---
okf_version: "0.2"
type: Class
title: CPU
resource: urn:ngm:class:cpu
domain: infrastructure
description: A central processing unit (CPU) is the primary general-purpose processor of a computer, responsible for fetching, decoding, and executing the instructions of programs. It performs arithmetic, logic, control, and input/output operations dictated by software, coordinating the activity of the whole machine. As a versatile sequential and lightly parallel engine, the CPU contrasts with specialised acce
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:hardware
hasPart:
  - urn:ngm:class:cache-layer
  - urn:ngm:class:instruction-set-architecture
requires:
  - urn:ngm:class:memory
  - urn:ngm:class:clock-speed
enables:
  - urn:ngm:class:operating-system
  - urn:ngm:class:parallel-computing
dependsOn:
  - urn:ngm:class:instruction-set-architecture
  - urn:ngm:class:memory
contrastsWith:
  - urn:ngm:class:gpu
uses:
  - urn:ngm:class:cache-layer
supports:
  - urn:ngm:class:operating-system
partOf:
  - urn:ngm:class:hardware
  - urn:ngm:class:compute-resources
relatedTo:
  - urn:ngm:class:throughput
  - urn:ngm:class:latency
  - urn:ngm:class:computer-architecture
---

# CPU

A central processing unit (CPU) is the primary general-purpose processor of a computer, responsible for fetching, decoding, and executing the instructions of programs. It performs arithmetic, logic, control, and input/output operations dictated by software, coordinating the activity of the whole machine. As a versatile sequential and lightly parallel engine, the CPU contrasts with specialised accelerators such as GPUs that favour massive data parallelism.
