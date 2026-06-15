- ### Definition
  - [[Data Parallelism]] is a [[Parallel Processing]] strategy that applies the same computation across shards of a dataset on multiple workers, replicating the model and aggregating gradients via [[All-Reduce]]. It is the foundational technique for [[Distributed Training]] of [[Deep Learning]] models and contrasts with [[Model Parallelism]].

- ### Overview
  - In data-parallel training each worker holds a complete copy of the model parameters and processes a disjoint slice of the global mini-batch. After the forward and backward passes, the locally computed gradients are summed or averaged across all workers using a collective communication primitive, most commonly ring or tree all-reduce, ensuring every replica applies an identical parameter update.
  - The approach scales near-linearly with worker count when communication overhead is small relative to compute, making it the default for training convolutional networks, transformers, and recommendation models on clusters of GPUs or TPUs. Effective batch size grows with the number of replicas, often requiring learning-rate scaling and warm-up to preserve convergence.

- ### Mechanisms
  - Synchronous SGD: all workers synchronise gradients each step, guaranteeing consistency at the cost of straggler sensitivity.
  - Asynchronous parameter-server schemes relax synchronisation for higher throughput but introduce gradient staleness.
  - Sharded variants (such as ZeRO and Fully Sharded Data Parallel) partition optimiser state, gradients, and parameters to reduce per-device memory while retaining the data-parallel programming model.

- ### Applications
  - Pre-training of large language models across thousands of accelerators.
  - Image classification and object detection on multi-GPU servers.
  - Recommendation and ranking systems with very large embedding tables combined with data-parallel dense layers.

- ### Relationships
  - subClassOf:: [[Parallel Processing]]
  - hasPart:: [[Gradient Aggregation]]
  - hasPart:: [[All-Reduce]]
  - partOf:: [[Distributed Training]]
  - requires:: [[Collective Communication]]
  - enables:: [[Large-Scale Training]]
  - dependsOn:: [[Synchronisation]]
  - uses:: [[Stochastic Gradient Descent]]
  - supports:: [[Deep Learning]]
  - contrastsWith:: [[Model Parallelism]]
  - bridgesTo:: [[Tensor Parallelism]]
  - relatedTo:: [[High-Performance Computing]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation