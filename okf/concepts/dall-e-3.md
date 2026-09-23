---
okf_version: "0.2"
type: Class
title: DALL-E 3
resource: urn:ngm:class:dall-e-3
domain: ai
description: DALL-E 3 is a text-to-image generation model developed by OpenAI that produces images from natural language descriptions. It improves prompt adherence over earlier versions by reformulating user prompts with a language model.
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:text-to-image-generation
  - urn:ngm:class:deep-generative-model
  - urn:ngm:class:generative-model
  - urn:ngm:class:generative-ai
hasPart:
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:vae
  - urn:ngm:class:clip-encoder
  - urn:ngm:class:vision-transformer
  - urn:ngm:class:diffusion-model
requires:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:language-model
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:vae
  - urn:ngm:class:clip-encoder
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:clip
  - urn:ngm:class:vision-transformer
enables:
  - urn:ngm:class:image-generation
  - urn:ngm:class:creative-tools
  - urn:ngm:class:generative-ai-engineering
  - urn:ngm:class:generative-ai
  - urn:ngm:class:generative-content
dependsOn:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:language-model
  - urn:ngm:class:clip
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:clip-encoder
  - urn:ngm:class:vae
implements:
  - urn:ngm:class:latent-diffusion-model-training
  - urn:ngm:class:text-to-image-generation
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:contrastive-learning
contrastsWith:
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:midjourney-text-to-image-service
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:generative-adversarial-networks
bridgesTo:
  - urn:ngm:class:openai-research-organisation
  - urn:ngm:class:generative-ai
  - urn:ngm:class:text-to-image-generation
  - urn:ngm:class:generative-ai-engineering
uses:
  - urn:ngm:class:vision-transformer
  - urn:ngm:class:clip-encoder
  - urn:ngm:class:vae
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:deep-generative-model
  - urn:ngm:class:language-model
supports:
  - urn:ngm:class:generative-ai
  - urn:ngm:class:creative-tools
  - urn:ngm:class:generative-ai-engineering
  - urn:ngm:class:image-generation
  - urn:ngm:class:generative-design-tool
standardizedBy:
  - urn:ngm:class:generative-ai
  - urn:ngm:class:generative-model
relatedTo:
  - urn:ngm:class:generative-ai
  - urn:ngm:class:deep-generative-model
  - urn:ngm:class:image-generation
  - urn:ngm:class:generative-ai-engineering
  - urn:ngm:class:clip
  - urn:ngm:class:latent-diffusion-model-training
  - urn:ngm:class:generative-model
  - urn:ngm:class:generative-design-tool
---

# DALL-E 3

DALL-E 3 is a text-to-image generation model developed by OpenAI that produces images from natural language descriptions. It improves prompt adherence over earlier versions by reformulating user prompts with a language model.
