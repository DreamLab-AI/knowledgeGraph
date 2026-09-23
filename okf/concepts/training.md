---
okf_version: "0.2"
type: Class
title: Training
resource: urn:ngm:class:training
domain: machine-learning
description: Training is the supervised or self-supervised process of iteratively adjusting the parameters of a machine learning model to minimise a loss function over a labelled or unlabelled dataset. It encompasses forward passes, backpropagation, gradient descent optimisation, and regularisation techniques such as dropout and weight decay. The output of training is a fitted model whose learned weights encod
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:forward-pass
  - urn:ngm:class:backward-pass
  - urn:ngm:class:validation-process
  - urn:ngm:class:hyperparameter-tuning
requires:
  - urn:ngm:class:training-data
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:loss-function
  - urn:ngm:class:labelled-dataset
  - urn:ngm:class:compute-resources
enables:
  - urn:ngm:class:inference
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:transfer-learning
dependsOn:
  - urn:ngm:class:neural-network-architecture
  - urn:ngm:class:optimiser
contrastsWith:
  - urn:ngm:class:inference
  - urn:ngm:class:overfitting
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:reinforcement-learning
uses:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:regularisation
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:dropout
  - urn:ngm:class:batch-normalisation
standardizedBy:
  - urn:ngm:class:iso-iec-22989-2022
  - urn:ngm:class:nist-ai-rmf
---

# Training

Training is the supervised or self-supervised process of iteratively adjusting the parameters of a machine learning model to minimise a loss function over a labelled or unlabelled dataset. It encompasses forward passes, backpropagation, gradient descent optimisation, and regularisation techniques such as dropout and weight decay. The output of training is a fitted model whose learned weights encode patterns from the training data, ready for inference on unseen inputs.
