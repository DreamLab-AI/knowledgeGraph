---
okf_version: "0.2"
type: Class
title: Discriminator Network
resource: urn:ngm:class:discriminator-network
domain: machine-learning
description: A discriminator network is the adversarial component of a generative adversarial network that learns to distinguish real data samples from those synthesised by the generator. Trained as a binary classifier, it outputs a probability that a given input is genuine, and its gradients provide the learning signal that pushes the generator toward producing more realistic outputs. The discriminator and ge
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:generative-adversarial-networks
  - urn:ngm:class:neural-network
  - urn:ngm:class:binary-classifier
  - urn:ngm:class:deep-generative-model
hasPart:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:fully-connected-layer
  - urn:ngm:class:batch-normalisation
  - urn:ngm:class:spectral-normalisation
  - urn:ngm:class:activation-function
  - urn:ngm:class:loss-function
  - urn:ngm:class:gradient-penalty
  - urn:ngm:class:minibatch-discrimination
requires:
  - urn:ngm:class:adversarial-training
  - urn:ngm:class:loss-function
  - urn:ngm:class:training-data-distribution
  - urn:ngm:class:backpropagation
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:differentiable-architecture
enables:
  - urn:ngm:class:image-generation
  - urn:ngm:class:image-synthesis
  - urn:ngm:class:synthetic-data-generation
  - urn:ngm:class:domain-adaptation
  - urn:ngm:class:data-augmentation
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:deepfake-detection
  - urn:ngm:class:medical-image-synthesis
  - urn:ngm:class:style-transfer
  - urn:ngm:class:super-resolution
dependsOn:
  - urn:ngm:class:loss-function
  - urn:ngm:class:backpropagation
  - urn:ngm:class:optimiser
  - urn:ngm:class:deep-learning
  - urn:ngm:class:differentiable-architecture
  - urn:ngm:class:training-data-distribution
implements:
  - urn:ngm:class:minimax-algorithm
  - urn:ngm:class:classification
  - urn:ngm:class:wasserstein-distance-minimisation
  - urn:ngm:class:jensen-shannon-divergence-minimisation
  - urn:ngm:class:gradient-penalty
  - urn:ngm:class:spectral-normalisation
contrastsWith:
  - urn:ngm:class:generator-network
  - urn:ngm:class:vae
  - urn:ngm:class:normalising-flow
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:autoregressive-model
  - urn:ngm:class:reward-model
bridgesTo:
  - urn:ngm:class:generator-network
uses:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:neural-network
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:batch-normalisation
  - urn:ngm:class:spectral-normalisation
  - urn:ngm:class:adam-optimiser
  - urn:ngm:class:re-lu-activation
  - urn:ngm:class:latent-space
  - urn:ngm:class:stochastic-gradient-descent
supports:
  - urn:ngm:class:adversarial-training
  - urn:ngm:class:representation-learning
  - urn:ngm:class:perceptual-loss
  - urn:ngm:class:image-to-image-translation
  - urn:ngm:class:super-resolution
  - urn:ngm:class:style-transfer
  - urn:ngm:class:privacy-preserving-synthesis
  - urn:ngm:class:scientific-simulation
standardizedBy:
  - urn:ngm:class:neur-ips
  - urn:ngm:class:cvpr
  - urn:ngm:class:icml
  - urn:ngm:class:iclr
  - urn:ngm:class:fid-benchmark-protocol
  - urn:ngm:class:inception-score
partOf:
  - urn:ngm:class:generative-adversarial-networks
relatedTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:gan
  - urn:ngm:class:generative-ai
  - urn:ngm:class:synthetic-media
  - urn:ngm:class:adversarial-machine-learning
  - urn:ngm:class:game-theory
  - urn:ngm:class:value-function
  - urn:ngm:class:probability-theory
  - urn:ngm:class:information-theory
  - urn:ngm:class:deepfake-detection
  - urn:ngm:class:representation-learning
---

# Discriminator Network

A discriminator network is the adversarial component of a generative adversarial network that learns to distinguish real data samples from those synthesised by the generator. Trained as a binary classifier, it outputs a probability that a given input is genuine, and its gradients provide the learning signal that pushes the generator toward producing more realistic outputs. The discriminator and generator are locked in a minimax game whose equilibrium yields a generator whose samples are indistinguishable from real data.
