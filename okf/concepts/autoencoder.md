---
okf_version: "0.2"
type: Class
title: Autoencoder
resource: urn:ngm:class:autoencoder
domain: machine-learning
description: An Autoencoder is a neural network trained to reconstruct its input by learning a compressed latent representation. The encoder maps input data to a lower-dimensional latent space and the decoder reconstructs the original from this representation, minimising a reconstruction loss. Variants including variational autoencoders (VAEs), denoising autoencoders, and convolutional autoencoders extend this
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:deep-learning
hasPart:
  - urn:ngm:class:encoder
  - urn:ngm:class:decoder-network
  - urn:ngm:class:neural-network-latent-space
requires:
  - urn:ngm:class:backpropagation
enables:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:dimensionality-reduction
  - urn:ngm:class:representation-learning
implements:
  - urn:ngm:class:dimensionality-reduction
contrastsWith:
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:principal-component-analysis
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:signal-processing
uses:
  - urn:ngm:class:neural-network-latent-space
  - urn:ngm:class:unsupervised-learning
  - urn:ngm:class:gradient-descent
relatedTo:
  - urn:ngm:class:variational-autoencoders
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:generative-model
  - urn:ngm:class:neural-network
  - urn:ngm:class:transfer-learning
---

# Autoencoder

An Autoencoder is a neural network trained to reconstruct its input by learning a compressed latent representation. The encoder maps input data to a lower-dimensional latent space and the decoder reconstructs the original from this representation, minimising a reconstruction loss. Variants including variational autoencoders (VAEs), denoising autoencoders, and convolutional autoencoders extend this framework to generative modelling, anomaly detection, and feature extraction.
