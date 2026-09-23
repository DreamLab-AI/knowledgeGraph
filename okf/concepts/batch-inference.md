---
okf_version: "0.2"
type: Class
title: Batch Inference
resource: urn:ngm:class:batch-inference
domain: machine-learning
description: The process of applying a trained machine learning model to a collection of inputs simultaneously rather than processing each input individually in real time. Batch inference amortises per-request overhead by grouping inputs into tensors that saturate GPU or accelerator memory bandwidth, significantly reducing per-sample latency at scale. It is the dominant serving pattern for offline analytics, e
maturity: established
quality: 0.93
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:model-serving
  - urn:ngm:class:ai-infrastructure
hasPart:
  - urn:ngm:class:continuous-batching
  - urn:ngm:class:kv-cache
  - urn:ngm:class:inference-pipeline
  - urn:ngm:class:flash-attention
  - urn:ngm:class:speculative-decoding
  - urn:ngm:class:throughput-optimisation
requires:
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:tensor-processing
  - urn:ngm:class:machine-learning-discipline-infrastructure
enables:
  - urn:ngm:class:model-serving
  - urn:ngm:class:embedding-generation
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:scalability
  - urn:ngm:class:cost-optimisation
  - urn:ngm:class:throughput-optimisation
dependsOn:
  - urn:ngm:class:machine-learning-discipline-infrastructure
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:large-language-models
implements:
  - urn:ngm:class:inference-pipeline
  - urn:ngm:class:model-deployment
contrastsWith:
  - urn:ngm:class:online-inference
  - urn:ngm:class:streaming-inference
  - urn:ngm:class:edge-inference
  - urn:ngm:class:distributed-inference
uses:
  - urn:ngm:class:neural-network
  - urn:ngm:class:deep-learning-framework
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:flash-attention
  - urn:ngm:class:kv-cache
  - urn:ngm:class:gpu-architecture
supports:
  - urn:ngm:class:scalability
  - urn:ngm:class:mlops
  - urn:ngm:class:distributed-training
partOf:
  - urn:ngm:class:mlops
relatedTo:
  - urn:ngm:class:throughput-optimisation
  - urn:ngm:class:model-quantization
  - urn:ngm:class:distributed-training
  - urn:ngm:class:latency
  - urn:ngm:class:neural-network-quantisation
  - urn:ngm:class:tensor-parallelism
  - urn:ngm:class:model-quantization
---

# Batch Inference

The process of applying a trained machine learning model to a collection of inputs simultaneously rather than processing each input individually in real time. Batch inference amortises per-request overhead by grouping inputs into tensors that saturate GPU or accelerator memory bandwidth, significantly reducing per-sample latency at scale. It is the dominant serving pattern for offline analytics, embedding generation, and large-scale data enrichment pipelines where latency deadlines are relaxed. Contrast with online inference, which prioritises low single-request latency over throughput.
