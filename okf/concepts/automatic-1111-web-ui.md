---
okf_version: "0.2"
type: Class
title: AUTOMATIC1111 WebUI
resource: urn:ngm:class:automatic-1111-web-ui
domain: ai
description: AUTOMATIC1111 WebUI (also referred to as sd-webui or A1111) is an open-source, community-maintained browser-based graphical interface for running Stable Diffusion latent diffusion models locally on consumer and professional GPU hardware. Built in Python with a Gradio front end, it wraps the core Stable Diffusion inference pipeline in an accessible point-and-click UI that exposes text-to-image gene
maturity: established
quality: 0.85
is-a:
  - urn:ngm:class:open-generative-ai-tools
  - urn:ngm:class:image-generation
  - urn:ngm:class:generative-ai
hasPart:
  - urn:ngm:class:text-to-image
  - urn:ngm:class:image-to-image
  - urn:ngm:class:inpainting
  - urn:ngm:class:outpainting
  - urn:ngm:class:upscaling
  - urn:ngm:class:kohya-dreambooth-and-similar
  - urn:ngm:class:textual-inversion
  - urn:ngm:class:sampler
requires:
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:python
  - urn:ngm:class:gradio
  - urn:ngm:class:clip
  - urn:ngm:class:vae
  - urn:ngm:class:u-net
enables:
  - urn:ngm:class:image-to-image
  - urn:ngm:class:inpainting
  - urn:ngm:class:text-to-image
  - urn:ngm:class:outpainting
  - urn:ngm:class:upscaling
  - urn:ngm:class:kohya-dreambooth-and-similar
  - urn:ngm:class:local-ai
  - urn:ngm:class:textual-inversion
dependsOn:
  - urn:ngm:class:python
  - urn:ngm:class:gradio
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:u-net
  - urn:ngm:class:clip
  - urn:ngm:class:vae
  - urn:ngm:class:attention-mechanism
implements:
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:classifier-free-guidance
  - urn:ngm:class:sampler
contrastsWith:
  - urn:ngm:class:comfy-ui
  - urn:ngm:class:invoke-ai
  - urn:ngm:class:comfy-ui
uses:
  - urn:ngm:class:lo-ra
  - urn:ngm:class:textual-inversion
  - urn:ngm:class:clip
  - urn:ngm:class:vae
  - urn:ngm:class:classifier-free-guidance
  - urn:ngm:class:control-net
  - urn:ngm:class:hypernetwork
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:stable-diffusion-image-model
supports:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:generative-ai
  - urn:ngm:class:stable-video-diffusion
  - urn:ngm:class:open-generative-ai-tools
  - urn:ngm:class:prompt-engineering
standardizedBy:
  - urn:ngm:class:hugging-face
  - urn:ngm:class:civitai
relatedTo:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:stable-diffusion-xl
  - urn:ngm:class:civitai
  - urn:ngm:class:hugging-face
  - urn:ngm:class:flux-1
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:image-generation
---

# AUTOMATIC1111 WebUI

AUTOMATIC1111 WebUI (also referred to as sd-webui or A1111) is an open-source, community-maintained browser-based graphical interface for running Stable Diffusion latent diffusion models locally on consumer and professional GPU hardware. Built in Python with a Gradio front end, it wraps the core Stable Diffusion inference pipeline in an accessible point-and-click UI that exposes text-to-image generation, image-to-image transformation, inpainting, outpainting, upscaling, model training tabs, and an extensible plugin architecture. Since its first public release in August 2022, it has accumulated over 160,000 GitHub stars, making it one of the most-starred open-source AI repositories in history and the dominant entry point for local Stable Diffusion experimentation.
