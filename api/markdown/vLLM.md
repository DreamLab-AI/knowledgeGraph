
vLLM is an open-source library for high-throughput serving of large language models. It introduced paged attention, a memory management technique that reduces waste in the key-value cache during generation by managing attention KV cache in fixed-size blocks analogous to virtual memory paging.

- ### Semantic Classification

- ### Content
  - vLLM serves language models with high throughput by managing the attention key-value cache in fixed-size blocks, an approach called paged attention that mirrors virtual memory paging. This reduces fragmentation and allows many requests to share memory efficiently.
  - The library supports continuous batching, where new requests join an in-flight batch as slots free up, which keeps the accelerator busy. It is widely used to deploy open-weight models and exposes an interface compatible with common API conventions.

- ### Provenance

