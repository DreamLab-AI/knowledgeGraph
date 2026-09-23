---
okf_version: "0.2"
type: Class
title: ComfyUI Workflows
resource: urn:ngm:class:node-based-diffusion-pipeline-interface-workflows
domain: artificial-intelligence
description: ComfyUI Workflows are node-based directed acyclic graph (DAG) pipelines for Stable Diffusion and broader generative AI inference, implemented within the ComfyUI open-source graphical interface developed by comfyanonymous (first commit January 2023), in which discrete processing operations...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:generative-model
  - urn:ngm:class:node-based-diffusion-pipeline-interface
  - urn:ngm:class:generative-ai-pipeline
  - urn:ngm:class:node-based-visual-programming
  - urn:ngm:class:workflow-execution-engine
  - urn:ngm:class:inference-orchestration-system
  - urn:ngm:class:diffusion-model-interface
hasPart:
  - urn:ngm:class:node-based-diffusion-pipeline-interface-manager
  - urn:ngm:class:workflow-node
  - urn:ngm:class:node-link
  - urn:ngm:class:latent-tensor
  - urn:ngm:class:ksampler
  - urn:ngm:class:checkpointloader
  - urn:ngm:class:vaedecode
  - urn:ngm:class:cliptextencode
  - urn:ngm:class:controlnet-node
  - urn:ngm:class:lora-loader
  - urn:ngm:class:workflow-json-format
requires:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:model-checkpoint
  - urn:ngm:class:py-torch
  - urn:ngm:class:python-runtime
  - urn:ngm:class:node-based-diffusion-pipeline-interface
  - urn:ngm:class:stable-diffusion-image-model
enables:
  - urn:ngm:class:control-net-conditioning
  - urn:ngm:class:image-to-image
  - urn:ngm:class:ai-upscaling-and-super-resolution
  - urn:ngm:class:text-to-image-generation
  - urn:ngm:class:video-generation
  - urn:ngm:class:inpainting
  - urn:ngm:class:style-transfer
  - urn:ngm:class:image-to-image
  - urn:ngm:class:image-upscaling
  - urn:ngm:class:face-restoration
  - urn:ngm:class:lora-stacking
  - urn:ngm:class:latent-upscaling
  - urn:ngm:class:batch-image-processing
dependsOn:
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:flux-1
  - urn:ngm:class:sdxl
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:clip
  - urn:ngm:class:vae-encoder
  - urn:ngm:class:latent-space
implements:
  - urn:ngm:class:directed-acyclic-graph-execution
  - urn:ngm:class:diffusion-model-inference
  - urn:ngm:class:latent-diffusion-pipeline
  - urn:ngm:class:workflow-serialisation
  - urn:ngm:class:api-server-protocol
contrastsWith:
  - urn:ngm:class:automatic-1111-web-ui
  - urn:ngm:class:invoke-ai
  - urn:ngm:class:hugging-face-diffusers
  - urn:ngm:class:fooocus
  - urn:ngm:class:draw-things
bridgesTo:
  - urn:ngm:class:ai-infrastructure
uses:
  - urn:ngm:class:node-based-diffusion-pipeline-interface-manager
  - urn:ngm:class:cuda
  - urn:ngm:class:hugging-face-hub
  - urn:ngm:class:json-data-interchange-format-serialisation
  - urn:ngm:class:py-torch
  - urn:ngm:class:rest-api
  - urn:ngm:class:web-socket-protocol
  - urn:ngm:class:png-metadata-embedding
  - urn:ngm:class:hugging-face-hub
supports:
  - urn:ngm:class:control-net
  - urn:ngm:class:real-esrgan
  - urn:ngm:class:gfpgan
  - urn:ngm:class:ai-upscaling-and-super-resolution
  - urn:ngm:class:temporal-motion-diffusion-adapter
  - urn:ngm:class:inpainting
  - urn:ngm:class:ip-adapter
  - urn:ngm:class:lo-ra
  - urn:ngm:class:lo-ra
  - urn:ngm:class:wan2-1-video
  - urn:ngm:class:real-esrgan
  - urn:ngm:class:gfpgan
standardizedBy:
  - urn:ngm:class:node-based-diffusion-pipeline-interface-api-specification
  - urn:ngm:class:comfy-org-github-organisation
  - urn:ngm:class:openart-workflow-registry
  - urn:ngm:class:civitai-workflow-sharing
relatedTo:
  - urn:ngm:class:sdxl
  - urn:ngm:class:video-generation
  - urn:ngm:class:ai-upscaling-and-super-resolution
  - urn:ngm:class:temporal-motion-diffusion-adapter
  - urn:ngm:class:control-net-and-similar-spatial-conditioning-systems
  - urn:ngm:class:flux-1
  - urn:ngm:class:generative-ai
  - urn:ngm:class:image-generation
  - urn:ngm:class:inpainting
  - urn:ngm:class:ip-adapter
  - urn:ngm:class:stable-diffusion-image-model
---

# ComfyUI Workflows

ComfyUI Workflows are node-based directed acyclic graph (DAG) pipelines for Stable Diffusion and broader generative AI inference, implemented within the ComfyUI open-source graphical interface developed by comfyanonymous (first commit January 2023), in which discrete processing operations...
