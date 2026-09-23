---
okf_version: "0.2"
type: Class
title: CPU Computing
resource: urn:ngm:class:cpu-computing
domain: spatial-computing
description: "CPU computing is the execution of computational workloads on a general-purpose central processing unit, which performs instructions sequentially across a small number of high-clock cores optimised for low latency and complex control flow. It excels at branch-heavy, irregular, and serial tasks but contrasts with the massively parallel throughput model of GPU computing. CPUs follow a stored-program "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:parallel-computing
hasPart:
  - urn:ngm:class:cpu
requires:
  - urn:ngm:class:semiconductor
enables:
  - urn:ngm:class:hardware-acceleration
dependsOn:
  - urn:ngm:class:integrated-circuit
contrastsWith:
  - urn:ngm:class:gpu-computing
bridgesTo:
  - urn:ngm:class:gpu
uses:
  - urn:ngm:class:central-processing-unit
  - urn:ngm:class:instruction-set-architecture
supports:
  - urn:ngm:class:compute-shader
partOf:
  - urn:ngm:class:hardware
relatedTo:
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:graphics-processing-unit
---

# CPU Computing

CPU computing is the execution of computational workloads on a general-purpose central processing unit, which performs instructions sequentially across a small number of high-clock cores optimised for low latency and complex control flow. It excels at branch-heavy, irregular, and serial tasks but contrasts with the massively parallel throughput model of GPU computing. CPUs follow a stored-program architecture with deep cache hierarchies, out-of-order execution, and rich instruction sets.
