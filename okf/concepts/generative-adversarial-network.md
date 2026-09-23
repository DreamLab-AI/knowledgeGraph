---
okf_version: "0.2"
type: Class
title: Generative Adversarial Network
resource: urn:ngm:class:generative-adversarial-network
domain: artificial-intelligence
description: "A Generative Adversarial Network (GAN) is a deep learning architecture in which a generator network and a discriminator network are trained simultaneously in an adversarial min-max game: the generator learns to produce synthetic samples indistinguishable from real data, while the discriminator learns to detect fakes. GANs underpin high-fidelity image synthesis, video generation, data augmentation,"
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-model-architecture
hasPart:
  - urn:ngm:class:generator-network
  - urn:ngm:class:discriminator-network
  - urn:ngm:class:adversarial-training
requires:
  - urn:ngm:class:neural-network
  - urn:ngm:class:training-data
  - urn:ngm:class:backpropagation
enables:
  - urn:ngm:class:image-generation
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:synthetic-media
  - urn:ngm:class:data-augmentation
  - urn:ngm:class:deepfakes
  - urn:ngm:class:super-resolution
implements:
  - urn:ngm:class:unsupervised-learning
contrastsWith:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:autoencoder
  - urn:ngm:class:vae
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:privacy-preserving-ai
uses:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:neural-network-latent-space
partOf:
  - urn:ngm:class:generative-ai
  - urn:ngm:class:deep-learning
relatedTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:natural-language-processing
---

# Generative Adversarial Network

A Generative Adversarial Network (GAN) is a deep learning architecture in which a generator network and a discriminator network are trained simultaneously in an adversarial min-max game: the generator learns to produce synthetic samples indistinguishable from real data, while the discriminator learns to detect fakes. GANs underpin high-fidelity image synthesis, video generation, data augmentation, and synthetic data creation across domains including healthcare, finance, and computer vision.
