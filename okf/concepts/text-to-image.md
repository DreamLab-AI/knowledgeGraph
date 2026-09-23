---
okf_version: "0.2"
type: Class
title: Text-to-Image
resource: urn:ngm:class:text-to-image
domain: artificial-intelligence
description: A generative AI capability that synthesises visual imagery from natural language textual descriptions. Systems such as diffusion models iteratively denoise latent representations conditioned on text embeddings, enabling creation of photorealistic and artistic images from prompts without requiring explicit pixel-level instructions.
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:generative-ai
requires:
  - urn:ngm:class:text-embeddings
  - urn:ngm:class:training-dataset
  - urn:ngm:class:gpu-compute
enables:
  - urn:ngm:class:3-d-content-generation
  - urn:ngm:class:synthetic-data-generation
  - urn:ngm:class:digital-art
  - urn:ngm:class:inpainting
contrastsWith:
  - urn:ngm:class:text-to-video-generation
bridgesTo:
  - urn:ngm:class:digital-content-creation
  - urn:ngm:class:virtual-world-generation
uses:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:transformer
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:clip
  - urn:ngm:class:text-encoder
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:vae
partOf:
  - urn:ngm:class:generative-ai-engineering
  - urn:ngm:class:multimodal-ai-architecture-ai
relatedTo:
  - urn:ngm:class:image-generation
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:fine-tuning
---

# Text-to-Image

A generative AI capability that synthesises visual imagery from natural language textual descriptions. Systems such as diffusion models iteratively denoise latent representations conditioned on text embeddings, enabling creation of photorealistic and artistic images from prompts without requiring explicit pixel-level instructions.
