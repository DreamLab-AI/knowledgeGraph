---
okf_version: "0.2"
type: Class
title: Inference
resource: urn:ngm:class:inference
domain: artificial-intelligence
description: Inference is the process of applying a trained AI model to new, unseen data to produce predictions, classifications, or generated outputs. It is distinct from training in that model parameters are fixed; the computational objective is throughput, latency, and memory efficiency. Inference is the primary execution path in production deployments and is governed by ISO/IEC 22989:2022 clause 3.3.4.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:forward-pass
  - urn:ngm:class:token-generation
  - urn:ngm:class:post-processing
enables:
  - urn:ngm:class:ai-deployment
  - urn:ngm:class:real-time-ai
  - urn:ngm:class:edge-ai
dependsOn:
  - urn:ngm:class:model-training
  - urn:ngm:class:neural-network
  - urn:ngm:class:trained-model
  - urn:ngm:class:compute-resources
contrastsWith:
  - urn:ngm:class:training
  - urn:ngm:class:fine-tuning
bridgesTo:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:spatial-ai
uses:
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:inference-hardware
  - urn:ngm:class:quantisation
  - urn:ngm:class:runtime-environment
supports:
  - urn:ngm:class:model-serving
  - urn:ngm:class:mlops
standardizedBy:
  - urn:ngm:class:iso-iec-22989-2022
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:throughput
  - urn:ngm:class:model-compression
  - urn:ngm:class:onnx
---

# Inference

Inference is the process of applying a trained AI model to new, unseen data to produce predictions, classifications, or generated outputs. It is distinct from training in that model parameters are fixed; the computational objective is throughput, latency, and memory efficiency. Inference is the primary execution path in production deployments and is governed by ISO/IEC 22989:2022 clause 3.3.4.
