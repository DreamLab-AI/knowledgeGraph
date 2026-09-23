---
okf_version: "0.2"
type: Class
title: Post Training Quantisation
resource: urn:ngm:class:post-training-quantisation
domain: machine-learning
description: Post-training quantisation (PTQ) converts a trained full-precision neural network to a lower-precision representation, typically 8-bit integers, without re-running the original training loop. A small calibration dataset is used to estimate the dynamic range of activations so that scale and zero-point parameters can be chosen. PTQ trades a small, usually recoverable, drop in accuracy for substantia
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:quantisation
hasPart:
  - urn:ngm:class:calibration
requires:
  - urn:ngm:class:calibration
  - urn:ngm:class:neural-network
enables:
  - urn:ngm:class:on-device-inference
  - urn:ngm:class:edge-inference
dependsOn:
  - urn:ngm:class:deep-neural-network
implements:
  - urn:ngm:class:quantisation
  - urn:ngm:class:neural-network-quantisation
contrastsWith:
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:model-pruning-for-edge-deployment
uses:
  - urn:ngm:class:calibration
supports:
  - urn:ngm:class:model-deployment
  - urn:ngm:class:inference-compute
partOf:
  - urn:ngm:class:model-compression
relatedTo:
  - urn:ngm:class:model-compression-for-edge
  - urn:ngm:class:model-quantization
---

# Post Training Quantisation

Post-training quantisation (PTQ) converts a trained full-precision neural network to a lower-precision representation, typically 8-bit integers, without re-running the original training loop. A small calibration dataset is used to estimate the dynamic range of activations so that scale and zero-point parameters can be chosen. PTQ trades a small, usually recoverable, drop in accuracy for substantial reductions in model size and inference cost.
