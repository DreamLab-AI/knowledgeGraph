---
okf_version: "0.2"
type: Class
title: Large Language Model Training
resource: urn:ngm:class:large-language-model-training
domain: machine-learning
description: Large Language Model Training is the computational process of optimising the parameters of a transformer-based neural network with billions to trillions of weights on web-scale text corpora using autoregressive next-token prediction objectives, followed by instruction tuning and reinforcement learning from human feedback (RLHF) alignment stages. The process requires distributed training across tho
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:pre-training
hasPart:
  - urn:ngm:class:pre-training
  - urn:ngm:class:supervised-fine-tuning
  - urn:ngm:class:alignment
requires:
  - urn:ngm:class:gpu-cluster
  - urn:ngm:class:distributed-training
  - urn:ngm:class:training-data
  - urn:ngm:class:mixed-precision-training
enables:
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:emergent-capabilities
  - urn:ngm:class:foundation-model
dependsOn:
  - urn:ngm:class:scaling-laws
  - urn:ngm:class:tokenization
  - urn:ngm:class:reward-model
contrastsWith:
  - urn:ngm:class:parameter-efficient-fine-tuning
bridgesTo:
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:data-centre
uses:
  - urn:ngm:class:transformer
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:gradient-checkpointing
  - urn:ngm:class:data-parallelism
  - urn:ngm:class:direct-preference-optimisation
relatedTo:
  - urn:ngm:class:mixture-of-experts-architecture
  - urn:ngm:class:synthetic-data-generation
---

# Large Language Model Training

Large Language Model Training is the computational process of optimising the parameters of a transformer-based neural network with billions to trillions of weights on web-scale text corpora using autoregressive next-token prediction objectives, followed by instruction tuning and reinforcement learning from human feedback (RLHF) alignment stages. The process requires distributed training across thousands of GPU or TPU accelerators coordinated through data, tensor, and pipeline parallelism, consuming petabytes of training data and megawatt-hours of electrical energy.
