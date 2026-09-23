---
okf_version: "0.2"
type: Class
title: Grouped Query Attention
resource: urn:ngm:class:grouped-query-attention
domain: artificial-intelligence
description: Grouped Query Attention (GQA) is a transformer attention variant that partitions the set of query heads into G groups, each group sharing a single pair of key and value heads, thereby interpolating between Multi-Head Attention (MHA, where each query head has its own KV head) and Multi-Query Attention (MQA, where all query heads share one KV head). GQA reduces the key-value cache memory footprint d
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-model-architecture
enables:
  - urn:ngm:class:inference
  - urn:ngm:class:speculative-decoding
contrastsWith:
  - urn:ngm:class:multi-head-attention
  - urn:ngm:class:flash-attention
uses:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:transformer-architecture
---

# Grouped Query Attention

Grouped Query Attention (GQA) is a transformer attention variant that partitions the set of query heads into G groups, each group sharing a single pair of key and value heads, thereby interpolating between Multi-Head Attention (MHA, where each query head has its own KV head) and Multi-Query Attention (MQA, where all query heads share one KV head). GQA reduces the key-value cache memory footprint during autoregressive inference—proportionally to the number of groups—while preserving model quality closer to MHA than MQA. It has been adopted in production LLMs including Llama 2, Mistral, and Gemma.
