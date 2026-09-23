---
okf_version: "0.2"
type: Class
title: Normalising Flows
resource: urn:ngm:class:normalising-flows
domain: machine-learning
description: Normalising flows are a class of generative models that learn complex probability distributions by composing a series of invertible, differentiable transformations that map a simple base distribution (typically Gaussian) to the target distribution, with exact log-likelihood computation via the change-of-variables formula and the Jacobian determinant. Both sampling and density evaluation are tracta
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:generative-ai
requires:
  - urn:ngm:class:invertible-neural-network
  - urn:ngm:class:differentiable-programming
enables:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:density-estimation
  - urn:ngm:class:generative-model
  - urn:ngm:class:latent-variable-model
  - urn:ngm:class:posterior-approximation
implements:
  - urn:ngm:class:generative-model
  - urn:ngm:class:variational-inference
contrastsWith:
  - urn:ngm:class:markov-chain-monte-carlo
bridgesTo:
  - urn:ngm:class:scientific-machine-learning
  - urn:ngm:class:probabilistic-programming
uses:
  - urn:ngm:class:gaussian-distribution
  - urn:ngm:class:change-of-variables
  - urn:ngm:class:jacobian-determinant
  - urn:ngm:class:maximum-likelihood-estimation
  - urn:ngm:class:autoregressive-model
relatedTo:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:vae
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:neural-ordinary-differential-equation
  - urn:ngm:class:flow-matching
---

# Normalising Flows

Normalising flows are a class of generative models that learn complex probability distributions by composing a series of invertible, differentiable transformations that map a simple base distribution (typically Gaussian) to the target distribution, with exact log-likelihood computation via the change-of-variables formula and the Jacobian determinant. Both sampling and density evaluation are tractable.
