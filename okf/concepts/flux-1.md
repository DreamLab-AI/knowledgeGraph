---
okf_version: "0.2"
type: Class
title: Flux.1
resource: urn:ngm:class:flux-1
domain: ai
description: Flux.1 is a family of open-weight text-to-image generative models developed by Black Forest Labs, founded by former Stability AI researchers including Robin Rombach, the co-creator of Latent Diffusion. Released in August 2024, Flux.1 employs a hybrid architecture combining multimodal and parallel diffusion transformer (DiT) blocks, achieving state-of-the-art image quality and prompt adherence that
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:generative-ai
enables:
  - urn:ngm:class:inpainting
  - urn:ngm:class:open-source-ai
dependsOn:
  - urn:ngm:class:model-training
contrastsWith:
  - urn:ngm:class:stable-diffusion-image-model
uses:
  - urn:ngm:class:neural-network-architecture
  - urn:ngm:class:deep-learning
supports:
  - urn:ngm:class:lo-ra-do-ra-etc
  - urn:ngm:class:node-based-diffusion-pipeline-interface-workflows
relatedTo:
  - urn:ngm:class:text-to-image
  - urn:ngm:class:diffusion-models
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:image-generation
---

# Flux.1

Flux.1 is a family of open-weight text-to-image generative models developed by Black Forest Labs, founded by former Stability AI researchers including Robin Rombach, the co-creator of Latent Diffusion. Released in August 2024, Flux.1 employs a hybrid architecture combining multimodal and parallel diffusion transformer (DiT) blocks, achieving state-of-the-art image quality and prompt adherence that surpasses earlier diffusion models on benchmarks such as GenEval and T2I-CompBench. The family offers three variants — Flux.1 [pro], Flux.1 [dev], and Flux.1 [schnell] — spanning commercial API, open-weights research, and fast inference use cases respectively.
