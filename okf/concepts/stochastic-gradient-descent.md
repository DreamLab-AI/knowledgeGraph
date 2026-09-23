---
okf_version: "0.2"
type: Class
title: Stochastic Gradient Descent
resource: urn:ngm:class:stochastic-gradient-descent
domain: machine-learning
description: Stochastic Gradient Descent (SGD) is an iterative optimisation algorithm that updates model parameters by computing gradients from randomly sampled mini-batches rather than the full training dataset, trading gradient accuracy for computational efficiency and the ability to escape shallow local minima. SGD and its adaptive variants (Adam, RMSprop, AdaGrad) are the primary training algorithms for de
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:gradient-descent
hasPart:
  - urn:ngm:class:mini-batch
  - urn:ngm:class:learning-rate-schedule
requires:
  - urn:ngm:class:loss-function
  - urn:ngm:class:learning-rate
  - urn:ngm:class:backpropagation
enables:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network
  - urn:ngm:class:large-language-model
  - urn:ngm:class:federated-learning
dependsOn:
  - urn:ngm:class:automatic-differentiation
  - urn:ngm:class:computational-graph
implements:
  - urn:ngm:class:first-order-optimisation
contrastsWith:
  - urn:ngm:class:batch-gradient-descent
  - urn:ngm:class:second-order-optimisation
bridgesTo:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:scientific-computing
uses:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:gpu-computing
supports:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:natural-language-processing
partOf:
  - urn:ngm:class:model-training
relatedTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:hyperparameter-optimisation
  - urn:ngm:class:adam-optimiser
---

# Stochastic Gradient Descent

Stochastic Gradient Descent (SGD) is an iterative optimisation algorithm that updates model parameters by computing gradients from randomly sampled mini-batches rather than the full training dataset, trading gradient accuracy for computational efficiency and the ability to escape shallow local minima. SGD and its adaptive variants (Adam, RMSprop, AdaGrad) are the primary training algorithms for deep neural networks across vision, language, and reinforcement learning domains.
