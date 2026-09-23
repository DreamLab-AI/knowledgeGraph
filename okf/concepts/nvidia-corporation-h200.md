---
okf_version: "0.2"
type: Class
title: NVIDIA H200
resource: urn:ngm:class:nvidia-corporation-h200
domain: infrastructure
description: The NVIDIA H200 is a data-centre GPU accelerator built on the Hopper architecture, positioned as the memory-upgraded successor to the H100 within the same generation. Its defining change is the adoption of HBM3e high-bandwidth memory, raising on-package capacity to 141 GB and memory bandwidth to roughly 4.8 TB/s — a substantial increase over the H100's 80 GB of HBM3. The extra capacity and bandwid
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:ai-accelerator
contrastsWith:
  - urn:ngm:class:nvidia-corporation-h-100
uses:
  - urn:ngm:class:high-bandwidth-memory
partOf:
  - urn:ngm:class:data-centre
relatedTo:
  - urn:ngm:class:nvidia-corporation
  - urn:ngm:class:gpu
---

# NVIDIA H200

The NVIDIA H200 is a data-centre GPU accelerator built on the Hopper architecture, positioned as the memory-upgraded successor to the H100 within the same generation. Its defining change is the adoption of HBM3e high-bandwidth memory, raising on-package capacity to 141 GB and memory bandwidth to roughly 4.8 TB/s — a substantial increase over the H100's 80 GB of HBM3. The extra capacity and bandwidth directly benefit large-language-model inference and training, where model weights and key-value caches are memory-bound, allowing larger models or longer context windows to be served per device and improving throughput on memory-limited workloads.
