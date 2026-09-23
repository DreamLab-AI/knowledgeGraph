---
okf_version: "0.2"
type: Class
title: Model Inference
resource: urn:ngm:class:model-inference
domain: machine-learning
description: Model inference is the operational phase of a machine learning system in which a trained model is applied to new, previously unseen inputs to produce predictions, classifications, or generated outputs. Unlike training, inference involves only a forward pass through the model and is optimised for low latency, high throughput, and efficient resource use. It is the stage at which a model delivers val
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:machine-learning-discipline
requires:
  - urn:ngm:class:model-training
  - urn:ngm:class:inference-engine
enables:
  - urn:ngm:class:model-serving
  - urn:ngm:class:predictive-analytics
dependsOn:
  - urn:ngm:class:model-deployment
contrastsWith:
  - urn:ngm:class:model-training
uses:
  - urn:ngm:class:neural-network
  - urn:ngm:class:gpu-acceleration
supports:
  - urn:ngm:class:model-monitoring
  - urn:ngm:class:edge-computing
partOf:
  - urn:ngm:class:mlops
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:batch-processing
  - urn:ngm:class:model-optimization
  - urn:ngm:class:deep-learning
---

# Model Inference

Model inference is the operational phase of a machine learning system in which a trained model is applied to new, previously unseen inputs to produce predictions, classifications, or generated outputs. Unlike training, inference involves only a forward pass through the model and is optimised for low latency, high throughput, and efficient resource use. It is the stage at which a model delivers value in production, serving requests in real time, in batches, or at the edge.
