---
okf_version: "0.2"
type: Class
title: Continuous Batching
resource: urn:ngm:class:continuous-batching
domain: artificial-intelligence
description: Continuous batching is a large language model serving technique in which the inference scheduler admits and evicts requests at the granularity of individual decoding steps rather than running a whole batch to completion before starting the next. As soon as any sequence in the batch finishes generating, its slot is freed and a queued request takes its place, keeping the GPU saturated and dramatical
maturity: established
quality: 0.91
is-a:
  - urn:ngm:class:inference-optimisation
  - urn:ngm:class:model-serving
hasPart:
  - urn:ngm:class:request-scheduling
  - urn:ngm:class:kv-cache
  - urn:ngm:class:chunked-prefill
  - urn:ngm:class:slot-management
  - urn:ngm:class:paged-attention
  - urn:ngm:class:admission-control
requires:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:gpu-memory
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:autoregressive-decoding
  - urn:ngm:class:deep-learning
enables:
  - urn:ngm:class:throughput
  - urn:ngm:class:gpu-utilisation
  - urn:ngm:class:large-language-models
  - urn:ngm:class:multi-tenant-inference
  - urn:ngm:class:inference-serving
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:cost-optimisation
dependsOn:
  - urn:ngm:class:paged-attention
  - urn:ngm:class:autoregressive-decoding
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:kv-cache
  - urn:ngm:class:gpu-compute
implements:
  - urn:ngm:class:memory-management
  - urn:ngm:class:inference-optimisation
  - urn:ngm:class:planning-and-scheduling
contrastsWith:
  - urn:ngm:class:static-batching
  - urn:ngm:class:batch-processing
  - urn:ngm:class:triton-inference-server
  - urn:ngm:class:offline-inference
uses:
  - urn:ngm:class:paged-attention
  - urn:ngm:class:kv-cache
  - urn:ngm:class:autoregressive-decoding
  - urn:ngm:class:memory-management
  - urn:ngm:class:gpu
  - urn:ngm:class:cuda
  - urn:ngm:class:flash-attention
  - urn:ngm:class:tensor-parallelism
  - urn:ngm:class:pipeline-parallelism
  - urn:ngm:class:quantisation
supports:
  - urn:ngm:class:v-llm
  - urn:ngm:class:sglang
  - urn:ngm:class:tensorrt-llm
  - urn:ngm:class:token-generation
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:nvidia-dynamo
standardizedBy:
  - urn:ngm:class:v-llm
partOf:
  - urn:ngm:class:model-serving
  - urn:ngm:class:inference-serving
relatedTo:
  - urn:ngm:class:speculative-decoding
  - urn:ngm:class:prefill-decode-disaggregation
  - urn:ngm:class:tensor-parallelism
  - urn:ngm:class:flash-attention
  - urn:ngm:class:quantisation
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:pipeline-parallelism
  - urn:ngm:class:model-optimisation-and-performance
  - urn:ngm:class:mixture-of-experts
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:radixattention
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:federated-learning
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:vertex-ai
---

# Continuous Batching

Continuous batching is a large language model serving technique in which the inference scheduler admits and evicts requests at the granularity of individual decoding steps rather than running a whole batch to completion before starting the next. As soon as any sequence in the batch finishes generating, its slot is freed and a queued request takes its place, keeping the GPU saturated and dramatically improving throughput and latency under heterogeneous request lengths. It is a defining feature of modern inference engines such as vLLM and is typically combined with paged attention and a shared key-value cache.
