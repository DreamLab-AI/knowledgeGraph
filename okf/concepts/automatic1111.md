---
okf_version: "0.2"
type: Class
title: Automatic1111
resource: urn:ngm:class:automatic1111
domain: ai
description: An open-source, browser-based graphical user interface for Stable Diffusion and compatible diffusion models, providing extensive control over image-generation parameters, model loading, and an extensible plugin architecture. Automatic1111 (AUTOMATIC1111/stable-diffusion-webui on GitHub) became the dominant community-facing inference frontend for locally hosted image-generation models from 2022 onw
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:image-generation
  - urn:ngm:class:generative-ai
  - urn:ngm:class:open-source-software
hasPart:
  - urn:ngm:class:sampling
  - urn:ngm:class:vae
  - urn:ngm:class:classifier-free-guidance
  - urn:ngm:class:textual-inversion
  - urn:ngm:class:lo-ra
  - urn:ngm:class:hypernetwork
  - urn:ngm:class:control-net
  - urn:ngm:class:gradio
  - urn:ngm:class:u-net
  - urn:ngm:class:clip
requires:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:gpu-acceleration
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:clip
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:python
  - urn:ngm:class:py-torch
enables:
  - urn:ngm:class:inpainting
  - urn:ngm:class:outpainting
  - urn:ngm:class:image-editing
  - urn:ngm:class:text-to-image
  - urn:ngm:class:image-to-image
  - urn:ngm:class:high-resolution-upscaling
  - urn:ngm:class:text-to-image-generation
  - urn:ngm:class:prompt-engineering
dependsOn:
  - urn:ngm:class:gpu-acceleration
  - urn:ngm:class:python
  - urn:ngm:class:gradio
  - urn:ngm:class:py-torch
  - urn:ngm:class:cuda
  - urn:ngm:class:stable-diffusion-image-model
implements:
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:denoising-diffusion-probabilistic-models
  - urn:ngm:class:classifier-free-guidance
  - urn:ngm:class:textual-inversion
contrastsWith:
  - urn:ngm:class:comfy-ui
  - urn:ngm:class:stable-diffusion-webui-forge
  - urn:ngm:class:invoke-ai
  - urn:ngm:class:fooocus
  - urn:ngm:class:flux
uses:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:gpu-acceleration
  - urn:ngm:class:vae
  - urn:ngm:class:classifier-free-guidance
  - urn:ngm:class:clip
  - urn:ngm:class:lo-ra
  - urn:ngm:class:textual-inversion
  - urn:ngm:class:u-net
  - urn:ngm:class:sampling
supports:
  - urn:ngm:class:sdxl
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:lo-ra
  - urn:ngm:class:control-net
  - urn:ngm:class:textual-inversion
  - urn:ngm:class:civitai
  - urn:ngm:class:hypernetwork
standardizedBy:
  - urn:ngm:class:stability-ai
  - urn:ngm:class:hugging-face
relatedTo:
  - urn:ngm:class:sdxl
  - urn:ngm:class:civitai
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:open-source-software
  - urn:ngm:class:comfy-ui
  - urn:ngm:class:control-net
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:generative-ai
  - urn:ngm:class:black-forest-labs
  - urn:ngm:class:stable-diffusion-3
---

# Automatic1111

An open-source, browser-based graphical user interface for Stable Diffusion and compatible diffusion models, providing extensive control over image-generation parameters, model loading, and an extensible plugin architecture. Automatic1111 (AUTOMATIC1111/stable-diffusion-webui on GitHub) became the dominant community-facing inference frontend for locally hosted image-generation models from 2022 onwards.
