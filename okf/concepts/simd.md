---
okf_version: "0.2"
type: Class
title: SIMD
resource: urn:ngm:class:simd
domain: infrastructure
description: SIMD (Single Instruction, Multiple Data) is a class of parallel computing hardware and instruction sets in which one instruction operates simultaneously on multiple data elements packed into a wide register, rather than processing them one at a time. It is implemented in CPU vector extensions and underlies the lock-step execution model of GPU cores. Numerical libraries such as NumPy and GPU progra
maturity: draft
quality: 0.55
is-a:
  - urn:ngm:class:parallel-computing
partOf:
  - urn:ngm:class:parallel-computing
relatedTo:
  - urn:ngm:class:gpu-programming
  - urn:ngm:class:numpy
---

# SIMD

SIMD (Single Instruction, Multiple Data) is a class of parallel computing hardware and instruction sets in which one instruction operates simultaneously on multiple data elements packed into a wide register, rather than processing them one at a time. It is implemented in CPU vector extensions and underlies the lock-step execution model of GPU cores. Numerical libraries such as NumPy and GPU programming frameworks rely on SIMD execution to accelerate array and tensor operations.
