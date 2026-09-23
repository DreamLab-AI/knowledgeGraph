---
okf_version: "0.2"
type: Class
title: Gradient Accumulation
resource: urn:ngm:class:gradient-accumulation
domain: machine-learning
description: Gradient accumulation is a training technique that sums the gradients computed over several consecutive mini-batches before performing a single parameter update, thereby simulating a larger effective batch size than fits in device memory. It allows training of large models on limited hardware by trading additional forward and backward passes for reduced peak memory usage. The optimiser step and gr
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:model-training
requires:
  - urn:ngm:class:mini-batch
enables:
  - urn:ngm:class:distributed-training
dependsOn:
  - urn:ngm:class:batch-size
implements:
  - urn:ngm:class:optimisation-algorithm
contrastsWith:
  - urn:ngm:class:data-parallelism
bridgesTo:
  - urn:ngm:class:deep-learning
uses:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient
supports:
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:gradient-descent
partOf:
  - urn:ngm:class:model-training
relatedTo:
  - urn:ngm:class:learning-rate
  - urn:ngm:class:pipeline-parallelism
---

# Gradient Accumulation

Gradient accumulation is a training technique that sums the gradients computed over several consecutive mini-batches before performing a single parameter update, thereby simulating a larger effective batch size than fits in device memory. It allows training of large models on limited hardware by trading additional forward and backward passes for reduced peak memory usage. The optimiser step and gradient reset occur only after the configured number of accumulation steps has been reached.
