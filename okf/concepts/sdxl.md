---
okf_version: "0.2"
type: Class
title: SDXL
resource: urn:ngm:class:sdxl
domain: ai
description: "SDXL (Stable Diffusion XL) is a large-scale latent diffusion model released by Stability AI in 2023, comprising a 3.5-billion-parameter UNet and an ensemble of two CLIP text encoders that condition image generation at native 1024×1024 resolution. It introduces a two-stage architecture — a base model followed by a refinement model — and supports advanced conditioning mechanisms including aesthetic "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:diffusion-models
enables:
  - urn:ngm:class:image-generation
  - urn:ngm:class:lo-ra-fine-tuning
contrastsWith:
  - urn:ngm:class:stable-diffusion-image-model
uses:
  - urn:ngm:class:vae
  - urn:ngm:class:clip-encoder
  - urn:ngm:class:classifier-free-guidance
relatedTo:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:hugging-face-diffusers
---

# SDXL

SDXL (Stable Diffusion XL) is a large-scale latent diffusion model released by Stability AI in 2023, comprising a 3.5-billion-parameter UNet and an ensemble of two CLIP text encoders that condition image generation at native 1024×1024 resolution. It introduces a two-stage architecture — a base model followed by a refinement model — and supports advanced conditioning mechanisms including aesthetic scoring and crop coordinates.
