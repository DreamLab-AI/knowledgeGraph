---
okf_version: "0.2"
type: Class
title: Stable Diffusion Image Model
resource: urn:ngm:class:stable-diffusion-image-model
domain: ai
description: Stable Diffusion is an open-source latent diffusion model developed by Stability AI in collaboration with CompVis and Runway, released in 2022, capable of generating high-quality images from text prompts. It operates in a compressed latent space rather than pixel space, dramatically reducing computational requirements compared to earlier diffusion models. The model supports text-to-image, image-to
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:text-to-image
enables:
  - urn:ngm:class:ip-adapter
  - urn:ngm:class:control-net
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:style-transfer
dependsOn:
  - urn:ngm:class:model-training
  - urn:ngm:class:open-source-software
contrastsWith:
  - urn:ngm:class:diffusion-models
uses:
  - urn:ngm:class:transformer
  - urn:ngm:class:cross-attention
  - urn:ngm:class:attention-mechanism
relatedTo:
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:generative-model
  - urn:ngm:class:image-generation
  - urn:ngm:class:text-to-image
  - urn:ngm:class:inpainting
---

# Stable Diffusion Image Model

Stable Diffusion is an open-source latent diffusion model developed by Stability AI in collaboration with CompVis and Runway, released in 2022, capable of generating high-quality images from text prompts. It operates in a compressed latent space rather than pixel space, dramatically reducing computational requirements compared to earlier diffusion models. The model supports text-to-image, image-to-image, and inpainting tasks, and has become the foundation for a large ecosystem of fine-tuned variants and extension tools.
