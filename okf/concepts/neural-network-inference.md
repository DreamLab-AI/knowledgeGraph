---
okf_version: "0.2"
type: Class
title: Neural Network Inference
resource: urn:ngm:class:neural-network-inference
domain: ai
description: Neural network inference is the phase in which a trained neural-network model is applied to new input data to produce predictions, classifications or generations, as distinct from the training phase that learns the model's parameters. It is computationally dominated by forward-pass matrix and tensor operations and is frequently accelerated on GPUs and dedicated hardware. Inference efficiency, meas
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:inference
requires:
  - urn:ngm:class:neural-network
  - urn:ngm:class:model-optimization
enables:
  - urn:ngm:class:model-serving
  - urn:ngm:class:edge-computing
dependsOn:
  - urn:ngm:class:model-training
  - urn:ngm:class:neural-network
implements:
  - urn:ngm:class:inference
bridgesTo:
  - urn:ngm:class:model-serving
  - urn:ngm:class:model-deployment
uses:
  - urn:ngm:class:gpu
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:onnx
  - urn:ngm:class:batch-processing
supports:
  - urn:ngm:class:model-optimization
relatedTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:latency
  - urn:ngm:class:power-management
  - urn:ngm:class:neural-network-training
---

# Neural Network Inference

Neural network inference is the phase in which a trained neural-network model is applied to new input data to produce predictions, classifications or generations, as distinct from the training phase that learns the model's parameters. It is computationally dominated by forward-pass matrix and tensor operations and is frequently accelerated on GPUs and dedicated hardware. Inference efficiency, measured in latency, throughput and energy, is critical for deploying models in real-time, edge and large-scale serving environments.
