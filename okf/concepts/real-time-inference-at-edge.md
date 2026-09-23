---
okf_version: "0.2"
type: Class
title: Real-Time Inference at Edge
resource: urn:ngm:class:real-time-inference-at-edge
domain: artificial-intelligence
description: The execution of machine learning inference on edge devices under deterministic latency constraints, typically P99 latency below 10–100 ms, to support safety-critical and time-sensitive applications. Achieves real-time performance through hardware accelerators (NPUs, FPGAs, ASICs), model compression, and priority scheduling without reliance on cloud round-trips.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:ai-infrastructure
requires:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:model-compression-for-edge
  - urn:ngm:class:embedded-systems
uses:
  - urn:ngm:class:npu
  - urn:ngm:class:fpga
  - urn:ngm:class:edge-ai-accelerator
  - urn:ngm:class:latency-aware-edge-ai
relatedTo:
  - urn:ngm:class:edge-ai-system
  - urn:ngm:class:knowledge-distillation-for-edge
  - urn:ngm:class:model-pruning-for-edge-deployment
---

# Real-Time Inference at Edge

The execution of machine learning inference on edge devices under deterministic latency constraints, typically P99 latency below 10–100 ms, to support safety-critical and time-sensitive applications. Achieves real-time performance through hardware accelerators (NPUs, FPGAs, ASICs), model compression, and priority scheduling without reliance on cloud round-trips.
