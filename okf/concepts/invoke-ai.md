---
okf_version: "0.2"
type: Class
title: InvokeAI
resource: urn:ngm:class:invoke-ai
domain: ai
description: InvokeAI is an open-source, locally-deployed application and toolkit for running latent diffusion models — principally Stable Diffusion and its derivatives — via a browser-based canvas interface, a node-based workflow editor, and a Python API. It provides professional-grade image synthesis capabilities including text-to-image, image-to-image, inpainting, outpainting, and ControlNet-guided generati
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:generative-ai
hasPart:
  - urn:ngm:class:node-based-editor
  - urn:ngm:class:node-based-editor
  - urn:ngm:class:unified-canvas
  - urn:ngm:class:model-manager
requires:
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:python-runtime
  - urn:ngm:class:stable-diffusion-image-model
enables:
  - urn:ngm:class:text-to-image
  - urn:ngm:class:image-to-image
  - urn:ngm:class:inpainting
  - urn:ngm:class:outpainting
  - urn:ngm:class:inference
  - urn:ngm:class:inference
contrastsWith:
  - urn:ngm:class:automatic1111
  - urn:ngm:class:midjourney-text-to-image-service
  - urn:ngm:class:comfy-ui
  - urn:ngm:class:midjourney-text-to-image-service
bridgesTo:
  - urn:ngm:class:creative-tools
  - urn:ngm:class:digital-content-creation
  - urn:ngm:class:creative-tools
uses:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:control-net
  - urn:ngm:class:lo-ra
  - urn:ngm:class:textual-inversion
  - urn:ngm:class:text-encoder
  - urn:ngm:class:text-encoder
relatedTo:
  - urn:ngm:class:image-generation
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:open-source-ai
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:fine-tuning
---

# InvokeAI

InvokeAI is an open-source, locally-deployed application and toolkit for running latent diffusion models — principally Stable Diffusion and its derivatives — via a browser-based canvas interface, a node-based workflow editor, and a Python API. It provides professional-grade image synthesis capabilities including text-to-image, image-to-image, inpainting, outpainting, and ControlNet-guided generation without reliance on cloud-hosted services. The platform is designed for creative professionals and researchers who require reproducible, privacy-preserving, and customisable generative image workflows on consumer-grade GPU hardware. Its modular architecture supports community fine-tuned model variants, LoRA adapters, and textual inversion embeddings, making it a central hub in the open-source generative image ecosystem.
