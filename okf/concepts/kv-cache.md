---
okf_version: "0.2"
type: Class
title: KV Cache
resource: urn:ngm:class:kv-cache
domain: machine-learning
description: A KV Cache (Key-Value Cache) in transformer-based language models is a memory structure that stores the computed key and value projection tensors from the multi-head self-attention mechanism for all previously processed tokens in a sequence, allowing autoregressive decoding to reuse these intermediate results rather than recomputing them at every generation step, thereby reducing the per-token com
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:inference-engine
requires:
  - urn:ngm:class:gpu-memory
  - urn:ngm:class:high-bandwidth-memory
enables:
  - urn:ngm:class:speculative-decoding
  - urn:ngm:class:inference
  - urn:ngm:class:autoregressive-decoding
  - urn:ngm:class:prompt-caching
dependsOn:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:self-attention
  - urn:ngm:class:query-key-value
implements:
  - urn:ngm:class:paged-attention
contrastsWith:
  - urn:ngm:class:linear-attention
  - urn:ngm:class:state-space-model
bridgesTo:
  - urn:ngm:class:virtual-memory-management
  - urn:ngm:class:distributed-inference
uses:
  - urn:ngm:class:flash-attention
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:quantisation
partOf:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:inference-engine
relatedTo:
  - urn:ngm:class:context-window
  - urn:ngm:class:large-language-models
  - urn:ngm:class:grouped-query-attention
---

# KV Cache

A KV Cache (Key-Value Cache) in transformer-based language models is a memory structure that stores the computed key and value projection tensors from the multi-head self-attention mechanism for all previously processed tokens in a sequence, allowing autoregressive decoding to reuse these intermediate results rather than recomputing them at every generation step, thereby reducing the per-token computational cost from O(N²) to O(N) in generation. Each decoder layer maintains its own KV cache, which grows linearly with sequence length and model width, making memory bandwidth and GPU HBM capacity the primary constraints on inference throughput for long-context models. KV cache management strategies — including paged allocation (PagedAttention), prefix sharing, quantisation, and off-loading — are critical determinants of serving efficiency and cost.
