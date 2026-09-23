---
okf_version: "0.2"
type: Class
title: Model Quantization
resource: urn:ngm:class:model-quantization
domain: machine-learning
description: "Model quantization is a model-compression technique that reduces the numerical precision of a neural network's weights and activations, typically converting 32-bit floating-point values to lower-precision integer or float formats such as INT8, INT4 or FP8. By shrinking the memory footprint and exploiting cheaper integer arithmetic, quantization lowers latency, energy use and storage cost, usually "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:model-compression
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:inference-hardware
  - urn:ngm:class:gpu
enables:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:model-deployment
contrastsWith:
  - urn:ngm:class:knowledge-distillation
uses:
  - urn:ngm:class:neural-network
  - urn:ngm:class:deep-learning
supports:
  - urn:ngm:class:ai-model
  - urn:ngm:class:large-language-model
  - urn:ngm:class:model-serving
partOf:
  - urn:ngm:class:model-optimization
relatedTo:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:deep-speed
  - urn:ngm:class:model-optimization
---

# Model Quantization

Model quantization is a model-compression technique that reduces the numerical precision of a neural network's weights and activations, typically converting 32-bit floating-point values to lower-precision integer or float formats such as INT8, INT4 or FP8. By shrinking the memory footprint and exploiting cheaper integer arithmetic, quantization lowers latency, energy use and storage cost, usually at a small and controllable loss in accuracy. It is applied either after training (post-training quantization) or during training (quantization-aware training) to deploy large models on constrained inference hardware.
