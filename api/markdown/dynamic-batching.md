- ### Definition
  - [[Dynamic Batching]] is a [[Model Serving]] technique that groups concurrently arriving inference requests into a single GPU forward pass, maximising [[Gpu Acceleration]] hardware utilisation.
  - A [[Batch Scheduler]] collects requests in a [[Request Queue]] over a configurable time window and assembles batches up to a maximum size, applying [[Padding Strategy]] to align variable-length sequences.
  - Enables [[High Throughput Serving]] of [[Large Language Model]] and other neural network workloads at significantly lower cost per inference than request-at-a-time serving.

- ### Overview
  - Modern GPU hardware achieves peak efficiency when processing large, regular batches of tensor operations. Single-request inference leaves most of this capacity idle, wasting expensive compute. Dynamic batching addresses this by maintaining a short queue of incoming requests and composing batches on the fly, adapting to arrival rate fluctuations without operator intervention.
  - In LLM serving, dynamic batching is complemented by continuous batching (also called iteration-level scheduling), which allows new requests to join a running batch between decoding steps rather than waiting for all sequences in the current batch to finish. Frameworks such as vLLM, TensorRT-LLM, and NVIDIA Triton Inference Server implement these techniques. The key trade-off is latency: batching adds queuing delay (typically tens of milliseconds) in exchange for throughput gains that can exceed an order of magnitude.

- ### Key aspects
  - **Batch formation policies** — time-based (wait up to T milliseconds), count-based (wait for N requests), or hybrid adaptive policies balance latency and throughput.
  - **Padding and packing** — variable-length sequences require padding to a common length or sequence packing to avoid wasted computation on pad tokens.
  - **Continuous batching** — iteration-level scheduling for autoregressive generation allows finished sequences to be replaced immediately, minimising GPU idle time.
  - **Priority queues** — different SLA tiers can be served by priority-aware schedulers that ensure low-latency requests are not starved by high-throughput ones.

- ### Applications
  - High-traffic LLM APIs serving thousands of concurrent [[Token Generation]] requests efficiently on limited GPU infrastructure.
  - Computer vision inference services processing image classification or object detection requests in real time.
  - Embedding generation services producing vector representations for retrieval-augmented generation pipelines.
  - Multi-tenant model serving platforms where many clients share a single GPU cluster.

- ### Mechanisms
  - **Request aggregation** — incoming requests are enqueued; a scheduler polls the queue and assembles a batch when the time window expires or the batch is full.
  - **Sequence padding** — shorter sequences in a batch are padded with a special token to match the longest sequence; attention masks prevent padded positions from influencing outputs.
  - **Batch splitting** — if available GPU memory is exceeded, large batches are split into micro-batches or the queue is throttled.

- ### Relationships
  - hasPart:: [[Batch Scheduler]]
  - hasPart:: [[Request Queue]]
  - hasPart:: [[Padding Strategy]]
  - uses:: [[Gpu Acceleration]]
  - uses:: [[Inference Engine]]
  - uses:: [[Continuous Batching]]
  - enables:: [[High Throughput Serving]]
  - enables:: [[Cost Efficient Inference]]
  - enables:: [[Token Generation]]
  - supports:: [[Large Language Model]]
  - supports:: [[Model Serving]]
  - dependsOn:: [[Transformer]]
  - dependsOn:: [[Kv Cache]]
  - relatedTo:: [[Speculative Decoding]]
  - relatedTo:: [[Tensor Parallelism]]
  - relatedTo:: [[Latency Throughput Tradeoff]]
  - contrastsWith:: [[Static Batching]]
  - implements:: [[Request Scheduling]]

- ### Provenance
  - updated:: 2026-06-15