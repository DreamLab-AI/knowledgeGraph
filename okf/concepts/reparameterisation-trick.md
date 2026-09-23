---
okf_version: "0.2"
type: Class
title: Reparameterisation Trick
resource: urn:ngm:class:reparameterisation-trick
domain: machine-learning
description: The reparameterisation trick is a technique for obtaining low-variance gradient estimates of an expectation over a random variable by expressing that variable as a deterministic, differentiable function of the distribution parameters and an independent noise source. By moving the stochasticity outside the computation graph, gradients can flow through a sampling step via backpropagation, enabling e
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:vae
requires:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:probability-distribution
enables:
  - urn:ngm:class:vae
  - urn:ngm:class:generative-model
dependsOn:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:probability-distribution
uses:
  - urn:ngm:class:automatic-differentiation
  - urn:ngm:class:stochastic-gradient-descent
supports:
  - urn:ngm:class:latent-variable-model
  - urn:ngm:class:stochastic-optimisation
partOf:
  - urn:ngm:class:vae
relatedTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network
  - urn:ngm:class:machine-learning-discipline
---

# Reparameterisation Trick

The reparameterisation trick is a technique for obtaining low-variance gradient estimates of an expectation over a random variable by expressing that variable as a deterministic, differentiable function of the distribution parameters and an independent noise source. By moving the stochasticity outside the computation graph, gradients can flow through a sampling step via backpropagation, enabling end-to-end training of models with latent random variables. It is foundational to variational autoencoders and to many stochastic optimisation methods in deep learning.
