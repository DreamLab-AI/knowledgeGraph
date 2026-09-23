---
okf_version: "0.2"
type: Class
title: Variational Inference
resource: urn:ngm:class:variational-inference
domain: machine-learning
description: Variational inference (VI) is a family of algorithms in Bayesian machine learning that approximates intractable posterior distributions p(z|x) by positing a simpler, tractable family of distributions q(z; φ) and optimising its parameters to minimise the Kullback-Leibler divergence from the true posterior, equivalently maximising the Evidence Lower BOund (ELBO) on the log marginal likelihood. By re
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:bayesian-inference
requires:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:kullback-leibler-divergence
  - urn:ngm:class:evidence-lower-bound
  - urn:ngm:class:graphical-model
  - urn:ngm:class:graphical-model
enables:
  - urn:ngm:class:vae
  - urn:ngm:class:generative-model
  - urn:ngm:class:probabilistic-programming
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:amortised-inference
  - urn:ngm:class:latent-diffusion
contrastsWith:
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:expectation-propagation
  - urn:ngm:class:laplace-approximation
bridgesTo:
  - urn:ngm:class:neural-network-architecture
  - urn:ngm:class:information-theory
uses:
  - urn:ngm:class:reparameterisation-trick
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:mean-field-approximation
  - urn:ngm:class:normalising-flows
relatedTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:latent-variable-model
  - urn:ngm:class:bayesian-deep-learning
  - urn:ngm:class:expectation-maximisation
  - urn:ngm:class:probabilistic-topic-modelling
---

# Variational Inference

Variational inference (VI) is a family of algorithms in Bayesian machine learning that approximates intractable posterior distributions p(z|x) by positing a simpler, tractable family of distributions q(z; φ) and optimising its parameters to minimise the Kullback-Leibler divergence from the true posterior, equivalently maximising the Evidence Lower BOund (ELBO) on the log marginal likelihood. By recasting probabilistic inference as an optimisation problem rather than a sampling problem, VI achieves scalability to large datasets and high-dimensional latent spaces that Markov Chain Monte Carlo methods cannot easily reach. The reparameterisation trick enables gradient-based ELBO optimisation through stochastic estimates, making VI the foundational inference engine for Variational Autoencoders, hierarchical generative models, and probabilistic programming systems. VI trades posterior exactness for computational tractability, and is the preferred method wherever fast, amortised, or online Bayesian inference is required.
