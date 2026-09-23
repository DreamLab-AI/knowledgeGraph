---
okf_version: "0.2"
type: Class
title: vLLM
resource: urn:ngm:class:v-llm
domain: machine-learning
description: vLLM is an open-source library for high-throughput serving of large language models. It introduced paged attention, a memory management technique that reduces waste in the key-value cache during generation by managing attention KV cache in fixed-size blocks analogous to virtual memory paging.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:inference-serving
  - urn:ngm:class:ai-infrastructure
requires:
  - urn:ngm:class:kv-cache
  - urn:ngm:class:gpu
  - urn:ngm:class:large-language-models
enables:
  - urn:ngm:class:model-serving
  - urn:ngm:class:inference-serving
  - urn:ngm:class:continuous-batching
dependsOn:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:memory-management
implements:
  - urn:ngm:class:paged-attention
  - urn:ngm:class:openai-research-organisation-api
contrastsWith:
  - urn:ngm:class:triton-inference-server
bridgesTo:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:large-language-models
  - urn:ngm:class:latency
uses:
  - urn:ngm:class:tensor-parallelism
  - urn:ngm:class:cuda
  - urn:ngm:class:python
supports:
  - urn:ngm:class:speculative-decoding
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:throughput
  - urn:ngm:class:quantisation
  - urn:ngm:class:natural-language-processing
---

# vLLM

vLLM is an open-source library for high-throughput serving of large language models. It introduced paged attention, a memory management technique that reduces waste in the key-value cache during generation by managing attention KV cache in fixed-size blocks analogous to virtual memory paging.
