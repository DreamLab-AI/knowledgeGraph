---
okf_version: "0.2"
type: Class
title: ComfyUI API Specification
resource: urn:ngm:class:node-based-diffusion-pipeline-interface-api-specification
domain: ai
description: The programmatic interface specification for ComfyUI, a node-based generative AI workflow engine, defining JSON-serialised graph representations (prompt API), WebSocket-based progress streaming, queue management endpoints, and model loading conventions that allow headless or remote execution of image and video generation pipelines.
maturity: emerging
quality: 0.9
is-a:
  - urn:ngm:class:node-based-diffusion-pipeline-interface-workflows
  - urn:ngm:class:rest-api
  - urn:ngm:class:workflow-automation
  - urn:ngm:class:inference-orchestration-system
hasPart:
  - urn:ngm:class:prompt-endpoint
  - urn:ngm:class:web-socket-protocol
  - urn:ngm:class:queue-management-api
  - urn:ngm:class:object-info-endpoint
  - urn:ngm:class:workflow-json-format
  - urn:ngm:class:workflow-node
  - urn:ngm:class:node-link
  - urn:ngm:class:directed-acyclic-graph-execution
  - urn:ngm:class:history-endpoint
  - urn:ngm:class:file-upload-endpoint
requires:
  - urn:ngm:class:comfy-ui
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:python-runtime
  - urn:ngm:class:comfy-ui
  - urn:ngm:class:aiohttp
  - urn:ngm:class:py-torch
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:model-checkpoint
enables:
  - urn:ngm:class:content-creation-pipeline
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:batch-image-processing
  - urn:ngm:class:inference-orchestration-system
  - urn:ngm:class:image-generation
  - urn:ngm:class:text-to-image-generation
  - urn:ngm:class:image-to-image
  - urn:ngm:class:video-generation
  - urn:ngm:class:inpainting
  - urn:ngm:class:digital-asset-workflow
  - urn:ngm:class:workflow-serialisation
dependsOn:
  - urn:ngm:class:comfy-ui
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:model-checkpoint
  - urn:ngm:class:latent-diffusion-pipeline
implements:
  - urn:ngm:class:directed-acyclic-graph-execution
  - urn:ngm:class:workflow-json-format
  - urn:ngm:class:workflow-serialisation
  - urn:ngm:class:rest-api
  - urn:ngm:class:web-socket-protocol
  - urn:ngm:class:node-based-visual-programming
contrastsWith:
  - urn:ngm:class:invoke-ai
  - urn:ngm:class:automatic-1111-web-ui
uses:
  - urn:ngm:class:generative-ai
  - urn:ngm:class:node-based-diffusion-pipeline-interface-client
  - urn:ngm:class:json-data-interchange-format-serialisation
  - urn:ngm:class:aiohttp
  - urn:ngm:class:web-socket-protocol
  - urn:ngm:class:rest-api
  - urn:ngm:class:png-metadata-embedding
  - urn:ngm:class:py-torch
  - urn:ngm:class:python-runtime
supports:
  - urn:ngm:class:control-net
  - urn:ngm:class:lo-ra
  - urn:ngm:class:ip-adapter
  - urn:ngm:class:sdxl
  - urn:ngm:class:flux-1
  - urn:ngm:class:animatediff
  - urn:ngm:class:vae
  - urn:ngm:class:clip
  - urn:ngm:class:ksampler
  - urn:ngm:class:checkpointloader
  - urn:ngm:class:latent-diffusion-pipeline
  - urn:ngm:class:latent-tensor
  - urn:ngm:class:generative-ai
standardizedBy:
  - urn:ngm:class:comfy-org-git-hub-organisation
  - urn:ngm:class:comfy-org-github-organisation
relatedTo:
  - urn:ngm:class:node-based-diffusion-pipeline-interface-manager
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:invoke-ai
  - urn:ngm:class:automatic-1111-web-ui
  - urn:ngm:class:node-based-diffusion-pipeline-interface-client
  - urn:ngm:class:hugging-face-hub
  - urn:ngm:class:openart-workflow-registry
  - urn:ngm:class:civitai-workflow-sharing
  - urn:ngm:class:node-based-visual-programming
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:generative-ai
  - urn:ngm:class:open-source-software
  - urn:ngm:class:content-production-workflow
  - urn:ngm:class:comfy-org-2024-workflow-json-spec
---

# ComfyUI API Specification

The programmatic interface specification for ComfyUI, a node-based generative AI workflow engine, defining JSON-serialised graph representations (prompt API), WebSocket-based progress streaming, queue management endpoints, and model loading conventions that allow headless or remote execution of image and video generation pipelines.
