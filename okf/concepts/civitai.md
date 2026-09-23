---
okf_version: "0.2"
type: Class
title: Civitai
resource: urn:ngm:class:civitai
domain: ai
description: "Civitai is a community-driven online platform for sharing, discovering, and downloading fine-tuned generative AI image models, primarily Stable Diffusion checkpoints, LoRA adaptors, embeddings, and VAEs, enabling practitioners and artists to distribute specialised model weights trained on specific styles, characters, or concepts without requiring the infrastructure overhead of operating their own "
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:generative-ai
  - urn:ngm:class:model-registry
hasPart:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:lo-ra-fine-tuning
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:text-to-image
requires:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:content-moderation
enables:
  - urn:ngm:class:creative-ai
  - urn:ngm:class:text-to-image
  - urn:ngm:class:image-generation
  - urn:ngm:class:open-source-ai
dependsOn:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:generative-model
implements:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:model-registry
  - urn:ngm:class:creator-economy
contrastsWith:
  - urn:ngm:class:hugging-face-model-hub
  - urn:ngm:class:midjourney-text-to-image-service
  - urn:ngm:class:dall-e-3
  - urn:ngm:class:adobe-firefly
uses:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:image-generation
  - urn:ngm:class:lo-ra-fine-tuning
  - urn:ngm:class:generative-model
  - urn:ngm:class:deep-learning
  - urn:ngm:class:vae
supports:
  - urn:ngm:class:open-source-ai
  - urn:ngm:class:creative-ai
  - urn:ngm:class:image-generation
  - urn:ngm:class:generative-ai
standardizedBy:
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:safetensors-format
  - urn:ngm:class:eu-ai-act-regulatory-instrument
relatedTo:
  - urn:ngm:class:open-source-ai
  - urn:ngm:class:content-moderation
  - urn:ngm:class:generative-model
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:flux
  - urn:ngm:class:comfy-ui
  - urn:ngm:class:textual-inversion
  - urn:ngm:class:control-net
  - urn:ngm:class:deepfake-detection
  - urn:ngm:class:ai-regulation
  - urn:ngm:class:copyright
---

# Civitai

Civitai is a community-driven online platform for sharing, discovering, and downloading fine-tuned generative AI image models, primarily Stable Diffusion checkpoints, LoRA adaptors, embeddings, and VAEs, enabling practitioners and artists to distribute specialised model weights trained on specific styles, characters, or concepts without requiring the infrastructure overhead of operating their own model registry. It functions as both a social network for AI artists and a technical marketplace for model artefacts.
