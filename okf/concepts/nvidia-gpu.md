---
okf_version: "0.2"
type: Class
title: Nvidia Gpu
resource: urn:ngm:class:nvidia-gpu
domain: machine-learning
description: An NVIDIA GPU is a graphics processing unit designed and manufactured by NVIDIA, providing massively parallel computation that has become the dominant hardware substrate for machine learning training and inference. These devices expose thousands of cores together with specialised tensor units optimised for the dense matrix multiplications central to deep learning. They are programmed predominantly
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:graphics-processing-unit
  - urn:ngm:class:hardware-component
requires:
  - urn:ngm:class:energy-consumption
enables:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:model-training
implements:
  - urn:ngm:class:hardware-acceleration
contrastsWith:
  - urn:ngm:class:asic
  - urn:ngm:class:fpga
uses:
  - urn:ngm:class:cuda
  - urn:ngm:class:parallel-computing
supports:
  - urn:ngm:class:training
  - urn:ngm:class:inference
  - urn:ngm:class:model-serving
  - urn:ngm:class:computer-vision
partOf:
  - urn:ngm:class:data-centre
  - urn:ngm:class:high-performance-computing
relatedTo:
  - urn:ngm:class:gpu
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:tensor
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Nvidia Gpu

An NVIDIA GPU is a graphics processing unit designed and manufactured by NVIDIA, providing massively parallel computation that has become the dominant hardware substrate for machine learning training and inference. These devices expose thousands of cores together with specialised tensor units optimised for the dense matrix multiplications central to deep learning. They are programmed predominantly through the CUDA platform and serve as the primary accelerator in modern data centres and high-performance computing systems.
