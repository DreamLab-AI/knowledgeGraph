---
okf_version: "0.2"
type: Class
title: Generative Adversarial Networks
resource: urn:ngm:class:generative-adversarial-networks
domain: artificial-intelligence
description: Generative Adversarial Networks (GANs) are a class of deep generative models introduced by Ian Goodfellow and colleagues at the University of Montreal framing density estimation as a two-player zero-sum minimax game between a generator network G:Z→X mapping samples from a low-dimensional latent p...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:generative-model
  - urn:ngm:class:deep-generative-model
  - urn:ngm:class:neural-network
  - urn:ngm:class:unsupervised-learning
  - urn:ngm:class:implicit-density-model
  - urn:ngm:class:adversarial-learning-system
hasPart:
  - urn:ngm:class:discriminator-network
  - urn:ngm:class:generator-network
  - urn:ngm:class:sampling-procedure
  - urn:ngm:class:value-function
  - urn:ngm:class:neural-network-latent-space
  - urn:ngm:class:optimiser
  - urn:ngm:class:latent-space
  - urn:ngm:class:adversarial-loss
requires:
  - urn:ngm:class:differentiable-architecture
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:training-data-distribution
  - urn:ngm:class:backpropagation
  - urn:ngm:class:stochastic-gradient-descent
enables:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:data-augmentation
  - urn:ngm:class:domain-adaptation
  - urn:ngm:class:image-synthesis
  - urn:ngm:class:image-to-image-translation
  - urn:ngm:class:super-resolution
  - urn:ngm:class:synthetic-data-generation
dependsOn:
  - urn:ngm:class:game-theory
  - urn:ngm:class:information-theory
  - urn:ngm:class:probability-theory
  - urn:ngm:class:optimal-transport
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:deep-learning
implements:
  - urn:ngm:class:minimax-algorithm
  - urn:ngm:class:variational-inference
  - urn:ngm:class:minimax-algorithm
  - urn:ngm:class:jensen-shannon-divergence-minimisation
  - urn:ngm:class:wasserstein-distance-minimisation
  - urn:ngm:class:implicit-density-estimation
contrastsWith:
  - urn:ngm:class:vae
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:normalising-flow
  - urn:ngm:class:autoregressive-model
uses:
  - urn:ngm:class:adam-optimiser
  - urn:ngm:class:convolution
  - urn:ngm:class:re-lu-activation
  - urn:ngm:class:batch-normalisation
  - urn:ngm:class:gradient-penalty
  - urn:ngm:class:spectral-normalisation
supports:
  - urn:ngm:class:creative-tools
  - urn:ngm:class:deepfake-detection
  - urn:ngm:class:drug-discovery
  - urn:ngm:class:medical-image-synthesis
  - urn:ngm:class:scientific-simulation
  - urn:ngm:class:privacy-preserving-synthesis
standardizedBy:
  - urn:ngm:class:cvpr
  - urn:ngm:class:fid-benchmark-protocol
  - urn:ngm:class:iclr
  - urn:ngm:class:icml
  - urn:ngm:class:neur-ips
relatedTo:
  - urn:ngm:class:representation-learning
  - urn:ngm:class:synthetic-media
  - urn:ngm:class:generative-ai
  - urn:ngm:class:style-transfer
---

# Generative Adversarial Networks

Generative Adversarial Networks (GANs) are a class of deep generative models introduced by Ian Goodfellow and colleagues at the University of Montreal framing density estimation as a two-player zero-sum minimax game between a generator network G:Z→X mapping samples from a low-dimensional latent p...
