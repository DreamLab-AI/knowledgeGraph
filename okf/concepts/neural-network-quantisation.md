---
okf_version: "0.2"
type: Class
title: Model Quantisation
resource: urn:ngm:class:neural-network-quantisation
domain: artificial-intelligence
description: "Model quantization is a model-compression technique that reduces the numerical precision of a neural network's weights and activations, typically converting 32-bit floating-point values to lower-precision integer or float formats such as INT8, INT4 or FP8. By shrinking the memory footprint and exploiting cheaper integer arithmetic, quantization lowers latency, energy use and storage cost, usually "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:model-compression
hasPart:
  - urn:ngm:class:quantisation
  - urn:ngm:class:mixed-precision-training
requires:
  - urn:ngm:class:inference-hardware
  - urn:ngm:class:gpu
enables:
  - urn:ngm:class:inference-hardware
  - urn:ngm:class:edge-computing
  - urn:ngm:class:model-deployment
contrastsWith:
  - urn:ngm:class:knowledge-distillation
uses:
  - urn:ngm:class:pre-trained-model
  - urn:ngm:class:machine-learning-discipline-model
  - urn:ngm:class:neural-network
  - urn:ngm:class:deep-learning
partOf:
  - urn:ngm:class:model-optimization
relatedTo:
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:model-compression-for-edge
  - urn:ngm:class:model-pruning-for-edge-deployment
  - urn:ngm:class:knowledge-distillation-for-edge
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:deep-speed
  - urn:ngm:class:model-optimization
---

# Model Quantisation

Model quantization is a model-compression technique that reduces the numerical precision of a neural network's weights and activations, typically converting 32-bit floating-point values to lower-precision integer or float formats such as INT8, INT4 or FP8. By shrinking the memory footprint and exploiting cheaper integer arithmetic, quantization lowers latency, energy use and storage cost, usually at a small and controllable loss in accuracy. It is applied either after training (post-training quantization) or during training (quantization-aware training) to deploy large models on constrained inference hardware.
