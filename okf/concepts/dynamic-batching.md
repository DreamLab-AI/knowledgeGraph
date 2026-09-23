---
okf_version: "0.2"
type: Class
title: Dynamic Batching
resource: urn:ngm:class:dynamic-batching
domain: ai
description: Dynamic batching is a serving-system technique that aggregates multiple independently arriving inference requests into a single batch for joint GPU execution, without requiring a fixed batch size determined at service startup. Requests are collected over a short time window or until a target batch size is reached, then processed together in one forward pass, amortising the fixed overhead of GPU ke
maturity: established
quality: 0.91
is-a:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:inference-optimisation
  - urn:ngm:class:model-serving
  - urn:ngm:class:batch-processing
  - urn:ngm:class:request-scheduling
hasPart:
  - urn:ngm:class:batch-scheduler
  - urn:ngm:class:request-queue
  - urn:ngm:class:padding-strategy
  - urn:ngm:class:continuous-batching
  - urn:ngm:class:priority-queue
  - urn:ngm:class:sequence-packing
  - urn:ngm:class:kv-cache
enables:
  - urn:ngm:class:high-throughput-serving
  - urn:ngm:class:cost-efficient-inference
  - urn:ngm:class:token-generation
  - urn:ngm:class:multi-tenant-serving
  - urn:ngm:class:gpu-utilisation
  - urn:ngm:class:llm-api
dependsOn:
  - urn:ngm:class:transformer
  - urn:ngm:class:kv-cache
  - urn:ngm:class:gpu-acceleration
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:cuda
implements:
  - urn:ngm:class:request-scheduling
  - urn:ngm:class:iteration-level-scheduling
  - urn:ngm:class:in-flight-batching
  - urn:ngm:class:chunked-prefill
contrastsWith:
  - urn:ngm:class:static-batching
  - urn:ngm:class:request-at-a-time-serving
  - urn:ngm:class:sequential-processing
uses:
  - urn:ngm:class:gpu-acceleration
  - urn:ngm:class:inference-engine
  - urn:ngm:class:continuous-batching
  - urn:ngm:class:kv-cache
  - urn:ngm:class:paged-attention
  - urn:ngm:class:cuda
  - urn:ngm:class:attention-mechanism
supports:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:model-serving
  - urn:ngm:class:embedding-generation
  - urn:ngm:class:computer-vision
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:agentic-ai
standardizedBy:
  - urn:ngm:class:nvidia-triton-inference-server
  - urn:ngm:class:v-llm
  - urn:ngm:class:tensorrt-llm
  - urn:ngm:class:sglang
relatedTo:
  - urn:ngm:class:speculative-decoding
  - urn:ngm:class:tensor-parallelism
  - urn:ngm:class:latency-throughput-tradeoff
  - urn:ngm:class:paged-attention
  - urn:ngm:class:prefill-decode-disaggregation
  - urn:ngm:class:chunked-prefill
  - urn:ngm:class:slo-aware-scheduling
  - urn:ngm:class:mlops
  - urn:ngm:class:quantisation
---

# Dynamic Batching

Dynamic batching is a serving-system technique that aggregates multiple independently arriving inference requests into a single batch for joint GPU execution, without requiring a fixed batch size determined at service startup. Requests are collected over a short time window or until a target batch size is reached, then processed together in one forward pass, amortising the fixed overhead of GPU kernel launches and memory transfers across requests. This substantially increases GPU utilisation and throughput compared with processing each request independently, at the cost of a small, controllable increase in per-request latency.
