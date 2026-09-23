---
okf_version: "0.2"
type: Class
title: Training Method
resource: urn:ngm:class:training-method
domain: artificial-intelligence
description: A Training Method is a systematic algorithm or procedure used to optimise the parameters of a machine learning model by minimising a loss function through iterative updates over labelled or unlabelled data. Training methods span the full spectrum from supervised and unsupervised learning to reinforcement learning and self-supervised pre-training, each with distinct update rules, convergence proper
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:machine-learning-discipline
hasPart:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:unsupervised-learning
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:pre-training
requires:
  - urn:ngm:class:loss-function
  - urn:ngm:class:neural-network
relatedTo:
  - urn:ngm:class:optimisation-algorithm
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:mixed-precision-training
  - urn:ngm:class:distributed-training
  - urn:ngm:class:gradient-clipping
  - urn:ngm:class:learning-rate-schedule
---

# Training Method

A Training Method is a systematic algorithm or procedure used to optimise the parameters of a machine learning model by minimising a loss function through iterative updates over labelled or unlabelled data. Training methods span the full spectrum from supervised and unsupervised learning to reinforcement learning and self-supervised pre-training, each with distinct update rules, convergence properties, and data requirements. Specific optimisers such as gradient descent, Adam, and RMSprop, together with regularisation strategies like dropout and batch normalisation, are key components within training methods.
