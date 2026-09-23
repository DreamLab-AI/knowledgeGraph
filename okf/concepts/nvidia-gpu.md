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
---

# Nvidia Gpu

An NVIDIA GPU is a graphics processing unit designed and manufactured by NVIDIA, providing massively parallel computation that has become the dominant hardware substrate for machine learning training and inference. These devices expose thousands of cores together with specialised tensor units optimised for the dense matrix multiplications central to deep learning. They are programmed predominantly through the CUDA platform and serve as the primary accelerator in modern data centres and high-performance computing systems.
