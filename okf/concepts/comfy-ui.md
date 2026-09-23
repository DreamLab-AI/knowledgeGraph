---
okf_version: "0.2"
type: Class
title: Comfy Ui
resource: urn:ngm:class:comfy-ui
domain: artificial-intelligence
description: ComfyUI is an open-source, node-graph based interface for building and executing generative-AI image and video pipelines, most commonly around diffusion models such as Stable Diffusion. Users assemble workflows by wiring together nodes for model loading, sampling, conditioning and post-processing, giving fine-grained control over the generation graph. Its modular design supports extensions, custom
maturity: emerging
quality: 0.9
is-a:
  - urn:ngm:class:generative-ai
  - urn:ngm:class:open-source-software
  - urn:ngm:class:workflow-automation
  - urn:ngm:class:node-based-visual-programming
hasPart:
  - urn:ngm:class:node-based-diffusion-pipeline-interface-workflows
  - urn:ngm:class:node-based-diffusion-pipeline-interface-manager
  - urn:ngm:class:node-based-diffusion-pipeline-interface-api-specification
  - urn:ngm:class:node-graph
  - urn:ngm:class:checkpoint-model
  - urn:ngm:class:ksampler
  - urn:ngm:class:web-socket-protocol
  - urn:ngm:class:rest-api
  - urn:ngm:class:python-runtime
requires:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:python
  - urn:ngm:class:py-torch
  - urn:ngm:class:aiohttp
enables:
  - urn:ngm:class:image-generation
  - urn:ngm:class:image-synthesis
  - urn:ngm:class:video-generation
  - urn:ngm:class:inpainting
  - urn:ngm:class:outpainting
  - urn:ngm:class:batch-image-processing
  - urn:ngm:class:text-to-image
  - urn:ngm:class:image-to-image
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:content-creation-pipeline
  - urn:ngm:class:digital-asset-workflow
dependsOn:
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:clip
  - urn:ngm:class:vae
  - urn:ngm:class:noise-schedule
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:latent-diffusion-pipeline
implements:
  - urn:ngm:class:workflow-automation
  - urn:ngm:class:content-production-workflow
  - urn:ngm:class:directed-acyclic-graph-execution
  - urn:ngm:class:workflow-json-format
  - urn:ngm:class:workflow-serialisation
contrastsWith:
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:automatic-1111-web-ui
  - urn:ngm:class:invoke-ai
uses:
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:node-graph
  - urn:ngm:class:clip
  - urn:ngm:class:vae
  - urn:ngm:class:lo-ra-fine-tuning
  - urn:ngm:class:noise-schedule
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:json-data-interchange-format-serialisation
  - urn:ngm:class:web-socket-protocol
  - urn:ngm:class:py-torch
supports:
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:control-net
  - urn:ngm:class:control-net-conditioning
  - urn:ngm:class:upscaling
  - urn:ngm:class:lo-ra-fine-tuning
  - urn:ngm:class:ip-adapter
  - urn:ngm:class:sdxl
  - urn:ngm:class:flux-1
  - urn:ngm:class:animatediff
  - urn:ngm:class:latent-tensor
standardizedBy:
  - urn:ngm:class:node-based-diffusion-pipeline-interface-api-specification
  - urn:ngm:class:comfy-org-github-organisation
partOf:
  - urn:ngm:class:generative-ai
  - urn:ngm:class:open-source-software
relatedTo:
  - urn:ngm:class:generative-model
  - urn:ngm:class:deep-generative-model
  - urn:ngm:class:score-based-generative-model
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:digital-asset-workflow
  - urn:ngm:class:image-to-image
  - urn:ngm:class:hugging-face-hub
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:neural-network
  - urn:ngm:class:inference-orchestration-system
---

# Comfy Ui

ComfyUI is an open-source, node-graph based interface for building and executing generative-AI image and video pipelines, most commonly around diffusion models such as Stable Diffusion. Users assemble workflows by wiring together nodes for model loading, sampling, conditioning and post-processing, giving fine-grained control over the generation graph. Its modular design supports extensions, custom nodes and reproducible, shareable workflows.
