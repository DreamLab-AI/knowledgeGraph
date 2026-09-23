---
okf_version: "0.2"
type: Class
title: GPU Resources
resource: urn:ngm:class:gpu-resources
domain: infrastructure
description: GPU resources refer to the pool of graphics processing unit capacity — including VRAM, streaming multiprocessors, tensor cores, and associated interconnect bandwidth — that is provisioned, allocated, and managed as a computational resource for parallel workloads such as AI model training and inference, scientific simulation, computer graphics rendering, and high-performance computing. In cloud and
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:compute-resources
  - urn:ngm:class:infra-computing-and-cloud
enables:
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:large-scale-compute
  - urn:ngm:class:computer-graphics
uses:
  - urn:ngm:class:cuda
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:compute-shader
relatedTo:
  - urn:ngm:class:compute-infrastructure
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:edge-ai-accelerator
  - urn:ngm:class:inference-hardware
---

# GPU Resources

GPU resources refer to the pool of graphics processing unit capacity — including VRAM, streaming multiprocessors, tensor cores, and associated interconnect bandwidth — that is provisioned, allocated, and managed as a computational resource for parallel workloads such as AI model training and inference, scientific simulation, computer graphics rendering, and high-performance computing. In cloud and data centre contexts, GPU resources are typically accessed through virtualisation or direct hardware passthrough, managed by schedulers that partition capacity across competing workloads and billed on per-hour or per-token consumption models.
