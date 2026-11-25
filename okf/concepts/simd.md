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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# SIMD

SIMD (Single Instruction, Multiple Data) is a class of parallel computing hardware and instruction sets in which one instruction operates simultaneously on multiple data elements packed into a wide register, rather than processing them one at a time. It is implemented in CPU vector extensions and underlies the lock-step execution model of GPU cores. Numerical libraries such as NumPy and GPU programming frameworks rely on SIMD execution to accelerate array and tensor operations.
