---
okf_version: "0.2"
type: Class
title: Optimiser
resource: urn:ngm:class:optimiser
domain: machine-learning
description: An Optimiser is an algorithm that adjusts model parameters during training to minimise a loss function, guiding convergence towards an optimal solution. Modern optimisers such as Adam, RMSProp, and AdaGrad extend stochastic gradient descent with adaptive learning rates, momentum accumulation, and second-moment estimates, enabling faster and more stable training of deep neural networks across diver
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:sc-content-and-assets
requires:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:loss-function
  - urn:ngm:class:learning-rate
  - urn:ngm:class:backpropagation
enables:
  - urn:ngm:class:model-training
  - urn:ngm:class:deep-learning
  - urn:ngm:class:convergence
  - urn:ngm:class:neural-network
dependsOn:
  - urn:ngm:class:hyperparameter
  - urn:ngm:class:weight-initialisation
contrastsWith:
  - urn:ngm:class:second-order-optimisation
  - urn:ngm:class:evolutionary-algorithm
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:robotics
uses:
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:momentum
  - urn:ngm:class:adaptive-learning-rate
supports:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:reinforcement-learning
relatedTo:
  - urn:ngm:class:batch-normalisation
  - urn:ngm:class:regularisation
  - urn:ngm:class:gradient-clipping
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Optimiser

An Optimiser is an algorithm that adjusts model parameters during training to minimise a loss function, guiding convergence towards an optimal solution. Modern optimisers such as Adam, RMSProp, and AdaGrad extend stochastic gradient descent with adaptive learning rates, momentum accumulation, and second-moment estimates, enabling faster and more stable training of deep neural networks across diverse tasks.
