---
okf_version: "0.2"
type: Class
title: Fooocus
resource: urn:ngm:class:fooocus
domain: artificial-intelligence
description: Fooocus is an open-source desktop image-generation interface for Stable Diffusion XL released in August 2023 by Lvmin Zhang (GitHub handle lllyasviel, originator of ControlNet, IC-Light, Forge, Paints-Undo, FramePack and OmniControl), conceived as a deliberate philosophical and ergonomic reaction...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:ai-application
  - urn:ngm:class:stable-diffusion-frontend
  - urn:ngm:class:generative-ai-application
  - urn:ngm:class:open-source-software
  - urn:ngm:class:local-image-generation-interface
  - urn:ngm:class:gradio-application
hasPart:
  - urn:ngm:class:ip-adapter
  - urn:ngm:class:control-net
  - urn:ngm:class:gradio-web-ui
  - urn:ngm:class:prompt-expansion-engine
  - urn:ngm:class:style-preset-library
  - urn:ngm:class:automatic-refiner-scheduler
  - urn:ngm:class:inpaint-pipeline
  - urn:ngm:class:ip-adapter
  - urn:ngm:class:faceswap-module
  - urn:ngm:class:control-net
  - urn:ngm:class:automatic-freeu-module
  - urn:ngm:class:lora-blending-module
requires:
  - urn:ngm:class:cuda
  - urn:ngm:class:py-torch
  - urn:ngm:class:python-runtime
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:cuda
  - urn:ngm:class:gradio-framework
  - urn:ngm:class:gpu-with-4-8gb-vram
enables:
  - urn:ngm:class:face-swap
  - urn:ngm:class:ai-art-generation
  - urn:ngm:class:outpainting
  - urn:ngm:class:privacy-preserving-image-generation
  - urn:ngm:class:text-to-image-generation
  - urn:ngm:class:image-to-image-translation
  - urn:ngm:class:inpainting
  - urn:ngm:class:style-transfer
  - urn:ngm:class:face-swap
  - urn:ngm:class:ai-art-generation
dependsOn:
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:vae
  - urn:ngm:class:u-net
  - urn:ngm:class:text-encoder
  - urn:ngm:class:control-net
implements:
  - urn:ngm:class:control-net-conditioning
  - urn:ngm:class:ip-adapter
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:sdxl
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:sdxl
  - urn:ngm:class:prompt-expansion
  - urn:ngm:class:ip-adapter
  - urn:ngm:class:freeu-free-lunch-rebalancing
contrastsWith:
  - urn:ngm:class:node-based-diffusion-pipeline-interface
  - urn:ngm:class:automatic-1111-web-ui
  - urn:ngm:class:invoke-ai
  - urn:ngm:class:swarmui
  - urn:ngm:class:forge-webui
  - urn:ngm:class:midjourney-text-to-image-service
  - urn:ngm:class:dall-e-3
  - urn:ngm:class:adobe-firefly
bridgesTo:
  - urn:ngm:class:ai-infrastructure
uses:
  - urn:ngm:class:clip
  - urn:ngm:class:dpm-plus-plus-2m-karras-sampler
  - urn:ngm:class:lcm-sampler
  - urn:ngm:class:lightning-sampler
  - urn:ngm:class:sdxl-vae-fp16-fix
  - urn:ngm:class:gpt-2-prompt-expansion
  - urn:ngm:class:clip
supports:
  - urn:ngm:class:concept-art
  - urn:ngm:class:creative-tools
  - urn:ngm:class:game-asset-generation
  - urn:ngm:class:game-asset-generation
  - urn:ngm:class:concept-art
  - urn:ngm:class:local-privacy-workflows
  - urn:ngm:class:educational-ai-demonstrations
standardizedBy:
  - urn:ngm:class:open-rail
  - urn:ngm:class:hugging-face-model-hub
  - urn:ngm:class:open-rail
  - urn:ngm:class:gplv3-licence
  - urn:ngm:class:gradio-specification
relatedTo:
  - urn:ngm:class:control-net
  - urn:ngm:class:hugging-face-diffusers
  - urn:ngm:class:stability-ai
  - urn:ngm:class:ic-light
  - urn:ngm:class:paints-undo
  - urn:ngm:class:framepack
  - urn:ngm:class:ruinedfooocus
  - urn:ngm:class:fooocus-mre
  - urn:ngm:class:simplesdxl2
---

# Fooocus

Fooocus is an open-source desktop image-generation interface for Stable Diffusion XL released in August 2023 by Lvmin Zhang (GitHub handle lllyasviel, originator of ControlNet, IC-Light, Forge, Paints-Undo, FramePack and OmniControl), conceived as a deliberate philosophical and ergonomic reaction...
