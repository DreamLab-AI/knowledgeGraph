---
okf_version: "0.2"
type: Class
title: Quantisation
resource: urn:ngm:class:quantisation
domain: ai
description: "Quantisation is a model compression technique that reduces the numerical precision of a neural network's weights and activations from high-precision floating-point formats used during training (typically FP32 or BF16) to lower bit-widths such as INT8, INT4, FP8, or binary representations. This precision reduction decreases memory footprint and accelerates matrix operations on hardware with native "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:post-training-quantisation
  - urn:ngm:class:quantisation-aware-training
  - urn:ngm:class:mixed-precision-quantisation
requires:
  - urn:ngm:class:calibration
  - urn:ngm:class:calibration
  - urn:ngm:class:scale-factor
enables:
  - urn:ngm:class:inference
  - urn:ngm:class:edge-ai-accelerator
  - urn:ngm:class:on-device-ai
  - urn:ngm:class:model-deployment
  - urn:ngm:class:model-deployment
dependsOn:
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:floating-point-arithmetic
contrastsWith:
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:pruning
  - urn:ngm:class:low-rank-adaptation
  - urn:ngm:class:low-rank-adaptation
bridgesTo:
  - urn:ngm:class:digital-signal-processing
  - urn:ngm:class:floating-point-arithmetic
  - urn:ngm:class:floating-point-arithmetic
uses:
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:tensor-decomposition
partOf:
  - urn:ngm:class:model-compression
  - urn:ngm:class:mlops
relatedTo:
  - urn:ngm:class:model-compression-for-edge
  - urn:ngm:class:transformer
  - urn:ngm:class:large-language-model
  - urn:ngm:class:neural-architecture-search
  - urn:ngm:class:speculative-decoding
---

# Quantisation

Quantisation is a model compression technique that reduces the numerical precision of a neural network's weights and activations from high-precision floating-point formats used during training (typically FP32 or BF16) to lower bit-widths such as INT8, INT4, FP8, or binary representations. This precision reduction decreases memory footprint and accelerates matrix operations on hardware with native low-precision arithmetic units, enabling deployment of large models on memory-constrained or power-limited devices with minimal accuracy degradation. The two primary paradigms are post-training quantisation (PTQ), which applies precision reduction after training using a calibration dataset, and quantisation-aware training (QAT), which simulates low-precision arithmetic during the forward pass so the model adapts its weight distributions to minimise quantisation error. Advanced algorithms such as GPTQ, AWQ, and SmoothQuant extend these approaches to very large language models and diffusion models.
