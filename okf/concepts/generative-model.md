---
okf_version: "0.2"
type: Class
title: Generative Model
resource: urn:ngm:class:generative-model
domain: artificial-intelligence
description: A class of machine learning models that learn the underlying probability distribution of training data and can sample novel instances from that distribution. Architectures include generative adversarial networks, variational autoencoders, diffusion models, normalising flows, and autoregressive transformers, covering domains such as text, image, audio, and code generation.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:machine-learning
  - urn:ngm:class:ai-model-architecture
hasPart:
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:autoencoder
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:large-language-model
  - urn:ngm:class:deep-generative-model
  - urn:ngm:class:variational-autoencoder
  - urn:ngm:class:normalising-flow
requires:
  - urn:ngm:class:training-data
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:neural-network
enables:
  - urn:ngm:class:text-generation
  - urn:ngm:class:image-generation
  - urn:ngm:class:audio-synthesis
  - urn:ngm:class:code-generation
  - urn:ngm:class:data-augmentation
dependsOn:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:unsupervised-learning
  - urn:ngm:class:latent-space
contrastsWith:
  - urn:ngm:class:discriminative-model
  - urn:ngm:class:supervised-learning
bridgesTo:
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:content-creation
relatedTo:
  - urn:ngm:class:transformer
  - urn:ngm:class:foundation-model
  - urn:ngm:class:reinforcement-learning-from-human-feedback
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Generative Model

A class of machine learning models that learn the underlying probability distribution of training data and can sample novel instances from that distribution. Architectures include generative adversarial networks, variational autoencoders, diffusion models, normalising flows, and autoregressive transformers, covering domains such as text, image, audio, and code generation.
