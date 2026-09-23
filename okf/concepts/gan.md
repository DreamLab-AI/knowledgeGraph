---
okf_version: "0.2"
type: Class
title: GAN
resource: urn:ngm:class:gan
domain: machine-learning
description: "A Generative Adversarial Network (GAN) is a deep-learning framework in which two neural networks — a generator and a discriminator — are trained simultaneously in a minimax game: the generator maps random latent vectors to synthetic data samples, while the discriminator learns to distinguish real training samples from generated ones. Through adversarial feedback propagated via backpropagation, the"
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:generative-model
  - urn:ngm:class:deep-generative-model
hasPart:
  - urn:ngm:class:generator-network
  - urn:ngm:class:discriminator-network
  - urn:ngm:class:neural-network-latent-space
  - urn:ngm:class:latent-space
requires:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:neural-network
  - urn:ngm:class:gradient-descent
enables:
  - urn:ngm:class:image-generation
  - urn:ngm:class:image-to-image-translation
  - urn:ngm:class:super-resolution
  - urn:ngm:class:data-augmentation
contrastsWith:
  - urn:ngm:class:vae
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:autoregressive-model
bridgesTo:
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:deepfakes
  - urn:ngm:class:procedural-content-generation
  - urn:ngm:class:deepfakes
uses:
  - urn:ngm:class:adversarial-training
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:batch-normalisation
relatedTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:unsupervised-learning
  - urn:ngm:class:model-collapse
  - urn:ngm:class:model-collapse
  - urn:ngm:class:wasserstein-distance
---

# GAN

A Generative Adversarial Network (GAN) is a deep-learning framework in which two neural networks — a generator and a discriminator — are trained simultaneously in a minimax game: the generator maps random latent vectors to synthetic data samples, while the discriminator learns to distinguish real training samples from generated ones. Through adversarial feedback propagated via backpropagation, the generator progressively improves at synthesising realistic outputs while the discriminator improves at detection. GANs have achieved state-of-the-art results in image synthesis, style transfer, super-resolution, and conditional generation, but are prone to training instabilities such as mode collapse and vanishing gradients.
