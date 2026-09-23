---
okf_version: "0.2"
type: Class
title: Inference Serving
resource: urn:ngm:class:inference-serving
domain: machine-learning
description: Inference serving is the end-to-end runtime discipline of deploying trained machine learning models as production services that respond to prediction requests at scale, with controlled latency and high throughput. It encompasses the inference engine, request routing, dynamic batching, accelerator scheduling, autoscaling, and observability infrastructure needed to meet service-level objectives. Unl
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:model-serving
  - urn:ngm:class:ai-infrastructure
hasPart:
  - urn:ngm:class:dynamic-batching
  - urn:ngm:class:autoscaling
  - urn:ngm:class:model-runtime
  - urn:ngm:class:request-queue
  - urn:ngm:class:observability
requires:
  - urn:ngm:class:ai-model-inference-engine
  - urn:ngm:class:gpu
  - urn:ngm:class:container-orchestration
  - urn:ngm:class:load-balancer
enables:
  - urn:ngm:class:real-time-inference
  - urn:ngm:class:batch-inference
  - urn:ngm:class:llm-deployment
dependsOn:
  - urn:ngm:class:model-registry
  - urn:ngm:class:distributed-computing
contrastsWith:
  - urn:ngm:class:model-training
  - urn:ngm:class:offline-batch-processing
bridgesTo:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:edge-computing
uses:
  - urn:ngm:class:neural-network-quantisation
  - urn:ngm:class:tensor-parallelism
  - urn:ngm:class:kv-cache
  - urn:ngm:class:model-quantization
partOf:
  - urn:ngm:class:mlops
  - urn:ngm:class:ai-infrastructure
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:throughput
  - urn:ngm:class:service-level-objective
  - urn:ngm:class:triton-inference-server
  - urn:ngm:class:ray-serve
---

# Inference Serving

Inference serving is the end-to-end runtime discipline of deploying trained machine learning models as production services that respond to prediction requests at scale, with controlled latency and high throughput. It encompasses the inference engine, request routing, dynamic batching, accelerator scheduling, autoscaling, and observability infrastructure needed to meet service-level objectives. Unlike model training, inference serving must optimise for request-level latency, cost-per-query, and concurrent user load simultaneously. Modern inference serving platforms add specialised techniques such as continuous batching, quantisation, and KV-cache management to sustain high GPU utilisation across large language models and other deep neural network workloads.
