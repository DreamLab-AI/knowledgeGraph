---
okf_version: "0.2"
type: Class
title: Dropout
resource: urn:ngm:class:dropout
domain: machine-learning
description: Dropout is a regularisation technique for neural network training in which a randomly selected fraction of neuron activations is set to zero during each forward pass, preventing neurons from co-adapting and forcing the network to learn redundant representations. By randomly deactivating 20–50% of units per training step, dropout acts as an ensemble method — each mini-batch trains a slightly differ
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:regularisation
requires:
  - urn:ngm:class:neural-network
  - urn:ngm:class:training
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:forward-pass
enables:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:generalisation
  - urn:ngm:class:model-robustness
implements:
  - urn:ngm:class:ensemble-methods
  - urn:ngm:class:variational-inference
contrastsWith:
  - urn:ngm:class:overfitting
  - urn:ngm:class:batch-normalisation
  - urn:ngm:class:weight-decay
bridgesTo:
  - urn:ngm:class:bayesian-deep-learning
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:autonomous-robot
uses:
  - urn:ngm:class:bernoulli-distribution
  - urn:ngm:class:monte-carlo-methods
standardizedBy:
  - urn:ngm:class:iso-iec-22989-2022
  - urn:ngm:class:nist-ai-rmf
partOf:
  - urn:ngm:class:regularisation
  - urn:ngm:class:model-training-pipeline
relatedTo:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:transformer
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:data-augmentation
---

# Dropout

Dropout is a regularisation technique for neural network training in which a randomly selected fraction of neuron activations is set to zero during each forward pass, preventing neurons from co-adapting and forcing the network to learn redundant representations. By randomly deactivating 20–50% of units per training step, dropout acts as an ensemble method — each mini-batch trains a slightly different network architecture — significantly reducing overfitting on limited training datasets. At inference time, all neurons are active but their outputs are scaled by the retention probability.
