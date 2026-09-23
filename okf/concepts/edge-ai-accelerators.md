---
okf_version: "0.2"
type: Class
title: Edge AI Accelerators
resource: urn:ngm:class:edge-ai-accelerators
domain: artificial-intelligence
description: Edge AI Accelerators are specialised hardware processors — including Neural Processing Units (NPUs), Tensor Processing Units (TPUs), FPGAs, and custom ASICs — designed to execute machine learning inference workloads on resource-constrained edge devices with dramatically higher throughput and energy efficiency than general-purpose CPUs. By exploiting the inherent parallelism of neural network matri
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-infrastructure
hasPart:
  - urn:ngm:class:npu
  - urn:ngm:class:tpu
  - urn:ngm:class:fpga
  - urn:ngm:class:gpu-compute
requires:
  - urn:ngm:class:inference
  - urn:ngm:class:hardware-acceleration
enables:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:federated-learning
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:edge-ai-system
dependsOn:
  - urn:ngm:class:model-compression-for-edge
  - urn:ngm:class:knowledge-distillation-for-edge
uses:
  - urn:ngm:class:model-pruning-for-edge-deployment
  - urn:ngm:class:embedded-ai-frameworks
supports:
  - urn:ngm:class:autonomous-robot
  - urn:ngm:class:digital-twin
relatedTo:
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:inference-hardware
  - urn:ngm:class:neuromorphic-computing
  - urn:ngm:class:edge-ai-security
---

# Edge AI Accelerators

Edge AI Accelerators are specialised hardware processors — including Neural Processing Units (NPUs), Tensor Processing Units (TPUs), FPGAs, and custom ASICs — designed to execute machine learning inference workloads on resource-constrained edge devices with dramatically higher throughput and energy efficiency than general-purpose CPUs. By exploiting the inherent parallelism of neural network matrix operations and using low-precision arithmetic (INT8, FP16), edge accelerators achieve 5–100x performance gains over CPUs at 10–50x lower power per inference, enabling real-time AI on mobile, embedded, automotive, and IoT platforms without cloud connectivity.
