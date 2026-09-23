---
okf_version: "0.2"
type: Class
title: Adam Optimiser
resource: urn:ngm:class:adam-optimiser
domain: artificial-intelligence
description: The Adam optimiser (Adaptive Moment Estimation) is a first-order gradient-based optimisation algorithm that computes per-parameter adaptive learning rates by maintaining exponentially decaying moving averages of past gradients (first moment) and past squared gradients (second moment), with bias correction applied in early iterations. It synthesises the momentum-tracking behaviour of gradient desce
maturity: mature
quality: 0.91
is-a:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:optimisation-algorithm
hasPart:
  - urn:ngm:class:learning-rate-schedule
  - urn:ngm:class:exponential-moving-average
  - urn:ngm:class:bias-correction
  - urn:ngm:class:gradient-clipping
  - urn:ngm:class:adam-optimiser
  - urn:ngm:class:adafactor
  - urn:ngm:class:amsgrad
  - urn:ngm:class:lion-optimiser
  - urn:ngm:class:muon-optimiser
requires:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:loss-function
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:automatic-differentiation
enables:
  - urn:ngm:class:model-training
  - urn:ngm:class:deep-learning
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:hyperparameter-optimisation
  - urn:ngm:class:convergence
  - urn:ngm:class:mixed-precision-training
dependsOn:
  - urn:ngm:class:neural-network
  - urn:ngm:class:numerical-stability
  - urn:ngm:class:gradient-accumulation
implements:
  - urn:ngm:class:adaptive-learning-rate
  - urn:ngm:class:momentum-optimisation
  - urn:ngm:class:regularisation
contrastsWith:
  - urn:ngm:class:rmsprop
  - urn:ngm:class:adagrad
  - urn:ngm:class:sgd-with-momentum
  - urn:ngm:class:lion-optimiser
  - urn:ngm:class:muon-optimiser
  - urn:ngm:class:amsgrad
bridgesTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:federated-learning
  - urn:ngm:class:distributed-training
  - urn:ngm:class:policy-gradient-methods
  - urn:ngm:class:scientific-machine-learning
uses:
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:gradient-clipping
  - urn:ngm:class:exponential-moving-average
supports:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:vision-transformer
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:natural-language-processing
standardizedBy:
  - urn:ngm:class:py-torch
  - urn:ngm:class:jax
  - urn:ngm:class:tensor-flow
relatedTo:
  - urn:ngm:class:neural-network
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:weight-decay
  - urn:ngm:class:large-language-model
  - urn:ngm:class:adam-optimiser
  - urn:ngm:class:adafactor
  - urn:ngm:class:amsgrad
  - urn:ngm:class:vanishing-gradient-problem
  - urn:ngm:class:batch-normalisation
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:generalisation
---

# Adam Optimiser

The Adam optimiser (Adaptive Moment Estimation) is a first-order gradient-based optimisation algorithm that computes per-parameter adaptive learning rates by maintaining exponentially decaying moving averages of past gradients (first moment) and past squared gradients (second moment), with bias correction applied in early iterations. It synthesises the momentum-tracking behaviour of gradient descent with momentum and the per-parameter scaling of RMSProp, making it robust to sparse gradients, non-stationary objectives, and high-dimensional parameter spaces. Introduced by Kingma and Ba (2014), Adam has become the de-facto default optimiser for training transformer-based large language models, diffusion models, and deep neural networks across most domains. Key variants including AdamW, Adan, and AdaFactor extend it with decoupled weight decay, Nesterov momentum, and memory-efficient factorisation respectively.
