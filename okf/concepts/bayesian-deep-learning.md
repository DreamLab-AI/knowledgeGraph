---
okf_version: "0.2"
type: Class
title: Bayesian Deep Learning
resource: urn:ngm:class:bayesian-deep-learning
domain: machine-learning
description: Bayesian deep learning combines neural networks with Bayesian inference to represent uncertainty over model parameters and predictions. It treats network weights as random variables with prior and posterior distributions rather than fixed point estimates, enabling calibrated uncertainty quantification over both model parameters and outputs.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:probabilistic-machine-learning
hasPart:
  - urn:ngm:class:prior-distribution
  - urn:ngm:class:posterior-distribution
  - urn:ngm:class:likelihood-function
  - urn:ngm:class:evidence-lower-bound
  - urn:ngm:class:monte-carlo-dropout
  - urn:ngm:class:deep-ensembles
  - urn:ngm:class:laplace-approximation
requires:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:probabilistic-inference
  - urn:ngm:class:prior-distribution
  - urn:ngm:class:neural-network
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
enables:
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:active-learning
  - urn:ngm:class:out-of-distribution-detection
  - urn:ngm:class:model-calibration
  - urn:ngm:class:safe-ai
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:continual-learning
dependsOn:
  - urn:ngm:class:loss-function
  - urn:ngm:class:activation-function
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:transformer-architecture
implements:
  - urn:ngm:class:posterior-approximation
  - urn:ngm:class:variational-inference
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:evidence-lower-bound
contrastsWith:
  - urn:ngm:class:maximum-likelihood-estimation
  - urn:ngm:class:maximum-a-posteriori-estimation
  - urn:ngm:class:frequentist-statistics
  - urn:ngm:class:dropout
bridgesTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:causal-inference
  - urn:ngm:class:scientific-computing
  - urn:ngm:class:continual-learning
  - urn:ngm:class:foundation-model
uses:
  - urn:ngm:class:variational-inference
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:monte-carlo-dropout
  - urn:ngm:class:reparameterisation-trick
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:laplace-approximation
supports:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:robotics
  - urn:ngm:class:medical-ai
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:scientific-computing
standardizedBy:
  - urn:ngm:class:iso-iec-22989-2022
  - urn:ngm:class:nist-ai-rmf
relatedTo:
  - urn:ngm:class:neural-network
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:model-calibration
  - urn:ngm:class:graphical-model
  - urn:ngm:class:normalising-flow
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:vae
  - urn:ngm:class:neural-architecture-search
---

# Bayesian Deep Learning

Bayesian deep learning combines neural networks with Bayesian inference to represent uncertainty over model parameters and predictions. It treats network weights as random variables with prior and posterior distributions rather than fixed point estimates, enabling calibrated uncertainty quantification over both model parameters and outputs.
