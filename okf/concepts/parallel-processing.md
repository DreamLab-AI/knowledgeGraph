---
okf_version: "0.2"
type: Class
title: Parallel Processing
resource: urn:ngm:class:parallel-processing
domain: infrastructure
description: Parallel Processing is a computational paradigm in which multiple calculations or processes are carried out simultaneously by decomposing a problem into sub-tasks that execute concurrently across multiple processor cores, GPUs, or distributed compute nodes. It exploits data parallelism, task parallelism, and pipeline parallelism to reduce wall-clock execution time and increase throughput. Parallel
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:computing-infrastructure
hasPart:
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:task-parallelism
  - urn:ngm:class:pipeline-parallelism
  - urn:ngm:class:simd
requires:
  - urn:ngm:class:computing-infrastructure
  - urn:ngm:class:memory-bandwidth
  - urn:ngm:class:interconnect
enables:
  - urn:ngm:class:distributed-training
  - urn:ngm:class:deep-learning
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:large-language-model
  - urn:ngm:class:scientific-simulation
dependsOn:
  - urn:ngm:class:synchronisation
  - urn:ngm:class:load-balancing
contrastsWith:
  - urn:ngm:class:sequential-computing
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:thread-protocol
  - urn:ngm:class:multi-core-processor
  - urn:ngm:class:thread-protocol
standardizedBy:
  - urn:ngm:class:openmp
  - urn:ngm:class:mpi
  - urn:ngm:class:cuda
partOf:
  - urn:ngm:class:high-performance-computing
relatedTo:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:concurrency
  - urn:ngm:class:asynchronous-programming
---

# Parallel Processing

Parallel Processing is a computational paradigm in which multiple calculations or processes are carried out simultaneously by decomposing a problem into sub-tasks that execute concurrently across multiple processor cores, GPUs, or distributed compute nodes. It exploits data parallelism, task parallelism, and pipeline parallelism to reduce wall-clock execution time and increase throughput. Parallel processing is foundational to modern high-performance computing, enabling workloads such as large-scale neural network training, real-time physics simulation, and petabyte-scale data analytics that would be infeasible on sequential hardware.
