---
okf_version: "0.2"
type: Class
title: AI Inference
resource: urn:ngm:class:ai-inference
domain: machine-learning
description: AI Inference is the operational phase of a machine learning system in which a trained model processes new input data to generate predictions, classifications, embeddings, or generative outputs — as distinct from the training phase in which model parameters are optimised. It is the production-time workload that determines the latency, throughput, cost, and scalability characteristics experienced by
maturity: mature
quality: 0.91
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:neural-network
hasPart:
  - urn:ngm:class:kv-cache
  - urn:ngm:class:speculative-decoding
  - urn:ngm:class:continuous-batching
  - urn:ngm:class:prefix-caching
  - urn:ngm:class:flash-attention
  - urn:ngm:class:batch-inference
requires:
  - urn:ngm:class:model-weights
  - urn:ngm:class:inference-runtime
  - urn:ngm:class:hardware-accelerator
  - urn:ngm:class:gpu-acceleration
enables:
  - urn:ngm:class:real-time-ai-inference
  - urn:ngm:class:generative-ai
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:computer-vision
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:on-device-ai
  - urn:ngm:class:edge-inference
dependsOn:
  - urn:ngm:class:model-training
  - urn:ngm:class:deep-learning
implements:
  - urn:ngm:class:model-serving
  - urn:ngm:class:distributed-inference
contrastsWith:
  - urn:ngm:class:model-training
  - urn:ngm:class:fine-tuning
bridgesTo:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:gpu-acceleration
  - urn:ngm:class:ai-model
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:tensor-parallelism
  - urn:ngm:class:quantisation
  - urn:ngm:class:flash-attention
  - urn:ngm:class:onnx
  - urn:ngm:class:mixture-of-experts
supports:
  - urn:ngm:class:mlops
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:ai-governance
relatedTo:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:mlops
  - urn:ngm:class:model-serving
  - urn:ngm:class:on-device-ai
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:inference-optimisation
  - urn:ngm:class:inference-compute
  - urn:ngm:class:inference-hardware
  - urn:ngm:class:model-compression
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:chain-of-thought
---

# AI Inference

AI Inference is the operational phase of a machine learning system in which a trained model processes new input data to generate predictions, classifications, embeddings, or generative outputs — as distinct from the training phase in which model parameters are optimised. It is the production-time workload that determines the latency, throughput, cost, and scalability characteristics experienced by end users and downstream systems. Inference encompasses the full serving stack: model loading and memory management, request batching, hardware-specific kernel execution, and output post-processing. Modern inference optimisation techniques — including quantisation, speculative decoding, continuous batching, and KV-cache management — are essential for deploying large models at commercially viable cost.
