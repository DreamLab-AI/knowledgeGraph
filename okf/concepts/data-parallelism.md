---
okf_version: "0.2"
type: Class
title: Data Parallelism
resource: urn:ngm:class:data-parallelism
domain: machine-learning
description: "Data parallelism is a parallel computing strategy in which the same operation is applied simultaneously to different partitions of a dataset distributed across multiple processing units. In machine learning it is the dominant approach to scaling model training: the model is replicated on every worker, each worker computes gradients on a distinct mini-batch shard, and gradients are aggregated throu"
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:parallel-processing
  - urn:ngm:class:distributed-training
  - urn:ngm:class:distributed-ai-training
hasPart:
  - urn:ngm:class:gradient-aggregation
  - urn:ngm:class:all-reduce
  - urn:ngm:class:mini-batch
  - urn:ngm:class:ring-all-reduce
  - urn:ngm:class:gradient-compression
  - urn:ngm:class:gradient-checkpointing
requires:
  - urn:ngm:class:collective-communication
  - urn:ngm:class:gpu-cluster
  - urn:ngm:class:synchronisation
  - urn:ngm:class:network-bandwidth
  - urn:ngm:class:nccl
  - urn:ngm:class:interconnect
  - urn:ngm:class:infiniband
enables:
  - urn:ngm:class:large-scale-training
  - urn:ngm:class:throughput-scaling
  - urn:ngm:class:llm-pretraining
  - urn:ngm:class:neural-network-training
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:large-language-models
dependsOn:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:backpropagation
  - urn:ngm:class:loss-function
  - urn:ngm:class:optimiser
  - urn:ngm:class:batch-size
  - urn:ngm:class:learning-rate
implements:
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:distributed-sgd
contrastsWith:
  - urn:ngm:class:model-parallelism
  - urn:ngm:class:pipeline-parallelism
  - urn:ngm:class:federated-learning
  - urn:ngm:class:asynchronous-sgd
bridgesTo:
  - urn:ngm:class:tensor-parallelism
  - urn:ngm:class:expert-parallelism
uses:
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:parameter-server
  - urn:ngm:class:mixed-precision-training
  - urn:ngm:class:checkpoints
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:tpu
supports:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network-training
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:megatron-lm
  - urn:ngm:class:deep-speed
  - urn:ngm:class:distributed-computing
standardizedBy:
  - urn:ngm:class:nccl
  - urn:ngm:class:pytorch-ddp
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:mlperf
partOf:
  - urn:ngm:class:distributed-training
  - urn:ngm:class:3d-parallelism
relatedTo:
  - urn:ngm:class:sharded-data-parallel
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:zero-optimizer
  - urn:ngm:class:deep-speed
  - urn:ngm:class:fully-sharded-data-parallel
  - urn:ngm:class:3d-parallelism
  - urn:ngm:class:expert-parallelism
  - urn:ngm:class:tensor-parallelism
  - urn:ngm:class:di-lo-co
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:scaling-laws
  - urn:ngm:class:ai-infrastructure
---

# Data Parallelism

Data parallelism is a parallel computing strategy in which the same operation is applied simultaneously to different partitions of a dataset distributed across multiple processing units. In machine learning it is the dominant approach to scaling model training: the model is replicated on every worker, each worker computes gradients on a distinct mini-batch shard, and gradients are aggregated through collective communication such as all-reduce before the synchronised parameter update. This contrasts with model parallelism, which splits a single model across devices, and underpins large-scale training on GPU and TPU clusters.
