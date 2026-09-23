---
okf_version: "0.2"
type: Class
title: OpenCL
resource: urn:ngm:class:opencl
domain: infrastructure
description: "OpenCL (Open Computing Language) is an open, royalty-free standard for writing programs that execute across heterogeneous platforms including CPUs, GPUs, and other accelerators. It defines a C-based kernel language and host API for expressing data-parallel and task-parallel computation portably across vendors. OpenCL underpins general-purpose GPU computing where cross-vendor portability is valued "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:gpu-computing
hasPart:
  - urn:ngm:class:compute-shader
requires:
  - urn:ngm:class:gpu
enables:
  - urn:ngm:class:gpu-acceleration
  - urn:ngm:class:portability
dependsOn:
  - urn:ngm:class:gpu
contrastsWith:
  - urn:ngm:class:cuda
bridgesTo:
  - urn:ngm:class:spir-v
uses:
  - urn:ngm:class:parallel-computing
supports:
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:fpga
standardizedBy:
  - urn:ngm:class:khronos-group
partOf:
  - urn:ngm:class:parallel-computing
relatedTo:
  - urn:ngm:class:vulkan
  - urn:ngm:class:spir-v
  - urn:ngm:class:performance-optimization
---

# OpenCL

OpenCL (Open Computing Language) is an open, royalty-free standard for writing programs that execute across heterogeneous platforms including CPUs, GPUs, and other accelerators. It defines a C-based kernel language and host API for expressing data-parallel and task-parallel computation portably across vendors. OpenCL underpins general-purpose GPU computing where cross-vendor portability is valued over the deepest single-vendor optimisation.
