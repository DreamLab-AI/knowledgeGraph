---
okf_version: "0.2"
type: Class
title: Mixed Precision Training
resource: urn:ngm:class:mixed-precision-training
domain: machine-learning
description: A training technique that uses lower precision (FP16 or BF16) for most computations whilst maintaining higher precision (FP32) for numerically critical operations, reducing memory usage and increasing training speed without sacrificing model quality. Relies on loss scaling to prevent gradient underflow and leverages hardware tensor cores for throughput gains.
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:neural-network-training
requires:
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:tensor-core
enables:
  - urn:ngm:class:model-training
  - urn:ngm:class:large-language-models
  - urn:ngm:class:distributed-training
dependsOn:
  - urn:ngm:class:floating-point-arithmetic
  - urn:ngm:class:gradient-computation
  - urn:ngm:class:automatic-differentiation
contrastsWith:
  - urn:ngm:class:neural-network-quantisation
bridgesTo:
  - urn:ngm:class:hardware-software-co-design
uses:
  - urn:ngm:class:python-pytorch-deep-learning-stack
  - urn:ngm:class:tensor-flow
  - urn:ngm:class:bfloat16
supports:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:deep-learning
partOf:
  - urn:ngm:class:neural-network-training
  - urn:ngm:class:model-optimisation-and-performance
relatedTo:
  - urn:ngm:class:gradient-checkpointing
  - urn:ngm:class:model-compression
---

# Mixed Precision Training

A training technique that uses lower precision (FP16 or BF16) for most computations whilst maintaining higher precision (FP32) for numerically critical operations, reducing memory usage and increasing training speed without sacrificing model quality. Relies on loss scaling to prevent gradient underflow and leverages hardware tensor cores for throughput gains.
