---
okf_version: "0.2"
type: Class
title: Epoch
resource: urn:ngm:class:epoch
domain: artificial-intelligence
description: "In machine learning, an Epoch is one complete pass through the entire training dataset, during which model parameters are updated after each constituent batch. The number of epochs is a primary training hyperparameter: too few yield underfitting, whilst too many risk overfitting—a trade-off managed by techniques such as early stopping and learning-rate scheduling. More broadly, an epoch denotes a "
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:batch-size
  - urn:ngm:class:mini-batch
requires:
  - urn:ngm:class:training-dataset
  - urn:ngm:class:loss-function
enables:
  - urn:ngm:class:convergence
  - urn:ngm:class:weight-update
dependsOn:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:early-stopping
  - urn:ngm:class:backpropagation
contrastsWith:
  - urn:ngm:class:overfitting
  - urn:ngm:class:online-learning
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:autonomous-robot
partOf:
  - urn:ngm:class:training-loop
  - urn:ngm:class:model-training
relatedTo:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:hyperparameter
  - urn:ngm:class:learning-rate
  - urn:ngm:class:learning-rate-schedule
  - urn:ngm:class:validation-set
  - urn:ngm:class:underfitting
---

# Epoch

In machine learning, an Epoch is one complete pass through the entire training dataset, during which model parameters are updated after each constituent batch. The number of epochs is a primary training hyperparameter: too few yield underfitting, whilst too many risk overfitting—a trade-off managed by techniques such as early stopping and learning-rate scheduling. More broadly, an epoch denotes a fixed reference point or interval in time, as used in astronomical coordinate systems (e.g., J2000.0) and geological stratigraphy.
