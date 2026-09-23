---
okf_version: "0.2"
type: Class
title: Machine Learning Accelerator
resource: urn:ngm:class:machine-learning-accelerator
domain: spatial-computing
description: A Machine Learning Accelerator is specialised hardware designed to execute the dense linear-algebra workloads of neural networks far more efficiently than general-purpose CPUs. It optimises matrix multiplication, convolution and tensor operations through massive parallelism, dedicated multiply-accumulate arrays and high memory bandwidth. Examples span GPUs, tensor processing units, FPGAs and custo
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:hardware-acceleration
hasPart:
  - urn:ngm:class:matrix-multiplication
requires:
  - urn:ngm:class:parallel-computing
enables:
  - urn:ngm:class:inference
  - urn:ngm:class:model-training
  - urn:ngm:class:neural-network
dependsOn:
  - urn:ngm:class:gpu-computing
implements:
  - urn:ngm:class:hardware-acceleration
contrastsWith:
  - urn:ngm:class:cpu
bridgesTo:
  - urn:ngm:class:gpu
  - urn:ngm:class:tensor-processing-unit
uses:
  - urn:ngm:class:matrix-multiplication
  - urn:ngm:class:parallel-computing
supports:
  - urn:ngm:class:deep-learning-framework
  - urn:ngm:class:edge-computing
partOf:
  - urn:ngm:class:hardware-acceleration
relatedTo:
  - urn:ngm:class:fpga
  - urn:ngm:class:asic
  - urn:ngm:class:tensor-processing-unit
---

# Machine Learning Accelerator

A Machine Learning Accelerator is specialised hardware designed to execute the dense linear-algebra workloads of neural networks far more efficiently than general-purpose CPUs. It optimises matrix multiplication, convolution and tensor operations through massive parallelism, dedicated multiply-accumulate arrays and high memory bandwidth. Examples span GPUs, tensor processing units, FPGAs and custom ASICs deployed from data centres to edge and embedded devices.
