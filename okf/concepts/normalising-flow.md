---
okf_version: "0.2"
type: Class
title: Normalising Flow
resource: urn:ngm:class:normalising-flow
domain: machine-learning
description: "A normalising flow is a class of deep generative models that learns a bijective mapping between a simple tractable base distribution (typically a standard multivariate Gaussian) and a complex target data distribution through a composition of invertible, differentiable transformations. Because each transformation is invertible, the change-of-variables formula yields an exact closed-form expression "
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:generative-model
requires:
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:invertible-neural-network
  - urn:ngm:class:change-of-variables
enables:
  - urn:ngm:class:density-estimation
  - urn:ngm:class:variational-inference
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:data-augmentation
contrastsWith:
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:vae
  - urn:ngm:class:diffusion-model
bridgesTo:
  - urn:ngm:class:scientific-computing
  - urn:ngm:class:computational-fluid-dynamics
uses:
  - urn:ngm:class:autoregressive-model
  - urn:ngm:class:jacobian-determinant
  - urn:ngm:class:neural-ode
  - urn:ngm:class:coupling-layer
partOf:
  - urn:ngm:class:deep-learning
relatedTo:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:latent-variable-model
  - urn:ngm:class:maximum-likelihood-estimation
  - urn:ngm:class:information-theory
  - urn:ngm:class:representation-learning
---

# Normalising Flow

A normalising flow is a class of deep generative models that learns a bijective mapping between a simple tractable base distribution (typically a standard multivariate Gaussian) and a complex target data distribution through a composition of invertible, differentiable transformations. Because each transformation is invertible, the change-of-variables formula yields an exact closed-form expression for the data log-likelihood, enabling both efficient sampling and precise density estimation. This exact likelihood property distinguishes normalising flows from latent variable models such as variational autoencoders and implicit models such as generative adversarial networks. Architectures are distinguished by how they design transformations whose Jacobian determinants can be computed efficiently, either through triangular Jacobians (autoregressive flows, coupling layers) or via continuous-time dynamics (neural ODEs).
