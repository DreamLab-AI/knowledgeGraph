---
okf_version: "0.2"
type: Class
title: Tensor Core
resource: urn:ngm:class:tensor-core
domain: infrastructure
description: A Tensor Core is a specialised hardware execution unit within a GPU that performs small matrix multiply-accumulate operations in a single instruction, optimised for the dense linear algebra at the heart of deep learning. It operates on mixed-precision inputs, accumulating in higher precision while multiplying in reduced precision to maximise throughput. By accelerating matrix multiplication, Tenso
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:gpu-architecture
hasPart:
  - urn:ngm:class:gpu-architecture
requires:
  - urn:ngm:class:memory-bandwidth
enables:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:inference
  - urn:ngm:class:model-training
implements:
  - urn:ngm:class:parallel-computing
uses:
  - urn:ngm:class:cuda
supports:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:transformer-architecture
partOf:
  - urn:ngm:class:gpu
relatedTo:
  - urn:ngm:class:neural-network
  - urn:ngm:class:gpu
---

# Tensor Core

A Tensor Core is a specialised hardware execution unit within a GPU that performs small matrix multiply-accumulate operations in a single instruction, optimised for the dense linear algebra at the heart of deep learning. It operates on mixed-precision inputs, accumulating in higher precision while multiplying in reduced precision to maximise throughput. By accelerating matrix multiplication, Tensor Cores deliver large gains in training and inference performance over general-purpose GPU cores.
