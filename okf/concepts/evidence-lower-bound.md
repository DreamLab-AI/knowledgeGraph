---
okf_version: "0.2"
type: Class
title: Evidence Lower Bound
resource: urn:ngm:class:evidence-lower-bound
domain: machine-learning
description: The evidence lower bound (ELBO) is a tractable lower bound on the log marginal likelihood of observed data under a probabilistic model with latent variables. Maximising the ELBO is equivalent to minimising the divergence between an approximate posterior and the true posterior, making intractable inference tractable. It is the training objective of variational autoencoders and a cornerstone of vari
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:variational-inference
  - urn:ngm:class:objective-function
  - urn:ngm:class:probabilistic-model
hasPart:
  - urn:ngm:class:reconstruction-term
  - urn:ngm:class:kl-divergence-regulariser
  - urn:ngm:class:approximate-posterior
  - urn:ngm:class:prior-distribution
requires:
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:objective-function
  - urn:ngm:class:posterior-distribution
  - urn:ngm:class:prior-distribution
  - urn:ngm:class:likelihood-function
  - urn:ngm:class:kullback-leibler-divergence
enables:
  - urn:ngm:class:vae
  - urn:ngm:class:variational-inference
  - urn:ngm:class:latent-variable-model
  - urn:ngm:class:probabilistic-programming
  - urn:ngm:class:bayesian-deep-learning
  - urn:ngm:class:amortised-inference
dependsOn:
  - urn:ngm:class:kullback-leibler-divergence
  - urn:ngm:class:reparameterisation-trick
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:backpropagation
implements:
  - urn:ngm:class:variational-inference
  - urn:ngm:class:approximate-bayesian-inference
contrastsWith:
  - urn:ngm:class:expectation-maximisation
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:importance-weighting-elbo
  - urn:ngm:class:laplace-approximation
bridgesTo:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:information-theory
  - urn:ngm:class:deep-learning
  - urn:ngm:class:generative-model
uses:
  - urn:ngm:class:posterior-distribution
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:reparameterisation-trick
  - urn:ngm:class:monte-carlo-estimation
  - urn:ngm:class:mean-field-approximation
  - urn:ngm:class:normalising-flows
supports:
  - urn:ngm:class:vae
  - urn:ngm:class:generative-model
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:drug-discovery
  - urn:ngm:class:probabilistic-topic-modelling
standardizedBy:
  - urn:ngm:class:kingma-welling-2013
  - urn:ngm:class:blei-et-al-2017-vi-review
partOf:
  - urn:ngm:class:variational-inference
relatedTo:
  - urn:ngm:class:loss-function
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:free-energy-principle
  - urn:ngm:class:information-theory
  - urn:ngm:class:latent-variable-model
  - urn:ngm:class:expectation-maximisation
---

# Evidence Lower Bound

The evidence lower bound (ELBO) is a tractable lower bound on the log marginal likelihood of observed data under a probabilistic model with latent variables. Maximising the ELBO is equivalent to minimising the divergence between an approximate posterior and the true posterior, making intractable inference tractable. It is the training objective of variational autoencoders and a cornerstone of variational inference.
