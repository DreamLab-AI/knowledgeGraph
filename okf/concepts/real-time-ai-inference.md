---
okf_version: "0.2"
type: Class
title: Real-Time AI Inference
resource: urn:ngm:class:real-time-ai-inference
domain: ai
description: Real-time AI inference is the execution of trained machine learning model forward passes within latency bounds tight enough to support interactive or time-critical applications, typically measured in milliseconds to tens of milliseconds. It requires co-optimisation of model architecture, runtime software, and hardware accelerators — including GPUs, NPUs, and dedicated AI ASICs — to meet throughput
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:ai-inference
  - urn:ngm:class:ai-infrastructure
enables:
  - urn:ngm:class:edge-ai-system
  - urn:ngm:class:latency-aware-edge-ai
uses:
  - urn:ngm:class:inference-engine
  - urn:ngm:class:gpu-acceleration
  - urn:ngm:class:npu
  - urn:ngm:class:onnx-runtime
relatedTo:
  - urn:ngm:class:low-latency-computing
  - urn:ngm:class:model-compression-for-edge
---

# Real-Time AI Inference

Real-time AI inference is the execution of trained machine learning model forward passes within latency bounds tight enough to support interactive or time-critical applications, typically measured in milliseconds to tens of milliseconds. It requires co-optimisation of model architecture, runtime software, and hardware accelerators — including GPUs, NPUs, and dedicated AI ASICs — to meet throughput and latency targets whilst maintaining acceptable accuracy. Applications include autonomous vehicles, real-time video analysis, voice assistants, and spatial computing overlays.
