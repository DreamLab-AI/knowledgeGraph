---
okf_version: "0.2"
type: Class
title: Neural Network Quantisation
resource: urn:ngm:class:neural-network-quantisation
domain: artificial-intelligence
description: A model compression technique that reduces the numerical precision of neural network weights and activations from floating-point (FP32, FP16) to lower-bit integer representations (INT8, INT4, binary), decreasing memory footprint and improving inference speed on hardware with integer arithmetic units. Approaches include post-training quantisation and quantisation-aware training.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:quantisation
  - urn:ngm:class:mixed-precision-training
enables:
  - urn:ngm:class:inference-hardware
uses:
  - urn:ngm:class:pretrained-model
  - urn:ngm:class:machine-learning-model
relatedTo:
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:model-compression-for-edge
  - urn:ngm:class:model-pruning-for-edge-deployment
  - urn:ngm:class:knowledge-distillation-for-edge
---

# Neural Network Quantisation

A model compression technique that reduces the numerical precision of neural network weights and activations from floating-point (FP32, FP16) to lower-bit integer representations (INT8, INT4, binary), decreasing memory footprint and improving inference speed on hardware with integer arithmetic units. Approaches include post-training quantisation and quantisation-aware training.
