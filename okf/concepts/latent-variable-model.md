---
okf_version: "0.2"
type: Class
title: Latent Variable Model
resource: urn:ngm:class:latent-variable-model
domain: machine-learning
description: A latent variable model is a statistical model that explains observed data in terms of unobserved (latent) variables, which capture hidden structure such as cluster membership, low-dimensional factors, or underlying states. By positing latent causes, these models compactly represent complex distributions and support tasks like density estimation, dimensionality reduction, and generation. Inference
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:probabilistic-model
hasPart:
  - urn:ngm:class:latent-space
enables:
  - urn:ngm:class:generative-model
  - urn:ngm:class:unsupervised-learning
dependsOn:
  - urn:ngm:class:probabilistic-model
implements:
  - urn:ngm:class:dimensionality-reduction
contrastsWith:
  - urn:ngm:class:principal-component-analysis
uses:
  - urn:ngm:class:expectation-maximisation
  - urn:ngm:class:bayesian-inference
supports:
  - urn:ngm:class:vae
  - urn:ngm:class:gaussian-mixture-model
partOf:
  - urn:ngm:class:probabilistic-model
relatedTo:
  - urn:ngm:class:graphical-model
  - urn:ngm:class:dimensionality-reduction
  - urn:ngm:class:representation-learning
---

# Latent Variable Model

A latent variable model is a statistical model that explains observed data in terms of unobserved (latent) variables, which capture hidden structure such as cluster membership, low-dimensional factors, or underlying states. By positing latent causes, these models compactly represent complex distributions and support tasks like density estimation, dimensionality reduction, and generation. Inference recovers distributions over the latent variables given the observations.
