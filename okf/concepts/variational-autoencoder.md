---
okf_version: "0.2"
type: Class
title: Variational Autoencoder
resource: urn:ngm:class:variational-autoencoder
domain: machine-learning
description: A Variational Autoencoder (VAE) is a deep generative model that learns a probabilistic, continuous latent-space representation of data by jointly optimising a reconstruction loss and a Kullback-Leibler divergence regularisation term, using amortised variational inference to make the intractable posterior distribution tractable. The encoder network (recognition model) maps input data to the paramet
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:autoencoder
  - urn:ngm:class:deep-generative-model
hasPart:
  - urn:ngm:class:encoder
  - urn:ngm:class:decoder-network
  - urn:ngm:class:latent-space
  - urn:ngm:class:encoder
  - urn:ngm:class:latent-space
requires:
  - urn:ngm:class:variational-inference
  - urn:ngm:class:backpropagation
  - urn:ngm:class:reparameterisation-trick
  - urn:ngm:class:kullback-leibler-divergence
  - urn:ngm:class:autoencoder
  - urn:ngm:class:kl-divergence
enables:
  - urn:ngm:class:image-generation
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:representation-learning
  - urn:ngm:class:drug-discovery
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:disentangled-representation
  - urn:ngm:class:data-augmentation
implements:
  - urn:ngm:class:generative-model
  - urn:ngm:class:graphical-model
contrastsWith:
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:normalising-flow
  - urn:ngm:class:flow-based-model
bridgesTo:
  - urn:ngm:class:generative-model
  - urn:ngm:class:stable-diffusion
  - urn:ngm:class:multimodal-ai-architecture-learning
uses:
  - urn:ngm:class:gaussian-distribution
  - urn:ngm:class:evidence-lower-bound
  - urn:ngm:class:neural-network
relatedTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:unsupervised-learning
  - urn:ngm:class:vq-vae
  - urn:ngm:class:beta-vae
  - urn:ngm:class:hierarchical-vae
---

# Variational Autoencoder

A Variational Autoencoder (VAE) is a deep generative model that learns a probabilistic, continuous latent-space representation of data by jointly optimising a reconstruction loss and a Kullback-Leibler divergence regularisation term, using amortised variational inference to make the intractable posterior distribution tractable. The encoder network (recognition model) maps input data to the parameters of a Gaussian posterior over latent codes, while the decoder network maps samples drawn from that posterior back to the data space; the reparameterisation trick renders the sampling step differentiable, enabling end-to-end gradient-based learning. VAEs underpin latent diffusion models, representation learning, disentanglement research, and multimodal generative systems, and have been extended by hierarchical, vector-quantised, and conditional variants that dramatically improve fidelity and controllability.
