---
okf_version: "0.2"
type: Class
title: Megatron-LM
resource: urn:ngm:class:megatron-lm
domain: machine-learning
description: Megatron-LM is an open-source framework developed by NVIDIA for training very large transformer language models efficiently across many GPUs. It pioneered intra-layer tensor model parallelism, splitting individual weight matrices and attention heads across devices, and combines this with pipeline and data parallelism to scale to models with hundreds of billions of parameters. The framework provide
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:distributed-training
requires:
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:gradient-accumulation
enables:
  - urn:ngm:class:large-language-model
dependsOn:
  - urn:ngm:class:transformer-architecture
implements:
  - urn:ngm:class:tensor-parallelism
  - urn:ngm:class:model-parallelism
contrastsWith:
  - urn:ngm:class:deep-speed
uses:
  - urn:ngm:class:pipeline-parallelism
  - urn:ngm:class:cuda
  - urn:ngm:class:nvidia-gpu
  - urn:ngm:class:flash-attention
supports:
  - urn:ngm:class:mixed-precision-training
relatedTo:
  - urn:ngm:class:distributed-training
  - urn:ngm:class:parallel-computing
---

# Megatron-LM

Megatron-LM is an open-source framework developed by NVIDIA for training very large transformer language models efficiently across many GPUs. It pioneered intra-layer tensor model parallelism, splitting individual weight matrices and attention heads across devices, and combines this with pipeline and data parallelism to scale to models with hundreds of billions of parameters. The framework provides optimised kernels and communication patterns that minimise the overhead of synchronising gradients and activations between accelerators.
