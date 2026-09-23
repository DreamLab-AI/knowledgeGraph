---
okf_version: "0.2"
type: Class
title: Paged Attention
resource: urn:ngm:class:paged-attention
domain: artificial-intelligence
description: Paged attention is a memory management technique for large language model inference that partitions the key-value cache into fixed-size blocks managed like virtual memory pages. By decoupling logical token positions from physical memory layout it eliminates fragmentation, enables near-zero waste in cache allocation and allows sharing of cached prefixes across requests. Introduced in the vLLM servi
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:kv-cache
hasPart:
  - urn:ngm:class:kv-cache
requires:
  - urn:ngm:class:gpu-memory
  - urn:ngm:class:attention-mechanism
enables:
  - urn:ngm:class:model-serving
  - urn:ngm:class:throughput
dependsOn:
  - urn:ngm:class:transformer
implements:
  - urn:ngm:class:memory-management
  - urn:ngm:class:continuous-batching
contrastsWith:
  - urn:ngm:class:flash-attention
bridgesTo:
  - urn:ngm:class:gpu
supports:
  - urn:ngm:class:inference
  - urn:ngm:class:large-language-model
relatedTo:
  - urn:ngm:class:speculative-decoding
  - urn:ngm:class:model-optimisation-and-performance
---

# Paged Attention

Paged attention is a memory management technique for large language model inference that partitions the key-value cache into fixed-size blocks managed like virtual memory pages. By decoupling logical token positions from physical memory layout it eliminates fragmentation, enables near-zero waste in cache allocation and allows sharing of cached prefixes across requests. Introduced in the vLLM serving system, it substantially increases throughput for high-concurrency inference.
