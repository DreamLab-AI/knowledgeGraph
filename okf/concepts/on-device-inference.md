---
okf_version: "0.2"
type: Class
title: On-Device Inference
resource: urn:ngm:class:on-device-inference
domain: machine-learning
description: On-device inference is the execution of machine learning model forward passes entirely on the end-user's hardware — such as a smartphone, wearable, embedded controller, or edge server — without transmitting input data to a remote cloud backend. It requires models to be compressed, quantised, or distilled to fit within tight memory, compute, and power budgets while maintaining acceptable accuracy.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:edge-inference
requires:
  - urn:ngm:class:model-compression-for-edge
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:post-training-quantisation
enables:
  - urn:ngm:class:edge-ai
  - urn:ngm:class:real-time-inference
  - urn:ngm:class:privacy-preserving-ai
dependsOn:
  - urn:ngm:class:npu
  - urn:ngm:class:knowledge-distillation-for-edge
implements:
  - urn:ngm:class:onnx
  - urn:ngm:class:mlir
contrastsWith:
  - urn:ngm:class:cloud-inference
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:autonomous-vehicle
uses:
  - urn:ngm:class:onnx-runtime
  - urn:ngm:class:tensor-flow-lite
relatedTo:
  - urn:ngm:class:tiny-ml
  - urn:ngm:class:speculative-decoding
---

# On-Device Inference

On-device inference is the execution of machine learning model forward passes entirely on the end-user's hardware — such as a smartphone, wearable, embedded controller, or edge server — without transmitting input data to a remote cloud backend. It requires models to be compressed, quantised, or distilled to fit within tight memory, compute, and power budgets while maintaining acceptable accuracy.
