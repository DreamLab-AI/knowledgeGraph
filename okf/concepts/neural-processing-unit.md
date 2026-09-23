---
okf_version: "0.2"
type: Class
title: Neural Processing Unit
resource: urn:ngm:class:neural-processing-unit
domain: ai
description: A Neural Processing Unit (NPU) is a specialised integrated circuit designed to accelerate neural network inference workloads by providing high-throughput, energy-efficient execution of the matrix multiplication and convolution operations that dominate deep learning computation. NPUs are integrated into mobile SoCs, personal computers, and edge devices to enable on-device AI inference without relia
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-hardware
hasPart:
  - urn:ngm:class:systolic-array
requires:
  - urn:ngm:class:neural-network-quantisation
  - urn:ngm:class:neural-network
enables:
  - urn:ngm:class:on-device-inference
  - urn:ngm:class:edge-ai
  - urn:ngm:class:real-time-ai-inference
  - urn:ngm:class:ai-inference
  - urn:ngm:class:on-device-llm
dependsOn:
  - urn:ngm:class:memory-bandwidth
  - urn:ngm:class:semiconductor-fabrication
implements:
  - urn:ngm:class:neural-network-inference
  - urn:ngm:class:tensor-computation
contrastsWith:
  - urn:ngm:class:tensor-processing-unit
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:central-processing-unit
bridgesTo:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:inference-hardware
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:quantisation
supports:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:natural-language-processing
partOf:
  - urn:ngm:class:system-on-chip
relatedTo:
  - urn:ngm:class:npu
---

# Neural Processing Unit

A Neural Processing Unit (NPU) is a specialised integrated circuit designed to accelerate neural network inference workloads by providing high-throughput, energy-efficient execution of the matrix multiplication and convolution operations that dominate deep learning computation. NPUs are integrated into mobile SoCs, personal computers, and edge devices to enable on-device AI inference without reliance on cloud compute, targeting performance-per-watt objectives unachievable by general-purpose CPUs or GPUs for these workloads.
