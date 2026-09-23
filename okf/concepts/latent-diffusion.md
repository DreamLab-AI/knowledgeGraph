---
okf_version: "0.2"
type: Class
title: Latent Diffusion
resource: urn:ngm:class:latent-diffusion
domain: artificial-intelligence
description: Latent Diffusion Models (LDMs) are a class of generative models that perform the iterative denoising diffusion process within the compressed latent space of a pre-trained variational autoencoder (VAE), rather than directly in high-dimensional pixel space. By encoding images into a compact, semantically rich latent representation, LDMs dramatically reduce training and inference compute whilst prese
maturity: established
quality: 0.73
is-a:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:diffusion-models
hasPart:
  - urn:ngm:class:encoder-decoder-architecture
  - urn:ngm:class:denoising-score-matching
  - urn:ngm:class:noise-schedule
  - urn:ngm:class:encoder-decoder-architecture
requires:
  - urn:ngm:class:vae
  - urn:ngm:class:u-net
  - urn:ngm:class:cross-attention
enables:
  - urn:ngm:class:text-to-image
  - urn:ngm:class:image-generation
  - urn:ngm:class:inpainting
  - urn:ngm:class:image-to-image-translation
  - urn:ngm:class:video-generation
  - urn:ngm:class:inpainting
implements:
  - urn:ngm:class:score-based-generative-model
contrastsWith:
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:normalising-flow
bridgesTo:
  - urn:ngm:class:augmented-reality-content-creation
  - urn:ngm:class:digital-twin
  - urn:ngm:class:ar-content-creation
uses:
  - urn:ngm:class:clip
  - urn:ngm:class:classifier-free-guidance
  - urn:ngm:class:low-rank-adaptation
  - urn:ngm:class:ddim-sampling
partOf:
  - urn:ngm:class:diffusion-model
relatedTo:
  - urn:ngm:class:generative-model
  - urn:ngm:class:neural-network-latent-space
  - urn:ngm:class:transformer
  - urn:ngm:class:foundation-model
  - urn:ngm:class:latent-space
---

# Latent Diffusion

Latent Diffusion Models (LDMs) are a class of generative models that perform the iterative denoising diffusion process within the compressed latent space of a pre-trained variational autoencoder (VAE), rather than directly in high-dimensional pixel space. By encoding images into a compact, semantically rich latent representation, LDMs dramatically reduce training and inference compute whilst preserving perceptual quality, because the VAE absorbs the high-frequency, imperceptual detail that would otherwise burden the diffusion process. Conditioning on text, image, or other modalities is achieved via cross-attention layers inside a U-Net denoising backbone, enabling high-fidelity text-to-image synthesis, image editing, and multimodal generation at practical hardware budgets. Stable Diffusion, the most widely deployed open-source implementation, demonstrated that consumer GPUs could run production-quality image synthesis, catalysing a broad ecosystem of fine-tuning methods and downstream applications.
