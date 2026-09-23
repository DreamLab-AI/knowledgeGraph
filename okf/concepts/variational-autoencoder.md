---
okf_version: "0.2"
type: Class
title: Variational Autoencoder
resource: urn:ngm:class:variational-autoencoder
domain: machine-learning
description: A generative model that pairs an encoder mapping inputs to a probability distribution over a latent space with a decoder that reconstructs inputs, trained to maximise a variational lower bound (ELBO) on the data likelihood via the reparameterisation trick.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:autoencoder
hasPart:
  - urn:ngm:class:encoder
  - urn:ngm:class:decoder-network
  - urn:ngm:class:neural-network-latent-space
requires:
  - urn:ngm:class:variational-inference
  - urn:ngm:class:backpropagation
  - urn:ngm:class:reparameterisation-trick
  - urn:ngm:class:kullback-leibler-divergence
enables:
  - urn:ngm:class:image-generation
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:representation-learning
  - urn:ngm:class:drug-discovery
implements:
  - urn:ngm:class:generative-model
  - urn:ngm:class:graphical-model
contrastsWith:
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:normalising-flow
bridgesTo:
  - urn:ngm:class:generative-model
uses:
  - urn:ngm:class:gaussian-distribution
  - urn:ngm:class:evidence-lower-bound
  - urn:ngm:class:neural-network
relatedTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:unsupervised-learning
---

# Variational Autoencoder

A generative model that pairs an encoder mapping inputs to a probability distribution over a latent space with a decoder that reconstructs inputs, trained to maximise a variational lower bound (ELBO) on the data likelihood via the reparameterisation trick.
