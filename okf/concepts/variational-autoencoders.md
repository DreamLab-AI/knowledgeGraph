---
okf_version: "0.2"
type: Class
title: Variational Autoencoders
resource: urn:ngm:class:variational-autoencoders
domain: artificial-intelligence
description: Generative neural network architecture combining autoencoders with variational inference, learning a probabilistic latent space via an encoder that outputs distribution parameters and a decoder that reconstructs data by sampling from that distribution. Trained by maximising the Evidence Lower BOund (ELBO), which balances reconstruction fidelity and KL-divergence regularisation.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:generative-model
hasPart:
  - urn:ngm:class:encoder
  - urn:ngm:class:decoder
enables:
  - urn:ngm:class:generative-ai
  - urn:ngm:class:embedding-model
uses:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:variational-inference
  - urn:ngm:class:neural-network
relatedTo:
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:autoencoder
  - urn:ngm:class:deep-generative-model
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:vae
  - urn:ngm:class:diffusion-models
---

# Variational Autoencoders

Generative neural network architecture combining autoencoders with variational inference, learning a probabilistic latent space via an encoder that outputs distribution parameters and a decoder that reconstructs data by sampling from that distribution. Trained by maximising the Evidence Lower BOund (ELBO), which balances reconstruction fidelity and KL-divergence regularisation.
