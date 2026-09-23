---
okf_version: "0.2"
type: Class
title: Gradient Checkpointing
resource: urn:ngm:class:gradient-checkpointing
domain: machine-learning
description: Gradient checkpointing is a memory-efficient training technique for deep neural networks that reduces peak activation memory by storing only a strategically chosen subset of intermediate activations (checkpoints) during the forward pass, then recomputing the discarded activations on demand during backpropagation. The technique was formalised by Chen et al. (2016) under the name 'Training Deep Netw
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:backpropagation
hasPart:
  - urn:ngm:class:model-checkpoint
requires:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:automatic-differentiation
  - urn:ngm:class:computational-graph
enables:
  - urn:ngm:class:large-language-model-training
  - urn:ngm:class:model-scaling
  - urn:ngm:class:long-context-training
dependsOn:
  - urn:ngm:class:gpu-memory
  - urn:ngm:class:neural-network-architecture
contrastsWith:
  - urn:ngm:class:gradient-accumulation
  - urn:ngm:class:mixed-precision-training
bridgesTo:
  - urn:ngm:class:distributed-training
  - urn:ngm:class:edge-ai
uses:
  - urn:ngm:class:forward-pass
  - urn:ngm:class:memory-management
  - urn:ngm:class:recomputation
supports:
  - urn:ngm:class:transformer
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:convolutional-neural-network
partOf:
  - urn:ngm:class:memory-efficient-training
relatedTo:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:deep-learning
  - urn:ngm:class:pipeline-parallelism
  - urn:ngm:class:model-parallelism
  - urn:ngm:class:offloading
---

# Gradient Checkpointing

Gradient checkpointing is a memory-efficient training technique for deep neural networks that reduces peak activation memory by storing only a strategically chosen subset of intermediate activations (checkpoints) during the forward pass, then recomputing the discarded activations on demand during backpropagation. The technique was formalised by Chen et al. (2016) under the name 'Training Deep Networks with Sublinear Memory Cost', achieving O(sqrt(N)) memory in the number of layers N at the cost of one additional forward pass per training step. It is now a foundational primitive in large-model training, implemented natively in PyTorch, JAX, TensorFlow, and most major deep-learning frameworks.
