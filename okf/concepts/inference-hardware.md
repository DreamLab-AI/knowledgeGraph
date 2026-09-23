---
okf_version: "0.2"
type: Class
title: Inference Hardware
resource: urn:ngm:class:inference-hardware
domain: artificial-intelligence
description: Specialized processors, accelerators, and system-on-chip designs optimized for running trained machine learning models in production, prioritizing low latency, energy efficiency, high throughput, and cost-effectiveness across data centers, edge devices, and embedded systems.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:ai-hardware
hasPart:
  - urn:ngm:class:neural-processing-unit
  - urn:ngm:class:tensor-core
  - urn:ngm:class:high-bandwidth-memory
requires:
  - urn:ngm:class:model-quantization
  - urn:ngm:class:inference-runtime
enables:
  - urn:ngm:class:real-time-ai
  - urn:ngm:class:edge-ai
  - urn:ngm:class:model-serving
  - urn:ngm:class:autonomous-driving-perception
dependsOn:
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:compiler-optimization
implements:
  - urn:ngm:class:asic
  - urn:ngm:class:fpga
contrastsWith:
  - urn:ngm:class:training-hardware
  - urn:ngm:class:gpu
bridgesTo:
  - urn:ngm:class:robotics
uses:
  - urn:ngm:class:tensor-rt
  - urn:ngm:class:onnx-runtime
  - urn:ngm:class:dynamic-batching
partOf:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:edge-computing
relatedTo:
  - urn:ngm:class:model-compression
  - urn:ngm:class:energy-efficiency
  - urn:ngm:class:federated-learning
---

# Inference Hardware

Specialized processors, accelerators, and system-on-chip designs optimized for running trained machine learning models in production, prioritizing low latency, energy efficiency, high throughput, and cost-effectiveness across data centers, edge devices, and embedded systems.
