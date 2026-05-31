- ### Definition
  - vLLM is an open-source library for high-throughput serving of large language models. It introduced paged attention, a memory management technique that reduces waste in the key-value cache during generation.

- ### Semantic Classification
  - owl-class:: natural-language-processing:vLLM
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Inference Serving]]
  - bridges-to:: [[Large Language Models]], [[Latency]]
  - requires:: [[KV Cache]], [[GPU]]
  - enables:: [[Model Serving]], [[Inference Serving]]

- ### Content
  - vLLM serves language models with high throughput by managing the attention key-value cache in fixed-size blocks, an approach called paged attention that mirrors virtual memory paging. This reduces fragmentation and allows many requests to share memory efficiently.
  - The library supports continuous batching, where new requests join an in-flight batch as slots free up, which keeps the accelerator busy. It is widely used to deploy open-weight models and exposes an interface compatible with common API conventions.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z