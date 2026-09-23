---
okf_version: "0.2"
type: Class
title: Model Serving
resource: urn:ngm:class:model-serving
domain: machine-learning
description: Model serving is the practice of making a trained machine learning model available to handle inference requests, typically behind an API. It covers loading models, batching and routing requests, and returning predictions under latency and throughput constraints at production scale.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:model-deployment
  - urn:ngm:class:inference-layer
hasPart:
  - urn:ngm:class:inference-engine
  - urn:ngm:class:model-registry
  - urn:ngm:class:autoscaling
requires:
  - urn:ngm:class:model-deployment
  - urn:ngm:class:rest-api
  - urn:ngm:class:container-orchestration
  - urn:ngm:class:load-balancing
enables:
  - urn:ngm:class:inference-serving
  - urn:ngm:class:real-time-prediction
  - urn:ngm:class:batch-inference
dependsOn:
  - urn:ngm:class:latency
  - urn:ngm:class:model-versioning
  - urn:ngm:class:feature-store
implements:
  - urn:ngm:class:g-rpc
  - urn:ngm:class:open-api-specification
contrastsWith:
  - urn:ngm:class:model-training
bridgesTo:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:edge-computing
  - urn:ngm:class:mlops
  - urn:ngm:class:latency
uses:
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:model-quantization
supports:
  - urn:ngm:class:a-b-testing
  - urn:ngm:class:canary-deployment
  - urn:ngm:class:model-monitoring
partOf:
  - urn:ngm:class:mlops
relatedTo:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:triton-inference-server
---

# Model Serving

Model serving is the practice of making a trained machine learning model available to handle inference requests, typically behind an API. It covers loading models, batching and routing requests, and returning predictions under latency and throughput constraints at production scale.
