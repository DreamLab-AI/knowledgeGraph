---
okf_version: "0.2"
type: Class
title: Diffusion Transformer
resource: urn:ngm:class:diffusion-transformer
domain: machine-learning
description: A Diffusion Transformer (DiT) is a generative model architecture that replaces the convolutional U-Net backbone traditionally used in diffusion models with a scalable transformer architecture operating in a compressed latent space. DiT conditions the denoising process on class labels or text embeddings injected via adaptive layer normalisation or cross-attention, and processes image or video patch
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:generative-model
  - urn:ngm:class:diffusion-models
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:transformer-architecture
hasPart:
  - urn:ngm:class:self-attention
  - urn:ngm:class:adaptive-layer-normalisation
  - urn:ngm:class:patch-embedding
  - urn:ngm:class:feed-forward-network
  - urn:ngm:class:positional-encoding
  - urn:ngm:class:multi-head-attention
requires:
  - urn:ngm:class:diffusion-process
  - urn:ngm:class:noise-schedule
  - urn:ngm:class:denoising-score-matching
  - urn:ngm:class:vae
  - urn:ngm:class:deep-learning
enables:
  - urn:ngm:class:image-generation
  - urn:ngm:class:video-generation
  - urn:ngm:class:text-to-image
  - urn:ngm:class:3-d-content-generation
  - urn:ngm:class:audio-generation
  - urn:ngm:class:conditional-generation
  - urn:ngm:class:diffusion-policy
dependsOn:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network
  - urn:ngm:class:backpropagation
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:latent-diffusion
implements:
  - urn:ngm:class:scalable-architecture
  - urn:ngm:class:conditional-generation
  - urn:ngm:class:score-based-model
contrastsWith:
  - urn:ngm:class:u-net
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:score-based-model
bridgesTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:self-attention
  - urn:ngm:class:vae
  - urn:ngm:class:adaptive-layer-normalisation
  - urn:ngm:class:patch-embedding
  - urn:ngm:class:flow-matching
supports:
  - urn:ngm:class:generative-ai
  - urn:ngm:class:computer-vision
  - urn:ngm:class:robotics
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:natural-language-processing
standardizedBy:
  - urn:ngm:class:iccv-2023
  - urn:ngm:class:neur-ips
  - urn:ngm:class:iclr
relatedTo:
  - urn:ngm:class:generative-ai
  - urn:ngm:class:flow-matching
  - urn:ngm:class:score-based-model
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:large-language-model
  - urn:ngm:class:vision-transformer
---

# Diffusion Transformer

A Diffusion Transformer (DiT) is a generative model architecture that replaces the convolutional U-Net backbone traditionally used in diffusion models with a scalable transformer architecture operating in a compressed latent space. DiT conditions the denoising process on class labels or text embeddings injected via adaptive layer normalisation or cross-attention, and processes image or video patches as sequences of tokens, enabling the model to leverage the scaling laws well-established for language transformers. Introduced by Peebles and Xie (2023), DiT demonstrated that transformer-based denoisers match or surpass U-Net performance while scaling predictably with model size and compute, forming the basis for state-of-the-art image and video generation systems including Stable Diffusion 3, FLUX, and OpenAI's Sora.
