
Distributed inference is the execution of a machine learning model's forward pass across multiple devices or machines so that models too large or too demanding for a single accelerator can serve predictions. It partitions the model and its computation using strategies such as tensor, pipeline and data parallelism, and coordinates the resulting workers with high-bandwidth interconnects. Distributed inference is essential for serving very large language and vision models at acceptable latency and throughput.

- ### Overview
  - As model sizes grow beyond the memory and compute of one accelerator, inference must be spread across several devices, each holding a slice of the model or processing part of the request.
  - The challenge is to partition the computation while minimising the communication overhead that arises when slices must exchange intermediate activations.
  - Effective distributed inference balances latency, throughput and cost, choosing parallelism strategies that fit the model shape and the available interconnect.
- ### Key aspects
  - Tensor parallelism: splitting individual layers' matrix operations across devices.
  - Pipeline parallelism: assigning consecutive layer groups to different devices in stages.
  - Communication: collective operations that synchronise partitioned activations.
  - State management: distributing the [[KV Cache]] for long-context generation.
  - Resource orchestration: scheduling and placement across a cluster of accelerators.
- ### Mechanisms
  - [[Tensor Parallelism]] partitions weight matrices so each device computes a shard and results are combined by collective reductions.
  - [[Pipeline Parallelism]] streams micro-batches through staged layer groups to keep all devices busy.
  - High-bandwidth links carry intermediate tensors between workers with minimal stalling.
  - A coordination layer rooted in [[Distributed Systems]] handles failure, routing and load balancing.
- ### Applications
  - Serving very large [[Large Language Model]] and multimodal models at scale.
  - High-throughput batched inference behind production APIs.
  - Long-context generation requiring partitioned attention state.
  - Cost-efficient deployment by spreading a model across commodity accelerators.
- ### Provenance

