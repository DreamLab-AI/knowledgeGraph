---
okf_version: "0.2"
type: Class
title: Parallel Computing
resource: urn:ngm:class:parallel-computing
domain: infrastructure
description: Parallel computing executes many operations simultaneously across multiple processing units to reduce wall-clock time for workloads that can be decomposed into independent or loosely coupled parts.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:distributed-computing
hasPart:
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:task-parallelism
  - urn:ngm:class:pipeline-parallelism
  - urn:ngm:class:simd
requires:
  - urn:ngm:class:gpu-architecture
  - urn:ngm:class:memory-bandwidth
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:deep-learning
  - urn:ngm:class:scientific-simulation
  - urn:ngm:class:large-language-model
  - urn:ngm:class:pipeline-parallelism
dependsOn:
  - urn:ngm:class:synchronisation-primitive
  - urn:ngm:class:cache-coherence
contrastsWith:
  - urn:ngm:class:sequential-computing
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:cuda
  - urn:ngm:class:gpu-computing
uses:
  - urn:ngm:class:cuda
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:opencl
  - urn:ngm:class:message-passing-interface
partOf:
  - urn:ngm:class:high-performance-computing
relatedTo:
  - urn:ngm:class:concurrency
  - urn:ngm:class:load-balancing
---

# Parallel Computing

Parallel computing executes many operations simultaneously across multiple processing units to reduce wall-clock time for workloads that can be decomposed into independent or loosely coupled parts.
