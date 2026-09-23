---
okf_version: "0.2"
type: Class
title: Decoder Network
resource: urn:ngm:class:decoder-network
domain: machine-learning
description: A decoder network is the component of an encoder-decoder architecture that maps a compact latent representation back to a target output such as a reconstructed input, an image or a sequence of tokens. It learns to invert the compression performed by the encoder, reconstructing high-dimensional structure from low-dimensional codes. Decoders are central to autoencoders, variational autoencoders, seq
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:neural-network
  - urn:ngm:class:encoder-decoder-architecture
hasPart:
  - urn:ngm:class:upsampling
  - urn:ngm:class:transposed-convolution
  - urn:ngm:class:skip-connection
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:loss-function
requires:
  - urn:ngm:class:representation-learning
  - urn:ngm:class:latent-space
  - urn:ngm:class:backpropagation
enables:
  - urn:ngm:class:generative-model
  - urn:ngm:class:image-generation
  - urn:ngm:class:machine-translation
  - urn:ngm:class:text-generation
  - urn:ngm:class:audio-synthesis
  - urn:ngm:class:video-generation
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:drug-discovery
dependsOn:
  - urn:ngm:class:latent-space
  - urn:ngm:class:backpropagation
  - urn:ngm:class:loss-function
implements:
  - urn:ngm:class:generative-model
  - urn:ngm:class:deep-generative-model
contrastsWith:
  - urn:ngm:class:encoder
uses:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:transformer
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:cross-attention
  - urn:ngm:class:pixel-shuffle
  - urn:ngm:class:kv-cache
supports:
  - urn:ngm:class:vae
  - urn:ngm:class:autoregressive-model
  - urn:ngm:class:natural-language-processing
partOf:
  - urn:ngm:class:autoencoder
  - urn:ngm:class:vae
  - urn:ngm:class:encoder-decoder-architecture
  - urn:ngm:class:sequence-to-sequence-model
relatedTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:u-net
  - urn:ngm:class:normalising-flow
  - urn:ngm:class:autoregressive-model
  - urn:ngm:class:large-language-model
  - urn:ngm:class:foundation-model
---

# Decoder Network

A decoder network is the component of an encoder-decoder architecture that maps a compact latent representation back to a target output such as a reconstructed input, an image or a sequence of tokens. It learns to invert the compression performed by the encoder, reconstructing high-dimensional structure from low-dimensional codes. Decoders are central to autoencoders, variational autoencoders, sequence-to-sequence models and generative systems.
