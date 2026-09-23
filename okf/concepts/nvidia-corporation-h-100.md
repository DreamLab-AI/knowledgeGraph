---
okf_version: "0.2"
type: Class
title: NVIDIA H100
resource: urn:ngm:class:nvidia-corporation-h-100
domain: ai
description: The NVIDIA H100 is a data-centre GPU accelerator built on the Hopper microarchitecture (GH100 die), designed for AI model training, large-scale inference, and high-performance computing workloads. It introduced a dedicated Transformer Engine with FP8 mixed-precision support, fourth-generation NVLink interconnect, and high-bandwidth HBM3 memory, enabling substantially faster training of large langu
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:gpu
  - urn:ngm:class:ai-infrastructure
hasPart:
  - urn:ngm:class:nvlink
  - urn:ngm:class:high-bandwidth-memory
  - urn:ngm:class:transformer-engine
  - urn:ngm:class:nvswitch
  - urn:ngm:class:tensor-core
requires:
  - urn:ngm:class:high-bandwidth-memory
  - urn:ngm:class:cuda
enables:
  - urn:ngm:class:large-language-model-training
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:ai-inference
  - urn:ngm:class:high-performance-computing
dependsOn:
  - urn:ngm:class:cuda
  - urn:ngm:class:hopper-architecture
  - urn:ngm:class:nvidia-software-stack
implements:
  - urn:ngm:class:mixed-precision-training
  - urn:ngm:class:tensor-core
  - urn:ngm:class:fp8-precision
contrastsWith:
  - urn:ngm:class:tpu
  - urn:ngm:class:nvidia-a100
  - urn:ngm:class:amd-instinct-mi300x
  - urn:ngm:class:tpu
bridgesTo:
  - urn:ngm:class:generative-ai
  - urn:ngm:class:foundation-model
  - urn:ngm:class:data-centre
  - urn:ngm:class:data-centre
uses:
  - urn:ngm:class:infiniband
  - urn:ngm:class:pcie-5
partOf:
  - urn:ngm:class:gpu-cluster
  - urn:ngm:class:dgx-h100
relatedTo:
  - urn:ngm:class:nvidia-corporation
  - urn:ngm:class:ai-accelerator
  - urn:ngm:class:nvidia-corporation-h200
---

# NVIDIA H100

The NVIDIA H100 is a data-centre GPU accelerator built on the Hopper microarchitecture (GH100 die), designed for AI model training, large-scale inference, and high-performance computing workloads. It introduced a dedicated Transformer Engine with FP8 mixed-precision support, fourth-generation NVLink interconnect, and high-bandwidth HBM3 memory, enabling substantially faster training of large language models and other deep-learning workloads compared to its predecessor, the A100. The H100 is manufactured on TSMC N4 process technology and is available in PCIe and SXM5 form factors, the latter optimised for dense multi-GPU server nodes. Its combination of raw compute throughput and high-speed GPU-to-GPU interconnect made it the de-facto standard accelerator for generative AI infrastructure from 2023 onwards.
