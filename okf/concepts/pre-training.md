---
okf_version: "0.2"
type: Class
title: Pre Training
resource: urn:ngm:class:pre-training
domain: machine-learning
description: The initial training phase where a model learns general representations from large amounts of unlabelled or weakly labelled data before being adapted to specific tasks. Pre-training establishes foundational knowledge that can be transferred across multiple downstream applications, forming the basis for modern large-scale foundation models.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:masked-language-modelling
  - urn:ngm:class:next-token-prediction
  - urn:ngm:class:representation-learning
requires:
  - urn:ngm:class:training-data
  - urn:ngm:class:model-training
  - urn:ngm:class:compute-infrastructure
  - urn:ngm:class:self-supervised-learning
enables:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:large-language-models
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:few-shot-learning
  - urn:ngm:class:zero-shot-learning
dependsOn:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network
implements:
  - urn:ngm:class:representation-learning
contrastsWith:
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:reinforcement-learning
bridgesTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:training-corpus
supports:
  - urn:ngm:class:model-optimisation-and-performance
  - urn:ngm:class:evaluation-benchmarks-and-leaderboards
relatedTo:
  - urn:ngm:class:foundation-model
  - urn:ngm:class:training-and-fine-tuning
  - urn:ngm:class:lo-ra-do-ra-etc
---

# Pre Training

The initial training phase where a model learns general representations from large amounts of unlabelled or weakly labelled data before being adapted to specific tasks. Pre-training establishes foundational knowledge that can be transferred across multiple downstream applications, forming the basis for modern large-scale foundation models.
