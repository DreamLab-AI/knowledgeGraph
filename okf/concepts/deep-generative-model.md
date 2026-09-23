---
okf_version: "0.2"
type: Class
title: Deep Generative Model
resource: urn:ngm:class:deep-generative-model
domain: machine-learning
description: A Deep Generative Model is a class of deep neural network trained to learn and approximate the underlying probability distribution of a dataset so that novel, statistically plausible samples can be drawn from it. The principal families — Generative Adversarial Networks (GANs), Variational Autoencoders (VAEs), normalising flows, and diffusion models — differ in how they parameterise and optimise th
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:generative-ai
  - urn:ngm:class:deep-learning
hasPart:
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:vae
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:normalising-flow
  - urn:ngm:class:autoregressive-model
  - urn:ngm:class:latent-diffusion-model
  - urn:ngm:class:flow-matching
requires:
  - urn:ngm:class:neural-network
  - urn:ngm:class:neural-network-latent-space
  - urn:ngm:class:training-data
  - urn:ngm:class:probabilistic-inference
  - urn:ngm:class:backpropagation
  - urn:ngm:class:latent-space
enables:
  - urn:ngm:class:image-generation
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:text-to-image
  - urn:ngm:class:data-augmentation
  - urn:ngm:class:drug-discovery
  - urn:ngm:class:video-generation
  - urn:ngm:class:audio-synthesis
  - urn:ngm:class:natural-language-generation
  - urn:ngm:class:model-based-reinforcement-learning
dependsOn:
  - urn:ngm:class:latent-space
  - urn:ngm:class:backpropagation
  - urn:ngm:class:training-data
contrastsWith:
  - urn:ngm:class:discriminative-model
  - urn:ngm:class:classifier
bridgesTo:
  - urn:ngm:class:synthetic-media
  - urn:ngm:class:privacy-preserving-machine-learning
  - urn:ngm:class:governance
uses:
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:backpropagation
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:encoder-decoder-architecture
  - urn:ngm:class:decoder-network
  - urn:ngm:class:reparameterisation-trick
  - urn:ngm:class:evidence-lower-bound
  - urn:ngm:class:vision-transformer
  - urn:ngm:class:score-matching
supports:
  - urn:ngm:class:foundation-model
  - urn:ngm:class:large-language-model
  - urn:ngm:class:spatial-computing
standardizedBy:
  - urn:ngm:class:governance
  - urn:ngm:class:eu-ai-act-regulatory-instrument
partOf:
  - urn:ngm:class:generative-ai
  - urn:ngm:class:deep-learning
relatedTo:
  - urn:ngm:class:representation-learning
  - urn:ngm:class:density-estimation
  - urn:ngm:class:score-matching
  - urn:ngm:class:foundation-model
  - urn:ngm:class:large-language-model
  - urn:ngm:class:flow-matching
  - urn:ngm:class:consistency-distillation
  - urn:ngm:class:spatial-computing
---

# Deep Generative Model

A Deep Generative Model is a class of deep neural network trained to learn and approximate the underlying probability distribution of a dataset so that novel, statistically plausible samples can be drawn from it. The principal families — Generative Adversarial Networks (GANs), Variational Autoencoders (VAEs), normalising flows, and diffusion models — differ in how they parameterise and optimise the generative distribution, offering distinct trade-offs among sample fidelity, mode coverage, training stability, and latent-space interpretability. These models underpin modern generative AI capabilities across images, audio, video, text, and structured scientific data such as molecular graphs.
